"use client";

import { useEffect, useState } from "react";
import type { ServiceFAQItem } from "@/lib/service-content";

type Props = {
  serviceName: string;
  items: ServiceFAQItem[];
};

export default function ServiceFAQ({ serviceName, items }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <section
          id="service-faq-dialog"
          role="dialog"
          aria-modal="false"
          aria-labelledby="service-faq-title"
          className="mb-4 flex max-h-[min(70vh,34rem)] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
        >
          <div className="flex items-start justify-between gap-4 bg-gray-950 px-5 py-4 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-400">
                Quick answers
              </p>
              <h2 id="service-faq-title" className="mt-1 text-lg font-bold">
                {serviceName} FAQs
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                Choose a question to see the answer.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close frequently asked questions"
              className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {selected === null ? (
            <div className="overflow-y-auto p-3">
              {items.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setSelected(index)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-gray-800 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600"
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true" className="shrink-0 text-lg text-green-700">›</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="overflow-y-auto p-5">
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600"
              >
                <span aria-hidden="true">←</span> All questions
              </button>
              <h3 className="text-base font-bold leading-6 text-gray-900">
                {items[selected]?.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {items[selected]?.answer}
              </p>
            </div>
          )}
          <p className="border-t border-gray-100 px-5 py-3 text-xs text-gray-500">
            Need advice for your business?{" "}
            <a
              href="https://cal.com/ezebuenyik/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-700 underline underline-offset-2"
            >
              Book a strategy call
            </a>
          </p>
        </section>
      )}

      <button
        type="button"
        aria-label={open ? "Close service FAQs" : "Open service FAQs"}
        aria-expanded={open}
        aria-controls="service-faq-dialog"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <span className="flex flex-col items-center leading-none">
            <span className="text-xl font-bold">?</span>
            <span className="mt-1 text-[9px] font-bold uppercase tracking-wider">FAQs</span>
          </span>
        )}
      </button>
    </div>
  );
}
