import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center font-main px-6">
      <div className="text-center max-w-lg">
        <h1 className="font-main-alt text-[12rem] font-black leading-none text-theme opacity-20 select-none">
          404
        </h1>

        <div className="-mt-12 relative">
          <h2 className="font-main-alt text-3xl font-bold text-theme-cont uppercase tracking-tight">
            Lost in the Unknown path?
          </h2>
          <p className="mt-4 text-theme-cont-alt/70 text-text-s max-w-md mx-auto">
            The page you're looking for isn't available. It might have been
            moved, renamed, or the URL might be mistyped.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"/"}
              className="px-8 py-3 bg-theme text-theme-white font-bold rounded-md hover:bg-theme-alt transition-all shadow-lg active:scale-95 text-text-vs uppercase tracking-widest"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
