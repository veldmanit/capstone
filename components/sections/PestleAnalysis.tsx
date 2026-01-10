'use client';

import React from 'react';

export default function PestleAnalysis() {

    const SectionHeader = ({ title }: { title: string }) => (
        <div style={{
            borderBottom: '2px solid var(--color-primary)',
            paddingBottom: '8px',
            marginBottom: '16px',
            marginTop: '32px'
        }}>
            <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--color-primary)',
                margin: 0,
                textTransform: 'uppercase'
            }}>{title}</h3>
        </div>
    );

    const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-neutral-800)', marginBottom: '4px' }}>{title}</h4>
            <div style={{ fontSize: '11px', lineHeight: '1.6', color: 'var(--color-neutral-700)' }}>
                {children}
            </div>
        </div>
    );

    const PestleTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
        <div style={{ marginTop: '12px', marginBottom: '24px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} style={{
                                textAlign: 'left',
                                padding: '8px',
                                background: 'var(--color-neutral-100)',
                                borderBottom: '2px solid var(--color-neutral-300)',
                                fontWeight: 700,
                                color: 'var(--color-neutral-800)'
                            }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            {row.map((cell, j) => (
                                <td key={j} style={{ padding: '8px', verticalAlign: 'top', color: 'var(--color-neutral-700)' }}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix A: Advanced Strategic PESTLE Analysis</h2>
            <div style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '24px' }}>
                <p>
                    The luxury outdoor kitchen market in the Netherlands, Germany, and Belgium represents a sophisticated intersection of architectural innovation, shifting domestic lifestyles, and a maturing direct-to-consumer economic model. For an enterprise such as Fieldsman.nl, which operates on a vertically integrated manufacturing and sales platform, the current landscape offers significant opportunities tempered by complex regulatory and macroeconomic challenges. The broader European outdoor kitchen market is poised for robust expansion, with projected revenues reaching US$ 13,967.3 million by 2033, sustained by a compound annual growth rate of 8.9%. This evolution is driven by a fundamental redefinition of the "home" from a purely interior living space to a holistic environment where the garden serves as a functional extension of the culinary and social heart of the residence.
                </p>
            </div>

            {/* POLITICAL */}
            <SectionHeader title="Political Landscape: Regulatory Harmonization & Protectionism" />
            <SubSection title="EU Customs Reform and the Domestic Advantage">
                A critical political shift affecting the competitive landscape is the European Commission’s aggressive move to eliminate de minimis exemptions for low-value imports. Historically, parcels valued below €150 entered the EU duty-free. The Council of the EU has agreed to remove this exemption, introducing a €3 customs duty per item starting in July 2026. This measure serves as a structural barrier against low-cost international competitors, reinforcing the value of localized "Made in Europe" manufacturing.
            </SubSection>
            <SubSection title="Logistics Policy and the Green Transition">
                Governments in Germany and the Netherlands are incentivizing the use of digital logistics hubs and LTL (Less than Truckload) shipping to reduce carbon emissions. Approximately 50% of heavy goods vehicles in Europe currently operate with empty loads, prompting political support for optimized freight shipping networks.
            </SubSection>
            <PestleTable
                headers={['Policy or Regulation', 'Effective Date', 'Geographical Scope', 'Strategic Impact for Fieldsman.nl']}
                rows={[
                    ['De Minimis Removal', 'July 2026', 'European Union', 'Reduces competition from non-EU budget platforms.'],
                    ['Union Handling Fee', 'November 2026', 'European Union', 'Increases operational costs for foreign importers.'],
                    ['Omgevingswet (Planning)', 'Jan 1, 2024', 'Netherlands', 'Simplifies but clarifies permit-free building zones.'],
                    ['6% VAT Rate (Renovation)', 'Current', 'Belgium', 'Incentivizes home upgrades over new builds.'],
                    ['Dutch Consignment Fee', 'Feb 1, 2026', 'Netherlands', 'Early-stage trade protectionism for domestic e-commerce.']
                ]}
            />

            {/* ECONOMIC */}
            <SectionHeader title="Economic Factors: Volatility & High-Ticket Consumption" />
            <SubSection title="The Construction Paradox and Renovation Resilience">
                The residential construction industry in Northern Europe is in flux. In Germany, completions are expected to drop to 175,000 dwellings in 2026. However, this slump has strengthened the renovation market. Homeowners unable to move are investing in existing homes. In Belgium, a reduced VAT rate of 6% for renovation provides a significant economic incentive.
            </SubSection>
            <SubSection title="Consumer Purchasing Power and the 'Splurge' Behavior">
                Despite economic pressures, 43% of German consumers plan to "treat themselves" with high-ticket purchases. 78% of Baby Boomers and 68% of Millennials are willing to spend more than $5,000 on an aesthetic outdoor space. Fieldsman.nl’s 30% saving model appeals to both the affluent "splurge" buyer and price-conscious segments.
            </SubSection>
            <PestleTable
                headers={['Economic Metric', 'Germany', 'Netherlands', 'Belgium']}
                rows={[
                    ['DIY Sector Sales Growth (2025)', '2.9% Rebound', 'Fragile Growth', 'Stable'],
                    ['Inflation Forecast (2025)', '~2.3%', '~2.3%', '~2.3%'],
                    ['Residential Construction Outlook', 'Significant Decline', 'Slight Recovery', 'Legislative Support'],
                    ['Consumer Confidence Indicator', 'Cautiously Optimistic', 'Mixed Sentiment', 'Impacted by Inflation']
                ]}
            />

            {/* SOCIAL */}
            <SectionHeader title="Social Determinants: The 'Outdoor Room' Evolution" />
            <SubSection title="The 'Nomadic Garden' and Domestic Sanctuary">
                The "Nomadic Garden" concept treats the backyard as a versatile living space with distinct "rooms." This reflects a societal move toward "cocooning," where the home is a sanctuary. Gardens now feature intimate reading nooks, breakfast terraces, and central social cooking hubs.
            </SubSection>
            <SubSection title="Generational Nuances & Wellness">
                Gen X holds the highest purchasing power for durable upgrades. Millennials drive social cooking trends (pizza ovens, beer taps). Boomers prioritize durability and warranties. Additionally, "wellness real estate" integrates biophilic design, transforming outdoor kitchens into health-conscious spaces.
            </SubSection>
            <PestleTable
                headers={['Social Trend', 'Target Demographic', 'Core Value Proposition']}
                rows={[
                    ['Nomadic Garden', 'Gen X / Millennials', 'Versatility, "Room" division, mobility.'],
                    ['Cocooning', 'Families', 'Safety, privacy, domestic sanctuary.'],
                    ['Biophilic Design', 'High-Net-Worth Individuals', 'Wellness, nature connection, stress reduction.'],
                    ['Social Cooking', 'Millennials', 'Professional-grade appliances, pizza ovens, beer taps.'],
                    ['Year-Round Living', 'All Generations', 'Built-in heating, weather-resistant materials.']
                ]}
            />

            {/* TECHNOLOGICAL */}
            <SectionHeader title="Technological Advancements: Digital Sales & Materials" />
            <SubSection title="Digital Transformation of the Customer Journey">
                3D configurators and AR tools allow users to visualize complex modular systems, reducing dissatisfaction and accelerating decisions. Social commerce (Instagram, TikTok) reshapes discovery for younger demographics.
            </SubSection>
            <SubSection title="Material Science: The Preeminence of Dekton">
                Dekton (particle sintering technology) offers zero porosity, UV stability, and thermal shock resistance, superior to traditional granite or quartz.
            </SubSection>
            <PestleTable
                headers={['Technology Category', 'Innovation', 'Key Functional Benefit']}
                rows={[
                    ['Sales Channel', '3D Configurator', 'Direct-to-consumer customization; reduced sales friction.'],
                    ['Surface Material', 'Particle Sintered Stone (Dekton)', 'UV stability, zero porosity, extreme heat resistance.'],
                    ['Cabinetry', 'Marine-Grade Aluminum', 'Rust-proof, lightweight, RAL color flexibility.'],
                    ['Connectivity', 'Wi-Fi/App Integration', 'Remote monitoring of grill temperatures and lighting.'],
                    ['Power', 'Integrated Electrification', 'Built-in sockets and USB charging ports for outdoor devices.']
                ]}
            />

            {/* LEGAL */}
            <SectionHeader title="Legal Requirements: Zoning, Safety, & Compliance" />
            <SubSection title="The Dutch Omgevingswet and Permit-Free Building">
                The Omgevingswet (Jan 1, 2024) unifies planning law but maintains strict criteria for permit-free building. Structures within 4m of the house are height-capped. Outbuildings &gt;4m away must have pitched roofs if over 3m high.
            </SubSection>
            <SubSection title="Gas Safety and European Regulation">
                Regulation (EU) 2016/426 mandates CE marking for gas appliances. Devices must have flame control to prevent leaks. Retailers are liable for compliance verification.
            </SubSection>
            <PestleTable
                headers={['Legal Domain', 'Regulatory Body/Act', 'Core Requirement']}
                rows={[
                    ['Planning (NL)', 'Omgevingswet', 'Max 5m height; functionally subordinate to house.'],
                    ['Gas Safety (EU)', 'Regulation (EU) 2016/426', 'Mandatory CE marking and type-examination.'],
                    ['Consumer Rights', 'E-Commerce Directive', '14-day return right; no geo-blocking.'],
                    ['Environment (BE)', 'Environmental Permit', 'Integrated permit for construction and existence.'],
                    ['Fire Safety (DE)', 'National Fire Regulations', 'Three-level framework for building safety.']
                ]}
            />

            {/* ENVIRONMENTAL */}
            <SectionHeader title="Environmental Impact: Sustainability & Climate" />
            <SubSection title="Circular Economy and Material Selection">
                Aluminum is favored for 100% recyclability. HPL and polymer composites resist rot, reducing replacement needs.
            </SubSection>
            <SubSection title="Climate Adaptation">
                Warming trends extend the "usage window" into spring/autumn, driving demand for built-in heating. Smart irrigation and rainwater harvesting are becoming standard for resource efficiency.
            </SubSection>
            <PestleTable
                headers={['Environmental Factor', 'Strategic Response', 'Long-term Benefit']}
                rows={[
                    ['Climate Change', 'Built-in heating and pergolas', 'Extended usage seasons and better comfort.'],
                    ['Resource Scarcity', 'Smart water management', 'Reduced water consumption in drought periods.'],
                    ['Waste Reduction', 'Recyclable aluminum/composites', 'Lower lifecycle impact and high durability.'],
                    ['Energy Poverty', 'Solar and LED lighting', 'Reduced household energy costs.'],
                    ['Overheating Risk', 'Bioclimatic structures', 'Maintainable living space during heatwaves.']
                ]}
            />

            {/* COMPETITIVE & STRATEGIC */}
            <div style={{ background: 'var(--color-neutral-50)', padding: '16px', borderRadius: '4px', border: '1px solid var(--color-neutral-200)', marginTop: '32px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '12px' }}>Competitive Dynamics & Strategic Synthesis</h3>

                <SubSection title="Competitor Positioning">
                    Bifurcated market: High-end bespoke German (Burnout, Cubic Outdoor) vs. Flexible Modular & Social (Wwoo, OFYR). Fieldsman.nl targets the "Strategic Sweet Spot": Premium quality with D2C economic efficiency.
                </SubSection>

                <SubSection title="Logistical Challenges">
                    Shipping bulky goods is the primary operational hurdle. Parcel delivery (NL-DE) costs €30-€70, while freight costs €250-€600+. Tailgate services and weight limits (&gt;68kg) require specialized handling.
                </SubSection>

                <div style={{ marginTop: '16px' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--color-primary-dark)' }}>Future Outlook</h4>
                    <p style={{ fontSize: '11px', lineHeight: '1.6', color: 'var(--color-neutral-700)' }}>
                        The market is transforming through the convergence of the "outdoor room" trend and high-performance materials like Dekton. Fieldsman.nl's D2C model and vertical integration offer a hedge against economic volatility and construction downturns. Success will depend on navigating the "wellness" agenda, integrating smart technology, and managing cross-border logistics costs while maintaining the price advantage that protects against de minimis removal and diverse competitor tiers.
                    </p>
                </div>
            </div>

        </div>
    );
}
