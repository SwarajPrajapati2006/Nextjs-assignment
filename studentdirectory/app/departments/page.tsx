import Link from "next/link";
import { departmentsData } from "../data";

export default function DepartmentsPage() {
  return (
    <div className="py-6 space-y-6">
      {/* Page Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3d2b22] pb-4">
        <div>
          <h1 className="text-3xl font-bold text-amber-50 tracking-tight">Departments</h1>
          <p className="text-amber-200/60 text-sm mt-1">
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          3 Active Academic Faculties
        </div>
      </div>

      {/* Departments List Container */}
      <div className="bg-[#241a14] border border-[#3d2b22] rounded-xl divide-y divide-[#3d2b22] overflow-hidden">
        {departmentsData.map((dept) => (
          <div
            key={dept.id}
            className="p-6 hover:bg-[#2e2019] transition flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-2xl">
              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <span className="text-xl p-2 bg-[#18110d] border border-[#3d2b22] rounded-lg">
                  {dept.icon}
                </span>
                <h2 className="text-xl font-bold text-amber-50">{dept.name}</h2>
              </div>

              {/* Description */}
              <p className="text-sm text-amber-200/80 pl-11">
                {dept.description}
              </p>

              {/* Meta tags */}
              <div className="flex items-center gap-4 text-xs text-amber-200/60 pl-11 pt-1">
                <span>📁 {dept.specializationsCount} Specializations</span>
                <span>•</span>
                <span>👥 {dept.enrolledCount} Enrolled Students</span>
              </div>
            </div>

            {/* Action link */}
            <div className="pl-11 md:pl-0 shrink-0">
              <Link
                href="/departments/web-development"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 hover:text-amber-200 bg-[#332219] border border-[#52382b] px-4 py-2 rounded-lg transition"
              >
                View Track &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer info */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/40 pt-4">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
