import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-20 w-full text-white">
      <div className="w-full px-8 md:px-14 lg:px-16 pb-6 flex items-center justify-between text-[11px]">

        {/* Left */}
        <div className="flex items-center gap-3">
        
        </div>

        {/* Center */}
        <p className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          All Rights Reserved @TITURF 2026
        </p>

<div className="flex items-center gap-6 md:gap-10 whitespace-nowrap">
  <Link
    href="/terms-and-conditions"
    className="hover:underline"
  >
    Terms & Conditions
  </Link>

  <Link
    href="/privacy-policy"
    className="hover:underline whitespace-nowrap"
  >
    Privacy Policy
  </Link>

  <Link
    href="/refund-policy"
    className="hover:underline"
  >
    Refund Policy
  </Link>
  <Link
    href="/delete-your-account"
    className="hover:underline"
  >
    Delete your Account
  </Link>
</div>

      </div>
    </footer>
  );
}