import React from "react";
import { Link } from "react-router-dom";

export default function MissingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-red-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-700 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
