'use client'


import ButtonIconSmall from "../Button/ButtonIconSmall";
import ButtonLarge from "../Button/ButtonLarge";
import Heading from "../Common/Heading";
import SectionContainer from "../Common/SectionContainer";
import GradientContainer from "../Containers/GradientContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// buttons
function ExploreBtn({ onClick = () => { } }) {


    return (
        <button
            className="h-12 px-5 bg-gradient-to-b from-[#D63384] via-primary-red to-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer"
            onClick={() => onClick()}
        >
            <div className="text-base font-medium text-center text-white">
                Explore The Demo
            </div>
        </button>
    )
}

function AppStoreBtn({ name = "", onClick = () => { }, children }) {
    return (
        <button
            onClick={() => onClick()}
            className={"h-10 px-5 bg-primary-red rounded-lg inline-flex justify-center items-center gap-2.5 transition-all duration-200 hover:shadow-inner-custom cursor-pointer "}
        >
            {children}
            <div className="text-[10px] text-nowrap font-medium text-center text-white">
                {name}
            </div>
        </button>
    )
}

function ProductGrid() {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative">



            {/* card 1 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/panel.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Super Admin Panel
                        </p>
                        <p className="text-base text-center text-white/60">
                            Manage the entire system, distribute e-money, and set business rules.
                        </p>
                    </div>

                    <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                </div>
            </div>

            {/* card 2 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/link.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            User Website
                        </p>
                        <p className="text-base text-center text-white/60">
                            A single admin panel to control your store, payments, and integrations.
                        </p>
                    </div>

                    <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                </div>
            </div>

            {/* card 3 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/store.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Store Admin Panel
                        </p>
                        <p className="text-base text-center text-white/60">
                            Control your store operations with a smart, all-in-one admin panel.
                        </p>
                    </div>

                    <ButtonLarge name="Explore The Demo" additionalClass="w-[220px]" />
                </div>
            </div>

            {/* card 4 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/user-app.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            User App
                        </p>
                        <p className="text-base text-center text-white/60">
                            A smooth shopping app with easy buying, tracking, and promo updates.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">
                        <ButtonIconSmall name="Google Play" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>
                        <ButtonIconSmall name="App Store" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>
            </div>



            {/* card 5 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/seller-app.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Seller App
                        </p>
                        <p className="text-base text-center text-white/60">
                            Helps vendors manage products, orders, and sales efficiently.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">
                        <ButtonIconSmall name="Google Play" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>
                        <ButtonIconSmall name="App Store" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>
            </div>



            {/* card 6 */}
            <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 ">
                <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                <div className="flex flex-col items-center gap-6 ">
                    <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                        <img src="/icons/sections/onlineBusiness/delivery.svg" alt="" />
                    </div>
                    <div className="w-full space-y-4">
                        <p
                            className="w-full text-2xl font-semibold text-center text-white"
                        >
                            Delivery Man App
                        </p>
                        <p className="text-base text-center text-white/60">
                            Manage deliveries, track routes, and update order statuses in real time.
                        </p>
                    </div>

                    <div className="flex justify-center items-center gap-[10px]">
                        <ButtonIconSmall name="Google Play" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>
                        <ButtonIconSmall name="App Store" >
                            <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                        </ButtonIconSmall>

                    </div>
                </div>
            </div>


            {/* this is for gradient background. it's now under development */}

            {/* <div className="relative z-10">
                <GradientContainer>
                    <div className=" p-6 rounded-xl overflow-hidden">
                        asdfasdfsdf
                    </div>
                </GradientContainer>
            </div> */}
        </div>
    )
}

function ProductSlider() {


    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        arrow: false,
        autoplay: true,
        speed: 500,
        rtl: false,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1.5,
                    initialSlide: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Slider {...settings}>

                {/* card 1 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/panel.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    Super Admin Panel
                                </p>
                                <p className="text-base text-center text-white/60">
                                    Manage the entire system, distribute e-money, and set business rules.
                                </p>
                            </div>

                            <ExploreBtn />
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/link.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    User Website
                                </p>
                                <p className="text-base text-center text-white/60">
                                    A single admin panel to control your store, payments, and integrations.
                                </p>
                            </div>
                            <ExploreBtn />
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className='px-3 '>

                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/store.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    Store Admin Panel
                                </p>
                                <p className="text-base text-center text-white/60">
                                    Control your store operations with a smart, all-in-one admin panel.
                                </p>
                            </div>

                            <ExploreBtn />
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/user-app.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    User App
                                </p>
                                <p className="text-base text-center text-white/60">
                                    A smooth shopping app with easy buying, tracking, and promo updates.
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-2.5">
                                <AppStoreBtn name="Google Play" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>
                                <AppStoreBtn name="App Store" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>

                            </div>
                        </div>
                    </div>

                </div>

                {/* card 5 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/seller-app.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    Seller App
                                </p>
                                <p className="text-base text-center text-white/60">
                                    Helps vendors manage products, orders, and sales efficiently.
                                </p>
                            </div>


                            <div className="flex justify-center items-center gap-2.5">
                                <AppStoreBtn name="Google Play" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>
                                <AppStoreBtn name="App Store" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>

                            </div>
                        </div>
                    </div>

                </div>

                {/* card 6 */}
                <div className='px-3 '>
                    <div className="bg-white/3 border-[1.3px] border-white/8 transition-all duration-200 hover:border-primary-red/50 rounded-xl overflow-hidden relative z-10 p-6 h-full">
                        <span className=" text-sm font-medium text-black py-[3.5px] text-center absolute bg-yellow-400 w-52 rotate-45 top-4 -right-[70px]">Add-on</span>

                        <div className="flex flex-col items-center gap-6 ">
                            <div className="w-[68px] h-[68px] border-[1.3px] border-primary-red/30 flex justify-center items-center rounded-xl">
                                <img src="/icons/sections/onlineBusiness/delivery.svg" alt="" />
                            </div>
                            <div className="w-full space-y-4">
                                <p
                                    className="w-full text-2xl font-semibold text-center text-white"
                                >
                                    Delivery Man App
                                </p>
                                <p className="text-base text-center text-white/60">
                                    Manage deliveries, track routes, and update order statuses in real time.
                                </p>
                            </div>


                            <div className="flex justify-center items-center gap-2.5">
                                <AppStoreBtn name="Google Play" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>
                                <AppStoreBtn name="App Store" >
                                    <img src="/icons/download-white.svg" alt="" className="w-4 h-4" />
                                </AppStoreBtn>

                            </div>
                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    )
}

function AllServices() {

    // all services are in here
    const services = []

    return (
        <div className="relative">
            <div className="absolute -top-20 -left-20 bg-primary-red z-0 block w-96 h-96 rounded-full blur-[150px]"></div>


            <div className="hidden lg:block">
                <ProductGrid />
            </div>



            <div className="block lg:hidden">
                <ProductSlider />
            </div>
        </div>

    )
}


export default function OnlineBusinessSection() {
    return (
        <>
            <SectionContainer
                HeadingComponent={
                    <Heading headingText="Simplify Your Online Business" subHeadingText="Manage, sell, and grow—all from one powerful platform." varient="dark" />
                }
                mainComponent={<AllServices />}
                backgroundColorClass="bg-deep-navy"
            />
        </>
    );
}