export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-200/50">

      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col justify-between gap-8 py-10 sm:flex-row">

        <div>

          <div className="flex items-center gap-2 font-extrabold">

            <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 text-[10px] text-white">
              DS
            </span>

            Dev Stack

          </div>

          <p className="mt-3 text-xs text-base-content/55">
            Choose the right tools. Build better products.
          </p>

        </div>

        <div className="flex gap-5 text-xs font-bold text-base-content/60">

          <a href="#top">
            Home
          </a>

          <a href="#technologies">
            Technologies
          </a>

          <a href="#stack">
            Your Stack
          </a>

        </div>

      </div>

      <div className="border-t border-base-300 py-5">

        <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] justify-between text-[10px] text-base-content/45">

          <span>
            © 2026 Dev Stack. All rights reserved.
          </span>

          <span>
            Built with React + TypeScript
          </span>

        </div>

      </div>

    </footer>
  );
}