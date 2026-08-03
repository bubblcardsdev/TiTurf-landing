import Link from "next/link";

interface FooterProps {
  variant?: "landing" | "subpage";
  className?: string;
}

export default function Footer({ variant = "landing", className = "" }: FooterProps) {
  if (variant === "subpage") {
    return (
      <footer className={`border-t border-gray-200 bg-white py-8 px-5 sm:px-8 text-xs text-gray-500 ${className}`}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 TITURF. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/terms-and-conditions" className="hover:underline whitespace-nowrap">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:underline whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="/support" className="hover:underline whitespace-nowrap">
              Support
            </Link>
            <Link href="/refund-policy" className="hover:underline whitespace-nowrap">
              Refund Policy
            </Link>
            <Link href="/delete-your-account" className="hover:underline whitespace-nowrap">
              Delete Your Account
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={`absolute bottom-0 left-0 z-20 w-full text-white ${className}`}>
      <div
        className="
          w-full
          px-4 sm:px-6 md:px-10 lg:px-16
          pb-4 sm:pb-5 lg:pb-6

          flex flex-col
          lg:flex-row
          items-center
          lg:justify-between

          gap-3 lg:gap-6
          text-[9px] sm:text-[10px] md:text-[11px]
        "
      >
        {/* Copyright */}
        <p className="whitespace-nowrap text-center lg:text-left">
          All Rights Reserved @TITURF 2026
        </p>

        {/* Links */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            lg:justify-end
            gap-x-4
            sm:gap-x-6
            lg:gap-x-8
            gap-y-2
          "
        >
          <Link
            href="/terms-and-conditions"
            className="hover:underline whitespace-nowrap"
          >
            Terms &amp; Conditions
          </Link>

          <Link
            href="/privacy-policy"
            className="hover:underline whitespace-nowrap"
          >
            Privacy Policy
          </Link>

          <Link
            href="/support"
            className="hover:underline whitespace-nowrap"
          >
            Support
          </Link>

          <Link
            href="/refund-policy"
            className="hover:underline whitespace-nowrap"
          >
            Refund Policy
          </Link>

          <Link
            href="/delete-your-account"
            className="hover:underline whitespace-nowrap"
          >
            Delete Your Account
          </Link>
        </div>
      </div>
    </footer>
  );
}