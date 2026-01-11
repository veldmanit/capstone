'use client';

import React from 'react';
import TextBlock from '@/components/content/TextBlock';
import FieldsmanModules from '@/components/charts/FieldsmanModules';

export default function ModularArchitecture() {
    return (
        <div>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix F: Modular Product Architecture</h2>
            <h3 style={{ fontSize: '18px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>Customization Without Complexity</h3>

            <TextBlock columns={2}>
                <p>
                    Fieldsman's core strategic asset is its modular product architecture. The outdoor kitchen is built from standardized modules that can be combined and expanded, allowing customers to design configurations that fit their space and preferences while enabling scalable production.
                </p>
                <p>
                    <strong>The Module System:</strong>
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px', fontSize: '11px', color: 'var(--color-neutral-700)' }}>
                    <li><strong>Compact Module (49.5 cm):</strong> Storage and compact setups.</li>
                    <li><strong>Ruim Module (63 cm):</strong> Primary workspace building block.</li>
                    <li><strong>Kamado Module (68 cm):</strong> Anchors most configurations.</li>
                    <li><strong>Corner Module (80 cm):</strong> Enables L-shaped layouts.</li>
                </ul>
                <p>
                    Customization options include panel materials (steel or composite in teak, oak, or graphite finishes), steel colors (black or white), and ceramic countertops. This design creates perceived personalization while limiting complexity.
                </p>
                <p>
                    <strong>The Scaling Rationale:</strong> Modularity is the foundation of mass customization. A stable module set allows Fieldsman to optimize cutting patterns, standardize assembly, and scale to 1,000–5,000 kitchens per year without redesigning the product. This solves the "mid-premium dilemma": offering customization without the unscalable costs of bespoke craftsmanship.
                </p>
            </TextBlock>

            <div style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                <FieldsmanModules />
            </div>

            <div style={{ background: 'var(--color-neutral-50)', padding: 'var(--space-5)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-neutral-200)', marginBottom: 'var(--space-8)' }}>
                <h3 style={{ fontSize: '14px', marginBottom: 'var(--space-3)', fontWeight: 800 }}>Pricing Architecture</h3>
                <p style={{ fontSize: '11px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>
                    The D2C model supports a modular pricing ladder that captures customers at multiple entry points without changing the core production logic.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)' }}>
                    <div style={{ background: 'white', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-primary)' }}>ENTRY</div>
                        <div style={{ fontSize: '15px', fontWeight: 800, margin: '2px 0' }}>€2,000+</div>
                        <div style={{ fontSize: '10px', color: 'var(--color-neutral-600)' }}>2 modules. Targets price-sensitive first-time buyers.</div>
                    </div>
                    <div style={{ background: 'white', padding: 'var(--space-3)', border: '1.5px solid var(--color-primary)', borderRadius: '4px', position: 'relative' }}>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-primary)' }}>CORE</div>
                        <div style={{ fontSize: '15px', fontWeight: 800, margin: '2px 0' }}>€3k – €5k</div>
                        <div style={{ fontSize: '10px', color: 'var(--color-neutral-600)' }}>4–6 modules. Primary mid-premium target segment.</div>
                    </div>
                    <div style={{ background: 'white', padding: 'var(--space-3)', border: '1px solid var(--color-neutral-200)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-primary)' }}>PREMIUM</div>
                        <div style={{ fontSize: '15px', fontWeight: 800, margin: '2px 0' }}>€6k – €10k</div>
                        <div style={{ fontSize: '10px', color: 'var(--color-neutral-600)' }}>8+ modules. Design-driven, full outdoor kitchen.</div>
                    </div>
                </div>
            </div>

            <div style={{ background: 'var(--color-neutral-900)', color: 'white', padding: 'var(--space-8)', borderRadius: 'var(--border-radius-lg)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h3 style={{ color: 'var(--color-secondary)', fontSize: '16px', marginBottom: 'var(--space-3)' }}>The Modularity Moat</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
                        <div>
                            <h4 style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>VS Regional Craftsmen</h4>
                            <p style={{ fontSize: '11px', opacity: 0.9 }}>
                                Regional craftsmen offer unlimited bespoke options but cannot scale. Their costs are tied to manual labor and one-off designs. Fieldsman delivers the <strong>"Wow Effect"</strong> at scale.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>VS Mass Retailers</h4>
                            <p style={{ fontSize: '11px', opacity: 0.9 }}>
                                Mass retailers offer standardization but no personalization. Their products are generic. Fieldsman offers <strong>high-end aesthetic control</strong> while maintaining retail-like operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Decorative element */}
                <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '150px', height: '150px', background: 'var(--color-primary)', opacity: 0.1, borderRadius: '50%' }} />
            </div>
        </div>
    );
}
