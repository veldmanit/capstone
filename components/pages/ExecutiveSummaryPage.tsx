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
                    fontSize: '22px',
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
                    lineHeight: '1.5',
                    color: 'var(--color-neutral-800)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-4)'
                }}>
                    <div>
                        <h4 style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', marginBottom: 'var(--space-2)' }}>The Opportunity</h4>
                        <p>
                            The European outdoor kitchen market is structurally polarized. At the bottom: cheap carts from IKEA and Weber that deteriorate within seasons. At the top: bespoke luxury solutions at €15,000 to €50,000, out of reach for most households. In between sits the "Missing Middle," a €301M opportunity across the Netherlands, Belgium, and Germany where customers want premium design and durability but refuse to pay indoor kitchen prices for seasonal use. Crucially, no scaled player has emerged to serve them. Every competitor operates as a small workshop or regional craftsman, unable to combine quality with volume. This structural gap is Fieldsman's to capture.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', marginBottom: 'var(--space-2)' }}>Proven Product-Market Fit</h4>
                        <p>
                            Fieldsman, founded by three brothers, has already validated this thesis. With minimal marketing spend of approximately €10K, the company generates €170K in revenue at 48% EBITDA margin, achieving a remarkable 25.2x return on ad spend. The business stops advertising each May, not because demand weakens, but because capacity is exhausted. The constraint is operational, not commercial. Customer feedback consistently highlights the emotional "wow effect" and pride of ownership as central to perceived value. If €10K generates €170K, professional marketing at scale unlocks transformational growth.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', marginBottom: 'var(--space-2)' }}>The Strategic Solution</h4>
                        <p>
                            The recommended strategy is a Brand-Led Scale-Up built on a counterintuitive production logic: outsource what seems core (standardized steel frames to China) while bringing in-house what seems peripheral (countertop cutting via waterjet investment). This "production reversal" addresses the true bottleneck where the supplier market fails, reducing countertop costs from €900 to €100 and lead times from 8 weeks to 2 weeks. A 2-month inventory buffer then enables consistent delivery even during seasonal peaks.
                        </p>
                        <p style={{ marginTop: 'var(--space-2)' }}>
                            Commercially, an AI-powered "phygital" engine drives growth without proportional headcount. A 3D configurator handles configuration and upselling. AI manages lead qualification and 85% of customer service. Partner showrooms provide physical trust at 5 to 15% fees versus traditional retail's 40% margins. A multi-channel marketing engine combining SEO, paid social, influencer partnerships, and systematic review collection builds the brand equity that represents Fieldsman's only truly defensible moat. Geographic expansion follows capability-gated sequencing: prove the model in the Netherlands (2026), enter Belgium and pilot Germany (2027), then accelerate Germany, which at €541M represents 72% of the total addressable market, through 2030.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', marginBottom: 'var(--space-2)' }}>Financial Outcomes</h4>
                        <p>
                            Revenue grows from €170K to €10.6M by 2030. Volume scales from 40 to 2,125 kitchens annually. EBITDA margin reaches 30% as operating leverage builds. The model requires only €100K equity injection in Year 1, achieves breakeven in 2027, and generates €4.0M cumulative cash by 2030. At a 12% WACC, enterprise value reaches €11.3M, representing 113x return on invested equity.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', fontSize: '12px', marginBottom: 'var(--space-2)' }}>The Strategic Imperative</h4>
                        <p>
                            Fieldsman's current advantages in modularity and direct-to-consumer structure are temporary. Competitors with sufficient capital, including potential upmarket moves from IKEA or Weber, could eventually replicate them. This creates a strategic window: Fieldsman must aggressively build brand equity and scale before copycats close the gap. The foundations are in place. <strong>Execution, not strategy, is now the determining variable.</strong>
                        </p>
                    </div>
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
