'use client';

import React from 'react';

export default function PestleSummaryVisual() {
    return (
        <div style={{ marginTop: 'var(--space-6)', marginBottom: 'var(--space-8)' }} data-export-as-image="true">
            <h3 style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--color-neutral-600)',
                marginBottom: 'var(--space-3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
            }}>Strategic PESTLE Summary</h3>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                border: '1px solid var(--color-neutral-200)',
                background: 'white',
                padding: '8px',
                borderRadius: '4px'
            }}>
                {/* Political */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">P</span>
                        <span className="title">Political</span>
                    </div>
                    <div className="pestle-content">
                        <strong>EU Customs Reform:</strong> Removal of de minimis exemption (2026) raises costs for cheap non-EU competitors.
                    </div>
                </div>

                {/* Economic */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">E</span>
                        <span className="title">Economic</span>
                    </div>
                    <div className="pestle-content">
                        <strong>Renovation Resilience:</strong> Construction downturn favors home upgrades. "Splurge" behavior remains high for luxury outdoor items.
                    </div>
                </div>

                {/* Social */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">S</span>
                        <span className="title">Social</span>
                    </div>
                    <div className="pestle-content">
                        <strong>The "Nomadic Garden":</strong> Gardens as multi-room extensions of the home. Wellness and biophilic design drive demand.
                    </div>
                </div>

                {/* Technological */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">T</span>
                        <span className="title">Technological</span>
                    </div>
                    <div className="pestle-content">
                        <strong>Dekton & Digital:</strong> Sintered stone durability is key. 3D configurators enable high-ticket remote sales.
                    </div>
                </div>

                {/* Legal */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">L</span>
                        <span className="title">Legal</span>
                    </div>
                    <div className="pestle-content">
                        <strong>Omgevingswet (NL):</strong> Clearer permit-free build rules. EU Gas Safety regulations favor compliant, local brands.
                    </div>
                </div>

                {/* Environmental */}
                <div className="pestle-card">
                    <div className="pestle-header">
                        <span className="letter">E</span>
                        <span className="title">Environmental</span>
                    </div>
                    <div className="pestle-content">
                        <strong>Climate Adaptation:</strong> Extended seasons require heating. Circular materials (Alu) essential for premium positioning.
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pestle-card {
                    background: var(--color-neutral-50);
                    border: 1px solid var(--color-neutral-100);
                    border-radius: 2px;
                    padding: 6px;
                }
                .pestle-header {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 4px;
                    border-bottom: 1px solid var(--color-neutral-200);
                    padding-bottom: 4px;
                }
                .letter {
                    background: var(--color-primary);
                    color: white;
                    font-size: 9px;
                    font-weight: 800;
                    width: 16px;
                    height: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 2px;
                }
                .title {
                    font-size: 9px;
                    font-weight: 700;
                    color: var(--color-primary);
                    text-transform: uppercase;
                }
                .pestle-content {
                    font-size: 8px;
                    line-height: 1.3;
                    color: var(--color-neutral-700);
                }
                .pestle-content strong {
                    color: var(--color-neutral-900);
                }
            `}</style>
        </div>
    );
}
