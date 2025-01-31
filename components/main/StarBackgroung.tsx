'use client'

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseSpeed: number;  // New property for base speed
  direction: number;  // New property for direction
  alpha: number;
  alphaSpeed: number;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const stars: Star[] = [];
    const numStars = 300; // Increased number of stars
    let animationFrameId: number;

    const createStars = () => {
      // Use window.innerHeight for full viewport height
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Set canvas dimensions to match viewport
      canvas.width = width;
      canvas.height = height;
      
      // Ensure device pixel ratio is considered
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.scale(dpr, dpr);

      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        const baseSpeed = Math.random() * 2 + 0.5; // Speed between 0.5 and 2.5
        const direction = Math.random() * Math.PI * 2; // Random direction in radians
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5, // Size between 0.5 and 2
          baseSpeed,
          direction,
          alpha: Math.random(),
          alphaSpeed: 0.005 + Math.random() * 0.01
        });
      }
    };

    const animate = () => {
      // Clear the entire canvas for clean rendering
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Calculate movement using direction and speed
        star.x += Math.cos(star.direction) * star.baseSpeed;
        star.y += Math.sin(star.direction) * star.baseSpeed;

        // Twinkling effect
        star.alpha += star.alphaSpeed;
        if (star.alpha > 0.8 || star.alpha < 0.2) star.alphaSpeed *= -1;

        // Wrap around screen with precise boundaries
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with clean edges
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      createStars();
    };

    createStars();
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'transparent',
        zIndex: -1, // Ensure it stays behind other components
        pointerEvents: 'none', // Prevent interference with other components
        isolation: 'isolate', // Prevent compositing issues
      }} 
    />
  );
};

export default StarBackground;
