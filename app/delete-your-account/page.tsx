import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.svg";
import Footer from "@/components/Footer";

export default function DeleteAccountPage() {
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
            Account & Data
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Account Deletion &amp; Data Retention Policy
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-700">
            Delete Your Account
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              July 30, 2026
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            1. Overview
          </h2>

          <p className="text-gray-600 leading-7">
            TiTurf allows users to delete their account at any time. This page
            outlines the account deletion process and our data retention
            policy.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            2. How to Delete Your Account
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            You can delete your account directly from the TiTurf app by
            following these steps:
          </p>

          <ol className="list-decimal pl-6 space-y-3 text-gray-600 leading-7">
            <li>Open the TiTurf app.</li>
            <li>Sign in to your account.</li>
            <li>
              Go to <span className="font-semibold text-gray-800">Profile</span>.
            </li>
            <li>
              Select{" "}
              <span className="font-semibold text-gray-800">
                Delete my account
              </span>.
            </li>
            <li>Confirm your password to complete the deletion.</li>
          </ol>

          <div className="mt-7 border-l-4 border-gray-300 pl-5 py-1">
            <p className="text-gray-600 leading-7">
              Alternatively, you can request account deletion by emailing us at{" "}
              <a
                href="mailto:support@titurf.in?subject=Account%20Deletion%20Request"
                className="font-semibold text-gray-900 underline underline-offset-4"
              >
                support@titurf.in
              </a>{" "}
              from your registered email address with the subject{" "}
              <span className="font-semibold text-gray-800">
                &quot;Account Deletion Request.&quot;
              </span>{" "}
              Your request will be processed within 30 days after verification.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3. What Data Is Deleted
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            When your account is deleted, the following is immediately and
            permanently removed:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-7">
            <li>
              Your active login sessions on all devices (you&apos;re signed out
              everywhere).
            </li>

            <li>
              Your ability to sign back in with that account.
            </li>

            <li>
              Device tokens used for push notifications, so you stop receiving
              them.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            4. What Data May Be Retained
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            The following information is retained after deletion, since
            it&apos;s needed for accounting, dispute resolution, fraud
            prevention, and legal/regulatory record-keeping:
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-7 mb-6">
            <li>
              Your profile information (name, email address, phone number).
            </li>

            <li>
              Booking history and payment/refund records.
            </li>

            <li>
              A security record noting that the account was deleted.
            </li>
          </ul>

          <p className="text-gray-600 leading-7">
            None of this retained data is visible to you, other members, or
            facility staff once your account is deleted. It remains under the
            same access controls as before. Retained data is kept only as long
            as necessary for these purposes and deleted or anonymized once no
            longer required by law or legitimate business need.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            5. Processing Time
          </h2>

          <div className="space-y-4 text-gray-600 leading-7">
            <p>
              Deletion requested in-app takes effect immediately. Your login
              access is revoked as soon as you confirm.
            </p>

            <p>
              Deletion requested by email is completed within{" "}
              <span className="font-semibold text-gray-800">30 days</span>{" "}
              after successful verification.
            </p>

            <p>
              Once processed, the loss of login access is permanent and cannot
              be undone.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            6. Need Help?
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            If you have any questions or experience issues deleting your
            account, please contact us:
          </p>

          <div className="border border-gray-200 rounded-2xl p-5 md:p-7">
            <p className="text-sm text-gray-500 mb-1">
              Email
            </p>

            <a
              href="mailto:support@titurf.in"
              className="font-semibold hover:underline"
            >
              support@bubbl.cards
            </a>
          </div>
        </section>
      </div>

      <Footer variant="subpage" />
    </main>
  );
}