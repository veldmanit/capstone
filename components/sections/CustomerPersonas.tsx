'use client';

import React from 'react';
import TextBlock from '@/components/content/TextBlock';

export default function CustomerPersonas() {
    return (
        <div style={{ marginBottom: 'var(--space-12)' }}>
            {/* Header handled by parent */}
            <h3 style={{ fontSize: '18px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>M3. Insights & Buying Behavior</h3>

            {/* M3.1 Research Objectives */}
            <TextBlock>
                <div style={{ background: 'var(--color-neutral-100)', padding: 'var(--space-4)', borderRadius: 'var(--border-radius-sm)', marginBottom: 'var(--space-6)' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-2)' }}>M3.1 Research Objectives</h4>
                    <p style={{ fontSize: '11px', lineHeight: 1.5, color: 'var(--color-neutral-700)' }}>
                        The customer research aimed to answer five strategic questions:
                        (1) What motivates the purchase?
                        (2) What decision criteria matter most?
                        (3) What trade-offs are acceptable?
                        (4) How does the buying journey work?
                        (5) Which segments are most valuable?
                    </p>
                </div>
            </TextBlock>

            {/* M3.2 Key Customer Insights */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-3)' }}>M3.2 Key Customer Insights</h4>
                <div className="table-container">
                    <table className="insights-table">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Insight</th>
                                <th style={{ width: '40%' }}>Finding</th>
                                <th style={{ width: '40%' }}>Strategic Implication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="insight-title">1. Lifestyle Purchase</td>
                                <td>Outdoor kitchens are social centerpieces, not just functional cooking stations.</td>
                                <td>Brand, aesthetics, and design quality are central to the value proposition.</td>
                            </tr>
                            <tr>
                                <td className="insight-title">2. Price Anchoring</td>
                                <td>Customers compare to indoor kitchens but apply a "roughness" discount for outdoor use.</td>
                                <td>Mid-premium positioning (€3k-€8k) is structurally attractive vs. indoor prices.</td>
                            </tr>
                            <tr>
                                <td className="insight-title">3. Trade-off Acceptance</td>
                                <td>Willing to accept fewer features (e.g., drawers, appliances) if design and durability remain strong.</td>
                                <td>Validates Fieldsman's simplified modular, D2C approach (no complex installation).</td>
                            </tr>
                            <tr>
                                <td className="insight-title">4. Digital-First Journey</td>
                                <td>Discovery is almost entirely online, but physical reassurance is often needed for conversion.</td>
                                <td>Requires a 'phygital' model: strong online configurator + strategic showroom partners.</td>
                            </tr>
                            <tr>
                                <td className="insight-title">5. Lead Time Matters</td>
                                <td>Long lead times (6-12 weeks) create uncertainty and reduce conversion in seasonal markets.</td>
                                <td>A 2-week delivery target is a significant competitive advantage.</td>
                            </tr>
                            <tr>
                                <td className="insight-title">6. Customization Limits</td>
                                <td>Customers want personalization (feeling unique) but not endless complexity (paralysis).</td>
                                <td>A modular system with curated options (standardized customization) is optimal.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* M3.3 Customer Personas */}
            <div>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: 'var(--space-4)' }}>M3.3 Customer Persona Deep Dive</h4>

                <div className="persona-grid">
                    {/* Persona 1: The Proud Host (Core) */}
                    <div className="persona-card core">
                        <div className="persona-header" style={{ background: 'var(--color-primary)', color: 'white' }}>
                            <div className="persona-role">CORE TARGET</div>
                            <h5 className="persona-name">The Proud Host</h5>
                            <div className="persona-profile">Age 35–55 • Family • Homeowner</div>
                        </div>
                        <div className="persona-body">
                            <div className="attribute">
                                <span className="label">Motivation</span>
                                <span className="text">Hosting friends/family. Creating a social centerpiece in the garden to extend living space.</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trigger</span>
                                <span className="text quote">"I want my garden to feel complete and premium."</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Decision Criteria</span>
                                <span className="text">Design aesthetics, durability ("built to last"), fit with garden architecture, social proof.</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trade-offs</span>
                                <span className="text">Accepts fewer drawers/appliances. Doesn't need professional chef features.</span>
                            </div>
                            <div className="purchase-stat">
                                <span className="stat-label">Typical Purchase</span>
                                <span className="stat-value">€4,000 – €8,000</span>
                                <span className="stat-detail">3–6 modules + Kamado</span>
                            </div>
                        </div>
                    </div>

                    {/* Persona 2: The Enthusiast */}
                    <div className="persona-card">
                        <div className="persona-header" style={{ background: 'var(--color-neutral-800)', color: 'white' }}>
                            <div className="persona-role">TECHNICAL USER</div>
                            <h5 className="persona-name">Cooking Enthusiast</h5>
                            <div className="persona-profile">Age 30–60 • Passionate Cook</div>
                        </div>
                        <div className="persona-body">
                            <div className="attribute">
                                <span className="label">Motivation</span>
                                <span className="text">Professional outdoor cooking experience. Wants specific equipment (Plancha, Kamado).</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trigger</span>
                                <span className="text quote">"I need a serious workspace for my culinary projects."</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Decision Criteria</span>
                                <span className="text">Worktop space, heat resistance, cleaning ease, equipment integration.</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trade-offs</span>
                                <span className="text">Willing to pay more for functionality. Less sensitive to pure aesthetics than Proud Host.</span>
                            </div>
                            <div className="purchase-stat">
                                <span className="stat-label">Typical Purchase</span>
                                <span className="stat-value">€5,000 – €10,000</span>
                                <span className="stat-detail">4–8 modules, High Utility</span>
                            </div>
                        </div>
                    </div>

                    {/* Persona 3: Design-Driven Couple */}
                    <div className="persona-card high-value">
                        <div className="persona-header" style={{ background: 'var(--color-chart-3)', color: 'white' }}>
                            <div className="persona-role">HIGH VALUE</div>
                            <h5 className="persona-name">Design Couple</h5>
                            <div className="persona-profile">Age 40–60 • Design Oriented</div>
                        </div>
                        <div className="persona-body">
                            <div className="attribute">
                                <span className="label">Motivation</span>
                                <span className="text">Aesthetic integration with high-end garden architecture. Visual harmony is paramount.</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trigger</span>
                                <span className="text quote">"We want something that looks like modern furniture, not a BBQ."</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Decision Criteria</span>
                                <span className="text">Material finish, minimalist lines, exclusivity, 'wow' factor.</span>
                            </div>
                            <div className="attribute">
                                <span className="label">Trade-offs</span>
                                <span className="text">Low price sensitivity. Will not accept plastic or cheap-looking finishes.</span>
                            </div>
                            <div className="purchase-stat">
                                <span className="stat-label">Typical Purchase</span>
                                <span className="stat-value">€8,000 – €15,000</span>
                                <span className="stat-detail">6–10 modules, Premium Finish</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .table-container {
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                }
                .insights-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 10px;
                }
                .insights-table th {
                    background: var(--color-neutral-100);
                    padding: 8px;
                    text-align: left;
                    font-weight: 700;
                    border-bottom: 2px solid var(--color-neutral-200);
                }
                .insights-table td {
                    padding: 8px;
                    border-bottom: 1px solid var(--color-neutral-100);
                    vertical-align: top;
                    line-height: 1.4;
                }
                .insight-title {
                    font-weight: 700;
                    color: var(--color-primary);
                }

                .persona-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: var(--space-4);
                }

                .persona-card {
                    background: white;
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .persona-card.core {
                    border: 2px solid var(--color-primary);
                    box-shadow: 0 4px 6px rgba(0,0,0,0.05);
                }

                .persona-header {
                    padding: var(--space-4);
                    text-align: center;
                }

                .persona-role {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.05em;
                    opacity: 0.9;
                    margin-bottom: 4px;
                }

                .persona-name {
                    font-family: var(--font-display);
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0 0 4px 0;
                }

                .persona-profile {
                    font-size: 10px;
                    opacity: 0.9;
                    font-style: italic;
                }

                .persona-body {
                    padding: var(--space-4);
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-3);
                }

                .attribute {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .label {
                    font-size: 9px;
                    font-weight: 700;
                    color: var(--color-neutral-500);
                    text-transform: uppercase;
                }

                .text {
                    font-size: 10px;
                    color: var(--color-neutral-800);
                    line-height: 1.4;
                }

                .text.quote {
                    font-style: italic;
                    color: var(--color-neutral-600);
                }

                .purchase-stat {
                    margin-top: auto;
                    padding-top: var(--space-3);
                    border-top: 1px dashed var(--color-neutral-200);
                }

                .stat-label {
                    display: block;
                    font-size: 9px;
                    color: var(--color-neutral-500);
                    margin-bottom: 2px;
                }

                .stat-value {
                    display: block;
                    font-size: 14px;
                    font-weight: 700;
                    color: var(--color-neutral-900);
                }

                .stat-detail {
                    display: block;
                    font-size: 10px;
                    color: var(--color-neutral-600);
                }
            `}</style>
        </div>
    );
}
