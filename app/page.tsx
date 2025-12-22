'use client';

import CosmicBackground from '@/components/CosmicBackground';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-white">
            <CosmicBackground />

            <div className="z-10 text-center px-4 max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-6 drop-shadow-2xl">
                    ALTCosmiFi
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light tracking-widest uppercase">
                    Artificial Ledger Technology
                </p>

                <div className="glassmorphism p-8 md:p-12 mb-8 transform transition-all hover:scale-[1.02]">
                    <h2 className="text-3xl font-semibold mb-4">Decentralized Finance Reimagined</h2>
                    <p className="text-blue-100/80 mb-8 leading-relaxed">
                        The Bank that you can trust – Powered by Blockchain Technology.
                        Secure your assets with institutional-grade security and experience the cosmic financial frontier.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-purple-900/40 transition-all">
                            Connect Wallet
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all border border-white/20">
                            Explore Vaults
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
                        <h3 className="font-bold mb-2 uppercase tracking-tighter text-blue-400">Security</h3>
                        <p className="text-white/60">Powered by OpenZeppelin v5.0</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
                        <h3 className="font-bold mb-2 uppercase tracking-tighter text-purple-400">Decentralization</h3>
                        <p className="text-white/60">Full control via ALTCoin ERC20</p>
                    </div>
                    <div className="bg-black/40 p-4 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors">
                        <h3 className="font-bold mb-2 uppercase tracking-tighter text-pink-400">Cosmic Speed</h3>
                        <p className="text-white/60">Instant transactions on-chain</p>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-8 text-white/40 text-xs tracking-widest uppercase">
                © 2026 Artificial Ledger Technology
            </footer>
        </main>
    );
}
