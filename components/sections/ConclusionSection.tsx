'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

/**
 * Section 9: Conclusion
 * Placeholder for the final concluding marks.
 */
export default function ConclusionSection() {

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
        <PageWrapper sectionLabel="SECTION 9: CONCLUSION">

            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-primary)'
                }}>
                    9.1 Strategic Summary
                </h2>
                <TextBlock>
                    <p>
                        A final synthesis of the Fieldsman opportunity, summarizing the strategic fit, financial potential, and the path to becoming a market leader in the B2B kitchen segment.
                    </p>
                </TextBlock>
                <PlaceholderBox title="Final Strategic Synthesis" height="150px" />
            </div>

            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-neutral-800)'
                }}>
                    9.2 Final Recommendation
                </h2>
                <PlaceholderBox title="Go/No-Go Recommendation" height="120px" />
            </div>

        </PageWrapper>
    );
}
