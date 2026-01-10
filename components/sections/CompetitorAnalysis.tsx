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
            <h3 style={{ fontSize: '18px', color: 'var(--color-neutral-600)', marginBottom: 'var(--space-6)' }}>Competitive Benchmarking Matrix</h3>

            <div className="table-wrapper">
                <table className="comp-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', width: '12%' }}>Name</th>
                            <th style={{ textAlign: 'left', width: '3%' }}>C</th>
                            <th style={{ textAlign: 'left', width: '8%' }}>Price</th>
                            <th style={{ textAlign: 'left', width: '25%' }}>Offering</th>
                            <th title="Price Accessibility" style={{ width: '4%' }}>PA</th>
                            <th title="Design Quality" style={{ width: '4%' }}>DQ</th>
                            <th title="Durability" style={{ width: '4%' }}>DU</th>
                            <th title="Customization" style={{ width: '4%' }}>CU</th>
                            <th title="Online Experience" style={{ width: '4%' }}>OE</th>
                            <th title="Lead Time" style={{ width: '4%' }}>LT</th>
                            <th title="Service Level" style={{ width: '4%' }}>SL</th>
                            <th title="Brand Trust" style={{ width: '4%' }}>BT</th>
                            <th style={{ textAlign: 'left', width: '20%' }}>Channels</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Luxury Segment */}
                        <SegmentRow title="Luxury Segment" />
                        <tr>
                            <td className="brand">COOKX</td>
                            <td>NL</td>
                            <td className="price">€25k+</td>
                            <td className="desc">Bespoke architectural integration with swimming pools/gardens</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td className="channel">Showrooms, Personal Consultants</td>
                        </tr>
                        <tr>
                            <td className="brand">COOXS Concepts</td>
                            <td>NL</td>
                            <td className="price">€8k – €50k+</td>
                            <td className="desc">High-end modular (Core) or full custom bespoke designs (Create)</td>
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={4} />
                            <ScoreCell value={7} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td className="channel">Showroom, 3D Design Consultancy</td>
                        </tr>
                        <tr>
                            <td className="brand">Cubic Outdoor</td>
                            <td>DE</td>
                            <td className="price">€25k+</td>
                            <td className="desc">Handcrafted German luxury, monolithic ceramic cladding and waterfall sides</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td className="channel">High-end Landscaping Partners</td>
                        </tr>
                        <tr>
                            <td className="brand">Gaze Burvill</td>
                            <td>UK</td>
                            <td className="price">€18k – €100k+</td>
                            <td className="desc">Artisan oak craftsmanship; small-volume manufacture for high service</td>
                            <ScoreCell value={1} />
                            <ScoreCell value={10} />
                            <ScoreCell value={9} />
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={2} />
                            <ScoreCell value={10} />
                            <ScoreCell value={10} />
                            <td className="channel">Artisan Workshops, Bespoke Projects</td>
                        </tr>
                        <tr>
                            <td className="brand">Röshults</td>
                            <td>SE</td>
                            <td className="price">€5k – €18k</td>
                            <td className="desc">High-end Scandinavian minimalist modular frames and gas/charcoal modules</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={8} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={10} />
                            <td className="channel">Global Design Stores, Luxury Retail</td>
                        </tr>
                        <tr>
                            <td className="brand">Anker</td>
                            <td>DE</td>
                            <td className="price">€15k+</td>
                            <td className="desc">Precision-engineered metal modular systems for high-end environments</td>
                            <ScoreCell value={2} />
                            <ScoreCell value={9} />
                            <ScoreCell value={10} />
                            <ScoreCell value={7} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <td className="channel">Design Partners, Direct Export</td>
                        </tr>

                        {/* Premium Segment */}
                        <SegmentRow title="Premium Segment" />
                        <tr>
                            <td className="brand">Roostr</td>
                            <td>NL</td>
                            <td className="price">€6k – €40k</td>
                            <td className="desc">All-weather modular systems (Rubix/Allure/Wave) with 10-year warranties</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td className="channel">DTC Online, Roostr Studio, Dealers</td>
                        </tr>
                        <tr>
                            <td className="brand">Unikaad</td>
                            <td>DE</td>
                            <td className="price">€7k – €46k</td>
                            <td className="desc">Custom HPL-based kitchens (High-Pressure Laminate) resistant to UV</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td className="channel">Carpentry Workshops, Video Consult</td>
                        </tr>
                        <tr>
                            <td className="brand">Novara</td>
                            <td>ES</td>
                            <td className="price">€10k – €20k</td>
                            <td className="desc">Sleek Mediterranean modularity using advanced ceramics and HPL</td>
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={4} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td className="channel">Specialized Kitchen Studios</td>
                        </tr>
                        <tr>
                            <td className="brand">OFYR</td>
                            <td>NL</td>
                            <td className="price">€1.8k – €4.5k</td>
                            <td className="desc">Iconic fire-cone cooking units and wood-storage prep islands</td>
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <td className="channel">BBQ Shops, Global Wholesale</td>
                        </tr>
                        <tr>
                            <td className="brand">Life-Steel</td>
                            <td>NL</td>
                            <td className="price">€3.8k – €7.5k+</td>
                            <td className="desc">Robust steel modular setups; smart layout focus; maintenance-free</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <td className="channel">Showrooms (Mill/Aalsmeer), Factory Direct</td>
                        </tr>
                        <tr>
                            <td className="brand">Induplus</td>
                            <td>BE</td>
                            <td className="price">€2.7k – €10k</td>
                            <td className="desc">Belgian stylish mobile trolleys with induction, teppanyaki, and wok modules</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td className="channel">Luxury E-commerce, Specialty Retail</td>
                        </tr>
                        <tr>
                            <td className="brand">Otto Wilde</td>
                            <td>DE</td>
                            <td className="price">€3k – €10k+</td>
                            <td className="desc">High-performance G32 modular steel units and precision gas grilling</td>
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <td className="channel">DTC Online, Grilling Retailers</td>
                        </tr>
                        <tr>
                            <td className="brand">Flammkraft</td>
                            <td>DE</td>
                            <td className="price">€4k – €20k</td>
                            <td className="desc">Solid stainless steel Block series; architectural UV-stable powder coatings</td>
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={9} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <td className="channel">Kitchen Retailers, Design Partners</td>
                        </tr>
                        <tr>
                            <td className="brand">Napoleon Oasis</td>
                            <td>CA</td>
                            <td className="price">€5.6k – €10k+</td>
                            <td className="desc">Pre-configured matte black or stainless cabinets for 700-series grills</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={7} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <td className="channel">BBQ Dealer Network, Coolblue</td>
                        </tr>


                        <tr>
                            <td className="brand">Smartboxy</td>
                            <td>PL</td>
                            <td className="price">€4.5k – €11k</td>
                            <td className="desc">Weatherproof steel garden kitchens; modular SB360 sets with fridge/sink</td>
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={8} />
                            <ScoreCell value={8} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <td className="channel">DTC Online, European Dealer Network</td>
                        </tr>
                        <tr>
                            <td className="brand">Dutchwoodcraft</td>
                            <td>NL</td>
                            <td className="price">€1.8k – €5.8k</td>
                            <td className="desc">Custom Douglas fir and scaffolding wood all-in-one kitchens</td>
                            <ScoreCell value={8} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <ScoreCell value={7} />
                            <ScoreCell value={7} />
                            <td className="channel">Direct Workshop (Neede), DTC</td>
                        </tr>


                        {/* Mid-Premium Segment */}
                        <SegmentRow title="Mid-Premium Segment" />
                        <tr>
                            <td className="brand">MetaalEnzo</td>
                            <td>NL</td>
                            <td className="price">€250 – €2.5k</td>
                            <td className="desc">Basic modular metal frames to house 3rd-party BBQ units</td>
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <ScoreCell value={4} />
                            <ScoreCell value={4} />
                            <ScoreCell value={8} />
                            <ScoreCell value={5} />
                            <ScoreCell value={6} />
                            <td className="channel">DTC Online, Local Workshops</td>
                        </tr>
                        <tr>
                            <td className="brand">Regional Crafts</td>
                            <td>NL</td>
                            <td className="price">€3k – €10k</td>
                            <td className="desc">Artisanal one-off builds; high customization but low digital tools</td>
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <ScoreCell value={6} />
                            <ScoreCell value={10} />
                            <ScoreCell value={1} />
                            <ScoreCell value={3} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <td className="channel">Local Word of Mouth, Direct Sales</td>
                        </tr>

                        {/* Low Budget Segment */}
                        <SegmentRow title="Low Budget Segment" />
                        <tr>
                            <td className="brand">IKEA</td>
                            <td>INT</td>
                            <td className="price">€160 – €1.5k</td>
                            <td className="desc">GRILLSKÄR/BÅTSKÄR modular steel kits; DIY focus; mass utility</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={3} />
                            <ScoreCell value={3} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={3} />
                            <ScoreCell value={7} />
                            <td className="channel">Global Retail Centers, E-commerce</td>
                        </tr>
                        <tr>
                            <td className="brand">Buitenkeukendeal</td>
                            <td>NL</td>
                            <td className="price">€775 – €2.3k</td>
                            <td className="desc">Douglas wood kitchens with integrated 70L fridges and Kamado cutouts</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={4} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={7} />
                            <td className="channel">DTC Online Outlet</td>
                        </tr>
                        <tr>
                            <td className="brand">Weber</td>
                            <td>INT</td>
                            <td className="price">€1k – €5k</td>
                            <td className="desc">Standalone premium grills with basic modular island expansion kits</td>
                            <ScoreCell value={9} />
                            <ScoreCell value={4} />
                            <ScoreCell value={6} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={10} />
                            <td className="channel">Garden Centers, General Retail</td>
                        </tr>
                        <tr>
                            <td className="brand">Boretti</td>
                            <td>IT/NL</td>
                            <td className="price">€649 – €2.8k</td>
                            <td className="desc">Italian-style all-in-one Luciano sets with 7 burners and fridges</td>
                            <ScoreCell value={9} />
                            <ScoreCell value={6} />
                            <ScoreCell value={6} />
                            <ScoreCell value={2} />
                            <ScoreCell value={5} />
                            <ScoreCell value={9} />
                            <ScoreCell value={5} />
                            <ScoreCell value={8} />
                            <td className="channel">Kitchen Stores, Large Distribution</td>
                        </tr>
                        <tr>
                            <td className="brand">DIY</td>
                            <td>N/A</td>
                            <td className="price">€0 – €2k</td>
                            <td className="desc">Self-build frames using raw hardware store materials (wood/stone)</td>
                            <ScoreCell value={10} />
                            <ScoreCell value={2} />
                            <ScoreCell value={4} />
                            <ScoreCell value={10} />
                            <ScoreCell value={1} />
                            <ScoreCell value={3} />
                            <ScoreCell value={1} />
                            <ScoreCell value={1} />
                            <td className="channel">Hardware Stores (Hornbach, Gamma)</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: 'var(--space-4)', fontSize: '10px', color: 'var(--color-neutral-500)', fontStyle: 'italic' }}>
                Key: <strong>PA:</strong> Price; <strong>DQ:</strong> Design; <strong>DU:</strong> Durability; <strong>CU:</strong> Custom; <strong>OE:</strong> Online; <strong>LT:</strong> Lead Time; <strong>SL:</strong> Service; <strong>BT:</strong> Trust.
            </div>

            <style jsx>{`
                .table-wrapper {
                    overflow-x: auto;
                    border: 1px solid var(--color-neutral-200);
                    border-radius: var(--border-radius-sm);
                }
                .comp-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 8px;
                }
                .comp-table th {
                    background: white;
                    padding: 8px 4px;
                    text-align: center;
                    font-weight: 700;
                    border-bottom: 2px solid var(--color-neutral-200);
                    font-size: 7px;
                    color: var(--color-neutral-600);
                    white-space: nowrap;
                }
                .comp-table td {
                    padding: 3px 2px;
                    border-bottom: 1px solid var(--color-neutral-100);
                    vertical-align: middle;
                }
                .brand {
                    font-weight: 600;
                    color: var(--color-neutral-900);
                }
                .price {
                    white-space: nowrap;
                    font-family: var(--font-mono);
                    color: var(--color-neutral-700);
                     font-size: 8px;
                }
                .desc {
                    color: var(--color-neutral-600);
                    line-height: 1.1;
                    font-size: 7px;
                }
                .channel {
                    font-size: 7px;
                    color: var(--color-neutral-600);
                    line-height: 1.2;
                }
            `}</style>
        </div>
    );
}
