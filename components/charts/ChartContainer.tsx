'use client';

import React from 'react';

interface ChartContainerProps {
  exhibitNumber: string;
  title: string;
  children: React.ReactNode;
  caption?: string;
  source?: string;
}

export default function ChartContainer({
  exhibitNumber,
  title,
  children,
  caption,
  source
}: ChartContainerProps) {
  return (
    <div className="chart-container avoid-break">
      <div className="chart-header">
        <span className="exhibit-number">{exhibitNumber}</span>
        <h3 className="chart-title">{title}</h3>
      </div>

      <div className="chart-content">
        {children}
      </div>

      {caption && <p className="chart-caption">{caption}</p>}
      {source && <p className="chart-source">Source: {source}</p>}

      <style jsx>{`
        .chart-container {
          margin: var(--space-8) 0;
          padding: var(--space-6);
          background: var(--color-background-subtle);
          border: 1px solid var(--color-neutral-200);
        }
        
        .chart-header {
          margin-bottom: var(--space-4);
        }
        
        .exhibit-number {
          font-family: var(--font-body);
          font-size: var(--font-size-tiny);
          font-weight: var(--font-weight-bold);
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: var(--letter-spacing-wide);
          display: block;
          margin-bottom: var(--space-1);
        }
        
        .chart-title {
          font-family: var(--font-display);
          font-size: var(--font-size-h3);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
        }
        
        .chart-content {
          padding: var(--space-4) 0;
        }
        
        .chart-caption {
          font-size: var(--font-size-small);
          color: var(--color-text-secondary);
          margin-top: var(--space-4);
          margin-bottom: var(--space-2);
          line-height: var(--line-height-normal);
        }
        
        .chart-source {
          font-size: var(--font-size-tiny);
          color: var(--color-text-tertiary);
          font-style: italic;
        }
        
        @media print {
          .chart-container {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
