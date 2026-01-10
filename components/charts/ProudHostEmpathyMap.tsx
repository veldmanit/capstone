'use client';

import React from 'react';

/**
 * ProudHostEmpathyMap
 * 
 * Extreme Compact Version: High-density layout for consulting reports.
 * Restored original content, stacked bio-strip, no icons, 
 * and structured bulleted lists for all quadrants.
 */
export default function ProudHostEmpathyMap() {
  return (
    <div className="empathy-canvas">
      {/* 1. Header (No Icon, Compact) */}
      <div className="canvas-header">
        <div className="header-left">
          <h3 className="persona-name">"The Proud Host" <span className="category-tag">(Mid-Premium Upgrader)</span></h3>
          <p className="persona-motto">"I want something premium, but not a crazy luxury spend."</p>
        </div>
        <div className="header-right">
          <div className="price-box">
            <span className="price-val">€3K – €8K</span>
            <span className="price-suffix">MID-PREMIUM COMFORT ZONE</span>
          </div>
        </div>
      </div>

      {/* 2. Bio Strip (Stacked Layout) */}
      <div className="bio-strip">
        <div className="bio-cell">
          <span className="bio-label">AGE</span>
          <span className="bio-val">35–60</span>
        </div>
        <div className="bio-cell">
          <span className="bio-label">INCOME</span>
          <span className="bio-val">Upper-middle (value-conscious)</span>
        </div>
        <div className="bio-cell">
          <span className="bio-label">HOME</span>
          <span className="bio-val">Owned + garden</span>
        </div>
        <div className="bio-cell">
          <span className="bio-label">LIFE STAGE</span>
          <span className="bio-val">Family / hosting couple</span>
        </div>
      </div>

      {/* 3. Objective Bar */}
      <div className="objective-bar">
        <span className="obj-label">JOB-TO-BE-DONE:</span>
        <p className="obj-text">Create a garden centerpiece that makes hosting effortless and earns compliments.</p>
      </div>

      {/* 4. Core Quadrants (Structured Bullets) */}
      <div className="quad-grid">
        <div className="quad-box">
          <h4 className="quad-title">THINKS & FEELS</h4>
          <ul className="quad-list">
            <li>Hosting satisfaction</li>
            <li>Pride of ownership</li>
            <li>Lifestyle identity</li>
            <li>Can we justify this for just the summer months?</li>
          </ul>
        </div>
        <div className="quad-box">
          <h4 className="quad-title">SEES</h4>
          <ul className="quad-list">
            <li>Instagram/Pinterest setups</li>
            <li>Friends' outdoor kitchens</li>
            <li>Influencer content</li>
            <li>Premium brands online</li>
          </ul>
        </div>
        <div className="quad-box">
          <h4 className="quad-title">HEARS</h4>
          <ul className="quad-list">
            <li>Online reviews & influencers</li>
            <li>"Make sure it handles weather"</li>
            <li>Friends impressed by outdoor setups</li>
          </ul>
        </div>
        <div className="quad-box">
          <h4 className="quad-title">SAYS & DOES</h4>
          <ul className="quad-list">
            <li>Discovers via social, search, lifestyle content</li>
            <li>Uses digital visualization tools</li>
            <li>Seeks showroom reassurance</li>
          </ul>
        </div>
      </div>

      {/* 5. Triggers / Pains / Gains (Categorized Pillars) */}
      <div className="pillar-row">
        <div className="pillar box-triggers">
          <h4 className="p-title">TRIGGERS</h4>
          <ul className="p-list">
            <li>Garden renovation</li>
            <li>Kamado purchase</li>
            <li>Friend's setup</li>
            <li>Hosting event</li>
          </ul>
        </div>
        <div className="pillar box-pains">
          <h4 className="p-title">PAINS</h4>
          <ul className="p-list">
            <li>How will it look after 2 winters?</li>
            <li>Can I trust €5K+ online?</li>
            <li>Showrooms are far</li>
          </ul>
        </div>
        <div className="pillar box-gains">
          <h4 className="p-title">GAINS</h4>
          <ul className="p-list">
            <li>Strong design</li>
            <li>Quality materials</li>
            <li>Customization</li>
            <li>Fair price</li>
            <li>Garden centerpiece</li>
          </ul>
        </div>
      </div>

      {/* 6. Strategic Objection Well */}
      <div className="well-box">
        <span className="well-label">KEY OBJECTION:</span>
        <p className="well-text">
          "Outdoor kitchens are used less than indoor kitchens — is this worth it?"
          <span className="well-strategy"> → Reassure via durability, long lifespan, pride-of-ownership.</span>
        </p>
      </div>

      {/* 7. Bottom Logic Footer */}
      <div className="logic-footer">
        <div className="f-left">
          <span className="f-lbl">VALUE DIMENSIONS</span>
          <span className="f-val">Durability • Aesthetics • Emotion</span>
        </div>
        <div className="f-right">
          <span className="f-lbl text-right">ACCEPTS TRADE-OFFS FOR DESIGN + DURABILITY + FAIR PRICE</span>
          <span className="f-val text-right">Reduced built-ins • Self-install • Fewer drawers • Lower-touch service</span>
        </div>
      </div>

      <style jsx>{`
        .empathy-canvas {
          background: white;
          padding: var(--space-3) 0;
          font-family: var(--font-body);
          width: 100%;
          margin: var(--space-2) 0;
        }

        /* 1. Header */
        .canvas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-2);
          padding-bottom: var(--space-2);
          border-bottom: 2px solid var(--color-neutral-100);
        }

        .persona-name {
          font-size: 13px;
          font-weight: 800;
          color: var(--color-neutral-900);
          font-family: var(--font-display);
          margin-bottom: 0px;
          letter-spacing: -0.01em;
        }

        .category-tag {
          color: var(--color-accent-dark);
          font-weight: 600;
          font-size: 10px;
          margin-left: 2px;
        }

        .persona-motto {
          font-size: 9px;
          color: var(--color-neutral-500);
          font-style: italic;
          margin: 0;
        }

        .price-box {
          text-align: right;
          line-height: 1;
        }

        .price-val {
          display: block;
          font-size: 15px;
          font-weight: 800;
          color: var(--color-neutral-900);
          font-family: var(--font-display);
        }

        .price-suffix {
          font-size: 7px;
          font-weight: 700;
          color: var(--color-neutral-400);
          letter-spacing: 0.05em;
          margin-top: 1px;
        }

        /* 2. Bio Strip */
        .bio-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-3);
          margin-bottom: var(--space-3);
          padding-top: var(--space-1);
        }

        .bio-cell {
          display: flex;
          flex-direction: column;
        }

        .bio-label {
          font-size: 7px;
          font-weight: 800;
          color: var(--color-neutral-400);
          letter-spacing: 0.05em;
          margin-bottom: 1px;
        }

        .bio-val {
          font-size: 9.5px;
          font-weight: 600;
          color: var(--color-neutral-700);
        }

        /* 3. Objective Bar */
        .objective-bar {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: var(--space-1) var(--space-3);
          background-color: var(--color-neutral-50);
          margin-bottom: var(--space-3);
          border-radius: 4px;
        }

        .obj-label {
          font-size: 8px;
          font-weight: 800;
          color: var(--color-neutral-900);
          white-space: nowrap;
        }

        .obj-text {
          font-size: 9.5px;
          color: var(--color-neutral-700);
          margin: 0;
        }

        /* 4. Quad Grid */
        .quad-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background-color: var(--color-neutral-100);
          border: 1px solid var(--color-neutral-100);
          margin-bottom: var(--space-3);
        }

        .quad-box {
          background: #FDFFFF;
          padding: var(--space-2) var(--space-3);
        }

        .quad-title {
          font-size: 8px;
          font-weight: 800;
          color: var(--color-neutral-400);
          letter-spacing: 0.08em;
          margin-bottom: var(--space-1);
          text-transform: uppercase;
        }

        .quad-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .quad-list li {
          font-size: 9px;
          color: var(--color-neutral-700);
          padding-left: 10px;
          position: relative;
          margin-bottom: 2px;
          line-height: 1.3;
        }

        .quad-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--color-neutral-300);
        }

        /* 5. Pillar Row */
        .pillar-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2);
          margin-bottom: var(--space-3);
        }

        .pillar {
          padding: var(--space-2) var(--space-3);
          border-radius: 3px;
          border-left: 2px solid;
        }

        .p-title {
          font-size: 8.5px;
          font-weight: 800;
          margin-bottom: var(--space-1);
          letter-spacing: 0.05em;
        }

        .p-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .p-list li {
          font-size: 9px;
          color: var(--color-neutral-700);
          line-height: 1.3;
          margin-bottom: 1px;
          display: flex;
          align-items: flex-start;
          gap: 4px;
        }

        .p-list li::before {
          content: "•";
          color: var(--color-neutral-400);
          flex-shrink: 0;
        }

        .box-triggers { background-color: #FAF9F6; border-left-color: #4D4D4D; }
        .box-pains { background-color: #FAF9F6; border-left-color: #A69475; }
        .box-gains { background-color: #F0FDF4; border-left-color: #4A5D23; }

        .box-triggers .p-title { color: #4D4D4D; }
        .box-pains .p-title { color: #A69475; }
        .box-gains .p-title { color: #4A5D23; }

        /* 6. Strategic Well */
        .well-box {
          display: flex;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          background-color: var(--color-neutral-50);
          border: 1px solid var(--color-neutral-200);
          border-radius: 3px;
          margin-bottom: var(--space-3);
        }

        .well-label {
          font-size: 8px;
          font-weight: 800;
          color: var(--color-neutral-900);
          margin-right: var(--space-3);
          white-space: nowrap;
        }

        .well-text {
          font-size: 9px;
          color: var(--color-neutral-600);
          margin: 0;
        }

        .well-strategy {
          color: var(--color-neutral-900);
          margin-left: 2px;
        }

        /* 7. Bottom Logic Footer */
        .logic-footer {
          display: flex;
          justify-content: space-between;
          padding-top: var(--space-3);
          border-top: 1.2px solid var(--color-neutral-100);
        }

        .f-left, .f-right { display: flex; flex-direction: column; }
        .text-right { text-align: right; }

        .f-lbl {
          font-size: 7px;
          font-weight: 800;
          color: var(--color-neutral-400);
          margin-bottom: 2px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .f-val {
          font-size: 8.5px;
          color: var(--color-neutral-600);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
