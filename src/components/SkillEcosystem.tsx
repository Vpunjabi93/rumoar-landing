import React, { useEffect, useRef, useState } from 'react';

// The actual marketing skill ecosystem
const SKILL_NAMES = [
  'product-marketing', 'copywriting', 'copy-editing', 'content-strategy', 'social',
  'ad-creative', 'video', 'image', 'ads', 'cro', 'ab-testing', 'marketing-ideas',
  'onboarding', 'signup', 'paywalls', 'churn-prevention', 'seo-audit', 'ai-seo',
  'programmatic-seo', 'schema', 'site-architecture', 'cold-email', 'prospecting',
  'sales-enablement', 'revops', 'emails', 'sms', 'customer-research',
  'marketing-psychology', 'pricing', 'competitors', 'competitor-profiling',
  'launch', 'free-tools', 'lead-magnets', 'directory-submissions', 'aso',
  'referrals', 'analytics'
];

// Helper to distribute nodes in concentric rings
const generateNodes = () => {
  const nodes = [];
  
  // Center Node
  nodes.push({
    id: 'center',
    label: 'RUMOAR.md',
    sublabel: 'Source of Truth',
    x: 50,
    y: 50,
    isCenter: true,
  });

  // Distribute the 39 skills across 3 rings
  const rings = [
    { count: 8, radiusX: 18, radiusY: 15 },
    { count: 14, radiusX: 32, radiusY: 28 },
    { count: 17, radiusX: 45, radiusY: 42 },
  ];

  let skillIndex = 0;

  rings.forEach((ring) => {
    const angleStep = (Math.PI * 2) / ring.count;
    for (let i = 0; i < ring.count; i++) {
      if (skillIndex >= SKILL_NAMES.length) break;
      
      const angle = i * angleStep;
      // Add slight random jitter so it looks more organic, less rigid
      const jitter = (Math.random() - 0.5) * 2; 
      
      nodes.push({
        id: `skill-${skillIndex}`,
        label: SKILL_NAMES[skillIndex],
        x: 50 + (ring.radiusX + jitter) * Math.cos(angle),
        y: 50 + (ring.radiusY + jitter) * Math.sin(angle),
        isCenter: false,
      });
      skillIndex++;
    }
  });

  return nodes;
};

const NODES = generateNodes();

const SkillEcosystem: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      if (svgRef.current) {
        svgRef.current.getBoundingClientRect();
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const center = NODES.find(n => n.isCenter)!;
  const satellites = NODES.filter(n => !n.isCenter);

  return (
    <div className="mt-8 rounded-2xl border border-neutral-800 overflow-hidden bg-[#0a0a0a] p-2 md:p-6">
      <div className="relative w-full" style={{ paddingBottom: '75%' }}>
        <svg
          ref={svgRef}
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
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
                y1={center.y}
                x2={node.x}
                y2={node.y}
                stroke={isActive ? '#D4AF37' : '#1a1a1a'}
                strokeWidth={isActive ? 0.3 : 0.15}
                strokeDasharray={isActive ? 'none' : '0.5 1'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}

          {/* Background web connections between adjacent nodes in rings (optional subtle webbing) */}
          {satellites.map((node, i) => {
            const nextNode = satellites[(i + 1) % satellites.length];
            return (
              <line
                key={`web-${node.id}`}
                x1={node.x}
                y1={node.y}
                x2={nextNode.x}
                y2={nextNode.y}
                stroke="#111"
                strokeWidth="0.1"
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}

          {/* Ambient center glow */}
          <circle
            cx={center.x}
            cy={center.y}
            r="12"
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
              y={center.y - 5}
              width="28"
              height="10"
              rx="1.5"
              fill={hovered === 'center' ? '#1a1a1a' : '#111'}
              stroke="#D4AF37"
              strokeWidth="0.4"
              filter="url(#glow)"
              style={{ transition: 'fill 0.2s ease' }}
            />
            <text
              x={center.x}
              y={center.y - 1.2}
              textAnchor="middle"
              fontSize="1.6"
              fill="#888"
              fontFamily="monospace"
            >
              Source of Truth
            </text>
            <text
              x={center.x}
              y={center.y + 2.2}
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
          {satellites.map((node) => {
            const isActive = hovered === node.id || hovered === 'center';
            return (
              <g
                key={node.id}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: 'default' }}
              >
                {/* Node dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1.2"
                  fill={isActive ? '#D4AF37' : '#333'}
                  style={{ transition: 'fill 0.2s ease' }}
                />
                
                {/* Node Label */}
                <text
                  x={node.x}
                  y={node.y + (node.y > 50 ? 2.5 : -1.5)} // Text goes above or below based on position
                  textAnchor="middle"
                  fontSize="1.8"
                  fontWeight="500"
                  fill={isActive ? '#ffffff' : '#666'}
                  fontFamily="sans-serif"
                  style={{ transition: 'all 0.2s ease' }}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Caption */}
      <p className="text-neutral-500 text-xs font-light mt-4 text-center px-4">
        The ecosystem: 39 specialized autonomous marketing skills. One central source of truth. The result: absolute brand consistency at hyperscale.
      </p>
    </div>
  );
};

export default SkillEcosystem;
