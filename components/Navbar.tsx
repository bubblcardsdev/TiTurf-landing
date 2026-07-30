import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 z-20 w-full">
            <div
                className=" w-full flex items-center justify-between px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-16 lg:py-12 "
            >
                {/* LOGO */}
                <div className="flex items-center gap-2 sm:gap-2.5">
                    <Image
                        src="/images/logo.svg"
                        alt="TI School Turf"
                        width={60}
                        height={60}
                        priority
                        className=" w-[38px] sm:w-[44px] md:w-[48px] lg:w-[55px] h-auto " />

                    <p
                        className=" text-white text-[11px] sm:text-[13px] md:text-[15px] lg:text-lg font-bold leading-[1.1] whitespace-nowrap "
                    >
                        TI SCHOOL
                        <br />
                        TURF
                    </p>
                </div>

                {/* RIGHT */}
                <div
                    className=" flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 "
                >
                    {/* X */}
                    <a
                        href="#"
                        aria-label="X"
                        className=" w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white text-[14px] sm:text-base md:text-xl hover:bg-white/40 transition"
                    >
                        <FaXTwitter />
                    </a>

                    <a
                        href="#"
                        aria-label="Instagram"
                        className=" w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm text-white text-[14px] sm:text-base md:text-xl hover:bg-white/40 transition "
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://titurf.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit TI Turf"
                        className=" ml-0.5 sm:ml-1 md:ml-2 flex items-center bg-white rounded-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 gap-1 sm:gap-2 md:gap-3 cursor-pointer hover:bg-white/90 transition "
                    >
                        <span
                            className=" hidden min-[400px]:block text-black text-[10px] sm:text-xs md:text-sm font-semibold whitespace-nowrap "
                        >
                            Get the App
                        </span>

                        <a
                            href="#"
                            aria-label="Download the TI Turf app"
                            className="flex items-center justify-center"
                        >
                            <Image
                                src="/images/appstore.svg"
                                alt="Download app"
                                width={40}
                                height={26}
                                className=" object-contain w-[30px] h-[20px] sm:w-[34px] sm:h-[22px] md:w-[40px] md:h-[26px] "
                            />
                        </a>
                    </a>
                </div>
            </div>
        </nav>
    );
}