import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import termsContent from "@/data/terms-and-conditions.json";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <SubpageHeader />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-13">
   <Link
          href="/"
          className="flex items-center lg:pb-6 gap-1.5 text-sm font-medium  text-black transition-colors rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
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
              {termsContent.effectiveDate}
            </p>
          </div>
        </div>

        {termsContent.sections.map((section, index) => (
          <section
            key={section.title}
            className={
              index === termsContent.sections.length - 1 ? "mb-8" : "mb-12"
            }
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph, paragraphIndex) => (
              <p
                key={paragraphIndex}
                className={`text-gray-600 leading-7 ${
                  section.list ? "mb-5" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}

            {section.list && (
              <ul
                className={`list-disc pl-6 text-gray-600 leading-7 ${
                  section.listGap === 3 ? "space-y-3" : "space-y-4"
                }`}
              >
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <Footer variant="subpage" />
    </main>
  );
}
