'use client';

import React from 'react';

/**
 * Acknowledgement Page
 * - Second page of the report.
 * - Does not count towards page numbering.
 * - content: Personal thanks from the author.
 */
export default function AcknowledgementPage() {
    return (
        <div className="page acknowledgement-page">
            <div className="content-container">

                {/* Simple Header */}
                <div style={{ marginBottom: 'var(--space-12)', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: 'var(--space-4)' }}>
                    <h2 style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Acknowledgements
                    </h2>
                </div>

                {/* Text Body */}
                <div style={{
                    fontSize: '11px',
                    lineHeight: '1.8',
                    color: 'var(--color-neutral-800)',
                    maxWidth: '600px' // readable line length
                }}>
                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        I would like to thank several people who made this capstone and the EMBA journey possible.
                    </p>

                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        First, my advisor <strong>Thibault Vanès</strong> for his guidance and critical feedback throughout this project.
                    </p>

                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        I am grateful to <strong>Ferry Niers</strong>, CFO at Glaspoort, for offering me the opportunity to pursue the HEC Paris Executive MBA and supporting my development toward a finance leadership role.
                    </p>

                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        To my wife, thank you for your patience and support during two demanding years of balancing work, study, and Fieldsman, and for bringing our first child into the world during this journey. Becoming a father in the midst of the EMBA has given me new perspective on what I'm building and why.
                    </p>

                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        To my brothers <strong>Jurrian and Herald</strong>, co-founders, partners, and family—thank you for building Fieldsman together and for trusting this process to shape our next chapter.
                    </p>

                    <p style={{ marginBottom: 'var(--space-6)' }}>
                        Finally, to my fellow EMBA participants: thank you for the debates, the perspectives, and for helping me sharpen the strategy in this report. The best ideas rarely emerge alone.
                    </p>
                </div>

                {/* Signature */}
                <div style={{ marginTop: 'var(--space-16)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-neutral-900)' }}>Raymon H. Veldman</div>
                    <div style={{ fontSize: '10px', color: 'var(--color-neutral-600)' }}>January 2026</div>
                </div>

            </div>

            <style jsx>{`
        .acknowledgement-page {
          width: var(--page-width);
          min-height: var(--page-height);
          background: white;
          position: relative;
          page-break-after: always;
          padding: calc(var(--page-margin) * 2);
        }
        
        @media screen {
          .acknowledgement-page {
            margin: 0 auto var(--space-6);
            box-shadow: var(--shadow-lg);
          }
        }
        
        @media print {
          .acknowledgement-page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>
        </div>
    );
}
