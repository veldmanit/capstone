'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

/**
 * ValueCurve
 * 
 * Extreme Compact Version: High-density layout for consulting reports.
 * Visualization of Fieldsman's strategic positioning vs competitors.
 * Optimized with smaller fonts and tighter spacing.
 */
const ValueCurve = () => {
    const dimensions = [
        'Price\nAccessibility',
        'Design\nQuality',
        'Durability',
        'Customization',
        'Online\nExperience',
        'Lead\nTime',
        'Service\nLevel'
    ];

    const segments = [
        { name: 'Low Budget', color: '#9CA3AF', values: [10, 3, 3, 2, 5, 9, 3], dash: '6 4' },
        { name: 'Mid-Premium', color: '#C8B696', values: [7, 5, 6, 7, 3, 5, 8], dash: '4 2' },
        { name: 'Fieldsman', color: '#4A5D23', values: [7, 7, 7, 5, 9, 8, 4], dash: '0' },
        { name: 'Premium', color: '#A69475', values: [4, 8, 9, 6, 7, 4, 8], dash: '4 3' },
        { name: 'Luxury', color: '#4D4D4D', values: [1, 10, 10, 10, 2, 2, 10], dash: '2 2' },
    ];

    const data = dimensions.map((dim, idx) => {
        const point: any = { dimension: dim };
        segments.forEach(seg => { point[seg.name] = seg.values[idx]; });
        return point;
    });

    const competitors = [
        { segment: 'Low Budget', range: '€0 – €2K', brands: 'IKEA, Buitenkeukendeal, Weber, Boretti, DIY', color: '#9CA3AF' },
        { segment: 'Mid-Premium', range: '€3K – €8K', brands: 'MetaalEnzo, regional craftsmen, small workshops', color: '#C8B696' },
        { segment: 'Fieldsman', range: '€3K – €8K', brands: 'Fieldsman', color: '#4A5D23', highlight: true },
        { segment: 'Premium', range: '€10K – €20K', brands: 'Roostr, Novara, Life-Steel, Freiluft, OFYR, Otto Wilde, Flammkraft', color: '#A69475' },
        { segment: 'Luxury', range: '€25K+', brands: 'COOXS Concepts, Röshults, Anker', color: '#4D4D4D' },
    ];

    return (
        <div className="value-curve-container" data-export-as-image="true">
            {/* Header */}
            <div className="chart-header">
                <h3 className="chart-title">Strategy Canvas: Value Curve Analysis</h3>
                <p className="chart-subtitle">Dutch Outdoor Kitchen Market Positioning vs. Key Segments</p>
            </div>

            {/* Legend */}
            <div className="chart-legend">
                {segments.map(seg => (
                    <div key={seg.name} className="legend-item">
                        <svg width="20" height="10" className="legend-svg">
                            <line
                                x1="0" y1="5" x2="20" y2="5"
                                stroke={seg.color}
                                strokeWidth={seg.name === 'Fieldsman' ? 2.5 : 1.5}
                                strokeDasharray={seg.dash}
                            />
                            <circle cx="10" cy="5" r={seg.name === 'Fieldsman' ? 3.5 : 2.5} fill={seg.color} />
                        </svg>
                        <span className={`legend-label ${seg.name === 'Fieldsman' ? 'highlight' : ''}`}>
                            {seg.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Main Chart Area */}
            <div className="chart-well">
                <div style={{ height: '180px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 20 }}>
                            {[0, 2, 4, 6, 8, 10].map(val => (
                                <ReferenceLine key={val} y={val} stroke="#e5e7eb" strokeWidth={1} />
                            ))}
                            <XAxis
                                dataKey="dimension"
                                axisLine={{ stroke: '#d1d5db' }}
                                tickLine={false}
                                interval={0}
                                tick={({ x, y, payload }) => (
                                    <g transform={`translate(${x},${y})`}>
                                        {payload.value.split('\n').map((line: string, i: number) => (
                                            <text
                                                key={i}
                                                x={0}
                                                y={8 + i * 9}
                                                textAnchor="middle"
                                                fill="#6b7280"
                                                fontSize="8.5"
                                                fontWeight="600"
                                            >
                                                {line}
                                            </text>
                                        ))}
                                    </g>
                                )}
                            />
                            <YAxis
                                domain={[0, 10]}
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9ca3af', fontSize: 8 }}
                                ticks={[0, 5, 10]}
                                width={30}
                            />
                            {segments.map(seg => (
                                <Line
                                    key={seg.name}
                                    type="monotone"
                                    dataKey={seg.name}
                                    stroke={seg.color}
                                    strokeWidth={seg.name === 'Fieldsman' ? 3 : 1.5}
                                    strokeDasharray={seg.dash}
                                    animationDuration={0}
                                    dot={{
                                        r: seg.name === 'Fieldsman' ? 4 : 2.5,
                                        fill: seg.color,
                                        stroke: seg.name === 'Fieldsman' ? seg.color : '#fff',
                                        strokeWidth: seg.name === 'Fieldsman' ? 0 : 1.5
                                    }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Competitor Analysis Table */}
            <div className="table-wrapper">
                <table className="analysis-table">
                    <thead>
                        <tr>
                            <th>SEGMENT</th>
                            <th>PRICE RANGE</th>
                            <th>REPRESENTATIVE BRANDS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {competitors.map((row) => (
                            <tr key={row.segment} className={row.highlight ? 'row-highlight' : ''}>
                                <td>
                                    <div className="segment-cell">
                                        <div className="dot" style={{ backgroundColor: row.color }} />
                                        <span className="segment-name">{row.segment}</span>
                                    </div>
                                </td>
                                <td className="val-cell">{row.range}</td>
                                <td className="brand-cell">{row.brands}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Strategic Insight Block */}
            <div className="insight-box">
                <div className="insight-header">Strategic Positioning Analysis</div>
                <p className="insight-text">
                    Fieldsman occupies the <strong>"Missing Middle"</strong> by replacing manual craftsmanship with mass-customization. This allows for high-end design and durability consistency while maintaining an accessible €3K–€8K price point—avoiding the high overhead of luxury showroom models while heavily outperforming budget mass-retailers on quality.
                </p>
                <div className="trade-off-grid">
                    <div className="trade-off"><strong>CUSTOMIZATION:</strong> Curated modules, not bespoke</div>
                    <div className="trade-off"><strong>PRODUCT RANGE:</strong> High-impact core sets</div>
                    <div className="trade-off"><strong>SHOWROOMS:</strong> Scaled digital-first coverage</div>
                    <div className="trade-off"><strong>DELIVERY:</strong> Standardized self-installation</div>
                </div>
            </div>

            <style jsx>{`
                .value-curve-container {
                    background: white;
                    padding: var(--space-4) 0;
                    font-family: var(--font-body);
                    width: 100%;
                    margin: var(--space-2) 0;
                }

                .chart-header {
                    margin-bottom: var(--space-3);
                }

                .chart-title {
                    font-size: 14px;
                    font-weight: 800;
                    color: var(--color-neutral-900);
                    font-family: var(--font-display);
                    margin-bottom: 1px;
                }

                .chart-subtitle {
                    font-size: 10px;
                    color: var(--color-neutral-500);
                }

                .chart-legend {
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--space-4);
                    margin-bottom: var(--space-3);
                    padding-bottom: var(--space-2);
                    border-bottom: 1px solid var(--color-neutral-100);
                }

                .legend-item {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .legend-label {
                    font-size: 9.5px;
                    font-weight: 500;
                    color: var(--color-neutral-500);
                }

                .legend-label.highlight {
                    color: var(--color-primary);
                    font-weight: 700;
                }

                .chart-well {
                    background-color: #fafafa;
                    padding: var(--space-3) var(--space-2) 0 var(--space-2);
                    border-radius: var(--border-radius-md);
                    border: 1px solid #e5e7eb;
                    margin-bottom: var(--space-4);
                }

                .table-wrapper {
                    border: 1px solid #e5e7eb;
                    border-radius: var(--border-radius-md);
                    overflow: hidden;
                    margin-bottom: var(--space-4);
                }

                .analysis-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 9.5px;
                }

                .analysis-table th {
                    background: #f9fafb;
                    padding: var(--space-2) var(--space-3);
                    text-align: left;
                    font-size: 8px;
                    font-weight: 800;
                    color: #374151;
                    letter-spacing: 0.05em;
                    border-bottom: 1px solid #e5e7eb;
                }

                .analysis-table td {
                    padding: var(--space-1) var(--space-3);
                    border-bottom: 1px solid #e5e7eb;
                    color: #374151;
                }

                .analysis-table tr:last-child td {
                    border-bottom: none;
                }

                .row-highlight {
                    background-color: rgba(74, 93, 35, 0.08);
                }

                .segment-cell {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }

                .dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                }

                .segment-name {
                    font-weight: 600;
                }

                .row-highlight .segment-name {
                    color: var(--color-primary);
                }

                .brand-cell {
                    font-size: 9px;
                    color: #6b7280;
                }

                .row-highlight .brand-cell {
                    color: var(--color-primary);
                }

                .insight-box {
                    padding: var(--space-3) var(--space-4);
                    background-color: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: var(--border-radius-md);
                }

                .insight-header {
                    font-size: 9px;
                    font-weight: 800;
                    color: var(--color-primary);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: var(--space-1);
                }

                .insight-text {
                    font-size: 9.5px;
                    line-height: 1.4;
                    color: #374151;
                    margin-bottom: var(--space-2);
                }

                .trade-off-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-1) var(--space-4);
                    background: white;
                    padding: var(--space-2) var(--space-3);
                    border: 1px solid #e5e7eb;
                    border-radius: var(--border-radius-sm);
                }

                .trade-off {
                    font-size: 8.5px;
                    color: #6b7280;
                }

                .trade-off strong {
                    color: #374151;
                    margin-right: 2px;
                }
            `}</style>
        </div>
    );
};

export default ValueCurve;
