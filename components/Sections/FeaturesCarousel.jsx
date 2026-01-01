'use client'

import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx';

export default function FeaturesCarousel() {


    const [currentSlide, setCurrentSlide] = useState(0);

    const featuresData = [
        { title: "Store Management", description: "Onboard vendors, manage profiles, and handle payouts from a unified dashboard.", imgSrc: "/images/sections/featuresCarousel/store.png", },
        { title: "Product & Inventory Control", description: "Add products, manage variants, and monitor real-time stock levels effortlessly.", imgSrc: "/images/sections/featuresCarousel/inventory.png", },
        { title: "Order & Delivery System", description: "Manage vendor onboarding, profiles, and payouts with a complete vendor dashboard.", imgSrc: "/images/sections/featuresCarousel/order.png", },
        { title: "Customer Experience", description: "Wishlist, cart, fast checkout, and full order history for smooth shopping.", imgSrc: "/images/sections/featuresCarousel/customer-xp.png", },
        { title: "Payment And Transactions", description: "Enable online payments, COD, commissions, and maintain secure transaction logs.", imgSrc: "/images/sections/featuresCarousel/payment.png", },
        { title: "Product & Inventory Control", description: "Add products, manage variants, and monitor real-time stock levels effortlessly.", imgSrc: "/images/sections/featuresCarousel/inventory.png", },
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        centerPadding: "0px", // Keep this at 0 if you want 5 items perfectly centered
        slidesToShow: 5,
        speed: 500,
        rtl: false,
        afterChange: (current) => {
            console.log(current)
            setCurrentSlide(current)
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };

    return (

        <section className="slider-container max-w-[1400px] mx-auto w-full h-[310px]  lg:mask-alpha lg:mask-r-from-black lg:mask-r-from-70% lg:mask-r-to-transparent lg:mask-l-from-black lg:mask-l-from-70% lg:mask-l-to-transparent">
            <Slider {...settings}>
                {featuresData.map((feature, index) => (
                    <div key={index} className='px-2.5 '>

                        <div className={clsx("p-4 rounded-2xl  transition-all duration-100 border-[1.3px] border-[#e9ecef]/60 h-full w-full flex flex-col justify-center", currentSlide === index ? " md:border-b-4 md:border-primary-red md:border-t-0 md:border-l-0 border-r-0 md:bg-[#fff4f7] md:min-h-[280px] z-10" : "min-h-[250px]")}>
                            <div className="mb-4 flex justify-center">
                                <img src={feature.imgSrc} alt="" className="w-14 h-14" />
                            </div>
                            <div className='mb-4'>
                                <p className="text-lg font-semibold text-center text-[#24262d]">{feature.title}</p>
                            </div>
                            <div>
                                <p className="text-base text-center text-[#626262]/80 line-clamp-3">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>

    )
}