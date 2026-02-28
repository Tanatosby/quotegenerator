"use client";

import { useState, useMemo } from "react";
import QuoteBox from "./QuoteBox";

const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2070&q=80",
];

function getRandomUnsplashUrl() {
  return UNSPLASH_IMAGES[Math.floor(Math.random() * UNSPLASH_IMAGES.length)];
}

export default function Home() {
  const [bgImage, setBgImage] = useState(() => getRandomUnsplashUrl());

  const onQuoteLoaded = useMemo(
    () => () => setBgImage(getRandomUnsplashUrl()),
    []
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-[background-image] duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 -z-10" aria-hidden />
      <div className="w-full max-w-xl rounded-2xl bg-white/20 dark:bg-zinc-900/20 backdrop-blur-md shadow-xl border border-white/30 dark:border-zinc-600/30 p-6 sm:p-8 flex flex-col items-center">
        <main className="w-full flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight mb-10">
            Random Quote Generator
          </h1>
          <QuoteBox onQuoteLoaded={onQuoteLoaded} />
        </main>
      </div>
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-xs text-white/70 hover:text-white transition-colors"
      >
        Backgrounds from Unsplash
      </a>
    </div>
  );
}
