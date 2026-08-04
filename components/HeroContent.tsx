"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown, Monitor, Smartphone } from "lucide-react";
import cricket from "../public/Images/cricket.svg";
import football from "../public/Images/football.svg";
import badminton from "../public/Images/batmin.svg";
import jogging from "../public/Images/jogging.svg";
import basketball from "../public/Images/basketball.svg";

const games = [
  {
    name: "Cricket",
    subName: "Turf",
    icon: cricket,
  },
  {
    name: "Football",
    subName: "Court",
    icon: football,
  },
  {
    name: "Badminton",
    subName: "Court",
    icon: badminton,
  },
  {
    name: "Jogging",
    subName: "Track",
    icon: jogging,
  },
  {
    name: "Basketball",
    subName: "Court",
    icon: basketball,
  },
];

interface HeroContentProps {
  currentGame: number;
  setCurrentGame: React.Dispatch<React.SetStateAction<number>>;
}

export default function HeroContent({
  currentGame,
  setCurrentGame,
}: HeroContentProps) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;

    setDirection("up");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentGame((prev) => (prev + 1) % games.length);

      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 250);
  };

  const handlePrevious = () => {
    if (isAnimating) return;

    setDirection("down");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentGame(
        (prev) => (prev - 1 + games.length) % games.length
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 250);
  };

  const game = games[currentGame];

  return (
    <div
      className="
        relative lg:absolute z-10
        left-0 right-0 lg:left-[4%] lg:right-[4%]
        px-4 sm:px-6 md:px-8 lg:px-0
        pt-[80px] sm:pt-[95px] md:pt-[110px] lg:pt-0
        lg:top-[130px] xl:top-[140px]
        max-[1500px]:lg:top-[125px]
        max-[1400px]:lg:top-[115px]
        [@media(max-height:850px)]:lg:top-[130px]
        [@media(max-height:750px)]:lg:top-[100px]
        text-white
        pb-8 lg:pb-0
      "
    >
      {/* Feature Pills */}
      <div
        className=" flex flex-wrap items-center gap-1.5 sm:gap-2.5 md:gap-3 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-[1400px]:mb-8 [@media(max-height:850px)]:mb-9 [@media(max-height:750px)]:mb-9 "
      >
        <span
          className=" apple-glass-pill rounded-full px-3 py-1 sm:px-4 sm:py-2 text-[10px] min-[380px]:text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap "
        >
          • &nbsp; Easy Slot Booking
        </span>

        <span
          className=" apple-glass-pill rounded-full px-3 py-1 sm:px-4 sm:py-2 text-[10px] min-[380px]:text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap "
        >
          • &nbsp; Real-time Availability
        </span>

        <span
          className=" apple-glass-pill rounded-full px-3 py-1 sm:px-4 sm:py-2 text-[10px] min-[380px]:text-[11px] sm:text-xs md:text-sm font-semibold whitespace-nowrap "
        >
          • &nbsp; Secure Payments
        </span>
      </div>

      {/* Heading */}
      <h1 className=" font-semibold tracking-tight text-[30px] min-[380px]:text-[35px] leading-[1.08] sm:text-[44px] sm:leading-[1.1] md:text-[52px] md:leading-[1.12] lg:text-[60px] xl:text-[68px] xl:leading-[1.15] [@media(max-height:850px)]:lg:text-[55px] [@media(max-height:750px)]:lg:text-[42px] ">
        Book Your Game
        <br />
        Anytime in Just
        <br />
        One Click
      </h1>

      <div
        className=" mt-5 sm:mt-8 md:mt-10 lg:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-7 md:gap-8 lg:gap-10 max-[1400px]:lg:mt-8 [@media(max-height:850px)]:lg:mt-7 [@media(max-height:750px)]:lg:mt-5 "
      >
        <div
          className=" w-full md:w-[45%] lg:w-[340px] xl:w-[380px]"
        >
          {/* Description */}
          <p
            className=" max-w-[360px] text-[13px] leading-[1.4] sm:text-[14px] md:text-[15px] lg:text-[17px] font-medium mb-3 sm:mb-5 lg:mb-6 [@media(max-height:750px)]:lg:text-[16px] "
          >
            Whether it&apos;s football, cricket, or any casual matches with
            friends, your one perfect ground is just a tap away.
          </p>

          <div
            className="
              flex items-center
              gap-2.5 sm:gap-3
              mt-4 sm:mt-6 md:mt-7 lg:mt-14
              max-[1400px]:lg:mt-8
              [@media(max-height:850px)]:lg:mt-6
              [@media(max-height:750px)]:lg:mt-6
            "
          >
            {/* Mobile icon - visible below md */}
            <Smartphone
              strokeWidth={1.5}
              className="
                shrink-0
                w-[28px] h-[28px]
                sm:w-[36px] sm:h-[36px]
                md:hidden
              "
            />

            {/* Monitor - tablet, laptop & desktop */}
            <Monitor
              strokeWidth={1.5}
              className=" hidden md:block shrink-0 md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] [@media(max-height:750px)]:lg:w-[38px] [@media(max-height:750px)]:lg:h-[38px] "
            />

            <p
              className=" text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-[1.2] max-[1400px]:lg:text-[16px] [@media(max-height:750px)]:lg:text-[15px] "
            >
              No more waiting,
              <br />
              No more manual bookings.
            </p>
          </div>
        </div>

        <div
          className=" w-full sm:max-w-[360px] md:w-[320px] md:max-w-none lg:w-[290px] xl:w-[330px] apple-liquid-glass p-4 sm:p-5 "
        >
          <h3
            className=" text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] font-semibold mb-2 sm:mb-3 relative z-10 "
          >
            Check Game TURFs
          </h3>

          <div className="flex items-center justify-between gap-3 relative z-10">
            <div className=" relative h-[58px] sm:h-[65px] md:h-[70px] lg:h-[90px] flex-1 min-w-0 overflow-hidden [@media(max-height:750px)]:lg:h-[70px] "
            >
              <div
                className={` absolute inset-0 flex items-center gap-3 sm:gap-4 lg:gap-5 transition-all duration-300
                  ease-in-out
                  ${isAnimating
                    ? direction === "up"
                      ? "-translate-y-full opacity-0"
                      : "translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                  }
                `}
              >
                {/* Game Icon */}
                <Image
                  src={game.icon}
                  alt={game.name}
                  width={80}
                  height={90}
                  className=" shrink-0 object-contain w-[44px] h-[50px] sm:w-[54px] sm:h-[62px] md:w-[60px] md:h-[70px] lg:w-[75px] lg:h-[90px] [@media(max-height:750px)]:lg:w-[59px] [@media(max-height:750px)]:lg:h-[60px] "
                />

                {/* Game Name */}
                <div
                  className=" min-w-0 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold leading-[1.05] "
                >
                  <p className="truncate">{game.name}</p>
                  <p>{game.subName}</p>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div
              className=" shrink-0 flex flex-col gap-2 sm:gap-2.5 lg:gap-4 [@media(max-height:750px)]:lg:gap-2 "
            >
              {/* Previous */}
              <button
                onClick={handlePrevious}
                className=" apple-glass-btn w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[38px] md:h-[38px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center cursor-pointer "
                aria-label="Previous turf"
              >
                <ChevronUp
                  strokeWidth={1.75}
                  className=" w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px] "
                />
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className=" apple-glass-btn w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[38px] md:h-[38px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center cursor-pointer "
                aria-label="Next turf"
              >
                <ChevronDown
                  strokeWidth={1.75}
                  className=" w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] lg:w-[25px] lg:h-[25px] "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
