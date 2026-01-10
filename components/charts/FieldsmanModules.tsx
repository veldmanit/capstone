'use client';

import React from 'react';

/**
 * FieldsmanModules
 * A professional, high-fidelity visualization of the modular product architecture.
 * Designed with a clean, flat, consulting-style aesthetic (McKinsey/BCG style).
 */
export default function FieldsmanModules() {
    const modules = [
        { name: 'Compact', dims: '50 × 80 × 92 cm', price: '€900', w: 50 },
        { name: 'Large', dims: '63 × 80 × 92 cm', price: '€1,075', w: 60 },
        { name: 'Kamado', dims: '68 × 80 × 92 cm', price: '€1,175', w: 65, hasCircle: true },
        { name: 'Corner', dims: '80 × 80 × 92 cm', price: '€1,050', w: 70, isCorner: true },
    ];

    // Flat, clean technical illustration style
    const ModuleBox = ({ w, hasCircle, isCorner }: { w: number; hasCircle?: boolean; isCorner?: boolean }) => {
        const strokeColor = "#4D4D4D"; // Dark Gray
        const accentFill = "#4A5D23"; // Olive Primary

        if (isCorner) {
            return (
                <svg width={w} height={48} viewBox="0 0 70 48" style={{ overflow: 'visible' }}>
                    <path d="M2,12 L68,12 L68,46 L28,46 L28,26 L2,26 Z" fill="white" stroke={strokeColor} strokeWidth="1" />
                    <path d="M2,2 L68,2 L68,12 L2,12 Z" fill={accentFill} stroke={strokeColor} strokeWidth="1" />
                    <path d="M2,12 L28,12 L28,26 L2,26 Z" fill={accentFill} stroke={strokeColor} strokeWidth="1" />
                </svg>
            );
        }
        return (
            <div style={{
                width: w,
                height: 48,
                background: 'white',
                border: `1px solid ${strokeColor}`,
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    background: accentFill,
                    borderBottom: `1px solid ${strokeColor}`
                }} />
                {hasCircle && (
                    <div style={{
                        position: 'absolute',
                        top: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 20,
                        height: 20,
                        border: `1px solid ${strokeColor}`,
                        borderRadius: '50%',
                        background: 'white'
                    }} />
                )}
            </div>
        );
    };

    const MiniMod = ({ w, k }: { w: number; k?: boolean }) => (
        <div style={{
            width: w,
            height: 12,
            background: '#4A5D23',
            marginRight: 1,
            position: 'relative'
        }}>
            {k && <div style={{
                position: 'absolute',
                top: 2,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 6,
                height: 6,
                border: '1px solid white',
                borderRadius: '50%'
            }} />}
        </div>
    );

    const Swatch = ({ bg, label, border, veins }: { bg: string; label: React.ReactNode; border?: string; veins?: string }) => (
        <div style={{ textAlign: 'center', width: 44 }}>
            <div style={{
                width: 32,
                height: 32,
                background: bg,
                borderRadius: 0,
                margin: '0 auto 6px',
                position: 'relative',
                overflow: 'hidden',
                border: border || '1px solid #E6DDBF'
            }}>
                {veins && <>
                    <div style={{ position: 'absolute', top: '20%', left: '5%', width: '90%', height: 1.5, background: veins, transform: 'rotate(25deg)', opacity: 0.5 }} />
                    <div style={{ position: 'absolute', top: '60%', left: '15%', width: '70%', height: 1, background: veins, transform: 'rotate(-15deg)', opacity: 0.35 }} />
                </>}
            </div>
            <div style={{ fontSize: 9, color: '#4D4D4D', lineHeight: 1.2, fontWeight: 500 }}>{label}</div>
        </div>
    );

    const Icon = ({ children, label, hl }: { children: React.ReactNode; label: React.ReactNode; hl?: boolean }) => (
        // Adjusted width to 48px to allow more space for the label or icon
        <div style={{ textAlign: 'center', width: 46 }}>
            <div style={{
                width: 32,
                height: 32,
                border: hl ? '1.5px solid #2e7d32' : '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px',
                color: hl ? '#2e7d32' : '#333'
            }}>
                {children}
            </div>
            <div style={{ fontSize: 9, color: hl ? '#2e7d32' : '#333', lineHeight: 1.2, fontWeight: hl ? 600 : 500 }}>{label}</div>
        </div>
    );

    return (
        <div className="modules-container">
            {/* Header */}
            <div style={{
                marginBottom: 'var(--space-6)',
                borderBottom: '1px solid var(--color-neutral-300)',
                paddingBottom: 'var(--space-3)'
            }}>
                <h3 style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    margin: '0 0 var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>Modular Product Architecture</h3>
                <p style={{
                    fontSize: '13px',
                    color: 'var(--color-neutral-800)',
                    margin: 0,
                    lineHeight: 1.4,
                    maxWidth: '90%'
                }}>Four standardized modules enable infinite personalization without operational complexity.</p>
            </div>

            {/* Main Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '50% 42%', gap: '8%' }}>

                {/* Left Column: Modules & Configurations */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

                    {/* CORE MODULES */}
                    <div>
                        <div style={{
                            fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-500)',
                            textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)',
                            borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: 2
                        }}>Core Modules</div>

                        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                            {modules.map((m) => (
                                <div key={m.name} style={{ textAlign: 'center', position: 'relative' }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-2)', height: 48, alignItems: 'flex-end' }}>
                                        <ModuleBox w={m.w} hasCircle={m.hasCircle} isCorner={m.isCorner} />
                                    </div>
                                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#000' }}>{m.name}</div>
                                    <div style={{ fontSize: '10px', color: '#666', marginBottom: 2 }}>{m.dims}</div>
                                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#333' }}>{m.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CONFIGURATIONS */}
                    <div style={{ background: '#f5f5f5', padding: 'var(--space-4)', border: '1px solid #e0e0e0' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-500)', textTransform: 'uppercase', marginBottom: 'var(--space-4)' }}>Illustrative Configurations</div>

                        {/* Row 1 */}
                        <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-5)' }}>
                            <div>
                                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 6 }}>Simple</div>
                                <div style={{ display: 'flex' }}><MiniMod w={20} /><MiniMod w={24} k /><MiniMod w={20} /></div>
                            </div>
                            <div>
                                <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 6 }}>Extended</div>
                                <div style={{ display: 'flex' }}><MiniMod w={20} /><MiniMod w={22} /><MiniMod w={24} k /><MiniMod w={22} /></div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 6 }}>Corner</div>
                            <div style={{ position: 'relative', height: 26, width: 70 }}>
                                <div style={{ position: 'absolute', bottom: 0, display: 'flex' }}><MiniMod w={22} /><MiniMod w={24} k /><MiniMod w={20} /></div>
                                <div style={{ position: 'absolute', bottom: 13, left: 0 }}><MiniMod w={22} /></div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Customization Options */}
                <div>
                    <div style={{
                        fontSize: '10px', fontWeight: 700, color: 'var(--color-neutral-500)',
                        textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-4)',
                        borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: 2
                    }}>Customization Layers</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                        {/* Frames */}
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 'var(--space-2)' }}>1. Frame Finish</div>
                            <div style={{ display: 'flex', gap: 12 }}>
                                <Swatch bg="#b0b0b0" label={<>Pebble<br />Grey</>} />
                                <Swatch bg="#c2b280" label={<>Timeless<br />Taupe</>} />
                                <Swatch bg="#222" label="Black" />
                            </div>
                        </div>

                        {/* Countertops */}
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 'var(--space-2)' }}>2. Countertop Material</div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                                <Swatch bg="#3a3530" veins="#c9a86c" label={<>Calagatta<br />Gold</>} />
                                <Swatch bg="#2a2520" veins="#c9a86c" label={<>Laurent<br />Gold</>} />
                                <Swatch bg="#4a4a4a" label={<>Concrete<br />Graphite</>} />
                                <Swatch bg="#9d9d9d" label={<>Concrete<br />Grey</>} />
                                <Swatch bg="#f5f2ed" veins="#d0ccc5" label="Statutario" border="1px solid #ddd" />
                                <Swatch bg="#e8e0d0" label={<>Limestone<br />Ivory</>} border="1px solid #ddd" />
                                <Swatch bg="#c5bdb0" veins="#8a8580" label={<>Fior di<br />Bosco</>} />
                            </div>
                        </div>

                        {/* Add-Ons - Restored all items */}
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 'var(--space-2)' }}>3. Functional Add-Ons</div>
                            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                <Icon label="Fridge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="5" y1="10" x2="19" y2="10" /></svg></Icon>
                                <Icon label="Sink"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z" /><path d="M6 12V8a2 2 0 012-2h0a2 2 0 012 2v4" /></svg></Icon>
                                <Icon label="Gas BBQ"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="10" width="18" height="6" rx="1" /><path d="M7 16v4" /><path d="M17 16v4" /><path d="M3 10c0-4 4-7 9-7s9 3 9 7" /><line x1="3" y1="10" x2="21" y2="10" /></svg></Icon>
                                <Icon label="Storage"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="1" /><line x1="4" y1="12" x2="20" y2="12" /></svg></Icon>
                                <Icon label="Shelves"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="3" width="16" height="18" rx="1" /><line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /></svg></Icon>
                                <Icon label="Drawers"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="1" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="4" y1="16" x2="20" y2="16" /></svg></Icon>
                                <Icon label="Kamado"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="12" rx="8" ry="8" /></svg></Icon>
                            </div>
                        </div>

                        {/* Delivery */}
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, color: '#333', marginBottom: 'var(--space-2)' }}>4. Delivery & Assembly</div>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <Icon label="Standard"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="10" rx="2" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /></svg></Icon>
                                <Icon label="Premium" hl><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg></Icon>
                                <Icon label="DIY"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg></Icon>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                .modules-container {
                    background: white;
                    padding: var(--space-4) 0;
                    font-family: var(--font-body);
                }
            `}</style>
        </div>
    );
}
