import React from 'react';

const CustomerJourney: React.FC = () => {
    // Colors from the reference image
    const stageColors = {
        awareness: '#FBBF24', // Yellow/Orange
        consideration: '#F87171', // Red/Pink
        purchase: '#34D399', // Green/Teal
        retention: '#22D3EE', // Cyan/Light Blue
        advocacy: '#3B82F6'   // Blue/Dark Blue
    };

    const stages = [
        {
            id: 'awareness',
            label: 'Awareness',
            color: stageColors.awareness,
            points: [
                { id: 'seo', label: 'SEO & Content', type: 'digital', yOffset: -60, xShift: -45 },
                { id: 'influencer', label: 'Influencer Content', type: 'digital', yOffset: -100, xShift: -15 },
                { id: 'social', label: 'Paid Social', type: 'digital', yOffset: -85, xShift: 15 },
                { id: 'events', label: 'Events & Experiential', type: 'physical', yOffset: 75, xShift: 40 }
            ]
        },
        {
            id: 'consideration',
            label: 'Consideration',
            color: stageColors.consideration,
            points: [
                { id: 'reviews', label: 'Reviews', type: 'digital', yOffset: -75, xShift: -40 },
                { id: '3dconfig', label: 'AI 3D Configurator', type: 'digital', yOffset: -105, xShift: -5 },
                { id: 'samples', label: 'Sample Box', type: 'physical', yOffset: 70, xShift: 20 },
                { id: 'showrooms', label: 'Partner Showrooms', type: 'physical', yOffset: 105, xShift: 45 }
            ]
        },
        {
            id: 'purchase',
            label: 'Purchase',
            color: stageColors.purchase,
            points: [
                { id: 'leadqual', label: 'Intelligent Lead Qual', type: 'digital', yOffset: -75, xShift: -45 },
                { id: 'finalconfig', label: 'Final Configuration', type: 'digital', yOffset: -105, xShift: -15 },
                { id: 'production', label: 'Production Updates', type: 'physical', yOffset: 80, xShift: 15 },
                { id: 'delivery', label: 'Delivery Day', type: 'physical', yOffset: 110, xShift: 45 }
            ]
        },
        {
            id: 'retention',
            label: 'Retention',
            color: stageColors.retention,
            points: [
                { id: 'service', label: 'Auto-Service (AI)', type: 'digital', yOffset: -75, xShift: -35 },
                { id: 'newsletter', label: 'Maint. Newsletters', type: 'digital', yOffset: -105, xShift: 5 },
                { id: 'modularity', label: 'Modularity / Upgrades', type: 'physical', yOffset: 80, xShift: 35 }
            ]
        },
        {
            id: 'advocacy',
            label: 'Advocacy',
            color: stageColors.advocacy,
            points: [
                { id: 'reviewcol', label: 'Review Collection', type: 'digital', yOffset: -75, xShift: -40 },
                { id: 'referral', label: 'Referral Program', type: 'digital', yOffset: -110, xShift: 0 },
                { id: 'wom', label: 'Word of Mouth', type: 'physical', yOffset: 80, xShift: 40 }
            ]
        }
    ];

    // SVG Layout Constants (740px base width for clean page fit)
    const width = 740;
    const height = 400;
    const stageWidth = width / stages.length;
    const midY = height / 2;
    const barHeight = 40;

    return (
        <div style={{ width: '100%', padding: '0', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                <svg width="100%" height="auto" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>

                    {/* Horizontal Axis Labels */}
                    <text x={width / 2} y="15" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="900" style={{ opacity: 0.6, letterSpacing: '0.1em' }}>DIGITAL TOUCHPOINTS</text>
                    <text x={width / 2} y={height - 10} textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="900" style={{ opacity: 0.6, letterSpacing: '0.1em' }}>PHYSICAL TOUCHPOINTS</text>

                    {/* The Dashed Sine Wave Path */}
                    <path
                        d={`M 20 ${midY} 
                           Q ${stageWidth * 0.5} ${midY - 200}, ${stageWidth * 1.0} ${midY}
                           Q ${stageWidth * 1.5} ${midY + 200}, ${stageWidth * 2.0} ${midY}
                           Q ${stageWidth * 2.5} ${midY - 200}, ${stageWidth * 3.0} ${midY}
                           Q ${stageWidth * 3.5} ${midY + 200}, ${stageWidth * 4.0} ${midY}
                           Q ${stageWidth * 4.5} ${midY - 200}, ${width - 20} ${midY}`}
                        fill="none"
                        stroke="#CBD5E1"
                        strokeWidth="2"
                        strokeDasharray="6 4"
                    />

                    {/* Central Chevron Bar */}
                    {stages.map((stage, idx) => {
                        const xStart = idx * stageWidth;
                        const arrowDepth = 20;
                        const points = idx === 0
                            ? `${xStart},${midY - barHeight / 2} ${xStart + stageWidth},${midY - barHeight / 2} ${xStart + stageWidth + arrowDepth},${midY} ${xStart + stageWidth},${midY + barHeight / 2} ${xStart},${midY + barHeight / 2}`
                            : `${xStart + arrowDepth},${midY} ${xStart},${midY - barHeight / 2} ${xStart + stageWidth},${midY - barHeight / 2} ${xStart + stageWidth + arrowDepth},${midY} ${xStart + stageWidth},${midY + barHeight / 2} ${xStart},${midY + barHeight / 2}`;

                        return (
                            <polygon
                                key={stage.id}
                                points={points}
                                fill={stage.color}
                                stroke="white"
                                strokeWidth="2"
                                filter="drop-shadow(0 2px 3px rgba(0,0,0,0.1))"
                            />
                        );
                    })}

                    {/* Stage Labels Text (Centered in Chevrons) */}
                    {stages.map((stage, idx) => (
                        <text
                            key={`label-${idx}`}
                            x={(idx * stageWidth) + (stageWidth / 2) + 10}
                            y={midY + 4}
                            textAnchor="middle"
                            fill="white"
                            fontSize="11"
                            fontWeight="900"
                            style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            {stage.label}
                        </text>
                    ))}

                    {/* Touchpoint Nodes & Connectors */}
                    {stages.map((stage, idx) => {
                        const centerX = (idx * stageWidth) + (stageWidth / 2);

                        return stage.points.map((point) => {
                            const cx = centerX + (point.xShift || 0);
                            const cy = midY + point.yOffset;

                            return (
                                <g key={point.id}>
                                    <line
                                        x1={cx}
                                        y1={midY + (point.type === 'digital' ? -barHeight / 2 : barHeight / 2)}
                                        x2={cx}
                                        y2={cy}
                                        stroke={stage.color}
                                        strokeWidth="1.5"
                                        strokeDasharray="3 2"
                                        opacity="0.6"
                                    />

                                    <circle cx={cx} cy={cy} r="6" fill="white" stroke={stage.color} strokeWidth="2.5" />
                                    <circle cx={cx} cy={cy} r="3" fill={stage.color} />

                                    <text
                                        x={cx}
                                        y={point.type === 'digital' ? cy - 12 : cy + 22}
                                        textAnchor="middle"
                                        fill="#475569"
                                        fontSize="9"
                                        fontWeight="700"
                                    >
                                        {point.label}
                                    </text>
                                </g>
                            );
                        });
                    })}
                </svg>
            </div>
        </div>
    );
};

export default CustomerJourney;
