'use client';

import React from 'react';

/**
 * KPI Dashboard - Balanced Scorecard
 * Shows key performance indicators across Commercial, Operational, and Financial categories
 * Aligned with Fieldsman Brand and McKinsey-style aesthetic
 */
export default function KPIDashboard() {
  const kpiCategories = [
    {
      category: 'FINANCIAL',
      color: 'var(--color-primary-dark)',
      metrics: [
        { kpi: 'Gross Margin', target2026: '≥68%', target2030: '≥68%' },
        { kpi: 'EBITDA Margin', target2026: '≥5%', target2030: '≥30%' },
      ]
    },
    {
      category: 'COMMERCIAL (CUSTOMER)',
      color: 'var(--color-chart-2)',
      metrics: [
        { kpi: 'Revenue', target2026: '€0.8–1.0M', target2030: '€10M' },
        { kpi: 'Kitchens Sold', target2026: '189–250', target2030: '2,126' },
        { kpi: 'Configurator → Lead', target2026: '20%', target2030: '30%' },
        { kpi: 'Lead → Order', target2026: '25%', target2030: '40%' },
        { kpi: 'CAC', target2026: '€250–300', target2030: '€150–200' },
        { kpi: 'Total Reviews', target2026: '150+', target2030: '1,000+' },
        { kpi: 'Avg. Review Score', target2026: '>4.5', target2030: '>4.7' },
      ]
    },
    {
      category: 'OPERATIONAL (PROCESS)',
      color: 'var(--color-chart-1)',
      metrics: [
        { kpi: 'Lead Time', target2026: '≤2 weeks', target2030: '≤2 weeks' },
        { kpi: 'On-Time Delivery', target2026: '≥90%', target2030: '≥95%' },
        { kpi: 'Defect Rate', target2026: '≤3%', target2030: '≤1%' },
        { kpi: 'Warranty Claims / 100 Kitchens', target2026: '≤8', target2030: '≤3' },
      ]
    },
    {
      category: 'ORGANIZATION (GROWTH)',
      color: 'var(--color-chart-5)',
      metrics: [
        { kpi: 'FTE Count', target2026: '5–8', target2030: '19' },
        { kpi: 'Employee Retention', target2026: '>90%', target2030: '>95%' },
      ]
    },
    {
      category: 'ESG (SUSTAINABILITY)',
      color: 'var(--color-primary)',
      metrics: [
        { kpi: 'Product Lifespan', target2026: '15+ years', target2030: '15+ years' },
        { kpi: 'CO₂ per Kitchen', target2026: '~340 kg', target2030: '280 kg' },
      ]
    }
  ];

  return (
    <div className="kpi-dashboard" data-export-as-image="true">

      {/* Header */}
      <div className="dashboard-header">
        <div className="header-label">KPI</div>
        <div className="header-target">2026 Target</div>
        <div className="header-target">2030 Target</div>
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
              <div className="metric-value">{metric.target2030}</div>
            </div>
          ))}
        </div>
      ))}

      <style jsx>{`
        .kpi-dashboard {
          background: white;
          border: 1px solid var(--color-neutral-200);
          border-radius: 4px;
          overflow: hidden;
        }

        .dashboard-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          background: var(--color-neutral-50);
          border-bottom: 2px solid var(--color-primary);
          padding: 8px 16px;
          gap: 12px;
        }

        .header-label {
          font-size: 9px;
          font-weight: 800;
          color: var(--color-neutral-800);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .header-target {
          font-size: 9px;
          font-weight: 800;
          color: var(--color-neutral-800);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .kpi-category {
          border-bottom: 1px solid var(--color-neutral-100);
        }

        .kpi-category:last-child {
          border-bottom: none;
        }

        .category-header {
          padding: 8px 16px;
          background: var(--color-neutral-50);
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
          border-bottom: 1px solid var(--color-neutral-50);
          align-items: center;
        }

        .metric-row:last-child {
          border-bottom: none;
        }

        .metric-name {
          font-size: 9px;
          color: var(--color-neutral-700);
          font-weight: 500;
        }

        .metric-value {
          font-size: 9px;
          color: var(--color-neutral-900);
          font-weight: 600;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }

        @media print {
          .kpi-dashboard {
            border: 1px solid var(--color-neutral-300);
          }
        }
      `}</style>
    </div>
  );
}
