'use client';

import React from 'react';

interface KPIBlockProps {
  value: string | number;
  label: string;
  context?: string;
  change?: {
    value: string;
    positive: boolean;
  };
  accentColor?: string;
}

export default function KPIBlock({
  value,
  label,
  context,
  change,
  accentColor = 'var(--color-accent)'
}: KPIBlockProps) {
  // Determine if the value is "long" (e.g. > 4 chars) to adjust font size
  const isLongValue = value.toString().length > 4;

  return (
    <div className="kpi-block">
      <div className={`kpi-value ${isLongValue ? 'long' : ''}`}>{value}</div>
      <div className="kpi-label">{label}</div>
      {context && <div className="kpi-context">{context}</div>}
      {change && (
        <div className={`kpi-change ${change.positive ? 'positive' : 'negative'}`}>
          {change.positive ? '↑' : '↓'} {change.value}
        </div>
      )}

      <style jsx>{`
        .kpi-block {
          padding: var(--space-6);
          background: transparent;
          border: none;
          border-left: 4px solid ${accentColor};
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          border-radius: 4px;
          height: 100%;
          transition: all 0.2s ease;
        }

        .kpi-block:hover {
          border-color: var(--color-neutral-300);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .kpi-value {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: ${accentColor};
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .kpi-value.long {
          font-size: 24px;
        }
        
        .kpi-label {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          color: var(--color-neutral-900);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: var(--space-2);
        }
        
        .kpi-context {
          font-family: var(--font-body);
          font-size: 10px;
          line-height: 1.4;
          color: var(--color-neutral-500);
        }
        
        .kpi-change {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 700;
          margin-top: var(--space-2);
        }
        
        .kpi-change.positive {
          color: var(--color-primary);
        }
        
        .kpi-change.negative {
          color: var(--color-neutral-600);
        }
      `}</style>
    </div>
  );
}
