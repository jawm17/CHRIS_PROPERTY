import React, { useEffect, useState } from "react";
import "./styles/homeStyle.css";
import NavBar from "./Nav";
import ButtonComp from "./components/ButtonComp.js";
import MapComponent from "./components/MapComponent.js";
import Slider from "./components/Slider";
import Footer from "./Footer";
import ImageCarousel from "./components/ImageCarousel";
import MatterportViewer from "./components/MatterPortViewer";


export default function Home() {
    const [muted, setMuted] = useState(true);
    const [mapCenter, setMapCenter] = useState([27.797673835318935, -97.08721339030625]);
    const Location1 = [27.829460881886035, -97.08473664349712]; // Port A Nature Preserve // 8 Min drive // 1 hr walk
    const Location2 = [27.79685292375124, -97.08761306786688] // Palmilla Beach Golf Club // 3 min drive // 5 min walk
    const Location3 = [27.80780654696457, -97.0863515205597] // The Phoenix Restaurant & Bar // 4 min drive // 18 min walk
    const Location4 = [27.67468665345304, -97.17639163670216] // Mustang Island State Park // 12 min drive // 3 hr walk

    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setUserReviews(miniReviews);
            } else {
                setUserReviews(reviews)
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const miniReviews = [
        {
            icon: "?",
            text: "This hotel is absolutely beautiful and the pictures on the website is exactly how the room looked. It was an absolute pleasure to stay here!",
            author: "John Doe",
        },
        {
            icon: "?",
            text: "We all had a wonderful stay, and the staff was helpful and friendly. Looking forward to our next trip to Port A and staying at the Peppervine.",
            author: "Jane Smith",
        },
        {
            icon: "?",
            text: "From the initial consultation to the final result, everything was seamless.",
            author: "Michael Johnson",
        },
    ]

    return (
        <>
            <NavBar />
            <div id="home">
                {/* Hero */}
                <div id="hero">
                    {/* //! come back and put video in */}
                    {/* <video></video> */}
                    <video id="heroVideo" autoPlay={true} muted={muted} loop webkit-playsinline playsInline>
                        <source src={"https://firebasestorage.googleapis.com/v0/b/ethresources-1ed10.appspot.com/o/trim.F9D3BA54-F497-441B-A4C2-1FF2FB88A376.MOV?alt=media&token=12ca1bd4-04e9-4455-8301-f72051eca4d3"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div id="muteBtn" onClick={() => setMuted(!muted)}>
                        {!muted ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="soundIcon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="soundIcon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                            </svg>

                        }
                    </div>
                    <div id="heroContent">
                        <div id="heroTitle">
                            <div id="theLabel">103</div>
                            <div id="mainTitle">peppervine</div>
                        </div>
                        <div id="heroSubtitle">
                            <p>luxury vacation home in Port Aransas</p>
                        </div>
                    </div>
                </div>
                {/*============== Benifits ================== */}
                <div id="benifitsContainerLarge">
                    {/* Benifits 1 */}
                    <div className="benifitsContent" id="benifitOne">
                        <div className="benifitsInfoContainer col">
                            <h1>An Invitation To Unwind</h1>
                            <p>Our spacious accommodations are impeccably styled with residential comforts and modern amenities. At the end of the day, when you are ready to retreat from the hustle and bustle, this is the ideal place to relax & recharge.</p>
                            <ButtonComp fontSize="14px" wordColor="black" word="View House" fillerBG="none" borderFiller="black" />                        </div>
                        <div className="benifitsImgsContainer col">
                            <img className="imgContainer" id="imgRight" src="https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-41e0557b-513a-4bb8-a85c-280fb2230abe.jpg"></img>
                            <div className="imgBorder" id="imgRightBorder"></div>
                        </div>
                    </div>
                    {/* Benifits 2 */}
                    <div className="benifitsContent" id="benifitTwo">
                        <div className="benifitsImgsContainer col">
                            <img className="imgContainer" id="imgLeft" src="https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-03626312-6a07-42c7-bdf1-df429c5fecf3.jpeg"></img>
                            <div className="imgBorder" id="imgLeftBorder"></div>
                        </div>
                        <div className="benifitsInfoContainer col">
                            <h1>Endless Attractions</h1>
                            <p>Our location places guests within easy reach of the endless culture, first-class entertainment and impressive landmarks that make Port Aransas an excellent destination.</p>
                            <ButtonComp fontSize="16px" wordColor="white" word="View House" fillerBG="none" borderFiller="white" />
                        </div>
                    </div>
                    {/* Benifits 1 */}
                </div>

                <div id="benefitsContainerSmall">
                    <div id="topSectionOuter">
                        <div id="topSection">
                            <div className="topImageSection">
                                <img id="topImage" src="https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-41e0557b-513a-4bb8-a85c-280fb2230abe.jpg"></img>
                                <div className="topImageBorder">
                                </div>
                            </div>
                            <div className="sectionHeader">
                                An Invitation To Unwind
                            </div>
                            <div id="sectionFlex">
                                <div className="sectionSub">
                                    Our spacious accommodations are impeccably styled with residential comforts and modern amenities. At the end of the day, when you are ready to retreat from the hustle and bustle, this is the ideal place to relax & recharge.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="bottomSectionOuter">
                        <div id="bottomSection">
                            <div className="topImageSection">
                                <img id="topImage" src="https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-03626312-6a07-42c7-bdf1-df429c5fecf3.jpeg"></img>
                                <div className="topImageBorder">
                                </div>
                            </div>
                            <div className="sectionHeader" id="sectionHeader2">
                                Endless Attractions
                            </div>
                            <div id="sectionFlex">
                                <div className="sectionSub">
                                    Our location places guests within easy reach of the endless culture, first-class entertainment and impressive landmarks that make Port Aransas an excellent destination.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*============== Carousel ================== */}
                <div id="carouselContainer">
                    <div id="carouselTitle">
                        The House
                    </div>
                    <div id="carouselSub">
                        discover a new place
                    </div>
                    <ImageCarousel />
                </div>
                <div id="virtualTour">
                    <div id="carouselTitle">
                        Virtual Tour
                    </div>
                    <div id="carouselSub">
                        explore the space
                    </div>
                    <MatterportViewer />
                </div>
                {/*============== Reviews ================== */}
                {/* <div id="reviewsContainer">
                    <Slider reviews={userReviews} />
                </div> */}
                {/*============== Location ================== */}
                <div id="locationContainer">
                    {/* call api */}
                    <div id="mapContainer">
                        <div id="carouselTitle">
                            Locations
                        </div>
                        <div id="carouselSub">
                            nearby destinations
                        </div>
                        <MapComponent mapCenter={mapCenter} />
                    </div>
                    <div id="localSiteContainer">
                        {/* come back and make it a comp */}
                        <ul id="map-points-of-interest-dnd_area-module-4" className="map-points-of-interest">
                            <li onClick={() => setMapCenter(Location1)} onMouseEnter={() => setMapCenter(Location1)} onMouseLeave={() => setMapCenter(null)}>
                                <div className="index">01 /</div>
                                <p className="text">Port A Nature Preserve</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>8 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>1 hr walk</p>
                                </div>
                            </li>

                            <li onClick={() => setMapCenter(Location2)} onMouseEnter={() => setMapCenter(Location2)} onMouseLeave={() => setMapCenter(null)}>
                                <div className="index">02 /</div>
                                <p className="text">Palmilla Beach Golf Club</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg> 3 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>5 min walk</p>
                                </div>
                            </li>

                            <li onClick={() => setMapCenter(Location3)} onMouseEnter={() => setMapCenter(Location3)} onMouseLeave={() => setMapCenter(null)}>
                                <div className="index">03 /</div>
                                <p className="text">The Phoenix Restaurant & Bar</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>4 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>18 min walk</p>
                                </div>
                            </li>

                            <li onClick={() => setMapCenter(Location4)} onMouseEnter={() => setMapCenter(Location4)} onMouseLeave={() => setMapCenter(null)}>
                                <div className="index">04 /</div>
                                <p className="text">Mustang Island State Park</p>
                                <div className="distance">
                                    <p className="drive"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.333a1 1 0 0 0 1-1v-1.5c0-.32-.127-.627-.353-.853L13.5 6.333h-11L.853 7.98a1.207 1.207 0 0 0-.353.853v1.5a1 1 0 0 0 1 1h13Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M.608 8.333h2.478a1 1 0 0 1 .707.293l.707.707M15.392 8.333h-2.478a1 1 0 0 0-.707.293l-.707.707M2.5 6.333l1.133-3.026a1.5 1.5 0 0 1 1.406-.974h5.922a1.5 1.5 0 0 1 1.404.974l1.133 3.026H2.5ZM2.5 6.333l-1-1h-1M13.5 6.333l1-1h1M1.5 11.333v1a1 1 0 0 0 2 0v-1h-2ZM14.5 11.333v1a1 1 0 0 1-2 0v-1h2Z"></path></svg>12 min drive</p>
                                    <p className="walk"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke-linecap="round" stroke-linejoin="round" d="M7.4 4.12a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM12.1 7.867a1.492 1.492 0 0 1-1.17-.562A5.133 5.133 0 0 0 6.9 5.367a4.004 4.004 0 0 0-4 4 1 1 0 1 0 2 0 2.004 2.004 0 0 1 1.5-1.934v.334a10.878 10.878 0 0 1-1.833 6.05 1 1 0 1 0 1.667 1.11 12.932 12.932 0 0 0 1.5-3.06 5.359 5.359 0 0 1 2.219 2.822 1 1 0 1 0 1.896-.633 7.358 7.358 0 0 0-3.617-4.205c.113-.689.169-1.386.169-2.084v-.02c.374.201.703.477.968.81a3.481 3.481 0 0 0 2.734 1.312 1 1 0 1 0 0-2l-.002-.002Z"></path></svg>3 hr walk</p>
                                </div>
                            </li>




                        </ul>
                    </div>
                </div>
                <div id="bookNowArea">
                    <div id="nowTitle">
                        Book Now
                    </div>
                    <div id="nowSub">
                        103 Peppervine Ln
                        Port Aransas, TX 78373
                    </div>
                    <div id="btnContainerGroup">
                        <div id="btnContainer">
                            <ButtonComp word="BOOK NOW ON AIRBNB" fillerBG={"white"} borderFiller={"white"} link="https://www.airbnb.com"/>
                        </div>
                        <div id="btnContainer">
                            <ButtonComp word="BOOK NOW ON VRBO" fillerBG={"white"} borderFiller={"white"} link="https://www.vrbo.com"/>
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
                {/* <Footer /> */}
                <div id="newFooter">
                    <div id="newFooterInner">
                        {/* <div id="phone">
                            512-777-7777
                        </div> */}
                        <div id="email">
                            103Peppervine@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
