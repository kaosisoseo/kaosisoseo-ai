"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I provide Technical SEO, Local SEO, AI Visibility (GEO & AEO), SEO Content Strategy, Website Design, SEO Audits and Analytics to help businesses improve their online presence.",
  },
  {
    question: "How long does SEO take to produce results?",
    answer:
      "SEO is a long-term investment. While some improvements can be seen within a few weeks, meaningful results typically develop over three to six months depending on your industry, competition and website condition.",
  },
  {
    question: "What is AI Visibility (GEO & AEO)?",
    answer:
      "AI Visibility focuses on helping businesses become understandable and recommendable by AI assistants such as ChatGPT, Gemini, Claude, Grok and Perplexity through entity optimization, structured content and authoritative online signals.",
  },
  {
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes. I work remotely with businesses, organizations and agencies worldwide using online meetings and collaborative project management tools.",
  },
  {
    question: "How much do your SEO services cost?",
    answer:
      "Pricing depends on your business goals, website size and project requirements. Every proposal is customized after an initial consultation.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a discovery call. We'll discuss your business, evaluate your current online presence and recommend the best strategy for your goals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Answers to the questions I receive most often from businesses
              looking to improve their visibility on Google and AI platforms.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-3xl font-light text-green-600">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="border-t border-gray-200 px-8 py-6">
                    <p className="leading-8 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}