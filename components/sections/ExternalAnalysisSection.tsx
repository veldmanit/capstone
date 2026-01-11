'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import MarketSizingPyramid from '@/components/charts/MarketSizingPyramid';
import ProudHostEmpathyMap from '@/components/charts/ProudHostEmpathyMap';
import ValueCurve from '@/components/charts/ValueCurve';
import PortersFiveForces from '@/components/charts/PortersFiveForces';
import PestleSummaryVisual from '@/components/charts/PestleSummaryVisual';

export default function ExternalAnalysisSection() {
    return (
        <>
            {/* 
        PAGE 1: 2.1 Market Definition + 2.2 Market Sizing 
      */}
            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <TextBlock>
                        <p>
                            This chapter evaluates whether Fieldsman's ambition to scale nationally and expand internationally within five years is supported by the external market environment. It quantifies the market opportunity in the Netherlands, Belgium, and Germany, analyzes structural demand drivers, and assesses customer needs, competitive dynamics, and industry attractiveness.
                        </p>
                    </TextBlock>
                </div>

                {/* 2.1 Market Definition */}
                <div style={{ borderTop: '1px solid var(--color-neutral-300)', paddingTop: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>2.1 Market Definition: The Mid-Premium Outdoor Kitchen Segment</h2>
                    <TextBlock>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            The outdoor kitchen market comprises modular or built-in outdoor cooking and preparation units intended for permanent or semi-permanent placement in residential outdoor spaces. These solutions typically integrate cooking appliances such as kamado grills, gas grills, and pizza ovens, along with preparation space, storage modules, and optional utilities.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            Fieldsman competes in the mid-premium segment, where customers expect high-quality design and durability but are unwilling to pay luxury price points. This segment spans approximately €2,000 to €10,000 depending on configuration. The market excludes portable grills and BBQ carts at mass retail prices, high-end landscaping projects exceeding €50,000, and indoor kitchen products not designed for outdoor durability.
                        </p>
                        <p>
                            The geographic scope covers three markets. The Netherlands serves as the base market, with Belgium and Germany as priority expansion targets. Home ownership rates in the Netherlands and Belgium (70–77%) support high garden access and installation permission. Germany's lower home ownership rate (51%) creates a larger rental segment where modular portability becomes an important buying driver.
                        </p>
                    </TextBlock>
                </div>

                <div style={{ borderTop: '1px solid var(--color-neutral-300)', paddingTop: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-6)' }}>2.2 A €754M Opportunity Across Three Markets</h2>
                    For a detailed breakdown of the bottom-up market sizing methodology, see Appendix B.

                    {/* Replaced KPI Blocks with MarketSizingPyramid */}
                    <MarketSizingPyramid />

                    <TextBlock columns={2} style={{ marginTop: 'var(--space-6)' }}>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            Using a bottom-up household adoption model, the Total Addressable Market across the Netherlands, Belgium, and Germany reaches €754M annually, representing approximately 151,000 units. Germany dominates with €541M of the total, making it the anchor market for any European scaling ambition. The Netherlands contributes €139M and Belgium €74M.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            The Serviceable Addressable Market, representing mid-premium modular outdoor kitchens in the €2K–€10K range, accounts for 40% of TAM, or €301M. This is Fieldsman's competitive arena: the "Missing Middle" where customers want premium quality without luxury prices.
                        </p>
                        <p>
                            The Serviceable Obtainable Market by 2030 represents what a single scalable challenger can realistically capture. With target shares of 8% in the Netherlands, 2% in Belgium, and 2% in Germany, this translates to €10.6M in revenue and 2,125 kitchens per year. These volumes align with Fieldsman's production capacity ambition and confirm that Germany is essential for European-scale outcomes.
                        </p>
                    </TextBlock>
                </div>
            </PageWrapper>

            {/* 
        PAGE 2: 2.3 Tailwinds 
      */}
            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>2.3 Market Tailwinds: Structural Drivers for Category Growth</h2>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                        Four structural trends support category growth and strengthen the scaling thesis:
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                    {/* Item 1 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>1. Outdoor living as an extension of the home</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Households increasingly invest in gardens and terraces as "second living rooms." Outdoor kitchens combine functional, aesthetic, and social value, making them attractive lifestyle purchases beyond pure cooking utility. The COVID-19 pandemic accelerated this trend, and consumer behavior has not reverted.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>2. Premiumization and kamado culture</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Kamado grills represent approximately 5–10% of barbecue ownership across NL/BE/DE, corresponding to approximately 0.3–0.5M Dutch households, 0.2–0.3M Belgian households, and ~2.0M German households. Kamado category growth is estimated at 5–8% annually, faster than the broader European BBQ market at 4–5%. Kamado owners are a natural feeder segment for outdoor kitchen purchases: they have already invested in premium outdoor cooking and seek a proper setting for their equipment.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>3. Experience-driven consumption</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Outdoor kitchens function as social infrastructure. For many households, the purchase is motivated by hosting, lifestyle pride, and status signaling. Customer feedback consistently highlights the "wow effect" and pride of ownership as central to perceived value. This emotional dimension supports premium pricing and brand differentiation.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>4. A polarized market structure</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            The market is polarized between low-budget DIY solutions and premium bespoke kitchens priced at €15,000–€50,000+. This price gap, the "Missing Middle," creates a structural opportunity for mid-premium brands offering high-quality design and durability at accessible pricing. Customers in this segment are underserved: they want more than cheap carts but cannot justify luxury prices for seasonal use.
                        </p>
                    </div>
                </div>

                {/* Market Dynamics: Seasonality & CLV */}
                <div style={{
                    display: 'flex',
                    gap: 'var(--space-6)',
                    background: 'var(--color-neutral-50)',
                    border: '1px solid var(--color-neutral-200)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginBottom: 'var(--space-6)',
                    marginTop: 'var(--space-6)'
                }}>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-500)', textTransform: 'uppercase', marginBottom: '4px' }}>Purchase Cycle: Seasonal High-Immediacy</h4>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4', color: 'var(--color-neutral-800)' }}>
                            Demand is strongly seasonal, peaking in Spring/Summer (April–July). During this window, "Time to Enjoy" is the primary conversion driver. Lead times &gt;4 weeks kill conversion as customers want to use the product immediately. Fieldsman's stock-based model captures this urgency better than bespoke make-to-order competitors.
                        </p>
                    </div>
                    <div style={{ width: '1px', background: 'var(--color-neutral-200)' }}></div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-500)', textTransform: 'uppercase', marginBottom: '4px' }}>Lifetime Value: One-Off + Upgrades</h4>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4', color: 'var(--color-neutral-800)' }}>
                            The core unit is typically a one-time high-ticket investment (10-15 year lifespan). However, the modular system unlocks secondary CLV through module additions (e.g., adding a fridge or bar later) and accessory upgrades, extending value beyond the initial transaction.
                        </p>
                    </div>
                </div>

                {/* PESTLE Summary Visual */}
                <TextBlock style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
                    <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-neutral-700)' }}>
                        To validate the macro-environment for expansion, a comprehensive PESTLE analysis was conducted. The visual below summarizes the key strategic drivers, while the full detailed analysis is available in <strong>Appendix A</strong>.
                    </p>
                </TextBlock>
                <PestleSummaryVisual />
            </PageWrapper>

            {/* 
        PAGE 3: 2.4 Customer Persona Profile (The Proud Host)
      */}
            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>2.4 What Customers Want: Design, Durability, and the "Wow Effect"</h2>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <p style={{ fontSize: 'var(--font-size-h4)', color: 'var(--color-neutral-600)' }}>
                        Detailed persona profiles and empathy maps are available in <strong>Appendix C</strong>.
                    </p>
                </div>
                <TextBlock columns={2}>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                        Fieldsman's core customer is "The Proud Host": aged 35–60, upper-middle income but value-conscious, owning a home with garden or terrace, typically a family or hosting-centric couple. Their budget sits in the €3K–€8K mid-premium comfort zone. They want something premium, but not a crazy luxury spend. Their job-to-be-done is clear: create a garden centerpiece that makes hosting effortless and earns compliments.
                    </p>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                        Outdoor kitchen buyers seek three value dimensions. Functional durability ensures products withstand outdoor weather for years. Aesthetic integration makes the kitchen a central design element in the garden. Emotional value delivers hosting satisfaction, pride of ownership, and lifestyle identity.
                    </p>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                        Willingness to pay is constrained by comparison to indoor kitchens. For most households, an outdoor kitchen is discretionary and cannot justify the same investment as an indoor renovation. Customers mentally anchor to their indoor kitchen price and apply a discount for lower usage frequency. The key objection is always: "Outdoor kitchens are used less, is this worth it?" The answer lies in reassurance via durability, long lifespan, and pride of ownership. This creates a natural ceiling: most buyers will not exceed €3,000–€8,000 unless they belong to the true luxury segment.
                    </p>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                        Customers accept trade-offs if design and durability remain strong. Reduced built-ins, self-installation, fewer drawers, and lower-touch service are acceptable. Strong design, quality materials, and customization at a fair price are not negotiable. This trade-off logic aligns directly with Fieldsman's proposition: deliver what matters, eliminate what does not, and pass the savings to the customer.
                    </p>
                    <p>
                        The customer journey is digital-first but requires reassurance. The Proud Host discovers brands through Instagram, Pinterest, search, and lifestyle content. They use visualization tools like configurators. But for purchases in the €3,000–€8,000 range, they seek showroom reassurance before committing to a €5K+ online purchase. Pains include uncertainty about durability ("How will it look after 2 winters?"), trust concerns ("Can I trust €5K+ online?"), and access barriers ("Showrooms are too far"). Scaling requires a "phygital" model: digital acquisition combined with trust-building through content, reviews, influencers, and cost-efficient showroom access.
                    </p>
                </TextBlock>

                {/* 2.4 Visual: The Proud Host Empathy Map */}
                <ProudHostEmpathyMap />
            </PageWrapper>

            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>2.5 A Fragmented Market Without a Scaled Leader</h2>
                <p style={{ fontSize: 'var(--font-size-h4)', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>
                    For a comprehensive feature-by-feature competitor audit, see <strong>Appendix D</strong>.
                </p>
                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p>
                        The competitive landscape is fragmented and structurally polarized into five segments spanning from low budget to luxury. This polarization creates a clear gap, the "Missing Middle", where Fieldsman's modular strategy delivers unique value by combining premium quality with operational efficiency.
                    </p>
                </TextBlock>

                {/* 2.5 Visual: Value Curve Analysis */}
                <ValueCurve />

                <TextBlock style={{ marginTop: 'var(--space-4)' }}>
                    <div style={{ marginLeft: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                        <p style={{ marginBottom: '6px', fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            <strong>The low budget segment (€0–€2K)</strong> includes IKEA, Buitenkeukendeal, Weber, Boretti, and DIY solutions. These players score high on price accessibility but low on design quality, durability, and customization. They anchor customer reference pricing but are not direct competitors to Fieldsman.
                        </p>
                        <p style={{ marginBottom: '6px', fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            <strong>The mid-premium segment (€3K–€8K)</strong> consists of players like MetaalEnzo, regional craftsmen, and small workshops. These players offer design focus and quality materials but suffer from limited production capacity, inconsistent online experience, and longer lead times due to manual production. This is Fieldsman's competitive arena.
                        </p>
                        <p style={{ marginBottom: '6px', fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            <strong>The premium segment (€10K–€20K)</strong> includes established brands such as Roostr, Novara, Life-Steel, Freiluft, OFYR, Otto Wilde, and Flammkraft. They deliver high design quality and durability but operate showroom-heavy models with higher prices and longer lead times.
                        </p>
                        <p style={{ marginBottom: '6px', fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            <strong>The luxury segment (€25K+)</strong> features players like COOXS Concepts, Röshults, and Anker. They offer fully bespoke designs and high-touch consultancy but serve a limited addressable market with extended lead times and premium pricing.
                        </p>
                    </div>

                    <div style={{ background: 'var(--color-neutral-100)', padding: 'var(--space-3) var(--space-5) var(--space-5) var(--space-5)', borderRadius: 'var(--border-radius-md)', marginTop: 'var(--space-4)' }}>
                        <h3 style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)' }}>Strategic Differentiation</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-neutral-700)', lineHeight: '1.4' }}>
                                Fieldsman's value curve is built on a deliberate strategic choice to compete in the €3K–€8K segment by replacing traditional bespoke craftsmanship with mass-customization through standardized modules. This modular architecture allows Fieldsman to deliver higher design consistency, reliable durability, a superior online configuration and purchase experience, and significantly faster lead times than mid-premium workshops.
                            </p>
                            <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-neutral-700)', lineHeight: '1.4' }}>
                                The competitive implication is clear: the mid-premium segment is growing but lacks a dominant scalable European player. Competition is driven by design differentiation, brand trust, and lead-time reliability, not price alone. This creates an opportunity for Fieldsman to become the category leader by scaling operational excellence.
                            </p>
                        </div>
                    </div>
                </TextBlock>
            </PageWrapper>

            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ marginBottom: 'var(--space-4)' }}>2.6 Industry Attractiveness: Room for a Challenger</h2>

                <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                    <p>Porter's Five Forces analysis indicates that the outdoor kitchen industry is attractive for a challenger that can combine modular design with operational control.</p>
                </TextBlock>

                {/* 2.6 Visual: Porter's Five Forces */}
                <PortersFiveForces />

                {/* Key Takeaways - Premium Styling */}
                <div style={{ borderTop: '2px solid #E2E8F0', paddingTop: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
                    <h3 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-2)', letterSpacing: '0.05em' }}>2.7 KEY EXTERNAL TAKEAWAYS</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-x-4) var(--space-y-3)' }}>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>1</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>The Missing Middle:</strong> A €301M SAM opportunity exists for players bridging the gap between DIY carts and luxury bespoke kitchens.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Germany is Critical:</strong> expansion is mandatory for scale; the German market represents ~80% of total addressable revenue across prioritization zones.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Reassurance First:</strong> "The Proud Host" prioritizes durability and design over price; scaling requires trust-building via "phygital" touchpoints.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Window of Opportunity:</strong> Favorable industry structure with moderate supplier power and fragmented competition enables a modular challenger to win.
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
