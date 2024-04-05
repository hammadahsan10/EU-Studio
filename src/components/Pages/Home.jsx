import React, { useContext, useEffect, useState } from "react";
import './css/Home.scss';
import Navigation from "../fragment/Navigation";
import MobileTopNavigation from "../fragment/MobileTopNavigation";
import SideBar from "../fragment/SideBar";
import FooterMusicPlayer from "../fragment/FooterMusicPlayer";
import BottomNavigationMobile from "../fragment/BottomNavigationMobile";
import MusicCardContainer from "../fragment/MusicCardContainer";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../api/Theme";
import Profile from "./Profile";
import AddMusic from "../fragment/AddMusic";
import FooterSelectMusic from "../fragment/FooterSelectMusic";
import CurrentPlayingLarge from "../fragment/CurrentPlayingLarge";
import Search from "./Search";
import About from "./About";
import Playlist from "../fragment/Playlist";
import { Skeleton } from "@material-ui/lab";
import SigninForm from "../fragment/SignForm/SigninForm";
import SignupForm from "../fragment/SignForm/SignupForm";


function Home() {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const { playing, bannerOpen } = useSelector((state) => state.musicReducer);
    const [loaded, setLoaded] = useState(false);

    let pathname = window.location.pathname;

  
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
                        <div className="main-home"><MusicCardContainer/></div>
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

export default Home;