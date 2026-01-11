'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

/**
 * Section 7: Financial Plan
 * Placeholders for P&L, Cash Flow, ESG, and Sensitivities.
 */
export default function FinancialPlanSection() {

    const PlaceholderBox = ({ title, height = '200px' }: { title: string, height?: string }) => (
        <div style={{
            width: '100%',
            height,
            border: '2px dashed var(--color-neutral-300)',
            background: 'var(--color-neutral-50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--border-radius-sm)',
            marginBottom: 'var(--space-8)'
        }}>
            <span style={{
                color: 'var(--color-neutral-500)',
                fontWeight: 600,
                fontSize: '14px'
            }}>
                [Placeholder: {title}]
            </span>
        </div>
    );

    return (
        <>
            <PageWrapper sectionLabel="SECTION 7: FINANCIAL PLAN">

                {/* Intro */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        7.1 Overview
                    </h2>
                    <TextBlock>
                        <p>
                            This section outlines the projected financial performance of Fieldsman from 2025 through 2030, demonstrating the path to profitability and scale.
                        </p>
                    </TextBlock>
                </div>

                {/* 7.2 Five-Year P&L Summary */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        7.2 Five-Year P&L Summary (2026–2030)
                    </h2>

                    {/* P&L Table */}
                    <div style={{ fontSize: '9.5px', marginBottom: 'var(--space-4)' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                            <colgroup>
                                <col style={{ width: '25%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%', background: 'rgba(74, 93, 35, 0.03)' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>P&L Line Item</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2026</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2027</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2028</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2029</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>2030</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Units */}
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px', fontWeight: 600 }}>Units Sold</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>189</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>459</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>978</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>1,506</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 700, color: 'var(--color-primary)' }}>2,126</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', fontStyle: 'italic', color: 'var(--color-neutral-600)' }}>Avg. Revenue/Unit</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€4,339</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€4,426</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€4,514</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€4,604</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€4,696</td>
                                </tr>

                                {/* Revenue */}
                                <tr style={{ background: 'var(--color-neutral-100)', fontWeight: 700 }}>
                                    <td style={{ padding: '5px 8px' }}>Revenue</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€819K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€2.0M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€4.4M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€7.0M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€10.0M</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px' }}>COGS</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€265K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€659K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.4M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€2.3M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€3.2M</td>
                                </tr>

                                {/* Gross Margin */}
                                <tr style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px', color: 'var(--color-primary)' }}>Gross Margin</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€554K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€1.4M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€3.0M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€4.7M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€6.8M</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', fontStyle: 'italic', color: 'var(--color-neutral-600)', paddingLeft: '16px' }}>Gross Margin %</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>68%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>68%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>68%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>68%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>68%</td>
                                </tr>

                                {/* Operating Costs */}
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px' }}>Marketing</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€200K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€504K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.1M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.6M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€2.2M</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px' }}>Overhead</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€389K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€764K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.0M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.3M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€1.6M</td>
                                </tr>

                                {/* EBITDA */}
                                <tr style={{ background: 'var(--color-primary)', color: 'white', fontWeight: 700 }}>
                                    <td style={{ padding: '6px 8px' }}>EBITDA</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>-€34K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€111K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€909K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€1.8M</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€3.1M</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.15)' }}>
                                    <td style={{ padding: '4px 8px', fontStyle: 'italic', fontWeight: 600 }}>EBITDA Margin</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-4%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>5%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>21%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>26%</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 700, color: 'var(--color-primary)' }}>30%</td>
                                </tr>

                                {/* Below EBITDA */}
                                <tr>
                                    <td style={{ padding: '4px 8px', color: 'var(--color-neutral-600)' }}>Depreciation</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€7K</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-100)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px' }}>EBIT</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€61K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€84K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€882K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€1.8M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€3.1M</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', color: 'var(--color-neutral-600)' }}>Interest & Fees</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€7K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€5K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€4K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€2K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€0.4K</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', color: 'var(--color-neutral-600)' }}>Taxes</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>€18K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€20K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€227K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€452K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>-€787K</td>
                                </tr>

                                {/* Net Income */}
                                <tr style={{ background: 'var(--color-primary)', color: 'white', fontWeight: 700 }}>
                                    <td style={{ padding: '10px 8px' }}>Net Income</td>
                                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>-€50K</td>
                                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>€58K</td>
                                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>€652K</td>
                                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>€1.3M</td>
                                    <td style={{ padding: '10px 8px', textAlign: 'right' }}>€2.3M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Key Metrics Callout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>CUMULATIVE NET INCOME</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>€4.2M</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>2026–2030</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>REVENUE CAGR</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>65%</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>2026–2030</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>BREAKEVEN</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>2027</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>Year 2</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>2030 NET MARGIN</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>23%</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>€2.3M Net Income</div>
                        </div>
                    </div>
                </div>

                {/* 7.3 Cash Flow and Working Capital */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        7.3 Cash Flow Statement (2026–2030)
                    </h2>

                    {/* Cash Flow Table */}
                    <div style={{ fontSize: '9.5px', marginBottom: 'var(--space-4)' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                            <colgroup>
                                <col style={{ width: '25%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%' }} />
                                <col style={{ width: '15%', background: 'rgba(74, 93, 35, 0.03)' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Cash Flow Line Item</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2026</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2027</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2028</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2029</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>2030</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Operating Cash Flow */}
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px', fontWeight: 600 }}>Net Income</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€50K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€58K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€652K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.3M</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 700, color: 'var(--color-primary)' }}>€2.3M</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px', color: 'var(--color-neutral-600)' }}>Add back: Depreciation</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€7K</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px' }}>Δ Receivables/Pre-payments</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€16K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€39K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€85K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€133K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€192K</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px' }}>Δ Inventory</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€49K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€97K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€191K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€202K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€245K</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px', color: 'var(--color-primary)' }}>Operating Cash Flow</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€57K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€27K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€573K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€1.3M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€2.2M</td>
                                </tr>

                                {/* Investment Cash Flow */}
                                <tr style={{ background: 'var(--color-neutral-100)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px' }}>Investment Cash Flow</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€35K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€0</td>
                                </tr>

                                {/* Financing Cash Flow */}
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px' }}>Debt Drawdown</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€35K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px' }}>Debt Repayment</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€20K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '4px 8px', paddingLeft: '16px', color: 'var(--color-primary)', fontWeight: 600 }}>Equity Injection</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', fontWeight: 600, color: 'var(--color-primary)' }}>€100K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right' }}>€0</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px', color: 'var(--color-primary)' }}>Financing Cash Flow</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>€115K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#B45309' }}>-€27K</td>
                                </tr>

                                {/* Net Cash Flow */}
                                <tr style={{ background: 'var(--color-primary)', color: 'white', fontWeight: 700 }}>
                                    <td style={{ padding: '6px 8px' }}>Net Cash Flow</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€23K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€0.1K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€546K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€1.2M</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€2.2M</td>
                                </tr>

                                {/* Balance */}
                                <tr>
                                    <td style={{ padding: '4px 8px', color: 'var(--color-neutral-600)' }}>Beginning Balance</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€49K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€72K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€72K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€618K</td>
                                    <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-neutral-600)' }}>€1.8M</td>
                                </tr>
                                <tr style={{ background: 'var(--color-primary)', color: 'white', fontWeight: 700 }}>
                                    <td style={{ padding: '6px 8px' }}>Ending Cash Balance</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€72K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€72K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€618K</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€1.8M</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'right' }}>€4.0M</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Key Metrics Callout */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>EQUITY REQUIRED</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>€100K</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>Year 1 (2026)</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>CASH POSITIVE FROM</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>2027</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>Year 2</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>2030 ENDING BALANCE</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>€4.0M</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>40x initial investment</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>CUMULATIVE OP. CASHFLOW</div>
                            <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>€4.1M</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>2026–2030</div>
                        </div>
                    </div>
                </div>
            </PageWrapper>

            {/* PAGE 2: ESG */}
            <PageWrapper sectionLabel="SECTION 7: FINANCIAL PLAN">
                {/* 7.4 Extra-Financial Impact */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        7.4 Extra-Financial Impact: A Realistic Path to Lower Emissions
                    </h2>
                    <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                        <p>
                            Sustainable business practices matter to customers, partners, and future investors. However, Fieldsman must be honest: with steel modules produced in China and ceramic slabs sourced globally, the company's carbon footprint is significant. Credible sustainability means acknowledging this reality and pursuing measurable reductions rather than greenwashing.
                        </p>
                    </TextBlock>

                    {/* Table 1: Current Baseline (2025) */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Baseline (2025)</div>
                        <div style={{ fontSize: '9.5px' }}>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Scope</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Source</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>Estimated CO₂ / Kitchen</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Scope 1</td>
                                        <td style={{ padding: '6px 8px' }}>NL hub operations, delivery vehicles</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>15 kg</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Scope 2</td>
                                        <td style={{ padding: '6px 8px' }}>Electricity and heating at NL facility</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>10 kg</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Scope 3</td>
                                        <td style={{ padding: '6px 8px' }}>Steel manufacturing (China), ceramic production, international shipping</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>325 kg</td>
                                    </tr>
                                    <tr style={{ background: 'rgba(74, 93, 35, 0.15)', fontWeight: 800 }}>
                                        <td colSpan={2} style={{ padding: '8px 8px', color: 'var(--color-primary)' }}>Total</td>
                                        <td style={{ padding: '8px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>~350 kg per kitchen</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <p style={{ fontSize: '11px', fontStyle: 'italic', color: 'var(--color-neutral-600)' }}>
                            Scope 3 emissions account for approximately 93% of the total footprint, driven primarily by energy-intensive steel production in China (180–250 kg), ceramic slab manufacturing (30–45 kg), and international sea freight (30–50 kg).
                        </p>
                    </TextBlock>

                    {/* Table 2: Reduction Targets to 2030 */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Reduction Targets to 2030</div>
                        <div style={{ fontSize: '9.5px' }}>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Lever</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Action</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>Reduction Target</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Supplier selection</td>
                                        <td style={{ padding: '6px 8px' }}>Prioritize manufacturers with renewable energy or efficiency certifications</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>10–15% of Scope 3</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Logistics optimization</td>
                                        <td style={{ padding: '6px 8px' }}>Full container loads, sea freight only, consolidated shipments</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>5–10% of Scope 3</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>NL hub energy</td>
                                        <td style={{ padding: '6px 8px' }}>Switch to 100% renewable electricity by 2027</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>80% of Scope 2</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Steel recycled content</td>
                                        <td style={{ padding: '6px 8px' }}>Target suppliers using 30%+ recycled steel</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>5–10% of Scope 3</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>Product lifespan</td>
                                        <td style={{ padding: '6px 8px' }}>Design for 15+ year durability, modular repairability</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>Avoided emissions vs. replacement</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Table 3: Projected Emissions 2025–2030 */}
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projected Emissions (2025–2030)</div>
                        <div style={{ fontSize: '9.5px' }}>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Year</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Units</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>CO₂ per Kitchen</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Total Emissions</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>Reduction vs. Baseline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>2025</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>40</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>350 kg</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>14 tons</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right', color: 'var(--color-neutral-500)' }}>Baseline</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>2026</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>190</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>340 kg</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>65 tons</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right', color: '#10B981' }}>3% per unit</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>2027</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>460</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>315 kg</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>145 tons</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right', color: '#10B981' }}>10% per unit</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>2028</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>980</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>300 kg</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>294 tons</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right', color: '#10B981' }}>14% per unit</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>2029</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>1,505</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>290 kg</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right' }}>436 tons</td>
                                        <td style={{ padding: '6px 8px', textAlign: 'right', color: '#10B981' }}>17% per unit</td>
                                    </tr>
                                    <tr style={{ background: 'rgba(74, 93, 35, 0.15)', fontWeight: 800 }}>
                                        <td style={{ padding: '8px 8px', color: 'var(--color-primary)' }}>2030</td>
                                        <td style={{ padding: '8px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>2,125</td>
                                        <td style={{ padding: '8px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>280 kg</td>
                                        <td style={{ padding: '8px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>595 tons</td>
                                        <td style={{ padding: '8px 8px', textAlign: 'right', color: '#10B981' }}>20% per unit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <TextBlock>
                        <p>
                            Total emissions will increase from 14 tons to 595 tons as volume grows. This is unavoidable. However, per-unit emissions can be reduced by approximately 20% through supplier engagement, logistics optimization, and renewable energy adoption at the NL hub.
                        </p>
                        <p style={{ marginTop: 'var(--space-4)' }}>
                            More aggressive reductions would require fundamental changes to the supply chain, such as shifting to European-based steel production, which is not economically viable at current scale. If Fieldsman reaches sufficient volume post-2030, European dual-sourcing could be evaluated for both supply chain resilience and emissions reduction.
                        </p>
                        <p style={{ marginTop: 'var(--space-4)', fontWeight: 600 }}>
                            Fieldsman commits to transparency: conducting a formal Scope 1, 2, and 3 analysis in 2026 and publishing annual emissions data thereafter.
                        </p>
                    </TextBlock>
                </div>
            </PageWrapper>

            {/* PAGE 3: Scenario Analysis */}
            <PageWrapper sectionLabel="SECTION 7: FINANCIAL PLAN">
                {/* 7.5 Scenario Analysis */}
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        7.5 Scenario Analysis & Sensitivity
                    </h2>

                    <TextBlock style={{ marginBottom: 'var(--space-3)' }}>
                        <p>
                            Three scenarios model the range of possible outcomes. The <strong>Base Case</strong> is the recommended path, balancing strong returns with manageable execution risk. The <strong>Ambitious Case</strong> accelerates growth but requires 4x more capital and higher operational complexity. The <strong>Worst Case</strong> models adverse conditions (lower demand, higher costs) to validate business resilience—importantly, it still generates positive NPV.
                        </p>
                    </TextBlock>

                    {/* Unified 3-Scenario Comparison Table */}
                    <div style={{ fontSize: '9.5px', marginBottom: 'var(--space-4)' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                            <colgroup>
                                <col style={{ width: '28%' }} />
                                <col style={{ width: '24%' }} />
                                <col style={{ width: '24%', background: 'rgba(74, 93, 35, 0.03)' }} />
                                <col style={{ width: '24%' }} />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Scenario Comparison</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'center', borderBottom: '2px solid #991B1B', color: '#991B1B', fontWeight: 700 }}>Worst Case</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'center', borderBottom: '2px solid var(--color-primary)', color: 'var(--color-primary)', fontWeight: 800 }}>Base Case ★</th>
                                    <th style={{ padding: '10px 8px', textAlign: 'center', borderBottom: '2px solid #B45309', color: '#B45309', fontWeight: 700 }}>Ambitious Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Section: 2030 Financials */}
                                <tr style={{ background: 'var(--color-neutral-200)' }}>
                                    <td colSpan={4} style={{ padding: '4px 8px', fontWeight: 700, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-neutral-600)' }}>2030 Financials</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Units Sold</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>1,788</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>2,126</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>8,600</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Revenue</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>€8.0M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>€10.0M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>€40.6M</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Gross Margin</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>64%</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>68%</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>62%</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>EBITDA</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>€1.7M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>€3.1M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>€12.7M</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>EBITDA Margin</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>21%</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>30%</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>31%</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.15)', fontWeight: 600 }}>
                                    <td style={{ padding: '5px 8px', color: 'var(--color-primary)' }}>Equity Required</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>€300K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 800, color: 'var(--color-primary)', background: 'rgba(74, 93, 35, 0.15)' }}>€100K</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>€400K</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Marketing Spend</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>€1.8M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>€2.2M</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>€9.5M</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Breakeven Year</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>2028</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>2027</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>2028</td>
                                </tr>

                                {/* Section: Execution Requirements */}
                                <tr style={{ background: 'var(--color-neutral-200)' }}>
                                    <td colSpan={4} style={{ padding: '4px 8px', fontWeight: 700, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-neutral-600)' }}>Execution Requirements</td>
                                </tr>
                                <tr style={{ background: 'var(--color-neutral-50)' }}>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Team Scale Required</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>5 → 19 FTE (2026–30)</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>5 → 19 FTE (2026–30)</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>8.5 → 35 FTE (2026–30)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Production Capacity</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B' }}>2,000 units</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)' }}>2,500 units</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309' }}>10,000 units</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '5px 8px', fontWeight: 600 }}>Execution Risk</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#991B1B', fontWeight: 600 }}>Lower</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', fontWeight: 700, background: 'rgba(74, 93, 35, 0.08)', color: 'var(--color-primary)' }}>Moderate</td>
                                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#B45309', fontWeight: 600 }}>High</td>
                                </tr>

                                {/* Section: DCF Valuation */}
                                <tr style={{ background: 'var(--color-neutral-200)' }}>
                                    <td colSpan={4} style={{ padding: '4px 8px', fontWeight: 700, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-neutral-600)' }}>DCF Valuation (WACC 12%)</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.12)' }}>
                                    <td style={{ padding: '6px 8px', fontWeight: 700 }}>Enterprise Value</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, fontSize: '11px', color: '#991B1B' }}>€3.9M</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 800, fontSize: '14px', color: 'var(--color-primary)', background: 'rgba(74, 93, 35, 0.15)' }}>€11.3M</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, fontSize: '11px', color: '#B45309' }}>€46.6M</td>
                                </tr>
                                <tr style={{ background: 'rgba(74, 93, 35, 0.08)' }}>
                                    <td style={{ padding: '6px 8px', fontWeight: 700 }}>Return on Equity</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, fontSize: '11px', color: '#991B1B' }}>13x</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 800, fontSize: '14px', color: 'var(--color-primary)', background: 'rgba(74, 93, 35, 0.12)' }}>113x</td>
                                    <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, fontSize: '11px', color: '#B45309' }}>117x</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* Base Case Break-Even Analysis */}
                    <div style={{ marginBottom: 'var(--space-4)' }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Base Case: Break-Even Analysis (Pre-Tax)</div>
                        <div style={{ fontSize: '9.5px' }}>
                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0 }}>
                                <colgroup>
                                    <col style={{ width: '34%' }} />
                                    <col style={{ width: '13.2%' }} />
                                    <col style={{ width: '13.2%' }} />
                                    <col style={{ width: '13.2%' }} />
                                    <col style={{ width: '13.2%' }} />
                                    <col style={{ width: '13.2%', background: 'rgba(74, 93, 35, 0.03)' }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '10px 8px', textAlign: 'left', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>Metric</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2026</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2027</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2028</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 700 }}>2029</th>
                                        <th style={{ padding: '10px 8px', textAlign: 'right', borderBottom: '2px solid var(--color-primary)', fontWeight: 800, color: 'var(--color-primary)' }}>2030</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '4px 8px' }}>Revenue per unit</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€4,339</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€4,426</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€4,514</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€4,604</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€4,696</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '4px 8px' }}>COGS per unit</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: '#991B1B' }}>−€1,404</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: '#991B1B' }}>−€1,435</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: '#991B1B' }}>−€1,464</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: '#991B1B' }}>−€1,496</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: '#991B1B' }}>−€1,527</td>
                                    </tr>
                                    <tr style={{ background: 'rgba(74, 93, 35, 0.1)', fontWeight: 600 }}>
                                        <td style={{ padding: '4px 8px', color: 'var(--color-primary)' }}>Contribution margin / unit</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€2,935</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€2,991</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€3,050</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€3,108</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right', color: 'var(--color-primary)' }}>€3,170</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '4px 8px' }}>Marketing</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€200K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€504K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.1M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.6M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€2.2M</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '4px 8px' }}>Overhead</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€389K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€764K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.0M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.3M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.6M</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-50)' }}>
                                        <td style={{ padding: '4px 8px' }}>Depreciation + Interest</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€34K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€32K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€31K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€29K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€7K</td>
                                    </tr>
                                    <tr style={{ background: 'var(--color-neutral-200)', fontWeight: 600 }}>
                                        <td style={{ padding: '4px 8px' }}>Fixed Costs (Total)</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€622K</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€1.3M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€2.1M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€3.0M</td>
                                        <td style={{ padding: '4px 8px', textAlign: 'right' }}>€3.7M</td>
                                    </tr>
                                    <tr style={{ background: 'rgba(153, 27, 27, 0.1)' }}>
                                        <td style={{ padding: '5px 8px', fontWeight: 600, color: '#991B1B' }}>Break-Even Point (units)</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>212</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>435</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>694</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>952</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>1,177</td>
                                    </tr>
                                    <tr style={{ background: 'rgba(74, 93, 35, 0.15)' }}>
                                        <td style={{ padding: '5px 8px', fontWeight: 700, color: 'var(--color-primary)' }}>Anticipated Sales (units)</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 700, color: '#991B1B' }}>189</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 800, color: 'var(--color-primary)' }}>459 ✓</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 800, color: 'var(--color-primary)' }}>978 ✓</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 800, color: 'var(--color-primary)' }}>1,506 ✓</td>
                                        <td style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 800, color: 'var(--color-primary)' }}>2,126 ✓</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </PageWrapper >
        </>
    );
}
