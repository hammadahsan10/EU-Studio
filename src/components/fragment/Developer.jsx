import React from 'react';
import '../assets/scss/Developer.scss';
import { IconButton } from "@material-ui/core";
import AvatarImage from "../assets/img/E-studio.png";
import { Facebook, Instagram, LinkedIn, Portrait, Twitter } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>CREATE - INSPIRE - REPEAT</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile" />
                    <div className={"Card-details"}>
                        <h3>E-STUDIO</h3>
                        <p>Follow your passion</p>

                    </div>
                </div>
                <div className="Developer-profileDetails">

                    <p>
                        Music has a long and diverse history. It began with simple sounds and grew through different times and cultures. From ancient civilizations to today, it evolved with new styles and technologies. Each era brought unique sounds and emotions, reflecting the changes in society. Today, music continues to be a vibrant part of our lives.</p>

                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"http://localhost:3000/home"} title={"e-studio"}>
                            <Facebook />
                        </IconButton>
                        <IconButton target={"_blank"} href={"http://localhost:3000/home"} title={"e-studio"}>
                            <Twitter />
                        </IconButton>
                        <IconButton target={"_blank"} href={"http://localhost:3000/home"} title={"e-studio"}>
                            <LinkedIn />
                        </IconButton>
                        <IconButton target={"_blank"} href={"http://localhost:3000/home"} title={"e-studio"}>
                            <Instagram />
                        </IconButton>
                        <IconButton target={"_blank"} href={"http://localhost:3000/home"} title={"e-studio"}>
                            <Portrait />
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;