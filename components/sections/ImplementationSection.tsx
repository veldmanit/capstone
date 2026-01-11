'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import BottleneckVisual from '@/components/charts/BottleneckVisual';
import CustomerJourney from '@/components/charts/CustomerJourney';
import CommercialArchitecture from '@/components/charts/CommercialArchitecture';
import ProductionSolution from '@/components/charts/ProductionSolution';

import OrganizationalStructureFuture from '@/components/charts/OrganizationalStructureFuture';

export default function ImplementationSection() {
    return (
        <>
            {/* 
        PAGE 1: Intro, 5.1 Value Prop, 5.2 GTM (Layer 1)
      */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p>This chapter defines the strategic transformations required to scale Fieldsman from <strong>50 to 2,000+ kitchens per year</strong>. The implementation starts with the defining value proposition and brand positioning, flows into the commercial growth engine, and concludes with the operational transformation and expansion roadmap.</p>
                </TextBlock>

                {/* 5.1 Value Proposition, Offering & Brand */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.1 Value Proposition, Offering & Branding</h2>

                    {/* 5.1.1 The Value Proposition (Trade-offs) */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.1 The Value Proposition: Accessible Luxury</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-6)' }}>
                            <TextBlock>
                                <p style={{ fontSize: '9.5px', marginBottom: '8px', lineHeight: '1.5' }}>
                                    Fieldsman disrupts the market by decoupling "premium" from "expensive." Traditional buying journeys force a binary choice: <strong>expensive custom masonry (€15k–30k)</strong> with long lead times, or <strong>flimsy DIY kits (€1k–2k)</strong> that degrade quickly. There is almost no middle ground for the design-conscious homeowner.
                                </p>
                                <p style={{ fontSize: '9.5px', margin: 0, lineHeight: '1.5' }}>
                                    Fieldsman occupies this "Blue Ocean" by delivering <strong>€15,000 perceived value at a €3,500–8,000 price point</strong>. This is not a discount strategy; it is a structural cost advantage achieved through <strong>standardized customization</strong>. By operating at **industrial scale**, Fieldsman outcompetes local bespoke players on price while offering superior durability and design precision.
                                </p>
                            </TextBlock>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-secondary)', padding: '12px', borderRadius: '4px' }}>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>Explicit Trade-Offs</h4>
                                <ul style={{ margin: 0, paddingLeft: '12px', fontSize: '9px', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '4px' }}>Mass-customization <strong>over</strong> Bespoke</li>
                                    <li style={{ marginBottom: '4px' }}>Self-installation <strong>over</strong> White-glove (at entry)</li>
                                    <li style={{ marginBottom: '4px' }}>Showroom-light <strong>over</strong> Dense retail</li>
                                    <li style={{ marginBottom: '4px' }}>Curated efficiency <strong>over</strong> Infinite choice</li>
                                    <li>Stock-Driven Speed <strong>over</strong> Made-to-Order</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5.1.2 The Offering (Pyramid) */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.2 The Offering: One Base, Three Tiers</h3>
                        <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>
                            One modular system serves three distinct segments. Customers move up the value pyramid by adding options, not by changing the core product structure. <span style={{ fontStyle: 'italic' }}>(See Appendix F for Modular Architecture)</span>
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {/* Top Tier */}
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-neutral-700)' }}>TOP – LUXURY EXPRESSION</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontStyle: 'italic' }}>8+ Modules • Fully equipped & curated</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-neutral-800)' }}>€6k - 10k</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-900)', fontWeight: 700 }}>Accessible luxury, perfected.</div>
                                </div>
                            </div>

                            {/* Middle Tier */}
                            <div style={{ background: 'white', border: '1px solid var(--color-primary)', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 'var(--box-shadow-sm)', position: 'relative', zIndex: 10 }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-primary)' }}>MIDDLE – ASPIRATIONAL TIER</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-primary)', fontStyle: 'italic' }}>4-6 Modules • Enhanced comfort & design</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-primary)' }}>€3.5k - 5.5k</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-primary)', fontWeight: 700 }}>Personalized outdoor living.</div>
                                </div>
                            </div>

                            {/* Base Tier */}
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-secondary)' }}>BASE – ACCESSIBLE ENTRY POINT</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontStyle: 'italic' }}>2 Modules • DIY and affordable quality</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-secondary)' }}>€2k - 2.5k</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontWeight: 700 }}>Luxury starts here.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5.1.3 Branding (Proud Host) */}
                    {/* 5.1.3 Branding (Hybrid: Job to be Done + Core Identity) */}
                    <div>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.3 Brand Positioning: Core Identity & The "Job to be Done"</h3>

                        {/* Strategic Rationale for Branding (Compact) */}
                        <div style={{ marginBottom: 'var(--space-3)' }}>
                            <p style={{ fontSize: '9px', lineHeight: '1.5', color: 'var(--color-neutral-700)', margin: 0 }}>
                                Branding is essential to transform Fieldsman into a <strong>professional premium brand</strong>. By establishing <strong>brand legitimacy</strong>, Fieldsman secures a <strong>sustainable competitive advantage</strong> in a market where trust and aesthetics drive high-involvement purchase decisions. Strong branding allows Fieldsman to <strong>escape pure price competition</strong> and justify healthier margins. By turning the modular system into a <strong>desirable lifestyle investment</strong> with a recognizable <strong>“Fieldsman Look,”</strong> Fieldsman enables rapid, profitable scale.
                            </p>
                        </div>

                        {/* Brand Essence & Brothers Narrative */}
                        <div style={{ background: 'var(--color-primary-dark)', padding: '12px', borderRadius: '4px', marginBottom: 'var(--space-3)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>Brand Essence: "Authentic Craftmanship. Built for Bringing People Together."</div>
                            </div>
                            <p style={{ fontSize: '9px', lineHeight: '1.4', color: 'var(--color-neutral-200)', margin: 0 }}>
                                The brand bridges two worlds: The <strong>Three Brothers</strong> (Grounded, Honest, Makers) and the <strong>Design-Conscious Host</strong> (Social, Aspirational, Connector). Fieldsman uses authentic Dutch craftmanship to build the perfect stage for the client's sense of belonging.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 'var(--space-4)', rowGap: '4px', alignItems: 'stretch' }}>
                            {/* Headers Row */}
                            <div>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: '4px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: '2px' }}>The Client's "Job to be Done"</h4>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: '4px', textTransform: 'uppercase', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: '2px' }}>The Brand Identity System</h4>
                            </div>

                            {/* Row 1: Functional vs Organization */}
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '2px' }}>Functional: "Reliable & Easy"</div>
                                <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', lineHeight: '1.3' }}>Needs to last (Steel/Ceramic). Needs to adapt. Affordable.</div>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-neutral-900)' }}>Organization: The Staphorst Roots</div>
                                <p style={{ fontSize: '8px', color: 'var(--color-neutral-600)', margin: '2px 0 0', lineHeight: '1.3' }}>Heritage of integrity. "We don't over-promise, we build." Legitimacy through action.</p>
                            </div>

                            {/* Row 2: Emotional vs Symbol */}
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '2px' }}>Emotional: "Pride & Reward"</div>
                                <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', lineHeight: '1.3' }}>"I designed this." "We deserve this milestone."</div>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-neutral-900)' }}>Symbol: The Fieldsman Seal</div>
                                <p style={{ fontSize: '8px', color: 'var(--color-neutral-600)', margin: '2px 0 0', lineHeight: '1.3' }}>The "Maker's Mark". Stamped on every frame. A personal guarantee of integrity from the brothers.</p>
                            </div>

                            {/* Row 3: Social vs Personality */}
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '2px' }}>Social: "Recognition without Ego"</div>
                                <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', lineHeight: '1.3' }}>“We love having people over.” “This fits who we are.”</div>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-neutral-900)' }}>Personality: The Capable Connector</div>
                                <p style={{ fontSize: '8px', color: 'var(--color-neutral-600)', margin: '2px 0 0', lineHeight: '1.3' }}>Grounded. Competent. "The friend who knows how to fix it."</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-neutral-600)', textAlign: 'center', marginTop: 'var(--space-4)' }}>Proudly Simple. Built for Life.</p>
                    </div>
                </div>
            </PageWrapper >

            {/* 5.2 GTM Intro + Layer 1 */}
            < PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION" >
                <div>
                    <h2 style={{ marginBottom: 'var(--space-2)' }}>5.2 Go-to-Market: Building a Scalable Commercial Engine</h2>
                    <TextBlock style={{ marginBottom: 'var(--space-2)' }}>
                        <p style={{ lineHeight: '1.3' }}>Scaling from €170K to €10.6M requires a fundamental transformation of how Fieldsman generates demand. The current founder-driven sales model cannot scale. The new commercial engine is built on a unified strategic framework, beginning with a deep understanding of the customer's path to purchase.</p>
                    </TextBlock>


                    {/* Customer Journey Visual */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                            <p style={{ fontSize: '9px', lineHeight: '1.3' }}>To move beyond founder-led sales, Fieldsman must stop treating sales as a series of ad-hoc conversations and start managing them as a designed product. This defined Customer Journey serves as the backbone of the new commercial engine, orchestrating every digital and physical touchpoint into a seamless, reproducible experience.</p>
                        </TextBlock>
                        <h4 style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', textAlign: 'center' }}>The Multi-Channel Customer Journey</h4>
                        <CustomerJourney />
                    </div>

                    {/* Integrated Commercial Engine Visual */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                            <p style={{ fontSize: '9px', color: 'var(--color-neutral-600)' }}>The operationalization of this journey is architected into three integrated layers: Marketing (Inflow), AI Operations (Throughput), and Phygital Service (Trust). This unified commercial engine ensures efficiency does not come at the cost of the "Proud Host" experience.</p>
                        </TextBlock>
                        <CommercialArchitecture />
                    </div>
                </div>
            </PageWrapper >

            {/* 5.3 Production Transformation (Was 5.1) */}
            < PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION" >
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.3 Production Transformation: Controlling the Bottleneck</h2>

                    {/* Strategic Logic Text (Full Width) */}
                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        {/* Part 1: Problem */}
                        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px dashed var(--color-neutral-300)' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-700)', marginBottom: '6px', textTransform: 'uppercase' }}>The Challenge: The Seasonal Capacity Trap</h4>
                            <p style={{ fontSize: '10px', color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>
                                The fundamental challenge of the outdoor living market is extreme seasonality: <strong>80% of consumer demand occurs between March and July.</strong> Under the current model, scaling production requires hiring permanent skilled craftsmen. This creates a "Capacity Trap": you either under-produce during the summer peak (losing revenue) or carry massive overhead during the winter trough (destroying margin).
                            </p>
                        </div>

                        {/* Part 2: Solution */}
                        <div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>The Solution: The Integrated Hub Strategy</h4>
                            <p style={{ fontSize: '10px', color: 'var(--color-neutral-600)', lineHeight: '1.5', marginBottom: '16px' }}>
                                The Transformation solves this by decoupling component stability from assembly flexibility. By moving to an <strong>Integrated Hub Model</strong>, Fieldsman can flatten the production curve:
                            </p>
                            <ul style={{ fontSize: '10px', color: 'var(--color-neutral-600)', lineHeight: '1.5', margin: '0 0 16px 12px', paddingLeft: '12px' }}>
                                <li style={{ marginBottom: '4px' }}><strong>Winter (Stockpile):</strong> Steady production of standardized modules from global partners fills the buffer.</li>
                                <li><strong>Summer (Assemble):</strong> The NL Hub scales final assembly using flexible labor to meet the 5x demand spike, drawing from the buffer.</li>
                            </ul>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                                <div>
                                    <strong>Steel Modules (Dual Sourcing):</strong> Standardized frames are sourced via a **Dual Vendor Strategy (China & East Europe)**. This balances cost efficiency with supply chain resilience, converting fixed labor into variable unit costs.
                                </div>
                                <div>
                                    <strong>Ceramics & Cutting (Value Add):</strong> Slabs are sourced globally (**China & Spain**), but cutting is vertically integrated in the NL Hub. This reduces unit costs from <strong>€900 to €100</strong> and lead times from <strong>8 weeks to 2 weeks</strong>.
                                </div>
                                <div>
                                    <strong>Flex Assembly Hub (Quality):</strong> The NL Hub acts as a critical **seasonal buffer** and quality gate. Centralized final assembly ensures <strong>100% quality control</strong> before dispatch, scaling with temporary labor during peak demand.
                                </div>
                            </div>
                        </div>
                    </TextBlock>

                    {/* New Full-Width Solution Visual */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <ProductionSolution />
                    </div>
                </div>
            </PageWrapper >

            {/* 
        PAGE 3: 5.4 Expansion
      */}
            < PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION" >

                {/* 5.4 Organization Plan */}
                < div style={{ marginBottom: 'var(--space-8)' }
                }>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.4 Organization Plan: Leading the Scale-Up</h2>

                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <p style={{ lineHeight: '1.5', fontSize: '10px', color: 'var(--color-neutral-700)' }}>
                            To successfully execute the 2026–2027 growth strategy, Fieldsman must transition from a flexible startup to a disciplined scale-up organization. This requires a fundamental shift in the founders' commitment: <strong>realizing this growth potential demands fully invested, full-time leadership.</strong> The founders must step out of daily execution to own strategic pillars, supported by a specialized team structure that replaces generalist roles with dedicated functional experts. The chart below outlines the target structure required to support the new Integrated Hub model.
                        </p>
                    </TextBlock>

                    {/* Organization Chart - Future */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <OrganizationalStructureFuture />
                    </div>


                </div >

                {/* 5.5 Geographic Expansion (Was 5.4) */}
                < div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.5 Geographic Expansion: Capability-Gated Sequencing</h2>
                    <p style={{ fontSize: '10px', color: '#64748b', marginBottom: 'var(--space-4)' }}>Expansion follows operational readiness, not calendar ambition. Each market entry is gated by demonstrated capability in the current footprint.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                        {/* Phase 1: NL */}
                        <div style={{ background: 'var(--color-neutral-50)', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--color-neutral-800)', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 1: 2026</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: 'var(--color-neutral-900)' }}>Netherlands</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '8px' }}>PROVE THE MODEL</div>
                            <p style={{ fontSize: '9px', color: 'var(--color-neutral-600)', lineHeight: '1.4', marginBottom: '8px' }}>
                                The foundation market. Must demonstrate that production can scale reliably, marketing converts efficiently, and quality maintains high NPS at volume.
                            </p>
                            <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: '6px', fontSize: '8.5px' }}>
                                <strong>Entry Gate:</strong> Production transformation complete, Lead times stable (2 wks).<br />
                                <span style={{ color: 'var(--color-neutral-900)', fontWeight: 700 }}>Target: 250–400 units</span>
                            </div>
                        </div>

                        {/* Phase 2: BE */}
                        <div style={{ background: 'var(--color-neutral-50)', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--color-neutral-600)', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 2: 2027</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: 'var(--color-neutral-900)' }}>Belgium</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '8px' }}>TEST INTERNATIONAL OPS</div>
                            <p style={{ fontSize: '9px', color: 'var(--color-neutral-600)', lineHeight: '1.4', marginBottom: '8px' }}>
                                Logical first step due to proximity and language. Tests cross-border delivery, service, and partner management.
                            </p>
                            <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: '6px', fontSize: '8.5px' }}>
                                <strong>Entry Gate:</strong> NL operating at 400+ units, Configurator localized.<br />
                                <span style={{ color: 'var(--color-neutral-900)', fontWeight: 700 }}>Target: 100–200 units</span>
                            </div>
                        </div>

                        {/* Phase 3: DE */}
                        <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-primary)', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: 'var(--color-primary)', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 3: 2027–30</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: 'var(--color-primary)' }}>Germany</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-secondary)', marginBottom: '8px' }}>ANCHOR MARKET FOR SCALE</div>
                            <p style={{ fontSize: '9px', color: 'var(--color-neutral-800)', lineHeight: '1.4', marginBottom: '8px' }}>
                                The strategic prize (€189M SAM, 63% of opportunity). Requires full localization (language, preferences) and serves as the volume engine.
                            </p>
                            <div style={{ borderTop: '1px solid var(--color-primary-light, #C0B283)', paddingTop: '6px', fontSize: '8.5px', color: 'var(--color-neutral-800)' }}>
                                <strong>Entry Gate:</strong> BE profitable, Production capacity 600+.<br />
                                <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Target: 40–50% of total vol</span>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Key Takeaways */}
                < div style={{ borderTop: '2px solid var(--color-neutral-200)', paddingTop: 'var(--space-3)', marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>5.6 KEY IMPLEMENTATION TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-x-4) var(--space-y-3)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Accessible Luxury:</strong> Value proposition is defined by clear trade-offs that enable premium design at mass-market prices.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>AI Scalability:</strong> Commercial engine uses AI for configuration, lead qual, and service to decouple revenue growth from headcount.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Reverse Logic:</strong> Transformation implies outsourcing standardized modules (**Global Dual-Sourcing**) while vertically integrating custom countertops (**NL Hub**).
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Gated Expansion:</strong> International growth is capability-gated, ensuring the core NL model is proven before scale-up in Germany.
                            </p>
                        </div>
                    </div>
                </div >
            </PageWrapper >
        </>
    );
}
