"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import SubpageHeader from "@/components/SubpageHeader";
import {
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Calendar,
  UserCheck,
  CreditCard,
  ShieldAlert,
  HelpCircle,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import supportContent from "@/data/support.json";

const categoryIcons: Record<string, LucideIcon> = {
  HelpCircle,
  Calendar,
  UserCheck,
  CreditCard,
  ShieldAlert,
};

export default function SupportPage() {
  const { hero, emailCard, address, hours, categories, faqs } =
    supportContent;

  const [selectedCategory, setSelectedCategory] = useState("All Topics");
  const [openFaq, setOpenFaq] = useState<string | null>("booking-process");
  const [copied, setCopied] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailCard.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredFaqs = faqs.filter((faq) => {
    return (
      selectedCategory === "All Topics" || faq.category === selectedCategory
    );
  });

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#171717]">
      <SubpageHeader />

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-13 px-5 sm:px-8">

        <div className="max-w-4xl mx-auto text-center">
           <Link
          href="/"
          className="flex items-center lg:pb-6 gap-1.5 text-sm font-medium text-black transition-colors  rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {hero.badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
            {hero.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 md:py-16 space-y-14">
        {/* Prominent Email Contact Banner Card */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                {emailCard.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {emailCard.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {emailCard.description}
              </p>
            </div>

            <div className="w-full md:w-auto bg-gray-50 border border-gray-200 rounded-2xl p-5 shrink-0 flex flex-col gap-3 min-w-[280px]">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Support Email
              </span>
              <a
                href={`mailto:${emailCard.email}`}
                className="text-lg sm:text-xl font-bold text-black hover:underline flex items-center gap-2"
              >
                {emailCard.email}
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>

              <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                <a
                  href={`mailto:${emailCard.email}`}
                  className="flex-1 py-2.5 px-4 bg-black hover:bg-gray-800 text-white font-semibold text-xs rounded-xl transition text-center"
                >
                  Send Email
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-xl transition cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Address Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                {address.label}
              </p>
              <p className="text-sm font-semibold text-gray-900 leading-relaxed">
                {address.lines.map((line, index) => (
                  <span key={index}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-800 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
                {hours.label}
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {hours.days}
              </p>
              <p className="text-xs text-gray-600 mt-1">{hours.time}</p>
              <p className="text-xs text-gray-400 mt-2">{hours.response}</p>
            </div>
          </div>
        </div>


        {/* FAQ Accordion Section */}
        <section id="faq-section" className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Quick solutions to common queries regarding TiTurf platform.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.icon];
                const isActive = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    type="button"
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Accordions List */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
              <HelpCircle className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800">No matching questions found</h3>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                Try selecting a different topic category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All Topics");
                }}
                className="text-xs font-semibold text-black underline cursor-pointer"
              >
                Reset category filter
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50/80 transition cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-gray-400 bg-gray-100 px-2.5 py-1 rounded-md shrink-0 hidden sm:inline-block">
                          {faq.category}
                        </span>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-black" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <Footer variant="subpage" />
    </main>
  );
}
