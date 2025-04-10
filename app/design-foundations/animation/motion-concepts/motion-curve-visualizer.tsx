'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type EasingCurve = {
  name: string;
  label: string;
  description: string;
  values: [number, number, number, number];
  duration: number;
};

const easingCurves: EasingCurve[] = [
  {
    name: 'ease-out',
    label: 'Ease Out',
    description: 'Quick start, gentle finish. Used for entrances, immediate feedback.',
    values: [0, 0, 0.2, 1],
    duration: 0.1, // 100ms
  },
  {
    name: 'ease-in-out',
    label: 'Ease In-Out',
    description: 'Smooth acceleration and deceleration. Used for state changes, standard transitions.',
    values: [0.4, 0, 0.2, 1],
    duration: 0.2, // 200ms
  },
  {
    name: 'ease-in-out-cubic',
    label: 'Ease In-Out Cubic',
    description: 'Pronounced acceleration and deceleration. Used for important transitions and celebrations.',
    values: [0.33, 0, 0.67, 1],
    duration: 0.5, // 500ms
  },
  {
    name: 'linear',
    label: 'Linear',
    description: 'Constant speed. Used for continuous motion like spinners or instant feedback.',
    values: [0, 0, 1, 1],
    duration: 0, // 0ms
  },
];

export function MotionCurveVisualizer() {
  const [selectedCurve, setSelectedCurve] = useState<EasingCurve>(easingCurves[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the easing curve on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 30;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background grid
    ctx.strokeStyle = '#EEEEEE';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
      const x = padding + (graphWidth * i) / 10;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + graphHeight);
      ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 10; i++) {
      const y = padding + (graphHeight * i) / 10;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + graphWidth, y);
      ctx.stroke();
    }

    // Draw X and Y axes
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 2;
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding + graphHeight);
    ctx.lineTo(padding + graphWidth, padding + graphHeight);
    ctx.stroke();
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(padding, padding + graphHeight);
    ctx.lineTo(padding, padding);
    ctx.stroke();

    // Draw cubic bezier curve
    const [x1, y1, x2, y2] = selectedCurve.values;
    
    ctx.strokeStyle = '#FF3300';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(padding, padding + graphHeight);
    ctx.bezierCurveTo(
      padding + graphWidth * x1,
      padding + graphHeight * (1 - y1),
      padding + graphWidth * x2,
      padding + graphHeight * (1 - y2),
      padding + graphWidth,
      padding
    );
    ctx.stroke();

    // Draw control points
    ctx.fillStyle = '#FFB800';
    
    // Control point 1
    ctx.beginPath();
    ctx.arc(padding + graphWidth * x1, padding + graphHeight * (1 - y1), 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Control point 2
    ctx.beginPath();
    ctx.arc(padding + graphWidth * x2, padding + graphHeight * (1 - y2), 5, 0, Math.PI * 2);
    ctx.fill();

    // Start and end points
    ctx.fillStyle = '#000000';
    
    // Start point
    ctx.beginPath();
    ctx.arc(padding, padding + graphHeight, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // End point
    ctx.beginPath();
    ctx.arc(padding + graphWidth, padding, 5, 0, Math.PI * 2);
    ctx.fill();

    // Add labels
    ctx.fillStyle = '#000000';
    ctx.font = '12px Atkinson Hyperlegible Next, sans-serif';
    ctx.textAlign = 'center';
    
    // X-axis labels
    ctx.fillText('0%', padding, padding + graphHeight + 20);
    ctx.fillText('100%', padding + graphWidth, padding + graphHeight + 20);
    ctx.fillText('Time', padding + graphWidth / 2, padding + graphHeight + 25);
    
    // Y-axis labels
    ctx.save();
    ctx.translate(padding - 20, padding + graphHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Progress', 0, 0);
    ctx.restore();
    
    ctx.textAlign = 'start';
    ctx.fillText('100%', padding - 25, padding + 5);
    ctx.fillText('0%', padding - 20, padding + graphHeight + 5);

    // Add bezier curve formula
    ctx.font = '12px monospace';
    ctx.fillText(`cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`, padding, padding - 15);

  }, [selectedCurve]);

  const handlePlayAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), selectedCurve.duration * 1000 + 100);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="font-display text-xl font-medium mb-2">Interactive Curve Explorer</h3>
            <p className="text-muted-foreground">
              Explore how different easing curves affect the feel of animation. Select a curve to see it visualized and watch a demo animation.
            </p>
          </div>

          <div className="flex gap-2 mb-6 flex-wrap">
            {easingCurves.map((curve) => (
              <button
                key={curve.name}
                className={`px-3 py-2 rounded-md text-sm ${
                  selectedCurve.name === curve.name
                    ? 'bg-primary text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                onClick={() => setSelectedCurve(curve)}
              >
                {curve.label}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="font-medium mb-2">{selectedCurve.label}</h4>
            <p className="text-muted-foreground mb-3">{selectedCurve.description}</p>
            <p className="text-sm">
              <span className="font-medium">Duration:</span>{' '}
              {selectedCurve.duration === 0 ? '0ms (Instant)' : `${selectedCurve.duration * 1000}ms`}
            </p>
            <p className="text-sm font-mono mt-1">
              cubic-bezier({selectedCurve.values.join(', ')})
            </p>
          </div>

          <button
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            onClick={handlePlayAnimation}
            disabled={isAnimating}
          >
            {isAnimating ? 'Playing...' : 'Play Animation'}
          </button>
        </div>

        <div className="flex-1">
          <div className="relative h-[300px] w-full">
            <canvas
              ref={canvasRef}
              width={400}
              height={300}
              className="bg-white rounded-md border w-full h-full"
            />
          </div>

          <div className="h-20 mt-6 bg-secondary/20 rounded-md relative overflow-hidden">
            <AnimatePresence>
              {isAnimating && (
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#FF3300] to-[#FFB800] rounded-full"
                  initial={{ left: 0 }}
                  animate={{ left: 'calc(100% - 48px)' }}
                  exit={{ left: 'calc(100% - 48px)' }}
                  transition={{
                    duration: selectedCurve.duration,
                    ease: selectedCurve.values,
                  }}
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between px-6 text-muted-foreground text-sm">
              <span>Start</span>
              <span>End</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <h3 className="font-display text-lg font-medium mb-3">Implementation Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2">CSS</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`/* ${selectedCurve.label} - ${selectedCurve.duration * 1000}ms */
.element {
  transition: all ${selectedCurve.duration * 1000}ms cubic-bezier(${selectedCurve.values.join(', ')});
}`}
            </pre>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">Framer Motion</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// ${selectedCurve.label} - ${selectedCurve.duration * 1000}ms
<motion.div
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: ${selectedCurve.duration},
    ease: [${selectedCurve.values.join(', ')}]
  }}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}