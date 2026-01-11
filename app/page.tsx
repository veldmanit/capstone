'use client';

import React from 'react';
import CoverPage from '@/components/pages/CoverPage';
import AcknowledgementPage from '@/components/pages/AcknowledgementPage';
import AboutAuthorPage from '@/components/pages/AboutAuthorPage';
import GlossaryPage from '@/components/pages/GlossaryPage';
import ExecutiveSummaryPage from '@/components/pages/ExecutiveSummaryPage';
import SectionDivider from '@/components/pages/SectionDivider';
import TableOfContents from '@/components/pages/TableOfContents';
import PageWrapper from '@/components/layout/PageWrapper';

// Import Section Components
import IntroductionSection from '@/components/sections/IntroductionSection';
import ExternalAnalysisSection from '@/components/sections/ExternalAnalysisSection';
import InternalAnalysisSection from '@/components/sections/InternalAnalysisSection';
import StrategicOptionsSection from '@/components/sections/StrategicOptionsSection';
import ImplementationSection from '@/components/sections/ImplementationSection';
import ActionPlanSection from '@/components/sections/ActionPlanSection'; // Added import
import FinancialPlanSection from '@/components/sections/FinancialPlanSection';
import RiskManagementSection from '@/components/sections/RiskManagementSection';
import AppendixSection from '@/components/sections/AppendixSection';
import ConclusionSection from '@/components/sections/ConclusionSection';

export default function ReportPage() {
  // Manual TOC entries (page numbers will be approximate guides)
  // Manual TOC entries (page numbers will be approximate guides)
  const tocEntries = [
    { title: '1. Introduction', pageNumber: 4, level: 1 as const },
    { title: '2. External Analysis', pageNumber: 7, level: 1 as const },
    { title: '3. Internal Analysis', pageNumber: 12, level: 1 as const },
    { title: '4. Strategic Options', pageNumber: 17, level: 1 as const },
    { title: '5. Implementation', pageNumber: 22, level: 1 as const },
    { title: '6. Action Plan', pageNumber: 28, level: 1 as const },
    { title: '7. Financial Plan', pageNumber: 31, level: 1 as const },
    { title: '8. Risk Management', pageNumber: 33, level: 1 as const },
    { title: '9. Conclusion', pageNumber: 35, level: 1 as const },
    {
      title: 'Appendix', pageNumber: 36, level: 1 as const, subsections: [
        { title: 'A. PESTLE Analysis', pageNumber: 36, level: 2 as const },
        { title: 'B. Market Sizing Methodology', pageNumber: 37, level: 2 as const },
        { title: 'C. Customer Personas', pageNumber: 38, level: 2 as const },
        { title: 'D. Competitor Analysis', pageNumber: 39, level: 2 as const },
        { title: 'E. Business Model Canvas', pageNumber: 40, level: 2 as const },
        { title: 'F. Modular Architecture', pageNumber: 41, level: 2 as const },
      ]
    },
  ];

  return (
    <div className="report-container">
      {/* Cover Page - No page number */}
      <CoverPage
        title="Fieldsman"
        subtitle="The road towards a European outdoor kitchen champion"
        author="Raymon H. Veldman | EMBA Sep 2024"
        date="2026"
      />

      {/* Acknowledgement Page - No page number */}
      <AcknowledgementPage />

      {/* About Author Page - No page number */}
      <AboutAuthorPage />

      {/* Glossary Page - No page number */}
      <GlossaryPage />

      {/* Executive Summary Page - No page number */}
      <ExecutiveSummaryPage />

      {/* Table of Contents */}
      <PageWrapper sectionLabel="CONTENTS" showPageNumber={false}>
        <TableOfContents entries={tocEntries} />
      </PageWrapper>

      {/* Section 1: Introduction */}
      <SectionDivider
        sectionNumber={1}
        title="Introduction"
        subtitle="The Fieldsman Story and Scaling Challenge"
      />
      <IntroductionSection />

      {/* Section 2: External Analysis */}
      <SectionDivider
        sectionNumber={2}
        title="External Analysis"
        subtitle="A €315M Opportunity Without a Scaled Leader"
        accentColor="var(--color-chart-2)"
      />
      <ExternalAnalysisSection />

      {/* Section 3: Internal Analysis */}
      <SectionDivider
        sectionNumber={3}
        title="Internal Analysis"
        subtitle="A Strong Foundation Constrained by Capacity"
        accentColor="var(--color-chart-3)"
      />
      <InternalAnalysisSection />

      {/* Section 4: Strategic Options */}
      <SectionDivider
        sectionNumber={4}
        title="Strategic Options"
        subtitle="Three Paths Forward, One Clear Winner"
        accentColor="var(--color-chart-4)"
      />
      <StrategicOptionsSection />

      {/* Section 5: Implementation */}
      <SectionDivider
        sectionNumber={5}
        title="Implementation"
        subtitle="Transforming Fieldsman for Scale"
        accentColor="var(--color-primary)"
      />
      <ImplementationSection />

      {/* Section 6: Action Plan */}
      <SectionDivider
        sectionNumber={6}
        title="Action Plan"
        subtitle="From 50 to 3,000 Kitchens (2026-2030)"
        accentColor="var(--color-chart-2)"
      />
      <ActionPlanSection />

      {/* Section 7: Financial Plan */}
      <SectionDivider
        sectionNumber={7}
        title="FINANCIAL PLAN"
        subtitle="PROJECTIONS & PERFORMANCE METRICS (2025-2030)"
        accentColor="var(--color-chart-3)"
      />
      <FinancialPlanSection />

      {/* Section 8: Risk Management */}
      <SectionDivider
        sectionNumber={8}
        title="RISK MANAGEMENT"
        subtitle="RISK REGISTER & MITIGATION STRATEGIES"
        accentColor="var(--color-chart-4)"
      />
      <RiskManagementSection />

      {/* Section 9: Conclusion */}
      <SectionDivider
        sectionNumber={9}
        title="CONCLUSION"
        subtitle="STRATEGIC SYNTHESIS & RECOMMENDATION"
        accentColor="var(--color-primary)"
      />
      <ConclusionSection />

      {/* Appendix */}
      <SectionDivider
        title="Appendix"
        subtitle="Supporting Materials"
        accentColor="var(--color-neutral-600)"
      />
      <AppendixSection />

      <style jsx global>{`
          .report-container {
            background: var(--color-neutral-100);
            counter-reset: page-count 0;
          }
          
          @media print {
            .report-container {
              background: white;
            }
          }
        `}</style>
    </div>
  );
}
