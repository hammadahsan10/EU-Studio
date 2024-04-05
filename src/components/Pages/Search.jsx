import React, { useContext, useEffect, useState } from 'react';
import './css/Search.scss';
import Container from "../fragment/Container";
import { useSelector } from "react-redux";
import MusicCard from "../fragment/MusicCard";
import SearchMusic from "../assets/img/searchMusic.svg";
import SearchMusicMp3 from "../assets/img/searchMusicMp3.svg";
import SearchMusicDisc from "../assets/img/searchMusicDisc.svg";
import ArrowUp from '../assets/img/left.svg';
import MobileTopNavigation from '../fragment/MobileTopNavigation';
import Navigation from '../fragment/Navigation';
import { Skeleton } from "@material-ui/lab";
import SideBar from '../fragment/SideBar';
import { ThemeContext } from '../../api/Theme';

const Search = () => {

    const [screenSize, setScreenSize] = useState(undefined);
    const { playlists, search } = useSelector(state => state.musicReducer);
    const [searchResult, setSearchResult] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const useStyle = useContext(ThemeContext);

    useEffect(() => {
        setSearchResult(playlists.filter((i) => (
            (i.name.toLowerCase().startsWith(search))
            ||
            (i.author_name.toLowerCase().startsWith(search))
            ||
            (i.musicName.toLowerCase().startsWith(search))
            ||
            (i.lang && i.lang.toLowerCase().startsWith(search))
        )));
    }, [search, playlists]);

    useEffect(() => {
        setLoaded(true);
    }, []);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    return (

        <>
            <div style={useStyle.component} className={"home-container"}>
                {!loaded ? (
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"} />
                    </div>
                ) : (
                    <>
                        {screenSize <= 970 ? <MobileTopNavigation /> : <Navigation />}
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar />
                            </div>
                            <div className="main-home">
                                <Container>
                                    {
                                        (search === "" || search === null)
                                            ?
                                            <div className={"Search"}>
                                                <div className="Search-img">
                                                    <img className={"Rotate-img"} src={SearchMusicDisc} alt="search-music-icon" />
                                                    <img src={SearchMusicMp3} alt="search-music-icon" />
                                                    <img src={SearchMusic} alt="search-music-icon" />
                                                    <img className={"Arrow"} src={ArrowUp} alt="" />
                                                </div>
                                            </div>
                                            :
                                            <div className={"Search-result"}>
                                                {
                                                    searchResult.length === 0
                                                        ?
                                                        <div className={"Search-fallback"}>
                                                            No result found.
                                                        </div>
                                                        :
                                                        searchResult.map((item) => (
                                                            <MusicCard key={item.id} music={item} />
                                                        ))
                                                }
                                            </div>
                                    }
                                </Container>

                            </div>
                        </section>
                    </>
                )}
            </div>
        </>

    );
}

export default Search;