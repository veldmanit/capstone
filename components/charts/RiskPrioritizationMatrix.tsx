'use client';

import React from 'react';

interface Risk {
    id: number;
    risk: string;
    prob: string;
    impact: string;
}

interface RiskPrioritizationMatrixProps {
    risks: Risk[];
}

export default function RiskPrioritizationMatrix({ risks }: RiskPrioritizationMatrixProps) {
    // Helper to convert L/M/H to coordinates (0-100 scale)
    // X axis = Probability, Y axis = Impact
    const getValue = (val: string) => {
        switch (val) {
            case 'L': return 15;
            case 'L-M': return 32;
            case 'M': return 50;
            case 'M-H': return 70;
            case 'H': return 85;
            default: return 50;
        }
    };

    // Add some jitter to overlapping points
    const getCoordinates = (risk: Risk, allRisks: Risk[]) => {
        const baseX = getValue(risk.prob);
        const baseY = getValue(risk.impact);

        // Find how many risks share this spot
        const sameSpot = allRisks.filter(r =>
            getValue(r.prob) === baseX && getValue(r.impact) === baseY
        );

        if (sameSpot.length === 1) return { x: baseX, y: baseY };

        // Improved offset logic for multiple duplicates
        const index = sameSpot.findIndex(r => r.id === risk.id);
        const offset = 5;

        // Calculate circular distribution for any number of overlapping points
        const angleStep = (2 * Math.PI) / sameSpot.length;
        const angle = index * angleStep - Math.PI / 2; // Start from top

        return {
            x: baseX + Math.cos(angle) * offset,
            y: baseY + Math.sin(angle) * offset
        };
    };

    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            background: 'white',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)'
        }}>
            <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                marginBottom: '10px',
                color: 'var(--color-primary)',
                textAlign: 'center'
            }}>Risk Prioritization Matrix</h3>

            <svg viewBox="0 0 400 350" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                {/* Definitions */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                </defs>

                {/* Background Zones */}
                {/* Green - Low/Low */}
                <rect x="50" y="200" width="100" height="100" fill="#e8f5e9" opacity="0.6" />
                <rect x="150" y="200" width="100" height="100" fill="#fff3e0" opacity="0.6" />
                <rect x="250" y="200" width="100" height="100" fill="#ffebee" opacity="0.6" />

                <rect x="50" y="100" width="100" height="100" fill="#fff3e0" opacity="0.6" />
                <rect x="150" y="100" width="100" height="100" fill="#ffebee" opacity="0.6" />
                <rect x="250" y="100" width="100" height="100" fill="#ffebee" opacity="0.6" />

                <rect x="50" y="0" width="100" height="100" fill="#ffebee" opacity="0.6" />
                <rect x="150" y="0" width="100" height="100" fill="#ffebee" opacity="0.6" />
                <rect x="250" y="0" width="100" height="100" fill="#ffebee" opacity="0.8" />

                {/* Axes */}
                <line x1="50" y1="300" x2="360" y2="300" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <line x1="50" y1="300" x2="50" y2="10" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Labels */}
                <text x="200" y="340" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#444">PROBABILITY</text>
                <text x="10" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#444" transform="rotate(-90 10,150)">IMPACT</text>

                {/* Tick Labels */}
                <text x="100" y="315" textAnchor="middle" fontSize="10" fill="#666">Low</text>
                <text x="200" y="315" textAnchor="middle" fontSize="10" fill="#666">Medium</text>
                <text x="300" y="315" textAnchor="middle" fontSize="10" fill="#666">High</text>

                <text x="40" y="250" textAnchor="end" fontSize="10" fill="#666">Low</text>
                <text x="40" y="150" textAnchor="end" fontSize="10" fill="#666">Medium</text>
                <text x="40" y="50" textAnchor="end" fontSize="10" fill="#666">High</text>

                {/* Grid Lines */}
                <line x1="150" y1="0" x2="150" y2="300" stroke="#ddd" strokeDasharray="4" />
                <line x1="250" y1="0" x2="250" y2="300" stroke="#ddd" strokeDasharray="4" />
                <line x1="50" y1="200" x2="350" y2="200" stroke="#ddd" strokeDasharray="4" />
                <line x1="50" y1="100" x2="350" y2="100" stroke="#ddd" strokeDasharray="4" />

                {/* Data Points */}
                {risks.map((risk) => {
                    const coords = getCoordinates(risk, risks);
                    // Map 0-100 scale to SVG coordinates
                    // X: 50 -> 350 (range 300)
                    // Y: 300 -> 0 (range 300)
                    const svgX = 50 + (coords.x / 100 * 300);
                    const svgY = 300 - (coords.y / 100 * 300);

                    return (
                        <g key={risk.id}>
                            <circle
                                cx={svgX}
                                cy={svgY}
                                r="12"
                                fill="var(--color-primary)"
                                stroke="white"
                                strokeWidth="2"
                                style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.2))' }}
                            />
                            <text
                                x={svgX}
                                y={svgY}
                                textAnchor="middle"
                                dy="4"
                                fontSize="10"
                                fontWeight="bold"
                                fill="white"
                            >
                                {risk.id}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
