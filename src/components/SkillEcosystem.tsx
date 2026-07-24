import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Node = {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
  isCenter?: boolean;
};

const NODES: Node[] = [
  { id: 'center', label: 'RUMOAR.md', sublabel: 'Source of Truth', x: 50, y: 50, isCenter: true },
  { id: 'gpt',     label: 'GPT / Gemini',    sublabel: 'Hooks & copy',         x: 22, y: 14 },
  { id: 'nano',    label: 'Nano Banana',      sublabel: 'Visual generation',    x: 78, y: 14 },
  { id: 'higgs',   label: 'Higgsfield',       sublabel: 'Motion & video',       x: 82, y: 72 },
  { id: 'cal',     label: 'Content Calendar', sublabel: 'Cadence & scheduling', x: 18, y: 72 },
  { id: 'qc',      label: 'QC Checklist',     sublabel: 'Brand consistency',    x: 50, y: 88 },
];

const SkillEcosystem: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [dims, setDims] = useState({ w: 600, h: 400 });

  useEffect(() => {
    const update = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        setDims({ w: rect.width || 600, h: rect.height || 400 });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const px = (pct: number, total: number) => (pct / 100) * total;

  const center = NODES.find(n => n.isCenter)!;
  const satellites = NODES.filter(n => !n.isCenter);

  return (
    <div className="mt-8 rounded-2xl border border-neutral-800 overflow-hidden bg-[#0a0a0a] p-6">
      <div className="relative w-full" style={{ paddingBottom: '66%' }}>
        <svg
          ref={svgRef}
          viewBox="0 0 100 66"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection lines */}
          {satellites.map(node => {
            const isActive = hovered === node.id || hovered === 'center';
            return (
              <line
                key={`line-${node.id}`}
                x1={center.x}
                y1={center.y * 0.66}
                x2={node.x}
                y2={node.y * 0.66}
                stroke={isActive ? '#D4AF37' : '#2a2a2a'}
                strokeWidth={isActive ? 0.4 : 0.2}
                strokeDasharray={isActive ? 'none' : '1 1'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}

          {/* Ambient center glow */}
          <circle
            cx={center.x}
            cy={center.y * 0.66}
            r="8"
            fill="url(#centerGlow)"
          />

          {/* Center node */}
          <g
            onMouseEnter={() => setHovered('center')}
            onMouseLeave={() => setHovered(null)}
            style={{ cursor: 'default' }}
          >
            <rect
              x={center.x - 14}
              y={center.y * 0.66 - 5}
              width="28"
              height="10"
              rx="1.5"
              fill={hovered === 'center' ? '#1a1a1a' : '#111'}
              stroke="#D4AF37"
              strokeWidth="0.3"
              filter="url(#glow)"
              style={{ transition: 'fill 0.2s ease' }}
            />
            <text
              x={center.x}
              y={center.y * 0.66 - 1.2}
              textAnchor="middle"
              fontSize="1.6"
              fill="#888"
              fontFamily="monospace"
            >
              Source of Truth
            </text>
            <text
              x={center.x}
              y={center.y * 0.66 + 2.2}
              textAnchor="middle"
              fontSize="2.2"
              fontWeight="bold"
              fill="#D4AF37"
              fontFamily="monospace"
            >
              RUMOAR.md
            </text>
          </g>

          {/* Satellite nodes */}
          {satellites.map((node, i) => {
            const isActive = hovered === node.id;
            const adjustedY = node.y * 0.66;
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'default' }}
              >
                {/* Pulse ring on hover */}
                {isActive && (
                  <circle
                    cx={node.x}
                    cy={adjustedY}
                    r="9"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="0.2"
                    opacity="0.4"
                  />
                )}
                <rect
                  x={node.x - 11}
                  y={adjustedY - 4.5}
                  width="22"
                  height="9"
                  rx="1.5"
                  fill={isActive ? '#1a1a1a' : '#111'}
                  stroke={isActive ? '#D4AF37' : '#2a2a2a'}
                  strokeWidth="0.3"
                  style={{ transition: 'all 0.2s ease' }}
                />
                <text
                  x={node.x}
                  y={adjustedY - 0.8}
                  textAnchor="middle"
                  fontSize="1.9"
                  fontWeight="600"
                  fill={isActive ? '#ffffff' : '#cccccc'}
                  fontFamily="sans-serif"
                  style={{ transition: 'fill 0.2s ease' }}
                >
                  {node.label}
                </text>
                {node.sublabel && (
                  <text
                    x={node.x}
                    y={adjustedY + 2.4}
                    textAnchor="middle"
                    fontSize="1.4"
                    fill={isActive ? '#D4AF37' : '#555'}
                    fontFamily="sans-serif"
                    style={{ transition: 'fill 0.2s ease' }}
                  >
                    {node.sublabel}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Caption */}
      <p className="text-neutral-500 text-xs font-light mt-2 text-center">
        The result: unified brand voice from the first hook to the final reel — all referencing the same source file.
      </p>
    </div>
  );
};

export default SkillEcosystem;
