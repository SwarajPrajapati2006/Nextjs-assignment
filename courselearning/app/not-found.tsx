import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="border border-white bg-black rounded-lg p-8 max-w-md w-full space-y-5">
        <div className="w-14 h-14 mx-auto rounded-lg bg-black border border-white flex items-center justify-center text-2xl text-red-400">
          ⚠️
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold px-2 py-0.5 border border-white rounded">
            Error 404
          </span>
          <h1 className="text-2xl font-bold text-white mt-3">
            Route Not Found
          </h1>
          <p className="text-xs text-zinc-400 mt-2">
            The requested course module, curriculum topic, or route does not exist in the LearnSpace directory.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded border border-white transition"
          >
            &larr; Back to Course Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
