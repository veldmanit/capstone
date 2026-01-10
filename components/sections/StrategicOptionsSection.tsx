'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

export default function StrategicOptionsSection() {
    return (
        <>
            {/* PAGE 1: Strategic Evaluation (The 3 Paths) */}
            <PageWrapper sectionLabel="SECTION 4: STRATEGIC OPTIONS">
                <h2 style={{ marginBottom: 'var(--space-6)' }}>4.1 Strategic Evaluation: Three Paths Forward</h2>
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <TextBlock>
                        <p style={{ fontSize: '10.5px' }}>
                            To determine the optimal path for national scale and international expansion, Fieldsman utilized the <strong>Odyssey 3.14 framework</strong> to generate three distinct Business Model Innovation vectors. These options challenge the current model across its three pillars: <strong>Value Proposition</strong>, <strong>Value Architecture</strong>, and <strong>Profit Equation</strong>.
                        </p>
                    </TextBlock>
                </div>

                {/* UNIFIED STRATEGIC COMPARISON MATRIX */}
                <div style={{ marginTop: 'var(--space-4)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8.5px', tableLayout: 'fixed' }}>
                        {/* HEADER: OPTIONS */}
                        <thead style={{ background: 'var(--color-neutral-50)' }}>
                            <tr>
                                <th style={{ width: '15%', background: 'white', border: 'none' }}></th>
                                <th style={{ textAlign: 'left', padding: '10px', width: '28.33%', color: 'var(--color-primary)', fontWeight: 800, borderBottom: '2px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-primary)', borderLeft: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-100)' }}>
                                    OPTION 1 <br></br> BRAND SCALE-UP
                                    <div style={{ fontSize: '7.5px', fontWeight: 600, color: 'var(--color-primary)', marginTop: '2px', textTransform: 'uppercase' }}>Value Architecture Innovation</div>
                                </th>
                                <th style={{ textAlign: 'left', padding: '10px', width: '28.33%', color: 'var(--color-neutral-600)', fontWeight: 700, borderBottom: '2px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-neutral-400)', borderLeft: '1px solid var(--color-neutral-200)' }}>
                                    OPTION 2<br></br> M&A ROLL-UP
                                    <div style={{ fontSize: '7.5px', fontWeight: 600, color: 'var(--color-neutral-500)', marginTop: '2px', textTransform: 'uppercase' }}>Resource Consolidation</div>
                                </th>
                                <th style={{ textAlign: 'left', padding: '10px', width: '28.33%', color: 'var(--color-neutral-600)', fontWeight: 700, borderBottom: '2px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-neutral-400)', borderLeft: '1px solid var(--color-neutral-200)' }}>
                                    OPTION 3<br></br> PARTNER / JV
                                    <div style={{ fontSize: '7.5px', fontWeight: 600, color: 'var(--color-neutral-500)', marginTop: '2px', textTransform: 'uppercase' }}>Profit Equation Shift</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* ROW 1: SCENARIO LOGIC */}
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)', background: 'var(--color-neutral-50)', verticalAlign: 'top' }}>
                                    STRATEGIC<br />LOGIC
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-primary)', borderBottom: '1px solid var(--color-neutral-200)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', background: 'var(--color-neutral-100)', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Reconfigure Chain:</strong> Hybridize the Value Chain by offshoring component production (China) while retaining assembly (NL).</li>
                                        <li><strong>Phygital GTM:</strong> Scale the "Direct-to-Consumer" proposition via digital configurators + asset-light experience points.</li>
                                        <li><strong>Organic Pace:</strong> Step-change growth funded by retained earnings.</li>
                                    </ul>
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-neutral-600)', borderBottom: '1px solid var(--color-neutral-200)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Acquire Resources:</strong> Bypass capacity bottlenecks by purchasing established German manufacturers.</li>
                                        <li><strong>Horizontal Integration:</strong> Consolidate competitors under the Fieldsman umbrella to capture market share.</li>
                                        <li><strong>CapEx Heavy:</strong> Growth via significant capital injection and asset absorption.</li>
                                    </ul>
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-neutral-600)', borderBottom: '1px solid var(--color-neutral-200)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Externalize Execution:</strong> Shift GTM and CAPEX burden to Master Franchise partners.</li>
                                        <li><strong>Revenue Model Flip:</strong> Transition from Margin-based to Royalty/Licensing-based revenue.</li>
                                        <li><strong>Platform Play:</strong> Fieldsman becomes a product IP & brand licensor.</li>
                                    </ul>
                                </td>
                            </tr>

                            {/* ROW 2: SFA EVALUATION */}
                            {['Suitability', 'Feasibility', 'Acceptability', 'Ops Control'].map((crit, idx) => (
                                <tr key={crit} style={{ borderBottom: idx === 3 ? '1px solid var(--color-neutral-200)' : '1px dashed var(--color-neutral-200)' }}>
                                    <td style={{ padding: '6px 10px', fontWeight: 600, fontSize: '8px', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-50)' }}>{crit}</td>
                                    <td style={{ textAlign: 'center', background: 'var(--color-neutral-100)', color: 'var(--color-primary)', borderLeft: '1px solid var(--color-neutral-200)', fontWeight: 800 }}>
                                        {crit === 'Feasibility' ? '✓ HIGH-MED' : '✓ HIGH'}
                                    </td>
                                    <td style={{ textAlign: 'center', color: crit === 'Suitability' ? 'var(--color-secondary)' : 'var(--color-neutral-400)', fontWeight: crit === 'Suitability' ? 600 : 700, borderLeft: '1px solid var(--color-neutral-200)' }}>
                                        {crit === 'Suitability' ? '○ MEDIUM' : '✗ LOW-MED'}
                                    </td>
                                    <td style={{ textAlign: 'center', color: crit === 'Acceptability' || crit === 'Ops Control' ? 'var(--color-neutral-400)' : 'var(--color-secondary)', fontWeight: 600, borderLeft: '1px solid var(--color-neutral-200)' }}>
                                        {crit === 'Acceptability' || crit === 'Ops Control' ? '✗ LOW' : '○ MEDIUM'}
                                    </td>
                                </tr>
                            ))}

                            {/* ROW 3: DECISION */}
                            <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                                <td style={{ padding: '10px', fontWeight: 800, color: 'var(--color-neutral-900)', background: 'var(--color-neutral-50)' }}>DECISION</td>
                                <td style={{ textAlign: 'center', background: 'var(--color-primary)', borderLeft: '1px solid var(--color-neutral-200)', color: 'white', fontWeight: 800, fontSize: '11px' }}>GO</td>
                                <td style={{ textAlign: 'center', background: 'var(--color-neutral-100)', borderLeft: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-500)', fontWeight: 700, fontSize: '10px' }}>NO-GO</td>
                                <td style={{ textAlign: 'center', background: 'var(--color-neutral-100)', borderLeft: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-500)', fontWeight: 700, fontSize: '10px' }}>NO-GO</td>
                            </tr>

                            {/* ROW 4: RATIONALE & BARRIERS */}
                            <tr>
                                <td style={{ padding: '10px', fontWeight: 700, color: 'var(--color-neutral-900)', background: 'var(--color-neutral-50)', verticalAlign: 'top' }}>
                                    RATIONALE<br />& BARRIERS
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-primary)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', background: 'rgba(74, 93, 35, 0.08)', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Value Chain Ownership:</strong> Optimizes cost structure via hybrid model while keeping high-margin D2C capture.</li>
                                        <li><strong>Risk/Reward Balance:</strong> Phased "fail-fast" organic growth minimizes capital exposure.</li>
                                        <li><strong>Strategic fit:</strong> Best alignment with "Premium Brand" positioning.</li>
                                    </ul>
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-neutral-600)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Financial Gap:</strong> Current balance sheet cannot support M&A; mandates high-risk external capital.</li>
                                        <li><strong>Leverage Risk:</strong> External funding dependence compromises long-term stability & control.</li>
                                        <li><strong>Cultural Risk:</strong> High probability of value destruction during integration.</li>
                                    </ul>
                                </td>
                                <td style={{ padding: '10px', color: 'var(--color-neutral-600)', borderLeft: '1px solid var(--color-neutral-200)', verticalAlign: 'top', lineHeight: '1.4' }}>
                                    <ul style={{ margin: 0, paddingLeft: '12px', listStyleType: 'square' }}>
                                        <li><strong>Margin Cannibalization:</strong> Licensing fees cannot match verticalized D2C margins.</li>
                                        <li><strong>Feedback Loop Break:</strong> Loss of direct customer data stalls product innovation.</li>
                                        <li><strong>Brand Dilution:</strong> Lack of control over end-user experience.</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Additional context if space permits (Bottom of Page 1) */}
                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-4)' }}>
                    <p style={{ fontSize: '8.5px', color: '#64748b', fontStyle: 'italic', textAlign: 'center', margin: 0 }}>
                        *Options generated via Odyssey 3.14 (3 Pillars, 14 Directions) and filtered for Stage 2 organizational maturity.
                    </p>
                </div>
            </PageWrapper>

            {/* PAGE 2: The Recommended Path Deep Dive */}
            <PageWrapper sectionLabel="SECTION 4: STRATEGIC OPTIONS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>4.2 Recommended Strategy: Brand-Led Scale-Up</h2>

                {/* Strategic Intent - Standardized Style */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>STRATEGIC INTENT: THE "PHYGITAL" ENGINE</h3>
                    <TextBlock>
                        <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
                            Fieldsman will build a scalable European outdoor kitchen brand by executing a repeatable <strong>D2C "phygital" model</strong>: leveraging online inspiration and digital configurators for customer acquisition, supported by cost-efficient physical experience points. This strategy transforms the supply chain by leveraging <strong>modular architecture</strong> to shift from high-cost local fabrication to a <strong>hybrid assembly model</strong> (Chinese component scale + Dutch precision finishing), enabling national and international growth without proportional headcount increases.
                        </p>
                    </TextBlock>
                </div>

                {/* Core Design Choices Grid - Refined */}
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '4px', padding: 'var(--space-5)', marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-800)', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>Core Strategy Design Choices</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                        <div>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#1e293b', marginBottom: '4px', textTransform: 'uppercase' }}>Value Chain Control</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.5' }}><strong>Retain 100%</strong> of brand, pricing, and customer data ownership. This ensures direct "learning loops" essential for product optimization and high-margin D2C sales.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#1e293b', marginBottom: '4px', textTransform: 'uppercase' }}>Production Model</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.5' }}><strong>Modular Hybrid:</strong> Standardize components for global outsourcing (scale/cost) while retaining final assembly in NL (quality/speed) to decouple complexity from growth.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#1e293b', marginBottom: '4px', textTransform: 'uppercase' }}>Go-To-Market</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.5' }}><strong>D2C Phygital:</strong> Focus on configurator-led digital sales supported by a decentralized network of low-CAPEX experience points, bypassing traditional retail margins.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#1e293b', marginBottom: '4px', textTransform: 'uppercase' }}>Funding & Control</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.5' }}><strong>Organic / Minority:</strong> Prioritize majority control to maintain long-term brand integrity and strategic agility during the critical 2026-2030 scale-up phase.</p>
                        </div>
                    </div>
                </div>

                {/* Expected Outcome 2030 */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TARGETED OUTCOMES BY 2030</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
                        <div style={{ background: 'var(--color-neutral-50)', color: 'var(--color-primary)', padding: 'var(--space-4)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, opacity: 0.8, marginBottom: '2px' }}>REVENUE</div>
                            <div style={{ fontSize: '14px', fontWeight: 800 }}>€22–35M</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', color: 'var(--color-neutral-700)', padding: 'var(--space-4)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, opacity: 0.8, marginBottom: '2px' }}>VOLUME</div>
                            <div style={{ fontSize: '14px', fontWeight: 800 }}>~3k units</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', color: 'var(--color-neutral-700)', border: '1px solid var(--color-neutral-200)', padding: 'var(--space-4)', borderRadius: '4px', textAlign: 'center' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, opacity: 0.8, marginBottom: '2px' }}>MARKETS</div>
                            <div style={{ fontSize: '12px', fontWeight: 800 }}>NL • BE • DE</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', color: 'var(--color-neutral-700)', border: '1px solid var(--color-neutral-200)', padding: 'var(--space-4)', borderRadius: '4px', textAlign: 'center' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, opacity: 0.8, marginBottom: '2px' }}>OWNERSHIP</div>
                            <div style={{ fontSize: '12px', fontWeight: 800 }}>Majority</div>
                        </div>
                    </div>
                </div>

                {/* Final Rationale Block */}
                <div style={{ padding: 'var(--space-4)', background: '#F1F5F9', borderRadius: '4px', marginBottom: 'var(--space-4)' }}>
                    <p style={{ fontSize: '9.5px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
                        <strong style={{ color: '#1e293b' }}>Conclusion:</strong> By choosing Option 1, Fieldsman avoids the "complexity trap" of premature M&A and the "control trap" of master franchising. This path ensures the company remains the master of its own data and brand, which are the foundations for the AI-driven operational efficiencies planned in Appendix C.
                    </p>
                </div>

                {/* Takeaways - Standardized Style */}
                <div style={{ borderTop: '2px solid var(--color-neutral-200)', paddingTop: 'var(--space-4)', marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>4.3 KEY TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Phased Scale:</strong> Organic growth allows "failing small" before aggressive expansion into Germany.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Protect the DNA:</strong> Direct customer feedback and D2C margins are the non-negotiables.
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
