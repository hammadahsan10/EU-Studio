import React, { useContext, useEffect, useState } from 'react';
import '../../components/assets/scss/AddMusic.scss';
import { useSelector } from "react-redux";
import MobileTopNavigation from '../fragment/MobileTopNavigation';
import Navigation from '../fragment/Navigation';
import { Skeleton } from "@material-ui/lab";
import SideBar from '../fragment/SideBar';
import { ThemeContext } from '../../api/Theme';
import BottomNavigationMobile from './BottomNavigationMobile';

const AddMusic = () => {

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
                            <div className="container">
                                <div className="main-home">
                                
                                    <h1>Add your Music</h1>
                                    <form className="music-form">
                                        <div className="form-group">
                                            <label htmlFor="songName">Song Name</label>
                                            <input type="text" id="songName" name="songName" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="singerName">Singer Name</label>
                                            <input type="text" id="singerName" name="singerName" className="form-control" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="category">Category</label>
                                            <select id="category" name="category" className="form-control">
                                                <option value="piano">Piano</option>
                                                <option value="guitar">Guitar</option>
                                                <option value="saxophone">Saxophone</option>
                                                <option value="violin">Violin</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="musicFile">Add Music (MP3 only)</label>
                                            <input type="file" id="musicFile" name="musicFile" className="form-control-file" accept=".mp3" required />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="thumbnailFile">Add Thumbnail (Image)</label>
                                            <input type="file" id="thumbnailFile" name="thumbnailFile" className="form-control-file" accept="image/*" required />
                                        </div>

                                        <button type="submit" className="btn-submit">Add</button>
                                    </form>
                                </div>
                            </div>
                        </section>
                            {screenSize <= 970 && <BottomNavigationMobile />}
                    </>
                )}
            </div>
        </>

    );
}

export default AddMusic;