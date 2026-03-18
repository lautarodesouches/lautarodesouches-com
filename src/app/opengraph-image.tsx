import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static';

export const alt = 'Lautaro Desouches - Full-Stack Developer';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020617', // Dark slate background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    color: 'white',
                    position: 'relative',
                }}
            >
                {/* Background Gradients */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '20%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                    }}
                />

                {/* Main Content */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    {/* Simple Logo Circle */}
                    <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: '#6366f1', // Indigo 500
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        boxShadow: '0 0 40px rgba(99,102,241,0.5)'
                    }}>
                        L
                    </div>
                </div>

                <h1 style={{ fontSize: '64px', fontWeight: 800, margin: 0, letterSpacing: '-0.02em', textAlign: 'center' }}>
                    Lautaro Desouches
                </h1>
                <p style={{ fontSize: '32px', color: '#94a3b8', margin: '20px 0 0 0', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Full-Stack Developer
                </p>

                {/* Tech Badges Row */}
                <div style={{ display: 'flex', gap: '20px', marginTop: '60px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '20px', color: '#cbd5e1' }}>
                        Next.js
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '20px', color: '#cbd5e1' }}>
                        TypeScript
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 24px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '20px', color: '#cbd5e1' }}>
                        Java Spring
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
