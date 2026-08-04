import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.svg";
import { ArrowLeft } from "lucide-react";

export default function SubpageHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src={logo}
            alt="TI School Turf Logo"
            className="w-auto h-11 object-contain transition-transform group-hover:scale-105"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold text-black tracking-tight">
              TI SCHOOL
            </span>
            <span className="text-[15px] font-bold text-black tracking-tight">
              TURF
            </span>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-black transition-colors bg-gray-100 hover:bg-gray-200/80 px-3.5 py-1.5 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </header>
  );
}
