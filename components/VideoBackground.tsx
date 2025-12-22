'use client';

import { useEffect, useRef } from 'react';

export default function VideoBackground({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Subtle slow motion
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full scale-105"
            >
                <source src={src} type="video/mp4" />
            </video>
        </div>
    );
}
