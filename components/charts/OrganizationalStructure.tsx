'use client';

import React from 'react';

/**
 * Organizational Chart Component
 * Visualizes the 3-shareholder structure and the part-time production team.
 */
export default function OrganizationalStructure() {
    // Styles for the cards
    const cardStyle = {
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: '4px',
        padding: '8px 12px',
        minWidth: '120px',
        textAlign: 'center' as const,
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        position: 'relative' as const,
        zIndex: 2,
    };

    const nameStyle = {
        fontSize: '10px',
        fontWeight: 700,
        color: 'var(--color-neutral-900)',
        marginBottom: '2px',
    };

    const roleStyle = {
        fontSize: '9px',
        color: 'var(--color-neutral-600)',
    };

    // Style for vertical connector lines
    const verticalLineStyle = {
        width: '1px',
        background: 'var(--color-neutral-300)',
        position: 'absolute' as const,
        left: '50%',
        transform: 'translateX(-50%)',
    };

    return (
        <div style={{
            background: 'var(--color-neutral-50)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--border-radius-md)',
            marginBottom: 'var(--space-8)',
            position: 'relative',
        }} data-export-as-image="true">
            <h3 style={{
                fontSize: '12px',
                fontWeight: 800,
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--space-6)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'left'
            }}>
                Organizational Structure: Lean Ownership Model
            </h3>

            {/* CHART CONTAINER */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* LEVEL 1: SHAREHOLDERS */}
                <div style={{ display: 'flex', gap: '12px', position: 'relative', alignItems: 'flex-start' }}>

                    {/* Raymon */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130px' }}>
                        <div style={{ ...cardStyle, width: '100%', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px' }}>
                            <div style={nameStyle}>Raymon Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2px' }}>CEO/CFO</div>
                            <div style={{ fontSize: '8px', color: '#64748b', lineHeight: '1.2' }}>Strategy, Sales, Finance, IT</div>
                        </div>
                        {/* Stem with 1/3 Label */}
                        <div style={{ position: 'relative', width: '1px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '1px', height: '100%', background: '#cbd5e1' }}></div>
                            <div style={{ position: 'absolute', background: 'var(--color-neutral-50)', color: '#64748b', fontSize: '8px', padding: '0 2px' }}>1/3</div>
                        </div>
                    </div>

                    {/* Herald */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130px' }}>
                        <div style={{ ...cardStyle, width: '100%', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px' }}>
                            <div style={nameStyle}>Herald Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2px' }}>Head of Ops</div>
                            <div style={{ fontSize: '8px', color: '#64748b', lineHeight: '1.2' }}>Assembly, Delivery, Service</div>
                        </div>
                        {/* Stem with 1/3 Label */}
                        <div style={{ position: 'relative', width: '1px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '1px', height: '100%', background: '#cbd5e1' }}></div>
                            <div style={{ position: 'absolute', background: 'var(--color-neutral-50)', color: '#64748b', fontSize: '8px', padding: '0 2px' }}>1/3</div>
                        </div>
                    </div>

                    {/* Jurrian */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '130px' }}>
                        <div style={{ ...cardStyle, width: '100%', minHeight: '80px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '8px' }}>
                            <div style={nameStyle}>Jurrian Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 600, marginBottom: '2px' }}>COO</div>
                            <div style={{ fontSize: '8px', color: '#64748b', lineHeight: '1.2' }}>Product Design, Supply Chain</div>
                        </div>
                        {/* Stem with 1/3 Label */}
                        <div style={{ position: 'relative', width: '1px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ width: '1px', height: '100%', background: '#cbd5e1' }}></div>
                            <div style={{ position: 'absolute', background: 'var(--color-neutral-50)', color: '#64748b', fontSize: '8px', padding: '0 2px' }}>1/3</div>
                        </div>
                    </div>

                    {/* Horizontal Connector Line combining the 3 bottom-stems */}
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '16%', // Center of first card to center of last card
                        right: '16%',
                        height: '1px',
                        background: '#cbd5e1',
                        zIndex: 0
                    }}></div>
                </div>

                {/* Vertical Line Level 1 -> 2 */}
                <div style={{ width: '1px', height: '16px', background: '#cbd5e1' }}></div>

                {/* LEVEL 2: COMPANY ENTITY */}
                <div style={{
                    ...cardStyle,
                    background: '#546E35', // Olive Drab
                    borderColor: '#546E35',
                    color: 'white',
                    minWidth: '160px',
                    padding: '8px 16px'
                }}>
                    <div style={{ ...nameStyle, fontSize: '11px', color: 'white' }}>FIELDSMAN VOF</div>
                    <div style={{ ...roleStyle, color: '#F4F3F1' }}>Operational Entity</div>
                </div>

                {/* Vertical Line Level 2 -> 3 */}
                <div style={{ width: '1px', height: '16px', background: '#cbd5e1' }}></div>

                {/* LEVEL 3: OPERATIONS */}
                <div style={{ display: 'flex', position: 'relative', paddingTop: '10px' }}>

                    {/* Horizontal Connector Bar - Spans 3 items now */}
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '16%', // Adjusted for 3 items
                        right: '16%',
                        height: '1px',
                        background: '#cbd5e1'
                    }}></div>

                    {/* Sales & Marketing */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 6px', width: '130px' }}>
                        <div style={{ width: '1px', height: '10px', background: '#cbd5e1', marginTop: '-10px' }}></div> {/* Stem Up */}
                        <div style={{ ...cardStyle, width: '100%', background: 'white' }}>
                            <div style={nameStyle}>Sales & Marketing</div>
                            <div style={roleStyle}>1 Employee</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-500)', marginTop: '2px' }}>~8hr/week</div>
                        </div>
                    </div>

                    {/* Production */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 6px', width: '130px' }}>
                        <div style={{ width: '1px', height: '10px', background: '#cbd5e1', marginTop: '-10px' }}></div> {/* Stem Up */}
                        <div style={{ ...cardStyle, width: '100%', background: 'white' }}>
                            <div style={nameStyle}>Production</div>
                            <div style={roleStyle}>2 Employees</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-500)', marginTop: '2px' }}>~12hr/week</div>
                        </div>
                    </div>

                    {/* Assembly */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 6px', width: '130px' }}>
                        <div style={{ width: '1px', height: '10px', background: '#cbd5e1', marginTop: '-10px' }}></div> {/* Stem Up */}
                        <div style={{ ...cardStyle, width: '100%', background: 'white' }}>
                            <div style={nameStyle}>Assembly</div>
                            <div style={roleStyle}>2 Employees</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-500)', marginTop: '2px' }}>~8hr/week</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
