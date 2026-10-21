"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="border border-white bg-black rounded-lg p-8 max-w-md w-full space-y-5">
        <div className="w-14 h-14 mx-auto rounded-lg bg-black border border-white flex items-center justify-center text-2xl text-yellow-400">
          ⚠️
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold px-2 py-0.5 border border-white rounded">
            Curriculum Error
          </span>
          <h1 className="text-2xl font-bold text-white mt-3">
            Something Went Wrong
          </h1>
          <p className="text-xs text-zinc-400 mt-2">
            {error.message || "An unexpected error occurred while loading this curriculum module."}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <button
            onClick={() => reset()}
            className="w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded border border-white transition cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full px-4 py-2.5 bg-black hover:bg-zinc-900 text-zinc-300 text-xs font-medium rounded border border-white transition"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
