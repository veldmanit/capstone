'use client';

import React from 'react';

interface SectionDividerProps {
  sectionNumber: number;
  title: string;
  subtitle?: string;
  accentColor?: string;
}

export default function SectionDivider({
  sectionNumber,
  title,
  subtitle,
  accentColor = 'var(--color-accent)'
}: SectionDividerProps) {
  return (
    <div className="page section-divider">
      <div className="background-decoration"></div>

      <div className="content">
        <div className="section-number">{sectionNumber}</div>
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      <style jsx>{`
        .section-divider {
          width: var(--page-width);
          height: var(--page-height);
          position: relative;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          page-break-after: always;
          overflow: hidden;
        }
        
        .background-decoration {
          position: absolute;
          bottom: -30%;
          left: -20%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            ${accentColor}15 0%,
            ${accentColor}05 100%
          );
          border-radius: 50%;
        }
        
        .content {
          position: relative;
          z-index: 1;
          text-align: left;
          padding: var(--space-12);
          max-width: 70%;
        }
        
        .section-number {
          font-family: var(--font-display);
          font-size: 120px;
          font-weight: var(--font-weight-bold);
          color: ${accentColor};
          opacity: 0.15;
          line-height: 1;
          margin-bottom: calc(var(--space-12) * -1);
        }
        
        .section-title {
          font-family: var(--font-display);
          font-size: var(--font-size-h1);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary);
          letter-spacing: var(--letter-spacing-tight);
          line-height: 1.2;
          margin-bottom: var(--space-4);
        }
        
        .section-subtitle {
          font-family: var(--font-body);
          font-size: var(--font-size-h3);
          font-weight: var(--font-weight-normal);
          color: var(--color-text-secondary);
          line-height: var(--line-height-relaxed);
        }
        
        @media print {
          .section-divider {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
