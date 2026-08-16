import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import refundContent from "@/data/refund-policy.json";
import { renderRichText } from "@/lib/richText";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <SubpageHeader />


      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-13">
        <Link
          href="/"
          className="flex items-center lg:pb-6 gap-1.5 text-sm font-medium text-black transition-colors  rounded-full"
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
            Cancellation &amp; Refund Policy
          </h1>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Effective Date:
              </span>{" "}
              {refundContent.effectiveDate}
            </p>
          </div>
        </div>

        {refundContent.sections.map((section, index) => {
          const isLast = index === refundContent.sections.length - 1;

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
                    const spacingClass = section.table
                      ? "mb-6"
                      : section.list
                      ? "mb-5"
                      : "";

                    return (
                      <p
                        key={paragraphIndex}
                        className={`text-gray-600 leading-7 ${spacingClass}`}
                      >
                        {renderRichText(paragraph)}
                      </p>
                    );
                  })}

                  {section.list && (
                    <ul className="list-disc pl-6 text-gray-600 leading-7">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{renderRichText(item)}</li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-400 text-left">
                        <thead>
                          <tr className="bg-gray-200">
                            {section.table.headers.map((header, headerIndex) => (
                              <td
                                key={headerIndex}
                                className={`w-1/2 border border-gray-400 px-5 py-4 ${
                                  headerIndex === 0
                                    ? "text-gray-900"
                                    : "text-gray-700"
                                }`}
                              >
                                {header}
                              </td>
                            ))}
                          </tr>
                        </thead>

                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className="border border-gray-400 px-5 py-4 text-gray-700"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
