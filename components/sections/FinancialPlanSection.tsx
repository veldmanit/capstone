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
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.2 Five-Year P&L Summary (2026–2030)
                </h2>

                {/* P&L Table */}
                <div style={{ fontSize: '9px', marginBottom: 'var(--space-4)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700 }}>P&L Line Item</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2026</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2027</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2028</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2029</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2030</th>
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
                                <td style={{ padding: '6px 8px' }}>Net Income</td>
                                <td style={{ padding: '6px 8px', textAlign: 'right' }}>-€50K</td>
                                <td style={{ padding: '6px 8px', textAlign: 'right' }}>€58K</td>
                                <td style={{ padding: '6px 8px', textAlign: 'right' }}>€652K</td>
                                <td style={{ padding: '6px 8px', textAlign: 'right' }}>€1.3M</td>
                                <td style={{ padding: '6px 8px', textAlign: 'right' }}>€2.3M</td>
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
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.3 Cash Flow Statement (2026–2030)
                </h2>

                {/* Cash Flow Table */}
                <div style={{ fontSize: '9px', marginBottom: 'var(--space-4)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700 }}>Cash Flow Line Item</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2026</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2027</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2028</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2029</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2030</th>
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

            {/* 7.5 Extra-Financial Impact (ESG) */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.5 Extra-Financial Impact (ESG)
                </h2>
                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p>
                        Beyond financial metrics, Fieldsman is committed to sustainable operations. The modular design philosophy inherently reduces waste, while the hybrid production model optimizes the environmental footprint of manufacturing and logistics.
                    </p>
                </TextBlock>

                {/* ESG Metrics Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                    {/* Environmental */}
                    <div style={{ background: 'rgba(74, 93, 35, 0.08)', padding: 'var(--space-4)', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🌱 Environmental</div>
                        <table style={{ width: '100%', fontSize: '9px' }}>
                            <tbody>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>CO₂ per kitchen</td><td style={{ textAlign: 'right', fontWeight: 600 }}>~85 kg</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Material Efficiency</td><td style={{ textAlign: 'right', fontWeight: 600 }}>High</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Modular Repairability</td><td style={{ textAlign: 'right', fontWeight: 600 }}>Yes</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Product lifespan</td><td style={{ textAlign: 'right', fontWeight: 600 }}>15+ yrs</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Social */}
                    <div style={{ background: 'rgba(74, 93, 35, 0.08)', padding: 'var(--space-4)', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>👥 Social</div>
                        <table style={{ width: '100%', fontSize: '9px' }}>
                            <tbody>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Local Jobs (2030)</td><td style={{ textAlign: 'right', fontWeight: 600 }}>19 FTE</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Fair Labor Practices</td><td style={{ textAlign: 'right', fontWeight: 600 }}>100%</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Customer NPS</td><td style={{ textAlign: 'right', fontWeight: 600 }}>{">50"}</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Governance */}
                    <div style={{ background: 'rgba(74, 93, 35, 0.08)', padding: 'var(--space-4)', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>⚖️ Governance</div>
                        <table style={{ width: '100%', fontSize: '9px' }}>
                            <tbody>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Transparent Supply</td><td style={{ textAlign: 'right', fontWeight: 600 }}>100%</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Warranty Claims</td><td style={{ textAlign: 'right', fontWeight: 600 }}>{"<2%"}</td></tr>
                                <tr><td style={{ padding: '3px 0', color: 'var(--color-neutral-600)' }}>Data Privacy</td><td style={{ textAlign: 'right', fontWeight: 600 }}>100%</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ESG Highlights */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-4)' }}>
                    <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>2030 CO₂ AVOIDED</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>~180 tons</div>
                        <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>vs. traditional mfg.</div>
                    </div>
                    <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>TOTAL PRODUCT LIFESPAN</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>32K+ yrs</div>
                        <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>2,126 units × 15 yrs</div>
                    </div>
                    <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>LOCAL ASSEMBLY FTE (2030)</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>10–12 FTE</div>
                        <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>NL-based jobs</div>
                    </div>
                    <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-3)', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--color-neutral-200)' }}>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: 'var(--color-neutral-500)', marginBottom: '2px' }}>STEEL RECYCLED CONTENT</div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>{">30%"}</div>
                        <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)' }}>supplier target</div>
                    </div>
                </div>
            </div>

            {/* 7.6 Scenario Analysis */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.6 Scenario Analysis & Sensitivity
                </h2>

                <TextBlock style={{ marginBottom: 'var(--space-3)' }}>
                    <p>
                        Three scenarios model the range of possible outcomes. The <strong>Base Case</strong> is the recommended path, balancing strong returns with manageable execution risk. The <strong>Ambitious Case</strong> accelerates growth but requires 4x more capital and higher operational complexity. The <strong>Worst Case</strong> models adverse conditions (lower demand, higher costs) to validate business resilience—importantly, it still generates positive NPV.
                    </p>
                </TextBlock>

                {/* Unified 3-Scenario Comparison Table */}
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px', marginBottom: 'var(--space-4)' }}>
                    <colgroup>
                        <col style={{ width: '28%' }} />
                        <col style={{ width: '24%' }} />
                        <col style={{ width: '24%' }} />
                        <col style={{ width: '24%' }} />
                    </colgroup>
                    <thead>
                        <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                            <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700 }}>Scenario Comparison</th>
                            <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, background: '#991B1B' }}>Worst Case</th>
                            <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, border: '2px solid white' }}>Base Case ★</th>
                            <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 700, background: '#B45309' }}>Ambitious Case</th>
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

                {/* Base Case Break-Even Analysis */}
                <div style={{ marginBottom: 'var(--space-4)' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Base Case: Break-Even Analysis (Pre-Tax)</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '9px' }}>
                        <colgroup>
                            <col style={{ width: '34%' }} />
                            <col style={{ width: '13.2%' }} />
                            <col style={{ width: '13.2%' }} />
                            <col style={{ width: '13.2%' }} />
                            <col style={{ width: '13.2%' }} />
                            <col style={{ width: '13.2%' }} />
                        </colgroup>
                        <thead>
                            <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                                <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700 }}>Metric</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2026</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2027</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2028</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2029</th>
                                <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 700 }}>2030</th>
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

        </PageWrapper>
    );
}
