// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer
//       className="
//         absolute
//         bottom-0 left-0
//         z-20
//         w-full
//         text-white
//       "
//     >
//       <div
//         className="
//           w-full
//           px-5 sm:px-8 md:px-12 lg:px-16
//           pb-1 md:pb-6

//           flex
//           flex-col
//           md:flex-row
//           items-center
//           md:justify-between

//           gap-3 md:gap-0

//           text-[10px]
//           sm:text-[11px]
//         "
//       >
//         {/* LEFT */}
//         <div
//           className="
//             flex
//             flex-wrap
//             items-center
//             justify-center
//             md:justify-start
//             gap-x-3
//             gap-y-2
//           "
//         ></div>

//         {/* CENTER */}
//         <p
//           className="
//             md:absolute
//             md:left-1/2
//             md:-translate-x-1/2

//             whitespace-nowrap
//             text-center
//           "
//         >
//           All Rights Reserved @TITURF 2026
//         </p>

//         {/* RIGHT */}
//         <div
//           className="
//             flex
//             items-center
//             justify-center
//             gap-5
//             md:gap-8
//             lg:gap-10
//           "
//         >
//           <Link
//             href="/terms-conditions"
//             className="hover:underline whitespace-nowrap"
//           >
//             Terms & Conditions
//           </Link>

//           <Link
//             href="/privacy-policy"
//             className="hover:underline whitespace-nowrap"
//           >
//             Privacy Policy
//           </Link>
//           <Link
//             href="/refund-policy"
//             className="hover:underline whitespace-nowrap"
//           >
//             Refund Policy
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState } from "react";
import { X, Mouse } from "lucide-react";

type PolicyType = "terms" | "privacy" | "refund" | null;

const policyContent = {
  terms: {
    title: "Terms & Conditions (T&C)",
    content: (
      <>
        <h3 className="mt-4 font-bold">Effective Date: July 30, 2026</h3>

        <h3 className="mt-4 font-bold">1. Acceptance of Terms</h3>

        <p className="mt-2">
          By downloading, accessing, or using our mobile application or website,
          you agree to be bound by these Terms and Conditions. If you do not
          agree with any part of these terms, you must not use the platform.
        </p>

        <h3 className="mt-4 font-bold">2. Eligibility & Account Approval</h3>
        <ul>
          <li>
            i. Access to the app and sports facility bookings is strictly
            restricted to approved members only.
          </li>
          <li>
            ii. Account registration requires valid address proof. Accounts are
            activated only after explicit approval by the institution's
            administration team.
          </li>
          <li>
            iii. You are responsible for maintaining the confidentiality of your
            login credentials. Sharing accounts or booking on behalf of
            unauthorized guests is strictly prohibited.
          </li>
        </ul>
        <h3 className="mt-4 font-bold">3. Facility Usage Rules</h3>
        <ul>
          <li>
            i. Booked slots are strictly non-transferable to other users or
            non-approved individuals.
          </li>
          <li>
            ii. Users must adhere to the specific rules, safety protocols, and
            dress codes of each sports facility (e.g., non-marking shoes for
            indoor courts).
          </li>
          <li>
            iii. Any damage caused to the equipment or premises during your
            booking slot will be charged to the user, and may lead to suspension
            of app privileges or disciplinary action by the institution.
          </li>
        </ul>
        <h3 className="mt-4 font-bold">4. Code of Conduct & Misuse</h3>
        <ul>
          <li>
            i. Aggressive behavior, vandalism, substance use, or unauthorized
            entry will result in immediate termination of booking rights
          </li>
          <li>
            ii. The management reserves the right to cancel or modify any
            booking at short notice due to institutional events, weather
            conditions, or mandatory facility maintenance.
          </li>
        </ul>
        <h3 className="mt-4 font-bold">5. Limitation of Liability</h3>
        <p className="mt-2">
          The app developers and the educational institution are not liable for
          any personal injury, physical harm, loss, or damage to personal
          belongings incurred while using the sports facilities within the
          compound. Users utilize the facilities voluntarily and at their own
          risk.
        </p>

        <h3 className="mt-4 font-bold">6. Governing Law & Jurisdiction</h3>
        <p className="mt-2">
          These terms are governed by and construed in accordance with the laws
          of India. Any legal disputes arising out of the use of this service
          shall be subject to the exclusive jurisdiction of the competent courts
          in India.
        </p>
      </>
    ),
  },

  privacy: {
    title: "Privacy Policy",
    content: (
      <>
        <h4>Effective Date: July 30, 2026</h4>
        <h4>Last Updated: July 30, 2026</h4>
        <p>
          Welcome to our sports facility booking platform. We are committed to
          protecting your personal data and respecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our mobile application and website.
        </p>

        <h3 className="mt-4 font-bold">1. INFORMATION WE COLLECT</h3>

        <p className="mt-2">
          Because access is restricted to approved members of our educational
          institution compound, we collect specific details to verify your
          identity and manage bookings:
        </p>
        <ul>
          <li>
            i. Personal Identification Information: Name, email address, phone
            number, and residential address.
          </li>
          <li>
            ii. Approval & Access Data: Profile status, and approval logs.
          </li>
          <li>
            iii. Usage & Booking Data: Sports facility reserved, date/time
            slots, booking history, and check-in status.
          </li>
          <li>
            iv. Device & Technical Data: IP address, device ID, app usage
            statistics, and operating system version.
          </li>
        </ul>

        <h3 className="mt-4 font-bold">2. HOW WE USE INFORMATION</h3>

        <p className="mt-2">
          We use the collected information for the following core operational
          purposes:
        </p>
        <ul>
          <li>i. To verify your address and grant access to the app.</li>
          <li>ii. To process, confirm, and manage your facility bookings.</li>
          <li>
            iii. To enforce compound safety, discipline, and facility usage
            guidelines.
          </li>
          <li>
            iv. To send booking confirmations, updates, or administrative alerts
            via SMS, Email, or In-App notifications.
          </li>
        </ul>

        <h3 className="mt-4 font-bold">3. Data Sharing and Disclosure</h3>

        <p className="mt-2">
          We do not sell, rent, or trade your personal information. We may share
          data only under the following conditions:
        </p>
        <ul>
          <li>
            i. Institutional Authorities: Booking records and user details may
            be shared with campus security or administration for safety,
            maintenance, or disciplinary compliance.
          </li>
          <li>
            ii. Service Providers: Third-party vendors (e.g., cloud hosting or
            SMS gateway providers) who assist in running the platform under
            strict confidentiality agreements.
          </li>
          <li>
            iii. Legal Compliance: When required by applicable Indian laws or
            legal proceedings.
          </li>
        </ul>
        <h3 className="mt-4 font-bold">4. Data Security & Retention</h3>

        <p className="mt-2">
          We implement standard technical and organizational security measures
          to protect your data from unauthorized access or breach. We retain
          your personal data for as long as you maintain an active approved
          account with the institution.
        </p>
        <h3 className="mt-4 font-bold">5. Contact Us</h3>

        <p className="mt-2">
          For any privacy-related queries or requests regarding your personal
          information, please contact the System Administrator at:
        </p>
        <ul>
          <li>Email: support@bubbl.cards</li>
          <li>
            Address: No. 1& 2, Madras Thiruvallur High Rd, Tiruvenkadam Nagar,
            Ambattur, Chennai, Tamil Nadu 600053
          </li>
        </ul>
      </>
    ),
  },

  refund: {
    title: "Cancellation & Refund Policy",
    content: (
      <>
        <h3 className="mt-4 font-bold">Effective Date: July 30, 2026</h3>
        <h3 className="mt-4 font-bold">1. Payment & Booking Fees</h3>
        <p>
          Where facility usage or booking fees apply, all payments made through
          the app must be completed using designated and approved payment
          gateways. If a facility is offered free of charge, monetary refunds
          will not apply, but slot cancellation rules still govern user account
          standing.
        </p>

        <h3 className="mt-4 font-bold">2. User-Initiated Cancellations</h3>

        <ul>
          <li>i. Cancellation Window - Refund / Credit Eligibility</li>
          <li>
            ii. 24 Hours or more prior to slot start time - 100% Refund or full
            slot credit
          </li>
          <li>
            iii. Less than 24 Hours prior to slot start time - No Refund /
            Cancellation not allowed
          </li>
        </ul>

        <h3 className="mt-4 font-bold">3. Facility-Initiated Cancellations</h3>

        <p className="mt-2">
          If a booking is canceled by the institution or app administration due
          to unforeseen circumstances (such as emergency facility repairs,
          severe weather conditions, or mandatory official campus events):
        </p>
        <p className="mt-2">
          A 100% refund or immediate slot reschedule option will be provided
          automatically to the affected user.
        </p>

        <h3 className="mt-4 font-bold">4. Refund Processing Time</h3>

        <p className="mt-2">
          Approved monetary refunds will be processed within 7 to 10 business
          days back to the original method of payment used during booking.
        </p>
        <p className="mt-2">
          Internal app credits (if applicable) will be reflected immediately in
          your app profile.
        </p>
      </>
    ),
  },
};

export default function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const policy = activePolicy ? policyContent[activePolicy] : null;

  return (
    <>
      <footer
        className=" absolute bottom-0 left-0 z-20  w-full text-white "
      >
        <div
          className=" w-full px-5 sm:px-8 md:px-12 lg:px-16 pb-1 md:pb-6 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0 text-[10px] sm:text-[11px]
          "
        >
          <div
            className=" flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-2 "
          />

          <p
            className=" md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap text-center "
          >
            All Rights Reserved @TITURF 2026
          </p>

          <div
            className=" flex items-center justify-center gap-4 md:gap-8 lg:gap-10
            "
          >
            <button
              onClick={() => setActivePolicy("terms")}
              className="hover:underline whitespace-nowrap cursor-pointer"
            >
              Terms & Conditions
            </button>

            <button
              onClick={() => setActivePolicy("privacy")}
              className="hover:underline whitespace-nowrap cursor-pointer"
            >
              Privacy Policy
            </button>

            <button
              onClick={() => setActivePolicy("refund")}
              className="hover:underline whitespace-nowrap cursor-pointer"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </footer>

      <div
        onClick={() => setActivePolicy(null)}
        className={` fixed inset-0 z-40 bg-black/40 backdrop-blur-[4px] transition-all duration-500
          ${
            activePolicy
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      <div
        className={` fixed z-50 left-1/2  bottom-0 w-[92%] sm:w-[85%] md:w-[70%] lg:w-[740px] h-[75dvh] md:h-[82dvh] bg-[#242424] text-white rounded-t-[40px] md:rounded-t-[55px] border-t-[10px] border-[#5436ff] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            activePolicy
              ? "-translate-x-1/2 translate-y-0"
              : "-translate-x-1/2 translate-y-full"
          }
        `}
      >
        {policy && (
          <div className="h-full flex flex-col">
            <div
              className=" px-6 sm:px-8 md:px-12 pt-8 md:pt-10 flex items-center justify-between "
            >
              <div className="flex items-center gap-2">
                <img
                  src="/images/logo.svg"
                  alt="TI School Turf"
                  className="w-[42px] md:w-[48px]"
                />

                <p
                  className="
                    text-[11px]
                    md:text-[13px]
                    font-bold leading-[1.1] "
                >
                  TI SCHOOL
                  <br />
                  TURF
                </p>
              </div>

              <button
                onClick={() => setActivePolicy(null)}
                className=" flex items-center gap-2 text-[12px] md:text-sm cursor-pointer hover:opacity-70 transition "
              >
                Close
                <span className=" w-5 h-5 rounded-full border border-white flex items-center justify-center ">
                  <X size={12} />
                </span>
              </button>
            </div>

            {/* CONTENT */}
            <div className=" flex-1 min-h-0 px-6 sm:px-8 md:px-12 pt-7 pb-5 ">
              <h2 className=" text-[20px] md:text-[22px] font-bold mb-4">
                {policy.title}
              </h2>

              <div className=" h-full overflow-y-auto pr-3 text-[11px] sm:text-[12px] leading-[1.7] policy-scrollbar">
                {policy.content}
              </div>
            </div>

            <div className=" shrink-0 h-[55px] flex items-center justify-center gap-2 text-[11px]">
              Scroll
              <Mouse size={15} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
