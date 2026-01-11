'use client';

import React from 'react';

/**
 * Executive Summary Page
 * - Fifth page of the report (unnumbered).
 * - High-level overview of the strategic plan.
 */
export default function ExecutiveSummaryPage() {
    return (
        <div className="page exec-summary-page">
            <div className="content-container">

                {/* Header */}
                <div style={{ marginBottom: 'var(--space-6)', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: 'var(--space-4)' }}>
                    <h2 style={{
                        fontSize: 'var(--font-size-h3)',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Executive Summary
                    </h2>
                </div>

                {/* Main Headline */}
                <h3 style={{
                    fontSize: 'var(--font-size-h2)',
                    fontWeight: 800,
                    color: 'var(--color-neutral-900)',
                    marginBottom: 'var(--space-6)',
                    lineHeight: '1.3'
                }}>
                    Can Fieldsman become a European outdoor kitchen champion? Yes, by owning the "Missing Middle."
                </h3>

                {/* Text Body */}
                <div style={{
                    fontSize: 'var(--font-size-body)',
                    lineHeight: '1.6',
                    color: 'var(--color-neutral-700)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)'
                }}>
                    <p>
                        The European outdoor kitchen market has a gap. At the bottom: cheap, low-quality carts that deteriorate within seasons. At the top: bespoke luxury kitchens at €15,000–€50,000, out of reach for most households. In between, the "Missing Middle" from €3,000 to €5,000, no scaled player exists. This is a €301M opportunity across the Netherlands, Belgium, and Germany, and Fieldsman is positioned to capture it.
                    </p>

                    <p>
                        The market is ready. Outdoor living is growing as homeowners invest in gardens as social spaces. Kamado culture is expanding at 5–8% annually. Customers want premium design and durability but refuse to pay indoor kitchen prices for seasonal use. They will pay €3,000–€5,000 for a kitchen that feels like €15,000, if someone offers it.
                    </p>

                    <p>
                        Fieldsman has proven product-market fit, with minimal marketing. The company sells around 40 kitchens annually, generating €170K revenue at 61% gross margin, on approximately €10K in marketing spend. Demand exceeds supply: we stop advertising each May because we cannot fulfill orders, not because demand weakens. The constraint is operational, not commercial. If €10K in marketing generates €170K in revenue, the opportunity to scale through professional marketing is enormous.
                    </p>

                    <p>
                        The solution: a transformed operating model built on four pillars.
                    </p>

                    <ul style={{ paddingLeft: '12px', listStyleType: 'disc', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>
                            <strong>First, production transformation.</strong> Redesign the product into a modular system enabling mass customization. Outsource steel frames to China (scalable, stockable) and invest in waterjet cutting to bring countertop production in-house, addressing the true bottleneck where the supplier market fails on cost (€900 → €100) and lead time (8 weeks → 2 weeks). This unlocks capacity from 40 to 5,000 kitchens per year.
                        </li>
                        <li>
                            <strong>Second, a professional multi-channel marketing engine.</strong> Scaling from €170K to €10.6M requires more than increasing ad spend. It demands a full marketing transformation: SEO to capture high-intent search traffic, paid social campaigns on Instagram and Pinterest where outdoor living inspiration happens, strategic influencer partnerships with kamado and outdoor lifestyle creators, presence at garden and BBQ events, and targeted paid advertising across Meta and Google. Equally important is building brand legitimacy through systematic collection of online reviews and customer testimonials, creating a moat of social proof that competitors cannot easily replicate.
                        </li>
                        <li>
                            <strong>Third, AI-first commercial operations.</strong> Rather than building large sales and service teams, Fieldsman scales through AI-enabled configuration support, lead qualification, and customer service. A 3D configurator drives conversion. Partner showrooms provide physical trust without the 30–40% retail margins that would destroy our price positioning.
                        </li>
                        <li>
                            <strong>Fourth, phased geographic expansion.</strong> Scale the Netherlands in 2026. Enter Belgium and pilot Germany in 2027. Accelerate Germany, the anchor market at €541M TAM, through 2030.
                        </li>
                    </ul>

                    <p>
                        The financial outcome is compelling. Revenue grows from €170K (2025) to €10.6M (2030). Volume scales from 40 to 2,125 kitchens per year. EBITDA margins stabilize at 48% as operating leverage builds.
                    </p>

                    <p>
                        Key risks are execution-focused: supplier quality, lead time stability, marketing effectiveness, and founder bandwidth. Mitigations include supplier certification, inventory buffers, dual sourcing from 2028, continuous marketing optimization, and key hires in 2026.
                    </p>

                    <p style={{ fontWeight: 700, color: 'var(--color-primary)' }}>
                        Fieldsman can become a European outdoor kitchen champion. Execution, not strategy, is now the determining variable.
                    </p>
                </div>

            </div>

            <style jsx>{`
        .exec-summary-page {
          width: var(--page-width);
          min-height: var(--page-height);
          background: white;
          position: relative;
          page-break-after: always;
          padding: calc(var(--page-margin) * 2);
        }
        
        @media screen {
          .exec-summary-page {
            margin: 0 auto var(--space-6);
            box-shadow: var(--shadow-lg);
          }
        }
        
        @media print {
          .exec-summary-page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>
        </div>
    );
}
