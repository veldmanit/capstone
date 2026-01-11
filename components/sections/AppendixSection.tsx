'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import PestleAnalysis from '@/components/sections/PestleAnalysis';
import MarketSizingMethodology from '@/components/sections/MarketSizingMethodology';
import CustomerPersonas from '@/components/sections/CustomerPersonas';
import CompetitorAnalysis from '@/components/sections/CompetitorAnalysis';
import BusinessModelCanvas from '@/components/sections/BusinessModelCanvas';
import ModularArchitecture from '@/components/sections/ModularArchitecture';

export default function AppendixSection() {
    return (
        <React.Fragment>
            {/* APPENDIX A: PESTLE Analysis */}
            <PageWrapper sectionLabel="APPENDIX">
                <PestleAnalysis />
            </PageWrapper>

            {/* APPENDIX B: Market Sizing */}
            <PageWrapper sectionLabel="APPENDIX">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix B: Market Sizing Methodology</h2>
                </div>
                <MarketSizingMethodology />
            </PageWrapper>

            {/* APPENDIX C: Customer Personas */}
            <PageWrapper sectionLabel="APPENDIX">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix C: Customer Research & Personas</h2>
                </div>
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
        </React.Fragment>
    );
}
