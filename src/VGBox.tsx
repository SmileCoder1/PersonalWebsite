import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import './VGBox.css'


export interface VGBoxInt {
    title: string;
    picture: string;
    tagline: string;
    summary: string;
    overview: string;
    itchlink: string;
    steamlink: string;
    gitlink: string;
    youtubelink: string;

}


interface VGLinkInt {
    typeLink: number;
    link: string;

}


const VGLink = ({typeLink, link}:VGLinkInt) => {
    
    const icons = ["https://i.pcmag.com/imagery/reviews/044PXMK6FlED1dNwOXkecXV-4..v1597354669.jpg", 
        "https://static.vecteezy.com/system/resources/previews/020/975/553/non_2x/steam-logo-steam-icon-transparent-free-png.png",
        "./Giticon.png", 
        "https://cdn-icons-png.flaticon.com/512/1384/1384060.png"

    ]
    const colors = ["#ff5c5a", "#cccccc", "#000000", "#fedcd0" ]

    const bodies = ["Download on Itch.io", "View on Steam", "View Code Snippets", "View Video Clip"]
    
    return (
        <a style={{display:`${link === ""?"none":"block"}`}} className="vglink" href={link}>
            <div style={{backgroundColor:`${colors[typeLink]}`}} className="vglinkcont">
                <img style={{ maxWidth: "50%", borderRadius: "5px"}} src={icons[typeLink]}></img>
                <div style={{alignSelf:"center", textAlign: "center", maxHeight: "100%", maxWidth: "100%", color:`${typeLink == 1 || typeLink == 3?"black":"white"}`, fontSize:"0.5em", fontWeight: "bold"}}>
                    {bodies[typeLink]}
                </div>
            </div>
        </a>
    );
}


export const VGBox = ({title, picture, tagline, summary, overview, itchlink, steamlink, gitlink, youtubelink}:VGBoxInt) => {

    return (
        <div className="container">
            <img className="vgimg" src={picture}></img>
            <div className="vgrhs">
                <div className="vgtitle">
                    {title}
                </div>
                <div className="tagline">
                    <i>{tagline}</i>
                </div>
                <div className="vgbody">
                    
                    <b>Summary: </b>
                    <p style={{marginLeft:"60px"}}>{summary}</p>
                    <b>Overview: </b>
                    <p style={{marginLeft:"60px"}}>{overview}
                    </p>

                </div>
                <div className="vglinks">
                    <VGLink typeLink={0} link={itchlink}></VGLink>
                    <VGLink typeLink={1} link={steamlink}></VGLink>
                    <VGLink typeLink={2} link={gitlink}></VGLink>
                    <VGLink typeLink={3} link={youtubelink}></VGLink>
                </div>
            </div>
        </div>
    );
}
