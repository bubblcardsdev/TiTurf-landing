import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Images/logo.svg"

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">

          <Link href="/">
            <Image
              src={logo}
              alt="TITURF Logo"
              className="w-auto h-10 md:h-12 object-contain"
              priority
            />
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-black transition"
          >
            Back to Home
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
            Cancellation &amp; Refund Policy
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
            1. Payment &amp; Booking Fees
          </h2>

          <p className="text-gray-600 leading-7">
            Where facility usage or booking fees apply, all payments made
            through the app must be completed using designated and approved
            payment gateways. If a facility is offered free of charge,
            monetary refunds will not apply, but slot cancellation rules still
            govern user account standing.
          </p>
        </section>

        {/* Section 2 */}
<section className="mb-12">
  <h2 className="text-xl md:text-2xl font-bold mb-4">
    2. User-Initiated Cancellations
  </h2>

  <p className="text-gray-600 leading-7 mb-6">
    Refund or credit eligibility depends on when the booking is cancelled
    relative to the scheduled slot start time.
  </p>

 <div className="overflow-x-auto">
  <table className="w-full border-collapse border border-gray-400 text-left">
    
    <thead>
      <tr className="bg-gray-200">
        <td className="w-1/2 border border-gray-400 px-5 py-4 text-gray-900">
          Cancellation Window
        </td>

        <td className="w-1/2 border border-gray-400 px-5 py-4 text-gray-700">
          Refund / Credit Eligibility
        </td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="border border-gray-400 px-5 py-4 text-gray-700">
          24 Hours or more prior to slot start time
        </td>

        <td className="border border-gray-400 px-5 py-4 text-gray-700">
          100% Refund or full slot credit
        </td>
      </tr>

      <tr>
        <td className="border border-gray-400 px-5 py-4 text-gray-700">
          Less than 24 Hours prior to slot start time
        </td>

        <td className="border border-gray-400 px-5 py-4 text-gray-700">
          No Refund / Cancellation not allowed
        </td>
      </tr>

    </tbody>
  </table>
</div>
</section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3. Facility-Initiated Cancellations
          </h2>

          <p className="text-gray-600 leading-7 mb-5">
            If a booking is canceled by the institution or app administration
            due to unforeseen circumstances (such as emergency facility
            repairs, severe weather conditions, or mandatory official campus
            events):
          </p>

          <ul className="list-disc pl-6 text-gray-600 leading-7">
            <li>
              A 100% refund or immediate slot reschedule option will be
              provided automatically to the affected user.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            4. Refund Processing Time
          </h2>

          <div className="space-y-4 text-gray-600 leading-7">
            <p>
              Approved monetary refunds will be processed within{" "}
              <span className="font-semibold text-gray-800">
                7 to 10 business days
              </span>{" "}
              back to the original method of payment used during booking.
            </p>

            <p>
              Internal app credits (if applicable) will be reflected
              immediately in your app profile.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}