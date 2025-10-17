import React from "react";

export default function Leadership() {
  return (
    <div className="p-8 max-w-5xl mx-10">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Leadership</h1>
      <p className="text-gray-700 mb-6">
        Our leadership team at Shoolini University is committed to excellence
        in education, research, and innovation. They guide our vision, mission,
        and core values to ensure students achieve their highest potential.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Leaders</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800">
        <li>Chancellor: Dr. XYZ</li>
        <li>Vice Chancellor: Dr. ABC</li>
        <li>Registrar: Prof. PQR</li>
        <li>Dean of Academics: Dr. LMN</li>
        <li>Head of Research: Dr. UVW</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Vision</h2>
      <p className="text-gray-700">
        To create a transformative learning environment where leadership drives
        innovation, global collaboration, and holistic student development.
      </p>
    </div>
  );
}
