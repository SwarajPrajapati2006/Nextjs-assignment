import Link from "next/link";

export default function TopicsPage() {
  const topicsList = [
    {
      slug: "frontend/react",
      name: "React & Next.js Ecosystem",
      tag: "Frontend",
      lessons: 44,
      modules: 4,
      level: "Int. to Advanced",
      description: "Deep dive into component architecture, state machines, server rendering paradigms, and modern framework primitives designed for production-scale distributed applications.",
    },
    {
      slug: "systems/distributed-web",
      name: "Distributed Web Systems",
      tag: "Architecture",
      lessons: 32,
      modules: 3,
      level: "Advanced",
      description: "Master cache invalidation heuristics, consistent hashing algorithms, edge computation, and high-throughput streaming pipelines.",
    },
    {
      slug: "languages/typescript",
      name: "TypeScript Deep Dive",
      tag: "Language",
      lessons: 28,
      modules: 3,
      level: "Advanced",
      description: "Enterprise TypeScript contracts, recursive conditional types, abstract syntax trees, and compile-time guarantees.",
    },
    {
      slug: "data/database-engineering",
      name: "Database Engineering & Indexing",
      tag: "Database",
      lessons: 30,
      modules: 3,
      level: "Intermediate",
      description: "Storage engines, B-tree internals, composite query indexing, transaction isolation, and deadlock mitigation.",
    }
  ];

  return (
    <div className="py-6 space-y-6">
      {/* Header */}
      <div className="border-b border-white pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Curriculum Topics</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Explore domain tracks, architectural deep-dives, and learning paths.
          </p>
        </div>
        <div className="text-xs text-blue-400 border border-white px-3 py-1 rounded bg-black self-start">
          ● 4 Specialized Tracks
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {topicsList.map((topic) => (
          <div
            key={topic.slug}
            className="border border-white bg-black p-6 rounded-lg flex flex-col justify-between hover:border-zinc-300 transition"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="border border-white px-2 py-0.5 rounded text-zinc-300">
                  {topic.tag}
                </span>
                <span className="border border-white px-2 py-0.5 rounded text-zinc-300">
                  {topic.level}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white">
                {topic.name}
              </h2>

              <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed">
                {topic.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-zinc-400 mt-4 font-mono">
                <span>📁 {topic.modules} Modules</span>
                <span>•</span>
                <span>📖 {topic.lessons} Lessons</span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white">
              <Link
                href="/topics/frontend/react"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center justify-between"
              >
                <span>Explore Track &rarr;</span>
                <span className="text-[10px] text-zinc-500 font-mono">/topics/{topic.slug}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
