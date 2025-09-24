"use client";
import { useState } from "react";

export default function SizeChartPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      {/* Trigger link */}
      <button
        onClick={() => setOpen(true)}
        className="text-blue-600 underline hover:text-blue-800"
      >
        View Size Chart
      </button>

      {/* Popup modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-4 max-w-2xl w-full relative">
            {/* Image */}
            <img
              src="/images/size-chart.jpg" // replace with your image path
              alt="Size Chart"
              className="w-full h-auto rounded"
            />

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
