import Link from "next/link";
import { notFound } from "next/navigation";
import { studentsData } from "../../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static routes for all mock students
export function generateStaticParams() {
  return studentsData.map((student) => ({
    id: student.id,
  }));
}

export default async function StudentDetailPage({ params }: PageProps) {
  // Get student ID from URL parameters
  const { id } = await params;

  // Find the student in our mock list
  const student = studentsData.find(
    (item) => item.id.toLowerCase() === id.toLowerCase()
  );

  // If student does not exist, trigger the 404 error page
  if (!student) {
    notFound();
  }

  return (
    <div className="py-6 max-w-4xl mx-auto space-y-4">
      {/* Breadcrumb Navigation */}
      <div className="text-xs text-amber-200/60 flex items-center gap-2">
        <Link href="/" className="hover:text-amber-100 transition">
          Students
        </Link>
        <span>/</span>
        <span className="text-amber-100">{student.name}</span>
      </div>

      {/* Back button */}
      <div>
        <Link
          href="/"
          className="text-xs text-amber-200/60 hover:text-amber-100 inline-flex items-center gap-1 transition"
        >
          &larr; Back to students
        </Link>
      </div>

      {/* Main Student Card */}
      <div className="bg-[#241a14] border border-[#3d2b22] rounded-xl p-6 sm:p-8 space-y-6">
        {/* Top Header Section */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#332219] border border-[#52382b] text-amber-300 font-bold flex items-center justify-center text-xl">
            {student.initials}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-amber-50">{student.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded border border-[#4a352a] text-amber-200/80 bg-[#18110d]">
                {student.id}
              </span>
              <span className="text-xs px-2 py-0.5 rounded border border-emerald-900 bg-emerald-950/60 text-emerald-400 font-medium">
                {student.status}
              </span>
            </div>
          </div>
        </div>

        <hr className="border-[#3d2b22]" />

        {/* 4 Metadata Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-xs uppercase tracking-wider text-amber-200/50 font-medium">
              Department
            </div>
            <div className="text-amber-100 font-medium mt-1">
              {student.department}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-amber-200/50 font-medium">
              Study Year
            </div>
            <div className="text-amber-100 font-medium mt-1">
              {student.studyYearFull}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-amber-200/50 font-medium">
              Email
            </div>
            <div className="text-amber-400 hover:underline mt-1">
              {student.email}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-amber-200/50 font-medium">
              Enrolled
            </div>
            <div className="text-amber-100 font-medium mt-1">
              {student.enrolled}
            </div>
          </div>
        </div>

        <hr className="border-[#3d2b22]" />

        {/* About Section */}
        <div>
          <h2 className="text-base font-semibold text-amber-50 mb-2">About</h2>
          <p className="text-sm text-amber-200/80 leading-relaxed">
            {student.about}
          </p>
        </div>

        <hr className="border-[#3d2b22]" />

        {/* Academic Details Section */}
        <div className="space-y-4">
          <h2 className="text-base font-semibold text-amber-50">Academic Details</h2>

          <div className="bg-[#18110d] border border-[#3d2b22] rounded-lg p-3 text-sm flex justify-between">
            <span className="text-amber-200/60">Department</span>
            <span className="text-amber-100 font-medium">{student.department}</span>
          </div>

          <div className="bg-[#18110d] border border-[#3d2b22] rounded-lg p-3 text-sm flex justify-between">
            <span className="text-amber-200/60">Current Academic Standing</span>
            <span className="text-amber-100 font-medium">{student.academicStanding}</span>
          </div>

          {/* Enrolled Subjects List */}
          <div className="pt-2">
            <div className="text-xs uppercase font-medium text-amber-200/50 tracking-wider mb-2">
              Enrolled Subjects
            </div>
            <div className="border border-[#3d2b22] rounded-lg divide-y divide-[#3d2b22] overflow-hidden">
              {student.subjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 text-sm flex items-center justify-between bg-[#1d1410] hover:bg-[#2b1f19] transition"
                >
                  <span className="text-amber-100">
                    <strong className="text-amber-200/50 font-mono mr-1">
                      {sub.code}:
                    </strong>{" "}
                    {sub.name}
                  </span>
                  <span className="text-xs font-medium text-amber-200/80 bg-[#2d2019] px-2 py-0.5 rounded border border-[#4a352a]">
                    {sub.credits}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer details */}
      <div className="flex items-center justify-between text-xs text-amber-200/40 px-1 pt-2">
        <span>System Record ID: {student.systemRecordId}</span>
        <span>Last validated: {student.lastValidated}</span>
      </div>
    </div>
  );
}
