"use client";

import { useState } from "react";
import Link from "next/link";
import { topicModules } from "../../../data";

export default function ReactTopicPage() {
  const [activeTab, setActiveTab] = useState("All React");

  const tabs = ["All React", "Server Components", "State & Signals", "Routing Architecture"];

  return (
    <div className="py-6 space-y-6">
      {/* Route Pattern Debugger Bar */}
      <div className="border border-white bg-black p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2 text-zinc-300">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">⚡ Route pattern:</span>
          <span className="bg-zinc-950 px-2 py-0.5 rounded border border-white">/topics/[[...slug]]</span>
          <span>&rarr;</span>
          <span className="text-white">resolved to: /topics/frontend/react</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="border border-white px-2 py-0.5 rounded text-zinc-400">Optional Catch-All</span>
          <span className="border border-white px-2 py-0.5 rounded text-zinc-400">SSR Node Layer</span>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400">
        <div className="flex items-center gap-2">
          <Link href="/topics" className="hover:text-white transition">
            &larr; All Topics
          </Link>
          <span>/</span>
          <span>Topics</span>
          <span>/</span>
          <span>Frontend</span>
          <span>/</span>
          <span className="text-white">React</span>
        </div>

        <div className="flex items-center gap-2 text-blue-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Curriculum Track 2025 · 4 Modules Available
        </div>
      </div>

      {/* Main Specialized Domain Track Card */}
      <div className="border border-white bg-black p-6 sm:p-8 rounded-lg space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-2">
            Specialized Domain Track
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            React &amp; Next.js Ecosystem
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed">
            Deep dive into component architecture, state machines, server rendering paradigms, and modern framework primitives designed for production-scale distributed applications.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="border-t border-white pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-zinc-400 block">Total Content</span>
            <span className="text-white font-bold text-sm mt-0.5 block">44 Lessons</span>
          </div>
          <div>
            <span className="text-zinc-400 block">Difficulty Range</span>
            <span className="text-white font-bold text-sm mt-0.5 block">Int. to Advanced</span>
          </div>
          <div>
            <span className="text-zinc-400 block">Core Primitives</span>
            <span className="text-white font-bold text-sm mt-0.5 block">RSC, Hydration, Signals</span>
          </div>
          <div>
            <span className="text-zinc-400 block">Verification</span>
            <span className="text-white font-bold text-sm mt-0.5 block">Peer-Reviewed</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 text-xs rounded border transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-white font-semibold"
                  : "bg-black text-zinc-300 border-white hover:bg-zinc-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-xs text-zinc-400">
          Sorted by Curriculum Sequence
        </div>
      </div>

      {/* Topic Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {topicModules.map((item) => (
          <div
            key={item.moduleNumber}
            className="border border-white bg-black p-5 rounded-lg flex flex-col justify-between hover:border-zinc-300 transition"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="border border-white px-2 py-0.5 rounded text-blue-400 font-mono">
                  {item.moduleNumber}
                </span>
                <span className="text-zinc-400">
                  {item.lessonsCount} Lessons · {item.level}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-base text-white mt-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-300 mt-2.5 leading-relaxed">
                {item.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-2 mt-4 text-xs">
                <span className="w-6 h-6 rounded bg-black border border-white text-white font-bold text-[10px] flex items-center justify-center">
                  {item.instructorInitials}
                </span>
                <span className="text-white font-medium">{item.instructor}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-400">{item.instructorRole}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 pt-3 border-t border-white flex items-center justify-between text-xs">
              <Link
                href={`/courses/${item.courseId}`}
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                View course &rarr;
              </Link>
              <button className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded border border-white font-medium transition">
                Start topic
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Related Learning Paths Section */}
      <div className="space-y-3 pt-4">
        <h2 className="text-base font-bold text-white">Related Learning Paths</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="border border-white bg-black p-4 rounded-lg">
            <span className="font-semibold text-white text-xs block">🎨 Frontend Architecture</span>
            <span className="text-zinc-400 text-[11px] block mt-1">
              Design systems, micro-frontends &amp; testing at scale
            </span>
            <Link href="/" className="text-xs text-blue-400 mt-3 inline-block">
              3 Tracks &rarr;
            </Link>
          </div>

          <div className="border border-white bg-black p-4 rounded-lg">
            <span className="font-semibold text-white text-xs block">☁️ Distributed Web</span>
            <span className="text-zinc-400 text-[11px] block mt-1">
              Edge computing, caching layers &amp; geo-routing
            </span>
            <Link href="/" className="text-xs text-blue-400 mt-3 inline-block">
              5 Tracks &rarr;
            </Link>
          </div>

          <div className="border border-white bg-black p-4 rounded-lg">
            <span className="font-semibold text-white text-xs block">📘 TypeScript Deep Dive</span>
            <span className="text-zinc-400 text-[11px] block mt-1">
              Conditional types, template literals &amp; ASTs
            </span>
            <Link href="/" className="text-xs text-blue-400 mt-3 inline-block">
              4 Tracks &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
