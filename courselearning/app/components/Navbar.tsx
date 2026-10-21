import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-white bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-blue-600 text-white font-bold text-sm">
              🎓
            </span>
            LearnSpace
          </Link>

          {/* Quick search input */}
          <div className="hidden md:block relative w-64">
            <input
              type="text"
              placeholder="Search syllabus or topics..."
              className="w-full bg-black border border-white text-white placeholder-zinc-500 rounded-md px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
        </div>

        {/* Middle Navigation */}
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-white hover:underline underline-offset-4"
          >
            Courses
          </Link>

          <Link
            href="/topics"
            className="text-zinc-300 hover:text-white transition"
          >
            Topics
          </Link>

          <Link
            href="/topics/frontend/react"
            className="text-zinc-300 hover:text-white transition"
          >
            Domain Track
          </Link>
        </nav>

        {/* Right side icons & sign in */}
        <div className="flex items-center gap-3">
          <span className="text-zinc-400 text-sm cursor-pointer hover:text-white">🔔</span>
          <span className="text-zinc-400 text-sm cursor-pointer hover:text-white">❓</span>
          <button className="text-xs font-semibold px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded border border-white transition">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
