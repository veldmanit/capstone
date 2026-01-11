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
          width: 100%;
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
          gap: var(--space-4);
          width: 100%;
        }
        
        .toc-entry {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
        }
        
        .toc-title {
          flex-shrink: 0;
          padding-right: 4px;
        }
        
        .toc-entry-1 {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-primary);
          margin-top: var(--space-6);
        }
        
        .toc-entry-2 {
          font-size: 14px;
          font-weight: 500;
          color: var(--color-neutral-800);
          padding-left: var(--space-6);
          margin-top: var(--space-2);
        }
        
        .toc-entry-3 {
          font-size: 12px;
          font-weight: 400;
          color: var(--color-neutral-600);
          padding-left: var(--space-12);
          margin-top: var(--space-1);
        }

        .toc-subsections {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          width: 100%;
        }
      `}</style>
    </div>
  );
}
