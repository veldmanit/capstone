'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';

interface ContentSection {
    level: number;
    title: string;
    subsections?: any[];
    content: any[];
    h3_sections?: any[];
}

interface ContentRendererProps {
    section: ContentSection;
    sectionNumber: number;
    startPage: number;
}

export default function ContentRenderer({
    section,
    sectionNumber,
    startPage
}: ContentRendererProps) {
    let pageCounter = startPage;

    const renderParagraphs = (paragraphs: any[]) => {
        return paragraphs.map((para, idx) => (
            <p key={idx} style={{ marginBottom: 'var(--space-4)' }}>
                {para.text}
            </p>
        ));
    };

    const renderSubsection = (subsection: any, subIndex: number) => {
        pageCounter++;
        const sectionLabel = `SECTION ${sectionNumber}: ${section.title.toUpperCase()}`;

        return (
            <PageWrapper
                key={`sub-${subIndex}`}
                sectionLabel={sectionLabel}
            >
                <h2 style={{ marginBottom: 'var(--space-6)' }}>
                    {subsection.title}
                </h2>

                {subsection.content && subsection.content.length > 0 && (
                    <TextBlock columns={2}>
                        {renderParagraphs(subsection.content)}
                    </TextBlock>
                )}

                {/* H3 sections */}
                {subsection.h3_sections && subsection.h3_sections.map((h3: any, h3idx: number) => (
                    <div key={h3idx} style={{ marginTop: 'var(--space-8)' }}>
                        <h3 style={{ marginBottom: 'var(--space-4)' }}>
                            {h3.title}
                        </h3>
                        {h3.content && h3.content.length > 0 && (
                            <TextBlock columns={2}>
                                {renderParagraphs(h3.content)}
                            </TextBlock>
                        )}
                    </div>
                ))}
            </PageWrapper>
        );
    };

    return (
        <>
            {/* Main section intro page (if it has content) */}
            {section.content && section.content.length > 0 && (
                <PageWrapper
                    sectionLabel={`SECTION ${sectionNumber}: ${section.title.toUpperCase()}`}
                >
                    <TextBlock>
                        {renderParagraphs(section.content)}
                    </TextBlock>
                </PageWrapper>
            )}

            {/* Subsections */}
            {section.subsections && section.subsections.map((sub, idx) =>
                renderSubsection(sub, idx)
            )}
        </>
    );
}
