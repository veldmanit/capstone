'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import RoadmapGantt from '@/components/charts/RoadmapGantt';

import KPIDashboard from '@/components/charts/KPIDashboard';

export default function ActionPlanSection() {
    return (
        <PageWrapper sectionLabel="SECTION 6: ACTION PLAN">
            {/* 6.1 Phased Roadmap */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-primary)'
                }}>
                    6.1 Phased Roadmap: From Foundation to Leadership
                </h2>
                <TextBlock>
                    <p>
                        Executing this strategy requires a disciplined, phased approach. The roadmap is structured into four distinct phases, each with clear operational milestones and financial targets.
                    </p>
                </TextBlock>
            </div>

            {/* The Gantt Chart */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <RoadmapGantt />
            </div>

            {/* 6.2 KPI Dashboard */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    marginBottom: 'var(--space-4)',
                    color: 'var(--color-primary)'
                }}>
                    6.2 KPI Dashboard: Balanced Performance Measurement
                </h2>
                <TextBlock style={{ marginBottom: 'var(--space-4)' }}>
                    <p>
                        Success requires tracking both short-term execution and long-term strategic progress. This balanced scorecard ensures accountability across Commercial growth, Operational excellence, and Financial sustainability.
                    </p>
                </TextBlock>
                <KPIDashboard />
            </div>

        </PageWrapper>
    );
}
