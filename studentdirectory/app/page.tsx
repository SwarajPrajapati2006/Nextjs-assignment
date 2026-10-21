"use client";

import { useState } from "react";
import Link from "next/link";
import { studentsData } from "./data";

export default function StudentsPage() {
  // Simple state for search input and department filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All departments");

  // Filter students based on search and selected department
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDept =
      selectedDepartment === "All departments" ||
      student.department === selectedDepartment;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="py-6 space-y-6">
      {/* Header section */}
      <div>
        <h1 className="text-3xl font-bold text-amber-50 tracking-tight">Students</h1>
        <p className="text-amber-200/60 text-sm mt-1">
          Browse students and view their profiles.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#241a14] border border-[#3d2b22] p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#18110d] border border-[#4a352a] text-amber-100 placeholder-amber-200/40 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-600"
          />
        </div>

        {/* Department select filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label htmlFor="dept" className="text-xs text-amber-200/60 whitespace-nowrap">
            Department:
          </label>
          <select
            id="dept"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="bg-[#18110d] border border-[#4a352a] text-amber-100 text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-amber-600"
          >
            <option value="All departments">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div
              key={student.id}
              className="bg-[#241a14] border border-[#3d2b22] rounded-xl p-5 hover:border-[#5a3f32] transition flex flex-col justify-between"
            >
              <div>
                {/* Top: Avatar & ID */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#332219] border border-[#52382b] text-amber-300 font-bold flex items-center justify-center text-sm">
                    {student.initials}
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded border border-[#4a352a] text-amber-200/70 bg-[#18110d]">
                    {student.id}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-lg text-amber-50 mt-4">
                  {student.name}
                </h3>

                {/* Department and year */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs border border-[#52382b] bg-[#332219]/80 text-amber-300 px-2 py-0.5 rounded">
                    {student.department}
                  </span>
                  <span className="text-xs text-amber-200/60">{student.year}</span>
                </div>
              </div>

              {/* View profile button link */}
              <div className="mt-6 pt-3 border-t border-[#3d2b22]">
                <Link
                  href={`/students/${student.id}`}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300 flex items-center gap-1"
                >
                  View profile &rarr;
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-amber-200/50">
            No students found matching your criteria.
          </div>
        )}
      </div>

      {/* Footer count & pagination */}
      <div className="flex items-center justify-between text-xs text-amber-200/60 pt-4 border-t border-[#3d2b22]">
        <div>
          Showing <span className="font-semibold text-amber-100">{filteredStudents.length}</span> of{" "}
          <span className="font-semibold text-amber-100">{studentsData.length}</span> students
        </div>
        <div className="flex gap-2">
          <button
            disabled
            className="px-3 py-1 bg-[#241a14] border border-[#3d2b22] text-amber-200/30 rounded cursor-not-allowed"
          >
            Previous
          </button>
          <button
            disabled
            className="px-3 py-1 bg-[#241a14] border border-[#3d2b22] text-amber-200/30 rounded cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
