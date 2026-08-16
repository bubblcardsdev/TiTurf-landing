import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import privacyContent from "@/data/privacy-policy.json";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <SubpageHeader />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-13">
      <Link
          href="/"
          className="flex items-center lg:pb-6 gap-1.5 text-sm font-medium text-black transition-colors rounded-full"
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
            Privacy Policy
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              {privacyContent.effectiveDate}
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Last Updated:
              </span>{" "}
              {privacyContent.lastUpdated}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-base md:text-lg text-gray-600 leading-8">
            {privacyContent.intro}
          </p>
        </div>

        {privacyContent.sections.map((section, index) => (
          <section
            key={section.title}
            className={
              index === privacyContent.sections.length - 1 ? "mb-8" : "mb-12"
            }
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {section.title}
            </h2>

            {section.paragraphs?.map((paragraph, paragraphIndex) => {
              const spacingClass = section.list
                ? "mb-5"
                : section.subsections || section.contact
                ? "mb-6"
                : "";

              return (
                <p
                  key={paragraphIndex}
                  className={`text-gray-600 leading-7 ${spacingClass}`}
                >
                  {paragraph}
                </p>
              );
            })}

            {section.list && (
              <ul className="list-disc pl-6 space-y-3 text-gray-600 leading-7">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}

            {section.subsections && (
              <div className="space-y-5 pl-1">
                {section.subsections.map((subsection) => (
                  <div key={subsection.title}>
                    <h3 className="font-semibold mb-1">{subsection.title}</h3>
                    <p className="text-gray-600 leading-7">
                      {subsection.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.contact && (
              <div className="border border-gray-200 rounded-2xl p-5 md:p-7">
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Email</p>

                  <a
                    href={`mailto:${section.contact.email}`}
                    className="font-semibold hover:underline"
                  >
                    {section.contact.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">Address</p>

                  <p className="font-medium leading-7">
                    {section.contact.addressLines.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {lineIndex > 0 && (
                          <>
                            <br className="hidden sm:block" />{" "}
                          </>
                        )}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      <Footer variant="subpage" />
    </main>
  );
}
