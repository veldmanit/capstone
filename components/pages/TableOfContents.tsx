'use client';

import React from 'react';

interface TOCEntry {
  title: string;
  pageNumber: number;
  level: 1 | 2 | 3;
  subsections?: TOCEntry[];
}

interface TableOfContentsProps {
  entries: TOCEntry[];
}

export default function TableOfContents({ entries }: TableOfContentsProps) {
  const renderEntry = (entry: TOCEntry, index: number) => {
    const levelClass = `toc-entry-${entry.level}`;

    return (
      <div key={index} className={`toc-entry ${levelClass}`}>
        <span className="toc-title">{entry.title}</span>
        <span className="toc-dots"></span>
        <span className="toc-page">{entry.pageNumber}</span>

        {entry.subsections && entry.subsections.length > 0 && (
          <div className="toc-subsections">
            {entry.subsections.map((sub, i) => renderEntry(sub, i))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="table-of-contents">
      <h2 className="toc-heading">Contents</h2>

      <div className="toc-entries">
        {entries.map((entry, index) => renderEntry(entry, index))}
      </div>

      <style jsx>{`
        .table-of-contents {
          padding: var(--space-8) 0;
        }
        
        .toc-heading {
          font-family: var(--font-display);
          font-size: var(--font-size-h2);
          font-weight: var(--font-weight-bold);
          color: var(--color-primary);
          margin-bottom: var(--space-8);
        }
        
        .toc-entries {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }
        
        .toc-entry {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: baseline;
          gap: var(--space-2);
        }
        
        .toc-entry-1 {
          font-size: var(--font-size-h3);
          font-weight: var(--font-weight-bold);
          color: var(--color-text-primary);
          margin-top: var(--space-4);
        }
        
        .toc-entry-2 {
          font-size: var(--font-size-body);
          font-weight: var(--font-weight-medium);
          color: var(--color-text-secondary);
          padding-left: var(--space-6);
        }
        
        .toc-entry-3 {
          font-size: var(--font-size-small);
          font-weight: var(--font-weight-normal);
          color: var(--color-text-tertiary);
          padding-left: var(--space-12);
        }
        
        .toc-title {
          white-space: nowrap;
        }
        
        .toc-dots {
          border-bottom: 1px dotted var(--color-neutral-300);
          margin-bottom: 4px;
        }
        
        .toc-page {
          font-family: var(--font-body);
          font-weight: var(--font-weight-medium);
          white-space: nowrap;
        }
        
        .toc-subsections {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
      `}</style>
    </div>
  );
}
