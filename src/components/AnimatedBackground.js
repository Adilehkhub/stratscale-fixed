import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let shapes = [];
    let waves = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class GeometricShape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 60 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.type = Math.floor(Math.random() * 3);
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01;
        this.color = Math.random() > 0.5 ? '154, 124, 64' : '33, 54, 81';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        this.pulsePhase += this.pulseSpeed;

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const pulseFactor = 1 + Math.sin(this.pulsePhase) * 0.1;
        const currentSize = this.size * pulseFactor;

        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        
        switch (this.type) {
          case 0:
            ctx.moveTo(0, -currentSize / 2);
            ctx.lineTo(-currentSize / 2, currentSize / 2);
            ctx.lineTo(currentSize / 2, currentSize / 2);
            ctx.closePath();
            break;
          case 1:
            ctx.rect(-currentSize / 2, -currentSize / 2, currentSize, currentSize);
            break;
          case 2:
            const sides = 6;
            const step = (Math.PI * 2) / sides;
            ctx.moveTo(currentSize / 2, 0);
            for (let i = 1; i <= sides; i++) {
              ctx.lineTo(
                (currentSize / 2) * Math.cos(i * step),
                (currentSize / 2) * Math.sin(i * step)
              );
            }
            ctx.closePath();
            break;
        }
        
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      }
    }

    class Wave {
      constructor(y, amplitude, frequency, speed, color) {
        this.baseY = y;
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.color = color;
        this.offset = 0;
      }

      update() {
        this.offset += this.speed;
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = this.baseY + Math.sin((x * this.frequency + this.offset)) * this.amplitude;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(33, 54, 81, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    class GridLines {
      constructor() {
        this.spacing = 100;
        this.opacity = 0.03;
        this.offset = 0;
        this.speed = 0.2;
      }

      update() {
        this.offset += this.speed;
        if (this.offset >= this.spacing) this.offset = 0;
      }

      draw() {
        ctx.strokeStyle = `rgba(154, 124, 64, ${this.opacity})`;
        ctx.lineWidth = 0.5;
        
        for (let x = -this.offset; x <= canvas.width + this.spacing; x += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        for (let y = -this.offset; y <= canvas.height + this.spacing; y += this.spacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }
    }

    const createShapes = () => {
      shapes = [];
      const numberOfShapes = Math.floor((canvas.width * canvas.height) / 50000);
      for (let i = 0; i < numberOfShapes; i++) {
        shapes.push(new GeometricShape());
      }
    };

    const createWaves = () => {
      waves = [
        new Wave(canvas.height * 0.7, 30, 0.01, 0.02, 'rgba(154, 124, 64, 0.08)'),
        new Wave(canvas.height * 0.8, 20, 0.015, -0.015, 'rgba(255, 255, 255, 0.05)'),
        new Wave(canvas.height * 0.9, 15, 0.02, 0.01, 'rgba(154, 124, 64, 0.06)')
      ];
    };

    createShapes();
    createWaves();
    const grid = new GridLines();

    const animate = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, 'rgba(154, 124, 64, 0.02)');
      gradient.addColorStop(1, 'rgba(33, 54, 81, 0.05)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      grid.update();
      grid.draw();

      waves.forEach(wave => {
        wave.update();
        wave.draw();
      });

      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      if (Math.random() > 0.95) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.02})`;
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 2,
          Math.random() * 2
        );
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      createShapes();
      createWaves();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;
