import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#3d2b22] bg-[#241a14] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side: Brand Logo and Name */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-amber-100">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-700 text-white font-bold text-base">
              🎓
            </span>
            Campus Directory
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="text-amber-200/80 hover:text-white transition"
            >
              Students
            </Link>

            <Link
              href="/departments"
              className="text-amber-200/80 hover:text-white transition"
            >
              Departments
            </Link>

            <Link
              href="/departments/web-development"
              className="text-amber-200/80 hover:text-white transition"
            >
              Web Dev Track
            </Link>
          </nav>
        </div>

        {/* Right side tag */}
      
      </div>
    </header>
  );
}
