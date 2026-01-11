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
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>2.1 Market Definition: The Mid-Premium Outdoor Kitchen Segment</h2>
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
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-6)' }}>2.2 A €754M Opportunity Across Three Markets</h2>
                    For a detailed breakdown of the bottom-up market sizing methodology, see Appendix B.

                    {/* Replaced KPI Blocks with MarketSizingPyramid */}
                    <MarketSizingPyramid />

                    <TextBlock style={{ marginTop: 'var(--space-6)' }}>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            Using a bottom-up household adoption model, the Total Addressable Market across the Netherlands, Belgium, and Germany reaches €754M annually, representing approximately 151,000 units. Germany dominates with €541M of the total, making it the anchor market for any European scaling ambition. The Netherlands contributes €139M and Belgium €74M.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)' }}>
                            The Serviceable Addressable Market focuses on mid-premium modular outdoor kitchens in the €2K to €10K range, accounting for 40% of TAM at €301M. This is Fieldsman's competitive arena: the Missing Middle, where customers seek premium quality without paying luxury prices.
                        </p>
                        <p>
                            The Serviceable Obtainable Market by 2030 represents what a scalable challenger can realistically capture. Targeting market shares of 8% in the Netherlands, 2% in Belgium, and 2% in Germany translates to €10.6M in revenue and 2,125 kitchens per year. These volumes align with Fieldsman's production capacity ambitions and confirm that Germany is essential for achieving European-scale outcomes.
                        </p>
                    </TextBlock>
                </div>
            </PageWrapper>

            {/* 
        PAGE 2: 2.3 Tailwinds 
      */}
            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>2.3 Market Tailwinds: Structural Drivers for Category Growth</h2>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.6', marginBottom: 'var(--space-4)' }}>
                        A compelling market opportunity requires more than size alone. Before committing to a scaling strategy, Fieldsman must validate that structural demand drivers support sustained category growth and that buyer behavior aligns with the proposed business model. This section examines both.
                    </p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                        Four structural trends support category growth and strengthen the case for scaling Fieldsman across NL/BE/DE.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {/* Item 1 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>1. Outdoor living as an extension of the home</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Households increasingly invest in gardens and terraces as second living rooms. Outdoor kitchens combine functional, aesthetic, and social value, making them attractive lifestyle purchases that extend well beyond pure cooking utility. The COVID-19 pandemic accelerated this trend, and consumer behavior has not reverted.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>2. Premiumization and kamado culture</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Kamado grills represent approximately 5 to 10% of barbecue ownership across NL/BE/DE, corresponding to roughly 0.3 to 0.5M Dutch households, 0.2 to 0.3M Belgian households, and 2.0M German households. The kamado category is growing at an estimated 5 to 8% annually, outpacing the broader European BBQ market at 4 to 5%. Kamado owners are a natural feeder segment for outdoor kitchen purchases, having already invested in premium outdoor cooking and now seeking a proper setting for their equipment.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>3. Experience-driven consumption</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            Outdoor kitchens function as social infrastructure. For many households, the purchase is motivated by hosting, lifestyle pride, and status signaling. Customer feedback consistently highlights the wow effect and pride of ownership as central to perceived value. This emotional dimension supports premium pricing and brand differentiation.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: '4px', fontWeight: 700 }}>4. A polarized market structure</h3>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4' }}>
                            The market is polarized between low-budget DIY solutions and premium bespoke kitchens priced at €15,000 to €50,000 or more. This price gap creates a structural opportunity in the Missing Middle for mid-premium brands offering high-quality design and durability at accessible pricing. Customers in this segment are underserved: they want more than cheap carts but cannot justify luxury prices for seasonal use.
                        </p>
                    </div>
                </div>

                {/* Market Dynamics: Seasonality & CLV */}
                <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
                    <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-neutral-700)' }}>
                        Beyond these structural trends, two characteristics of buyer behavior are critical for designing an effective commercial strategy.
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    gap: 'var(--space-6)',
                    background: 'var(--color-neutral-50)',
                    border: '1px solid var(--color-neutral-200)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginBottom: 'var(--space-6)'
                }}>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-500)', textTransform: 'uppercase', marginBottom: '4px' }}>Purchase Cycle: Seasonal High-Immediacy</h4>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4', color: 'var(--color-neutral-800)' }}>
                            Demand is strongly seasonal, peaking in spring and summer from April to July. During this window, time to enjoy is the primary conversion driver. Lead times exceeding four weeks significantly reduce conversion rates, as customers want to use the product immediately. Fieldsman's stock-based model captures this urgency better than bespoke make-to-order competitors.
                        </p>
                    </div>
                    <div style={{ width: '1px', background: 'var(--color-neutral-200)' }}></div>
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: 'var(--font-size-h4)', fontWeight: 800, color: 'var(--color-neutral-500)', textTransform: 'uppercase', marginBottom: '4px' }}>Lifetime Value: One-Off with Upgrade Potential</h4>
                        <p style={{ fontSize: 'var(--font-size-body)', lineHeight: '1.4', color: 'var(--color-neutral-800)' }}>
                            The core unit is typically a one-time high-ticket investment with a 10 to 15 year lifespan. However, the modular system unlocks secondary customer lifetime value through module additions such as a fridge or bar unit, as well as accessory upgrades. This extends revenue potential well beyond the initial transaction.
                        </p>
                    </div>
                </div>

                {/* PESTLE Summary Visual */}
                <TextBlock style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-2)' }}>
                    <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-neutral-700)' }}>
                        Together, these market dynamics and buyer behaviors point to a favorable environment for Fieldsman's scaling ambitions. To further validate the macro-environment for expansion, a comprehensive PESTLE analysis was conducted. The visual below summarizes the key strategic drivers, while the full detailed analysis is available in <strong>Appendix A</strong>.
                    </p>
                </TextBlock>
                <PestleSummaryVisual />
            </PageWrapper>

            {/* 
        PAGE 3: 2.4 Customer Persona Profile (The Proud Host)
      */}
            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>2.4 What Customers Want: Design, Durability, and the "Wow Effect"</h2>
                <TextBlock style={{ marginTop: 'var(--space-4)' }}>
                    <p style={{ marginBottom: 'var(--space-6)', lineHeight: '1.6' }}>
                        A successful go-to-market strategy must be built on a deep understanding of who the customer is, what they value, and how they buy. This section profiles Fieldsman's target customer and examines the decision drivers, price psychology, and journey characteristics that shape commercial strategy. Detailed persona profiles and empathy maps are available in <strong>Appendix C</strong>.
                    </p>

                    <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Core Customer: The Proud Host</h4>
                        <p style={{ lineHeight: '1.5' }}>
                            Fieldsman's primary customer is aged 35 to 60, upper-middle income but value-conscious, owning a home with a garden or terrace, and typically part of a family or hosting-centric couple. Their budget sits in the €3K to €8K mid-premium comfort zone. They want something premium but not an extravagant luxury spend. Their job to be done is clear: create a garden centerpiece that makes hosting effortless and earns compliments.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What Customers Value</h4>
                        <p style={{ lineHeight: '1.5' }}>
                            Outdoor kitchen buyers seek three value dimensions. Functional durability ensures products withstand outdoor weather for years. Aesthetic integration makes the kitchen a central design element in the garden. Emotional value delivers hosting satisfaction, pride of ownership, and lifestyle identity.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price Psychology and Willingness to Pay</h4>
                        <p style={{ lineHeight: '1.5' }}>
                            Willingness to pay is constrained by comparison to indoor kitchens. For most households, an outdoor kitchen is discretionary and cannot justify the same investment as an indoor renovation. Customers mentally anchor to their indoor kitchen price and apply a discount for lower usage frequency. The key objection is always whether the investment is worth it for seasonal use. The answer lies in reassurance through durability, long lifespan, and pride of ownership. This dynamic creates a natural price ceiling: most buyers will not exceed €3,000 to €8,000 unless they belong to the true luxury segment.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Acceptable Trade-Offs</h4>
                        <p style={{ lineHeight: '1.5' }}>
                            Customers accept trade-offs if design and durability remain strong. Reduced built-ins, self-installation, fewer drawers, and lower-touch service are acceptable compromises. Strong design, quality materials, and customization at a fair price are not negotiable. This trade-off logic aligns directly with Fieldsman's proposition: deliver what matters, eliminate what does not, and pass the savings to the customer.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-5)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-body)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Customer Journey: Digital-First with Physical Reassurance</h4>
                        <p style={{ lineHeight: '1.5' }}>
                            The Proud Host discovers brands through Instagram, Pinterest, search, and lifestyle content. They use visualization tools like configurators to explore options. However, for purchases in the €3,000 to €8,000 range, they often seek showroom reassurance before committing to a significant online purchase. Common concerns include uncertainty about durability, trust in making large online transactions, and limited access to physical showrooms. Scaling successfully requires a phygital model that combines digital acquisition with trust-building through content, reviews, influencers, and cost-efficient showroom access.
                        </p>
                    </div>
                </TextBlock>

                {/* 2.4 Visual: The Proud Host Empathy Map */}
                <ProudHostEmpathyMap />
            </PageWrapper>

            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>2.5 A Fragmented Market Without a Scaled Leader</h2>
                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p style={{ marginBottom: 'var(--space-4)', lineHeight: '1.6' }}>
                        Understanding the competitive landscape is essential for validating Fieldsman's positioning and identifying where sustainable differentiation is achievable. This section maps the market structure, benchmarks key competitors, and clarifies the strategic white space that Fieldsman aims to occupy. A comprehensive feature-by-feature competitor audit is available in <strong>Appendix D</strong>.
                    </p>
                    <p style={{ lineHeight: '1.6' }}>
                        The competitive landscape is fragmented and structurally polarized into five segments spanning from low budget to luxury. This polarization creates a clear gap in the market. In the Missing Middle, no scaled player has emerged to serve customers who want premium quality without luxury prices. Fieldsman's modular strategy is designed to capture this white space by combining premium design and durability with operational efficiency and accessible pricing.
                    </p>
                </TextBlock>

                {/* 2.5 Visual: Value Curve Analysis */}
                <ValueCurve />

                <TextBlock style={{ marginTop: 'var(--space-4)' }}>
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>Market Structure: Four Segments, One Gap</h3>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            The outdoor kitchen market is structurally polarized into four distinct segments, each with different competitive dynamics and customer expectations.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            <strong>The low budget segment (€0 to €2K)</strong> includes mass retailers like IKEA and Weber, alongside players such as Buitenkeukendeal, Boretti, and DIY solutions. These players score high on price accessibility and lead time but low on design quality, durability, and customization. They serve a fundamentally different customer need and anchor reference pricing in the broader market.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            <strong>The mid-premium segment (€3K to €8K)</strong> is where Fieldsman competes. Current players include MetaalEnzo, regional craftsmen, and small workshops. These businesses offer design focus and quality materials but suffer from structural limitations: constrained production capacity, inconsistent online experiences, and longer lead times due to manual processes. Crucially, no scaled European player has emerged in this segment. Every competitor operates as a small workshop or regional craftsman, unable to combine quality with volume.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            <strong>The premium segment (€10K to €20K)</strong> includes established brands such as Roostr, Novara, Life-Steel, Freiluft, OFYR, Otto Wilde, and Flammkraft. They deliver high design quality and durability but operate showroom-heavy models with corresponding price premiums and longer lead times.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            <strong>The luxury segment (€25K+)</strong> features players like COOXS Concepts, Röshults, and Anker. They offer fully bespoke designs and high-touch consultancy but serve a limited addressable market.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>The Missing Middle: A Structural Opportunity</h3>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            The value curve analysis reveals a clear strategic gap. In the mid-premium segment, customers seek premium design and durability but cannot justify luxury prices for seasonal outdoor use. Yet no competitor has built the operational infrastructure to serve this segment at scale.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            This gap exists because serving the Missing Middle requires a difficult combination: the design quality and durability of premium players, the lead times and online experience of mass retailers, and a price point that neither segment can profitably reach. Traditional workshops lack the capital and systems to scale. Premium brands are structurally committed to high-margin, low-volume models. And mass retailers have not prioritized this category.
                        </p>
                    </div>

                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', fontWeight: 700 }}>Potential Competitive Threats</h3>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            The absence of a scaled mid-premium player creates both opportunity and risk. Mass-market players like IKEA and Weber possess the operational infrastructure, brand recognition, and capital to enter this segment if they chose to prioritize it. IKEA's GRILLSKÄR range already signals interest in outdoor kitchens, though currently positioned in the low budget segment. A strategic decision by these players to move upmarket with improved materials and design could compress the window of opportunity.
                        </p>
                        <p style={{ marginBottom: 'var(--space-3)', lineHeight: '1.6' }}>
                            However, moving upmarket requires capabilities that mass retailers have historically struggled to develop: premium brand perception, design credibility, and the flexibility for customization. This transition would take years and significant investment, providing Fieldsman with a window to establish market position and brand equity.
                        </p>
                    </div>


                </TextBlock>
            </PageWrapper>

            <PageWrapper sectionLabel="SECTION 2: EXTERNAL ANALYSIS">
                <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>2.6 Industry Attractiveness: Room for a Challenger</h2>

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
                                <strong style={{ color: 'var(--color-neutral-900)' }}>The €301M Missing Middle Opportunity:</strong> A clear structural gap exists between low-budget mass retailers and luxury bespoke players. Fieldsman’s modular model is uniquely positioned to capture this segment by combining premium quality with operational volume.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>2</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Germany as the Anchor Market:</strong> International expansion is mandatory for scale. With €541M of the €754M total addressable market, Germany represents the primary driver for achieving European market leadership ambitions.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>3</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Phygital Trust-Building:</strong> "The Proud Host" discovers brands digitally but requires physical reassurance for high-ticket purchases (€3K-€8K). Success depends on a "phygital" model that pairs online excellence with cost-efficient showroom access.
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <div style={{ minWidth: '16px', height: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', fontSize: 'var(--font-size-small)', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>4</div>
                            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', lineHeight: '1.4', margin: 0 }}>
                                <strong style={{ color: 'var(--color-neutral-900)' }}>Strategic Window of Opportunity:</strong> While a genuine structural gap exists today, mass-market players (e.g., IKEA) represent potential upmarket threats. Speed to scale and brand equity are critical to defending the "Missing Middle" before incumbents respond.
                            </p>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
