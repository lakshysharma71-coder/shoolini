import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";

// Sample Faculty Data
const facultyList1 = [
  { name: "Dr. A", position: "Professor of Science" },
  { name: "Dr. B", position: "Professor of Engineering" },
];

const facultyList2 = [
  { name: "Dr. C", position: "Professor of Arts" },
  { name: "Dr. D", position: "Professor of Law" },
];

// Subpages
function FacultyPage1() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Faculty Section 1</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {facultyList1.map((fac, i) => (
          <li key={i}>
            <span className="font-semibold">{fac.name}</span> - {fac.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FacultyPage2() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Faculty Section 2</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        {facultyList2.map((fac, i) => (
          <li key={i}>
            <span className="font-semibold">{fac.name}</span> - {fac.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Faculty() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-700 p-4">Faculty</h1>

      {/* Sub-navigation for two faculty sections */}
      <nav className="flex gap-4 px-4 mb-6">
        <Link to="section1" className="text-blue-600 hover:underline">
          Section 1
        </Link>
        <Link to="section2" className="text-blue-600 hover:underline">
          Section 2
        </Link>
      </nav>

      {/* Nested routes will render here */}
      <Outlet />

      {/* Inline Routes for the two pages */}
      <Routes>
        <Route path="section1" element={<FacultyPage1 />} />
        <Route path="section2" element={<FacultyPage2 />} />
        {/* Default route */}
        <Route index element={<FacultyPage1 />} />
      </Routes>
    </div>
  );
}
