'use client';

import React from 'react';

// Consistent icon component for "Line" style icons
const Icon = ({ path, color }: { path: string, color?: string }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
    </svg>
);

export default function ProductionSolution() {
    return (
        <div style={{
            width: '100%',
            background: 'transparent',
            fontFamily: 'var(--font-body)',
            padding: '8px 0'
        }} data-export-as-image="true">

            {/* 1. HEADER & STRATEGY */}
            <div style={{
                marginBottom: '16px',
                textAlign: 'center',
                borderBottom: '1px solid var(--color-neutral-100)',
                paddingBottom: '12px',
                maxWidth: '600px',
                margin: '0 auto 16px auto'
            }}>
                <h3 style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: 'var(--color-neutral-900)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0'
                }}>
                    The Integrated Hub Strategy
                </h3>
            </div>

            {/* MAIN VERTICAL STACK */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', maxWidth: '560px', margin: '0 auto' }}>

                {/* STAGE 1: INBOUND (Top) */}
                <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>

                    {/* Steel Modules */}
                    <div style={{
                        background: 'white',
                        padding: '8px',
                        border: '1px solid var(--color-neutral-200)',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '4px', letterSpacing: '0.05em' }}>INBOUND A: STEEL MODULES</div>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-800)', marginBottom: '8px' }}>DUAL VENDOR STRATEGY</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-50)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--color-neutral-200)' }}>1. China</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-50)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--color-neutral-200)' }}>2. East Europe</div>
                        </div>
                    </div>

                    {/* Ceramic Slabs */}
                    <div style={{
                        background: 'white',
                        padding: '8px',
                        border: '1px solid var(--color-neutral-200)',
                        borderRadius: '4px',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-secondary)', marginBottom: '4px', letterSpacing: '0.05em' }}>INBOUND B: CERAMIC SLABS</div>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-neutral-800)', marginBottom: '8px' }}>DUAL VENDOR STRATEGY</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-50)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--color-neutral-200)' }}>1. China</div>
                            <div style={{ fontSize: '8px', color: 'var(--color-neutral-600)', background: 'var(--color-neutral-50)', padding: '2px 8px', borderRadius: '12px', border: '1px solid var(--color-neutral-200)' }}>2. Spain</div>
                        </div>
                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '8px', display: 'flex', alignItems: 'center', color: 'var(--color-neutral-300)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 2: THE FIELDSMAN HUB (Central) */}
                <div style={{
                    width: '100%',
                    background: 'white',
                    border: '1px solid var(--color-primary)',
                    borderTopWidth: '4px',
                    borderRadius: '4px',
                    padding: '16px 20px',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
                        background: 'var(--color-primary)', color: 'white',
                        fontSize: '9px', fontWeight: 800, padding: '3px 12px', borderRadius: '12px',
                        letterSpacing: '0.05em', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        FIELDSMAN HUB (NL)
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px' }}>

                        {/* Logic Row 1: Buffer */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--color-neutral-100)', paddingBottom: '12px' }}>
                            <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-neutral-50)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                <Icon path="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-900)' }}>Inventory Buffer (2 Months)</span>
                                    <span style={{ fontSize: '7px', fontWeight: 800, color: 'var(--color-primary)', background: 'rgba(74, 93, 35, 0.1)', padding: '1px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>Seasonal</span>
                                </div>
                                <div style={{ fontSize: '9px', color: 'var(--color-neutral-500)' }}>Absorbs seasonal peaks + enables 2-week delivery</div>
                            </div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(74, 93, 35, 0.2)' }}>SPEED</div>
                        </div>

                        {/* Logic Row 2: Cutting */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--color-neutral-100)', paddingBottom: '12px' }}>
                            <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-neutral-50)', borderRadius: '8px', color: 'var(--color-secondary)' }}>
                                <Icon path="M6 3h12l2 9H4l2-9zM4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '2px' }}>Ceramic Countertop Cutting</div>
                                <div style={{ fontSize: '9px', color: 'var(--color-neutral-500)' }}>In-house processing reduces cost</div>
                            </div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(74, 93, 35, 0.2)' }}>MARGIN</div>
                        </div>

                        {/* Logic Row 3: Assembly */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-neutral-50)', borderRadius: '8px', color: 'var(--color-primary)' }}>
                                <Icon path="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-900)', marginBottom: '2px' }}>Flex Assembly Line</div>
                                <div style={{ fontSize: '9px', color: 'var(--color-neutral-500)' }}>Scales for seasonal peaks + ensures 100% quality control before dispatch</div>
                            </div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-primary)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(74, 93, 35, 0.2)' }}>QUALITY</div>
                        </div>

                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '8px', display: 'flex', alignItems: 'center', color: 'var(--color-neutral-300)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 3: SPECIALIZED PARTNER */}
                <div style={{
                    width: '100%',
                    background: 'white',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '4px',
                    padding: '8px 12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'
                }}>
                    <div style={{ width: '28px', height: '28px', background: 'var(--color-neutral-50)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)' }}>
                        <Icon path="M10 17h4V5H10v12zm4 0h4V9h-4v8zm-8 4v-8h4v8H6z" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-secondary)', letterSpacing: '0.05em', marginBottom: '1px' }}>SPECIALIZED PARTNER</div>
                        <div style={{ fontSize: '9px', color: 'var(--color-neutral-600)' }}>Transport + Premium Install (White Glove)</div>
                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '8px', display: 'flex', alignItems: 'center', color: 'var(--color-neutral-300)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 4: REGIONAL CLIENTS */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '9px', fontWeight: 900, color: 'var(--color-neutral-400)', letterSpacing: '0.1em', textAlign: 'center' }}>END CUSTOMER</div>
                    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>

                        {/* NL */}
                        <div style={{
                            background: 'white',
                            border: '1px solid var(--color-neutral-200)',
                            borderRadius: '4px',
                            padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
                        }}>
                            <div style={{ fontSize: '10px' }}>🇳🇱</div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-700)' }}>NETHERLANDS</div>
                        </div>

                        {/* DE */}
                        <div style={{
                            background: 'white',
                            border: '1px solid var(--color-neutral-200)',
                            borderRadius: '4px',
                            padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
                        }}>
                            <div style={{ fontSize: '10px' }}>🇩🇪</div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-700)' }}>GERMANY</div>
                        </div>

                        {/* BE */}
                        <div style={{
                            background: 'white',
                            border: '1px solid var(--color-neutral-200)',
                            borderRadius: '4px',
                            padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
                        }}>
                            <div style={{ fontSize: '10px' }}>🇧🇪</div>
                            <div style={{ fontSize: '8px', fontWeight: 800, color: 'var(--color-neutral-700)' }}>BELGIUM</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
