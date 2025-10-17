import React from "react";

export default function ScienceAcademy() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-red-700 mb-6">Science Academy</h1>

      {/* Hero Image */}
      <div className="mb-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1663127052033-b8a7bfcb2928?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Science Lab"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-700">
        <p>
          The Science Academy at Shoolini University provides world-class
          education and research facilities in multiple scientific disciplines.
          Our students are trained to become innovative scientists and leaders
          in their fields.
        </p>
        <p>
          With state-of-the-art laboratories, modern classrooms, and a team of
          expert faculty, we ensure hands-on learning and real-world
          application of scientific knowledge.
        </p>
        <p>
          Our research programs span across Physics, Chemistry, Biology, and
          interdisciplinary sciences, providing ample opportunities for
          breakthroughs and publications.
        </p>
      </div>

      {/* Sub-section with images */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="shadow-md rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1346675527/photo/medical-science-laboratory-portrait-of-beautiful-black-scientist-looking-under-microscope.jpg?s=2048x2048&w=is&k=20&c=neWyP_q6lKeyQxiJ2rlNt-I9Xpw7F1WWcoI3tJggrUw="
            alt="Physics Lab"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Physics Lab</h3>
            <p className="text-gray-600 text-sm">
              Equipped with advanced instruments for practical physics research.
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1663127052033-b8a7bfcb2928?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chemistry Lab"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Chemistry Lab</h3>
            <p className="text-gray-600 text-sm">
              Modern labs with facilities for experiments and research projects.
            </p>
          </div>
        </div>

        <div className="shadow-md rounded-lg overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/2190241206/photo/head-of-laboratory-making-a-bioengineering-experiment-with-a-group-of-young-science-college.jpg?s=2048x2048&w=is&k=20&c=hwFZOYkEEuaIR_8YeftOs4vyyNMl_wauqn6FCMJnqo4="
            alt="Biology Lab"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Biology Lab</h3>
            <p className="text-gray-600 text-sm">
              Practical training in molecular biology, microbiology, and genetics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
