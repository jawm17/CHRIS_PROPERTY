import React, { useEffect, useState } from "react";
import "./styles/navStyle.css";
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
        },
    }

    return (
        <nav style={style.navStyle}>
            <div id="navContainer" style={style.navStyle} >
                <div id="nav">
                    <div>&#9776;</div>
                    <ButtonComp word="CHECK AVAILABILITY" fillerBG={style.navStyle.fillerBG} borderFiller={style.navStyle.borderFiller} />
                </div>
            </div>
        </nav>
    );
}