'use client';

import React from 'react';

/**
 * PortersFiveForces
 * 
 * A high-fidelity, high-density visualization of Porter's Five Forces.
 * Designed for McKinsey/BCG-style consulting reports.
 */
const PortersFiveForces = () => {
    return (
        <div className="framework-canvas">
            <div className="forces-grid">
                {/* Top: Threat of New Entrants */}
                <div className="force-node top">
                    <div className="node-box">
                        <div className="node-header">
                            <span className="node-label">THREAT OF NEW ENTRANTS</span>
                            <span className="node-rating rating-medium">MEDIUM</span>
                        </div>
                        <p className="node-text">Local craftsmen can enter easily, but scaling quality and supply chain is hard.</p>
                    </div>
                </div>

                {/* Middle Row: Supplier Power -> Industry Rivalry -> Buyer Power */}
                <div className="middle-row">
                    {/* Left: Supplier Power */}
                    <div className="force-node left">
                        <div className="node-box">
                            <div className="node-header">
                                <span className="node-label">SUPPLIER POWER</span>
                                <span className="node-rating rating-medium">MEDIUM</span>
                            </div>
                            <p className="node-text">Steel/ceramic dependency requires structured supplier governance.</p>
                        </div>
                    </div>

                    {/* Center: Industry Rivalry */}
                    <div className="force-node center">
                        <div className="rivalry-box">
                            <div className="node-header">
                                <span className="node-label">INDUSTRY RIVALRY</span>
                                <span className="node-rating rating-medium">MEDIUM</span>
                            </div>
                            <p className="node-text">High fragmentation means no dominant leader exists. Room for a challenger build-out.</p>
                            <div className="directional-arrows">
                                {/* Top Arrow */}
                                <svg className="svg-arrow s-top" width="12" height="24" viewBox="0 0 12 24">
                                    <path d="M6 2v20M6 2L2 6M6 2l4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {/* Right Arrow */}
                                <svg className="svg-arrow s-right" width="24" height="12" viewBox="0 0 24 12">
                                    <path d="M2 6h20M22 6l-4-4M22 6l-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {/* Bottom Arrow */}
                                <svg className="svg-arrow s-bottom" width="12" height="24" viewBox="0 0 12 24">
                                    <path d="M6 2v20M2 18l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {/* Left Arrow */}
                                <svg className="svg-arrow s-left" width="24" height="12" viewBox="0 0 24 12">
                                    <path d="M22 6H2M2 6l4-4M2 6l4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right: Buyer Power */}
                    <div className="force-node right">
                        <div className="node-box">
                            <div className="node-header">
                                <span className="node-label">BUYER POWER</span>
                                <span className="node-rating rating-high">MID-HIGH</span>
                            </div>
                            <p className="node-text">Discretionary purchase + online comparison. Brand trust reduces sensitivity.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom: Threat of Substitutes */}
                <div className="force-node bottom">
                    <div className="node-box">
                        <div className="node-header">
                            <span className="node-label">THREAT OF SUBSTITUTES</span>
                            <span className="node-rating rating-medium">MEDIUM</span>
                        </div>
                        <p className="node-text">DIY and portable grills exist but lack the design/durability/modularity combination.</p>
                    </div>
                </div>
            </div>

            {/* Strategic Implications Row */}
            <div className="implications-bar">
                <span className="imp-lbl">CONCLUSION:</span>
                <p className="imp-text">Favorable for companies that can scale without compromising lead time, quality, and brand equity.</p>
            </div>

            <style jsx>{`
                .framework-canvas {
                    background: white;
                    padding: var(--space-8) 0;
                    font-family: var(--font-body);
                    width: 100%;
                    margin: var(--space-4) 0;
                }

                .forces-grid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-4);
                    margin-bottom: var(--space-8);
                }

                .middle-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: var(--space-4);
                    width: 100%;
                }

                .force-node {
                    width: 30%;
                }

                .force-node.top, .force-node.bottom {
                    width: 42%;
                }

                .node-box, .rivalry-box {
                    background: white;
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-md);
                    padding: var(--space-4) var(--space-5);
                    min-height: 85px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    position: relative;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }

                .rivalry-box {
                    background: var(--color-neutral-900);
                    border-color: var(--color-neutral-900);
                    color: white;
                    z-index: 10;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }

                .node-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 8px;
                }

                .node-label {
                    font-size: 8.5px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    color: var(--color-neutral-500);
                }

                .rivalry-box .node-label {
                    color: var(--color-neutral-400);
                }

                .node-rating {
                    font-size: 9px;
                    font-weight: 800;
                }

                .rating-medium { color: #4A5D23; } /* Olive */
                .rating-high { color: #A69475; }  /* Dark Beige */
                .rivalry-box .rating-medium { color: #E6DDBF; } /* Sandstone */

                .node-text {
                    font-size: 10px;
                    line-height: 1.4;
                    color: var(--color-neutral-600);
                    margin: 0;
                }

                .rivalry-box .node-text {
                    color: rgba(255,255,255,0.9);
                }

                /* SVG Arrows */
                .directional-arrows {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    pointer-events: none;
                }

                .svg-arrow {
                    position: absolute;
                    color: var(--color-neutral-300);
                }

                .s-top { top: -32px; left: 50%; transform: translateX(-50%); }
                .s-right { right: -32px; top: 50%; transform: translateY(-50%); }
                .s-bottom { bottom: -32px; left: 50%; transform: translateX(-50%); }
                .s-left { left: -32px; top: 50%; transform: translateY(-50%); }

                /* Implications Bar */
                .implications-bar {
                    display: flex;
                    align-items: center;
                    gap: var(--space-4);
                    padding: var(--space-4) var(--space-5);
                    background-color: var(--color-neutral-50);
                    border-radius: var(--border-radius-md);
                    border: 1px solid var(--color-neutral-200);
                    margin: 0 var(--space-4);
                }

                .imp-lbl {
                    font-size: 9px;
                    font-weight: 800;
                    color: var(--color-neutral-900);
                    white-space: nowrap;
                    letter-spacing: 0.05em;
                }

                .imp-text {
                    font-size: 10.5px;
                    font-weight: 500;
                    color: var(--color-neutral-700);
                    margin: 0;
                }
            `}</style>
        </div>
    );
};

export default PortersFiveForces;
