import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.svg";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
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
            Terms and Conditions
          </h1>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              July 30, 2026
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            1. Acceptance of Terms
          </h2>

          <p className="text-gray-600 leading-7">
            By downloading, accessing, or using our mobile application or
            website, you agree to be bound by these Terms and Conditions. If
            you do not agree with any part of these terms, you must not use
            the platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            2. Eligibility &amp; Account Approval
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            Access to the app and sports facility bookings is strictly
            restricted to approved members only.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-7">
            <li>
              Account registration requires valid address proof. Accounts are
              activated only after explicit approval by the institution&apos;s
              administration team.
            </li>

            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials. Sharing accounts or booking on behalf of
              unauthorized guests is strictly prohibited.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3. Facility Usage Rules
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-600 leading-7">
            <li>
              Booked slots are strictly non-transferable to other users or
              non-approved individuals.
            </li>

            <li>
              Users must adhere to the specific rules, safety protocols, and
              dress codes of each sports facility (e.g., non-marking shoes for
              indoor courts).
            </li>

            <li>
              Any damage caused to the equipment or premises during your
              booking slot will be charged to the user, and may lead to
              suspension of app privileges or disciplinary action by the
              institution.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            4. Code of Conduct &amp; Misuse
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-600 leading-7">
            <li>
              Aggressive behavior, vandalism, substance use, or unauthorized
              entry will result in immediate termination of booking rights.
            </li>

            <li>
              The management reserves the right to cancel or modify any booking
              at short notice due to institutional events, weather conditions,
              or mandatory facility maintenance.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            5. Limitation of Liability
          </h2>

          <p className="text-gray-600 leading-7">
            The app developers and the educational institution are not liable
            for any personal injury, physical harm, loss, or damage to personal
            belongings incurred while using the sports facilities within the
            compound. Users utilize the facilities voluntarily and at their own
            risk.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            6. Governing Law &amp; Jurisdiction
          </h2>

          <p className="text-gray-600 leading-7">
            These terms are governed by and construed in accordance with the
            laws of India. Any legal disputes arising out of the use of this
            service shall be subject to the exclusive jurisdiction of the
            competent courts in India.
          </p>
        </section>

      </div>

      <Footer variant="subpage" />
    </main>
  );
}