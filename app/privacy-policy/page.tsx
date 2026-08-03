import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.svg";
import Footer from "@/components/Footer";
export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
         <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">

  {/* Logo + TI SCHOOL TURF */}
  <Link href="/" className="flex items-center gap-3">
    <Image
      src={logo}
      alt="TI School Turf Logo"
      className="w-auto h-12 md:h-11 object-contain"
      priority
    />

    <div className="flex flex-col leading-tight">
      <span className="text-[15px] md:text-[15px] font-bold text-black">
        TI SCHOOL
      </span>

      <span className="text-[15px] md:text-[15px] font-bold text-black">
        TURF
      </span>
    </div>
  </Link>

  {/* Back */}
  <Link
    href="/"
    className="text-sm font-medium text-gray-600 hover:text-[#1919c7] transition"
  >
    ← Back
  </Link>

</div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-16">

        {/* Page Heading */}
        <div className="mb-10 md:mb-14">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 mb-3">
            Legal
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              July 30, 2026
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Last Updated:
              </span>{" "}
              July 30, 2026
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-base md:text-lg text-gray-600 leading-8">
            Welcome to our sports facility booking platform. We are committed
            to protecting your personal data and respecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our mobile application and website.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            1. Information We Collect
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Because access is restricted to approved members of our educational
            institution compound, we collect specific details to verify your
            identity and manage bookings:
          </p>

          <div className="space-y-5 pl-1">
            <div>
              <h3 className="font-semibold mb-1">
                Personal Identification Information
              </h3>
              <p className="text-gray-600 leading-7">
                Name, email address, phone number, and residential address.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Approval &amp; Access Data
              </h3>
              <p className="text-gray-600 leading-7">
                Profile status, and approval logs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Usage &amp; Booking Data
              </h3>
              <p className="text-gray-600 leading-7">
                Sports facility reserved, date/time slots, booking history, and
                check-in status.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Device &amp; Technical Data
              </h3>
              <p className="text-gray-600 leading-7">
                IP address, device ID, app usage statistics, and operating
                system version.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            2. How We Use Your Information
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            We use the collected information for the following core operational
            purposes:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-7">
            <li>To verify your address and grant access to the app.</li>

            <li>
              To process, confirm, and manage your facility bookings.
            </li>

            <li>
              To enforce compound safety, discipline, and facility usage
              guidelines.
            </li>

            <li>
              To send booking confirmations, updates, or administrative alerts
              via SMS, Email, or In-App notifications.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3. Data Sharing and Disclosure
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            We do not sell, rent, or trade your personal information. We may
            share data only under the following conditions:
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="font-semibold mb-1">
                Institutional Authorities
              </h3>

              <p className="text-gray-600 leading-7">
                Booking records and user details may be shared with campus
                security or administration for safety, maintenance, or
                disciplinary compliance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Service Providers
              </h3>

              <p className="text-gray-600 leading-7">
                Third-party vendors (e.g., cloud hosting or SMS gateway
                providers) who assist in running the platform under strict
                confidentiality agreements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Legal Compliance
              </h3>

              <p className="text-gray-600 leading-7">
                When required by applicable Indian laws or legal proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            4. Data Security &amp; Retention
          </h2>

          <p className="text-gray-600 leading-7">
            We implement standard technical and organizational security
            measures to protect your data from unauthorized access or breach.
            We retain your personal data for as long as you maintain an active
            approved account with the institution.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            5. Contact Us
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            For any privacy-related queries or requests regarding your personal
            information, please contact the System Administrator at:
          </p>

          {/* Contact Box */}
          <div className=" border border-gray-200 rounded-2xl p-5 md:p-7">
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Email</p>

              <a
                href="mailto:support@bubbl.cards"
                className="font-semibold hover:underline"
              >
                support@bubbl.cards
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Address</p>

              <p className="font-medium leading-7">
                No. 1&amp; 2, Madras Thiruvallur High Rd,
                <br className="hidden sm:block" />
                {" "}Tiruvenkadam Nagar, Ambattur,
                <br className="hidden sm:block" />
                {" "}Chennai, Tamil Nadu 600053
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer variant="subpage" />
    </main>
  );
}