import QuoteBox from "./QuoteBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 -z-10" aria-hidden />
      <div className="w-full max-w-xl rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-xl border border-white/20 dark:border-zinc-700/50 p-6 sm:p-8 flex flex-col items-center">
        <main className="w-full flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight mb-10">
            Random Quote Generator
          </h1>
          <QuoteBox />
        </main>
      </div>
      <a
        href="https://unsplash.com/photos/snow-covered-mountain-during-daytime-21bda4d32df4"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-xs text-white/70 hover:text-white transition-colors"
      >
        Mountain photo by Casey Horner on Unsplash
      </a>
    </div>
  );
}
