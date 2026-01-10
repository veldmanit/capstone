'use client';

import React from 'react';

// Consistent icon component for "Line" style icons
const Icon = ({ path, color = '#64748B' }: { path: string, color?: string }) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
    </svg>
);

export default function ProductionSolution() {
    return (
        <div style={{
            width: '100%',
            background: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>

            {/* 1. HEADER & STRATEGY */}
            <div style={{
                marginBottom: '16px',
                textAlign: 'center',
                borderBottom: '1px solid #F1F5F9',
                paddingBottom: '12px'
            }}>
                <h3 style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    color: '#0F172A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '4px'
                }}>
                    The Integrated Hub Strategy
                </h3>
                <p style={{
                    fontSize: '9px',
                    color: '#475569',
                    maxWidth: '90%',
                    margin: '0 auto',
                    lineHeight: '1.4'
                }}>
                    We centralize inventory, customization, and countertop cutting in NL to <strong>absorb seasonal demand peaks</strong>, reduce lead time, and increase margin — while sourcing standardized modules globally.
                </p>
            </div>

            {/* MAIN VERTICAL STACK */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', maxWidth: '520px', margin: '0 auto' }}>

                {/* STAGE 1: INBOUND (Top) */}
                <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

                    {/* Steel Modules */}
                    <div style={{ background: '#F8FAFC', padding: '8px', border: '1px solid #E2E8F0', borderRadius: '4px', textAlign: 'center' }}>
                        <div style={{ fontSize: '7px', fontWeight: 800, color: '#94A3B8', marginBottom: '2px', letterSpacing: '0.05em' }}>INBOUND A: STEEL MODULES</div>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>DUAL VENDOR STRATEGY</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ fontSize: '7px', color: '#64748B', background: 'white', padding: '1px 6px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>1. China</div>
                            <div style={{ fontSize: '7px', color: '#64748B', background: 'white', padding: '1px 6px', borderRadius: '10px', border: '1px solid #E2E8F0' }}>2. East Europe</div>
                        </div>
                    </div>

                    {/* Ceramic Slabs */}
                    <div style={{ background: '#FFF7ED', padding: '8px', border: '1px solid #FFEDD5', borderRadius: '4px', textAlign: 'center' }}>
                        <div style={{ fontSize: '7px', fontWeight: 800, color: '#FB923C', marginBottom: '2px', letterSpacing: '0.05em' }}>INBOUND B: CERAMIC SLABS</div>
                        <div style={{ fontSize: '8px', fontWeight: 700, color: '#C2410C', marginBottom: '4px' }}>DUAL VENDOR STRATEGY</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ fontSize: '7px', color: '#EA580C', background: 'white', padding: '1px 6px', borderRadius: '10px', border: '1px solid #FFEDD5' }}>1. China</div>
                            <div style={{ fontSize: '7px', color: '#EA580C', background: 'white', padding: '1px 6px', borderRadius: '10px', border: '1px solid #FFEDD5' }}>2. Spain</div>
                        </div>
                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '12px', display: 'flex', alignItems: 'center', color: '#CBD5E1' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 2: THE FIELDSMAN HUB (Central) */}
                <div style={{
                    width: '100%',
                    background: 'white',
                    border: '1.5px solid #0F172A',
                    borderRadius: '6px',
                    padding: '12px 16px',
                    position: 'relative',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                }}>
                    <div style={{
                        position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)',
                        background: '#0F172A', color: 'white',
                        fontSize: '9px', fontWeight: 900, padding: '1px 12px', borderRadius: '10px'
                    }}>
                        FIELDSMAN HUB (NL)
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>

                        {/* Logic Row 1: Buffer */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px dashed #F1F5F9', paddingBottom: '8px' }}>
                            <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#EFF6FF', borderRadius: '6px' }}>
                                <Icon path="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" color="#3B82F6" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '1px' }}>
                                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#1E40AF' }}>Inventory Buffer (2 Months)</span>
                                    <span style={{ fontSize: '6px', fontWeight: 800, color: '#3B82F6', background: '#EFF6FF', padding: '0.5px 4px', borderRadius: '3px', textTransform: 'uppercase' }}>Seasonal Buffer</span>
                                </div>
                                <div style={{ fontSize: '8px', color: '#64748B' }}>Absorbs seasonal peaks + enables 2-week delivery</div>
                            </div>
                            <div style={{ fontSize: '7px', fontWeight: 900, color: '#10B981', background: '#ECFDF5', padding: '1px 6px', borderRadius: '3px', border: '1px solid #D1FAE5' }}>SPEED</div>
                        </div>

                        {/* Logic Row 2: Cutting */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px dashed #F1F5F9', paddingBottom: '8px' }}>
                            <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFF7ED', borderRadius: '6px' }}>
                                <Icon path="M6 3h12l2 9H4l2-9zM4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" color="#EA580C" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '9px', fontWeight: 700, color: '#9A3412', marginBottom: '1px' }}>Ceramic Countertop Cutting</div>
                                <div style={{ fontSize: '8px', color: '#64748B' }}>In-house processing reduces cost</div>
                            </div>
                            <div style={{ fontSize: '7px', fontWeight: 900, color: '#10B981', background: '#ECFDF5', padding: '1px 6px', borderRadius: '3px', border: '1px solid #D1FAE5' }}>MARGIN</div>
                        </div>

                        {/* Logic Row 3: Assembly */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F0FDF4', borderRadius: '6px' }}>
                                <Icon path="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" color="#166534" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '9px', fontWeight: 700, color: '#166534', marginBottom: '1px' }}>Flex Assembly Line</div>
                                <div style={{ fontSize: '8px', color: '#64748B' }}>Scales for seasonal peaks + ensures 100% quality control before dispatch</div>
                            </div>
                            <div style={{ fontSize: '7px', fontWeight: 900, color: '#10B981', background: '#ECFDF5', padding: '1px 6px', borderRadius: '3px', border: '1px solid #D1FAE5' }}>CUSTOM</div>
                        </div>

                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '12px', display: 'flex', alignItems: 'center', color: '#0F172A' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 3: SPECIALIZED PARTNER */}
                <div style={{
                    width: '100%',
                    background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', padding: '8px 16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'
                }}>
                    <div style={{ width: '24px', height: '24px', background: 'white', border: '1px solid #BBF7D0', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon path="M10 17h4V5H10v12zm4 0h4V9h-4v8zm-8 4v-8h4v8H6z" color="#15803D" />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '8px', fontWeight: 800, color: '#166534', letterSpacing: '0.05em' }}>SPECIALIZED PARTNER</div>
                        <div style={{ fontSize: '8px', color: '#15803D' }}>Transport + Premium Install (White Glove)</div>
                    </div>
                </div>

                {/* Separator Arrow */}
                <div style={{ height: '12px', display: 'flex', alignItems: 'center', color: '#0F172A' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>

                {/* STAGE 4: REGIONAL CLIENTS */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '8px', fontWeight: 900, color: '#166534', letterSpacing: '0.1em', textAlign: 'center' }}>END CUSTOMER</div>
                    <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px' }}>

                        {/* NL */}
                        <div style={{
                            background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px'
                        }}>
                            <div style={{ fontSize: '8px' }}>🇳🇱</div>
                            <div style={{ fontSize: '7px', fontWeight: 800, color: '#166534' }}>NETHERLANDS</div>
                        </div>

                        {/* DE */}
                        <div style={{
                            background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px'
                        }}>
                            <div style={{ fontSize: '8px' }}>🇩🇪</div>
                            <div style={{ fontSize: '7px', fontWeight: 800, color: '#166534' }}>GERMANY</div>
                        </div>

                        {/* BE */}
                        <div style={{
                            background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '4px', padding: '6px',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px'
                        }}>
                            <div style={{ fontSize: '8px' }}>🇧🇪</div>
                            <div style={{ fontSize: '7px', fontWeight: 800, color: '#166534' }}>BELGIUM</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
