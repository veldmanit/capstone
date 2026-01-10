'use client';

import React from 'react';

interface CoverPageProps {
  title?: string;
  subtitle?: string;
  author?: string;
  date?: string;
}

export default function CoverPage({
  title = "Fieldsman",
  subtitle = "Strategic Growth Plan: From 50 to 3,000 Kitchens",
  author = "R.H. Veldman",
  date = "2026"
}: CoverPageProps) {
  return (
    <div className="page cover-page">
      {/* Background gradient shape */}
      <div className="background-shape"></div>

      {/* Content */}
      <div className="content">
        <div className="title-section">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>

        <div className="meta-section">
          <div className="author">{author}</div>
          <div className="date">{date}</div>
        </div>
      </div>

      <style jsx>{`
        .cover-page {
          width: var(--page-width);
          height: var(--page-height);
          position: relative;
          overflow: hidden;
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          page-break-after: always;
        }
        
        .background-shape {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 80%;
          height: 120%;
          background: linear-gradient(
            135deg,
            var(--color-primary) 0%,
            var(--color-primary-light) 50%,
            var(--color-accent) 100%
          );
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(80px);
        }
        
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: var(--space-12);
          max-width: 80%;
        }
        
        .title-section {
          margin-bottom: var(--space-24);
        }
        
        .title {
          font-family: var(--font-display);
          font-size: var(--font-size-display);
          font-weight: var(--font-weight-bold);
          color: white;
          letter-spacing: var(--letter-spacing-tight);
          margin-bottom: var(--space-6);
          line-height: 1.1;
        }
        
        .subtitle {
          font-family: var(--font-body);
          font-size: var(--font-size-h2);
          font-weight: var(--font-weight-normal);
          color: rgba(255, 255, 255, 0.9);
          line-height: var(--line-height-relaxed);
          max-width: 90%;
          margin: 0 auto;
        }
        
        .meta-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-2);
        }
        
        .author, .date {
          font-family: var(--font-body);
          font-size: var(--font-size-small);
          font-weight: var(--font-weight-medium);
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: var(--letter-spacing-wide);
          text-transform: uppercase;
        }
        
        @media print {
          .cover-page {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
