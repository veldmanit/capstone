'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

export default function RiskManagementSection() {

    const risks = [
        {
            id: 1,
            risk: 'Supplier quality failure — Outsourced components introduce defects, damaging brand trust',
            prob: 'M',
            impact: 'H',
            category: 'Supply chain',
            mitigation: 'Supplier certification, incoming QC, final QC gate, rejection thresholds, warranty analytics',
            indicators: 'Defect rate >2%, warranty claims >5/100, NPS <50'
        },
        {
            id: 2,
            risk: 'Lead time instability — Supplier delays or inventory gaps prevent continuous marketing',
            prob: 'M',
            impact: 'H',
            category: 'Supply chain',
            mitigation: 'Buffer stock, dual sourcing (from 2028), supplier delivery KPIs, logistics contingencies',
            indicators: 'On-time delivery <90%, lead time >3 weeks, stockouts >2/month'
        },
        {
            id: 3,
            risk: 'Working capital crunch — Inventory needs outpace cash, forcing growth slowdown',
            prob: 'M',
            impact: 'H',
            category: 'Financial',
            mitigation: 'Customer deposits, supplier terms, credit facility, inventory turnover targets',
            indicators: 'Cash conversion >60 days, cash buffer <2 months'
        },
        {
            id: 4,
            risk: 'CAC deterioration — Rising ad costs make growth unprofitable',
            prob: 'M',
            impact: 'M-H',
            category: 'GTM',
            mitigation: 'Continuous CRO, creative testing, showroom conversion uplift, referral program, CAC caps',
            indicators: 'CAC >€250, conversion <1%, ROAS <8'
        },
        {
            id: 5,
            risk: 'Showroom underperformance — Partners generate low leads or demand higher fees',
            prob: 'M',
            impact: 'M-H',
            category: 'GTM',
            mitigation: 'Partner playbook, selection criteria, training, performance-based compensation, exit clauses',
            indicators: 'Conversion uplift <20%, partner NPS <7'
        },
        {
            id: 6,
            risk: 'Founder dependency — Scaling blocked by founder bandwidth',
            prob: 'H',
            impact: 'M-H',
            category: 'Organization',
            mitigation: 'Key hires [2026–27], SOP codification, CRM/ERP, decision cadence',
            indicators: 'Founder hours >60/week, delayed decisions'
        },
        {
            id: 7,
            risk: '"Made in China" perception — Sourcing damages premium brand image',
            prob: 'M',
            impact: 'M',
            category: 'Brand',
            mitigation: 'Assembly + QC in NL, emphasize Dutch design, quality communication, warranties as trust signals',
            indicators: 'Increased objections, lower conversion after origin questions'
        },
        {
            id: 8,
            risk: 'Cross-border complexity — VAT, consumer law, warranty differences cause friction',
            prob: 'M',
            impact: 'M',
            category: 'External',
            mitigation: 'Structured VAT flows, localized policies, legal templates for partners',
            indicators: 'Delivery delays, VAT errors, increased disputes'
        }
    ];

    const getBadgeColor = (val: string) => {
        if (val.includes('H')) return '#d32f2f'; // Red
        if (val.includes('M')) return '#f57c00'; // Orange
        return '#388e3c'; // Green
    };

    return (
        <PageWrapper sectionLabel="SECTION 8: RISK MANAGEMENT">

            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-primary)'
                }}>
                    8.1 Risk Register
                </h2>
                <TextBlock>
                    <p>
                        Proactive risk management is essential for navigating the complexities of scaling operations and entering new markets. The following risk register identifies key strategic risks, their potential impact, and the mitigation strategies in place to manage them.
                    </p>
                </TextBlock>
            </div>

            <div className="risk-table-container">
                <table className="risk-table">
                    <thead>
                        <tr>
                            <th style={{ width: '30px' }}>#</th>
                            <th style={{ width: '25%' }}>Risk</th>
                            <th style={{ width: '40px' }}>P</th>
                            <th style={{ width: '40px' }}>I</th>
                            <th style={{ width: '80px' }}>Category</th>
                            <th>Mitigation</th>
                            <th style={{ width: '20%' }}>Leading Indicators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {risks.map((row) => (
                            <tr key={row.id}>
                                <td style={{ textAlign: 'center', fontWeight: 'bold', color: 'var(--color-neutral-500)' }}>{row.id}</td>
                                <td style={{ fontWeight: 500 }}>{row.risk}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <span className="risk-badge" style={{ color: getBadgeColor(row.prob), borderColor: getBadgeColor(row.prob) }}>
                                        {row.prob}
                                    </span>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <span className="risk-badge" style={{ color: getBadgeColor(row.impact), borderColor: getBadgeColor(row.impact) }}>
                                        {row.impact}
                                    </span>
                                </td>
                                <td style={{ fontSize: '9px', color: 'var(--color-neutral-600)' }}>{row.category}</td>
                                <td style={{ fontSize: '10px' }}>{row.mitigation}</td>
                                <td style={{ fontSize: '9px', color: 'var(--color-neutral-700)', fontStyle: 'italic' }}>{row.indicators}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--space-4)', fontSize: '9px', color: 'var(--color-neutral-500)' }}>
                <strong>Legend:</strong> P = Probability, I = Impact (L = Low, M = Medium, H = High)
            </div>

            <style jsx>{`
                .risk-table-container {
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                    background: white;
                }

                .risk-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 10px;
                }

                .risk-table th {
                    background: var(--color-neutral-100);
                    padding: 8px 6px;
                    text-align: left;
                    font-weight: 700;
                    color: var(--color-neutral-800);
                    border-bottom: 2px solid var(--color-neutral-200);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    font-size: 9px;
                }

                .risk-table td {
                    padding: 8px 6px;
                    border-bottom: 1px solid var(--color-neutral-100);
                    vertical-align: top;
                    line-height: 1.4;
                    color: var(--color-neutral-900);
                }

                .risk-table tr:last-child td {
                    border-bottom: none;
                }

                .risk-badge {
                    display: inline-block;
                    font-size: 9px;
                    font-weight: 700;
                    padding: 1px 4px;
                    border: 1px solid currentColor;
                    border-radius: 4px;
                    min-width: 16px;
                    text-align: center;
                }
            `}</style>
        </PageWrapper>
    );
}
