import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, Whatshot, LibraryMusicRounded, QueueMusicRounded, Audiotrack, MusicVideo } from "@material-ui/icons";

function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title="Home" />
                <SideBarOptions className={"lib-sub"} Icon={Whatshot} href={"/home/playlist/Trending"} title="Trending Music on EStudio" />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/search"} title="Search" />
                <SideBarOptions className={"lib-sub"} Icon={FavoriteIcon} href={"/likedsongs"} title="Liked Songs" />
                <SideBarOptions className={"lib-sub"} Icon={LocalAtmIcon} href={"/premiumplans"} title="Premium Plans" />
                <SideBarOptions className={"lib-sub"} Icon={Audiotrack} href={"/addmusic"} title="Create a Room" />

                {/* <SideBarOptions className={"lib-sub"} Icon={Whatshot} href={"/home/playlist/"} title={"Trending Music on EStudio"} /> */}

                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            {/* <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span >ALBUMS</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={LibraryMusicRounded} href={"/home/playlist/90's"} title={"90'S"} />
                <SideBarOptions className={"lib-sub"} Icon={Audiotrack} href={"/home/playlist/instrumental"} title={"Instrumental"} />
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/electronic"} title={"Electronic"} />
                <SideBarOptions className={"lib-sub"} Icon={MusicVideo} href={"/home/playlist/jazz"} title={"Jazz"} />
                <SideBarOptions className={"lib-sub"} Icon={QueueMusicRounded} href={"/home/playlist/Qawali"} title={"Qawali"} />


            </div> */}
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span >ABOUT E-Studio</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"} title={"About"} />
            </div>
        </aside>
    );
}

/*
*
* */
export default SideBar;