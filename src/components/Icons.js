import React from 'react';

export function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 30" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M15 0L2 17h8l-2 13L22 11h-8l1-11z" />
    </svg>
  );
}

// Right arrow by default; `diagonal` points up-right for external destinations.
export function ArrowIcon({ diagonal = false, className }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      {diagonal ? <path d="M4 12L12 4M5 4h7v7" /> : <path d="M2 8h11M9 4l4 4-4 4" />}
    </svg>
  );
}
