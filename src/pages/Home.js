import React, { useEffect, useState } from "react";
import "./styles/homeStyle.css";
import NavBar from "./Nav";
import ButtonComp from "./components/ButtonComp.js";
import Map from "./components/Map.js";
import Slider from "./components/Slider";


export default function Home() {
    const reviews = [
        {
            icon: "?",
            text: "This hotel is absolutely beautiful and the pictures on the website is exactly how the room looked. We stayed in the Double Queen Suite and it is spacious and roomy. The staff was extremely friendly and helpful. It was an absolute pleasure to stay here!",
            author: "John Doe",
        },
        {
            icon: "?",
            text: "Our family booked a number of rooms for a nearby family event and could not have been more pleased with the hotel accommodations and staff. We all had a wonderful stay, and the staff was helpful and friendly. Looking forward to our next trip to NY and staying at the Wallace.",
            author: "Jane Smith",
        },
        {
            icon: "?",
            text: "I had a wonderful experience working with this company. From the initial consultation to the final result, everything was seamless. The team was professional, efficient, and the outcome exceeded my expectations.",
            author: "Michael Johnson",
        },
    ];

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
                            <ButtonComp wordColor="black" word="View House" filler="black" fillerBG="white" />
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
                {/*============== Carousel ================== */}
                <div id="carouselContainer">

                </div>
                {/*============== Reviews ================== */}
                <div id="reviewsContainer">
                    <Slider reviews={reviews} />
                </div>
                {/*============== Location ================== */}
                <div id="locationContainer">
                    {/* call api */}
                    <div id="mapContainer">
                        <Map />
                    </div>
                    <div id="localSiteContainer">
                        <ul id="map-points-of-interest-dnd_area-module-4" class="map-points-of-interest">

                            <li>
                                <div className="index">01 /</div>
                                <p className="text">Museum of Natural History</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>4 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>12 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">02 /</div>
                                <p className="text">Central Park</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>4 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>11 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">03 /</div>
                                <p className="text">Lincoln Center</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>5 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>7 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">04 /</div>
                                <p className="text">Columbia University</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>7 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>38 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">05 /</div>
                                <p className="text">Riverside Park</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>5 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>13 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">06 /</div>
                                <p className="text">Columbus Circle</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>6 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>22 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">07 /</div>
                                <p className="text">St. John the Divine</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>7 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>40 min walk</p>
                                </div>
                            </li>

                            <li>
                                <div className="index">08 /</div>
                                <p className="text">The Juilliard School</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>6 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>14 min walk</p>
                                </div>
                            </li>

                        </ul>
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
