'use client';

import React from 'react';

/**
 * Footer component
 * - Displays page number using CSS counters.
 */
export default function Footer() {
  return (
    <footer className="report-footer">
      <div className="footer-content">
        <div className="page-number"></div>
      </div>

      <style jsx>{`
        .report-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-4) var(--page-margin);
          border-top: 1px solid var(--color-neutral-200);
        }
        
        .footer-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .page-number::after {
          content: counter(page-count);
          font-family: var(--font-body);
          font-size: var(--font-size-small);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-tertiary);
        }
        
        @media print {
          .report-footer {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </footer>
  );
}
