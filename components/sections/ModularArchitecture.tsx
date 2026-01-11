'use client';

import React from 'react';
import TextBlock from '@/components/content/TextBlock';
import FieldsmanModules from '@/components/charts/FieldsmanModules';

export default function ModularArchitecture() {
    return (
        <div>
            <h2 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 800, color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>Appendix F: Modular Product Architecture</h2>
            <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 800, color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>Customization Without Complexity</h3>

            <TextBlock columns={2}>
                <p>
                    Fieldsman's core strategic asset is its modular product architecture. The outdoor kitchen is built from standardized modules that can be combined and expanded, allowing customers to design configurations that fit their space and preferences while enabling scalable production.
                </p>
                <p>
                    The Module System:
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px', fontSize: 'var(--font-size-small)', color: 'var(--color-neutral-700)' }}>
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


        </div>
    );
}
