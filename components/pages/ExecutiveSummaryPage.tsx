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
                        fontSize: '14px',
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
                    fontSize: '12px',
                    fontWeight: 800,
                    color: 'var(--color-neutral-900)',
                    marginBottom: 'var(--space-6)',
                    lineHeight: '1.4'
                }}>
                    Can Fieldsman become a European outdoor kitchen champion? Yes, by owning the "Missing Middle."
                </h3>

                {/* Text Body */}
                <div style={{
                    fontSize: '10px', // Slightly smaller to fit all text comfortably
                    lineHeight: '1.6',
                    color: 'var(--color-neutral-800)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)'
                }}>
                    <p>
                        The European outdoor kitchen market has a gap. At the bottom: cheap, low-quality carts that deteriorate within seasons. At the top: bespoke luxury kitchens at <strong>€15,000–€50,000</strong>, out of reach for most households. In between, the "Missing Middle" from <strong>€3,000 to €5,000</strong>, no scaled player exists. This is a <strong>€301M</strong> opportunity across the Netherlands, Belgium, and Germany, and Fieldsman is positioned to capture it.
                    </p>

                    <p>
                        The market is ready. Outdoor living is growing as homeowners invest in gardens as social spaces. Kamado culture is expanding at <strong>5–8%</strong> annually. Customers want premium design and durability but refuse to pay indoor kitchen prices for seasonal use. They will pay <strong>€3,000–€5,000</strong> for a kitchen that feels like <strong>€15,000</strong>, if someone offers it.
                    </p>

                    <p>
                        Fieldsman has proven product-market fit, with minimal marketing. The company sells around <strong>40</strong> kitchens annually, generating <strong>€170K</strong> revenue at <strong>61%</strong> gross margin, on approximately <strong>€10K</strong> in marketing spend. Demand exceeds supply: we stop advertising each May because we cannot fulfill orders, not because demand weakens. The constraint is operational, not commercial. If <strong>€10K</strong> in marketing generates <strong>€170K</strong> in revenue, the opportunity to scale through professional marketing is enormous.
                    </p>

                    <p>
                        <strong>The solution: a transformed operating model built on four pillars.</strong>
                    </p>

                    <ul style={{ paddingLeft: '12px', listStyleType: 'disc', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li>
                            <strong>First, production transformation.</strong> Redesign the product into a modular system enabling mass customization. Outsource steel frames to China (scalable, stockable) and invest in waterjet cutting to bring countertop production in-house, addressing the true bottleneck where the supplier market fails on cost (<strong>€900 → €100</strong>) and lead time (<strong>8 weeks → 2 weeks</strong>). This unlocks capacity from <strong>40 to 5,000</strong> kitchens per year.
                        </li>
                        <li>
                            <strong>Second, a professional multi-channel marketing engine.</strong> Scaling from <strong>€170K to €10.6M</strong> requires more than increasing ad spend. It demands a full marketing transformation: SEO to capture high-intent search traffic, paid social campaigns on Instagram and Pinterest where outdoor living inspiration happens, strategic influencer partnerships with kamado and outdoor lifestyle creators, presence at garden and BBQ events, and targeted paid advertising across Meta and Google. Equally important is building brand legitimacy through systematic collection of online reviews and customer testimonials, creating a moat of social proof that competitors cannot easily replicate.
                        </li>
                        <li>
                            <strong>Third, AI-first commercial operations.</strong> Rather than building large sales and service teams, Fieldsman scales through AI-enabled configuration support, lead qualification, and customer service. A 3D configurator drives conversion. Partner showrooms provide physical trust without the <strong>30–40%</strong> retail margins that would destroy our price positioning.
                        </li>
                        <li>
                            <strong>Fourth, phased geographic expansion.</strong> Scale the Netherlands in <strong>2026</strong>. Enter Belgium and pilot Germany in <strong>2027</strong>. Accelerate Germany, the anchor market at <strong>€541M</strong> TAM, through <strong>2030</strong>.
                        </li>
                    </ul>

                    <p>
                        The financial outcome is compelling. Revenue grows from <strong>€170K (2025)</strong> to <strong>€10.6M (2030)</strong>. Volume scales from <strong>40</strong> to <strong>2,125</strong> kitchens per year. EBITDA margins stabilize at <strong>48%</strong> as operating leverage builds.
                    </p>

                    <p>
                        Key risks are execution-focused: supplier quality, lead time stability, marketing effectiveness, and founder bandwidth. Mitigations include supplier certification, inventory buffers, dual sourcing from <strong>2028</strong>, continuous marketing optimization, and key hires in <strong>2026</strong>.
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
