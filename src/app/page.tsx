import QuoteBox from "./QuoteBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-12">
      <main className="w-full flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 tracking-tight mb-10">
          Random Quote Generator
        </h1>
        <QuoteBox />
      </main>
    </div>
  );
}
