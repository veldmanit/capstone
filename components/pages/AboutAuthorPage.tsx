'use client';

import React from 'react';

/**
 * About the Author / Why This Capstone Page
 * - Third page of the report (unnumbered).
 * - Biographic info and context for the project.
 */
export default function AboutAuthorPage() {
    return (
        <div className="page about-page">
            <div className="content-container">

                {/* Header */}
                <div style={{ marginBottom: 'var(--space-8)', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: 'var(--space-4)' }}>
                    <h2 style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        About the Author & Context
                    </h2>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

                    {/* Section 1: About the Author */}
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-4)' }}>
                            About the Author
                        </h3>
                        <div style={{ fontSize: '11px', lineHeight: '1.8', color: 'var(--color-neutral-800)' }}>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                <strong>Raymon Veldman</strong> is Manager Business Control & IT at Glaspoort, a Dutch fiber infrastructure company. His career spans over a decade in finance, including positions at BAM, one of the Netherlands' largest construction companies. His experience covers accounting, controlling, treasury, and M&A, complemented by a strong affinity for technology and IT. He holds a Master's degree in Finance and a Bachelor's degree in Business Economics.
                            </p>
                            <p>
                                In 2021, Raymon co-founded Fieldsman with his brothers Jurrian and Herald. What began as a hobby project, designing and building an outdoor kitchen for personal use, evolved into a direct-to-consumer brand addressing the gap between low-quality budget options and unaffordable premium solutions. Raymon serves as CEO/CFO (strategy, sales, marketing, finance, IT), Jurrian as COO (product design, supply chain), and Herald leads operations (assembly, delivery, service).
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Why This Capstone */}
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-4)' }}>
                            Why This Capstone
                        </h3>
                        <div style={{ fontSize: '11px', lineHeight: '1.8', color: 'var(--color-neutral-800)' }}>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                Glaspoort offered Raymon the opportunity to pursue the HEC Paris Executive MBA as preparation for a future CFO role. However, the program has had an unexpected effect: rather than reinforcing a corporate path, the EMBA has deepened his interest in entrepreneurship.
                            </p>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                When the EMBA began, Fieldsman was not part of the plan. The product was fixed, not modular, each kitchen required extensive custom work, making it nearly impossible to scale. But as the program progressed, something shifted. Each subject—strategy, operations, finance, marketing—became a lens through which to rethink Fieldsman. The venture that seemed like a side project started to look like a real opportunity.
                            </p>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                This capstone documents a transformation that has already begun. Over the past eighteen months, we have redesigned the entire product into a modular system enabling mass customization. We have invested in a laser cutting machine, a welding robot, and a waterjet cutting machine. We have built a 3D configurator. We have established a supplier in China that now produces 80% of our modules. And we have secured a countertop slab supplier, with the first delivery arriving in February 2026, when we will begin cutting countertops in-house.
                            </p>
                            <p>
                                The strategic question is no longer theoretical. The foundations are in place. This capstone provides the roadmap for what comes next: scaling in the Netherlands in 2026, then expanding into Belgium and Germany. It also answers a personal question: whether Fieldsman can become significant enough to pursue as a primary career. The analysis that follows provides the foundation for that decision.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <style jsx>{`
        .about-page {
          width: var(--page-width);
          min-height: var(--page-height);
          background: white;
          position: relative;
          page-break-after: always;
          padding: calc(var(--page-margin) * 2);
        }
        
        @media screen {
          .about-page {
            margin: 0 auto var(--space-6);
            box-shadow: var(--shadow-lg);
          }
        }
        
        @media print {
          .about-page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>
        </div>
    );
}
