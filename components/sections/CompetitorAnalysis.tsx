'use client';

import React from 'react';

export default function CompetitorAnalysis() {

    // Helper to render score cells with color coding
    const ScoreCell = ({ value }: { value: number }) => {
        let bg = '#eee';
        let color = '#333';

        // High scores (Good)
        if (value >= 9) {
            bg = 'var(--color-primary)';
            color = 'white';
        } else if (value >= 7) {
            bg = 'var(--color-primary-light)';
            color = 'var(--color-primary-dark)';
        }
        // Mid scores
        else if (value >= 5) {
            bg = 'var(--color-neutral-200)';
            color = 'var(--color-neutral-800)';
        }
        // Low scores (Bad/Weak)
        else {
            bg = 'var(--color-neutral-100)';
            color = 'var(--color-neutral-400)';
        }

        return (
            <td style={{
                textAlign: 'center',
                background: bg,
                color: color,
                fontWeight: 700,
                border: '1px solid white'
            }}>
                {value}
            </td>
        );
    };

    const SegmentRow = ({ title }: { title: string }) => (
        <tr style={{ background: 'var(--color-neutral-100)' }}>
            <td colSpan={13} style={{
                padding: '8px',
                fontWeight: 800,
                fontSize: '11px',
                textTransform: 'uppercase',
                color: 'var(--color-neutral-700)',
                letterSpacing: '0.05em'
            }}>
                {title}
            </td>
        </tr>
    );

    return (
        <div style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Appendix D: Competitor Landscape Analysis</h2>
            <h3 style={{ fontSize: 'var(--font-size-h3)', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>Competitive Benchmarking Matrix</h3>

            <div style={{ overflowX: 'auto', border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--border-radius-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8px' }}>
                    <thead style={{ background: 'var(--color-neutral-100)' }}>
                        <tr>
                            <th style={{ textAlign: 'left', width: '12%', padding: '6px 4px', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>Name</th>
                            <th style={{ textAlign: 'left', width: '3%', padding: '6px 4px', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>C</th>
                            <th style={{ textAlign: 'left', width: '8%', padding: '6px 4px', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>Price</th>
                            <th style={{ textAlign: 'left', width: '25%', padding: '6px 4px', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>Offering</th>
                            <th title="Price Accessibility" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>PA</th>
                            <th title="Design Quality" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>DQ</th>
                            <th title="Durability" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>DU</th>
                            <th title="Customization" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>CU</th>
                            <th title="Online Experience" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>OE</th>
                            <th title="Lead Time" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>LT</th>
                            <th title="Service Level" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>SL</th>
                            <th title="Brand Trust" style={{ width: '4%', padding: '6px 4px', textAlign: 'center', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>BT</th>
                            <th style={{ textAlign: 'left', width: '20%', padding: '6px 4px', fontWeight: 700, color: 'var(--color-neutral-600)', borderBottom: '2px solid var(--color-neutral-200)', fontSize: '7px', whiteSpace: 'nowrap' }}>Channels</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Luxury Segment */}
                        <SegmentRow title="Luxury Segment" />
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>COOKX</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€25k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Bespoke architectural integration with swimming pools/gardens</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Showrooms, Personal Consultants</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>COOXS Concepts</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€8k – €50k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>High-end modular (Core) or full custom bespoke designs (Create)</td>
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={4} />
                            <ScoreCell value={7} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Showroom, 3D Design Consultancy</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Cubic Outdoor</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>DE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€25k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Handcrafted German luxury, monolithic ceramic cladding and waterfall sides</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>High-end Landscaping Partners</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Gaze Burvill</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>UK</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€18k – €100k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Artisan oak craftsmanship; small-volume manufacture for high service</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={9} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Artisan Workshops, Bespoke Projects</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Röshults</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>SE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€5k – €18k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>High-end Scandinavian minimalist modular frames and gas/charcoal modules</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={8} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Global Design Stores, Luxury Retail</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Anker</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>DE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€15k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Precision-engineered metal modular systems for high-end environments</td>
                            <ScoreCell value={2} />
                            <ScoreCell value={9} />
                            <ScoreCell value={10} />
                            <ScoreCell value={7} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Design Partners, Direct Export</td>
                        </tr>

                        {/* Premium Segment */}
                        <SegmentRow title="Premium Segment" />
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Roostr</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€6k – €40k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>All-weather modular systems (Rubix/Allure/Wave) with 10-year warranties</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>DTC Online, Roostr Studio, Dealers</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Unikaad</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>DE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€7k – €46k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Custom HPL-based kitchens (High-Pressure Laminate) resistant to UV</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Carpentry Workshops, Video Consult</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Novara</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>ES</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€10k – €20k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Sleek Mediterranean modularity using advanced ceramics and HPL</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={4} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Specialized Kitchen Studios</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>OFYR</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€1.8k – €4.5k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Iconic fire-cone cooking units and wood-storage prep islands</td>
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>BBQ Shops, Global Wholesale</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Life-Steel</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€3.8k – €7.5k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Robust steel modular setups; smart layout focus; maintenance-free</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Showrooms (Mill/Aalsmeer), Factory Direct</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Induplus</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>BE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€2.7k – €10k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Belgian stylish mobile trolleys with induction, teppanyaki, and wok modules</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Luxury E-commerce, Specialty Retail</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Otto Wilde</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>DE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€3k – €10k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>High-performance G32 modular steel units and precision gas grilling</td>
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>DTC Online, Grilling Retailers</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Flammkraft</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>DE</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€4k – €20k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Solid stainless steel Block series; architectural UV-stable powder coatings</td>
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Kitchen Retailers, Design Partners</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Napoleon Oasis</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>CA</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€5.6k – €10k+</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Pre-configured matte black or stainless cabinets for 700-series grills</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>BBQ Dealer Network, Coolblue</td>
                        </tr>


                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Smartboxy</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>PL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€4.5k – €11k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Weatherproof steel garden kitchens; modular SB360 sets with fridge/sink</td>
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>DTC Online, European Dealer Network</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Dutchwoodcraft</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€1.8k – €5.8k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Custom Douglas fir and scaffolding wood all-in-one kitchens</td>
                            <ScoreCell value={8} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Direct Workshop (Neede), DTC</td>
                        </tr>


                        {/* Mid-Premium Segment */}
                        <SegmentRow title="Mid-Premium Segment" />
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>MetaalEnzo</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€250 – €2.5k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Basic modular metal frames to house 3rd-party BBQ units</td>
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <ScoreCell value={4} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>DTC Online, Local Workshops</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Regional Crafts</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€3k – €10k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Artisanal one-off builds; high customization but low digital tools</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={10} />
                            <ScoreCell value={1} />
                            <ScoreCell value={3} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Local Word of Mouth, Direct Sales</td>
                        </tr>

                        {/* Low Budget Segment */}
                        <SegmentRow title="Low Budget Segment" />
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>IKEA</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>INT</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€160 – €1.5k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>GRILLSKÄR/BÅTSKÄR modular steel kits; DIY focus; mass utility</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={3} />
                            <ScoreCell value={3} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={7} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Global Retail Centers, E-commerce</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Buitenkeukendeal</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€775 – €2.3k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Douglas wood kitchens with integrated 70L fridges and Kamado cutouts</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={4} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>DTC Online Outlet</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Weber</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>INT</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€1k – €5k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Standalone premium grills with basic modular island expansion kits</td>
                            <ScoreCell value={9} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={10} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Garden Centers, General Retail</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>Boretti</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>IT/NL</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€649 – €2.8k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Italian-style all-in-one Luciano sets with 7 burners and fridges</td>
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Kitchen Stores, Large Distribution</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--color-neutral-100)' }}>
                            <td style={{ padding: '3px 4px', fontWeight: 600, color: 'var(--color-neutral-900)' }}>DIY</td>
                            <td style={{ padding: '3px 4px', verticalAlign: 'middle' }}>N/A</td>
                            <td style={{ padding: '3px 4px', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)', color: 'var(--color-neutral-700)', fontSize: '8px' }}>€0 – €2k</td>
                            <td style={{ padding: '3px 4px', color: 'var(--color-neutral-600)', lineHeight: '1.2', fontSize: '7.5px' }}>Self-build frames using raw hardware store materials (wood/stone)</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={10} />
                            <ScoreCell value={1} />
                            <ScoreCell value={3} />
                            <ScoreCell value={1} />
                            <ScoreCell value={1} />
                            <td style={{ padding: '3px 4px', fontSize: '7.5px', color: 'var(--color-neutral-600)', lineHeight: '1.2' }}>Hardware Stores (Hornbach, Gamma)</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--space-4)', fontSize: 'var(--font-size-tiny)', color: 'var(--color-neutral-500)', fontStyle: 'italic' }}>
                Key: <strong>PA:</strong> Price; <strong>DQ:</strong> Design; <strong>DU:</strong> Durability; <strong>CU:</strong> Custom; <strong>OE:</strong> Online; <strong>LT:</strong> Lead Time; <strong>SL:</strong> Service; <strong>BT:</strong> Trust.
            </div>
        </div>
    );
}
