import React, { useEffect, useState } from "react";
import "./styles/footerStyle.css";
import ButtonComp from "./components/ButtonComp.js";

export default function Footer() {


    return (
        <footer id="footerContainer">
            <div id="footerHeader">
                <h1>Contact Us</h1>
            </div>
            <div id="footerContent">
                <div id="footerFormContainer">
                    <div className="footerForm">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="footerForm">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="footerForm">
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                    </div>
                    <ButtonComp fontSize="16px" wordColor="white" word="View House" fillerBG="none" borderFiller="white" />
                </div>
                <div id="footerFooter">
                    <div id="footerWords">
                    <p>(800) 833 9622</p>
                    <p>info@thewallace.com</p>
                    </div>
                    <div id="footerIcons">
                        <a href="#" class="social-icon">A</a>
                        <a href="#" class="social-icon">B</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}