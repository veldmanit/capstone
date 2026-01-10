'use client';

import React from 'react';

/**
 * MarketSizingPyramid
 * 
 * Visualization for TAM/SAM/SOM market sizing.
 * McKinsey-Style: Perfectly aligned sloped labels, segmented country layers,
 * and high-density data integration.
 */
export default function MarketSizingPyramid() {
    return (
        <div className="pyramid-container">
            <h2 className="chart-title">
                Market Sizing: The "Missing Middle" Opportunity
            </h2>
            <p className="chart-subtitle">
                Netherlands, Belgium & Germany — Modular Outdoor Kitchens
            </p>

            <div className="pyramid-wrapper">
                <div className="pyramid-column">

                    {/* SOM - Top Tier (Priority Shift: ~35% NL) */}
                    <div className="pyramid-level som-level">
                        <div className="pyramid-shape som-shape">
                            <div className="segment de" style={{ width: '55%' }}></div>
                            <div className="segment nl" style={{ width: '35%' }}></div>
                            <div className="segment be" style={{ width: '10%' }}></div>
                        </div>

                        {/* Right Label (Values + NL-Heavy Breakdown) */}
                        <div className="label-group right">
                            <div className="connector-line"></div>
                            <div className="text-content">
                                <div className="value color-som">€2.7–6.4M SOM</div>
                                <div className="subtext">
                                    🇩🇪 €1.5–3.5M 🇳🇱 €0.9–2.2M 🇧🇪 €0.3–0.7M
                                </div>
                            </div>
                        </div>

                        {/* Left Label */}
                        <div className="label-group left">
                            <div className="text-content">
                                <span className="badge bg-som">SOM</span>
                                <div className="subtext">Obtainable Market</div>
                            </div>
                            <div className="connector-line"></div>
                        </div>
                    </div>

                    {/* SAM - Middle Tier (Standard Market Split) */}
                    <div className="pyramid-level sam-level">
                        <div className="pyramid-shape sam-shape">
                            <div className="segment de" style={{ width: '80%' }}></div>
                            <div className="segment nl" style={{ width: '13%' }}></div>
                            <div className="segment be" style={{ width: '7%' }}></div>
                        </div>

                        {/* Right Label (Values + Standard Breakdown) */}
                        <div className="label-group right">
                            <div className="connector-line"></div>
                            <div className="text-content">
                                <div className="value color-sam">€110M SAM</div>
                                <div className="subtext">
                                    🇩🇪 €88M 🇳🇱 €14M 🇧🇪 €8M
                                </div>
                            </div>
                        </div>

                        {/* Left Label */}
                        <div className="label-group left">
                            <div className="text-content">
                                <span className="badge bg-sam">SAM</span>
                                <div className="subtext">€2K–€10K Segment</div>
                            </div>
                            <div className="connector-line"></div>
                        </div>
                    </div>

                    {/* TAM - Bottom Tier (Standard Market Split) */}
                    <div className="pyramid-level tam-level">
                        <div className="pyramid-shape tam-shape">
                            <div className="segment de" style={{ width: '80%' }}></div>
                            <div className="segment nl" style={{ width: '13%' }}></div>
                            <div className="segment be" style={{ width: '7%' }}></div>
                        </div>

                        {/* Right Label (Values + Standard Breakdown) */}
                        <div className="label-group right">
                            <div className="connector-line"></div>
                            <div className="text-content">
                                <div className="value color-tam">€315M TAM</div>
                                <div className="subtext">
                                    🇩🇪 €251M 🇳🇱 €40M 🇧🇪 €24M
                                </div>
                            </div>
                        </div>

                        {/* Left Label */}
                        <div className="label-group left">
                            <div className="text-content">
                                <span className="badge bg-tam">TAM</span>
                                <div className="subtext">Total Addressable Market</div>
                            </div>
                            <div className="connector-line"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Country Breakdown Cards - Perfectly Aligned */}
            <div className="breakdown-grid">
                <div className="country-card">
                    <div className="flag">🇩🇪</div>
                    <div className="country-header">GERMANY</div>
                    <div className="country-value">€251M</div>
                    <div className="country-meta">80% of TAM</div>
                    <div className="country-target">SOM Target: 2.0–5.0%</div>
                </div>
                <div className="country-card highlight-border">
                    <div className="flag">🇳🇱</div>
                    <div className="country-header">NETHERLANDS</div>
                    <div className="country-value">€40M</div>
                    <div className="country-meta">13% of TAM</div>
                    <div className="country-target highlight-text">SOM Target: 5.0–10.0%</div>
                </div>
                <div className="country-card">
                    <div className="flag">🇧🇪</div>
                    <div className="country-header">BELGIUM</div>
                    <div className="country-value">€24M</div>
                    <div className="country-meta">7% of TAM</div>
                    <div className="country-target">SOM Target: 3.0–7.0%</div>
                </div>
            </div>

            {/* Country Legend */}
            <div className="country-legend">
                <div className="legend-item"><span className="dot de"></span> Germany (80%)</div>
                <div className="legend-item"><span className="dot nl"></span> Netherlands (13%)</div>
                <div className="legend-item"><span className="dot be"></span> Belgium (7%)</div>
            </div>

            <style jsx>{`
        .pyramid-container {
          background: white;
          padding: var(--space-6) 0;
          font-family: var(--font-body);
          margin-bottom: var(--space-6);
          width: 100%;
        }
        
        .chart-title {
          text-align: center;
          font-size: 19px;
          font-weight: 700;
          color: var(--color-neutral-900);
          margin-bottom: var(--space-1);
          font-family: var(--font-display);
          letter-spacing: -0.01em;
        }

        .chart-subtitle {
          text-align: center;
          font-size: 14px;
          color: var(--color-neutral-500);
          margin-bottom: var(--space-12);
        }

        .pyramid-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 0 40px;
        }

        .pyramid-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .pyramid-level {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Pyramid Shapes - Segmented with Sharp White Dividers */
        .pyramid-shape {
          display: flex;
          overflow: hidden;
          background-color: var(--color-neutral-100);
        }

        .segment {
          height: 100%;
          border-right: 1.5px solid rgba(255,255,255,0.25);
        }
        .segment:last-child { border-right: none; }

        .som-shape {
          height: 85px;
          width: 120px;
          clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
          z-index: 3;
        }
        .som-shape .de { background-color: #10B981; } 
        .som-shape .nl { background-color: #34D399; } 
        .som-shape .be { background-color: #6EE7B7; } 

        .sam-shape {
          height: 100px;
          width: 220px;
          clip-path: polygon(14% 0%, 86% 0%, 100% 100%, 0% 100%);
          margin-top: -1px;
          z-index: 2;
        }
        .sam-shape .de { background-color: #3B82F6; } 
        .sam-shape .nl { background-color: #60A5FA; } 
        .sam-shape .be { background-color: #93C5FD; } 

        .tam-shape {
          height: 115px;
          width: 320px;
          clip-path: polygon(9% 0%, 91% 0%, 100% 100%, 0% 100%);
          margin-top: -1px;
          z-index: 1;
        }
        .tam-shape .de { background-color: #334155; } 
        .tam-shape .nl { background-color: #475569; } 
        .tam-shape .be { background-color: #64748B; } 

        /* Perfectly Centered Label Positioning */
        .label-group {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        /* Distance from Center: Half Width + 12px Gap */
        .som-level .right { left: calc(50% + 60px + 12px); }
        .som-level .left  { right: calc(50% + 60px + 12px); }

        .sam-level .right { left: calc(50% + 110px + 12px); }
        .sam-level .left  { right: calc(50% + 110px + 12px); }

        .tam-level .right { left: calc(50% + 160px + 12px); }
        .tam-level .left  { right: calc(50% + 160px + 12px); }

        /* Connector Lines - Refined Styling */
        .connector-line {
          height: 1px;
          background-color: var(--color-neutral-300); 
          width: 18px;
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        
        .right .text-content { text-align: left; }
        .left .text-content { text-align: right; }

        .value {
          font-weight: 700;
          font-size: 15px;
          font-family: var(--font-display);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        
        .subtext {
          font-size: 9px; 
          color: var(--color-neutral-600);
          margin-top: 3px;
          white-space: nowrap;
          font-weight: 500;
        }

        .badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          color: white;
          min-width: 40px;
          text-align: center;
          display: inline-block;
          margin-bottom: 3px;
          align-self: flex-end; 
          letter-spacing: 0.02em;
        }
        
        .right .badge { align-self: flex-start; }

        /* Breakdown Grid - Perfectly Aligned Cards */
        .breakdown-grid {
          display: flex;
          justify-content: center;
          gap: var(--space-6);
          margin-top: var(--space-10);
          padding: 0 var(--space-4);
        }

        .country-card {
          flex: 1;
          max-width: 140px;
          text-align: center;
          padding: var(--space-4) var(--space-2);
          background-color: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: var(--border-radius-lg);
          transition: all 0.2s ease;
        }

        .highlight-border {
          border: 1.5px solid #10B981;
          background-color: #F0FDF4;
        }

        .flag { font-size: 20px; margin-bottom: 6px; }
        .country-header { font-size: 9px; font-weight: 700; color: var(--color-neutral-400); letter-spacing: 0.05em; margin-bottom: 2px; }
        .country-value { font-weight: 800; color: var(--color-neutral-900); font-family: var(--font-display); font-size: 16px; margin-bottom: 1px; }
        .country-meta { font-size: 10px; color: var(--color-neutral-500); margin-bottom: 6px; font-weight: 500; }
        
        .country-target { 
          font-size: 10px; 
          color: var(--color-neutral-500); 
          padding-top: var(--space-2);
          border-top: 1px solid var(--color-neutral-200);
          margin-top: var(--space-1);
        }
        .highlight-text { color: #059669; font-weight: 700; }

        /* Country Legend */
        .country-legend {
          display: flex;
          justify-content: center;
          gap: var(--space-8);
          margin-top: var(--space-10);
          font-size: 10px;
          color: var(--color-neutral-600);
          font-weight: 500;
        }

        .legend-item { display: flex; align-items: center; gap: 8px; }
        .dot { width: 9px; height: 9px; border-radius: 2px; }
        .dot.de { background-color: #334155; } 
        .dot.nl { background-color: #475569; }
        .dot.be { background-color: #64748B; }

        /* Helper Colors */
        .color-som { color: #059669; }
        .color-sam { color: #2563EB; }
        .color-tam { color: #334155; }

        .bg-som { background-color: #10B981; }
        .bg-sam { background-color: #3B82F6; }
        .bg-tam { background-color: #334155; }
      `}</style>
        </div>
    );
}
