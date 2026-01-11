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

                <div style={{ borderTop: '1px solid var(--color-neutral-300)', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>3.1 Internal Capabilities: A Strong Core with Clear Bottlenecks</h2>
                    <TextBlock>
                        <p>
                            To understand Fieldsman's potential for scale, we conducted a resource-based view analysis of its current internal capabilities. This assessment identifies the proprietary assets that can be leveraged for growth and the critical operational constraints that must be resolved.
                        </p>
                    </TextBlock>
                </div>      {/* NEW VALUE CHAIN VISUAL */}
                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>Current Business Model and Value Chain</h3>
                        <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Understanding where Fieldsman creates and captures value is essential for identifying both strengths to leverage and constraints to address.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Fieldsman operates a direct-to-consumer model that bypasses traditional retail channels entirely. This structural choice is not merely about cost efficiency but about market viability. The target customer's willingness to pay for modular outdoor kitchens sits between €3,000 and €8,000. A traditional retail model, which typically demands a 40% margin for distributors and retailers, would push the end price above €8,500, pricing Fieldsman out of its target segment entirely.
                            </p>
                            <p>
                                By trading off the retail margin, Fieldsman accepts a lower per-unit potential but unlocks significantly higher volume by fitting precisely within the mid-premium adoption sweet spot. This volume strategy maximizes total profit pool rather than unit margin percentage.
                            </p>
                        </TextBlock>      {/* CHART CONTAINER */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-7)' }}>

                            {/* Traditional Retail Bar */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', fontWeight: 600, color: 'var(--color-neutral-600)' }}>
                                    <span>Traditional Retail Model</span>
                                    <span>Typical Retail Price: €8,500</span>
                                </div>
                                <div style={{ height: '36px', display: 'flex', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
                                    <div style={{ width: '21%', background: 'var(--color-neutral-800)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 700 }}>COGS</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€1.8k</div>
                                    </div>
                                    <div style={{ width: '7%', background: 'var(--color-neutral-500)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1:px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '8px', fontWeight: 700 }}>OPS</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€0.6k</div>
                                    </div>
                                    <div style={{ width: '9%', background: 'var(--color-neutral-600)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ fontSize: '8px', fontWeight: 700 }}>MKTG</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€0.8k</div>
                                    </div>
                                    <div style={{ width: '22%', background: 'var(--color-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.2)' }}>
                                        <div style={{ fontSize: '9px', fontWeight: 700 }}>PROFIT</div>
                                        <div style={{ fontSize: '7px', opacity: 0.8 }}>€1.9k</div>
                                    </div>
                                    <div style={{ width: '41%', background: 'var(--color-neutral-200)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-neutral-600)', borderLeft: '1px solid white' }}>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '11px', fontWeight: 600, color: 'var(--color-primary)' }}>
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
                                        <div style={{ width: '36%', background: 'var(--color-neutral-800)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>COGS</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€1.8k</div>
                                        </div>
                                        {/* OPS €0.6k / €5k = 12% */}
                                        <div style={{ width: '12%', background: 'var(--color-neutral-500)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>OPS</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€0.6k</div>
                                        </div>
                                        {/* MKTG €0.7k / €5k = 14% */}
                                        <div style={{ width: '20%', background: 'var(--color-neutral-600)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                                            <div style={{ fontSize: '9px', fontWeight: 700 }}>MKTG</div>
                                            <div style={{ fontSize: '8px', opacity: 0.8 }}>€1.0k</div>
                                        </div>
                                        {/* PROFIT €1.9k / €5k = 38% */}
                                        <div style={{ width: '32%', background: 'var(--color-primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
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
                                        border: '1px dashed var(--color-primary)',
                                        background: 'repeating-linear-gradient(-45deg, rgba(74, 93, 35, 0.08), rgba(74, 93, 35, 0.08) 4px, white 4px, white 8px)',
                                        color: 'var(--color-primary)',
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


                    {/* ORGANOGRAM */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>Organizational Structure</h3>
                        <TextBlock>
                            <p style={{ marginBottom: 'var(--space-4)' }}>
                                Fieldsman VOF is owned equally by three brothers, each holding a one-third stake and fulfilling a distinct leadership role. The operational team consists of approximately five part-time employees across sales, production, and assembly. This lean structure keeps fixed costs low but creates capacity constraints that limit growth.
                            </p>
                        </TextBlock>
                    </div>
                    <OrganizationalStructure />

                    <h3 style={{ fontSize: '13px', marginTop: 'var(--space-8)', marginBottom: 'var(--space-6)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Performance Snapshot</h3>
                    <div className="grid-container" style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                        <div className="col-4">
                            <KPIBlock
                                value="48%"
                                label="EBITDA Margin"
                                context="~€83K EBITDA on €170K Rev"
                                accentColor="var(--color-primary)"
                            />
                        </div>
                        <div className="col-4">
                            <KPIBlock
                                value="€244"
                                label="CAC"
                                context="Customer Acquisition Cost"
                                accentColor="var(--color-secondary)"
                            />
                        </div>
                        <div className="col-4">
                            <KPIBlock
                                value="25.2x"
                                label="ROAS"
                                context="Return on Ad Spend"
                                accentColor="var(--color-primary)"
                            />
                        </div>
                    </div>

                    <TextBlock style={{ marginTop: 'var(--space-8)' }}>
                        <p style={{ marginBottom: 'var(--space-4)', fontWeight: 600, color: 'var(--color-neutral-900)' }}>
                            Two characteristics of the current model provide strategic advantages that must be preserved as the company scales.
                        </p>
                        <p style={{ marginBottom: 'var(--space-4)' }}>
                            The direct customer relationship creates a continuous feedback loop. Unlike competitors who rely on dealer reports, Fieldsman owns every customer conversation. This direct access enables rapid iteration of the 3D configurator and product features based on real-time feedback.
                        </p>
                        <p>
                            The D2C model also generates favorable working capital dynamics. The showroom-less model eliminates high fixed rental costs. Customers pay deposits upfront, funding production before costs are incurred. This negative working capital cycle is a crucial engine for self-funded growth.
                        </p>
                    </TextBlock>


                </div>
            </PageWrapper >

            {/* PAGE 2: 3.2 The Bottleneck: Capacity Over Commercials */}
            <PageWrapper sectionLabel="SECTION 3: INTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>3.2 The Bottleneck: Why Growth Stops in May</h2>
                <TextBlock style={{ marginBottom: 'var(--space-8)' }}>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        Fieldsman's production constraint is not the product itself but how the organization is structured. As the visual illustrates, potential demand peaks sharply from March through July while maximum capacity remains flat. This creates a growth gap where demand goes unfulfilled and marketing must be halted to protect lead times and quality.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)', fontWeight: 600, color: 'var(--color-neutral-900)' }}>
                        Three interconnected factors create this capacity trap.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong style={{ color: 'var(--color-neutral-900)' }}>Internally,</strong> the business depends on part-time skilled workers carrying multiple roles. Output is highly dependent on a few individuals, making it impossible to scale rapidly when seasonal demand peaks. The team simply lacks the dedicated workforce and operating rhythm to increase throughput materially.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong style={{ color: 'var(--color-neutral-900)' }}>Seasonally,</strong> scaling in-house production is structurally inefficient. Investing in a larger permanent team and equipment would create overcapacity and idle labor during winter when demand drops. The modular architecture (see <strong>Appendix F</strong>) theoretically allows for pre-season stock building to smooth this curve, but the working capital requirements are prohibitive for a bootstrapped company. Temporary labor is not practical because the work requires craftsmanship and product knowledge that cannot be learned quickly.
                    </p>
                    <p style={{ marginBottom: 'var(--space-4)' }}>
                        <strong style={{ color: 'var(--color-neutral-900)' }}>From a supply chain perspective,</strong> ceramic countertops create an external ceiling. Currently outsourced to local suppliers, this component introduces severe unpredictability with lead times frequently exceeding 8 weeks during peak season. Finished frames cannot ship without their tops, meaning supplier delays directly halt customer deliveries regardless of internal improvements.
                    </p>
                    <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                        To scale from 50 to 2,000+ kitchens per year, Fieldsman must transform its production system from fixed manual labor to a scalable hybrid model.
                    </p>
                </TextBlock>

                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                    <BottleneckVisual />
                </div>
            </PageWrapper >

            {/* PAGE 3: Consolidated Strategic Summary (VRIO, SWOT, Takeaways) */}
            <PageWrapper sectionLabel="SECTION 3: INTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>3.3 Strategic Synthesis: Capabilities & Risks</h2>

                {/* VRIO Table - Compact */}
                <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)', fontWeight: 700 }}>VRIO Analysis: Defensibility of Core Capabilities</h3>
                    <TextBlock>
                        <p>
                            This assessment evaluates whether Fieldsman's key resources provide a sustainable competitive advantage or are vulnerable to imitation by larger industrial players.
                        </p>
                    </TextBlock>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-small)', border: '1px solid var(--color-neutral-200)' }}>
                    <thead style={{ background: 'var(--color-neutral-100)' }}>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '6px 8px', width: '30%', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>CAPABILITY / RESOURCE</th>
                            <th style={{ textAlign: 'center', padding: '6px', width: '8%', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>V</th>
                            <th style={{ textAlign: 'center', padding: '6px', width: '8%', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>R</th>
                            <th style={{ textAlign: 'center', padding: '6px', width: '8%', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>I</th>
                            <th style={{ textAlign: 'center', padding: '6px', width: '8%', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>O</th>
                            <th style={{ textAlign: 'left', padding: '6px 8px', borderBottom: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-800)', fontWeight: 700 }}>COMPETITIVE IMPLICATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '4px 8px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Modular Product Architecture</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>✗</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ padding: '4px 8px', color: 'var(--color-neutral-700)' }}><strong>Temporary Advantage:</strong> Replicable by industrial players.</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '4px 8px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>D2C Model + Configurator</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>✗</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ padding: '4px 8px', color: 'var(--color-neutral-700)' }}><strong>Temporary Advantage:</strong> Software is a commodity.</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '4px 8px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Brand Proposition</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>○</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>○</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>○</td>
                            <td style={{ padding: '4px 8px', color: 'var(--color-neutral-700)' }}><strong>Competitive Parity:</strong> Needs scale to become defensible.</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '4px 8px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Founder Expertise</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-primary)', fontWeight: 800 }}>✓</td>
                            <td style={{ textAlign: 'center', color: 'var(--color-neutral-400)', fontWeight: 800 }}>✗</td>
                            <td style={{ padding: '4px 8px', color: 'var(--color-neutral-700)' }}><strong>Unused Advantage:</strong> Bottlenecked by manual capacity.</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginTop: 'var(--space-5)' }}>
                    <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>Strategic Implication: The Window of Opportunity</h4>
                    <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5', margin: 0 }}>
                        Fieldsman's current advantages in modularity and D2C structure are temporary. They are based on smart business logic, not proprietary technology, meaning industrial incumbents can eventually replicate them. This creates a critical "window of opportunity." To convert this temporary head-start into a sustained competitive advantage, Fieldsman must aggressively invest in Brand and Marketing to build a "mindshare moat" before copycats scale.
                    </p>
                </div>

                {/* SWOT Grid - Premium Styling */}
                <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-6)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-2)', fontWeight: 700 }}>SWOT Analysis: Strategic Position</h3>
                    <TextBlock>
                        <p style={{ marginBottom: 'var(--space-4)' }}>
                            The breakdown of Strengths, Weaknesses, Opportunities, and Threats highlights that Fieldsman's primary constraints are internal (operational), while the external environment remains highly favorable for a modular challenger.
                        </p>
                    </TextBlock>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Strategic Matrix</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                        {/* Strengths */}
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-primary)', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '12px' }}>↑</span> STRENGTHS
                            </h4>
                            <ul style={{ fontSize: '9px', color: 'var(--color-neutral-700)', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Lean Model:</strong> High D2C margins (~40%) vs industry.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Agility:</strong> Fast iteration cycles.</li>
                                <li><strong>Proprietary Configurator:</strong> High conversion tool.</li>
                            </ul>
                        </div>
                        {/* Weaknesses */}
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-neutral-600)', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--color-neutral-600)', fontSize: '12px' }}>↓</span> WEAKNESSES
                            </h4>
                            <ul style={{ fontSize: '9px', color: 'var(--color-neutral-700)', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Zero Brand Equity:</strong> Purely paid-traffic dependent.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Fragility:</strong> Founder-dependency & manual process.</li>
                                <li><strong>Capital:</strong> Self-funded limits speed vs VC/Industrial.</li>
                            </ul>
                        </div>
                        {/* Opportunities */}
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-secondary)', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--color-secondary)', fontSize: '12px' }}>⊕</span> OPPORTUNITIES
                            </h4>
                            <ul style={{ fontSize: '9px', color: 'var(--color-neutral-700)', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>"The Missing Middle":</strong> Structural gap in €3-8k segment.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Industrialization:</strong> Robotization to break manual cap.</li>
                                <li><strong>Germany:</strong> 10x market size with high modular fit.</li>
                            </ul>
                        </div>
                        {/* Threats */}
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderTop: '4px solid var(--color-neutral-400)', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                            <h4 style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ color: 'var(--color-neutral-600)', fontSize: '12px' }}>⚠</span> THREATS
                            </h4>
                            <ul style={{ fontSize: '9px', color: 'var(--color-neutral-700)', paddingLeft: '12px', margin: 0, lineHeight: '1.4' }}>
                                <li style={{ marginBottom: '2px' }}><strong>Industrial Copycats:</strong> Low barrier to entry for big players.</li>
                                <li style={{ marginBottom: '2px' }}><strong>Rising CAC:</strong> Dependence on Meta/Google ad costs.</li>
                                <li><strong>Supply Chain:</strong> Steel price volatility & import delays.</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ marginTop: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>Strategic Implication: The "Differentiate or Die" Trap</h4>
                        <p style={{ fontSize: '10.5px', color: 'var(--color-neutral-600)', lineHeight: '1.5', margin: 0 }}>
                            The SWOT analysis reveals a classic "start-up trap": Fieldsman has identified a lucrative market gap ("The Missing Middle") and built a profitable engine to serve it, but lacks the operational muscle to defend it. The risk is not demand, but being squeezed between boutique rivals (better brand) and industrial giants (lower cost). The strategy must pivot from "proving the product" to "industrializing the machine" to secure the middle ground before entrants close the window.
                        </p>
                    </div>
                </div>

                {/* Key Takeaways - Premium Styling */}
                <div style={{ borderTop: '2px solid #E2E8F0', paddingTop: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>3.4 KEY INTERNAL TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-x-4) var(--space-y-3)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>High-Performance Unit Economics:</strong> The 48% EBITDA margin and negative working capital cycle provide a powerful self-funding engine, but the model is currently trapped in a manual, small-scale cycle.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>The Seasonal "Capacity Trap":</strong> Output is capped by a flat capacity curve facing sharp seasonal peaks. Scaling to 2,000+ units requires breaking the dependency on founder-led manual craftsmanship.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>External Supply Chain Ceiling:</strong> Reliance on local ceramic suppliers creates a hard bottleneck (8-week lead times) that caps total output regardless of internal operational improvements.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>A Narrow Strategic Window:</strong> Modular and D2C advantages are logical, not technological. Fieldsman must industrialize its "machine" and build brand equity before industrial incumbents replicate the model.
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
