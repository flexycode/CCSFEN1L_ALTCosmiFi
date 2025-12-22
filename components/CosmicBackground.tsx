'use client';

export default function CosmicBackground() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden bg-black">
            {/* Animated star field */}
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>

            {/* Cosmic nebula gradients */}
            <div className="absolute inset-0 opacity-60">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
                <div className="absolute top-1/2 -right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Shooting stars */}
            <div className="shooting-stars">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
