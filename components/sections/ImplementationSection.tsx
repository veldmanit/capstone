'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import CustomerJourney from '@/components/charts/CustomerJourney';
import CommercialArchitecture from '@/components/charts/CommercialArchitecture';
import ProductionSolution from '@/components/charts/ProductionSolution';
import OrganizationalStructureFuture from '@/components/charts/OrganizationalStructureFuture';

export default function ImplementationSection() {
    return (
        <>
            {/* PAGE 1: Intro, 5.1 Value Prop, 5.1.2 Offering Pyramid */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p>This chapter defines the strategic transformations required to scale Fieldsman from 50 to 2,000+ kitchens per year. The implementation starts with the defining value proposition and brand positioning, flows into the commercial growth engine, and concludes with the operational transformation and expansion roadmap.</p>
                </TextBlock>

                {/* 5.1 Value Proposition, Offering & Brand */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>5.1 Value Proposition, Offering & Branding</h2>

                    {/* 5.1.1 The Value Proposition */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Value Proposition: Accessible Luxury</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-6)' }}>
                            <TextBlock>
                                <p style={{ fontSize: '9.5px', marginBottom: '8px', lineHeight: '1.5' }}>
                                    Fieldsman disrupts the market by decoupling premium from expensive. Traditional buying journeys force a binary choice: expensive custom masonry at €15,000 to €30,000 with long lead times, or flimsy DIY kits at €1,000 to €2,000 that degrade within a few seasons. There is almost no middle ground for the design-conscious homeowner.
                                </p>
                                <p style={{ fontSize: '9.5px', margin: 0, lineHeight: '1.5' }}>
                                    Fieldsman occupies this gap by delivering €15,000 perceived value at a €3,500 to €8,000 price point. This is not a discount strategy. It is a structural cost advantage achieved through standardized customization. By operating with modular efficiency at scale, Fieldsman outcompetes local bespoke players on price while offering superior durability and design consistency.
                                </p>
                            </TextBlock>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-secondary)', padding: '12px', borderRadius: '4px' }}>
                                <h4 style={{ fontSize: 'var(--font-size-small)', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '8px', textTransform: 'uppercase' }}>Explicit Trade-Offs</h4>
                                <ul style={{ margin: 0, paddingLeft: '12px', fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '4px' }}>Mass-customization <strong>over</strong> Bespoke</li>
                                    <li style={{ marginBottom: '4px' }}>Self-installation <strong>over</strong> White-glove</li>
                                    <li style={{ marginBottom: '4px' }}>Showroom-light <strong>over</strong> Dense retail</li>
                                    <li style={{ marginBottom: '4px' }}>Curated efficiency <strong>over</strong> Infinite choice</li>
                                    <li>Stock-Driven Speed <strong>over</strong> Made-to-Order</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 5.1.2 The Offering: The Profit Pyramid */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Offering: One Base, Three Tiers</h3>
                        <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>
                            One modular system serves three distinct segments. Customers move up the value pyramid by adding options, not by changing the core product structure. <span style={{ fontStyle: 'italic' }}>(See Appendix F for Modular Architecture)</span>
                        </p>

                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '40px' }}>
                            {/* Upsell Path */}
                            <div style={{ position: 'absolute', left: '0', top: '10%', bottom: '10%', width: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                                <div style={{ flex: 1, width: '2px', background: 'linear-gradient(to top, var(--color-neutral-200), var(--color-primary))', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: '-5px', left: '-4px', width: '0', height: '0', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderBottom: '8px solid var(--color-primary)' }}></div>
                                </div>
                                <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-primary)', textTransform: 'uppercase', writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginTop: '8px' }}>Upsell Engine</div>
                            </div>

                            {/* TIER 3: TOP (Exclusive) */}
                            <div style={{ width: '100%', zIndex: 2, background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-neutral-700)' }}>TOP – LUXURY EXPRESSION</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontStyle: 'italic' }}>8+ Modules • Fully equipped & Premium Delivery</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-neutral-800)' }}>€6,000 - €10,000</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-900)', fontWeight: 700 }}>Exclusive Design</div>
                                </div>
                            </div>

                            {/* TIER 2: MIDDLE (The Profit Anchor / Sweet Spot) */}
                            <div style={{ width: '100%', zIndex: 5, background: 'white', border: '2px solid var(--color-primary)', padding: '12px 16px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', position: 'relative' }}>
                                {/* Profit Label */}
                                <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: 'white', fontSize: '8px', fontWeight: 900, padding: '2px 10px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                                    Target Segment & Primary Profit Pool
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)' }}>MIDDLE – ASPIRATIONAL TIER</div>
                                    <div style={{ fontSize: '9px', color: 'var(--color-primary)', fontStyle: 'italic' }}>4-6 Modules • Better service and more options</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '13px', fontWeight: 900, color: 'var(--color-primary)' }}>€3,500 - €5,500</div>
                                    <div style={{ fontSize: '9px', color: 'var(--color-primary)', fontWeight: 700 }}>The "Goldilocks" Sweet Spot</div>
                                </div>
                            </div>

                            {/* TIER 1: BASE (The Volume Foundation) */}
                            <div style={{ width: '100%', zIndex: 2, background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--color-secondary)' }}>BASE – ACCESSIBLE ENTRY POINT</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontStyle: 'italic' }}>2-3 modules • DIY and affordable quality</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-secondary)' }}>€2,000 - €2,500</div>
                                    <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', fontWeight: 700 }}>Volume Engine</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5.1.3 Brand Positioning: Building a Sustainable Competitive Advantage */}
                    <div>
                        <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-2)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Brand Positioning: Building a Sustainable Competitive Advantage</h3>

                        <div style={{ marginBottom: 'var(--space-4)' }}>
                            <p style={{ fontSize: '9px', lineHeight: '1.5', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                                In a market where product features can be replicated and price advantages can be eroded, brand is the only truly defensible asset. Fieldsman's modular architecture, D2C model, and operational efficiencies provide a temporary head start, but competitors with sufficient capital could eventually copy these elements. What cannot be copied is the emotional connection, trust, and identity that a strong brand creates in the minds of customers.
                            </p>
                            <p style={{ fontSize: '9px', lineHeight: '1.5', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                                For high-involvement purchases like outdoor kitchens, where customers invest €3,000 to €8,000 in something they will live with for 15 years, brand plays a decisive role. Customers are not just buying steel and ceramic. They are buying confidence that the product will last, pride in how it looks, and trust that the company will stand behind it. In this context, strong branding allows Fieldsman to escape pure price competition, justify healthier margins, and build a moat that strengthens with every satisfied customer.
                            </p>
                            <p style={{ fontSize: '9px', fontWeight: 700, lineHeight: '1.5', color: 'var(--color-primary-800)', margin: 0 }}>
                                The strategic imperative is clear: Fieldsman must evolve from a product with good reviews into a recognized premium brand that customers actively seek out and recommend.
                            </p>
                        </div>

                        <div style={{ background: 'var(--color-primary-dark)', padding: '12px', borderRadius: '4px', marginBottom: 'var(--space-4)' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>Brand Essence: Authentic Craftsmanship. Built for Bringing People Together.</div>
                            <p style={{ fontSize: '9px', lineHeight: '1.4', color: 'var(--color-neutral-200)', margin: 0 }}>
                                The Fieldsman brand bridges two worlds. On one side stand the three brothers: grounded, honest, and makers by nature. On the other stands the design-conscious host: social, aspirational, and seeking connection. The brand exists at the intersection, using authentic Dutch craftsmanship to build the perfect stage for bringing people together.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 'var(--space-4)', rowGap: '6px' }}>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '2px', textTransform: 'uppercase' }}>Functional: Reliable and Easy</div>
                                <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', lineHeight: '1.4' }}>The product needs to last through years of weather and use. It needs to adapt to different spaces and preferences while remaining affordable without compromising quality.</div>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '2px', textTransform: 'uppercase' }}>Emotional: Pride and Reward</div>
                                <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', lineHeight: '1.4' }}>Customers feel ownership in the design process. They see the kitchen as a milestone purchase that reflects their taste and success.</div>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '2px', textTransform: 'uppercase' }}>Organizational: Staphorst Roots</div>
                                <p style={{ fontSize: '8px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.4' }}>A heritage of integrity and straightforward honesty. The company does not over-promise; it builds with transparency and maker's pride.</p>
                            </div>
                            <div style={{ background: 'var(--color-neutral-50)', border: '1px solid var(--color-neutral-200)', padding: '8px 10px', borderRadius: '4px' }}>
                                <div style={{ fontSize: '8.5px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '2px', textTransform: 'uppercase' }}>Symbolic: The Fieldsman Seal</div>
                                <p style={{ fontSize: '8px', color: 'var(--color-neutral-600)', margin: 0, lineHeight: '1.4' }}>Stamped on every frame, it serves as the maker's mark and a personal guarantee of quality from the brothers.</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-primary)', textAlign: 'center', marginTop: 'var(--space-6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quality That Brings People Together.</p>
                    </div>
                </div>
            </PageWrapper>

            {/* PAGE 2: Commercial Workstream */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>5.2 Commercial Workstream: The "Phygital" Engine</h2>
                    <TextBlock>
                        <p>The commercial objective is to decouple sales growth from headcount. By moving the primary sales interaction to a digital configurator, Fieldsman can handle thousands of leads with a lean team. Physical touchpoints serve only to validate quality, not to initiate the sale.</p>
                    </TextBlock>
                </div>

                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h4 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)', textTransform: 'uppercase', textAlign: 'center' }}>The Multi-Channel Customer Journey</h4>
                    <CustomerJourney />
                </div>

                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                        <p style={{ fontSize: '9px', color: 'var(--color-neutral-600)', lineHeight: '1.5' }}>
                            The commercial engine is the primary driver of Fieldsman's scalability. By architecting the growth process into three distinct layers—Marketing, AI Operations, and Phygital Conversion—the company can handle exponential lead volume without a linear increase in headcount. This structural efficiency is what enables the €3,500 "Sweet Spot" while maintaining healthy unit economics.
                        </p>
                    </TextBlock>
                    <CommercialArchitecture />
                </div>
            </PageWrapper>

            {/* PAGE 3: Production Transformation */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>5.3 Production Transformation: From 40 to 2,000+ Kitchens</h2>
                    <TextBlock>
                        <p style={{ fontSize: '10px', color: 'var(--color-primary-800)', fontWeight: 700, marginBottom: '16px' }}>
                            Scaling Fieldsman from 40 kitchens per year to over 2,000 requires a fundamental redesign of the production model. The current setup cannot simply be expanded. It must be transformed.
                        </p>

                        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px dashed var(--color-neutral-300)' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-700)', marginBottom: '6px', textTransform: 'uppercase' }}>The Challenge: The Seasonal Capacity Trap</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', lineHeight: '1.6' }}>
                                Under the current model, scaling production means hiring permanent skilled craftsmen. But outdoor kitchen demand is highly seasonal, with 80% of orders concentrated between March and July. This creates an impossible choice: either under-produce during the summer peak and leave revenue on the table, or carry a large permanent workforce that sits idle during winter, destroying margins. Neither path leads to profitable scale.
                            </p>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px', textTransform: 'uppercase' }}>The Solution: The Integrated Hub Strategy</h4>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.6', marginBottom: '12px' }}>
                                The transformation solves this by decoupling component production from final assembly. Standardized components are sourced globally for cost efficiency and supply resilience, while the Netherlands hub handles customization, quality control, and flexible assembly to meet seasonal demand peaks.
                            </p>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-700)', lineHeight: '1.6', marginBottom: '12px', background: 'var(--color-neutral-50)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid var(--color-primary)' }}>
                                <strong>The strategic logic is counterintuitive:</strong> outsource what seems core (steel frame manufacturing) and bring in-house what seems peripheral (countertop cutting). Steel frames are standardized and can be produced anywhere with consistent quality. Countertops, however, are the customization layer and the current bottleneck. By investing in waterjet cutting equipment, Fieldsman reduces countertop costs from approximately €900 to €100 per kitchen while compressing lead times from 8 weeks to under 2 weeks. This single change unlocks both margin and speed.
                            </p>
                            <p style={{ fontSize: '9.5px', color: 'var(--color-neutral-600)', lineHeight: '1.6', marginBottom: '12px' }}>
                                The two-month inventory buffer at the NL hub is what enables consistent two-week delivery even during peak season. Components flow in steadily year-round while finished kitchens flow out in response to seasonal demand. This absorbs volatility without requiring a volatile workforce.
                            </p>
                            <p style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary-dark)', margin: 0 }}>
                                The result is a production system capable of delivering 2,000+ kitchens per year while maintaining the quality, speed, and margins required for profitable growth.
                            </p>
                        </div>
                    </TextBlock>
                </div>
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <ProductionSolution />
                </div>
            </PageWrapper>

            {/* PAGE 4: Organization & Expansion */}
            <PageWrapper sectionLabel="SECTION 5: IMPLEMENTATION">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>5.4 Organization Plan: Leading the Scale-Up</h2>
                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            A production transformation and commercial engine mean nothing without the organization to execute them. Today, Fieldsman operates as an extension of its founders: every major decision, customer interaction, and quality check flows through Raymon, Jurrian, or Herald. This founder-led model has been a strength during the startup phase, enabling speed, flexibility, and deep customer understanding. But it now represents the single greatest constraint on growth.
                        </p>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            Founder dependency creates three risks as the company scales. First, it limits throughput. There are only so many hours in a day, and founders currently balance Fieldsman with full-time employment elsewhere. Second, it creates fragility. If one founder is unavailable, critical functions stop. Third, it prevents strategic focus. When founders spend their time on operational tasks, they cannot focus on the strategic decisions that drive long-term value.
                        </p>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            Realizing Fieldsman's growth potential demands two fundamental shifts. The founders must transition from part-time operators to full-time leaders, stepping out of daily execution to own strategic direction. And the organization must evolve from a founder-does-everything model to a functional structure with dedicated specialists who can operate independently.
                        </p>
                        <p style={{ fontSize: '9.5px', fontWeight: 700, lineHeight: '1.6', color: 'var(--color-primary-800)', margin: 0 }}>
                            This is not about building a large organization. By 2030, Fieldsman targets just 19 FTE, a lean structure enabled by AI-driven operations and efficient processes. The goal is an organization that can scale revenue without scaling complexity, and that can operate effectively even when the founders are not in the room.
                        </p>
                    </TextBlock>
                    <OrganizationalStructureFuture />
                </div>

                <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: 'var(--space-6)' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>5.5 Geographic Expansion: Capability-Gated Sequencing</h2>
                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            International expansion is essential for Fieldsman to reach its full potential. The Netherlands represents only 18% of the total addressable market. Germany accounts for 72%. Without Germany, Fieldsman remains a successful Dutch company. With Germany, it becomes a European category leader.
                        </p>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            However, expansion must be earned, not scheduled. Each market adds complexity: new languages, different customer expectations, unfamiliar logistics, and increased demand on founder attention. Expanding before the foundation is solid risks stretching the organization to breaking point while damaging brand reputation through poor customer experience.
                        </p>
                        <p style={{ fontSize: '9.5px', fontWeight: 700, lineHeight: '1.6', color: 'var(--color-primary-800)', margin: 0 }}>
                            Fieldsman therefore follows a capability-gated approach where each market entry is triggered by demonstrated operational readiness rather than calendar dates.
                        </p>
                    </TextBlock>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                        <div style={{ background: 'var(--color-neutral-50)', padding: '12px', border: '1px solid var(--color-neutral-200)', borderRadius: '4px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-500)', marginBottom: '4px' }}>PHASE 1: 2026</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px' }}>Netherlands</h4>
                            <p style={{ fontSize: '8.5px', color: 'var(--color-neutral-600)', lineHeight: '1.4', margin: 0 }}>
                                Serves as the foundation market where Fieldsman proves the transformed business model works at scale. The goal is <strong>250 to 400 units</strong> with stable two-week lead times and positive unit economics. Success here creates the playbook for subsequent markets.
                            </p>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: '12px', border: '1px solid var(--color-neutral-200)', borderRadius: '4px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-500)', marginBottom: '4px' }}>PHASE 2: 2027</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px' }}>Belgium</h4>
                            <p style={{ fontSize: '8.5px', color: 'var(--color-neutral-600)', lineHeight: '1.4', margin: 0 }}>
                                Serves as the cross-border test. Geographic proximity and shared language minimize complexity while introducing international operations challenges. The goal is <strong>100 to 200 units</strong> while validating that the model transfers across borders.
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '12px', border: '1px solid var(--color-primary)', borderRadius: '4px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                            <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px' }}>PHASE 3: 2027-30</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '6px' }}>Germany</h4>
                            <p style={{ fontSize: '8.5px', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                The strategic prize. Entry is phased rather than binary, beginning with a limited pilot in late 2027 and progressing to full activation through 2028-2030. The target is for Germany to represent <strong>50% of total volume</strong> by 2030.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Key Takeaways Footer */}
                <div style={{ borderTop: '2px solid var(--color-neutral-200)', paddingTop: 'var(--space-3)', marginTop: 'var(--space-10)' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>5.6 KEY IMPLEMENTATION TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: '9.5px' }}><strong>Accessible Luxury:</strong> Defined by clear trade-offs enabling premium design at mass-market prices.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: '9.5px' }}><strong>AI Scalability:</strong> Configurator-first engine decouples growth from headcount.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: '9.5px' }}><strong>Reverse Logic:</strong> Global sourcing for frames + vertical integration for ceramic cutting.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: '9px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: '9.5px' }}><strong>Gated Expansion:</strong> International growth is capability-gated per proven market readiness.</p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
