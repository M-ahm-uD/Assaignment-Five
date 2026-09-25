type Props = {
  stackCount: number;
};

export default function Navbar({ stackCount }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-base-300 bg-base-100">
      <div className="mx-auto flex min-h-18 w-[min(1180px,calc(100%-2rem))] items-center justify-between">

        {/* Logo */}
        <a href="#top" className="flex items-center">
          <img
            src="/logo-text.png"
            alt="Dev Stack"
            className="h-9 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          <a
            href="#top"
            className="transition hover:text-primary"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="transition hover:text-primary"
          >
            Technologies
          </a>

          <a
            href="#stack"
            className="flex items-center gap-2 transition hover:text-primary"
          >
            Your Stack
            <span className="badge badge-secondary badge-sm">
              {stackCount}
            </span>
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
            Sign In
          </button>

          <button className="btn btn-neutral btn-sm">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}