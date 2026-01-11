'use client';

import React from 'react';

export default function BottleneckVisual() {
    return (
        <div style={{
            width: '100%',
            padding: 'var(--space-4)',
            background: 'white',
            border: '1px solid #C8B696',
            borderRadius: 'var(--border-radius-md)',
            boxShadow: 'var(--shadow-sm)'
        }} data-export-as-image="true">
            <h3 style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#546E35',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: 'var(--space-4)'
            }}>
                The Capacity Trap: Seasonal Demand vs. Structural Rigidities
            </h3>

            {/* Compact SVG Graph */}
            <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: 'var(--space-4)' }}>
                <svg width="100%" height="100%" viewBox="0 0 800 220" style={{ overflow: 'visible' }}>
                    <defs>
                        <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#546E35" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="#546E35" stopOpacity="0" />
                        </linearGradient>
                        <pattern id="diagonalHatch" width="4" height="4" patternUnits="userSpaceOnUse">
                            <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="#A69475" strokeWidth="0.5" strokeOpacity="0.3" />
                        </pattern>
                        <marker id="arrowhead-red" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
                            <polygon points="0 0, 8 3, 0 6" fill="#A69475" />
                        </marker>
                    </defs>

                    {/* Baseline */}
                    <line x1="50" y1="180" x2="750" y2="180" stroke="#E6DDBF" strokeWidth="1.5" />

                    {/* Month Labels */}
                    <g fontSize="9" fill="#4D4D4D" fontWeight="600" textAnchor="middle" fontFamily="var(--font-body)">
                        <text x="50" y="200">JAN</text>
                        <text x="120" y="200">FEB</text>
                        <text x="190" y="200">MAR</text>
                        <text x="260" y="200">APR</text>
                        <text x="330" y="200">MAY</text>
                        <text x="400" y="200">JUN</text>
                        <text x="470" y="200">JUL</text>
                        <text x="540" y="200">AUG</text>
                        <text x="610" y="200">SEP</text>
                        <text x="680" y="200">OCT</text>
                        <text x="750" y="200">NOV</text>
                    </g>

                    {/* Capacity Line */}
                    <line x1="50" y1="110" x2="780" y2="110" stroke="#A69475" strokeWidth="2" strokeDasharray="6 4" />
                    <text x="780" y="104" fontSize="9" fontWeight="800" fill="#A69475" textAnchor="end">MAX CAPACITY</text>

                    {/* Demand Curve Area */}
                    <path d="M 50 180 C 150 180, 250 20, 400 20 C 550 20, 650 180, 750 180" fill="url(#demandGradient)" />
                    <path d="M 235 110 Q 280 50, 400 20 Q 520 50, 565 110 Z" fill="url(#diagonalHatch)" />

                    {/* Demand Curve Line */}
                    <path d="M 50 180 C 150 180, 250 20, 400 20 C 550 20, 650 180, 750 180" fill="none" stroke="#546E35" strokeWidth="3" strokeLinecap="round" />
                    <text x="400" y="12" fontSize="10" fontWeight="900" fill="#546E35" textAnchor="middle">POTENTIAL DEMAND</text>

                    {/* Simple Vertical Markers */}
                    <line x1="235" y1="110" x2="235" y2="180" stroke="#E6DDBF" strokeWidth="1" strokeDasharray="3 2" />
                    <line x1="565" y1="110" x2="565" y2="180" stroke="#E6DDBF" strokeWidth="1" strokeDasharray="3 2" />

                    {/* Growth Gap Annotation */}
                    <g transform="translate(560, 35)">
                        <text x="0" y="0" fontSize="10" fontWeight="900" fill="#A69475" textAnchor="start">THE "GROWTH GAP"</text>
                        <text x="0" y="10" fontSize="8" fontWeight="600" fill="#6B7280" textAnchor="start">Unfulfilled demand & halted marketing</text>
                        <path d="M -8 5 L -35 30" stroke="#A69475" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowhead-red)" />
                    </g>
                </svg>
            </div>

            {/* Reasons/Bottleneck Cards Under Graph (More Compact) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-3)' }}>
                <div style={{ background: '#FAF9F6', padding: 'var(--space-3)', borderRadius: 'var(--border-radius-sm)', border: '1px solid #E6DDBF', borderTop: '3px solid #546E35' }}>
                    <div style={{ background: '#546E35', color: 'white', display: 'inline-block', padding: '1px 6px', borderRadius: '10px', fontSize: '8px', fontWeight: 800, marginBottom: 'var(--space-1)' }}>INTERNAL</div>
                    <h4 style={{ fontSize: '10px', fontWeight: 800, marginBottom: '2px' }}>Strategic Setup</h4>
                    <p style={{ fontSize: '9px', color: '#444', lineHeight: '1.3' }}>
                        Dependence on part-time skilled experts. Prevents rapid scaling when demand peaks.
                    </p>
                </div>

                <div style={{ background: '#FAF9F6', padding: 'var(--space-3)', borderRadius: 'var(--border-radius-sm)', border: '1px solid #E6DDBF', borderTop: '3px solid #546E35' }}>
                    <div style={{ background: '#546E35', color: 'white', display: 'inline-block', padding: '1px 6px', borderRadius: '10px', fontSize: '8px', fontWeight: 800, marginBottom: 'var(--space-1)' }}>SEASONAL</div>
                    <h4 style={{ fontSize: '10px', fontWeight: 800, marginBottom: '2px' }}>Cost Inefficiency</h4>
                    <p style={{ fontSize: '9px', color: '#444', lineHeight: '1.3' }}>
                        Structural seasonality makes fully in-house scaling inefficient. Permanent teams create overcapacity.
                    </p>
                </div>

                <div style={{ background: '#FAF9F6', padding: 'var(--space-3)', borderRadius: 'var(--border-radius-sm)', border: '1px solid #E6DDBF', borderTop: '3px solid #C8B696' }}>
                    <div style={{ background: '#C8B696', color: 'white', display: 'inline-block', padding: '1px 6px', borderRadius: '10px', fontSize: '8px', fontWeight: 800, marginBottom: 'var(--space-1)' }}>SUPPLY CHAIN</div>
                    <h4 style={{ fontSize: '10px', fontWeight: 800, marginBottom: '2px', color: '#8C8C8C' }}>Countertop Latency</h4>
                    <p style={{ fontSize: '9px', color: '#8C8C8C', lineHeight: '1.3' }}>
                        Lead times <strong>&gt; 8 wks</strong> in peak. Unreliable supply stops shipments.
                    </p>
                </div>
            </div>
        </div>
    );
}
