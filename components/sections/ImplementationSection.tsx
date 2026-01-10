'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import BottleneckVisual from '@/components/charts/BottleneckVisual';
import CustomerJourney from '@/components/charts/CustomerJourney';
import CommercialArchitecture from '@/components/charts/CommercialArchitecture';
import ProductionSolution from '@/components/charts/ProductionSolution'; // Added this import

export default function ImplementationSection() {
    return (
        <>
            {/* 
        PAGE 1: Intro, 5.1 Value Prop, 5.2 GTM (Layer 1)
      */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p>This chapter defines the strategic transformations required to scale Fieldsman from <strong>50 to 3,000 kitchens per year</strong>. The implementation starts with the defining value proposition and brand positioning, flows into the commercial growth engine, and concludes with the operational transformation and expansion roadmap.</p>
                </TextBlock>

                {/* 5.1 Value Proposition, Offering & Brand */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.1 Value Proposition, Offering & Branding</h2>

                    {/* 5.1.1 The Value Proposition (Trade-offs) */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary-main)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.1 The Value Proposition: Accessible Luxury</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-6)' }}>
                            <TextBlock>
                                <p style={{ fontSize: '9.5px', marginBottom: '8px', lineHeight: '1.5' }}>
                                    Fieldsman disrupts the market by decoupling "premium" from "expensive." Traditional buying journeys force a binary choice: <strong>expensive custom masonry (€15k–30k)</strong> with long lead times, or <strong>flimsy DIY kits (€1k–2k)</strong> that degrade quickly. There is almost no middle ground for the design-conscious homeowner.
                                </p>
                                <p style={{ fontSize: '9.5px', margin: 0, lineHeight: '1.5' }}>
                                    Fieldsman occupies this "Blue Ocean" by delivering <strong>€15,000 perceived value at a €3,500–8,000 price point</strong>. This is not a discount strategy; it is a structural cost advantage achieved through <strong>standardized customization</strong>. By operating at **industrial scale**, Fieldsman outcompetes local bespoke players on price while offering superior durability and design precision.
                                </p>
                            </TextBlock>
                            <div style={{ background: '#FFF7ED', border: '1px solid #FFEDD5', padding: '12px', borderRadius: '4px' }}>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: '#9a3412', marginBottom: '8px', textTransform: 'uppercase' }}>Explicit Trade-Offs</h4>
                                <ul style={{ margin: 0, paddingLeft: '12px', fontSize: '9px', color: '#c2410c', lineHeight: '1.6' }}>
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
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary-main)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.2 The Offering: One Base, Three Tiers</h3>
                        <p style={{ fontSize: '9.5px', color: '#475569', marginBottom: 'var(--space-4)' }}>
                            One modular system serves three distinct segments. Customers move up the value pyramid by adding options, not by changing the core product structure. <span style={{ fontStyle: 'italic' }}>(See Appendix A for Modular Architecture)</span>
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {/* Top Tier */}
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#334155' }}>TOP – LUXURY EXPRESSION</div>
                                    <div style={{ fontSize: '8px', color: '#475569', fontStyle: 'italic' }}>8+ Modules • Fully equipped & curated</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b' }}>€6k - 10k</div>
                                    <div style={{ fontSize: '8px', color: '#0F172A', fontWeight: 700 }}>Accessible luxury, perfected.</div>
                                </div>
                            </div>

                            {/* Middle Tier */}
                            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'relative', zIndex: 10 }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#15803d' }}>MIDDLE – ASPIRATIONAL TIER</div>
                                    <div style={{ fontSize: '8px', color: '#14532d', fontStyle: 'italic' }}>4-6 Modules • Enhanced comfort & design</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#16a34a' }}>€3.5k - 5.5k</div>
                                    <div style={{ fontSize: '8px', color: '#14532d', fontWeight: 700 }}>Personalized outdoor living.</div>
                                </div>
                            </div>

                            {/* Base Tier */}
                            <div style={{ background: '#F0F9FF', border: '1px solid #BAE6FD', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#0369a1' }}>BASE – ACCESSIBLE ENTRY POINT</div>
                                    <div style={{ fontSize: '8px', color: '#0c4a6e', fontStyle: 'italic' }}>2 Modules • DIY and affordable quality</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#0284c7' }}>€2k - 2.5k</div>
                                    <div style={{ fontSize: '8px', color: '#075985', fontWeight: 700 }}>Luxury starts here.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5.1.3 Branding (Proud Host) */}
                    {/* 5.1.3 Branding (Hybrid: Job to be Done + Core Identity) */}
                    <div>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary-main)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>5.1.3 Brand Positioning: Core Identity & The "Job to be Done"</h3>

                        {/* Strategic Rationale for Branding (Compact) */}
                        <div style={{ marginBottom: 'var(--space-3)' }}>
                            <p style={{ fontSize: '9px', lineHeight: '1.5', color: '#475569', margin: 0 }}>
                                Branding is essential to transform Fieldsman into a <strong>professional premium brand</strong>. By establishing <strong>brand legitimacy</strong>, Fieldsman secures a <strong>sustainable competitive advantage</strong> in a market where trust and aesthetics drive high-involvement purchase decisions. Strong branding allows Fieldsman to <strong>escape pure price competition</strong> and justify healthier margins. By turning the modular system into a <strong>desirable lifestyle investment</strong> with a recognizable <strong>“Fieldsman Look,”</strong> Fieldsman enables rapid, profitable scale.
                            </p>
                        </div>

                        {/* Brand Essence & Brothers Narrative */}
                        <div style={{ background: '#0F172A', padding: '12px', borderRadius: '4px', marginBottom: 'var(--space-3)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>Brand Essence: "Authentic Craftmanship. Built for Bringing People Together."</div>
                            </div>
                            <p style={{ fontSize: '9px', lineHeight: '1.4', color: '#cbd5e1', margin: 0 }}>
                                The brand bridges two worlds: The <strong>Three Brothers</strong> (Grounded, Honest, Makers) and the <strong>Design-Conscious Host</strong> (Social, Aspirational, Connector). Fieldsman uses authentic Dutch craftmanship to build the perfect stage for the client's sense of belonging.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 'var(--space-4)', rowGap: '4px', alignItems: 'stretch' }}>
                            {/* Headers Row */}
                            <div>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: '#475569', marginBottom: '4px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px' }}>The Client's "Job to be Done"</h4>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '9px', fontWeight: 800, color: '#475569', marginBottom: '4px', textTransform: 'uppercase', borderBottom: '1px solid #cbd5e1', paddingBottom: '2px' }}>The Brand Identity System</h4>
                            </div>

                            {/* Row 1: Functional vs Organization */}
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>Functional: "Reliable & Easy"</div>
                                <div style={{ fontSize: '8px', color: '#475569', lineHeight: '1.3' }}>Needs to last (Steel/Ceramic). Needs to adapt. Affordable.</div>
                            </div>
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#0F172A' }}>Organization: The Staphorst Roots</div>
                                <p style={{ fontSize: '8px', color: '#475569', margin: '2px 0 0', lineHeight: '1.3' }}>Heritage of integrity. "We don't over-promise, we build." Legitimacy through action.</p>
                            </div>

                            {/* Row 2: Emotional vs Symbol */}
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>Emotional: "Pride & Reward"</div>
                                <div style={{ fontSize: '8px', color: '#475569', lineHeight: '1.3' }}>"I designed this." "We deserve this milestone."</div>
                            </div>
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#0F172A' }}>Symbol: The Fieldsman Seal</div>
                                <p style={{ fontSize: '8px', color: '#475569', margin: '2px 0 0', lineHeight: '1.3' }}>The "Maker's Mark". Stamped on every frame. A personal guarantee of integrity from the brothers.</p>
                            </div>

                            {/* Row 3: Social vs Personality */}
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>Social: "Recognition without Ego"</div>
                                <div style={{ fontSize: '8px', color: '#475569', lineHeight: '1.3' }}>“We love having people over.” “This fits who we are.”</div>
                            </div>
                            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#0F172A' }}>Personality: The Capable Connector</div>
                                <p style={{ fontSize: '8px', color: '#475569', margin: '2px 0 0', lineHeight: '1.3' }}>Grounded. Competent. "The friend who knows how to fix it."</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '9px', fontWeight: 700, color: '#475569', textAlign: 'center', marginTop: 'var(--space-4)' }}>Proudly Simple. Built for Life.</p>
                    </div>
                </div>
            </PageWrapper>

            {/* 5.2 GTM Intro + Layer 1 */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <div>
                    <h2 style={{ marginBottom: 'var(--space-2)' }}>5.2 Go-to-Market: Building a Scalable Commercial Engine</h2>
                    <TextBlock style={{ marginBottom: 'var(--space-2)' }}>
                        <p style={{ lineHeight: '1.3' }}>Scaling from €200K to €22–35M requires a fundamental transformation of how Fieldsman generates demand. The current founder-driven sales model cannot scale. The new commercial engine is built on a unified strategic framework, beginning with a deep understanding of the customer's path to purchase.</p>
                    </TextBlock>


                    {/* Customer Journey Visual */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                            <p style={{ fontSize: '9px', lineHeight: '1.3' }}>To move beyond founder-led sales, Fieldsman must stop treating sales as a series of ad-hoc conversations and start managing them as a designed product. This defined Customer Journey serves as the backbone of the new commercial engine, orchestrating every digital and physical touchpoint into a seamless, reproducible experience.</p>
                        </TextBlock>
                        <h4 style={{ fontSize: '9px', fontWeight: 800, color: '#475569', marginBottom: 'var(--space-2)', textTransform: 'uppercase', textAlign: 'center' }}>The Multi-Channel Customer Journey</h4>
                        <CustomerJourney />
                    </div>

                    {/* Integrated Commercial Engine Visual */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                            <p style={{ fontSize: '9px', color: '#475569' }}>The operationalization of this journey is architected into three integrated layers: Marketing (Inflow), AI Operations (Throughput), and Phygital Service (Trust). This unified commercial engine ensures efficiency does not come at the cost of the "Proud Host" experience.</p>
                        </TextBlock>
                        <CommercialArchitecture />
                    </div>
                </div>
            </PageWrapper>

            {/* 5.3 Production Transformation (Was 5.1) */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.3 Production Transformation: Controlling the Bottleneck</h2>

                    {/* Strategic Logic Text (Full Width) */}
                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#1e293b', marginBottom: '6px', textTransform: 'uppercase' }}>The Strategic Logic</h4>
                        <p style={{ fontSize: '10px', color: '#475569', lineHeight: '1.5', marginBottom: '16px' }}>
                            Fieldsman's growth is currently constrained by production, not demand. The transformation reverses current logic: <strong>outsource what is standardized, control what is customized.</strong> This hybrid approach breaks the "Capacity Trap" by decoupling volume from fixed payroll.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                            <div>
                                <strong>Steel Frames (Commodity):</strong> Standardized, repeatable components are mass-produced in China. This converts fixed skilled labor into variable unit cost and removes the throughput ceiling.
                            </div>
                            <div>
                                <strong>Countertops (Differentiation):</strong> Bespoke per kitchen. Vertical integration of cutting capabilities becomes a competitive advantage, reducing cost from <strong>€900 to €100</strong> and lead times from <strong>8 weeks to 2 weeks</strong>.
                            </div>
                            <div>
                                <strong>Flex Assembly Line (Quality):</strong> Centralizing final assembly in the NL hub allows for 100% quality control before dispatch. The line scales with temporary labor during peak season, maintaining flexibility without fixed payroll risk.
                            </div>
                        </div>
                    </TextBlock>

                    {/* New Full-Width Solution Visual */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <ProductionSolution />
                    </div>
                </div>
            </PageWrapper>

            {/* 
        PAGE 3: 5.4 Expansion
      */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                {/* 5.4 Geographic Expansion (Was 5.3) */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>5.4 Geographic Expansion: Capability-Gated Sequencing</h2>
                    <p style={{ fontSize: '10px', color: '#64748b', marginBottom: 'var(--space-4)' }}>Expansion follows operational readiness, not calendar ambition. Each market entry is gated by demonstrated capability in the current footprint.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                        {/* Phase 1: NL */}
                        <div style={{ background: '#F1F5F9', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: '#0F172A', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 1: 2026</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#1e293b' }}>Netherlands</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>PROVE THE MODEL</div>
                            <p style={{ fontSize: '9px', color: '#475569', lineHeight: '1.4', marginBottom: '8px' }}>
                                The foundation market. Must demonstrate that production can scale reliably, marketing converts efficiently, and quality maintains high NPS at volume.
                            </p>
                            <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '6px', fontSize: '8.5px' }}>
                                <strong>Entry Gate:</strong> Production transformation complete, Lead times stable (2 wks).<br />
                                <span style={{ color: '#0F172A', fontWeight: 700 }}>Target: 250–400 units</span>
                            </div>
                        </div>

                        {/* Phase 2: BE */}
                        <div style={{ background: '#F1F5F9', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: '#334155', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 2: 2027</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#1e293b' }}>Belgium</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', marginBottom: '8px' }}>TEST INTERNATIONAL OPS</div>
                            <p style={{ fontSize: '9px', color: '#475569', lineHeight: '1.4', marginBottom: '8px' }}>
                                Logical first step due to proximity and language. Tests cross-border delivery, service, and partner management.
                            </p>
                            <div style={{ borderTop: '1px solid #CBD5E1', paddingTop: '6px', fontSize: '8.5px' }}>
                                <strong>Entry Gate:</strong> NL operating at 400+ units, Configurator localized.<br />
                                <span style={{ color: '#0F172A', fontWeight: 700 }}>Target: 100–200 units</span>
                            </div>
                        </div>

                        {/* Phase 3: DE */}
                        <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '4px', padding: 'var(--space-4)', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, background: '#2563EB', color: 'white', fontSize: '9px', fontWeight: 800, padding: '2px 8px', borderBottomRightRadius: '4px' }}>PHASE 3: 2027–30</div>
                            <h3 style={{ marginTop: '16px', fontSize: '12px', fontWeight: 800, color: '#1e40af' }}>Germany</h3>
                            <div style={{ fontSize: '9px', fontWeight: 700, color: '#60a5fa', marginBottom: '8px' }}>ANCHOR MARKET FOR SCALE</div>
                            <p style={{ fontSize: '9px', color: '#1e3a8a', lineHeight: '1.4', marginBottom: '8px' }}>
                                The strategic prize (€88M SAM, 80% of opportunity). Requires full localization (language, preferences) and serves as the volume engine.
                            </p>
                            <div style={{ borderTop: '1px solid #93C5FD', paddingTop: '6px', fontSize: '8.5px', color: '#1e3a8a' }}>
                                <strong>Entry Gate:</strong> BE profitable, Production capacity 600+.<br />
                                <span style={{ color: '#1e40af', fontWeight: 700 }}>Target: 40–50% of total vol</span>
                            </div>
                        </div>
                    </div>
                </div >

                {/* Key Takeaways */}
                <div style={{ borderTop: '2px solid #E2E8F0', paddingTop: 'var(--space-3)', marginTop: 'auto' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>5.5 KEY IMPLEMENTATION TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-x-4) var(--space-y-3)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Accessible Luxury:</strong> Value proposition is defined by clear trade-offs that enable premium design at mass-market prices.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>AI Scalability:</strong> Commercial engine uses AI for configuration, lead qual, and service to decouple revenue growth from headcount.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Reverse Logic:</strong> Transformation implies outsourcing standardized steel (China) while vertically integrating custom countertops (NL).
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary-main)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: '#0f172a' }}>Gated Expansion:</strong> International growth is capability-gated, ensuring the core NL model is proven before scale-up in Germany.
                            </p>
                        </div>
                    </div>
                </div >
            </PageWrapper >
        </>
    );
}
