'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import PestleAnalysis from '@/components/sections/PestleAnalysis';
import MarketSizingMethodology from '@/components/sections/MarketSizingMethodology';
import CustomerPersonas from '@/components/sections/CustomerPersonas';
import CompetitorAnalysis from '@/components/sections/CompetitorAnalysis';
import BusinessModelCanvas from '@/components/sections/BusinessModelCanvas';
import ModularArchitecture from '@/components/sections/ModularArchitecture';
import MarketingAssumptions from '@/components/sections/MarketingAssumptions';

export default function AppendixSection() {
    return (
        <React.Fragment>
            {/* APPENDIX A: PESTLE Analysis */}
            <PageWrapper sectionLabel="APPENDIX">
                <PestleAnalysis />
            </PageWrapper>

            {/* APPENDIX B: Market Sizing (Page 1) */}
            <PageWrapper sectionLabel="APPENDIX">
                <MarketSizingMethodology part={1} />
            </PageWrapper>

            {/* APPENDIX B: Market Sizing (Page 2) */}
            <PageWrapper sectionLabel="APPENDIX">
                <MarketSizingMethodology part={2} />
            </PageWrapper>

            {/* APPENDIX C: Customer Personas */}
            <PageWrapper sectionLabel="APPENDIX">
                <CustomerPersonas />
            </PageWrapper>

            {/* APPENDIX D: Competitor Analysis */}
            <PageWrapper sectionLabel="APPENDIX">
                <CompetitorAnalysis />
            </PageWrapper>

            {/* APPENDIX E: Business Model Canvas */}
            <PageWrapper sectionLabel="APPENDIX">
                <BusinessModelCanvas />
            </PageWrapper>

            {/* APPENDIX F: Modular Architecture */}
            <PageWrapper sectionLabel="APPENDIX">
                <ModularArchitecture />
            </PageWrapper>

            {/* APPENDIX G: Marketing Assumptions */}
            <PageWrapper sectionLabel="APPENDIX">
                <MarketingAssumptions />
            </PageWrapper>
        </React.Fragment>
    );
}
