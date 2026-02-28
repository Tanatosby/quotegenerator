"use client";

import { useState, useCallback } from "react";

const FALLBACK_QUOTES = [
  { q: "The only way to do great work is to love what you do.", a: "Steve Jobs" },
  { q: "Believe you can and you're halfway there.", a: "Theodore Roosevelt" },
  { q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius" },
  { q: "Everything you've ever wanted is on the other side of fear.", a: "George Addair" },
  { q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill" },
  { q: "Hardships often prepare ordinary people for an extraordinary destiny.", a: "C.S. Lewis" },
  { q: "Your time is limited, don't waste it living someone else's life.", a: "Steve Jobs" },
  { q: "The future belongs to those who believe in the beauty of their dreams.", a: "Eleanor Roosevelt" },
];

type Quote = { q: string; a: string };

async function fetchRandomQuote(): Promise<Quote> {
  try {
    const res = await fetch("/api/quote", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data?.q) return { q: data.q, a: data.a || "Unknown" };
    }
  } catch {
    // fallback to local quotes
  }
  const i = Math.floor(Math.random() * FALLBACK_QUOTES.length);
  return FALLBACK_QUOTES[i];
}

type QuoteBoxProps = { onQuoteLoaded?: () => void };

export default function QuoteBox({ onQuoteLoaded }: QuoteBoxProps) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadedOnce, setLoadedOnce] = useState(false);

  const loadQuote = useCallback(async () => {
    setLoading(true);
    const q = await fetchRandomQuote();
    setQuote(q);
    setLoadedOnce(true);
    setLoading(false);
    onQuoteLoaded?.();
  }, [onQuoteLoaded]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="rounded-2xl border border-white/30 dark:border-zinc-500/40 bg-white/15 dark:bg-black/25 backdrop-blur-md p-8 sm:p-10 shadow-lg min-h-[200px] flex flex-col justify-center">
        {!loadedOnce && !loading && (
          <p className="text-zinc-500 dark:text-zinc-400 text-center text-sm">
            Click the button below to load a motivational quote.
          </p>
        )}
        {loading && (
          <p className="text-zinc-500 dark:text-zinc-400 text-center text-sm animate-pulse">
            Loading…
          </p>
        )}
        {quote && !loading && (
          <>
            <p className="text-xl sm:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed text-center font-medium">
              &ldquo;{quote.q}&rdquo;
            </p>
            <p className="mt-5 text-right text-sm text-zinc-500 dark:text-zinc-400">
              — {quote.a}
            </p>
          </>
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={loadQuote}
          disabled={loading}
          className="rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-2.5 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading…" : "New Quote"}
        </button>
      </div>
    </div>
  );
}
