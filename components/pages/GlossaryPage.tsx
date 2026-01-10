'use client';

import React from 'react';

/**
 * Glossary Page
 * - Fourth page of the report (unnumbered).
 * - Definitions of key terms used in the report.
 */
export default function GlossaryPage() {
    const terms = [
        { term: 'ASP', definition: 'Average Selling Price — the average revenue per kitchen sold' },
        { term: 'CAC', definition: 'Customer Acquisition Cost — total marketing spend divided by new customers acquired' },
        { term: 'COGS', definition: 'Cost of Goods Sold — direct costs of producing kitchens (materials, labor, logistics)' },
        { term: 'D2C', definition: 'Direct-to-Consumer — selling directly to end customers without retail intermediaries' },
        { term: 'EBITDA', definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization' },
        { term: 'ESG', definition: 'Environmental, Social, and Governance — framework for measuring sustainability' },
        { term: 'GTM', definition: 'Go-to-Market — strategy for launching and selling products' },
        { term: 'KPI', definition: 'Key Performance Indicator — measurable value demonstrating progress toward objectives' },
        { term: 'KSF', definition: 'Key Success Factor — critical element required to compete successfully' },
        { term: 'LTV', definition: 'Lifetime Value — total revenue expected from a customer over their relationship' },
        { term: 'NPS', definition: 'Net Promoter Score — measure of customer loyalty and satisfaction' },
        { term: 'P&L', definition: 'Profit and Loss statement — financial statement showing revenues and expenses' },
        { term: 'QC', definition: 'Quality Control — processes ensuring products meet quality standards' },
        { term: 'SAM', definition: 'Serviceable Available Market — portion of TAM targetable with current business model' },
        { term: 'SFA', definition: 'Suitability, Feasibility, Acceptability — framework for evaluating strategic options' },
        { term: 'SOM', definition: 'Serviceable Obtainable Market — realistic portion of SAM that can be captured' },
        { term: 'TAM', definition: 'Total Addressable Market — total market demand for a product or service' },
        { term: 'VRIO', definition: 'Value, Rarity, Imitability, Organization — framework for assessing competitive advantage' },
    ];

    return (
        <div className="page glossary-page">
            <div className="content-container">

                {/* Header */}
                <div style={{ marginBottom: 'var(--space-8)', borderBottom: '1px solid var(--color-neutral-300)', paddingBottom: 'var(--space-4)' }}>
                    <h2 style={{
                        fontSize: '14px',
                        fontWeight: 800,
                        color: 'var(--color-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Glossary of Terms
                    </h2>
                </div>

                {/* Glossary Table */}
                <div style={{ marginTop: 'var(--space-6)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '10px' }}>
                        <tbody>
                            {terms.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                                    <td style={{
                                        padding: '6px 0',
                                        width: '60px',
                                        verticalAlign: 'top',
                                        fontWeight: 800,
                                        color: 'var(--color-neutral-900)'
                                    }}>
                                        {item.term}
                                    </td>
                                    <td style={{
                                        padding: '6px 0 6px 12px',
                                        color: 'var(--color-neutral-700)',
                                        lineHeight: '1.5'
                                    }}>
                                        {item.definition}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <style jsx>{`
        .glossary-page {
          width: var(--page-width);
          min-height: var(--page-height);
          background: white;
          position: relative;
          page-break-after: always;
          padding: var(--page-margin);
          padding-top: var(--space-24);
        }
        
        @media screen {
          .glossary-page {
            margin: 0 auto var(--space-6);
            box-shadow: var(--shadow-lg);
          }
        }
        
        @media print {
          .glossary-page {
            margin: 0;
            box-shadow: none;
          }
        }
      `}</style>
        </div>
    );
}
