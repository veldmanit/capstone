'use client';

import React from 'react';

/**
 * MarketSizingMethodology
 * 
 * Appendix B: Comprehensive bottom-up market sizing methodology
 * for the outdoor kitchen opportunity in NL, BE, and Germany.
 */
interface MarketSizingMethodologyProps {
    part?: 1 | 2;
}

export default function MarketSizingMethodology({ part }: MarketSizingMethodologyProps) {
    const renderPart1 = !part || part === 1;
    const renderPart2 = !part || part === 2;

    return (
        <div className="methodology-content">
            {renderPart1 && (
                <>


                    {/* A.1 Introduction & Caveat */}
                    <section className="methodology-section">
                        <h3 className="section-title">B.1 Introduction &amp; Methodology Overview</h3>
                        <p>
                            This appendix documents the assumptions, data sources, and calculation logic underlying the TAM, SAM, and SOM
                            estimates presented in Chapter 2. Market sizing for an emerging product category like modular outdoor kitchens
                            involves inherent uncertainty, as comprehensive industry-level data (particularly for the €3,000–€8,000
                            "mass-premium" segment) remains limited. The methodology employed combines top-down market validation
                            (industry reports, comparable product categories) with bottom-up household-level modeling (demographic data,
                            income distributions, adoption rate proxies) to triangulate a defensible range.
                        </p>

                        <div style={{ margin: 'var(--space-4) 0', fontSize: '12px' }}>
                            <h4 style={{ fontSize: '12px', fontWeight: '800', color: '#92400E', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-2)' }}>Critical Caveat</h4>
                            <p style={{ color: '#78350F' }}>
                                The figures presented represent <strong>directional estimates</strong> rather than precise forecasts.
                                Market sizing in nascent categories requires multiple assumptions that compound uncertainty. We have
                                prioritized conservative assumptions at each stage to avoid overestimating addressable market size.
                                Where ranges exist in source data, we have selected mid-to-lower-bound figures. Actual market size
                                may vary by <strong>±30–50%</strong> depending on factors including: macroeconomic conditions,
                                competitive intensity, regulatory changes (e.g., outdoor cooking restrictions), and cultural adoption
                                rates that may differ from historical proxies.
                            </p>
                        </div>
                    </section>

                    {/* A.2 TAM Calculation */}
                    <section className="methodology-section">
                        <h3 className="section-title">B.2 TAM Calculation: Total Addressable Market</h3>
                        <p className="definition">
                            <strong>Definition:</strong> TAM represents the total annual revenue opportunity if Fieldsman could capture
                            100% of all outdoor kitchen purchases (across all price segments, all competitors) in Germany, Netherlands,
                            and Belgium.
                        </p>

                        {/* B.2.1 Household Base */}
                        <h4 className="subsection-title">B.2.1 Household Base Calculation</h4>
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <p><strong>Baseline households and growth projections</strong> (Official Statistics, 2024):</p>
                            <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Households (2024)</th>
                                            <th>Primary Data Source</th>
                                            <th>Ann. Growth*</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Germany</td>
                                            <td>41.0 million</td>
                                            <td>Statistisches Bundesamt (Projections)</td>
                                            <td>0.7%</td>
                                        </tr>
                                        <tr>
                                            <td>Netherlands</td>
                                            <td>8.4 million</td>
                                            <td>CBS (2024 Household Census)</td>
                                            <td>1.1%</td>
                                        </tr>
                                        <tr>
                                            <td>Belgium</td>
                                            <td>5.2 million</td>
                                            <td>Statbel (Official 2024 Data)</td>
                                            <td>0.8%</td>
                                        </tr>
                                        <tr className="total-row" style={{ background: 'var(--color-neutral-100)', fontWeight: 'bold' }}>
                                            <td><strong>Combined</strong></td>
                                            <td><strong>54.6 million</strong></td>
                                            <td><strong>Official Statistics Baseline</strong></td>
                                            <td><strong>0.9% (Avg)</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ marginTop: 'var(--space-2)', fontSize: '10px', color: 'var(--color-neutral-600)' }}>
                                * <strong>Annual household growth (0.9%):</strong> Composite average based on Eurostat 2024–2030 projections.
                                Reflects aging demographics in Germany offset by higher household formation in NL/Belgium.
                                Individual variations (GE: 0.7%, NL: 1.1%, BE: 0.8%) are immaterial over the projection window.
                            </p>
                        </div>

                        {/* B.2.2 Garden Ownership Filter */}
                        <h4 className="subsection-title">B.2.2 Garden Ownership Filter</h4>
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <p>
                                <strong>Garden ownership definition:</strong> Households in detached/semi-detached properties with private outdoor space.
                                <em> Excludes: apartments, terraced homes with &lt;20m² yards, and shared urban courtyards.</em>
                            </p>
                            <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Country</th>
                                            <th>Garden Ownership %</th>
                                            <th>Eligible Households</th>
                                            <th>Primary Data Source</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Germany</td>
                                            <td>48.0%</td>
                                            <td>19.68 million</td>
                                            <td>Destatis Housing Survey 2023</td>
                                        </tr>
                                        <tr>
                                            <td>Netherlands</td>
                                            <td>60.0%</td>
                                            <td>5.04 million</td>
                                            <td>WoON 2021 / CBS Housing Data</td>
                                        </tr>
                                        <tr>
                                            <td>Belgium</td>
                                            <td>51.9%</td>
                                            <td>2.70 million</td>
                                            <td>Statbel Housing Quality Survey 2022</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div style={{ margin: 'var(--space-4) 0', fontSize: '11px' }}>
                            <h5 style={{ fontSize: '11px', fontWeight: '700', color: 'var(--color-neutral-700)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 'var(--space-2)' }}>Rationale and Nuance</h5>
                            <p>
                                These percentages represent an upper bound on potential outdoor kitchen installations, as they include
                                all detached/semi-detached homes regardless of yard size or orientation. In reality, not all gardens
                                are suitable for outdoor kitchens due to:
                            </p>
                            <ul style={{ margin: 'var(--space-2) 0', paddingLeft: 'var(--space-4)' }}>
                                <li style={{ marginBottom: '4px' }}>Small yard dimensions (&lt;30m² total outdoor space)</li>
                                <li style={{ marginBottom: '4px' }}>North-facing yards with limited sun exposure</li>
                                <li style={{ marginBottom: '4px' }}>Properties with existing permanent structures occupying outdoor space</li>
                                <li style={{ marginBottom: '4px' }}>Rental properties where tenants cannot make permanent installations</li>
                            </ul>
                            <p style={{ marginTop: 'var(--space-2)' }}>
                                A more conservative filter would reduce garden-eligible households by 15–25%, but we retain the
                                broader definition for TAM calculation under the assumption that TAM should represent maximum
                                theoretical market size rather than immediately addressable households. The income and adoption
                                filters applied in SAM calculation account for practical constraints.
                            </p>
                        </div>



                        {/* B.2.3 Adoption Rate Estimation */}
                        <h4 className="subsection-title">B.2.3 Adoption Rate Estimation</h4>
                        <div style={{ marginBottom: 'var(--space-6)' }}>
                            <p><strong>Annual Adoption Rate Proxies & Projections:</strong></p>
                            <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Annual Rate %</th>
                                            <th>Context / Proxy Logic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Indoor Kitchen Reno</td>
                                            <td>2.0–3.5%</td>
                                            <td>Eurostat (Discretionary vs. Essential replacement)</td>
                                        </tr>
                                        <tr>
                                            <td>Outdoor Living (&gt;€1,000)</td>
                                            <td>8.0–12.0%</td>
                                            <td>GfK/Statista (Includes furniture, grills, pergolas)</td>
                                        </tr>
                                        <tr>
                                            <td>Premium Grills (€500–€2k)</td>
                                            <td>1.5–2.5%</td>
                                            <td>Weber/Napoleon (Closest high-end equipment proxy)</td>
                                        </tr>
                                        <tr className="total-row" style={{ background: 'var(--color-neutral-100)', fontWeight: 'bold' }}>
                                            <td><strong>Fieldsman Conservative Model</strong></td>
                                            <td><strong>0.30%–0.55%</strong></td>
                                            <td><strong>Gradual adoption as "outdoor room" concept normalizes</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p style={{ marginTop: 'var(--space-4)' }}><strong>Yearly Adoption Rate Projection Curve:</strong></p>
                            <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Year</th>
                                            <th>2025</th>
                                            <th>2026</th>
                                            <th>2027</th>
                                            <th>2028</th>
                                            <th>2029</th>
                                            <th>2030</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Assumed Rate</td>
                                            <td>0.30%</td>
                                            <td>0.35%</td>
                                            <td>0.40%</td>
                                            <td>0.45%</td>
                                            <td>0.50%</td>
                                            <td>0.55%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* B.2.4 TAM Summary Table */}
                        <h4 className="subsection-title">B.2.4 TAM Final Calculation (2030 Annual Opportunity)</h4>
                        <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Baseline Households</th>
                                        <th>Garden Ownership</th>
                                        <th>Maturity Adoption</th>
                                        <th>Average Price</th>
                                        <th>Annual TAM (€)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Germany</td>
                                        <td>41.0M</td>
                                        <td>48.0%</td>
                                        <td>0.55%</td>
                                        <td>€5,000</td>
                                        <td>€541.2M</td>
                                    </tr>
                                    <tr>
                                        <td>Netherlands</td>
                                        <td>8.4M</td>
                                        <td>60.0%</td>
                                        <td>0.55%</td>
                                        <td>€5,000</td>
                                        <td>€138.6M</td>
                                    </tr>
                                    <tr>
                                        <td>Belgium</td>
                                        <td>5.2M</td>
                                        <td>51.9%</td>
                                        <td>0.55%</td>
                                        <td>€5,000</td>
                                        <td>€74.2M</td>
                                    </tr>
                                    <tr className="total-row" style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 'bold' }}>
                                        <td><strong>Total</strong></td>
                                        <td><strong>54.6M</strong></td>
                                        <td><strong>50.2% (Avg)</strong></td>
                                        <td><strong>0.55%</strong></td>
                                        <td><strong>€5,000</strong></td>
                                        <td><strong>€754.0M</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                </>
            )}

            {renderPart2 && (
                <>
                    {/* Page Break for 2-Page Layout */}
                    <div style={{ pageBreakAfter: 'always', breakAfter: 'page' }} />

                    {/* B.3 Income Segmentation & SAM Calculation */}
                    <section className="methodology-section" style={{ breakBefore: 'page', pageBreakBefore: 'always' }}>
                        <h3 className="section-title">B.3 Target Segment Analysis &amp; SAM Filter</h3>
                        <p>
                            <strong>Definition:</strong> SAM represents the subset of TAM that falls within Fieldsman's target price
                            segment (€3,000–€8,000) and income capability (€50k–€150k households). Purchase behavior segments
                            naturally by household income across the focus regions.
                        </p>

                        <h4 className="subsection-title">B.3.1 Income Distribution Methodology</h4>
                        <div style={{ marginBottom: 'var(--space-4)', fontSize: '10px' }}>
                            <p>
                                <strong>Data Sources:</strong> Germany (SOEP/Destatis), Netherlands (CBS 2023), Belgium (Statbel EU-SILC).
                                Adjusted for dual-income households (60–75% of homeowners) and property-value premiums in garden-owning populations.
                            </p>
                        </div>

                        <h4 className="subsection-title">B.3.2 Segment analysis &amp; Regional Distribution</h4>
                        <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Segment</th>
                                        <th>Income Bracket</th>
                                        <th>DE %</th>
                                        <th>NL %</th>
                                        <th>BE %</th>
                                        <th>Adoption</th>
                                        <th>Purchase Behavior &amp; Rationale</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Low Budget</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>€0–€50k</td>
                                        <td>56.5%</td>
                                        <td>33.0%</td>
                                        <td>43.0%</td>
                                        <td>0.25%</td>
                                        <td>Price-sensitive, DIY-oriented. Entry-level solutions. Spend competes with essential expenses (childcare, vacations).</td>
                                    </tr>
                                    <tr style={{ border: '2px solid var(--color-primary)' }}>
                                        <td>Fieldsman Target</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>€50k–€150k</td>
                                        <td className="highlight">33.5%</td>
                                        <td className="highlight">53.0%</td>
                                        <td className="highlight">46.0%</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>0.31–0.50%</td>
                                        <td>Value-conscious, quality-seeking. High discretionary income post-mortgage. Strong alignment with staycation trends.</td>
                                    </tr>
                                    <tr>
                                        <td>Premium/Luxury</td>
                                        <td style={{ whiteSpace: 'nowrap' }}>€150k+</td>
                                        <td>10.0%</td>
                                        <td>14.0%</td>
                                        <td>11.0%</td>
                                        <td>0.42%</td>
                                        <td>Brand-conscious. Seeks bespoke design/white-glove service. Spend competes with other luxury upgrades (pools, wine cellars).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="subsection-title">B.3.3 SAM Regional Calculation (2030 Annual Opportunity)</h4>
                        <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Annual TAM (Units)</th>
                                        <th>Target Segment %</th>
                                        <th>Annual SAM (Units)</th>
                                        <th>Avg. ASP</th>
                                        <th>Annual SAM (€)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Germany</td>
                                        <td>112,940</td>
                                        <td>33.5%</td>
                                        <td>37,835</td>
                                        <td>€5,000</td>
                                        <td className="highlight">€189.2M</td>
                                    </tr>
                                    <tr>
                                        <td>Netherlands</td>
                                        <td>28,923</td>
                                        <td>53.0%</td>
                                        <td>15,329</td>
                                        <td>€5,000</td>
                                        <td className="highlight">€76.6M</td>
                                    </tr>
                                    <tr>
                                        <td>Belgium</td>
                                        <td>15,487</td>
                                        <td>46.0%</td>
                                        <td>7,124</td>
                                        <td>€5,000</td>
                                        <td className="highlight">€35.6M</td>
                                    </tr>
                                    <tr className="total-row" style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 'bold' }}>
                                        <td><strong>Total SAM</strong></td>
                                        <td><strong>157,350</strong></td>
                                        <td><strong>38.3% (Avg)</strong></td>
                                        <td><strong>60,288</strong></td>
                                        <td><strong>€5,000</strong></td>
                                        <td><strong>€301.4M</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ margin: 'var(--space-4) 0', fontSize: '10px' }}>
                            <h5 style={{ fontSize: '10px', fontWeight: '700', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 'var(--space-2)' }}>Calculation Logic &amp; Strategic Rationale</h5>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                <strong>SAM Formula:</strong> Garden Households × Income Filter (DE:33.5% / NL:53.0% / BE:46.0%) × Segment Adoption Rate × ASP
                            </p>
                            <p>
                                The <strong>€50k–€150k income filter</strong> is selected as the primary target for SOM because it aligns with
                                Fieldsman's core customer segments: value-conscious homeowners seeking quality without the complexity
                                of bespoke construction. Households below €50k are excluded from SAM as a purchase of ~€5,500 (~11% gross income)
                                is high, even with financing. Conversely, affluent households (&gt;€150k) are excluded to maintain
                                <strong> modular efficiency</strong>; these buyers typically demand high-touch modifications that conflict
                                with modular D2C scalability. By targeting the mid-to-high discretionary income bracket,
                                Fieldsman focuses on the segment where modular outdoor kitchens are seen as a high-value "staycation" upgrade
                                rather than a luxury modification or a DIY compromise.
                            </p>
                        </div>
                    </section>

                    {/* B.4 Market Share (SOM) */}
                    <section className="methodology-section">
                        <h3 className="section-title">B.4 Market Share (SOM): Fieldsman Target Capture</h3>
                        <p className="definition">
                            <strong>Definition:</strong> SOM represents Fieldsman's realistic revenue capture within SAM,
                            accounting for competitive intensity, brand awareness, distribution capacity, and operational constraints.
                        </p>

                        <h4 className="subsection-title">B.4.1 SOM Regional Targets (2030 Annual Opportunity)</h4>
                        <div className="table-container" style={{ margin: 'var(--space-2) 0' }}>
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>Annual SAM (Units)</th>
                                        <th>Target SOM %</th>
                                        <th>Target Units (2030)</th>
                                        <th>Avg. ASP</th>
                                        <th>Annual SOM (€)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Germany</td>
                                        <td>37,835</td>
                                        <td className="highlight">2.0%</td>
                                        <td>757</td>
                                        <td>€5,000</td>
                                        <td>€3.8M</td>
                                    </tr>
                                    <tr>
                                        <td>Netherlands</td>
                                        <td>15,329</td>
                                        <td className="highlight">8.0%</td>
                                        <td>1,226</td>
                                        <td>€5,000</td>
                                        <td>€6.1M</td>
                                    </tr>
                                    <tr>
                                        <td>Belgium</td>
                                        <td>7,124</td>
                                        <td className="highlight">2.0%</td>
                                        <td>142</td>
                                        <td>€5,000</td>
                                        <td>€0.7M</td>
                                    </tr>
                                    <tr className="total-row" style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 'bold' }}>
                                        <td><strong>Total SOM</strong></td>
                                        <td><strong>60,288</strong></td>
                                        <td><strong>3.5% (Avg)</strong></td>
                                        <td><strong>2,125</strong></td>
                                        <td><strong>€5,000</strong></td>
                                        <td><strong>€10.6M</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', margin: 'var(--space-4) 0' }}>
                            <div style={{ fontSize: '10px' }}>
                                <h5 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Netherlands (Home Market)</h5>
                                <p><strong>Trajectory:</strong> 0.5% (2025) → 8.0% (2030)</p>
                                <p><strong>Rationale:</strong> Established brand presence (50 units 2023–24); Digital infrastructure lead (3D configurator); Showroom partnerships with garden centers (Intratuin, GroenRijk) provide physical touchpoints without retail overhead.</p>
                                <p><strong>Scale:</strong> Represents 25x expansion from 2024 baseline, leveraging local testimonials and Google Shopping dominance.</p>
                            </div>
                            <div style={{ fontSize: '10px' }}>
                                <h5 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Belgium (Adjacent Market)</h5>
                                <p><strong>Trajectory:</strong> 0.0% (2025) → 2.0% (2030)</p>
                                <p><strong>Rationale:</strong> Proximity to NL logistics network; Flanders region receptivity; Focus on NL scale 2025–26 results in delayed entry.</p>
                                <p><strong>Constraint:</strong> 2% ceiling reflects stronger local/French competition and entry lag behind home market development.</p>
                            </div>
                            <div style={{ fontSize: '10px' }}>
                                <h5 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>Germany (Conservative Entry)</h5>
                                <p><strong>Trajectory:</strong> 0.0% (2025) → 2.0% (2030)</p>
                                <p><strong>Rationale:</strong> Intensely competitive with established local brands (Rösle, Grillzimmer); High CAC; Pilot launch 2027 in premium hubs (Hamburg, Munich, Düsseldorf).</p>
                                <p><strong>Logic:</strong> Delayed entry ensures Netherlands proof-of-concept is finalized before adapting to large, fragmented DE market.</p>
                            </div>
                        </div>

                        <div style={{ padding: 'var(--space-3)', background: 'var(--color-neutral-50)', borderRadius: 'var(--border-radius-sm)', borderLeft: '3px solid var(--color-primary)', fontSize: '10px' }}>
                            <h5 style={{ fontSize: '10px', fontWeight: '800', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>B.4.2 Justification for Market Share Differential</h5>
                            <p style={{ marginBottom: 'var(--space-2)' }}>
                                The 8% (NL) vs 2% (DE/BE) ceiling differential reflects <strong>home market advantage effects</strong> (Zaheer, 1995).
                            </p>
                            <ul style={{ margin: 0, paddingLeft: 'var(--space-4)' }}>
                                <li><strong>Brand Awareness Asymmetry:</strong> NL benefits from local word-of-mouth and SEO dominance for Dutch search terms.</li>
                                <li><strong>Operational Efficiency:</strong> Lower logistics costs and faster native-language support in home territory.</li>
                                <li><strong>First-Mover Advantage:</strong> Fieldsman captures early demand in NL, while entry into DE/BE occurs 2-3 years later against established incumbents.</li>
                            </ul>
                        </div>
                    </section>

                    {/* B.5 Top-Down Validation */}
                    <section className="methodology-section">
                        <h3 className="section-title">B.5 Top-Down Validation: Industry Triangulation</h3>
                        <div style={{ fontSize: '10px' }}>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                To validate our bottom-up household model, we triangulated against industry-level data from <strong>Grand View Research's 2024 European Outdoor Kitchen Market Report</strong>.
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                The report estimates the European outdoor kitchen equipment market at <strong>USD 6,580 million (€6,267M at 1.05 exchange rate)</strong> in 2024, projected to grow at 8.9% CAGR through 2033. Germany represents 21.1% market share, Netherlands 4.5%, and Belgium 2.5%, totaling 28.1% or approximately <strong>€1,761M annual revenue</strong> for our three target countries combined. This represents the total addressable market across all price segments (entry-level DIY, mass-premium, and luxury custom).
                            </p>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                                Our bottom-up TAM calculation yields <strong>€754M for 2030</strong> (Germany €541M, Netherlands €139M, Belgium €74M)—representing <strong>43% of the top-down industry estimate</strong>.
                            </p>
                            <p style={{ margin: 0 }}>
                                This variance is intentional and reflects our <strong>conservative definition of TAM</strong>: we model only new residential installations (complete outdoor kitchen systems), while the Grand View figure includes replacement parts, standalone accessories (grills, refrigerators sold separately), commercial installations (restaurants, hotels), and aftermarket upgrades. Our €754M represents the annual market for <strong>integrated outdoor kitchen purchases by residential homeowners</strong>—the specific opportunity Fieldsman addresses—rather than the broader "outdoor cooking equipment" category. This conservative scoping avoids overestimating addressable market size and ensures our TAM reflects actual system-level purchases rather than fragmented component sales.
                            </p>
                        </div>
                    </section>

                </>
            )}

            <style jsx>{`
                .methodology-content {
                    font-family: var(--font-body);
                    line-height: 1.6;
                    color: var(--color-neutral-800);
                }

                .appendix-title {
                    font-size: 24px;
                    font-weight: 800;
                    color: var(--color-neutral-900);
                    margin-bottom: var(--space-6);
                    padding-bottom: var(--space-2);
                    border-bottom: 3px solid var(--color-primary);
                }

                .methodology-section {
                    margin-bottom: var(--space-8);
                }

                .section-title {
                    font-size: 18px;
                    font-weight: 800;
                    color: var(--color-neutral-900);
                    margin-bottom: var(--space-4);
                    padding-bottom: var(--space-2);
                    border-bottom: 2px solid var(--color-neutral-200);
                }

                .subsection-title {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--color-primary);
                    margin-top: var(--space-4);
                    margin-bottom: var(--space-2);
                }

                .definition {
                    background: var(--color-neutral-50);
                    padding: var(--space-2) var(--space-3);
                    border-left: 3px solid var(--color-primary);
                    margin-bottom: var(--space-3);
                    font-size: 11px;
                }

                .caveat-box {
                    background: #FEF3C7;
                    border: 1px solid #F59E0B;
                    border-radius: var(--border-radius-md);
                    padding: var(--space-4);
                    margin: var(--space-4) 0;
                }

                .caveat-box h4 {
                    color: #92400E;
                    font-size: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: var(--space-2);
                }

                .caveat-box p {
                    font-size: 11px;
                    color: #78350F;
                    margin: 0;
                }

                .data-sources, .assumptions-box, .rationale-box, .scenario-box, 
                .nuance-box, .sensitivity-box, .justification-box, .formula-box {
                    background: var(--color-neutral-50);
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    padding: var(--space-3);
                    margin: var(--space-3) 0;
                    font-size: 11px;
                }

                .data-sources h5, .assumptions-box h5, .rationale-box h5, 
                .scenario-box h5, .nuance-box h5, .sensitivity-box h5,
                .justification-box h5, .formula-box h5 {
                    font-size: 11px;
                    font-weight: 700;
                    color: var(--color-neutral-700);
                    margin-bottom: var(--space-2);
                    text-transform: uppercase;
                    letter-spacing: 0.03em;
                }

                .data-sources ul, .assumptions-box ul, .rationale-box ul,
                .nuance-box ul, .sensitivity-box ul, .justification-box ul,
                .justification-box ol {
                    margin: var(--space-2) 0;
                    padding-left: var(--space-4);
                }

                .data-sources li, .assumptions-box li, .rationale-box li,
                .nuance-box li, .sensitivity-box li, .justification-box li {
                    margin-bottom: 4px;
                }

                .scenario-box {
                    background: #EFF6FF;
                    border-color: #3B82F6;
                }

                .nuance-box {
                    background: #F0FDF4;
                    border-color: #22C55E;
                }

                .sensitivity-box {
                    background: #FDF2F8;
                    border-color: #EC4899;
                }

                /* Segment boxes */
                .segment-box {
                    border-radius: var(--border-radius-md);
                    padding: var(--space-4);
                    margin: var(--space-4) 0;
                    font-size: 11px;
                }

                .segment-box h5 {
                    font-size: 12px;
                    font-weight: 700;
                    margin-bottom: var(--space-3);
                }

                .segment-box p {
                    margin-bottom: var(--space-2);
                }

                .segment-rationale {
                    background: rgba(255,255,255,0.6);
                    padding: var(--space-2);
                    border-radius: var(--border-radius-sm);
                    margin-top: var(--space-2);
                    font-style: italic;
                }

                .segment-low {
                    background: #F3F4F6;
                    border: 1px solid #9CA3AF;
                }

                .segment-target {
                    background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%);
                    border: 2px solid #10B981;
                }

                .segment-target h5 {
                    color: #047857;
                }

                .segment-premium {
                    background: #FEF3C7;
                    border: 1px solid #F59E0B;
                }

                /* Tables */
                .table-container {
                    margin: var(--space-4) 0;
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                }

                .table-container h5 {
                    background: var(--color-neutral-100);
                    padding: var(--space-2) var(--space-3);
                    margin: 0;
                    font-size: 11px;
                    font-weight: 700;
                    border-bottom: 1px solid var(--color-neutral-200);
                }

                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 9.5px;
                }

                .data-table th {
                    background: var(--color-neutral-50);
                    padding: 6px 10px;
                    text-align: left;
                    font-weight: 700;
                    border-bottom: 2px solid var(--color-primary);
                    color: var(--color-primary);
                }

                .data-table td {
                    padding: 6px 10px;
                    border-bottom: 1px solid var(--color-neutral-100);
                }

                .data-table td.highlight {
                    background: rgba(192, 178, 131, 0.2);
                    font-weight: 700;
                    color: var(--color-primary);
                }

                .formula-box {
                    background: var(--color-neutral-900);
                    color: white;
                    text-align: center;
                }

                .formula-box h5 {
                    color: var(--color-neutral-400);
                }

                .formula-box p {
                    font-family: monospace;
                    font-size: 12px;
                    margin: 0;
                }

                /* Exhibits */
                .exhibit-container {
                    margin: var(--space-4) 0;
                }

                .exhibit-container h5 {
                    font-size: 11px;
                    font-weight: 700;
                    color: var(--color-neutral-600);
                    margin-bottom: var(--space-2);
                }

                .exhibit-caption {
                    font-size: 9px;
                    color: var(--color-neutral-500);
                    font-style: italic;
                    margin-top: var(--space-2);
                }

                p {
                    font-size: 10px;
                    margin-bottom: var(--space-2);
                }

                ul, ol {
                    font-size: 10px;
                }
            `}</style>
        </div>
    );
}
