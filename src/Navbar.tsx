import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'


export const Navbar = () => {
    return (
        <div className="frame"> 
            <div className="actualNavBar">
                <div style={{top: "0", left:"0", padding: "2px", position: "absolute", fontSize: "2em", fontWeight:"bold", color:"rgba(0, 140, 147, 1)"}}>
                    Arnold Venter
                </div>
                
                <a className="linkContainer" href="mailto:venterap@gmail.com?body=My custom mail body">
                    <img className="linkIcon" src="https://static-00.iconduck.com/assets.00/gmail-icon-512x512-qp7vijfd.png"></img>
                </a>
                <a className="linkContainer" href="https://github.com/SmileCoder1">
                    <img className="linkIcon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                </a>
                <a className="linkContainer" href="https://www.linkedin.com/in/arnoldventer/">
                    <img className="linkIcon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"></img>
                </a>

                {/* <div style={{top: "0", right:"0", padding: "2px", position: "absolute"}}>
                    <div></div>
                </div> */}
            </div>
            <div className="frame2">
                <div className="pfpContainer">
                    <div className="fadeFrame"></div>
                    <img className="pfp" src = "melol2.jpg"/>
                </div>
                <div className="bio">
                    <div style={{color: "white", fontSize: "x-large", fontWeight: "bold"}}>
                        Hey there
                    </div>
                    <div style={{textAlign:"left", color: "inherit", fontSize: "large"}}>
                        I'm a senior studying Electrical and Computer Engineering at UT Austin with an interest in video game design and embedded software development. I enjoy collaborating with others to tell great stories and transport players to a different world. 
                    </div>
                </div>
            </div> 
            

        </div>
    );
}
