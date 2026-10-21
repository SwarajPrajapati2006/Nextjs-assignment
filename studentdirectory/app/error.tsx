"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-[#241a14] border border-[#3d2b22] rounded-2xl p-8 max-w-md w-full shadow-lg space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#3d2719] border border-[#6b4224] flex items-center justify-center text-2xl text-amber-300">
          ⚠️
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold bg-[#332219] px-2 py-0.5 rounded border border-[#52382b]">
            Application Error
          </span>
          <h1 className="text-2xl font-bold text-amber-50 mt-3">
            Something Went Wrong
          </h1>
          <p className="text-sm text-amber-200/70 mt-2">
            {error.message || "An unexpected error occurred while loading this page."}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => reset()}
            className="w-full px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full px-4 py-2.5 bg-[#18110d] hover:bg-[#2b1f19] text-amber-200 text-sm font-medium rounded-lg transition"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
