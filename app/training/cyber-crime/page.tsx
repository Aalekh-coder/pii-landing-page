"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tree } from "@/data/home";


const Hero = () => {
  return <MRMHero />;
};

export default Hero;

interface AnimatedLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  color?: string;
  id: number;
}

interface GrandChildNode {
  id: string;
  label: string | string[];
}

interface ChildNode {
  id: string;
  label: string | string[];
  grandchildren?: GrandChildNode[];
}

interface MainNode {
  id: string;
  label: string | string[];
  highlight?: boolean;
  children: ChildNode[];
}

function AnimatedLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  color = "#63B3ED",
  id,
}: AnimatedLineProps) {
  const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return (
    <g>
      {/* Static dim base */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(99,179,237,0.15)"
        strokeWidth="1.5"
      />
      {/* Draw-on */}
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="1.5"
        strokeOpacity={0.7}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5, ease: "easeInOut" }}
        style={{ pathLength: 1 }}
      />
      {/* Gradient traveling dot */}
      <motion.circle
        r="3"
        fill="#90CDF4"
        filter="url(#glow)"
        initial={{ offsetDistance: "0%" }}
        animate={{ offsetDistance: ["0%", "100%"] }}
        transition={{
          delay: delay + 0.5,
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 2,
        }}
        style={{
          offsetPath: `path("M${x1},${y1} L${x2},${y2}")`,
          offsetDistance: "0%",
        }}
      />
    </g>
  );
}

/* ─── NODE BOX ─────────────────────────────────────────── */
interface NodeBoxProps {
  label: string | string[];
  highlight?: boolean;
  active: boolean;
  onClick: () => void;
  delay: number;
  x: number;
  y: number;
  w?: number;
  h?: number;
  small?: boolean;
}

function NodeBox({
  label,
  highlight,
  active,
  onClick,
  delay,
  x,
  y,
  w = 120,
  h = 36,
  small = false,
}: NodeBoxProps) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {/* Glow ring when active */}
      {active && (
        <motion.rect
          x={x - w / 2 - 4}
          y={y - h / 2 - 4}
          width={w + 8}
          height={h + 8}
          rx={6}
          fill="none"
          stroke="#63B3ED"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      <rect
        x={x - w / 2}
        y={y - h / 2}
        width={w}
        height={h}
        rx={4}
        fill={
          highlight
            ? "rgba(99,179,237,0.18)"
            : active
              ? "rgba(99,179,237,0.12)"
              : "rgba(15,25,45,0.85)"
        }
        stroke={
          highlight ? "#63B3ED" : active ? "#90CDF4" : "rgba(99,179,237,0.35)"
        }
        strokeWidth={highlight ? 1.5 : 1}
      />
      {/* shimmer on highlight */}
      {highlight && (
        <clipPath id={`clip-${label}`}>
          <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={4} />
        </clipPath>
      )}
      {Array.isArray(label) ? (
        <>
          <text
            x={x}
            y={y - 6}
            textAnchor="middle"
            fill={highlight ? "#90CDF4" : "#CBD5E0"}
            fontSize={small ? 9 : 11}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
          >
            {label[0]}
          </text>
          <text
            x={x}
            y={y + 8}
            textAnchor="middle"
            fill={highlight ? "#90CDF4" : "#CBD5E0"}
            fontSize={small ? 9 : 11}
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
          >
            {label[1]}
          </text>
        </>
      ) : (
        <text
          x={x}
          y={y + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={highlight ? "#90CDF4" : "#CBD5E0"}
          fontSize={small ? 9 : 10}
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="500"
        >
          {label.length > 16 ? label.slice(0, 15) + "…" : label}
        </text>
      )}
    </motion.g>
  );
}

/* ─── MAIN COMPONENT ───────────────────────────────────── */
function MRMHero() {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (id: string) => setActive((p) => (p === id ? null : id));

  /* Layout constants */
  const SVG_W = isMobile ? 450 : 600;
  const SVG_H = isMobile ? 650 : 510;

  const ROOT_X = isMobile ? 60 : 82;
  const ROOT_Y = isMobile ? 320 : 340;
  const ROOT_W = 100,
    ROOT_H = 52;

  /* Level-1 branch positions */
  const L1_X = isMobile ? 180 : 230;
  const branchYs = isMobile 
    ? [60, 160, 260, 360, 460, 560]
    : [80, 180, 280, 380, 480, 580];

  const branchW = 130,
    branchH = 36;

  /* Level-2 child positions */
  const L2_X = isMobile ? 310 : 400;
  const childW = 120,
    childH = 30;

  /* Level-3 grandchild (email sub-nodes) */
  const L3_X = isMobile ? 430 : 560;
  const gcW = 105,
    gcH = 26;

  /* build connector path segments */
  type LineSegment = {
    id: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    delay: number;
  };

  const lines: LineSegment[] = [];
  let lineId = 0;

  if (mounted) {
    // root → trunk vertical: we draw horizontal stub then vertical then horizontals
    // root → each branch (L-shaped: right then up/down)
    (tree.branches as MainNode[]).forEach((branch, i) => {
      const by = branchYs[i];
      const midX = (ROOT_X + ROOT_W / 2 + L1_X - branchW / 2) / 2;
      // horizontal from root
      lines.push({
        id: lineId++,
        x1: ROOT_X + ROOT_W / 2,
        y1: ROOT_Y,
        x2: midX,
        y2: ROOT_Y,
        delay: 0.2,
      });
      // vertical trunk
      lines.push({
        id: lineId++,
        x1: midX,
        y1: ROOT_Y,
        x2: midX,
        y2: by,
        delay: 0.25,
      });
      // horizontal to branch
      lines.push({
        id: lineId++,
        x1: midX,
        y1: by,
        x2: L1_X - branchW / 2,
        y2: by,
        delay: 0.3 + i * 0.07,
      });

      // children
      if (branch.children.length > 0) {
        const childCount = branch.children.length;
        const totalH = (childCount - 1) * 44;
        const startY = by - totalH / 2;
        branch.children.forEach((ch, ci) => {
          const cy = startY + ci * 44;
          const cmidX = (L1_X + branchW / 2 + L2_X - childW / 2) / 2;
          lines.push({
            id: lineId++,
            x1: L1_X + branchW / 2,
            y1: by,
            x2: cmidX,
            y2: by,
            delay: 0.4 + i * 0.07 + ci * 0.06,
          });
          lines.push({
            id: lineId++,
            x1: cmidX,
            y1: by,
            x2: cmidX,
            y2: cy,
            delay: 0.45 + i * 0.07 + ci * 0.06,
          });
          lines.push({
            id: lineId++,
            x1: cmidX,
            y1: cy,
            x2: L2_X - childW / 2,
            y2: cy,
            delay: 0.5 + i * 0.07 + ci * 0.06,
          });

          // grandchildren for "intl"
          if (ch.grandchildren) {
            const gcCount = ch.grandchildren.length;
            const gcTotalH = (gcCount - 1) * 34;
            const gcStartY = cy - gcTotalH / 2;
            ch.grandchildren.forEach((gc, gi) => {
              const gcy = gcStartY + gi * 34;
              const gcmidX = (L2_X + childW / 2 + L3_X - gcW / 2) / 2;
              lines.push({
                id: lineId++,
                x1: L2_X + childW / 2,
                y1: cy,
                x2: gcmidX,
                y2: cy,
                delay: 0.65 + gi * 0.06,
              });
              lines.push({
                id: lineId++,
                x1: gcmidX,
                y1: cy,
                x2: gcmidX,
                y2: gcy,
                delay: 0.7 + gi * 0.06,
              });
              lines.push({
                id: lineId++,
                x1: gcmidX,
                y1: gcy,
                x2: L3_X - gcW / 2,
                y2: gcy,
                delay: 0.75 + gi * 0.06,
              });
            });
          }
        });
      }
    });
  }

  return (
    <div className="min-h-screen bg-[#070d1a] flex items-center justify-center overflow-hidden relative select-none py-20 lg:py-20">
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,1) 1px,transparent 3px),linear-gradient(90deg,rgba(99,179,237,1) 4px,transparent 1px)",
          backgroundSize: isMobile ? "24px 24px" : "32px 32px",
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 md:mb-8">
            MRM Intelligence <br />
            <span className="text-blue-400">Platform</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            A comprehensive and unified intelligence platform designed for deep cyber investigations, real-time threat detection, and advanced OSINT
            operations across the surface, deep, and dark web.
          </p>
        </motion.div>

        {/* Right Side: SVG Tree */}
        <div className="flex justify-center lg:justify-end overflow-visible">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            className="w-full h-auto max-w-[650px]"
            
            style={{ maxWidth: "100%", overflow: "visible" }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="rootGlow">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#63B3ED" stopOpacity="0" />
                <stop offset="50%" stopColor="#90CDF4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#63B3ED" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* ── CONNECTOR LINES ── */}
            {lines.map((l) => (
              <AnimatedLine key={l.id} {...l} />
            ))}

            {/* ── ROOT NODE ── */}
            <motion.g filter="url(#rootGlow)">
              <motion.rect
                x={ROOT_X - ROOT_W / 2}
                y={ROOT_Y - ROOT_H / 2}
                width={ROOT_W}
                height={ROOT_H}
                rx={6}
                fill="rgba(99,179,237,0.15)"
                stroke="#63B3ED"
                strokeWidth={2}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
              />
              <motion.rect
                x={ROOT_X - ROOT_W / 2 - 5}
                y={ROOT_Y - ROOT_H / 2 - 5}
                width={ROOT_W + 10}
                height={ROOT_H + 10}
                rx={8}
                fill="none"
                stroke="#63B3ED"
                strokeWidth={1}
                strokeOpacity={0.3}
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <text
                x={ROOT_X}
                y={ROOT_Y - 8}
                textAnchor="middle"
                fill="#90CDF4"
                fontSize={12}
                fontFamily="'JetBrains Mono',monospace"
                fontWeight="700"
              >
                MRM
              </text>
              <text
                x={ROOT_X}
                y={ROOT_Y + 8}
                textAnchor="middle"
                fill="#90CDF4"
                fontSize={12}
                fontFamily="'JetBrains Mono',monospace"
                fontWeight="700"
              >
                Intelligence
              </text>
            </motion.g>

            {/* ── LEVEL-1 BRANCHES ── */}
            {(tree.branches as MainNode[]).map((b, i) => {
              const by = branchYs[i];
              const isActive = active === b.id;

              return (
                <g key={b.id}>
                  <NodeBox
                    label={b.label}
                    highlight={b.highlight}
                    active={isActive}
                    onClick={() => toggle(b.id)}
                    delay={0.3 + i * 0.07}
                    x={L1_X}
                    y={by}
                    w={branchW}
                    h={branchH}
                  />

                  {/* ── LEVEL-2 CHILDREN ── */}
                  {b.children.length > 0 &&
                    (() => {
                      const cc = b.children.length;
                      const totalH = (cc - 1) * 44;
                      const startY = by - totalH / 2;
                      return b.children.map((ch, ci) => {
                        const cy = startY + ci * 44;
                        const isActiveC = active === ch.id;
                        return (
                          <g key={ch.id}>
                            <NodeBox
                              label={ch.label}
                              active={isActiveC}
                              onClick={() => toggle(ch.id)}
                              delay={0.45 + i * 0.07 + ci * 0.06}
                              x={L2_X}
                              y={cy}
                              w={childW}
                              h={childH}
                            />

                            {/* ── LEVEL-3 GRANDCHILDREN ── */}
                            {ch.grandchildren &&
                              (() => {
                                const gc = ch.grandchildren;
                                const gcTotalH = (gc.length - 1) * 34;
                                const gcStartY = cy - gcTotalH / 2;
                                return gc.map((g, gi) => {
                                  const gcy = gcStartY + gi * 34;
                                  return (
                                    <NodeBox
                                      key={g.id}
                                      label={g.label}
                                      active={active === g.id}
                                      onClick={() => toggle(g.id)}
                                      delay={0.7 + gi * 0.06}
                                      x={L3_X}
                                      y={gcy}
                                      w={gcW}
                                      h={gcH}
                                      small
                                    />
                                  );
                                });
                              })()}
                          </g>
                        );
                      });
                    })()}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
