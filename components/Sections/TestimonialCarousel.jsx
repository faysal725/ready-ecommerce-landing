'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from 'react'
import TestimonialCards from "../Cards/TestimonialCards";

export default function TestimonialCarousel({ Testimonials }) {

    const settings = {
        className: "",
        centerMode: false,
        infinite: true,
        arrow: false,
        autoplay: true,
        speed: 500,
        rtl: false,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1.2
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
    <Slider {...settings}>
        {
            Testimonials.map((testimonial, index) => (
                <div className="px-2 h-full">

                    <TestimonialCards key={index} testimonialData={testimonial} />
                </div>
            ))
        }
    </Slider>
    )
}
