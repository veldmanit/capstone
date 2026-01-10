'use client';

import React from 'react';

interface TextBlockProps {
  children: React.ReactNode;
  columns?: 1 | 2;
  className?: string;
  style?: React.CSSProperties;
}

export default function TextBlock({
  children,
  columns = 1,
  className = '',
  style
}: TextBlockProps) {
  return (
    <div className={`text-block columns-${columns} ${className}`} style={style}>
      {children}

      <style jsx>{`
        .text-block {
          font-family: var(--font-body);
          font-size: var(--font-size-body);
          line-height: var(--line-height-relaxed);
          color: var(--color-text-primary);
        }
        
        .text-block :global(p) {
          margin-bottom: var(--space-4);
        }
        
        .text-block :global(h3) {
          margin-top: var(--space-6);
          margin-bottom: var(--space-3);
        }
        
        .text-block :global(ul), .text-block :global(ol) {
          margin-left: var(--space-5);
          margin-bottom: var(--space-4);
        }
        
        .text-block :global(li) {
          margin-bottom: var(--space-2);
        }
        
        .text-block :global(strong) {
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
        }
        
        .columns-2 {
          column-count: 2;
          column-gap: var(--space-8);
        }
        
        @media print {
          .columns-2 {
            column-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
