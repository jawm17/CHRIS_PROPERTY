import React, { useEffect, useState } from "react";
import "./styles/homeStyle.css";
import NavBar from "./Nav";
import ButtonComp from "./components/ButtonComp.js";

export default function Home() {
    return (
        <>
            {/* <NavBar /> */}
            <div id="home">
                {/* Hero */}
                <div id="hero">
                    {/* //! come back and put video in */}
                    {/* <video></video> */}
                    <div id="heroContent">
                        <div id="heroTitle">
                            <h3>the</h3>
                            <h1>wallance</h1>
                        </div>
                        <div id="heroSubtitle">
                            <p>luxury hotel in new york city</p>
                        </div>
                    </div>
                </div>
                {/*============== Benifits ================== */}
                <div id="benifitsContainer">
                    {/* Benifits 1 */}
                    <div className="benifitsContent" id="benifitOne">
                        <div className="benifitsInfoContainer col">
                            <h1>An Invitation To Unwind</h1>
                            <p>Akin to having your own pied-à-terre on Manhattan’s Upper West Side, our spacious accommodations are impeccably styled with residential comforts and modern amenities.</p>
                            <ButtonComp wordColor="black" word="View House" filler="black" fillerBG="none" />
                        </div>
                        <div className="benifitsImgsContainer col">
                            <img className="imgContainer" id="imgRight" src="https://thewallace.com/hubfs/Website/Webp/img-invitation-to-unwind.webp"></img>
                            <div className="imgBorder" id="imgRightBorder"></div>
                        </div>
                    </div>
                    {/* Benifits 2 */}
                    <div className="benifitsContent" id="benifitTwo">
                        <div className="benifitsImgsContainer col">
                            <img className="imgContainer" id="imgLeft" src="https://thewallace.com/hubfs/Website/Webp/img-invitation-to-unwind.webp"></img>
                            <div className="imgBorder" id="imgLeftBorder"></div>
                        </div>
                        <div className="benifitsInfoContainer col">
                            <h1>The Wallace Lounge</h1>
                            <p>The Wallace Lounge is a sophisticated and elegant establishment, offering a unique and refined drinking and dining experience. With a stylish and modern design, the lounge provides a welcoming and relaxed atmosphere, making it the perfect spot for a night out with friends, a romantic evening, or a special occasion.</p>
                            <ButtonComp wordColor="white" word="View House" filler="white" fillerBG="none" />
                        </div>
                    </div>
                    {/* Benifits 1 */}
                </div>
                {/*============== Discover ================== */}
                <div id="discoverContainer">
                    {/*//!slider component */}
                    <div id="discoverSliderContainer">

                        {/* //* slide x 3 */}
                        <div>
                            <h5></h5>
                            <h1></h1>
                            <p></p>
                        </div>
                        {/* //* slide x 3 */}
                    </div>
                </div>
                {/*============== Reviews ================== */}
                <div id="reviewsContainer">
                    {/*//!slider component */}
                    <div>
                        {/* //* slide x 3 */}
                        <div>
                            {/* icon */}
                            <div></div>
                            <p></p>
                            {/* name of person */}
                            <div></div>
                        </div>
                        {/* //* slide x 3 */}
                    </div>
                </div>
                {/*============== Location ================== */}
                <div id="locationContainer">
                    {/* call api */}
                    <div id="mapContainer"></div>
                    <div id="localSiteContainer">
                        <div className="siteLists">
                            {" "}
                            {/* x8 */}
                            <div>
                                <p></p>
                                <h1></h1>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                    <div></div>
                                    <p></p>
                                </div>
                                <div>
                                    {/* icon */}
                                    <div></div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*============== Footer Hero Slider ================== */}
                <div id="footerHeroContainer">
                    {/*//!slider component */}
                    <div>
                        {/* //* slide x 3 */}
                        {/* BG is Img */}
                        <div>
                            {/* city name */}
                            <h1></h1>
                        </div>
                        {/* //* slide x 3 */}
                    </div>
                </div>
                {/*============== Footer/Contact ================== */}
                <div id="footerContainer">
                    {/* margin Auto */}
                    <div id="footerContent">
                        <div id="contactContainer">
                            <h1></h1>
                            {/* inputs for contacts */}
                            <button></button>
                        </div>
                        <div id="footerLinksContainer">
                            <ul>
                                <li></li>
                            </ul>
                            <p></p>
                            <p></p>
                        </div>
                        <div id="footerInfoContainer">
                            {/* address */}
                            <p></p>
                            {/* icons */}
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
