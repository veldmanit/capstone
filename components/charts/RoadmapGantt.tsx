'use client';

import React from 'react';

/**
 * Strategic Roadmap - Premium Consulting Style
 * Clean, professional, McKinsey-grade visualization
 */
export default function RoadmapGantt() {
  const years = [2026, 2027, 2028, 2029, 2030];

  const phases = [
    { name: 'Phase 1', sub: 'Foundation', start: 2026, end: 2026.99, color: '#153E35' },
    { name: 'Phase 2', sub: 'Scale NL/BE', start: 2027, end: 2027.99, color: '#8B7355' },
    { name: 'Phase 3', sub: 'Accelerate DE', start: 2028, end: 2029.99, color: '#5C6B73' },
    { name: 'Phase 4', sub: 'Lead', start: 2030, end: 2030.99, color: '#264653' },
  ];

  const workstreams = [
    {
      category: 'PRODUCTION',
      color: '#2A9D8F',
      items: [
        // Phase 1: 2026
        { name: 'China Supplier Contracts', start: 2026.08, end: 2026.08, type: 'milestone' }, // Q1
        { name: 'Waterjet Operational', start: 2026.25, end: 2026.42, type: 'project' }, // Q2
        { name: 'In-House Countertops', start: 2026.42, end: 2026.58, type: 'project' }, // Q2
        { name: '3-Month Inventory Buffer', start: 2026.83, end: 2026.83, type: 'milestone' }, // Q4

        // Phase 2: 2027
        { name: 'Countertop Capacity Doubled', start: 2027.42, end: 2027.42, type: 'milestone' }, // Q2
        { name: 'Dual Supplier Evaluation', start: 2027.67, end: 2027.92, type: 'project' }, // Q3-Q4

        // Phase 3: 2028-2029
        { name: 'Dual Supplier Active', start: 2028.08, end: 2028.08, type: 'milestone' }, // Q1
        { name: 'Capacity 300/month', start: 2028.42, end: 2029.92, type: 'ongoing' }, // Q2 '28 onwards
      ]
    },
    {
      category: 'COMMERCIAL',
      color: '#E76F51',
      items: [
        // Phase 1: 2026
        { name: 'Marketing Engine (SEO/Social)', start: 2026.25, end: 2026.67, type: 'project' }, // Q2-Q3
        { name: 'AI Config Support', start: 2026.58, end: 2026.58, type: 'milestone' }, // Q3

        // Showroom Expansion - Multiple markers on single row
        {
          name: 'Showroom Expansion',
          type: 'multi-marker',
          markers: [
            { label: 'NL (2)', start: 2026.83 },
            { label: 'BE (1)', start: 2027.42 },
            { label: 'DE (10)', start: 2029.83 }
          ]
        },

        // Phase 2: 2027
        { name: 'BE Website Live', start: 2027.08, end: 2027.08, type: 'milestone' }, // Q1
        { name: 'DE Pilot Launch', start: 2027.58, end: 2027.75, type: 'project' }, // Q3
        { name: 'AI Customer Service', start: 2027.83, end: 2027.83, type: 'milestone' }, // Q4

        // Phase 3: 2028-2029
        { name: 'Full DE Activation', start: 2028.42, end: 2028.58, type: 'project' }, // Q2
        { name: 'DE Market Buildout', start: 2028.67, end: 2029.75, type: 'ongoing' }, // Q3 '28 - Q3 '29
        { name: '1,000+ Reviews', start: 2029.92, end: 2029.92, type: 'milestone' }, // Q4 '29
      ]
    },
    {
      category: 'ORGANIZATION',
      color: '#F4A261',
      items: [
        // Phase 1: 2026 - Foundation
        { name: 'Founders Full-Time', start: 2026.42, end: 2026.42, type: 'milestone' }, // Mid-2026
        { name: 'Team Building (7 Hires)', start: 2026.17, end: 2026.75, type: 'project' }, // Q1-Q3: All foundation hires
        { name: 'Inventory Systems Live', start: 2026.75, end: 2026.75, type: 'milestone' }, // Q3

        // Phase 3: 2028-2029 - International expansion
        { name: 'DE Country Manager', start: 2028.08, end: 2028.08, type: 'milestone' }, // Q1 '28
        { name: 'BI Dashboard Live', start: 2028.58, end: 2028.58, type: 'milestone' }, // Q3 '28
      ]
    }
  ];

  const getPos = (val: number) => ((val - 2026) / 5) * 100;
  const getWidth = (start: number, end: number) => {
    const w = end - start;
    return (w / 5) * 100;
  };

  return (
    <div className="roadmap-wrapper">

      {/* Timeline Header */}
      <div className="timeline-header">
        <div className="header-spacer"></div>
        <div className="timeline-grid">
          {/* Phase Labels */}
          <div className="phase-row">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="phase-label"
                style={{
                  left: `${getPos(phase.start)}%`,
                  width: `${getWidth(phase.start, phase.end)}%`,
                  color: phase.color
                }}
              >
                <div className="phase-name">{phase.name}</div>
                <div className="phase-sub">{phase.sub}</div>
              </div>
            ))}
          </div>

          {/* Year Labels */}
          <div className="year-row">
            {years.map((year, i) => (
              <div
                key={year}
                className="year-label"
                style={{ left: `${(i / 5) * 100}%`, width: `${(1 / 5) * 100}%` }}
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">

        {/* Vertical Grid Lines */}
        <div className="grid-overlay">
          {years.map((year, i) => (
            <div
              key={year}
              className="grid-line"
              style={{ left: `${(i / 5) * 100}%` }}
            />
          ))}
        </div>

        {/* Phase Background Zones */}
        <div className="phase-overlay">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="phase-zone"
              style={{
                left: `${getPos(phase.start)}%`,
                width: `${getWidth(phase.start, phase.end)}%`,
                background: `${phase.color}08`
              }}
            />
          ))}
        </div>

        {/* Workstreams */}
        {workstreams.map((ws, wsIdx) => (
          <div key={wsIdx} className="workstream-section">

            {/* Section Header */}
            <div className="section-header">
              <div className="category-label" style={{ color: ws.color }}>
                {ws.category}
              </div>
              <div className="header-line" style={{ borderColor: ws.color }} />
            </div>

            {/* Items */}
            {ws.items.map((item, itemIdx) => (
              <div key={itemIdx} className="timeline-row">
                <div className="row-label">{item.name}</div>
                <div className="row-timeline">
                  {item.type === 'multi-marker' ? (
                    // Multi-marker: Multiple labeled milestones on same row
                    <>
                      {item.markers?.map((marker, mIdx) => (
                        <div
                          key={mIdx}
                          className="timeline-marker"
                          style={{
                            left: `${getPos(marker.start)}%`,
                            width: 'auto'
                          }}
                        >
                          <div className="marker-point" style={{ background: ws.color }}>
                            <div className="point-diamond" />
                          </div>
                          <span className="marker-label" style={{ color: ws.color }}>
                            {marker.label}
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                    // Regular item: Single marker or range
                    <div
                      className="timeline-marker"
                      style={{
                        left: `${getPos(item.start!)}%`,
                        width: item.type === 'milestone' || item.type === 'target' ? 'auto' : `${getWidth(item.start!, item.end!)}%`
                      }}
                    >
                      {item.type === 'milestone' || item.type === 'target' ? (
                        <div className="marker-point" style={{ background: ws.color }}>
                          <div className="point-diamond" />
                        </div>
                      ) : (
                        <div className="marker-range">
                          <div className="range-line" style={{ background: ws.color }} />
                          <div className="range-dot start" style={{ background: ws.color }} />
                          <div className="range-dot end" style={{ background: ws.color }} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .roadmap-wrapper {
          width: 100%;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* HEADER */
        .timeline-header {
          display: flex;
          border-bottom: 2px solid #1F2937;
          background: #F9FAFB;
        }

        .header-spacer {
          width: 120px;
          flex-shrink: 0;
          border-right: 1px solid #E5E7EB;
        }

        .timeline-grid {
          flex: 1;
          position: relative;
        }

        .phase-row {
          height: 20px;
          position: relative;
          border-bottom: 1px solid #E5E7EB;
        }

        .phase-label {
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .phase-name {
          font-size: 7px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .phase-sub {
          font-size: 6px;
          font-weight: 600;
          opacity: 0.7;
        }

        .year-row {
          height: 16px;
          position: relative;
        }

        .year-label {
          position: absolute;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 8px;
          font-weight: 700;
          color: #4B5563;
          border-left: 1px solid #E5E7EB;
        }

        /* CONTENT */
        .content-area {
          position: relative;
          padding: 0;
        }

        .grid-overlay, .phase-overlay {
          position: absolute;
          top: 0;
          left: 120px;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: #E5E7EB;
        }

        .phase-zone {
          position: absolute;
          top: 0;
          bottom: 0;
        }

        /* WORKSTREAM */
        .workstream-section {
          border-bottom: 1px solid #F3F4F6;
          padding: 4px 0;
        }

        .workstream-section:last-child {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          align-items: center;
          padding: 0 8px 4px 8px;
          gap: 8px;
        }

        .category-label {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          min-width: 120px;
          flex-shrink: 0;
        }

        .header-line {
          flex: 1;
          height: 0;
          border-top: 1px solid currentColor;
          opacity: 0.2;
        }

        /* TIMELINE ROW */
        .timeline-row {
          display: flex;
          align-items: center;
          min-height: 14px;
          padding: 0 8px;
          margin-bottom: 2px;
        }

        .row-label {
          width: 120px;
          flex-shrink: 0;
          font-size: 7px;
          color: #374151;
          padding-right: 8px;
          font-weight: 500;
        }

        .row-timeline {
          flex: 1;
          position: relative;
          height: 12px;
        }

        .timeline-marker {
          position: absolute;
          height: 100%;
          display: flex;
          align-items: center;
        }

        /* POINT MARKER */
        .marker-point {
          position: relative;
          width: 8px;
          height: 8px;
          transform: translateX(-4px);
        }

        .point-diamond {
          width: 8px;
          height: 8px;
          background: white;
          border: 1.5px solid currentColor;
          transform: rotate(45deg);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }

        .marker-label {
          position: absolute;
          left: 12px;
          top: -2px;
          font-size: 7px;
          font-weight: 700;
          white-space: nowrap;
        }

        /* RANGE MARKER */
        .marker-range {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .range-line {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          transform: translateY(-50%);
          opacity: 0.5;
          border-radius: 1px;
        }

        .range-dot {
          position: absolute;
          top: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0.5px 1px rgba(0,0,0,0.1);
        }

        .range-dot.start {
          left: -2.5px;
        }

        .range-dot.end {
          right: -2.5px;
        }

        @media print {
          .roadmap-wrapper {
            border: 1px solid #D1D5DB;
          }
        }
      `}</style>
    </div>
  );
}
