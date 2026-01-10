'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

export default function IntroductionSection() {
    return (
        <>
            {/* 
        PAGE 1: Introduction Start
        Contains: Main Intro + 1.1 Company Background + 1.2 Scaling Dilemma
      */}
            <PageWrapper sectionLabel="SECTION 1: INTRODUCTION">
                {/* Main Intro Text */}
                <div style={{ marginBottom: 'var(--space-8)', fontSize: '18px', fontWeight: 500, color: 'var(--color-primary-main)' }}>
                    <p>
                        Fieldsman has a problem most startups would envy: it stops advertising every May, not because demand weakens, but because it cannot produce enough kitchens to meet it. This capstone addresses how to solve that constraint and scale the company into a European market leader.
                    </p>
                </div>

                <div className="grid-container">
                    {/* Left Column: 1.1 Company Background */}
                    <div className="col-6">
                        <h2 style={{ fontSize: '20px', marginBottom: 'var(--space-4)' }}>
                            1.1 Company Background: Three Brothers, One Gap in the Market
                        </h2>
                        <TextBlock>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Fieldsman is a direct-to-consumer outdoor kitchen company founded by three brothers: Raymon Veldman, Jurrian Veldman, and Herald Veldman. The company designs and sells modular outdoor kitchens that enable customers to configure a personalized kitchen at a price point significantly more accessible than traditional premium brands.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Fieldsman's positioning addresses a clear gap in the market. At the low end, outdoor kitchens are often non-customizable and built with low-durability materials. At the high end, premium solutions cost between €10,000 and €50,000, out of reach for most households. In between lies the "Missing Middle": customers who want premium design and durability but will not pay luxury prices. Fieldsman targets this gap with high-quality materials, modular customization, and strong design aesthetics at a mid-premium price, enabled by a direct-to-consumer model and controlled product complexity.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                The company is currently operated part-time alongside the founders' professional activities, supported by approximately 3–5 part-time employees. Despite this setup, Fieldsman has demonstrated clear market traction: approximately 50 kitchens per year, generating around €200K in revenue and €80K in profit, on less than €5,000 in advertising spend. These results indicate strong product-market fit and a margin structure that can fund growth.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                However, growth is constrained not by demand but by operational capacity. Fieldsman reduces marketing activity and stops advertising around May, even though demand continues to peak later in the season. This protects lead times and quality, but it also leaves significant revenue on the table.
                            </p>
                        </TextBlock>
                    </div>

                    {/* Right Column: 1.2 Scaling Dilemma */}
                    <div className="col-6">
                        <h2 style={{ fontSize: '20px', marginBottom: 'var(--space-4)' }}>
                            1.2 The Scaling Dilemma: Demand Exceeds Capacity
                        </h2>
                        <TextBlock>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                The European outdoor living market is expanding. Consumers increasingly invest in gardens, patios, and outdoor social spaces. Kamado cooking culture is growing beyond the Netherlands into Belgium and Germany, supporting a broader shift toward outdoor cooking as a lifestyle. These trends create a favorable window for a scalable, mid-premium outdoor kitchen brand.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Fieldsman's target customers are typically upper-middle-class households aged 30–60 who value hosting and social gatherings. Customer feedback consistently highlights the emotional value of the product, the "wow effect" and pride of ownership, as a major purchase driver.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                At the same time, willingness to pay differs from indoor kitchens. Customers view outdoor kitchens as complementary purchases, not primary investments. They accept trade-offs: fewer built-in features, self-installation, lower service levels, provided the product delivers strong design, quality, and customization at a fair price. This trade-off logic is central to Fieldsman's positioning and explains why a well-designed mid-premium proposition can scale.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                The strategic challenge is clear: scale Fieldsman into a national leader and international challenger while preserving brand equity and operational control. This requires overcoming two bottlenecks. First, steel frame production limits capacity. Second, ceramic countertops, currently outsourced, cost approximately €900 per kitchen with lead times of 8 weeks. Together, these constraints cap annual production and prevent sustained marketing investment.
                            </p>
                        </TextBlock>
                    </div>
                </div>
            </PageWrapper>

            {/* 
        PAGE 2: Strategy & Scope
        Contains: 1.3 Strategic Question + 1.4 Scope
      */}
            <PageWrapper sectionLabel="SECTION 1: INTRODUCTION">
                <div className="grid-container">
                    {/* Top Half: 1.3 Strategic Question */}
                    <div className="col-12" style={{ marginBottom: 'var(--space-10)' }}>
                        <h2 style={{ marginBottom: 'var(--space-4)' }}>
                            1.3 Strategic Question and Objectives
                        </h2>

                        <div style={{
                            background: 'var(--color-primary-background)',
                            padding: 'var(--space-6)',
                            borderRadius: 'var(--border-radius-md)',
                            borderLeft: '4px solid var(--color-primary-main)',
                            marginBottom: 'var(--space-6)'
                        }}>
                            {/* Highlight the key strategic question */}
                            <p style={{ marginBottom: 'var(--space-2)' }}>
                                This capstone addresses a single strategic question:
                            </p>
                            <p style={{ fontWeight: 700, fontSize: '16px', color: 'var(--color-primary-main)' }}>
                                What go-to-market and production model will allow Fieldsman to scale nationally and expand internationally within five years, while preserving its brand equity and operational control?
                            </p>
                        </div>

                        <TextBlock columns={2}>
                            <p>To answer this question, the report pursues four objectives:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                <li style={{ marginBottom: '8px' }}>Assess the market opportunity for a mid-premium outdoor kitchen proposition in the Netherlands, Belgium, and Germany.</li>
                                <li style={{ marginBottom: '8px' }}>Clarify Fieldsman's competitive positioning and the customer value drivers that differentiate it from low-end and high-end competitors.</li>
                                <li style={{ marginBottom: '8px' }}>Evaluate strategic options for scaling and select the most viable approach.</li>
                                <li style={{ marginBottom: '8px' }}>Translate the chosen strategy into an action plan with milestones, KPIs, risks, and funding requirements.</li>
                            </ul>
                        </TextBlock>
                    </div>

                    {/* Bottom Half: 1.4 Scope */}
                    <div className="col-12">
                        <div style={{ borderTop: '1px solid var(--color-neutral-300)', paddingTop: 'var(--space-8)' }}>
                            <h2 style={{ marginBottom: 'var(--space-4)' }}>
                                1.4 Scope and Structure
                            </h2>
                            <TextBlock columns={2}>
                                <p>
                                    This capstone focuses on the period 2026–2030. The Netherlands is the base market for accelerated scaling; Germany and Belgium are priority markets for international expansion from 2027.
                                </p>
                                <p>The report is structured as follows:</p>
                                <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 2</strong> analyzes the external environment: market dynamics, customer behavior, competition, and key success factors.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 3</strong> assesses Fieldsman's internal capabilities and constraints.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 4</strong> presents strategic options and the decision rationale.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 5</strong> outlines the required transformations and implementation roadmap.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 6</strong> details the action plan with milestones and KPIs.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 7</strong> presents financial and extra-financial impact.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 8</strong> covers risks and sensitivity analysis.</li>
                                    <li style={{ marginBottom: '4px' }}><strong>Chapter 9</strong> concludes with the recommended path and immediate next steps.</li>
                                </ul>
                            </TextBlock>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </>
    );
}
