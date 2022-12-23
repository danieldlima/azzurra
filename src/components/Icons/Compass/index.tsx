import React from 'react';

const Compass = ({ className }: IconBaseProps) => {
  return (
    <svg
      id="ic-compass"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <circle
        cx="50"
        cy="63.4"
        r="34.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77.1 54.1c1 2.9 1.5 6 1.5 9.2C78.6 79.2 65.8 92 50 92S21.4 79.2 21.4 63.4 34.2 34.8 50 34.8c7.9 0 15.1 3.2 20.2 8.4M53.2 28.8V26M46.8 26v2.8M50 2c-6.7 0-12.2 5.5-12.2 12.2 0 5.6 3.8 10.4 9 11.8v-6.5c-2.1-1.1-3.6-3.4-3.6-6 0-3.8 3.1-6.8 6.8-6.8s6.8 3 6.8 6.8c0 2.6-1.5 4.8-3.6 6V26c5.2-1.4 9-6.1 9-11.8C62.2 7.5 56.7 2 50 2z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.9 16.8c1.3 0 2.3 1 2.3 2.3v.4c2.6-1.4 4.2-4.4 3.4-7.6-.6-2.4-2.6-4.4-5-5-4.5-1-8.4 2.3-8.4 6.6 0 2.6 1.5 4.8 3.6 6v-.4c0-1.3 1-2.3 2.3-2.3h1.8zM46.2 45.3v-6.1l5.9 5.9v-5.9M65 59.2l2 8.5 2.3-5.7 2.3 5.7 1.8-8.5M32.2 58.9h-5.7v8h5.7M30.1 62.8h-3.6M51.9 78.5h-3.8c-1 0-1.9.8-1.9 1.9h0c0 1 .8 1.9 1.9 1.9h2.7c1 0 1.9.8 1.9 1.9v.1c0 1-.8 1.9-1.9 1.9h-4.6M38.6 73.8l15.8-5.7 6.4-16.7-16.7 6.1zM44.1 57.5l10.3 10.6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Compass;
