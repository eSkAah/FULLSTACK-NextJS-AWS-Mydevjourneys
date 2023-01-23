import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const HotTopic = () => {

    const data = [
        {
            title: "Sport",
            article: 38,
            img: "sport.png",
        },
        {
            title: "Travel",
            article: 63,
            img: "travel.png",
        },
        {
            title: "Design",
            article: 78,
            img: "design.png",
        },
        {
            title: "Movie",
            article: 125,
            img: "movie.png",
        },
        {
            title: "Lifestyle",
            article: 45,
            img: "lifestyle.png",
        },
    ];


    return (
        <>
            <div className="row">
                <div className="col-lg-2">
                    <h5 className="mb-15 color-white wow animate__animated animate__fadeInUp" data-wow-delay="0s">Hot topics</h5>
                    <p className="color-gray-500 mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Don't miss out on the latest news about Travel tips,
                        Hotels review, Food guide...</p>
                    <div className="box-buttons-slider position-relative wow animate__animated animate__zoomIn">
                        <div className="swiper-button-prev swiper-button-prev-style-1" />
                        <div className="swiper-button-next swiper-button-next-style-1" />
                    </div>
                    {/* <div className="arrows">
                    <span className="intro_prev">
                        <i className="bi bi-arrow-left"></i>
                    </span>
                    <span className="intro_next">
                        <i className="bi bi-arrow-right"></i>
                    </span>
                </div> */}
                </div>
                <div className="col-lg-10">
                    <div className="box-swiper">
                        <div className="swiper-container swiper-group-5">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false
                                }}
                                navigation={{
                                    prevEl: ".swiper-button-prev-style-1",
                                    nextEl: ".swiper-button-next-style-1",
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    575: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    991: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1199: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1350: {
                                        slidesPerView: 4,
                                        spaceBetween: 30,
                                    },
                                }}
                                className="swiper-wrapper"
                            >
                                {data.map((item, i) => (
                                    <SwiperSlide className="swiper-slide">
                                        <div className="card-style-1"><a href="blog-archive.html">
                                            <div className="card-image"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" />
                                                <div className="card-info">
                                                    <div className="info-bottom">
                                                        <h6 className="color-white mb-5">{item.title}</h6>
                                                        <p className="text-xs color-gray-500"> {item.article} Articles</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </SwiperSlide>
                                ))}


                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default HotTopic;

