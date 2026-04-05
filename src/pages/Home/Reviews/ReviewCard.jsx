import React from "react";

const ReviewCard = () => {
  return (
    // <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 rounded-2xl p-8 max-w-md w-full shadow-sm">
        
        {/* Quote icon */}
        <div className="text-teal-300 text-5xl mb-4">“</div>

        {/* Text */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          A posture corrector works by providing support and gentle alignment
          to your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day.
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-400 mb-6"></div>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-900 rounded-full"></div>

          <div>
            <h3 className="text-teal-900 font-semibold">Awlad Hossin</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default ReviewCard;