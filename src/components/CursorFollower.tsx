'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorFollower() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            }
        };

        const animate = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        const handleHoverIn = () => setIsHovering(true);
        const handleHoverOut = () => setIsHovering(false);

        const attachListeners = () => {
            document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
                el.addEventListener('mouseenter', handleHoverIn);
                el.addEventListener('mouseleave', handleHoverOut);
            });
        };

        window.addEventListener('mousemove', handleMove);
        attachListeners();
        rafRef.current = requestAnimationFrame(animate);

        const observer = new MutationObserver(attachListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 w-2 h-2 bg-electric rounded-full pointer-events-none z-[9999]"
                style={{ willChange: 'transform', display: 'none' }}
                id="cursor-dot"
            />
            <div
                ref={ringRef}
                className={`fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border-2 transition-[border-color,background-color,transform] duration-150 ${isHovering ? 'border-coral bg-coral/10 scale-150' : 'border-electric/50 bg-transparent'}`}
                style={{ willChange: 'transform', display: 'none' }}
                id="cursor-ring"
            />
            <style>{`
                @media (pointer: fine) {
                    #cursor-dot, #cursor-ring { display: block !important; }
                }
            `}</style>
        </>
    );
}
