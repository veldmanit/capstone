'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import KPIBlock from '@/components/content/KPIBlock';
import OrganizationalStructure from '@/components/charts/OrganizationalStructure';
import BottleneckVisual from '@/components/charts/BottleneckVisual';

export default function InternalAnalysisSection() {
    return (
        <>
            {/* PAGE 1: 3.1 The D2C Model & Performance Baseline */}
            <PageWrapper sectionLabel="SECTION 3: INTERNAL ANALYSIS">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <TextBlock>
                        <p>
                            This chapter evaluates whether Fieldsman has the internal capabilities and resources required to execute its growth ambition. It analyzes the current business model, product architecture, capabilities, operational constraints, and the elements of brand equity that must be preserved. The objective is to identify what Fieldsman can leverage, what must be transformed, and what execution risks must be managed.
                        </p>
                    </TextBlock>
                </div>

                <div style={{ borderTop: '1px solid var(--color-neutral-300)', paddingTop: 'var(--space-6)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>3.1 The D2C Model: High Margins, Limited Capacity</h2>
                    <TextBlock>
                        <p>
                            Fieldsman operates as a direct-to-consumer brand. Customers configure their outdoor kitchen online via a proprietary 3D configurator, after which the kitchen is produced and delivered directly. This model avoids retail margins and maintains strong profitability while offering accessible pricing relative to premium competitors.
                        </p>
                    </TextBlock>

                    {/* NEW VALUE CHAIN VISUAL */}
                    <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)', padding: 'var(--space-5)', background: 'var(--color-neutral-100)', borderRadius: 'var(--border-radius-md)' }}>
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <h3 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The D2C Value Chain Advantage</h3>
                            <p style={{ fontSize: '10px', color: 'var(--color-neutral-600)' }}>D2C pricing removes distributor & showroom economics — enabling ~40% savings while maintaining Manufacturer Profitability.</p>
                        </div>

                        {/* CHART CONTAINER */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>

                            {/* Traditional Retail Bar */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', fontWeight: 600, color: 'var(--color-neutral-600)' }}>
                                    <span>Traditional Retail Model</span>
                                    <span>Typical Retail Price: €8,500</span>
                                </div>
                                <div style={{ height: '36px', display: 'flex', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '21%', background: '#1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 700 }}>COGS</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€1.8k</div>
                                    </div>
                                    <div style={{ width: '7%', background: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1:px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '8px', fontWeight: 700 }}>OPS</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€0.6k</div>
                                    </div>
                                    <div style={{ width: '9%', background: '#475569', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '8px', fontWeight: 700 }}>MKTG</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€0.8k</div>
                                    </div>
                                    <div style={{ width: '22%', background: '#16a34a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 700 }}>PROFIT</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€1.9k</div>
                                    </div>
                                    <div style={{ width: '41%', background: '#e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#475569', borderLeft: '1px solid white' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 700 }}>RETAIL MARGIN (40%)</div>
                                        <div style={{ fontSize: '8px', color: '#64748b' }}>~€3.4k</div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '9px', color: '#64748b', marginTop: '6px', fontStyle: 'italic', display: 'flex', gap: '20px' }}>
                                    <span>*Retail Model: Manufacturer sells to distributor/retailer. Brand marketing investment is significant.</span>
                                </div>
                            </div>

                            {/* Fieldsman D2C Bar */}
                            <div style={{ position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', fontWeight: 600, color: 'var(--color-primary-main)' }}>
                                    <span>Fieldsman D2C Model</span>
                                    <span>Target Price: ~€5,000</span>
                                </div>

                                <div style={{ display: 'flex', width: '100%', height: '40px' }}>

                                    {/* The D2C Cost Bar (59% Width approx relative to 8.5k) - Actually utilize full width but scale logically? 
                                        Wait, if Retail is 8.5k (100%), D2C is 5k (59%).
                                        Visual needs to reflect this scale difference.
                                        Retail Width: 100%.
                                        D2C Width: 59%.
                                        Let's try to simulate this scale with the "Savings" block filling the rest.
                                     */}
                                    <div style={{ width: '59%', display: 'flex', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                                        {/* COGS €1.8k / €5k = 36% */}
                                        <div style={{ width: '36%', background: '#1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>COGS</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€1.8k</div>
                                        </div>
                                        {/* OPS €0.6k / €5k = 12% */}
                                        <div style={{ width: '12%', background: '#64748b', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>OPS</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€0.6k</div>
                                        </div>
                                        {/* MKTG €0.7k / €5k = 14% */}
                                        <div style={{ width: '20%', background: '#475569', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>MKTG</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€1.0k</div>
                                        </div>
                                        {/* PROFIT €1.9k / €5k = 38% */}
                                        <div style={{ width: '32%', background: '#16a34a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>PROFIT</div>
                                            <div style={{ fontSize: '9px', opacity: 0.9 }}>€1.6k (32%)</div>
                                        </div>
                                    </div>

                                    {/* The "Savings" Bar (Right 40%) */}
                                    <div style={{
                                        width: '40%',
                                        marginLeft: '1%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '4px',
                                        border: '1px dashed #16a34a',
                                        background: 'repeating-linear-gradient(-45deg, #f0fdf4, #f0fdf4 4px, white 4px, white 8px)',
                                        color: '#15803d',
                                        fontSize: '10px',
                                        fontWeight: 700
                                    }}>
                                        Customer savings: ~€3.5k (40%)
                                    </div>

                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                                    <div style={{ fontSize: '9px', color: 'var(--color-primary-main)', fontWeight: 500 }}>
                                    </div>
                                    <div style={{ fontSize: '9px', color: '#64748b', fontStyle: 'italic' }}>
                                        *OPS = Delivery + Install + Service
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* STRATEGIC CONTEXT: WILLINGNESS TO PAY */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Strategic Imperative: Meeting Consumer Willingness To Pay</h4>
                        <p style={{ fontSize: '10px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: 'var(--space-3)' }}>
                            The decision to bypass traditional retail is not just about cost efficiency, but about <strong>market viability</strong>. Our analysis indicates the target customer's maximum Willingness to Pay for this modular category is approximately <strong>€3,000–€8,000</strong>.
                        </p>
                        <p style={{ fontSize: '10px', lineHeight: '1.6', color: 'var(--color-neutral-700)' }}>
                            As the visual demonstrates, a traditional retail model demands a ~40% margin, pushing the price to <strong>€8,500+</strong>—limitng volume. By trading off this retail margin, Fieldsman accepts a lower per-unit potential but unlocks <strong>significantly higher volume</strong> by fitting precisely within the €5k adoption sweet spot. This "Volume Strategy" maximizes total profit pool rather than unit margin percentage.
                        </p>
                    </div>

                    {/* ORGANOGRAM */}
                    <OrganizationalStructure />

                    <h3 style={{ fontSize: '13px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-6)', color: 'var(--color-primary-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Performance Snapshot</h3>
                    <div className="grid-container" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                        <div className="col-4">
                            <KPIBlock
                                value="40%"
                                label="Profit Margin"
                                context="~€80k Profit on €200k Net Rev"
                                accentColor="#2563eb"
                            />
                        </div>
                        <div className="col-4">
                            <KPIBlock
                                value="<€100"
                                label="CAC"
                                context="Customer Acquisition Cost"
                                accentColor="#0ea5e9"
                            />
                        </div>
                        <div className="col-4">
                            <KPIBlock
                                value="40x"
                                label="ROAS"
                                context="Return on Ad Spend"
                                accentColor="#475569"
                            />
                        </div>
                    </div>

                    <TextBlock>
                        <p style={{ fontSize: '11px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: 'var(--space-8)' }}>
                            The company sells approximately 50 kitchens per year with remarkable efficiency. Marketing investment is less than €5,000 annually. This implies a customer acquisition cost under €100 and a return on ad spend exceeding 40x. The demand is clearly there. The constraint has never been commercial; it has always been operational.
                        </p>
                    </TextBlock>

                    {/* NEW STRATEGIC IMPLICATIONS */}
                    <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                        <div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)' }}>DIRECT FEEDBACK LOOP</h4>
                            <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>
                                Unlike competitors who rely on dealer reports, Fieldsman owns the customer relationship. Every conversation is a data point. This "Pulse of the Market" allows for rapid iteration of the 3D configurator and product features based on real-time feedback.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)' }}>CASH EFFICIENCY</h4>
                            <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>
                                The showroom-less model eliminates high fixed rental costs. Furthermore, the D2C model operates on negative working capital: customers pay deposits upfront, funding production before costs are incurred. This is a crucial engine for self-funded growth.
                            </p>
                        </div>
                    </div>


                </div>
            </PageWrapper >

            {/* PAGE 2: 3.2 The Bottleneck: Capacity Over Commercials */}
            <PageWrapper sectionLabel="SECTION 3: INTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>3.2 The Bottleneck: Why Growth Stops in May</h2>
                <TextBlock style={{ marginBottom: 'var(--space-8)' }}>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        Fieldsman’s current production constraint is not the modular product design itself, but the structural setup of the organization: production capacity is limited because the team operates largely part-time, with a small number of skilled people who carry multiple roles. This makes output highly dependent on a few individuals and prevents rapid scaling when demand peaks in spring and summer. The business simply does not have the fixed workforce or continuous operating rhythm required to increase throughput materially.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        While the detailed modular architecture (see <strong>Appendix A</strong>) theoretically allows for pre-season stock building to smooth demand, this would require massive inventory investment at the start of the year. Given the high cost of components, this creates prohibitive working capital pressure and storage costs, making "building to stock" a financially risky strategy for a bootstrapped company.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        At the same time, scaling production fully in-house is structurally inefficient due to strong seasonality. Outdoor kitchen demand drops significantly in winter, which would create overcapacity and idle skilled labor if Fieldsman invested in a larger permanent internal team and equipment. Temporary labor is not a practical solution because the work requires craftsmanship, quality control, and product knowledge that cannot be learned quickly.
                    </p>
                    <p>
                        Adding to this complexity is the supply chain for ceramic countertops. Currently outsourced to local suppliers, this component introduces severe unpredictability, with lead times frequently <strong>exceeding 8 weeks</strong> during high season. This external bottleneck effectively caps total output regardless of internal improvements, as finished frames cannot be shipped without their tops.
                    </p>
                </TextBlock>

                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                    <BottleneckVisual />
                </div>

                <div style={{ marginTop: 'var(--space-8)' }}>
                    <TextBlock>
                        <p>
                            <strong>Implication:</strong> To scale from 50 to 5,000 kitchens per year, Fieldsman must transform its production system. The goal is to move from fixed manual labor to a scalable hybrid model: outsourced steel (flexibility) and in-house robotic countertop cutting (cost & speed control).
                        </p>
                    </TextBlock>
                </div>
            </PageWrapper >

            {/* PAGE 3: Consolidated Strategic Summary (VRIO, SWOT, Takeaways) */}
            <PageWrapper sectionLabel="SECTION 3: INTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>3.3 Strategic Synthesis: Capabilities & Risks</h2>

                {/* VRIO Table - Compact */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)' }}>VRIO STRATEGIC ASSESSMENT</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px', border: '1px solid #E2E8F0' }}>
                        <thead style={{ background: '#F8FAFC' }}>
                            <tr>
                                <th style={{ textAlign: 'left', padding: '4px 8px', width: '30%', borderBottom: '1px solid #E2E8F0' }}>CAPABILITY / RESOURCE</th>
                                <th style={{ textAlign: 'center', padding: '4px', width: '8%', borderBottom: '1px solid #E2E8F0' }}>V</th>
                                <th style={{ textAlign: 'center', padding: '4px', width: '8%', borderBottom: '1px solid #E2E8F0' }}>R</th>
                                <th style={{ textAlign: 'center', padding: '4px', width: '8%', borderBottom: '1px solid #E2E8F0' }}>I</th>
                                <th style={{ textAlign: 'center', padding: '4px', width: '8%', borderBottom: '1px solid #E2E8F0' }}>O</th>
                                <th style={{ textAlign: 'left', padding: '4px 8px', borderBottom: '1px solid #E2E8F0' }}>COMPETITIVE IMPLICATION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '3px 8px', fontWeight: 600 }}>Modular Product Architecture</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#dc2626', fontWeight: 800 }}>✗</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ padding: '3px 8px' }}><strong>Temporary Advantage:</strong> Replicable by industrial players.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '3px 8px', fontWeight: 600 }}>D2C Model + Configurator</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#dc2626', fontWeight: 800 }}>✗</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ padding: '3px 8px' }}><strong>Temporary Advantage:</strong> Software is a commodity.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '3px 8px', fontWeight: 600 }}>Brand Proposition</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 800 }}>○</td>
                                <td style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 800 }}>○</td>
                                <td style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 800 }}>○</td>
                                <td style={{ padding: '3px 8px' }}><strong>Competitive Parity:</strong> Needs scale to become defensible.</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '3px 8px', fontWeight: 600 }}>Founder Expertise</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#16a34a', fontWeight: 800 }}>✓</td>
                                <td style={{ textAlign: 'center', color: '#dc2626', fontWeight: 800 }}>✗</td>
                                <td style={{ padding: '3px 8px' }}><strong>Unused Advantage:</strong> Bottlenecked by manual capacity.</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>Strategic Implication: The Window of Opportunity</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5', margin: 0 }}>
                            Fieldsman's current advantages in modularity and D2C structure are <strong>temporary</strong>. They are based on smart business logic, not proprietary technology, meaning industrial incumbents can eventually replicate them. This creates a critical "window of opportunity." To convert this temporary head-start into a <strong>sustained competitive advantage</strong>, Fieldsman must aggressively invest in Brand and Marketing to build a "mindshare moat" before copycats scale.
                        </p>
                    </div>
                </div>

                {/* SWOT Grid - Premium Styling */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>SWOT STRATEGIC MATRIX</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                        {/* Strengths */}
                        <div style={{ background: '#F0FDF4', padding: 'var(--space-3)', border: '1px solid #BBF7D0', borderTop: '4px solid #16a34a', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#166534', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: '#16a34a', fontSize: '12px' }}>↑</span> STRENGTHS
                            </h4>
                            <ul style={{ fontSize: '9px', color: '#14532D', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Lean Model:</strong> High D2C margins (~40%) vs industry.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Agility:</strong> Fast iteration cycles.</li>
                                <li><strong>Proprietary Configurator:</strong> High conversion tool.</li>
                            </ul>
                        </div>
                        {/* Weaknesses */}
                        <div style={{ background: '#FEF2F2', padding: 'var(--space-3)', border: '1px solid #FECACA', borderTop: '4px solid #dc2626', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#991B1B', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: '#dc2626', fontSize: '12px' }}>↓</span> WEAKNESSES
                            </h4>
                            <ul style={{ fontSize: '9px', color: '#7F1D1D', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Zero Brand Equity:</strong> Purely paid-traffic dependent.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Fragility:</strong> Founder-dependency & manual process.</li>
                                <li><strong>Capital:</strong> Self-funded limits speed vs VC/Industrial.</li>
                            </ul>
                        </div>
                        {/* Opportunities */}
                        <div style={{ background: '#F0F9FF', padding: 'var(--space-3)', border: '1px solid #BAE6FD', borderTop: '4px solid #2563eb', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#0369A1', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: '#2563eb', fontSize: '12px' }}>⊕</span> OPPORTUNITIES
                            </h4>
                            <ul style={{ fontSize: '9px', color: '#075985', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>"The Missing Middle":</strong> Structural gap in €3-8k segment.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Industrialization:</strong> Robotization to break manual cap.</li>
                                <li><strong>Germany:</strong> 10x market size with high modular fit.</li>
                            </ul>
                        </div>
                        {/* Threats */}
                        <div style={{ background: '#FFFBEB', padding: 'var(--space-3)', border: '1px solid #FDE68A', borderTop: '4px solid #ca8a04', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: '#B45309', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: '#ca8a04', fontSize: '12px' }}>⚠</span> THREATS
                            </h4>
                            <ul style={{ fontSize: '9px', color: '#92400E', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Industrial Copycats:</strong> Low barrier to entry for big players.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Rising CAC:</strong> Dependence on Meta/Google ad costs.</li>
                                <li><strong>Supply Chain:</strong> Steel price volatility & import delays.</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>Strategic Implication: The "Differentiate or Die" Trap</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5', margin: 0 }}>
                            The SWOT analysis reveals a classic "start-up trap": Fieldsman has identified a lucrative market gap ("The Missing Middle") and built a profitable engine to serve it, but lacks the operational muscle to defend it. The risk is not demand, but being squeezed between boutique rivals (better brand) and industrial giants (lower cost). The strategy must pivot from "proving the product" to <strong>"industrializing the machine"</strong> to secure the middle ground before entrants close the window.
                        </p>
                    </div>
                </div>

                {/* Key Takeaways - Premium Styling */}
                <div style={{ borderTop: '2px solid #E2E8F0', paddingTop: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>3.4 KEY INTERNAL TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-x-4) var(--space-y-3)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Proven Fit:</strong> Demand is massive but constrained by internal throughput, not market interest.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>The Moat:</strong> Modular architecture decouples customization from complexity—key for scaling.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Shift Required:</strong> Moving from founder-manual logic to system-logic is the only way to scale.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Protect Margins:</strong> The ~40% D2C margin is the financial engine and must be defended.
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
