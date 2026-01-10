'use client';

import React from 'react';
import TextBlock from '@/components/content/TextBlock';

export default function MarketSizingMethodology() {
    return (
        <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix B: Market Sizing Methodology</h2>
            <h3 style={{ fontSize: '18px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>M2. Bottom-Up Approach</h3>

            <TextBlock>
                <p>
                    This section documents the bottom-up market sizing approach used to quantify the outdoor kitchen opportunity across the Netherlands, Belgium, and Germany.
                </p>

                <h4 style={{ fontSize: '14px', fontWeight: 700, marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>M2.1 Market Definition</h4>
                <p>
                    The outdoor kitchen market is defined as permanent or semi-permanent outdoor cooking and preparation units for residential households. The definition includes modular outdoor kitchens, built-in units, and cooking modules integrating kamado grills, gas grills, and pizza ovens.
                </p>
                <p style={{ fontSize: '11px', fontStyle: 'italic', color: 'var(--color-neutral-600)' }}>
                    Exclusions: Portable grills and BBQ carts (&lt;€500), masonry structures in large landscaping projects (&gt;€50,000), and indoor kitchen products not designed for outdoor durability.
                </p>

                <h4 style={{ fontSize: '14px', fontWeight: 700, marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>M2.2 TAM Calculation Logic</h4>
                <p>
                    TAM is calculated using a bottom-up household adoption model:
                </p>
                <div style={{
                    background: 'var(--color-neutral-100)',
                    padding: 'var(--space-3)',
                    borderRadius: '4px',
                    fontWeight: 700,
                    textAlign: 'center',
                    marginBottom: 'var(--space-4)'
                }}>
                    TAM (€) = Households × Garden Access % × Annual Adoption Rate × ASP
                </div>
            </TextBlock>

            {/* M2.3 Input Assumptions */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-3)' }}>M2.3 Input Assumptions by Country</h4>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Netherlands</th>
                                <th>Belgium</th>
                                <th>Germany</th>
                                <th>Source/Rationale</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Households</td>
                                <td>8.3M</td>
                                <td>4.9M</td>
                                <td>41.6M</td>
                                <td>CBS, Statbel, Destatis</td>
                            </tr>
                            <tr>
                                <td>Garden Access %</td>
                                <td>60%</td>
                                <td>62%</td>
                                <td>50%</td>
                                <td>Home ownership + estimates</td>
                            </tr>
                            <tr>
                                <td>Annual Adoption</td>
                                <td>0.24%</td>
                                <td>0.24%</td>
                                <td>0.29%</td>
                                <td>Conservative BBQ estimate</td>
                            </tr>
                            <tr>
                                <td>Blended ASP</td>
                                <td>€3,350</td>
                                <td>€3,350</td>
                                <td>€4,200</td>
                                <td>Competitor analysis</td>
                            </tr>
                            <tr className="calc-row">
                                <td>Units/Year</td>
                                <td>11,952</td>
                                <td>7,288</td>
                                <td>59,758</td>
                                <td>Calculated</td>
                            </tr>
                            <tr className="calc-row total-row">
                                <td>TAM</td>
                                <td>€40M</td>
                                <td>€24M</td>
                                <td>€251M</td>
                                <td>Calculated</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ fontSize: '10px', marginTop: '4px', textAlign: 'right', fontWeight: 700 }}>
                    Combined TAM (NL+BE+DE): €315M (78,998 units/year)
                </div>
            </div>

            {/* M2.4 SAM Calculation */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-3)' }}>M2.4 SAM Calculation (Mid-Premium Segment)</h4>
                <p style={{ fontSize: '11px', marginBottom: 'var(--space-2)' }}>
                    SAM represents the mid-premium segment (€2,000–€10,000) where Fieldsman competes. Based on competitor analysis, this represents 35% of TAM.
                </p>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Market</th>
                                <th>TAM</th>
                                <th>Mid-Premium Share</th>
                                <th>SAM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Netherlands</td>
                                <td>€40M</td>
                                <td>35%</td>
                                <td>€14M</td>
                            </tr>
                            <tr>
                                <td>Belgium</td>
                                <td>€24M</td>
                                <td>35%</td>
                                <td>€8M</td>
                            </tr>
                            <tr>
                                <td>Germany</td>
                                <td>€251M</td>
                                <td>35%</td>
                                <td>€88M</td>
                            </tr>
                            <tr className="total-row">
                                <td>Total</td>
                                <td>€315M</td>
                                <td>35%</td>
                                <td>€110M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* M2.5 SOM Calculation */}
            <div style={{ marginTop: 'var(--space-6)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-3)' }}>M2.5 SOM Calculation (Target 2030/2031)</h4>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Market</th>
                                <th>SAM</th>
                                <th>Target Share</th>
                                <th>SOM Revenue</th>
                                <th>SOM Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Netherlands</td>
                                <td>€14M</td>
                                <td>5–10%</td>
                                <td>€5–7M</td>
                                <td>500–600</td>
                            </tr>
                            <tr>
                                <td>Belgium</td>
                                <td>€8M</td>
                                <td>3–7%</td>
                                <td>€2–3M</td>
                                <td>200–300</td>
                            </tr>
                            <tr>
                                <td>Germany</td>
                                <td>€88M</td>
                                <td>2–5%</td>
                                <td>€15–25M</td>
                                <td>1,500–2,500</td>
                            </tr>
                            <tr className="total-row">
                                <td>Total</td>
                                <td>€110M</td>
                                <td>—</td>
                                <td>€22–35M</td>
                                <td>2,200–3,400</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <style jsx>{`
                .table-container {
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                }
                .data-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 10px;
                }
                .data-table th {
                    background: var(--color-neutral-100);
                    padding: 6px 8px;
                    text-align: left;
                    font-weight: 700;
                    border-bottom: 2px solid var(--color-neutral-200);
                }
                .data-table td {
                    padding: 6px 8px;
                    border-bottom: 1px solid var(--color-neutral-100);
                }
                .calc-row td {
                    background: var(--color-neutral-50);
                    font-weight: 500;
                }
                .total-row td {
                    background: var(--color-neutral-100);
                    font-weight: 800;
                    border-top: 2px solid var(--color-neutral-300);
                }
            `}</style>
        </div>
    );
}
