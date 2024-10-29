import React from 'react';

export const Logo: React.FC = () => (
  <div className="flex justify-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="w-20 h-20"
    >
      {/* Background circle */}
      <circle cx="64" cy="64" r="60" fill="#FFFFFF" />

      {/* Document stack effect */}
      <path
        d="M48 34h38a4 4 0 0 1 4 4v60a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V38a4 4 0 0 1 4-4z"
        fill="#ffffff"
        stroke="#6366f1"
        strokeWidth="2"
      />
      <path
        d="M45 30h38a4 4 0 0 1 4 4v60a4 4 0 0 1-4 4H45a4 4 0 0 1-4-4V34a4 4 0 0 1 4-4z"
        fill="#ffffff"
        stroke="#4f46e5"
        strokeWidth="3"
      />

      {/* Document lines */}
      <line
        x1="50"
        y1="45"
        x2="78"
        y2="45"
        stroke="#6b7280"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="55"
        x2="78"
        y2="55"
        stroke="#6b7280"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="65"
        x2="78"
        y2="65"
        stroke="#6b7280"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Clock element */}
      <circle cx="64" cy="82" r="12" fill="#4f46e5" opacity="0.9" />
      <path
        d="M64 76v6l4 4"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Checkmark with subtle glow */}
      <path
        d="M85 25l5 5l10-10"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Filter for checkmark glow */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
);
