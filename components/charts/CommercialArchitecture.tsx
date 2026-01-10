import React from 'react';

const CommercialArchitecture = () => {
    return (
        <div style={{
            fontFamily: '"Inter", sans-serif',
            background: '#fff',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', color: '#0f172a', letterSpacing: '0.05em' }}>The Fieldsman Commercial Engine</h3>
                <p style={{ fontSize: '10px', color: '#64748b', marginTop: '4px' }}>A unified system translating awareness into high-value sales.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>

                {/* Connecting Line Backdrop */}
                <div style={{ position: 'absolute', top: '10px', bottom: '10px', left: '24px', width: '2px', background: '#e2e8f0', zIndex: 0 }}></div>

                {/* LAYER 1: MARKETING (Inputs) */}
                <div style={{ position: 'relative', zIndex: 1, background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#16a34a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', marginRight: '10px', boxShadow: '0 2px 4px rgba(22, 163, 74, 0.2)' }}>1</div>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>Marketing Engine (Inflow)</h4>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                        <MetricCard title="SEO & Content" target="30-40% Traffic" text="High-intent capture at near-zero marginal cost." color="#15803d" />
                        <MetricCard title="Paid Social" target="4-6x ROAS" text="Lifestyle interruption. Prospecting → Retargeting." color="#15803d" />
                        <MetricCard title="Influencers" target="15-20% Referral" text="Authentic validation via narrative cooking content." color="#15803d" />
                        <MetricCard title="Experiential" target="5-10 Events/Yr" text="Physical lead gen at high-intent garden shows." color="#15803d" />
                        <MetricCard title="Review Moat" target="600+ Reviews" text="Structural advantage. The primary trust signal." color="#15803d" bg="#dcfce7" />
                    </div>
                </div>

                {/* Arrow Down */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '12px' }}>
                    <svg width="20" height="12" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>

                {/* LAYER 2: AI OPS (Processing) */}
                <div style={{ position: 'relative', zIndex: 1, background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: '6px', padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', marginRight: '10px', boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)' }}>2</div>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#3730a3', textTransform: 'uppercase' }}>AI Operations (Throughput)</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                        <FeatureBlock title="AI Configurator" text="Real-time assistant fixes compatibility & upsells." outcome="+20% Completion" color="#3730a3" />
                        <FeatureBlock title="Intelligent Qual" text="Scores leads. Sales focuses only on top 30%." outcome="High Efficiency" color="#3730a3" />
                        <FeatureBlock title="Auto-Service" text="85% of queries handled instantly 24/7." outcome="<5min Response" color="#3730a3" />
                    </div>
                </div>

                {/* Arrow Down */}
                <div style={{ display: 'flex', justifyContent: 'center', height: '12px' }}>
                    <svg width="20" height="12" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </div>

                {/* LAYER 3: PHYGITAL (Conversion) */}
                <div style={{ position: 'relative', zIndex: 1, background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '6px', padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', marginRight: '10px', boxShadow: '0 2px 4px rgba(249, 115, 22, 0.2)' }}>3</div>
                        <h4 style={{ fontSize: '11px', fontWeight: 800, color: '#9a3412', textTransform: 'uppercase' }}>Phygital Conversion (Trust)</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div style={{ padding: '8px', background: 'rgba(255,255,255,0.6)', borderRadius: '4px', border: '1px solid #ffedd5' }}>
                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#9a3412', marginBottom: '4px' }}>Partner Showroom Network</div>
                            <p style={{ fontSize: '9px', color: '#64748b', lineHeight: '1.3' }}>Complementary retail (Garden/BBQ). <strong>5-15% fee</strong> vs 40% margin. Preserves unitary economics.</p>
                        </div>
                        <div style={{ padding: '8px', background: 'rgba(255,255,255,0.6)', borderRadius: '4px', border: '1px solid #ffedd5' }}>
                            <div style={{ fontSize: '10px', fontWeight: 800, color: '#9a3412', marginBottom: '4px' }}>"Showroom-Light" Trade-off</div>
                            <p style={{ fontSize: '9px', color: '#64748b', lineHeight: '1.3' }}>Fewer locations, lower prices. Gap bridged by High-Res Content, Social Proof, and Pop-up Events.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Sub-components
interface MetricCardProps {
    title: string;
    target: string;
    text: string;
    color: string;
    bg?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, target, text, color, bg = 'white' }) => (
    <div style={{ background: bg, padding: '8px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '9px', fontWeight: 800, color: '#0f172a', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={title}>{title}</div>
        <div style={{ fontSize: '8px', fontWeight: 700, color: color, marginBottom: '4px' }}>{target}</div>
        <p style={{ fontSize: '7.5px', color: '#64748b', margin: 0, lineHeight: '1.2' }}>{text}</p>
    </div>
);

interface FeatureBlockProps {
    title: string;
    text: string;
    outcome: string;
    color: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, text, outcome, color }) => (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '8px', background: 'white', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '10px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{title}</div>
        <p style={{ fontSize: '9px', color: '#64748b', lineHeight: '1.3', flexGrow: 1, marginBottom: '4px' }}>{text}</p>
        <div style={{ fontSize: '8.5px', fontWeight: 700, color: color }}>{outcome}</div>
    </div>
);

export default CommercialArchitecture;
