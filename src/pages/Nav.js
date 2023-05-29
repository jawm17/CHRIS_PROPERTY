import React, { useEffect, useState } from "react";
import "./styles/navStyle.css";
import whiteLogo from "../assets/logo-white-noBg.png";
import blackLogo from "../assets/logo-black-noBg.png";
import ButtonComp from "./components/ButtonComp.js";

export default function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const [navLogo, setnavLogo] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => scrollAnimation(e));
        return () => window.removeEventListener("scroll", scrollAnimation);
    }, []);

    function scrollAnimation(e) {
        let offset = window.pageYOffset
        if (offset > 1) {
            setNavOpen(true);
            setnavLogo(true);
        } else {
            setNavOpen(false);
            setnavLogo(false);
        }
    }
    const style = {
        navStyle: {
            backgroundColor: navOpen ? "white" : "transparent",
            color: navOpen ? "white" : "black",
            fillerBG: navOpen ? "black" : "white",
            borderFiller: navOpen ? "black" : "white",
            borderBottom: navOpen ? "0.5px solid rgba(0,0,0,.4)" : "none"
        },
    }

    return (
        <nav style={style.navStyle}>
            <div id="navContainer" style={style.navStyle} >
                <div id="nav">
                    <div>
                        {
                            navOpen ? <img src={blackLogo} id="sampleLogo"></img> : <img src={whiteLogo} id="sampleLogo"></img>
                        }
                    </div>
                    {/* <div>
                        <div>
                            the
                        </div>
                        <div>
                            peppervine
                        </div>
                    </div> */}
                    <ButtonComp word="BOOK NOW" fillerBG={style.navStyle.fillerBG} borderFiller={style.navStyle.borderFiller} link="https://www.airbnb.com"/>
                </div>
            </div>
        </nav>
    );
}