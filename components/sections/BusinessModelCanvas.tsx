'use client';

import React from 'react';

export default function BusinessModelCanvas() {
    return (
        <div style={{ marginBottom: 'var(--space-8)' }} data-export-as-image="true">
            <h2 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 800, color: 'var(--color-neutral-900)', marginBottom: 'var(--space-2)' }}>Appendix E: Business Model Canvas</h2>
            <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>Strategic Overview (2026+)</h3>

            <div className="bmc-container">
                {/* Top Row: Strategic Drivers */}

                {/* Key Partners */}
                <div className="bmc-block" style={{ gridArea: 'kp' }}>
                    <div className="bmc-header">Key Partners</div>
                    <ul className="bmc-list">
                        <li><strong>Supply Chain:</strong> Steel frame & console suppliers (China), Ceramic countertop suppliers (China), Logistics partners.</li>
                        <li><strong>Commercial:</strong> Showroom partners (NL/BE/DE), Installation partners (DE), Payment/Funding platforms.</li>
                    </ul>
                </div>

                {/* Key Activities */}
                <div className="bmc-block" style={{ gridArea: 'ka' }}>
                    <div className="bmc-header">Key Activities</div>
                    <ul className="bmc-list">
                        <li>Product R&D & Design</li>
                        <li>Supply Chain Management</li>
                        <li>Quality Control (ISO/AQL)</li>
                        <li>Final Assembly & Logistics</li>
                        <li>Digital Marketing & Sales</li>
                        <li>Partner Management</li>
                    </ul>
                </div>

                {/* Value Proposition */}
                <div className="bmc-block val-prop" style={{ gridArea: 'vp' }}>
                    <div className="bmc-header">Value Proposition</div>
                    <p style={{ fontSize: 'var(--font-size-small)', fontWeight: 600, marginBottom: '6px', color: 'var(--color-primary-dark)' }}>
                        "Design-led, durable outdoor kitchens at fair mid-premium prices."
                    </p>
                    <ul className="bmc-list">
                        <li><strong>Modular Simplicity:</strong> Customization without complexity.</li>
                        <li><strong>D2C Value:</strong> Premium quality without retail markups.</li>
                        <li><strong>Speed:</strong> 2-week delivery vs. industry standard 8-12 weeks.</li>
                        <li><strong>Trust:</strong> 15-year warranty & local showroom presence.</li>
                    </ul>
                </div>

                {/* Customer Relationships */}
                <div className="bmc-block" style={{ gridArea: 'cr' }}>
                    <div className="bmc-header">Customer Relationships</div>
                    <ul className="bmc-list">
                        <li><strong>Direct:</strong> 3D Configurator, Video Consultations, Chat.</li>
                        <li><strong>Trust:</strong> Showroom visits (experience centers), Reviews (Trustpilot), After-sales service.</li>
                        <li><strong>Community:</strong> User-generated content, Recipe sharing.</li>
                    </ul>
                </div>

                {/* Customer Segments */}
                <div className="bmc-block" style={{ gridArea: 'cs' }}>
                    <div className="bmc-header">Customer Segments</div>
                    <ul className="bmc-list">
                        <li><strong>Demographic:</strong> Mid-premium homeowners (30–60), Income &gt;€60k.</li>
                        <li><strong>Psychographic:</strong> "The Proud Host", "Design-Driven Couple", "Outdoor Cooking Enthusiast".</li>
                        <li><strong>Behavior:</strong> Values durability, aesthetics, and ease of purchase.</li>
                    </ul>
                </div>

                {/* Key Resources */}
                <div className="bmc-block" style={{ gridArea: 'kr' }}>
                    <div className="bmc-header">Key Resources</div>
                    <ul className="bmc-list">
                        <li>Modular Product Platform (IP)</li>
                        <li>Brand Identity & Website</li>
                        <li>Supplier Network (Exclusive)</li>
                        <li>Founder Expertise</li>
                        <li>Customer Data (CRM)</li>
                    </ul>
                </div>

                {/* Channels */}
                <div className="bmc-block" style={{ gridArea: 'ch' }}>
                    <div className="bmc-header">Channels</div>
                    <ul className="bmc-list">
                        <li><strong>Primary:</strong> D2C Website & 3D Configurator.</li>
                        <li><strong>Marketing:</strong> Paid Social (Meta/Pinterest), Google Ads, Content.</li>
                        <li><strong>Physical:</strong> Partner Showrooms (Experience spots).</li>
                        <li><strong>Referral:</strong> Existing customer advocacy.</li>
                    </ul>
                </div>

                {/* Bottom Row: Financials */}
                <div className="bmc-block financial" style={{ gridArea: 'cst' }}>
                    <div className="bmc-header">Cost Structure</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <ul className="bmc-list">
                            <li><strong>COGS:</strong> Materials, Manufacturing, Freight.</li>
                            <li><strong>Labor:</strong> Assembly, Warehouse.</li>
                        </ul>
                        <ul className="bmc-list">
                            <li><strong>Marketing:</strong> Ad spend, Content production.</li>
                            <li><strong>Ops:</strong> Logistics, Systems, Showroom fees.</li>
                        </ul>
                    </div>
                </div>

                {/* Revenue Streams */}
                <div className="bmc-block financial" style={{ gridArea: 'rs' }}>
                    <div className="bmc-header">Revenue Streams</div>
                    <ul className="bmc-list">
                        <li><strong>Module Sales:</strong> Core kitchen units (High volume).</li>
                        <li><strong>Upsell Options:</strong> Sinks, Fridges, Storage solutions, Accessories (High margin).</li>
                        <li><strong>Premium Configs:</strong> Large L-shapes, Island setups (High ticket).</li>
                        <li><strong>Service (Future):</strong> Maintenance/Cleaning packages.</li>
                    </ul>
                </div>
            </div>

            <style jsx>{`
                .bmc-container {
                    display: grid;
                    grid-template-areas: 
                        "kp kp ka ka vp vp cr cr cs cs"
                        "kp kp kr kr vp vp ch ch cs cs"
                        "cst cst cst cst cst rs rs rs rs rs";
                    grid-template-columns: repeat(10, 1fr);
                    grid-template-rows: auto auto auto;
                    gap: 6px;
                    background: white;
                    border: 1px solid var(--color-neutral-200);
                    border-radius: 4px;
                    padding: 8px;
                }

                .bmc-block {
                    background: var(--color-neutral-50);
                    border: 1px solid var(--color-neutral-200);
                    border-radius: 2px;
                    padding: 8px;
                    position: relative;
                    min-height: 100px;
                }

                .bmc-block.financial {
                    background: #f8fafc;
                    border-color: #e2e8f0;
                    min-height: 80px;
                }
                
                .bmc-block.val-prop {
                    background: #f0f9ff;
                    border-color: var(--color-primary-light);
                    grid-row: span 2;
                }

                .bmc-header {
                    font-size: var(--font-size-h4);
                    font-weight: 800;
                    text-transform: uppercase;
                    color: var(--color-neutral-800);
                    margin-bottom: 6px;
                    border-bottom: 2px solid var(--color-neutral-200);
                    padding-bottom: 2px;
                }

                .bmc-list {
                    padding-left: 12px;
                    margin: 0;
                }

                .bmc-list li {
                    font-size: var(--font-size-tiny);
                    color: var(--color-neutral-700);
                    margin-bottom: 3px;
                    line-height: 1.3;
                }
            `}</style>
        </div>
    );
}
