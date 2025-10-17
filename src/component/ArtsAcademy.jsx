import React from "react";

export default function ArtsAcademy() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Arts Academy</h1>

      {/* Hero Image */}
      <div className="mb-6">
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80"
          alt="Arts Students"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Intro Content */}
      <div className="space-y-4 text-gray-700">
        <p>
          The Arts Academy is dedicated to nurturing creativity, critical
          thinking, and cultural understanding. Our programs offer students a
          chance to explore literature, history, philosophy, psychology, and
          performing arts under the guidance of experienced faculty.
        </p>
        <p>
          With modern classrooms, creative studios, and cultural exchange
          programs, the Arts Academy empowers students to express themselves and
          understand the world through multiple perspectives.
        </p>
        <p>
          Students also get opportunities to participate in seminars, art
          exhibitions, theatre performances, and research projects that enrich
          their academic journey.
        </p>
      </div>

      {/* Grid Subjects */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Literature */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=600&q=80"
            alt="Literature"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-blue-700">
              Literature & Languages
            </h3>
            <p className="text-sm text-gray-600">
              Explore world literature, languages, and cultural heritage with a
              global perspective.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/2217160855/photo/virupaksha-temple-of-hampi-statue-of-lord-shiva-carved-into-boulder-hinduism-religion-god.webp?a=1&b=1&s=612x612&w=0&k=20&c=pKGhk-Xa8Tt_JapjGklddKO_B8BKkWyCgB07dIeAhqA="
            alt="History"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-blue-700">History</h3>
            <p className="text-sm text-gray-600">
              Learn from the past to understand the present and shape the
              future with historical insights.
            </p>
          </div>
        </div>

        {/* Performing Arts */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80"
            alt="Performing Arts"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg text-blue-700">
              Performing Arts
            </h3>
            <p className="text-sm text-gray-600">
              Theatre, music, and dance programs that enhance creativity and
              stage confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
