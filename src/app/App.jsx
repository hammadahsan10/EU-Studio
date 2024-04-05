import React, { useEffect } from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../components/Pages/Login";
import { ThemeContext, themes } from "../api/Theme";
import musicDB from "../db/music";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../actions/actions";
import SigninForm from "../components/fragment/SignForm/SigninForm";
import AddMusic from "../components/fragment/AddMusic";
import Profile from "../components/Pages/Profile";
import SignupForm from "../components/fragment/SignForm/SignupForm";
import LikedSongs from "../components/fragment/LikedSongs";
import Search from "../components/Pages/Search";
import PremiumPlans from "../components/fragment/PremiumPlans";

const App = () => {

    // const { language } = useSelector(state => state.musicReducer);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (language === null || language.includes("any")) {
    //         dispatch(setPlaylist(musicDB))
    //     }
    //     else if (language.includes('hindi')) {
    //         alert("No hindi tracks available")
    //     } else {
    //         let x = musicDB.filter((item) => (
    //             item.lang && language.includes(item.lang.toLowerCase())
    //         ))
    //         dispatch(setPlaylist(x))
    //     }
    // }, [dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/signin" component={SigninForm} />
                        <Route path="/signup" component={SignupForm} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/addmusic" component={AddMusic} />
                        <Route path="/likedsongs" component={LikedSongs} />
                        <Route path="/search" component={Search} />
                        <Route path="/premiumplans" component={PremiumPlans} />
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;