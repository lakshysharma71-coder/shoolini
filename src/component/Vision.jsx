import React from "react";

function Vision() {
  return (
    <div className="p-8 max-w-4xl mx-5">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Our Vision</h1>
      <p className="text-gray-700 leading-relaxed">
        At Shoolini University, our vision is to become a global leader in
        research and innovation. We aim to empower students with knowledge,
        creativity, and critical thinking skills to transform society and make
        the world a better place.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Vision Points (KPI)</h2>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>To achieve global recognition for research & innovation.</li>
        <li>To provide world-class education with modern facilities.</li>
        <li>To focus on sustainable development and green technologies.</li>
        <li>To nurture entrepreneurial and leadership qualities in students.</li>
        <li>To create strong industry–academia partnerships worldwide.</li>
      </ul>
    </div>
  );
}

export default Vision;
