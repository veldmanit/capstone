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
                    7.2 Five-Year P&L Summary ([2025]–[2030])
                </h2>
                <PlaceholderBox title="Five-Year P&L Summary Table" height="300px" />
            </div>

            {/* 7.3 Cash Flow and Working Capital */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.3 Cash Flow and Working Capital
                </h2>
                <PlaceholderBox title="Cash Flow & Working Capital Chart" />
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
                        Beyond financial metrics, Fieldsman is committed to sustainable operations. This covers material sourcing reliability, energy-efficient production, and fair labor practices in the supply chain.
                    </p>
                </TextBlock>
                <PlaceholderBox title="ESG Impact Metrics" height="150px" />
            </div>

            {/* 7.6 Sensitivities */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    7.6 Sensitivities
                </h2>
                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p>
                        Analysis of key risks and their potential impact on the financial projections, including variations in material costs, demand uptake, and operational efficiency.
                    </p>
                </TextBlock>
                <PlaceholderBox title="Sensitivity Analysis Chart" />
            </div>

        </PageWrapper>
    );
}
