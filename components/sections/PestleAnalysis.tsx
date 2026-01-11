'use client';

import React from 'react';

export default function PestleAnalysis() {

    const SectionHeader = ({ title }: { title: string }) => (
        <div style={{
            borderBottom: '2px solid var(--color-primary)',
            paddingBottom: '4px',
            marginBottom: '8px',
            marginTop: '16px'
        }}>
            <h3 style={{
                fontSize: '14px',
                fontWeight: 800,
                color: 'var(--color-primary)',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>{title}</h3>
        </div>
    );

    const SubSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
        <div style={{ marginBottom: '8px' }}>
            <h4 style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-neutral-800)', marginBottom: '2px' }}>{title}</h4>
            <div style={{ fontSize: '10px', lineHeight: '1.5', color: 'var(--color-neutral-700)' }}>
                {children}
            </div>
        </div>
    );

    const PestleTable = ({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) => (
        <div style={{ marginTop: '8px', marginBottom: '16px', overflowX: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9.5px' }}>
                <thead>
                    <tr>
                        {headers.map((h, i) => (
                            <th key={i} style={{
                                textAlign: 'left',
                                padding: '6px 8px',
                                background: 'var(--color-neutral-50)',
                                borderBottom: '2px solid var(--color-primary)',
                                fontWeight: 700,
                                color: 'var(--color-primary)'
                            }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            {row.map((cell, j) => (
                                <td key={j} style={{ padding: '6px 8px', verticalAlign: 'top', color: 'var(--color-neutral-700)' }}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="pestle-analysis">
            <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: 'var(--space-4)', color: 'var(--color-neutral-900)' }}>Appendix A: Strategic PESTLE Analysis</h2>

            <p style={{ fontSize: '10px', color: 'var(--color-neutral-700)', marginBottom: '16px', lineHeight: '1.5' }}>
                The luxury outdoor kitchen market in the Netherlands, Germany, and Belgium represents a sophisticated intersection of architectural innovation and shifting domestic lifestyles. For Fieldsman, operating on a vertically integrated manufacturing platform, the landscape offers significant opportunities tempered by complex regulatory and logistics challenges. This analysis identifies the macro-environmental factors shaping the production-led scaling strategy.
            </p>

            {/* POLITICAL & LEGAL */}
            <SectionHeader title="Political & Legal Factors" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <SubSection title="EU Customs Reform (July 2026)">
                        Removal of de minimis exemptions for low-value imports introduces a structural barrier against non-EU budget platforms, reinforcing the "Made in Europe" domestic advantage.
                    </SubSection>
                    <SubSection title="Omgevingswet (Jan 1, 2024)">
                        Dutch unified planning law clarifies permit-free building zones but maintains strict height limits for structures within 4m of a residence.
                    </SubSection>
                </div>
                <div>
                    <SubSection title="Gas Safety & Compliance">
                        Regulation (EU) 2016/426 mandates CE marking for gas appliances. Fieldsman's integration of pre-certified OEM components ensures regional compliance.
                    </SubSection>
                    <SubSection title="Incentives & VAT">
                        Belgium's 6% VAT rate for renovation incentivizes home upgrades, providing a tailwind for outdoor kitchen installations during housing slowdowns.
                    </SubSection>
                </div>
            </div>

            <PestleTable
                headers={['Factor', 'Event/Act', 'Strategic Impact']}
                rows={[
                    ['Trade Policy', 'De Minimis Removal (2026)', 'Protects domestic manufacturing from low-cost non-EU imports.'],
                    ['Planning Law', 'Omgevingswet (NL)', 'Modular designs ensure "permit-free" compliance for homeowners.'],
                    ['Consumer Rights', 'EU E-Commerce Directive', 'D2C returns policy must be robust (14-day right; no geo-blocking).'],
                    ['Compliance', 'CE Marking (EU 2016/426)', 'Strict liability for retailers; requires rigid vendor verification.']
                ]}
            />

            {/* ECONOMIC & SOCIAL */}
            <SectionHeader title="Economic & Social Drivers" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <SubSection title="Renovation Resilience">
                        Slumping new construction in Germany (est. -35% by 2026) drives investment into existing home "sanctuaries," benefiting the high-ticket outdoor lived-in garden segment.
                    </SubSection>
                    <SubSection title="The 'Outdoor Room' Concept">
                        Societal shift toward biophilic design and "cocooning" transforms backyards into functional culinary and wellness units.
                    </SubSection>
                </div>
                <div>
                    <SubSection title="Purchasing Power Asymmetry">
                        Gen X and Baby Boomers hold the highest discretionary capital, prioritizing durability and aesthetic integration over budget-oriented DIY solutions.
                    </SubSection>
                    <SubSection title="Social Cooking Trends">
                        Millennial demand for specialized appliances (pizza ovens, taps) drives modular flexibility requirements.
                    </SubSection>
                </div>
            </div>

            <PestleTable
                headers={['Metric/Trend', 'Context', 'Relevance to Fieldsman']}
                rows={[
                    ['splurge Behavior', 'Baby Boomer / Gen X spending', 'Willingness to spend >€5,000 on durable garden assets.'],
                    ['Cocooning', 'Home as sanctuary', 'Drives demand for professional-grade outdoor culinary hubs.'],
                    ['Construction Slump', 'New builds declining in GE/NL', 'Increases addressable renovation market for outdoor living.'],
                    ['Logistics', 'Digital LTL Shipping Hubs', 'Optimized freight networks reduce empty loads and D2C delivery overhead.']
                ]}
            />

            {/* TECHNOLOGICAL & ENVIRONMENTAL */}
            <SectionHeader title="Technological & Environmental Factors" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                    <SubSection title="Material Science Leads">
                        Superior performance of Particle Sintered Stone (Dekton) over traditional granite provides zero porosity and extreme UV/thermal stability.
                    </SubSection>
                    <SubSection title="Digital Customer Journey">
                        3D configurators and AR visualization reduce sales friction and customization errors for complex modular systems.
                    </SubSection>
                </div>
                <div>
                    <SubSection title="Circular Economy">
                        High recyclability of marine-grade aluminum and long lifecycles of HPL/polymer composites align with EU environmental mandates.
                    </SubSection>
                    <SubSection title="Climate Adaptation">
                        Warming trends extend the outdoor usage window into spring/autumn, driving demand for built-in heating and weather-resistant materials.
                    </SubSection>
                </div>
            </div>

            <PestleTable
                headers={['Category', 'Innovation/Factor', 'Long-term Benefit']}
                rows={[
                    ['Materials', 'Marine-Grade Aluminum / Dekton', 'Rust-proof durability in temperate climates; minimal ROI loss.'],
                    ['Sales Tech', '3D Configuration Tools', 'Scalable sales without physical showroom overhead.'],
                    ['Climate', 'Extended Usage Window', 'Built-in electrification supports year-round outdoor living.'],
                    ['Sustainability', 'Aluminum Recyclability', 'Aligns with future-state circular economy mandates.']
                ]}
            />

            {/* STRATEGIC SYNTHESIS */}
            <div style={{ borderTop: '1px solid var(--color-neutral-200)', paddingTop: '12px', marginTop: '12px' }}>
                <h4 style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: '4px', textTransform: 'uppercase' }}>Strategic Synthesis</h4>
                <p style={{ fontSize: '10px', lineHeight: '1.5', color: 'var(--color-neutral-700)', margin: 0 }}>
                    Success depends on navigating the convergence of the "outdoor room" trend and high-performance material standards. Fieldsman’s D2C model and vertical integration offer a hedge against economic volatility and construction downturns. Strategic focus should remain on localized "Made in Europe" quality to leverage customs protections, while utilizing digital configuration tools to bypass traditional retail barriers and logistic overheads.
                </p>
            </div>

            <style jsx>{`
                .pestle-analysis {
                    font-family: var(--font-body);
                }
            `}</style>
        </div>
    );
}
