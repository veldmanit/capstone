'use client';

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import TextBlock from '@/components/content/TextBlock';
import RoadmapGantt from '@/components/charts/RoadmapGantt';
import KPIDashboard from '@/components/charts/KPIDashboard';

/**
 * Section 6: Action Plan
 * Detailing the phased roadmap and KPI framework.
 */
export default function ActionPlanSection() {
    return (
        <>
            {/* PAGE 1: Phased Roadmap */}
            <PageWrapper sectionLabel="SECTION 6: ACTION PLAN">
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: 'var(--space-4)',
                        color: 'var(--color-primary)'
                    }}>
                        6.1 Phased Roadmap: From Foundation to Leadership
                    </h2>
                    <TextBlock style={{ marginBottom: 'var(--space-6)' }}>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            Executing this strategy requires a disciplined, phased approach. Growth is not scheduled by calendar dates but triggered by demonstrated capability. Each phase must prove operational readiness before the next begins, ensuring that expansion never outpaces the organization's ability to deliver on its brand promise.
                        </p>
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)', marginBottom: '8px' }}>
                            The roadmap is structured around three parallel workstreams: Production (building the Integrated Hub), Commercial (scaling the AI-powered sales engine), and Organization (transitioning from founder-led to functional leadership). Progress in all three must remain synchronized.
                        </p>
                        <p style={{ fontSize: '9.5px', fontWeight: 700, lineHeight: '1.6', color: 'var(--color-primary)', margin: 0 }}>
                            The critical unlock is founder transition. This transition, targeted for mid-2026, is the single most important milestone in the entire roadmap.
                        </p>
                    </TextBlock>

                    {/* Phase Summary Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                        <div style={{ background: 'var(--color-neutral-50)', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-500)', marginBottom: '4px', letterSpacing: '0.05em' }}>PHASE 1: 2026</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px', color: 'var(--color-neutral-800)' }}>Foundation</h4>
                            <p style={{ fontSize: '8px', lineHeight: '1.4', margin: 0, color: 'var(--color-neutral-600)' }}>
                                Prove the model in NL. Waterjet operational. Founders full-time. First 250 units with stable margins.
                            </p>
                            <div style={{ fontSize: '9px', fontWeight: 800, marginTop: '8px', paddingTop: '6px', borderTop: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-700)' }}>Target: €0.8M</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-500)', marginBottom: '4px', letterSpacing: '0.05em' }}>PHASE 2: 2027</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px', color: 'var(--color-neutral-800)' }}>Scale NL/BE</h4>
                            <p style={{ fontSize: '8px', lineHeight: '1.4', margin: 0, color: 'var(--color-neutral-600)' }}>
                                Hit 400 units in NL. Launch Belgium. DE pilot with limited activation. Team to 8 FTE.
                            </p>
                            <div style={{ fontSize: '9px', fontWeight: 800, marginTop: '8px', paddingTop: '6px', borderTop: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-700)' }}>Target: €2.0M</div>
                        </div>
                        <div style={{ background: 'var(--color-neutral-50)', padding: '12px', borderRadius: '4px', border: '1px solid var(--color-neutral-200)' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-500)', marginBottom: '4px', letterSpacing: '0.05em' }}>PHASE 3: 2028-29</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px', color: 'var(--color-neutral-800)' }}>Accelerate DE</h4>
                            <p style={{ fontSize: '8px', lineHeight: '1.4', margin: 0, color: 'var(--color-neutral-600)' }}>
                                Full Germany activation. 2,000+ units/year. Dual suppliers active. DE Country Manager. Team to 15 FTE.
                            </p>
                            <div style={{ fontSize: '9px', fontWeight: 800, marginTop: '8px', paddingTop: '6px', borderTop: '1px solid var(--color-neutral-200)', color: 'var(--color-neutral-700)' }}>Target: €7.0M</div>
                        </div>
                        <div style={{ background: 'var(--color-primary)', padding: '12px', borderRadius: '4px', color: 'white' }}>
                            <div style={{ fontSize: '8px', fontWeight: 800, opacity: 0.8, marginBottom: '4px', letterSpacing: '0.05em' }}>PHASE 4: 2030</div>
                            <h4 style={{ fontSize: '11px', fontWeight: 800, marginBottom: '6px', color: 'white' }}>Lead</h4>
                            <p style={{ fontSize: '8px', lineHeight: '1.4', margin: 0, opacity: 0.9 }}>
                                European outdoor kitchen champion. 50% volume from DE. 19 FTE. First positive EBITDA year.
                            </p>
                            <div style={{ fontSize: '9px', fontWeight: 800, marginTop: '8px', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>Target: €10.0M</div>
                        </div>
                    </div>

                    {/* The Gantt Chart */}
                    <div style={{ marginBottom: 'var(--space-8)' }}>
                        <RoadmapGantt />
                    </div>
                </div>
            </PageWrapper>

            {/* PAGE 2: KPI Dashboard */}
            <PageWrapper sectionLabel="SECTION 6: ACTION PLAN">
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
                        <p style={{ fontSize: '9.5px', lineHeight: '1.6', color: 'var(--color-neutral-700)' }}>
                            Success requires tracking both short-term execution and long-term strategic progress. This balanced scorecard ensures accountability across Commercial growth, Operational excellence, and Financial sustainability.
                        </p>
                    </TextBlock>
                    <KPIDashboard />
                </div>
            </PageWrapper>
        </>
    );
}
