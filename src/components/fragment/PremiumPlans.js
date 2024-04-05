import React, { useContext, useEffect, useState } from 'react';
import '../Pages/css/PremiumPlans.scss';
import { useSelector } from "react-redux";
import MobileTopNavigation from '../fragment/MobileTopNavigation';
import Navigation from '../fragment/Navigation';
import { Skeleton } from "@material-ui/lab";
import SideBar from '../fragment/SideBar';
import { ThemeContext } from '../../api/Theme';
import BottomNavigationMobile from './BottomNavigationMobile';

const PremiumPlans = () => {

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

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


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
                                <h1 style={{ textAlign: "center", marginTop: "40px" }}> Choose your subscription method</h1>
                                <div class="cards">

                                    <article className="plan [ card ]">
                                        <div className="inner">

                                            <span className="pricing">
                                                <span>
                                                    500/ <small>PKR</small>
                                                </span>
                                            </span>
                                            <h2 className="title">Weekly</h2>
                                            <p className="info">This plan includes a weekly premium subscription for E-Studio.</p>
                                            <br />
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>Premium Songs</strong>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>File sharing</strong>
                                                </li>
                                            </ul>
                                            <button className="button">
                                                Choose plan
                                            </button>
                                        </div>
                                    </article>
                                    <article className="plan2 [ card ]">
                                        <div className="inner">

                                            <span className="pricing">
                                                <span>
                                                    1000/ <small>PKR</small>
                                                </span>
                                            </span>
                                            <br/>
                                            <br/>
                                            <h2 className="title">Monthly</h2>
                                            <p className="info">This plan includes a monthly premium subscription for E-Studio.</p>
                                            <br />
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>Premium Songs</strong>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>File sharing</strong>
                                                </li>
                                            </ul>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <button className="button">
                                                Choose plan
                                            </button>
                                        </div>
                                    </article>

                                    <article className="plan [ card ]">
                                        <div className="inner">

                                            <span className="pricing">
                                                <span>
                                                    5000/ <small>PKR</small>
                                                </span>
                                            </span>
                                            <h2 className="title">Yearly</h2>
                                            <p className="info">This plan includes a yearly premium subscription for E-Studio.</p>
                                            <br />
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>Premium Songs</strong>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <strong>File sharing</strong>
                                                </li>
                                            </ul>
                                            <button className="button">
                                                Choose plan
                                            </button>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </section>
                    </>
                )}
            </div>
            {screenSize <= 970 && <BottomNavigationMobile />}
        </>

    );
}

export default PremiumPlans;