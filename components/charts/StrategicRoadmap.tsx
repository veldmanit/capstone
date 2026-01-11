'use client';

import React from 'react';

export default function StrategicRoadmap() {
    return (
        <div style={{
            width: '100%',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
            background: 'white',
            borderRadius: '4px'
        }}>
            <h3 style={{
                fontSize: 'var(--font-size-h3)',
                fontWeight: 800,
                color: 'var(--color-primary)',
                marginBottom: 'var(--space-10)',
                textAlign: 'center',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Strategic Roadmap: Sequenced Growth Path
            </h3>

            <svg viewBox="0 0 1300 300" style={{ width: '100%', height: 'auto' }}>
                <defs>
                    <marker id="arrowhead-transition" markerWidth="12" markerHeight="10" refX="11" refY="5" orient="auto">
                        <polygon points="0 0, 12 5, 0 10" fill="var(--color-neutral-400)" />
                    </marker>
                </defs>

                {/* Phase 1: 2026-2030 */}
                <g>
                    <rect x="10" y="40" width="370" height="200" fill="var(--color-neutral-50)" stroke="var(--color-primary)" strokeWidth="2.5" rx="6" />
                    <text x="195" y="25" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--color-primary)">PHASE 1: 2026–2030</text>
                    <text x="195" y="75" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--color-primary)">OPTION 1: BRAND SCALE-UP</text>
                    <text x="40" y="110" fontSize="14" fill="var(--color-neutral-800)" fontWeight="500">
                        <tspan x="40" dy="0">✓ Prove model in NL/BE/DE</tspan>
                        <tspan x="40" dy="22">✓ Build brand equity</tspan>
                        <tspan x="40" dy="22">✓ Establish ecosystem</tspan>
                        <tspan x="40" dy="22">✓ Generate cash flow</tspan>
                        <tspan x="40" dy="22">✓ Reach 2,000+ units/year</tspan>
                    </text>
                    <rect x="155" y="210" width="80" height="24" fill="var(--color-primary)" rx="3" />
                    <text x="195" y="227" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">GO NOW</text>
                </g>

                {/* Transition Arrow 1 */}
                <g>
                    <line x1="390" y1="140" x2="480" y2="140" stroke="var(--color-neutral-300)" strokeWidth="5" strokeDasharray="10,6" markerEnd="url(#arrowhead-transition)" />
                    <text x="435" y="95" textAnchor="middle" fontSize="14" fontWeight="900" fill="var(--color-neutral-500)">IF SUCCESS</text>
                </g>

                {/* Phase 2: 2030-2035 */}
                <g>
                    <rect x="500" y="40" width="460" height="200" fill="var(--color-neutral-50)" stroke="var(--color-neutral-400)" strokeWidth="2.5" strokeDasharray="8,5" rx="6" />
                    <text x="730" y="25" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--color-neutral-600)">PHASE 2: 2030–2035</text>
                    <text x="730" y="75" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--color-neutral-600)">REASSESS OPTIONS 2 & 3</text>

                    {/* Left Column in Phase 2 */}
                    <text x="525" y="105" fontSize="15" fontWeight="800" fill="var(--color-neutral-700)">M&A ROLL-UP</text>
                    <text x="525" y="130" fontSize="13" fill="var(--color-neutral-500)" fontWeight="500">
                        <tspan x="525" dy="0">• Acquire local competitors</tspan>
                        <tspan x="525" dy="18">• Consolidate market share</tspan>
                        <tspan x="525" dy="18">• Integrate customer bases</tspan>
                    </text>

                    <line x1="730" y1="105" x2="730" y2="200" stroke="var(--color-neutral-200)" strokeWidth="1.5" strokeDasharray="4,4" />

                    {/* Right Column in Phase 2 */}
                    <text x="755" y="105" fontSize="15" fontWeight="800" fill="var(--color-neutral-700)">OPERATIONAL JV</text>
                    <text x="755" y="130" fontSize="13" fill="var(--color-neutral-500)" fontWeight="500">
                        <tspan x="755" dy="0">• Shared production facilities</tspan>
                        <tspan x="755" dy="18">• Joint logistics hubs</tspan>
                        <tspan x="755" dy="18">• Cost pooling at scale</tspan>
                    </text>

                    <rect x="670" y="210" width="120" height="24" fill="var(--color-neutral-200)" rx="3" />
                    <text x="730" y="227" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--color-neutral-600)">EVALUATE LATER</text>
                </g>

                {/* Transition Arrow 2 */}
                <g>
                    <line x1="970" y1="140" x2="1060" y2="140" stroke="var(--color-neutral-300)" strokeWidth="5" strokeDasharray="10,6" markerEnd="url(#arrowhead-transition)" />
                    <text x="1015" y="95" textAnchor="middle" fontSize="14" fontWeight="900" fill="var(--color-neutral-500)">AT SCALE</text>
                </g>

                {/* Ultimate Vision: 2035+ */}
                <g>
                    <circle cx="1160" cy="140" r="18" fill="var(--color-secondary)" stroke="white" strokeWidth="4" />
                    <text x="1160" y="148" textAnchor="middle" fontSize="24" fontWeight="900" fill="white">★</text>
                    <text x="1160" y="25" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--color-secondary-dark)">ULTIMATE VISION: 2035+</text>
                    <text x="1160" y="195" textAnchor="middle" fontSize="20" fontWeight="900" fill="var(--color-secondary-dark)">EUROPEAN OUTDOOR</text>
                    <text x="1160" y="220" textAnchor="middle" fontSize="20" fontWeight="900" fill="var(--color-secondary-dark)">KITCHEN CHAMPION</text>
                    <text x="1160" y="240" textAnchor="middle" fontSize="11" fill="var(--color-neutral-500)" fontStyle="italic" fontWeight="600">Market Leadership Across EU</text>
                </g>
            </svg>
        </div>
    );
}
