
import Link from "next/link";
import styles from "./Navbar.module.css"
import ButtonAnimationLarge from "../Button/AnimationLarge";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SupportBtn from "../Button/SupportBtn";
import NavLinks from "./NavLinks";
import Sidepanel from "../Sidepanel/Sidepanel";
import ButtonIconLarge from "../Button/ButtonIconLarge";
import ButtonIconSmall from "../Button/ButtonIconSmall";


export default function Navbar() {


    return (

        <>
            <nav className="bg-white border-b border-b-gray-50 sticky top-0 right-0 z-20">
                <div className="container  h-full">
                    <div className="flex justify-between items-center gap-[68px] h-full">


                        <Link href="/" className="h-[88px] flex justify-start items-center">
                            <img src="icons/logos/logo-dark.svg" alt="" className=" w-32 h-7 sm:w-[150px] sm:h-auto" />
                        </Link>


                        <div className="hidden lg:block flex-1 px-[30px] ">
                            <NavLinks />
                        </div>

                        <section
                            className="hidden lg:inline-flex justify-center items-center gap-4"
                        >
                            <ButtonIconLarge name="Buy Now" >
                                
                                <ArrowRightIcon className="h-5 w-5 text-white" />
                            </ButtonIconLarge>
                                        {/* onClick={() => setIsOpen(!isOpen)} */}
                        </section>

                        <section
                            className="flex justify-center items-center gap-4 lg:hidden "
                        >

                            <ButtonIconSmall name="Buy Now" additionalClass="flex-row-reverse">
                                
                                <ArrowRightIcon className="h-4 w-4 text-white" />
                            </ButtonIconSmall>
                            <Sidepanel />
                        </section>
                    </div>
                </div>
            </nav>

        </>
    )
}