import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
      <div className="bg-[#241a14] border border-[#3d2b22] rounded-2xl p-8 max-w-md w-full shadow-lg space-y-5">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#3d1d17] border border-[#6b2b20] flex items-center justify-center text-2xl text-amber-300">
          ⚠️
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold bg-[#331c15] px-2 py-0.5 rounded border border-[#52291d]">
            Error 404
          </span>
          <h1 className="text-2xl font-bold text-amber-50 mt-3">
            Record Not Found
          </h1>
          <p className="text-sm text-amber-200/70 mt-2">
            The student record, department, or page you are looking for could not be found in our campus database.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium rounded-lg transition"
          >
            &larr; Back to Student Directory
          </Link>
        </div>
      </div>
    </div>
  );
}
