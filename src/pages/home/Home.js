import React, { useEffect, useState } from "react";
// import mainVid from "../../assets/mainVid.mp4";
import "./styles/homeStyle.css";

export default function Home() {
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        // const video = document.getElementById("heroVid");
        // video.play();
        window.addEventListener("scroll", (e) => scrollAnimation(e));
        return () => window.removeEventListener("scroll", scrollAnimation);
    }, []);

    function scrollAnimation(e) {
        let offset = window.pageYOffset
        if (offset > 50) {
            setNavOpen(true);
        } else {
            setNavOpen(false);
        }
    }

    const style = {
        navStyle: {
            backgroundColor: navOpen ? "white" : "transparent",
            color: navOpen ? "black" : "black",
        }
    }

    return (
        <div id="home">
            <div id="navMain" style={style.navStyle}>
                <div id="navBtnsRight">
                    <div className="navBtn">
                        about
                    </div>
                    <div className="navBtn">
                        location
                    </div>
                    <div className="navBtn">
                        contact
                    </div>
                </div>
            </div>
            <div id="sampleBlock">
            
            </div>
        </div>
    );
}