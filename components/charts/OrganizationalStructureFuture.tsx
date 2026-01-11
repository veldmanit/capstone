'use client';

import React from 'react';

/**
 * Organizational Chart Component (Future State)
 * Visualizes the 2030 Target Structure (19 FTE).
 * Hierarchy: Company -> Founders (C-Suite) -> Functional Teams
 */
export default function OrganizationalStructureFuture() {
    // Styles
    const cardStyle = {
        background: 'white',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: '4px',
        padding: '6px 8px',
        minWidth: '135px',
        textAlign: 'center' as const,
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        position: 'relative' as const,
        zIndex: 2,
    };

    const founderCardStyle = {
        ...cardStyle,
        border: '1px solid var(--color-primary)',
        background: '#fcfcfc',
        width: '100%',
        paddingBottom: '8px' // Extra space for list
    };

    const newHireCardStyle = {
        ...cardStyle,
        border: '1px dashed var(--color-neutral-400)',
        background: 'var(--color-neutral-50)',
        textAlign: 'left' as const,
        minWidth: '100px',
        width: '100%',
        padding: '8px 8px 6px 8px',
    };

    const nameStyle = {
        fontSize: '9px',
        fontWeight: 700,
        color: 'var(--color-neutral-900)',
        marginBottom: '1px',
        paddingRight: '30px',
    };

    const roleStyle = {
        fontSize: '8px',
        color: 'var(--color-neutral-600)',
        lineHeight: '1.2'
    };

    const responsibilityListStyle = {
        textAlign: 'left' as const,
        marginTop: '6px',
        paddingTop: '6px',
        borderTop: '1px solid var(--color-neutral-200)',
        fontSize: '7px',
        color: 'var(--color-neutral-700)',
        lineHeight: '1.4',
        listStyle: 'none', // clean look
        paddingLeft: '0'
    };

    const badgeStyle = {
        position: 'absolute' as const,
        top: '4px',
        right: '4px',
        fontSize: '6px',
        fontWeight: 700,
        color: 'white',
        background: 'var(--color-secondary)',
        padding: '1px 3px',
        borderRadius: '3px',
        textTransform: 'uppercase' as const,
    };

    const Connector = ({ height = '16px' }: { height?: string }) => (
        <div style={{ width: '1px', height, background: '#cbd5e1', margin: '0 auto' }}></div>
    );

    // Tree Logic: Centered Stack
    const TreeContainer = ({ children }: { children: React.ReactNode }) => (
        <div style={{ position: 'relative', width: '100%', paddingTop: '12px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                {children}
            </div>
        </div>
    );

    const TreeNode = ({ children, isFirst = false, isLast = false }: { children: React.ReactNode, isFirst?: boolean, isLast?: boolean }) => {
        return (
            <div style={{
                position: 'relative',
                paddingBottom: '8px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                {/* Connectors: Absolute Centered */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    marginLeft: '-0.5px',
                    top: '-12px',
                    height: '14px',
                    width: '1px',
                    background: '#cbd5e1',
                    display: isFirst ? 'none' : 'block'
                }}></div>

                {isFirst && (
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        marginLeft: '-0.5px',
                        top: '-24px',
                        height: '26px',
                        width: '1px',
                        background: '#cbd5e1',
                    }}></div>
                )}

                {/* Bottom Connector */}
                {!isLast && (
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        marginLeft: '-0.5px',
                        bottom: '-8px',
                        height: '10px',
                        width: '1px',
                        background: '#cbd5e1',
                    }}></div>
                )}

                <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div style={{
            background: 'white',
            border: '1px solid var(--color-neutral-200)',
            padding: 'var(--space-4)',
            borderRadius: 'var(--border-radius-md)',
            marginBottom: 'var(--space-8)',
            position: 'relative',
        }} data-export-as-image="true">
            <h3 style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--color-neutral-900)',
                marginBottom: 'var(--space-6)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'left'
            }}>
                Target Structure (2030): Scaled Organization (19 FTE)
            </h3>

            {/* CHART CONTAINER */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* LEVEL 1: COMPANY ENTITY */}
                <div style={{
                    ...cardStyle,
                    background: '#546E35',
                    borderColor: '#546E35',
                    color: 'white',
                    minWidth: '180px',
                    padding: '6px 16px'
                }}>
                    <div style={{ ...nameStyle, fontSize: '10px', color: 'white', paddingRight: 0 }}>FIELDSMAN VOF</div>
                    <div style={{ ...roleStyle, color: '#F4F3F1' }}>Unified Production & Commercial Entity</div>
                </div>

                <Connector height="20px" />

                {/* Horizontal Bar */}
                <div style={{
                    width: '320px',
                    height: '1px',
                    background: '#cbd5e1',
                    marginBottom: '-1px'
                }}></div>

                {/* LEVEL 2: FOUNDERS */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', justifyContent: 'center' }}>

                    {/* COLUMN 1: CEO (Raymon) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                        <Connector height="12px" />
                        <div style={founderCardStyle}>
                            <div style={{ ...nameStyle, paddingRight: 0 }}>Raymon Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 700 }}>CEO (1.0 FTE)</div>

                            {/* Consolidated Responsibilities */}
                            <ul style={responsibilityListStyle}>
                                <li>• Strategy & Finance</li>
                                <li>• Commercial Leadership</li>
                                <li>• Investor Relations</li>
                            </ul>
                        </div>

                        <TreeContainer>
                            <TreeNode isFirst>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>1.0 FTE</span>
                                    <div style={nameStyle}>Sales Lead</div>
                                    <div style={roleStyle}>Partnerships & B2B</div>
                                </div>
                            </TreeNode>
                            <TreeNode>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>1.0 FTE</span>
                                    <div style={nameStyle}>Marketing Mgr</div>
                                    <div style={roleStyle}>Growth & Brand</div>
                                </div>
                            </TreeNode>
                            <TreeNode isLast>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>3.0 FTE</span>
                                    <div style={nameStyle}>Customer Success</div>
                                    <div style={roleStyle}>Support & Service Team</div>
                                </div>
                            </TreeNode>
                        </TreeContainer>
                    </div>

                    {/* COLUMN 2: COO (Jurrian) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                        <Connector height="12px" />
                        <div style={founderCardStyle}>
                            <div style={{ ...nameStyle, paddingRight: 0 }}>Jurrian Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 700 }}>COO (1.0 FTE)</div>

                            <ul style={responsibilityListStyle}>
                                <li>• Product Vision</li>
                                <li>• R&D Innovation</li>
                                <li>• Supply Chain Strategy</li>
                            </ul>
                        </div>

                        <TreeContainer>
                            <TreeNode isFirst>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>1.0 FTE</span>
                                    <div style={nameStyle}>Product Designer</div>
                                    <div style={roleStyle}>New Models & R&D</div>
                                </div>
                            </TreeNode>
                            <TreeNode>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>2.0 FTE</span>
                                    <div style={nameStyle}>Procurement</div>
                                    <div style={roleStyle}>Purchasing & Inventory</div>
                                </div>
                            </TreeNode>
                            <TreeNode isLast>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>2.0 FTE</span>
                                    <div style={nameStyle}>Logistics</div>
                                    <div style={roleStyle}>Warehousing & Planner</div>
                                </div>
                            </TreeNode>
                        </TreeContainer>
                    </div>

                    {/* COLUMN 3: HEAD OF OPS (Herald) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
                        <Connector height="12px" />
                        <div style={founderCardStyle}>
                            <div style={{ ...nameStyle, paddingRight: 0 }}>Herald Veldman</div>
                            <div style={{ ...roleStyle, color: 'var(--color-primary)', fontWeight: 700 }}>Head of Ops (1.0 FTE)</div>

                            <ul style={responsibilityListStyle}>
                                <li>• Production Mgmt</li>
                                <li>• Quality Control</li>
                                <li>• Facility Mgmt</li>
                            </ul>
                        </div>

                        <TreeContainer>
                            <TreeNode isFirst>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>1.0 FTE</span>
                                    <div style={nameStyle}>Workshop Lead</div>
                                    <div style={roleStyle}>Floor Management</div>
                                </div>
                            </TreeNode>
                            <TreeNode>
                                <div style={newHireCardStyle}>
                                    <span style={badgeStyle}>5.0 FTE</span>
                                    <div style={nameStyle}>Assembly Team</div>
                                    <div style={roleStyle}>Production Technicians</div>
                                </div>
                            </TreeNode>
                            {/* Adding Installation team which might fall under Ops/Service, putting here to balance P&L count if needed or distinct */}
                        </TreeContainer>
                    </div>

                </div>

            </div>
        </div>
    );
}
