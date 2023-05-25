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
            color: navOpen ? "black" : "white",
        },
        navStyleLogo: {
            opacity: navLogo ? "1" : "0",
        }
    }

    return (

        <div id="navMain" style={style.navStyle}>
            <div>&#9776;</div>
            <div style={style.navStyleLogo}>Your Logo</div>
            <ButtonComp word="CHECK AVAILABILITY"/>
    
        </div>
    );
}