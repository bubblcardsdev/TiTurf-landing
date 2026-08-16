import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import deleteAccountContent from "@/data/delete-your-account.json";
import { renderRichText } from "@/lib/richText";

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <SubpageHeader />

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-1">
        {/* Page Heading */}
          <Link
          href="/"
          className="flex items-center lg:pb-6 gap-1.5 text-sm font-medium text-black transition-colors py-1 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
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
              {deleteAccountContent.effectiveDate}
            </p>
          </div>
        </div>

        {deleteAccountContent.sections.map((section, index) => {
          const isLast = index === deleteAccountContent.sections.length - 1;

          return (
            <section
              key={section.title}
              className={isLast ? "mb-8" : "mb-12"}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                {section.title}
              </h2>

              {section.stacked ? (
                <div className="space-y-4 text-gray-600 leading-7">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{renderRichText(paragraph)}</p>
                  ))}
                </div>
              ) : (
                <>
                  {section.paragraphs?.map((paragraph, paragraphIndex) => {
                    const spacingClass =
                      section.orderedList || section.list ? "mb-6" : "";

                    return (
                      <p
                        key={paragraphIndex}
                        className={`text-gray-600 leading-7 ${spacingClass}`}
                      >
                        {renderRichText(paragraph)}
                      </p>
                    );
                  })}

                  {section.orderedList && (
                    <ol className="list-decimal pl-6 space-y-3 text-gray-600 leading-7">
                      {section.orderedList.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderRichText(item)}</li>
                      ))}
                    </ol>
                  )}

                  {section.note && (
                    <div className="mt-7 border-l-4 border-gray-300 pl-5 py-1">
                      <p className="text-gray-600 leading-7">
                        {renderRichText(section.note)}
                      </p>
                    </div>
                  )}

                  {section.list && (
                    <ul
                      className={`list-disc pl-6 space-y-3 text-gray-600 leading-7 ${
                        section.afterListParagraphs ? "mb-6" : ""
                      }`}
                    >
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderRichText(item)}</li>
                      ))}
                    </ul>
                  )}

                  {section.afterListParagraphs?.map(
                    (paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-gray-600 leading-7"
                      >
                        {renderRichText(paragraph)}
                      </p>
                    )
                  )}

                  {section.contact && (
                    <div className="border border-gray-200 rounded-2xl p-5 md:p-7">
                      <p className="text-sm text-gray-500 mb-1">Email</p>

                      <a
                        href={section.contact.href}
                        className="font-semibold hover:underline"
                      >
                        {section.contact.label}
                      </a>
                    </div>
                  )}
                </>
              )}
            </section>
          );
        })}
      </div>

      <Footer variant="subpage" />
    </main>
  );
}
