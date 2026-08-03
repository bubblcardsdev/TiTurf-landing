"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";
import cricket from "../public/Images/cricket.svg";
import football from "../public/Images/football.svg";
import badminton from "../public/Images/batmin.svg";
import jogging from "../public/Images/jogging.svg";
import basketball from "../public/Images/basketball.svg";

import cricketBg from "../public/Images/cricketBg.png";
import footballBg from "../public/Images/newfootball.png";
import badmintonBg from "../public/Images/badmintonImageBg.png";
import joggingBg from "../public/Images/newjog.png";
import basketballBg from "../public/Images/newbase.png";


export const games = [
  {
    name: "Cricket",
    subName: "Turf",
    icon: cricket,
    background: cricketBg,
  },
  {
    name: "Football",
    subName: "Court",
    icon: football,
    background: footballBg,
  },
  {
    name: "Batminton",
    subName: "Court",
    icon: badminton,
    background: badmintonBg,
  },
  {
    name: "Jogging",
    subName: "Track",
    icon: jogging,
    background: joggingBg,
  },
  {
    name: "Basketball",
    subName: "Court",
    icon: basketball,
    background: basketballBg,
  },
];
export default function Home() {
  const [currentGame, setCurrentGame] = useState(0);

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  const game = games[currentGame];

  return (
    <main
      className="relative w-full min-h-[100dvh] overflow-x-hidden overflow-y-auto lg:h-[100dvh] lg:overflow-hidden flex flex-col justify-between"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

      <div className="absolute inset-0">
        {games.map((game, index) => (
          <Image
            key={game.name}
            src={game.background}
            alt={`${game.name} background`}
            fill
            priority
            className={`
        object-cover
        transition-opacity
        duration-1000
        ease-in-out
        ${currentGame === index
                ? "opacity-100"
                : "opacity-0"
              }
      `}
            style={{
              transform: isHovering ? "scale(1.06)" : "scale(1)",
              transformOrigin: `${position.x}% ${position.y}%`,
              transition:
                "opacity 1000ms ease-in-out, transform 300ms ease-out",
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 z-[5] shadow-[inset_0_0_120px_rgba(0,0,0,0.8)] sm:shadow-[inset_0_0_160px_rgba(0,0,0,0.85)]" />
      </div>

      <Navbar />

      <HeroContent
        currentGame={currentGame}
        setCurrentGame={setCurrentGame}
      />

      <Footer />
    </main>
  );
}