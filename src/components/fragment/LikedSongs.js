import React, { useContext, useEffect, useState } from "react";
import '../Pages/css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../api/Theme";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import Playlist from "../fragment/Playlist";
import { Skeleton } from "@material-ui/lab";
import SigninForm from "../fragment/SignForm/SigninForm";
import SignupForm from "../fragment/SignForm/SignupForm";
import Search from "../Pages/Search";
import Profile from "../Pages/Profile";
import About from "../Pages/About";

function getCurrPage(pathName) {
    
    switch (pathName) {
        case "/home":
            return <MusicCardContainer />
        case "/home/search":
            return <Search />
        case "/home/profile":
            return <Profile />
        case "/home/add":
            return <AddMusic />
        case "/home/about":
            return <About />
        case "/home/signin":
            return <SigninForm />
        case "/home/signup":
            return <SignupForm />
        default:
            if (pathName.startsWith("/home/playlist/")) {
                return <Playlist />
            }
            return null
    }
}

function LikedSongs() {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MusicCardContainer />);
    const { playing, bannerOpen } = useSelector((state) => state.musicReducer);
    const [loaded, setLoaded] = useState(false);

    let pathname = window.location.pathname;

    useEffect(() => {
        setCurrPage(getCurrPage(pathname));
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const useStyle = useContext(ThemeContext);

    useEffect(() => {
        setCurrMusic(playing);
    }, [playing]);

    useEffect(() => {
        setLoaded(true);
    }, []);

    console.log("Page", Page)
    console.log("currMusic", currMusic)

    const isSignInOrSignUp = pathname === "/signin" || pathname === "/signup";

    return (
        <div style={useStyle.component} className={"home-container"}>
            {!loaded ? (
                <div className="Home-skeleton">
                    <Skeleton animation={"wave"} variant={"rect"} height={"100vh"} />
                </div>
            ) : (
                <>
                    {screenSize <= 970 ? <MobileTopNavigation /> : <Navigation />}
                    <section className={"home-music-container"}>
                        {!isSignInOrSignUp && (
                            <div className="sidebar-home">
                                <SideBar />
                            </div>
                        )}
                        <div className="main-home">{Page}</div>
                    </section>
                    {bannerOpen && (
                        <section className="current-large-banner">
                            <CurrentPlayingLarge />
                        </section>
                    )}
                    <React.Fragment>
                        {!isSignInOrSignUp &&
                            (currMusic ? <FooterMusicPlayer music={currMusic} /> : <FooterSelectMusic />)}
                        {screenSize <= 970 && <BottomNavigationMobile />}
                    </React.Fragment>
                </>
            )}
        </div>
    );
}

export default LikedSongs;