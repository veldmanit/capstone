'use client';

import React from 'react';

/**
 * KPI Dashboard - Balanced Scorecard
 * Shows key performance indicators across Commercial, Operational, and Financial categories
 */
export default function KPIDashboard() {
  const kpiCategories = [
    {
      category: 'FINANCIAL',
      color: '#264653',
      metrics: [
        { kpi: 'Gross Margin', target2026: '≥50%', target2031: '≥60%' },
        { kpi: 'Operating Margin', target2026: '≥10%', target2031: '≥25%' },
      ]
    },
    {
      category: 'COMMERCIAL (CUSTOMER)',
      color: '#E76F51',
      metrics: [
        { kpi: 'Revenue', target2026: '€1.0–1.6M', target2031: '€22–35M' },
        { kpi: 'Kitchens Sold', target2026: '250–400', target2031: '2,200–3,400' },
        { kpi: 'Configurator → Lead', target2026: '20%', target2031: '30%' },
        { kpi: 'Lead → Order', target2026: '25%', target2031: '40%' },
        { kpi: 'CAC', target2026: '€250–300', target2031: '€150–200' },
        { kpi: 'Total Reviews', target2026: '150+', target2031: '2,500+' },
        { kpi: 'Avg. Review Score', target2026: '>4.5', target2031: '>4.7' },
      ]
    },
    {
      category: 'OPERATIONAL (PROCESS)',
      color: '#2A9D8F',
      metrics: [
        { kpi: 'Lead Time', target2026: '≤2 weeks', target2031: '≤2 weeks' },
        { kpi: 'On-Time Delivery', target2026: '≥90%', target2031: '≥95%' },
        { kpi: 'Defect Rate', target2026: '≤3%', target2031: '≤1%' },
        { kpi: 'Warranty Claims / 100 Kitchens', target2026: '≤8', target2031: '≤3' },
      ]
    },
    {
      category: 'ORGANIZATION (GROWTH)',
      color: '#F4A261',
      metrics: [
        { kpi: 'Employee Retention', target2026: '>90%', target2031: '>95%' },
        { kpi: 'Systems Adoption', target2026: '100%', target2031: '100%' },
      ]
    }
  ];

  return (
    <div className="kpi-dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-label">KPI</div>
        <div className="header-target">2026 Target</div>
        <div className="header-target">2031 Target</div>
      </div>

      {/* Categories */}
      {kpiCategories.map((cat, idx) => (
        <div key={idx} className="kpi-category">

          {/* Category Header */}
          <div className="category-header" style={{ borderLeftColor: cat.color }}>
            <span style={{ color: cat.color }}>{cat.category}</span>
          </div>

          {/* Metrics */}
          {cat.metrics.map((metric, mIdx) => (
            <div key={mIdx} className="metric-row">
              <div className="metric-name">{metric.kpi}</div>
              <div className="metric-value">{metric.target2026}</div>
              <div className="metric-value">{metric.target2031}</div>
            </div>
          ))}
        </div>
      ))}

      <style jsx>{`
        .kpi-dashboard {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 4px;
          overflow: hidden;
        }

        .dashboard-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: #F9FAFB;
          border-bottom: 2px solid #1F2937;
          padding: 8px 16px;
          gap: 12px;
        }

        .header-label {
          font-size: 9px;
          font-weight: 800;
          color: #374151;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .header-target {
          font-size: 9px;
          font-weight: 800;
          color: #374151;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .kpi-category {
          border-bottom: 1px solid #F3F4F6;
        }

        .kpi-category:last-child {
          border-bottom: none;
        }

        .category-header {
          padding: 8px 16px;
          background: #FAFAFA;
          border-left: 3px solid;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .metric-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          padding: 6px 16px;
          gap: 12px;
          border-bottom: 1px solid #F3F4F6;
          align-items: center;
        }

        .metric-row:last-child {
          border-bottom: none;
        }

        .metric-name {
          font-size: 9px;
          color: #374151;
          font-weight: 500;
        }

        .metric-value {
          font-size: 9px;
          color: #1F2937;
          font-weight: 600;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }

        @media print {
          .kpi-dashboard {
            border: 1px solid #D1D5DB;
          }
        }
      `}</style>
    </div>
  );
}
