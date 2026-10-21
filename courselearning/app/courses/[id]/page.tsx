import Link from "next/link";
import { notFound } from "next/navigation";
import { coursesData } from "../../data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params;

  const course = coursesData.find(
    (item) => item.id.toLowerCase() === id.toLowerCase()
  );

  if (!course) {
    notFound();
  }

  return (
    <div className="py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-white transition">
            Courses
          </Link>
          <span>/</span>
          <span className="text-white">{course.title}</span>
        </div>
        <Link href="/" className="hover:text-white transition">
          &larr; Back to courses
        </Link>
      </div>

      {/* Main Course Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Title, Details, & Actions */}
        <div className="lg:col-span-2 border border-white bg-black p-6 rounded-lg space-y-5">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="border border-white px-2.5 py-0.5 rounded text-zinc-300">
              {course.level}
            </span>
            <span className="border border-white px-2.5 py-0.5 rounded text-zinc-300">
              {course.lessonsCount} Lessons
            </span>
            <span className="border border-white px-2.5 py-0.5 rounded text-zinc-300">
              Estimated {course.duration}
            </span>
            <span className="border border-white px-2.5 py-0.5 rounded text-blue-400 font-semibold">
              ● Open Access
            </span>
          </div>

          {/* Course Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {course.title}
          </h1>

          {/* Instructor Row */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-black border border-white text-white font-bold text-xs flex items-center justify-center">
              {course.instructorInitials}
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{course.instructor}</div>
              <div className="text-xs text-zinc-400">{course.instructorRole}</div>
            </div>
          </div>

          {/* Course Full Description */}
          <p className="text-sm text-zinc-300 leading-relaxed">
            {course.fullDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded border border-white transition">
              Start learning
            </button>
            <button className="px-4 py-2 bg-black hover:bg-zinc-900 text-zinc-300 text-xs font-medium rounded border border-white transition">
              View syllabus
            </button>
          </div>
        </div>

        {/* Right 1 Col: Curriculum Structure Info Card */}
        <div className="border border-white bg-black p-6 rounded-lg space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-white pb-3">
            <span className="text-zinc-400 font-medium">Curriculum Structure</span>
            <span className="text-zinc-400 font-mono">v16.2 / stable</span>
          </div>

          <div className="space-y-3">
            <div>
              <span className="font-semibold text-white block">⚙️ Zero Dependencies</span>
              <span className="text-zinc-400 text-[11px] block mt-0.5">
                Self-contained browser sandboxes and local execution paths.
              </span>
            </div>

            <div>
              <span className="font-semibold text-white block">💻 Code-Centric Pedagogy</span>
              <span className="text-zinc-400 text-[11px] block mt-0.5">
                Structured architecture blueprints and source comparisons.
              </span>
            </div>

            <div>
              <span className="font-semibold text-white block">🛡️ Production Auditing</span>
              <span className="text-zinc-400 text-[11px] block mt-0.5">
                Includes cache profiling and server mutation boundaries.
              </span>
            </div>
          </div>

          <div className="border-t border-white pt-3 flex items-center justify-between text-zinc-400">
            <span>Progress tracking</span>
            <span className="text-blue-400 font-medium">Unenrolled · Free</span>
          </div>
        </div>
      </div>

      {/* Course Curriculum Modules List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Course Curriculum</h2>
          <span className="text-xs text-zinc-400">
            {course.modules?.length || 1} Modules · {course.lessonsCount} Technical Lessons
          </span>
        </div>

        {/* Module Containers */}
        <div className="space-y-4">
          {course.modules?.map((mod) => (
            <div key={mod.moduleNumber} className="border border-white bg-black rounded-lg overflow-hidden">
              {/* Module Header */}
              <div className="p-4 bg-zinc-950 border-b border-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase">
                    Module {mod.moduleNumber}
                  </span>
                  <h3 className="font-bold text-white text-sm mt-0.5">
                    {mod.title}
                  </h3>
                </div>
                <span className="text-xs text-zinc-400 font-mono">
                  {mod.lessonsCount} lessons · {mod.duration}
                </span>
              </div>

              {/* Lessons within Module */}
              <div className="divide-y divide-white">
                {mod.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="p-3.5 flex items-center justify-between hover:bg-zinc-900 transition text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-zinc-500 font-semibold">
                          {lesson.id}
                        </span>
                        <span className="font-semibold text-white">
                          {lesson.title}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-[11px] mt-0.5 pl-6">
                        {lesson.detail}
                      </p>
                    </div>

                    <span className="text-zinc-400 font-mono ml-4 whitespace-nowrap">
                      {lesson.duration} &rsaquo;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="border border-white bg-black p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-sm">Ready to start Module 1?</h4>
          <p className="text-xs text-zinc-400 mt-1">
            Begin with Lesson 01: Introduction &amp; Philosophy. No prerequisites required.
          </p>
        </div>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded border border-white whitespace-nowrap transition">
          Start learning
        </button>
      </div>
    </div>
  );
}
