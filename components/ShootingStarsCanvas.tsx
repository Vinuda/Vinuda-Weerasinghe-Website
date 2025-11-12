import React, { useRef, useEffect } from 'react';

const ShootingStarsCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        interface Star {
            x: number;
            y: number;
            startX: number;
            travelDist: number;
            len: number;
            vx: number;
            vy: number;
        }

        const stars: Star[] = [];
        const starCount = 2;

        const randomRange = (min: number, max: number) => min + Math.random() * (max - min);

        // Creates a star that moves mostly horizontally at a slower speed
        const createStar = (): Star => {
            const startX = randomRange(0, canvas.width * 0.3);
            return {
                x: startX,
                y: randomRange(0, canvas.height),
                startX: startX,
                travelDist: randomRange(canvas.width * 0.4, canvas.width * 0.7),
                len: randomRange(5, 15), 
                vx: randomRange(4, 7), // Slowed down 500% from 20-35
                vy: randomRange(-0.5, 0.5), 
            };
        };

        const initStars = () => {
             for (let i = 0; i < starCount; i++) {
                // Stagger the initial appearance of stars
                setTimeout(() => {
                    if (stars.length < starCount) {
                        stars.push(createStar());
                    }
                }, i * randomRange(2000, 5000));
            }
        }
       
        const update = () => {
            for (let i = stars.length - 1; i >= 0; i--) {
                const s = stars[i];
                s.x += s.vx;
                s.y += s.vy;

                // If star has traveled its predefined distance
                if (s.x - s.startX > s.travelDist) {
                    stars.splice(i, 1);
                    // Add a new star after a longer, random delay
                    setTimeout(() => {
                         if (stars.length < starCount) {
                            stars.push(createStar());
                         }
                    }, randomRange(4000, 10000));
                }
            }
        };

        const draw = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (const s of stars) {
                const tailX = s.x - s.vx * s.len;
                const tailY = s.y - s.vy * s.len;

                const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0.6)`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(tailX, tailY);
                ctx.stroke();
            }
        };

        const animate = () => {
            update();
            draw();
            animationFrameId = window.requestAnimationFrame(animate);
        };
        
        initStars();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export default ShootingStarsCanvas;