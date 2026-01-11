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

            <div style={{ border: '1px solid var(--color-neutral-200)', borderRadius: '4px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--font-size-small)' }}>
                    <thead style={{ background: 'var(--color-neutral-100)' }}>
                        <tr>
                            <th style={{ width: '30px', padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>#</th>
                            <th style={{ width: '25%', padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>Risk</th>
                            <th style={{ width: '40px', padding: '6px 8px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>P</th>
                            <th style={{ width: '40px', padding: '6px 8px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>I</th>
                            <th style={{ width: '80px', padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>Category</th>
                            <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>Mitigation</th>
                            <th style={{ width: '20%', padding: '6px 8px', textAlign: 'left', fontWeight: 700, color: 'var(--color-neutral-800)', borderBottom: '1px solid var(--color-neutral-200)' }}>Leading Indicators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {risks.map((row) => (
                            <tr key={row.id} style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                                <td style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: 'var(--color-neutral-500)', verticalAlign: 'top' }}>{row.id}</td>
                                <td style={{ padding: '6px 8px', fontWeight: 600, color: 'var(--color-neutral-900)', verticalAlign: 'top' }}>{row.risk}</td>
                                <td style={{ padding: '6px 8px', textAlign: 'center', verticalAlign: 'top' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        fontSize: '9px',
                                        fontWeight: 700,
                                        padding: '1px 4px',
                                        border: `1px solid ${getBadgeColor(row.prob)}`,
                                        color: getBadgeColor(row.prob),
                                        borderRadius: '4px',
                                        minWidth: '16px',
                                        textAlign: 'center'
                                    }}>
                                        {row.prob}
                                    </span>
                                </td>
                                <td style={{ padding: '6px 8px', textAlign: 'center', verticalAlign: 'top' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        fontSize: '9px',
                                        fontWeight: 700,
                                        padding: '1px 4px',
                                        border: `1px solid ${getBadgeColor(row.impact)}`,
                                        color: getBadgeColor(row.impact),
                                        borderRadius: '4px',
                                        minWidth: '16px',
                                        textAlign: 'center'
                                    }}>
                                        {row.impact}
                                    </span>
                                </td>
                                <td style={{ padding: '6px 8px', fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-600)', verticalAlign: 'top' }}>{row.category}</td>
                                <td style={{ padding: '6px 8px', fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)', verticalAlign: 'top', lineHeight: '1.4' }}>{row.mitigation}</td>
                                <td style={{ padding: '6px 8px', fontSize: 'var(--font-size-tiny)', color: 'var(--color-neutral-600)', fontStyle: 'italic', verticalAlign: 'top' }}>{row.indicators}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--font-size-tiny)', color: 'var(--color-neutral-500)' }}>
                <strong>Legend:</strong> P = Probability, I = Impact (L = Low, M = Medium, H = High)
            </div>
        </PageWrapper>
    );
}
