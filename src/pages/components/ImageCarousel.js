import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./styles/ImageCarouselStyle.css";

export default function ImageCarousel() {
    const images = ["https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-78487077-d810-4c42-a4b7-31aff5ef77ca.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-94ad9e5f-3190-4bd6-8d26-c6abcb2711fa.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-3b8adc93-f235-4fb6-b469-bf23bbc918e5.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-90be4389-d43b-4bec-ada0-529c7f273b66.jpg"]
    const [perPage, setPerPage] = useState(3);
    const [imageHeight, setImageHeight] = useState("100%");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setPerPage(1); // Change perPage to 1 when the window width is smaller than 600px
                setImageHeight("45vh")
            } else {
                setPerPage(3); // Reset perPage to 3 when the window width is larger than or equal to 600px
                setImageHeight("45vh")
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Splide aria-label="My Favorite Images"
                options={{
                    perPage: perPage,
                    rewind: true,
                    height: imageHeight,
                    gap: 5,
                    padding: 20,
                    lazyLoad: 'nearby',
                }}
            >
                {images.map((image, index) => {
                    return (
                        <SplideSlide>
                            <img
                                src={image} alt="Image 1"
                                style={{ "objectFit": "cover", height: "100%", width: "100%", borderRadius: 8 }}
                            />
                        </SplideSlide>
                    )
                })}
            </Splide>
        </>
    );
}