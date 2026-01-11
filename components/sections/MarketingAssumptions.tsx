'use client';

import React from 'react';

export default function MarketingAssumptions() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            fontSize: 'var(--font-size-small)',
            color: 'var(--color-neutral-800)',
            lineHeight: '1.3'
        }}>
            {/* Header */}
            <div style={{
                marginBottom: 'var(--space-3)',
                paddingBottom: 'var(--space-2)',
                borderBottom: '1px solid var(--color-primary)'
            }}>
                <h2 style={{
                    fontSize: 'var(--font-size-h3)',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    Appendix G: Detailed Marketing Strategy Assumptions
                </h2>
                <p style={{
                    margin: '2px 0 0 0',
                    fontSize: 'var(--font-size-small)',
                    color: 'var(--color-neutral-600)'
                }}>
                    Comprehensive breakdown of Traffic, Conversion, Ad Spend, and Strategic Costs (2025-2030)
                </p>
            </div>

            {/* SECTION 1: TRAFFIC ACQUISITION */}
            <div style={{ marginBottom: 'var(--space-3)' }}>
                <h3 style={{
                    fontSize: 'var(--font-size-h4)',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-neutral-100)',
                    padding: '3px 6px',
                    margin: '0 0 6px 0',
                    borderLeft: '2px solid var(--color-primary)',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <span>1. Anticipated Traffic & Channel Mix</span>
                    <span style={{ fontWeight: 400, color: 'var(--color-neutral-500)' }}>Visitors per Year</span>
                </h3>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                            <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)', width: '28%' }}>Channel</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2025</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2026</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2027</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2028</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2029</th>
                            <th style={{ textAlign: 'center', width: '12%', fontWeight: 700, color: 'var(--color-primary)' }}>2030</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '2px 4px', color: 'var(--color-neutral-600)' }}>Direct / Organic</td>
                            <td style={{ textAlign: 'center' }}>4,746</td>
                            <td style={{ textAlign: 'center' }}>14,527</td>
                            <td style={{ textAlign: 'center' }}>19,261</td>
                            <td style={{ textAlign: 'center' }}>29,966</td>
                            <td style={{ textAlign: 'center' }}>40,476</td>
                            <td style={{ textAlign: 'center' }}>53,059</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '2px 4px', color: 'var(--color-neutral-600)' }}>Social Organic</td>
                            <td style={{ textAlign: 'center' }}>2,064</td>
                            <td style={{ textAlign: 'center' }}>6,316</td>
                            <td style={{ textAlign: 'center' }}>8,375</td>
                            <td style={{ textAlign: 'center' }}>13,029</td>
                            <td style={{ textAlign: 'center' }}>17,598</td>
                            <td style={{ textAlign: 'center' }}>23,069</td>
                        </tr>
                        <tr style={{ background: 'rgba(74, 93, 35, 0.05)' }}>
                            <td style={{ padding: '2px 4px', fontWeight: 600 }}>Google Ads (Paid)</td>
                            <td style={{ textAlign: 'center' }}>3,996</td>
                            <td style={{ textAlign: 'center' }}>49,017</td>
                            <td style={{ textAlign: 'center' }}>129,974</td>
                            <td style={{ textAlign: 'center' }}>282,207</td>
                            <td style={{ textAlign: 'center' }}>434,523</td>
                            <td style={{ textAlign: 'center', fontWeight: 700 }}>616,156</td>
                        </tr>
                        <tr style={{ background: 'rgba(74, 93, 35, 0.05)' }}>
                            <td style={{ padding: '2px 4px', fontWeight: 600 }}>Social Paid (Meta)</td>
                            <td style={{ textAlign: 'center' }}>15,266</td>
                            <td style={{ textAlign: 'center' }}>170,112</td>
                            <td style={{ textAlign: 'center' }}>472,485</td>
                            <td style={{ textAlign: 'center' }}>1,028,957</td>
                            <td style={{ textAlign: 'center' }}>1,570,799</td>
                            <td style={{ textAlign: 'center', fontWeight: 700 }}>2,233,689</td>
                        </tr>
                        <tr style={{ background: 'rgba(74, 93, 35, 0.05)' }}>
                            <td style={{ padding: '2px 4px', fontWeight: 600 }}>Pinterest Paid</td>
                            <td style={{ textAlign: 'center' }}>0</td>
                            <td style={{ textAlign: 'center' }}>4,902</td>
                            <td style={{ textAlign: 'center' }}>19,496</td>
                            <td style={{ textAlign: 'center' }}>56,441</td>
                            <td style={{ textAlign: 'center' }}>108,631</td>
                            <td style={{ textAlign: 'center', fontWeight: 700 }}>154,039</td>
                        </tr>
                        <tr style={{ borderTop: '2px solid var(--color-neutral-200)', fontWeight: 700 }}>
                            <td style={{ padding: '2px 4px' }}>TOTAL TRAFFIC</td>
                            <td style={{ textAlign: 'center' }}>26,140</td>
                            <td style={{ textAlign: 'center' }}>245,085</td>
                            <td style={{ textAlign: 'center' }}>649,871</td>
                            <td style={{ textAlign: 'center' }}>1,411,033</td>
                            <td style={{ textAlign: 'center' }}>2,172,613</td>
                            <td style={{ textAlign: 'center' }}>3,080,781</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* SECTION 2: CONVERSION ECONOMICS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>

                {/* 2A: Conversion Rates */}
                <div>
                    <h3 style={{
                        fontSize: 'var(--font-size-h4)',
                        fontWeight: 700,
                        backgroundColor: 'var(--color-neutral-100)',
                        padding: '3px 6px',
                        margin: '0 0 6px 0',
                        borderLeft: '2px solid var(--color-primary)'
                    }}>
                        2. Conversion Rates by Channel
                    </h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                                <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)' }}>Metric</th>
                                <th style={{ textAlign: 'center' }}>2025</th>
                                <th style={{ textAlign: 'center' }}>2026-30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Organic / Direct</td>
                                <td style={{ textAlign: 'center' }}>0.20%</td>
                                <td style={{ textAlign: 'center' }}>0.20%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Google Ads</td>
                                <td style={{ textAlign: 'center' }}>0.20%</td>
                                <td style={{ textAlign: 'center' }}>0.15%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Social Paid (FB/IG)</td>
                                <td style={{ textAlign: 'center' }}>0.12%</td>
                                <td style={{ textAlign: 'center' }}>0.04%</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Pinterest</td>
                                <td style={{ textAlign: 'center' }}>0.10%</td>
                                <td style={{ textAlign: 'center' }}>0.10%</td>
                            </tr>
                            <tr style={{ background: 'var(--color-neutral-50)', fontWeight: 700, borderTop: '1px solid var(--color-neutral-200)' }}>
                                <td style={{ padding: '2px 4px' }}>Blended Rate</td>
                                <td style={{ textAlign: 'center' }}>0.15%</td>
                                <td style={{ textAlign: 'center' }}>0.07%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 2B: Paid Growth Efficiency (CPC) */}
                <div>
                    <h3 style={{
                        fontSize: 'var(--font-size-h4)',
                        fontWeight: 700,
                        backgroundColor: 'var(--color-neutral-100)',
                        padding: '3px 6px',
                        margin: '0 0 6px 0',
                        borderLeft: '2px solid var(--color-primary)'
                    }}>
                        3. CPC Assumptions
                    </h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                                <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)' }}>Platform</th>
                                <th style={{ textAlign: 'center' }}>2025</th>
                                <th style={{ textAlign: 'center' }}>2026-30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Google Ads</td>
                                <td style={{ textAlign: 'center' }}>€0.74</td>
                                <td style={{ textAlign: 'center' }}>€0.75</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Social (Meta)</td>
                                <td style={{ textAlign: 'center' }}>€0.25</td>
                                <td style={{ textAlign: 'center' }}>€0.50</td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 4px' }}>Pinterest</td>
                                <td style={{ textAlign: 'center' }}>€0.50</td>
                                <td style={{ textAlign: 'center' }}>€0.50</td>
                            </tr>
                            <tr style={{ fontStyle: 'italic', color: 'var(--color-neutral-500)' }}>
                                <td style={{ padding: '2px 4px' }}>Inflation Driver</td>
                                <td style={{ textAlign: 'center' }}>1.00</td>
                                <td style={{ textAlign: 'center' }}>+2% / yr</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SECTION 4: BUDGET & COSTS */}
            <h3 style={{
                fontSize: 'var(--font-size-h4)',
                fontWeight: 700,
                backgroundColor: 'var(--color-neutral-100)',
                padding: '3px 6px',
                margin: '0 0 6px 0',
                borderLeft: '2px solid var(--color-primary)'
            }}>
                4. Marketing Budget & Cost Structure
            </h3>

            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 'var(--space-3)' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                        <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)' }}>Cost Item</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2025</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2026</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2027</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2028</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2029</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2030</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '2px 4px' }}>Google Ads Spend</td>
                        <td style={{ textAlign: 'center' }}>€2,949</td>
                        <td style={{ textAlign: 'center' }}>€36,763</td>
                        <td style={{ textAlign: 'center' }}>€97,481</td>
                        <td style={{ textAlign: 'center' }}>€211,655</td>
                        <td style={{ textAlign: 'center' }}>€325,892</td>
                        <td style={{ textAlign: 'center' }}>€462,117</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '2px 4px' }}>Social Paid Spend</td>
                        <td style={{ textAlign: 'center' }}>€3,816</td>
                        <td style={{ textAlign: 'center' }}>€85,056</td>
                        <td style={{ textAlign: 'center' }}>€236,243</td>
                        <td style={{ textAlign: 'center' }}>€514,478</td>
                        <td style={{ textAlign: 'center' }}>€785,399</td>
                        <td style={{ textAlign: 'center' }}>€1,116,845</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '2px 4px' }}>Pinterest Spend</td>
                        <td style={{ textAlign: 'center' }}>€0</td>
                        <td style={{ textAlign: 'center' }}>€2,451</td>
                        <td style={{ textAlign: 'center' }}>€9,748</td>
                        <td style={{ textAlign: 'center' }}>€28,221</td>
                        <td style={{ textAlign: 'center' }}>€54,315</td>
                        <td style={{ textAlign: 'center' }}>€77,020</td>
                    </tr>
                    <tr style={{ fontWeight: 700, background: 'rgba(220, 38, 38, 0.05)' }}>
                        <td style={{ padding: '2px 4px', color: '#991B1B' }}>TOTAL AD SPEND</td>
                        <td style={{ textAlign: 'center' }}>€6,765</td>
                        <td style={{ textAlign: 'center' }}>€124,270</td>
                        <td style={{ textAlign: 'center' }}>€343,471</td>
                        <td style={{ textAlign: 'center' }}>€754,364</td>
                        <td style={{ textAlign: 'center' }}>€1,165,607</td>
                        <td style={{ textAlign: 'center' }}>€1,655,981</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '2px 4px', fontStyle: 'italic', color: 'var(--color-neutral-600)' }}>ROAS</td>
                        <td style={{ textAlign: 'center' }}>25.2</td>
                        <td style={{ textAlign: 'center' }}>6.6</td>
                        <td style={{ textAlign: 'center' }}>5.9</td>
                        <td style={{ textAlign: 'center' }}>5.9</td>
                        <td style={{ textAlign: 'center' }}>5.9</td>
                        <td style={{ textAlign: 'center' }}>6.0</td>
                    </tr>
                </tbody>
            </table>

            {/* SECTION 5: OTHER MARKTEING */}
            <h3 style={{
                fontSize: 'var(--font-size-h4)',
                fontWeight: 700,
                backgroundColor: 'var(--color-neutral-100)',
                padding: '3px 6px',
                margin: '0 0 6px 0',
                borderLeft: '2px solid var(--color-primary)'
            }}>
                5. Other Marketing (Influencers, Events, SEO)
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 'var(--space-3)' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-neutral-200)' }}>
                        <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)', width: '28%' }}>Item</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2025</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2026</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2027</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2028</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2029</th>
                        <th style={{ textAlign: 'center', width: '12%' }}>2030</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '2px 4px' }}>Cost per Unit Sold</td>
                        <td style={{ textAlign: 'center' }}>€75.00</td>
                        <td style={{ textAlign: 'center' }}>€76.50</td>
                        <td style={{ textAlign: 'center' }}>€78.03</td>
                        <td style={{ textAlign: 'center' }}>€79.59</td>
                        <td style={{ textAlign: 'center' }}>€81.18</td>
                        <td style={{ textAlign: 'center' }}>€82.81</td>
                    </tr>
                    <tr style={{ fontWeight: 700, background: 'rgba(220, 38, 38, 0.05)' }}>
                        <td style={{ padding: '2px 4px', color: '#991B1B' }}>TOTAL OTHER MKTG</td>
                        <td style={{ textAlign: 'center' }}>€3,005</td>
                        <td style={{ textAlign: 'center' }}>€14,426</td>
                        <td style={{ textAlign: 'center' }}>€35,838</td>
                        <td style={{ textAlign: 'center' }}>€77,855</td>
                        <td style={{ textAlign: 'center' }}>€122,265</td>
                        <td style={{ textAlign: 'center' }}>€176,008</td>
                    </tr>
                </tbody>
            </table>

            {/* SECTION 6: SHOWROOMS */}
            <div style={{
                marginTop: 'var(--space-2)',
                paddingTop: 'var(--space-2)',
                borderTop: '1px solid var(--color-neutral-200)'
            }}>
                <h3 style={{
                    fontSize: 'var(--font-size-h4)',
                    fontWeight: 700,
                    backgroundColor: 'var(--color-neutral-100)',
                    padding: '3px 6px',
                    margin: '0 0 6px 0',
                    borderLeft: '2px solid var(--color-primary)'
                }}>
                    6. Strategic Showroom Costs
                </h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '2px 4px', color: 'var(--color-neutral-500)', width: '28%' }}>Item</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2025</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2026</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2027</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2028</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2029</th>
                            <th style={{ textAlign: 'center', width: '12%' }}>2030</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '2px 4px' }}>Active Showrooms</td>
                            <td style={{ textAlign: 'center' }}>0</td>
                            <td style={{ textAlign: 'center' }}>2</td>
                            <td style={{ textAlign: 'center' }}>4</td>
                            <td style={{ textAlign: 'center' }}>7</td>
                            <td style={{ textAlign: 'center' }}>10</td>
                            <td style={{ textAlign: 'center', fontWeight: 700 }}>10</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '2px 4px' }}>Cost / Showroom</td>
                            <td style={{ textAlign: 'center' }}>€30,000</td>
                            <td style={{ textAlign: 'center' }}>€30,600</td>
                            <td style={{ textAlign: 'center' }}>€31,212</td>
                            <td style={{ textAlign: 'center' }}>€31,836</td>
                            <td style={{ textAlign: 'center' }}>€32,472</td>
                            <td style={{ textAlign: 'center' }}>€33,122</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '2px 4px', fontWeight: 600 }}>Total Showroom Cost</td>
                            <td style={{ textAlign: 'center' }}>€0</td>
                            <td style={{ textAlign: 'center' }}>€61,200</td>
                            <td style={{ textAlign: 'center' }}>€124,848</td>
                            <td style={{ textAlign: 'center' }}>€222,854</td>
                            <td style={{ textAlign: 'center' }}>€324,730</td>
                            <td style={{ textAlign: 'center', fontWeight: 700 }}>€331,224</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
