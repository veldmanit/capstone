'use client';

import React from 'react';

interface HeaderProps {
  sectionLabel: string;
}

export default function Header({ sectionLabel }: HeaderProps) {
  return (
    <header className="report-header">
      <div className="header-content">
        <div className="wordmark">FIELDSMAN</div>
        <div className="section-label">{sectionLabel}</div>
      </div>

      <style jsx>{`
        .report-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: var(--space-4) var(--page-margin);
          border-bottom: 1px solid var(--color-neutral-200);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .wordmark {
          font-family: var(--font-display);
          font-size: var(--font-size-small);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary);
          letter-spacing: var(--letter-spacing-wider);
        }
        
        .section-label {
          font-family: var(--font-body);
          font-size: var(--font-size-tiny);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-tertiary);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
        }
        
        @media print {
          .report-header {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </header>
  );
}
