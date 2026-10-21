import Link from "next/link";
import { studentsData } from "../../data";

export default function WebDevelopmentTrackPage() {
  // Students who belong to Web Development specialization
  const webDevStudents = studentsData.filter(
    (student) => student.specialization === "Web Development"
  );

  return (
    <div className="py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="text-xs text-amber-200/60 flex items-center gap-2">
        <Link href="/departments" className="hover:text-amber-100 transition">
          Departments
        </Link>
        <span>/</span>
        <span className="text-amber-200/60">Computer Science</span>
        <span>/</span>
        <span className="text-amber-100">Web Development</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center justify-between text-xs">
        <Link
          href="/departments"
          className="text-amber-200/60 hover:text-amber-100 transition"
        >
          &larr; Return to Departments
        </Link>
        <Link href="/" className="text-amber-400 hover:text-amber-300 transition">
          View all students &rarr;
        </Link>
      </div>

      {/* Main Specialization Overview Card */}
      <div className="bg-[#241a14] border border-[#3d2b22] rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-amber-50">
                Web Development
              </h1>
              <span className="text-xs px-2.5 py-1 rounded border border-[#52382b] bg-[#332219] text-amber-300 font-medium">
                Specialization under Computer Science
              </span>
            </div>
            <p className="text-sm text-amber-200/80 mt-3 max-w-2xl leading-relaxed">
              Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.
            </p>
          </div>

          <div className="sm:text-right shrink-0">
            <span className="text-xs text-amber-200/50 uppercase tracking-wider block mb-1">
              Department Track
            </span>
            <span className="font-mono text-sm px-3 py-1 bg-[#18110d] border border-[#4a352a] text-amber-100 rounded-md font-semibold">
              CS-SPEC-04
            </span>
          </div>
        </div>

        <hr className="border-[#3d2b22]" />

        {/* 4 Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm">
          <div>
            <span className="text-xs uppercase text-amber-200/50 block font-medium">
              Academic Lead
            </span>
            <span className="text-amber-100 font-medium mt-1 block">
              Prof. Elena Vance
            </span>
          </div>

          <div>
            <span className="text-xs uppercase text-amber-200/50 block font-medium">
              Primary Core Lab
            </span>
            <span className="text-amber-100 font-medium mt-1 block">
              Turing Hall 408
            </span>
          </div>

          <div>
            <span className="text-xs uppercase text-amber-200/50 block font-medium">
              Total Enrollment
            </span>
            <span className="text-amber-100 font-medium mt-1 block">
              4 Active Enrollees
            </span>
          </div>

          <div>
            <span className="text-xs uppercase text-amber-200/50 block font-medium">
              Curriculum Cycle
            </span>
            <span className="text-amber-100 font-medium mt-1 block">
              2024–2025 Revised
            </span>
          </div>
        </div>
      </div>

      {/* Enrolled Students Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-amber-50">
              Students in this Specialization
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#332219] border border-[#52382b] text-amber-300">
              {webDevStudents.length}
            </span>
          </div>

          <div className="text-xs text-amber-200/60 flex items-center gap-2">
            <span>Filtered by Track:</span>
            <span className="px-2 py-0.5 rounded bg-[#18110d] border border-[#4a352a] text-amber-200">
              Web Development
            </span>
          </div>
        </div>

        {/* Grid of students in this specialization */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {webDevStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[#241a14] border border-[#3d2b22] rounded-xl p-5 hover:border-[#5a3f32] transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#332219] border border-[#52382b] text-amber-300 font-bold flex items-center justify-center text-sm">
                      {student.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-50 text-base">
                        {student.name}
                      </h3>
                      <span className="text-xs font-mono text-amber-200/60">
                        {student.id}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs px-2 py-0.5 rounded border border-[#4a352a] bg-[#18110d] text-amber-200/80">
                    {student.year}
                  </span>
                </div>

                <p className="text-xs text-amber-200/70 mt-4">
                  {student.specializationTopic || student.about.slice(0, 50) + "..."}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3d2b22]">
                <Link
                  href={`/students/${student.id}`}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  View profile &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/40 pt-4 border-t border-[#3d2b22]">
        <span>Campus Directory &copy; Academic Informatics Core</span>
        <span className="flex items-center gap-1.5 font-mono">
          Path: /departments/computer-science/web-development
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        </span>
      </div>
    </div>
  );
}
