"use client";

import { useState } from "react";
import Link from "next/link";
import { coursesData } from "./data";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const categories = ["All Courses", "Frontend", "Backend", "Architecture", "Language", "Database"];

  // Filter courses by category
  const filteredCourses = coursesData.filter((course) => {
    if (selectedCategory === "All Courses") return true;
    return course.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="py-6 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-xs text-zinc-400 flex items-center gap-2">
        <span>Index</span>
        <span>/</span>
        <span className="text-white">Courses</span>
      </div>

      {/* Header section */}
      <div>
        <span className="text-xs font-mono tracking-wider px-2 py-0.5 border border-white rounded text-zinc-300">
          CURRICULUM DIRECTORY 2025
        </span>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-3">
          Explore courses
        </h1>
        <p className="text-zinc-400 text-sm mt-1">
          Browse curriculum modules, system design paths, and full-stack development tracks.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 text-xs rounded border transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-white font-semibold"
                : "bg-black text-zinc-300 border-white hover:bg-zinc-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats Banner with White Border */}
      <div className="border border-white bg-black p-4 rounded-lg grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div>
          <span className="text-zinc-400 block">Published Tracks</span>
          <span className="text-white font-bold text-base block mt-0.5">6 Core Units</span>
        </div>
        <div>
          <span className="text-zinc-400 block">Interactive Syllabus</span>
          <span className="text-white font-bold text-base block mt-0.5">78 Lessons</span>
        </div>
        <div>
          <span className="text-zinc-400 block">Evaluation Mode</span>
          <span className="text-white font-bold text-base block mt-0.5">Rigorous Peer Review</span>
        </div>
        <div>
          <span className="text-zinc-400 block">Status</span>
          <span className="text-blue-400 font-bold text-base flex items-center gap-1 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Live Cohort
          </span>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border border-white bg-black p-5 rounded-lg flex flex-col justify-between hover:border-zinc-300 transition"
          >
            <div>
              {/* Category & Level Badges */}
              <div className="flex items-center justify-between text-xs">
                <span className="border border-white px-2 py-0.5 rounded text-zinc-300">
                  {course.category}
                </span>
                <span className="border border-white px-2 py-0.5 rounded text-zinc-300">
                  {course.level}
                </span>
              </div>

              {/* Course Title */}
              <h3 className="font-bold text-lg text-white mt-3">
                {course.title}
              </h3>

              {/* Instructor */}
              <div className="text-xs text-zinc-400 mt-2 flex items-center gap-1.5">
                <span>👤</span>
                <span>{course.instructor}</span>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Bottom: Lessons count & Link */}
            <div className="mt-5 pt-3 border-t border-white flex items-center justify-between text-xs">
              <span className="text-zinc-400 flex items-center gap-1">
                📖 {course.lessonsCount} Lessons
              </span>
              <Link
                href={`/courses/${course.id}`}
                className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
              >
                View course &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sequencing Engine Banner with White Border */}
      <div className="border border-white bg-black p-5 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-white text-sm">Curriculum Sequencing Engine</h4>
          <p className="text-xs text-zinc-400 mt-1">
            LearnSpace verifies prerequisite competency via deterministic automated assessments prior to advancing modules.
          </p>
        </div>
        <button className="text-xs border border-white px-3 py-1.5 rounded text-white bg-black hover:bg-zinc-900 whitespace-nowrap transition">
          Browse Prerequisite Map
        </button>
      </div>
    </div>
  );
}
