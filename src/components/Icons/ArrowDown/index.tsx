import * as React from 'react';

const ArrowDown = ({ className }: IconBaseProps) => {
  return (
    <svg viewBox="0 0 22 16" fill="none" className={className}>
      <path
        d="M17.9 2c.7 0 1.3.2 1.8.8 1 1 1 2.7 0 3.7l-6.9 6.9c-1 1-2.6 1-3.7 0l-6.8-7c-1-1-1-2.7 0-3.7s2.6-1 3.7 0l5 5.1 5.1-5.1c.5-.5 1.2-.7 1.8-.7h0z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
