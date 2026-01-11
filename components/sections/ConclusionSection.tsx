'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

/**
 * Section 9: Conclusion
 * Final synthesis and strategic recommendation.
 */
export default function ConclusionSection() {
    return (
        <PageWrapper sectionLabel="SECTION 9: CONCLUSION">

            {/* 9.1 Strategic Summary */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-6)',
                    color: 'var(--color-primary)'
                }}>
                    9.1 Strategic Summary
                </h2>

                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p>
                        This capstone began with a single question: Can Fieldsman become a European outdoor kitchen champion? The analysis confirms that the answer is yes, provided the company executes a disciplined transformation over the next five years.
                    </p>
                </TextBlock>

                <h3 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    The Strategic Logic Rests on Three Pillars
                </h3>

                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong>First, the market opportunity is real and underserved.</strong> The "Missing Middle" between cheap disposable carts and unaffordable luxury kitchens represents €301M across the Netherlands, Belgium, and Germany. Customers in this segment want premium design and durability but refuse to pay indoor kitchen prices for seasonal use. They will pay €3,000 to €8,000 for a product that feels like €15,000 if someone offers it. No scaled player has emerged to serve them. Every competitor remains a small workshop or regional craftsman, structurally unable to combine quality with volume. This gap is not a temporary market inefficiency; it reflects the genuine difficulty of building an operating model that delivers both.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong>Second, Fieldsman has validated product-market fit.</strong> With approximately €10K in marketing spend, the company generates €170K in revenue at 48% EBITDA margin and 25.2x return on ad spend. The business stops advertising each May not because demand weakens but because capacity is exhausted. Customer feedback consistently highlights the emotional value of the product: the "wow effect," pride of ownership, and hosting satisfaction. The constraint is operational, not commercial. This is the problem most startups would envy.
                    </p>
                    <p>
                        <strong>Third, the path to scale is clear and executable.</strong> The Brand-Led Scale-Up strategy addresses Fieldsman's constraints through a transformed operating model. Production transformation outsources standardized steel frames while bringing countertop cutting in-house, reducing costs from €900 to €100 and lead times from 8 weeks to 2 weeks. An AI-powered commercial engine scales sales without proportional headcount through a 3D configurator, intelligent lead qualification, and automated customer service. A phygital go-to-market model combines digital acquisition with partner showrooms at 5 to 15% fees versus traditional retail's 40% margins. Capability-gated geographic expansion proves the model in the Netherlands before entering Belgium and Germany, the anchor market representing 72% of total addressable market.
                    </p>
                </TextBlock>

                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong>The financial model demonstrates compelling returns.</strong> Revenue grows from €170K to €10.6M by 2030. Volume scales from 40 to 2,125 kitchens annually. EBITDA margin reaches 30% as operating leverage builds. The model requires only €100K equity injection, achieves breakeven in 2027, and generates €4.0M cumulative cash by 2030. Even under adverse conditions modeled in the Worst Case scenario, the business generates positive net present value.
                    </p>
                    <p>
                        <strong>The risks are execution-focused rather than strategic:</strong> supplier quality, lead time stability, marketing effectiveness, and founder bandwidth. Each has concrete mitigations. Supplier certification and dual sourcing from 2028 address supply chain risks. Continuous conversion rate optimization and CAC caps manage marketing risk. Key hires in 2026 and the founders' transition to full-time leadership address organizational constraints.
                    </p>
                </TextBlock>
            </div>

            {/* 9.2 Final Recommendation */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-primary)'
                }}>
                    9.2 Final Recommendation
                </h2>

                <div style={{
                    background: 'rgba(74, 93, 35, 0.05)',
                    padding: 'var(--space-4) var(--space-5)',
                    borderRadius: '4px',
                    borderLeft: '4px solid var(--color-primary)',
                    marginBottom: 'var(--space-5)'
                }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-1)' }}>The recommendation is GO.</h3>
                    <p style={{ fontSize: '12.5px', lineHeight: '1.5', color: 'var(--color-neutral-800)', margin: 0 }}>
                        Fieldsman should proceed with the Brand-Led Scale-Up strategy, targeting €10.6M revenue and 2,125 kitchens by 2030 across the Netherlands, Belgium, and Germany.
                    </p>
                </div>

                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        The strategic window is open but not indefinitely. Fieldsman's advantages in modularity, direct-to-consumer structure, and operational efficiency are logical rather than technological. Competitors with sufficient capital could eventually replicate them. The VRIO analysis confirms that current advantages provide temporary competitive benefit, not sustained dominance. To convert this head start into a defensible position, Fieldsman must build brand equity and market presence before industrial incumbents or upmarket moves from mass retailers close the gap.
                    </p>
                    <p>
                        The foundations are already in place. Over the past eighteen months, the product has been redesigned into a fully modular system. Investment in waterjet cutting equipment is complete. A supplier in China now produces 80% of modules. The first countertop slab delivery arrives in February 2026. The 3D configurator is operational. What remains is execution.
                    </p>
                </TextBlock>

                {/* Immediate Next Steps */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h4 style={{ fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)' }}>
                        Immediate Next Steps (Q1 2026):
                    </h4>
                    <div className="grid-container" style={{ gap: 'var(--space-4)' }}>
                        {[
                            "Finalize founder transition timeline and secure commitment to full-time leadership by mid-2026",
                            "Complete waterjet commissioning and produce first in-house countertops",
                            "Hire Workshop Lead and Marketing Manager as first dedicated employees",
                            "Launch professional marketing engine with SEO foundation and paid social campaigns",
                            "Establish first two partner showroom relationships in the Netherlands",
                            "Implement inventory management systems and build 2-month component buffer"
                        ].map((step, i) => (
                            <div key={i} className="col-6" style={{ display: 'flex', gap: '14px', marginBottom: '12px' }}>
                                <div style={{
                                    minWidth: '22px',
                                    height: '22px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '11px',
                                    fontWeight: 800,
                                    lineHeight: 1
                                }}>{i + 1}</div>
                                <div style={{ fontSize: '12px', lineHeight: '1.5', color: 'var(--color-neutral-700)', fontWeight: 500 }}>{step}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <TextBlock>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        The question this capstone set out to answer was whether Fieldsman can become a European outdoor kitchen champion. The analysis confirms that the opportunity exists, the product is validated, and the strategy is sound. What remains is the hardest part: disciplined execution over five years, scaling from three brothers with a side project to a 19-person organization serving three countries.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        The market is waiting. The model is proven. The transformation has begun.
                    </p>
                    <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--color-primary)' }}>
                        Execution, not strategy, is now the determining variable.
                    </p>
                </TextBlock>
            </div>

        </PageWrapper>
    );
}
