"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroContent from "@/components/HeroContent";
import Footer from "@/components/Footer";

export const games = [
  {
    name: "Cricket",
    subName: "Turf",
    icon: "/images/cricket.svg",
    background: "/images/cricketBg.png",
  },
  {
    name: "Football",
    subName: "Court",
    icon: "/images/football.svg",
    background: "/images/footballBg.png",
  },
  {
    name: "Batminton",
    subName: "Court",
    icon: "/images/batmin.svg",
    background: "/images/badmintonImageBg.png",
  },
  {
    name: "Jogging",
    subName: "Track",
    icon: "/images/jogging.svg",
    background: "/images/jogginBg.png",
  },
  {
    name: "Basketball",
    subName: "Court",
    icon: "/images/basketball.svg",
    background: "/images/basketballBg.png",
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
      className="  relative w-full

    min-h-[100dvh]
    overflow-x-hidden
    overflow-y-auto

    lg:h-[100dvh]
    lg:overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic Background */}
     {/* Smooth changing backgrounds */}
<div className="absolute inset-0">
  {games.map((game, index) => (
    <Image
      key={game.background}
      src={game.background}
      alt={`${game.name} background`}
      fill
      priority
      className={`
        object-cover
        transition-opacity
        duration-1000
        ease-in-out
        ${
          currentGame === index
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