import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./styles/ImageCarouselStyle.css";

export default function ImageCarousel() {
    const images = [
        "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-b37a4d30-7a9f-4660-bd50-8ce7e6abaafd.jpeg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-d97b5b15-0f7e-4a58-87a9-063f6d9e06cc.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-4f0eab78-0ca4-4902-8514-a955cba8ea36.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-77d6077c-c8ff-4765-8a2a-9ac246d2787b.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-c654bf6d-8ce4-4263-8d68-d960eda0989f.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-203df70d-b62d-40be-869e-ff3ce4ed6b7b.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-bb92b06c-bbf4-4f61-8140-06c4b8f4851e.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-2a2a948e-fa4e-4d76-8d25-74063060eb17.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-c0cffcf6-1e68-4e57-bffd-ca8ebb2e2ac3.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-8483724d-1efd-419c-b2ec-5bf293dcc9da.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-972867bb-840a-4654-a84f-9c9cf10dd6a2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-4c97a85b-babd-4499-9c08-9659e3a396cc.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-7a6c0e21-9592-4d14-a24b-d927d800d2d7.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-bddf2bad-bcbd-4eae-b68e-aa7e1ca78131.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-00da91ba-0ca0-42f2-9ab4-761e463891cd.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-810db743-9d26-40c9-91e6-dff9d5672878.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-41e0557b-513a-4bb8-a85c-280fb2230abe.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-26c7f1ef-2016-400d-ad16-1f9a4375798b.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-6863a63d-bc0a-4ab7-923b-cf9ed4a11f68.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-73cc7c19-6ed8-46c7-8d67-dd867e8fab8a.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-1cc74d15-9574-4137-8260-f382e8693597.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-d63053d1-b60f-4d59-89e6-3014b2bef972.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-b5acb8b1-8cd7-4881-94f7-ef01909e8a2b.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-7bf317d5-1c89-4452-a599-4e5859a77599.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-c5371250-f884-42f9-859a-250b98078904.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-e3f9124a-05de-4bc7-811b-668b0c50cecd.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-3b8adc93-f235-4fb6-b469-bf23bbc918e5.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-56b9e9c7-9a7e-4631-aac3-6eb32f6b62cc.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-90be4389-d43b-4bec-ada0-529c7f273b66.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-94ad9e5f-3190-4bd6-8d26-c6abcb2711fa.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-bfee4025-5577-4f58-b1de-5e6cdbf99430.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-4a917149-05d9-49f3-9f7b-009049ebac6e.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-bdf3165b-3e71-458f-adff-990f4ea5b5ad.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-c24fc4a0-4aec-470d-b5c8-25919cc2d4b0.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-360cb1de-e3ee-48cd-9b8f-fd0b07555722.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-7de842be-8eab-4467-9a96-200feaf10f4c.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-2eef0659-0224-4159-82e9-099c371dc7d4.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-bd35d48b-7c7d-4dd1-82d2-1520b8dd99f5.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-90f17407-6511-497c-a2ea-a77677af11ca.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-a16295a1-151a-461e-9fad-4847cfe2a33a.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-78487077-d810-4c42-a4b7-31aff5ef77ca.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-7520f144-6523-439d-b0aa-6cdf421e9c6e.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-f7098ab2-51d6-47bf-a2e4-963d5cb4469a.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-e96a8e33-8f79-4b86-bd65-11d254b8a8d2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-90d7558b-9d09-4882-97ba-ed6b2c5e51e2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-d5f2e4ab-1d91-4f41-80b3-2be535539073.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-451a8f90-ebb0-4a45-827b-98f4fcc0e4a2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-4c97f19f-3478-44f8-bca6-25bec93bc748.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-8bb88b94-184f-47f2-8688-dc11f45aa9ff.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-4e380f48-498a-4d80-b83b-f57098460536.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-05ab9311-25a6-4452-8b32-fe986c1d5c50.jpeg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-03626312-6a07-42c7-bdf1-df429c5fecf3.jpeg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-b4b05c24-ada8-490f-9afe-5d2f0136c0f9.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-f20a0f3f-f7ee-48e4-8488-48072cffb1d2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-f4ac92e4-a809-4fe9-82e8-1453054c5c1a.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-2a4c1fe6-fc90-4ee5-aeed-646464e9eb17.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-ce1c5a1b-5d09-4755-8b4d-1380c1b29ce2.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-752e5cae-ebc2-4b76-b737-5a282cfe8e68.jpg", "https://cdn.aryeo.com/listings/103-peppervine-ln-port-aransas-tx-78373-4272527/resized/large/large-5c0eee16-53f0-401e-bd68-df5943eeada6.jpg", 
    ]
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