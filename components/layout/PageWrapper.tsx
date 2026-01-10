'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '@/styles/variables.css';
import '@/styles/global.css';
import '@/styles/grid.css';

interface PageWrapperProps {
  children: React.ReactNode;
  sectionLabel?: string;
  showPageNumber?: boolean; // Default true for content pages
  className?: string;
  noPadding?: boolean;
}

export default function PageWrapper({
  children,
  sectionLabel,
  showPageNumber = true,
  className = '',
  noPadding = false,
}: PageWrapperProps) {

  return (
    <div className={`page ${className} ${showPageNumber ? 'numbered-page' : ''}`}>
      {!noPadding && sectionLabel && <Header sectionLabel={sectionLabel} />}

      <div className={noPadding ? '' : 'page-content'}>
        {children}
      </div>

      {!noPadding && showPageNumber && <Footer />}

      <style jsx>{`
        .page {
          width: var(--page-width);
          min-height: var(--page-height);
          background: white;
          position: relative;
          page-break-after: always;
        }

        .numbered-page {
          counter-increment: page-count;
        }
        
        .page-content {
          padding: var(--page-margin);
          padding-top: var(--space-12);
          padding-bottom: var(--space-12);
        }
        
        @media screen {
          .page {
            margin: 0 auto var(--space-6);
            box-shadow: var(--shadow-lg);
          }
        }
        
        @media print {
          .page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
