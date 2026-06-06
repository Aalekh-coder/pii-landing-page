// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { tree } from "@/data/home";


// const Hero = () => {
//   return <MRMHero />;
// };

// export default Hero;

// interface AnimatedLineProps {
//   x1: number;
//   y1: number;
//   x2: number;
//   y2: number;
//   delay?: number;
//   color?: string;
//   id: number;
// }

// interface GrandChildNode {
//   id: string;
//   label: string | string[];
// }

// interface ChildNode {
//   id: string;
//   label: string | string[];
//   grandchildren?: GrandChildNode[];
// }

// interface MainNode {
//   id: string;
//   label: string | string[];
//   highlight?: boolean;
//   children: ChildNode[];
// }

// function AnimatedLine({
//   x1,
//   y1,
//   x2,
//   y2,
//   delay = 0,
//   color = "#63B3ED",
//   id,
// }: AnimatedLineProps) {
//   const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//   return (
//     <g>
//       {/* Static dim base */}
//       <line
//         x1={x1}
//         y1={y1}
//         x2={x2}
//         y2={y2}
//         stroke="rgba(99,179,237,0.15)"
//         strokeWidth="1.5"
//       />
//       {/* Draw-on */}
//       <motion.line
//         x1={x1}
//         y1={y1}
//         x2={x2}
//         y2={y2}
//         stroke={color}
//         strokeWidth="1.5"
//         strokeOpacity={0.7}
//         initial={{ pathLength: 0, opacity: 0 }}
//         animate={{ pathLength: 1, opacity: 1 }}
//         transition={{ delay, duration: 0.5, ease: "easeInOut" }}
//         style={{ pathLength: 1 }}
//       />
//       {/* Gradient traveling dot */}
//       <motion.circle
//         r="3"
//         fill="#90CDF4"
//         filter="url(#glow)"
//         initial={{ offsetDistance: "0%" }}
//         animate={{ offsetDistance: ["0%", "100%"] }}
//         transition={{
//           delay: delay + 0.5,
//           duration: 1.8,
//           repeat: Infinity,
//           ease: "easeInOut",
//           repeatDelay: 2,
//         }}
//         style={{
//           offsetPath: `path("M${x1},${y1} L${x2},${y2}")`,
//           offsetDistance: "0%",
//         }}
//       />
//     </g>
//   );
// }

// /* ─── NODE BOX ─────────────────────────────────────────── */
// interface NodeBoxProps {
//   label: string | string[];
//   highlight?: boolean;
//   active: boolean;
//   onClick: () => void;
//   delay: number;
//   x: number;
//   y: number;
//   w?: number;
//   h?: number;
//   small?: boolean;
// }

// function NodeBox({
//   label,
//   highlight,
//   active,
//   onClick,
//   delay,
//   x,
//   y,
//   w = 120,
//   h = 36,
//   small = false,
// }: NodeBoxProps) {
//   return (
//     <motion.g
//       initial={{ opacity: 0, scale: 0.7 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//       onClick={onClick}
//       style={{ cursor: "pointer" }}
//     >
//       {/* Glow ring when active */}
//       {active && (
//         <motion.rect
//           x={x - w / 2 - 4}
//           y={y - h / 2 - 4}
//           width={w + 8}
//           height={h + 8}
//           rx={6}
//           fill="none"
//           stroke="#63B3ED"
//           strokeWidth="1.5"
//           strokeOpacity="0.5"
//           animate={{ scale: [1, 1.08, 1], opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         />
//       )}
//       <rect
//         x={x - w / 2}
//         y={y - h / 2}
//         width={w}
//         height={h}
//         rx={4}
//         fill={
//           highlight
//             ? "rgba(99,179,237,0.18)"
//             : active
//               ? "rgba(99,179,237,0.12)"
//               : "rgba(15,25,45,0.85)"
//         }
//         stroke={
//           highlight ? "#63B3ED" : active ? "#90CDF4" : "rgba(99,179,237,0.35)"
//         }
//         strokeWidth={highlight ? 1.5 : 1}
//       />
//       {/* shimmer on highlight */}
//       {highlight && (
//         <clipPath id={`clip-${label}`}>
//           <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={4} />
//         </clipPath>
//       )}
//       {Array.isArray(label) ? (
//         <>
//           <text
//             x={x}
//             y={y - 6}
//             textAnchor="middle"
//             fill={highlight ? "#90CDF4" : "#CBD5E0"}
//             fontSize={small ? 9 : 11}
//             fontFamily="'JetBrains Mono', monospace"
//             fontWeight="600"
//           >
//             {label[0]}
//           </text>
//           <text
//             x={x}
//             y={y + 8}
//             textAnchor="middle"
//             fill={highlight ? "#90CDF4" : "#CBD5E0"}
//             fontSize={small ? 9 : 11}
//             fontFamily="'JetBrains Mono', monospace"
//             fontWeight="600"
//           >
//             {label[1]}
//           </text>
//         </>
//       ) : (
//         <text
//           x={x}
//           y={y + 1}
//           textAnchor="middle"
//           dominantBaseline="middle"
//           fill={highlight ? "#90CDF4" : "#CBD5E0"}
//           fontSize={small ? 9 : 10}
//           fontFamily="'JetBrains Mono', monospace"
//           fontWeight="500"
//         >
//           {label.length > 16 ? label.slice(0, 15) + "…" : label}
//         </text>
//       )}
//     </motion.g>
//   );
// }

// /* ─── MAIN COMPONENT ───────────────────────────────────── */
// function MRMHero() {
//   const [active, setActive] = useState<string | null>(null);
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setTimeout(() => setMounted(true), 200);
//   }, []);

//   const toggle = (id: string) => setActive((p) => (p === id ? null : id));

//   /* Layout constants */
//   const SVG_W = 600;
//   const SVG_H = 510;

//   const ROOT_X = 82,
//     ROOT_Y = 340;
//   const ROOT_W = 100,
//     ROOT_H = 52;

//   /* Level-1 branch positions */
//   const L1_X = 230;
//   const branchYs = [80, 180, 280, 380, 480, 580];
//   const branchW = 130,
//     branchH = 36;

//   /* Level-2 child positions */
//   const L2_X = 400;
//   const childW = 120,
//     childH = 30;

//   /* Level-3 grandchild (email sub-nodes) */
//   const L3_X = 560;
//   const gcW = 105,
//     gcH = 26;

//   /* build connector path segments */
//   type LineSegment = {
//     id: number;
//     x1: number;
//     y1: number;
//     x2: number;
//     y2: number;
//     delay: number;
//   };

//   const lines: LineSegment[] = [];
//   let lineId = 0;

//   if (mounted) {
//     // root → trunk vertical: we draw horizontal stub then vertical then horizontals
//     // root → each branch (L-shaped: right then up/down)
//     (tree.branches as MainNode[]).forEach((branch, i) => {
//       const by = branchYs[i];
//       const midX = (ROOT_X + ROOT_W / 2 + L1_X - branchW / 2) / 2;
//       // horizontal from root
//       lines.push({
//         id: lineId++,
//         x1: ROOT_X + ROOT_W / 2,
//         y1: ROOT_Y,
//         x2: midX,
//         y2: ROOT_Y,
//         delay: 0.2,
//       });
//       // vertical trunk
//       lines.push({
//         id: lineId++,
//         x1: midX,
//         y1: ROOT_Y,
//         x2: midX,
//         y2: by,
//         delay: 0.25,
//       });
//       // horizontal to branch
//       lines.push({
//         id: lineId++,
//         x1: midX,
//         y1: by,
//         x2: L1_X - branchW / 2,
//         y2: by,
//         delay: 0.3 + i * 0.07,
//       });

//       // children
//       if (branch.children.length > 0) {
//         const childCount = branch.children.length;
//         const totalH = (childCount - 1) * 44;
//         const startY = by - totalH / 2;
//         branch.children.forEach((ch, ci) => {
//           const cy = startY + ci * 44;
//           const cmidX = (L1_X + branchW / 2 + L2_X - childW / 2) / 2;
//           lines.push({
//             id: lineId++,
//             x1: L1_X + branchW / 2,
//             y1: by,
//             x2: cmidX,
//             y2: by,
//             delay: 0.4 + i * 0.07 + ci * 0.06,
//           });
//           lines.push({
//             id: lineId++,
//             x1: cmidX,
//             y1: by,
//             x2: cmidX,
//             y2: cy,
//             delay: 0.45 + i * 0.07 + ci * 0.06,
//           });
//           lines.push({
//             id: lineId++,
//             x1: cmidX,
//             y1: cy,
//             x2: L2_X - childW / 2,
//             y2: cy,
//             delay: 0.5 + i * 0.07 + ci * 0.06,
//           });

//           // grandchildren for "intl"
//           if (ch.grandchildren) {
//             const gcCount = ch.grandchildren.length;
//             const gcTotalH = (gcCount - 1) * 34;
//             const gcStartY = cy - gcTotalH / 2;
//             ch.grandchildren.forEach((gc, gi) => {
//               const gcy = gcStartY + gi * 34;
//               const gcmidX = (L2_X + childW / 2 + L3_X - gcW / 2) / 2;
//               lines.push({
//                 id: lineId++,
//                 x1: L2_X + childW / 2,
//                 y1: cy,
//                 x2: gcmidX,
//                 y2: cy,
//                 delay: 0.65 + gi * 0.06,
//               });
//               lines.push({
//                 id: lineId++,
//                 x1: gcmidX,
//                 y1: cy,
//                 x2: gcmidX,
//                 y2: gcy,
//                 delay: 0.7 + gi * 0.06,
//               });
//               lines.push({
//                 id: lineId++,
//                 x1: gcmidX,
//                 y1: gcy,
//                 x2: L3_X - gcW / 2,
//                 y2: gcy,
//                 delay: 0.75 + gi * 0.06,
//               });
//             });
//           }
//         });
//       }
//     });
//   }

//   return (
//     <div className="min-h-screen bg-[#070d1a] flex items-center justify-center overflow-hidden relative select-none py-30 lg:py-20">
//       {/* Grid bg */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(99,179,237,1) 1px,transparent 3px),linear-gradient(90deg,rgba(99,179,237,1) 4px,transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
//         {/* Left Side: Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-3 md:mb-8">
//             MRM Intelligence <br />
//             <span className="text-blue-400">Platform</span>
//           </h1>
//           <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
//             A comprehensive and unified intelligence platform designed for deep
//             cyber investigations, real-time threat detection, and advanced OSINT
//             operations across the surface, deep, and dark web.
//           </p>
//         </motion.div>

//         {/* Right Side: SVG Tree */}
//         <div className="flex justify-center lg:justify-end overflow-visible">
//           <svg
//             viewBox={`0 0 ${SVG_W} ${SVG_H}`}
//             className="w-full h-auto max-w-[650px]"
//             style={{ maxWidth: "100%", overflow: "visible" }}
//           >
//             <defs>
//               <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//                 <feGaussianBlur stdDeviation="3" result="blur" />
//                 <feMerge>
//                   <feMergeNode in="blur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//               <filter id="rootGlow">
//                 <feGaussianBlur stdDeviation="6" result="blur" />
//                 <feMerge>
//                   <feMergeNode in="blur" />
//                   <feMergeNode in="SourceGraphic" />
//                 </feMerge>
//               </filter>
//               <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#63B3ED" stopOpacity="0" />
//                 <stop offset="50%" stopColor="#90CDF4" stopOpacity="0.9" />
//                 <stop offset="100%" stopColor="#63B3ED" stopOpacity="0" />
//               </linearGradient>
//             </defs>

//             {/* ── CONNECTOR LINES ── */}
//             {lines.map((l) => (
//               <AnimatedLine key={l.id} {...l} />
//             ))}

//             {/* ── ROOT NODE ── */}
//             <motion.g filter="url(#rootGlow)">
//               <motion.rect
//                 x={ROOT_X - ROOT_W / 2}
//                 y={ROOT_Y - ROOT_H / 2}
//                 width={ROOT_W}
//                 height={ROOT_H}
//                 rx={6}
//                 fill="rgba(99,179,237,0.15)"
//                 stroke="#63B3ED"
//                 strokeWidth={2}
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, ease: "backOut" }}
//               />
//               <motion.rect
//                 x={ROOT_X - ROOT_W / 2 - 5}
//                 y={ROOT_Y - ROOT_H / 2 - 5}
//                 width={ROOT_W + 10}
//                 height={ROOT_H + 10}
//                 rx={8}
//                 fill="none"
//                 stroke="#63B3ED"
//                 strokeWidth={1}
//                 strokeOpacity={0.3}
//                 animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
//                 transition={{ duration: 2.5, repeat: Infinity }}
//               />
//               <text
//                 x={ROOT_X}
//                 y={ROOT_Y - 8}
//                 textAnchor="middle"
//                 fill="#90CDF4"
//                 fontSize={12}
//                 fontFamily="'JetBrains Mono',monospace"
//                 fontWeight="700"
//               >
//                 MRM
//               </text>
//               <text
//                 x={ROOT_X}
//                 y={ROOT_Y + 8}
//                 textAnchor="middle"
//                 fill="#90CDF4"
//                 fontSize={12}
//                 fontFamily="'JetBrains Mono',monospace"
//                 fontWeight="700"
//               >
//                 Intelligence
//               </text>
//             </motion.g>

//             {/* ── LEVEL-1 BRANCHES ── */}
//             {(tree.branches as MainNode[]).map((b, i) => {
//               const by = branchYs[i];
//               const isActive = active === b.id;

//               return (
//                 <g key={b.id}>
//                   <NodeBox
//                     label={b.label}
//                     highlight={b.highlight}
//                     active={isActive}
//                     onClick={() => toggle(b.id)}
//                     delay={0.3 + i * 0.07}
//                     x={L1_X}
//                     y={by}
//                     w={branchW}
//                     h={branchH}
//                   />

//                   {/* ── LEVEL-2 CHILDREN ── */}
//                   {b.children.length > 0 &&
//                     (() => {
//                       const cc = b.children.length;
//                       const totalH = (cc - 1) * 44;
//                       const startY = by - totalH / 2;
//                       return b.children.map((ch, ci) => {
//                         const cy = startY + ci * 44;
//                         const isActiveC = active === ch.id;
//                         return (
//                           <g key={ch.id}>
//                             <NodeBox
//                               label={ch.label}
//                               active={isActiveC}
//                               onClick={() => toggle(ch.id)}
//                               delay={0.45 + i * 0.07 + ci * 0.06}
//                               x={L2_X}
//                               y={cy}
//                               w={childW}
//                               h={childH}
//                             />

//                             {/* ── LEVEL-3 GRANDCHILDREN ── */}
//                             {ch.grandchildren &&
//                               (() => {
//                                 const gc = ch.grandchildren;
//                                 const gcTotalH = (gc.length - 1) * 34;
//                                 const gcStartY = cy - gcTotalH / 2;
//                                 return gc.map((g, gi) => {
//                                   const gcy = gcStartY + gi * 34;
//                                   return (
//                                     <NodeBox
//                                       key={g.id}
//                                       label={g.label}
//                                       active={active === g.id}
//                                       onClick={() => toggle(g.id)}
//                                       delay={0.7 + gi * 0.06}
//                                       x={L3_X}
//                                       y={gcy}
//                                       w={gcW}
//                                       h={gcH}
//                                       small
//                                     />
//                                   );
//                                 });
//                               })()}
//                           </g>
//                         );
//                       });
//                     })()}
//                 </g>
//               );
//             })}
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }


// new one 



"use client";
import { tree } from "@/data/home";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ═══════════════════════════════════════════════════════════
   ★  RESPONSIVE CONFIG — tweak these per breakpoint  ★
   ═══════════════════════════════════════════════════════════ */
const BREAKPOINTS = {
  phone: {
    ROOT_W: 130,
    ROOT_H: 50,
    L1_W: 125,
    L1_H: 29,
    L2_W: 110,
    L2_H: 27,
    L3_W: 80,
    L3_H: 20,
    ROOT_FS: 14,
    L1_FS: 12,
    L2_FS: 12,
    L3_FS: 12,
    L1_GAP: 15,
    L2_GAP: 8,
    L3_GAP: 25,
    ROOT_X: 20,
    L1_X: 160,
    L2_X: 289,
    L3_X: 400,
    DOT_R: 2,
  },
  tablet: {
    ROOT_W:130,
    ROOT_H: 48,
    L1_W: 158,
    L1_H: 32,
    L2_W: 140,
    L2_H: 28,
    L3_W: 100,
    L3_H: 24,
    ROOT_FS: 10,
    L1_FS: 16,
    L2_FS: 16,
    L3_FS: 16,
    L1_GAP: 15,
    L2_GAP: 10,
    L3_GAP: 8,
    ROOT_X: 52,
    L1_X: 220,
    L2_X: 400,
    L3_X: 570,
    DOT_R: 2.5,
  },
  desktop: {
    ROOT_W:130,
    ROOT_H: 48,
    L1_W: 190,
    L1_H: 32,
    L2_W: 180,
    L2_H: 28,
    L3_W: 120,
    L3_H: 24,
    ROOT_FS: 10,
    L1_FS: 19,
    L2_FS: 19,
    L3_FS: 19,
    L1_GAP: 15,
    L2_GAP: 10,
    L3_GAP: 8,
    ROOT_X: 60,
    L1_X: 240,
    L2_X: 450,
    L3_X: 620,
    DOT_R: 2.5,
  },
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;
type Config = {
  readonly [K in keyof typeof BREAKPOINTS.desktop]: number;
};

/* ─── HOOK: detect viewport ─────────────────────────────── */
function useBreakpoint(): BreakpointKey {
  const [bp, setBp] = useState<BreakpointKey>("desktop");
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setBp("phone");
      else if (w < 1024) setBp("tablet");
      else setBp("desktop");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return bp;
}

/* ─── LAYOUT ENGINE ──────────────────────────────────────── */
function buildLayout(cfg: Config) {
  const {
    ROOT_W,
    ROOT_H,
    L1_W,
    L1_H,
    L2_W,
    L2_H,
    L3_W,
    L3_H,
    L1_GAP,
    L2_GAP,
    L3_GAP,
    ROOT_X,
    L1_X,
    L2_X,
    L3_X,
  } = cfg;

  function childSpan(ch: any): number {
    if (!ch.grandchildren?.length) return L2_H;
    return (
      ch.grandchildren.length * L3_H + (ch.grandchildren.length - 1) * L3_GAP
    );
  }
  function branchSpan(b: any): number {
    if (!b.children?.length) return L1_H;
    const total =
      b.children.reduce((s: number, c: any) => s + childSpan(c), 0) +
      (b.children.length - 1) * L2_GAP;
    return Math.max(L1_H, total);
  }

  const spans = tree.branches.map(branchSpan);
  const totalH = spans.reduce((s, h) => s + h, 0) + (spans.length - 1) * L1_GAP;
  const SVG_H = totalH + 40;
  const ROOT_Y = SVG_H / 2;
  const SVG_W = L3_X + L3_W / 2 + 20;
  const spineX = (ROOT_X + ROOT_W / 2 + L1_X - L1_W / 2) / 2;

  let curTop = 20;
  const nodes: any[] = [];
  const lines: any[] = [];
  let lid = 0;

  nodes.push({
    id: "root",
    label: tree.root.label,
    x: ROOT_X,
    y: ROOT_Y,
    w: ROOT_W,
    h: ROOT_H,
    level: 0,
    fs: cfg.ROOT_FS,
  });

  tree.branches.forEach((b: any, bi: number) => {
    const bspan = spans[bi];
    const bcy = curTop + bspan / 2;

    nodes.push({
      id: b.id,
      label: b.label,
      highlight: b.highlight,
      x: L1_X,
      y: bcy,
      w: L1_W,
      h: L1_H,
      level: 1,
      fs: cfg.L1_FS,
    });

    lines.push({
      id: lid++,
      x1: ROOT_X + ROOT_W / 2,
      y1: ROOT_Y,
      x2: spineX,
      y2: ROOT_Y,
      delay: 0.2,
    });
    lines.push({
      id: lid++,
      x1: spineX,
      y1: ROOT_Y,
      x2: spineX,
      y2: bcy,
      delay: 0.25,
    });
    lines.push({
      id: lid++,
      x1: spineX,
      y1: bcy,
      x2: L1_X - L1_W / 2,
      y2: bcy,
      delay: 0.3 + bi * 0.07,
    });

    if (b.children?.length) {
      const subSpineX = (L1_X + L1_W / 2 + L2_X - L2_W / 2) / 2;
      const childHs = b.children.map(childSpan);
      const childTotal =
        childHs.reduce((s: number, h: number) => s + h, 0) +
        (b.children.length - 1) * L2_GAP;
      let childTop = bcy - childTotal / 2;

      b.children.forEach((ch: any, ci: number) => {
        const chSpan = childHs[ci];
        const ccy = childTop + chSpan / 2;

        nodes.push({
          id: ch.id,
          label: ch.label,
          x: L2_X,
          y: ccy,
          w: L2_W,
          h: L2_H,
          level: 2,
          fs: cfg.L2_FS,
        });

        lines.push({
          id: lid++,
          x1: L1_X + L1_W / 2,
          y1: bcy,
          x2: subSpineX,
          y2: bcy,
          delay: 0.4 + bi * 0.07 + ci * 0.06,
        });
        lines.push({
          id: lid++,
          x1: subSpineX,
          y1: bcy,
          x2: subSpineX,
          y2: ccy,
          delay: 0.45 + bi * 0.07 + ci * 0.06,
        });
        lines.push({
          id: lid++,
          x1: subSpineX,
          y1: ccy,
          x2: L2_X - L2_W / 2,
          y2: ccy,
          delay: 0.5 + bi * 0.07 + ci * 0.06,
        });

        if (ch.grandchildren?.length) {
          const gcSubSpineX = (L2_X + L2_W / 2 + L3_X - L3_W / 2) / 2;
          const gcTotal =
            ch.grandchildren.length * L3_H +
            (ch.grandchildren.length - 1) * L3_GAP;
          let gcTop = ccy - gcTotal / 2;

          ch.grandchildren.forEach((gc: any, gi: number) => {
            const gccy = gcTop + L3_H / 2;
            nodes.push({
              id: gc.id,
              label: gc.label,
              x: L3_X,
              y: gccy,
              w: L3_W,
              h: L3_H,
              level: 3,
              small: true,
              fs: cfg.L3_FS,
            });

            lines.push({
              id: lid++,
              x1: L2_X + L2_W / 2,
              y1: ccy,
              x2: gcSubSpineX,
              y2: ccy,
              delay: 0.65 + gi * 0.06,
            });
            lines.push({
              id: lid++,
              x1: gcSubSpineX,
              y1: ccy,
              x2: gcSubSpineX,
              y2: gccy,
              delay: 0.7 + gi * 0.06,
            });
            lines.push({
              id: lid++,
              x1: gcSubSpineX,
              y1: gccy,
              x2: L3_X - L3_W / 2,
              y2: gccy,
              delay: 0.75 + gi * 0.06,
            });

            gcTop += L3_H + L3_GAP;
          });
        }

        childTop += chSpan + L2_GAP;
      });
    }

    curTop += bspan + L1_GAP;
  });

  return { nodes, lines, SVG_W, SVG_H, ROOT_Y };
}

/* ─── TRAVELLING DOT — transform-based (works on all browsers/mobile) ── */
function TravellingDot({
  x1,
  y1,
  x2,
  y2,
  delay,
  r,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  r: number;
}) {
  // We animate cx/cy directly from start to end using framer keyframes.
  // This is 100% compatible — no CSS offsetPath needed.
  return (
    <motion.circle
      r={r}
      fill="#90CDF4"
      filter="url(#glow)"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, x2],
        cy: [y1, y2],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        delay: delay + 0.5,
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 2,
        times: [0, 0.1, 0.9, 1],
      }}
    />
  );
}

/* ─── ANIMATED LINE ──────────────────────────────────────── */
function AnimatedLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  color = "#63B3ED",
  dotR = 3,
}: any) {
  return (
    <g>
      {/* static dim base */}
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(99,179,237,0.15)"
        strokeWidth="1.5"
      />
      {/* draw-on line */}
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
      {/* travelling glow dot — cross-browser safe */}
      <TravellingDot x1={x1} y1={y1} x2={x2} y2={y2} delay={delay} r={dotR} />
    </g>
  );
}

/* ─── NODE BOX — original ────────────────────────────────── */
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
  fs = 10,
}: any) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
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
      {Array.isArray(label) ? (
        <>
          <text
            x={x}
            y={y - fs * 0.5}
            textAnchor="middle"
            fill={highlight ? "#90CDF4" : "#CBD5E0"}
            fontSize={fs}
            fontFamily="'JetBrains Mono',monospace"
            fontWeight="600"
          >
            {label[0]}
          </text>
          <text
            x={x}
            y={y + fs * 1.0}
            textAnchor="middle"
            fill={highlight ? "#90CDF4" : "#CBD5E0"}
            fontSize={fs}
            fontFamily="'JetBrains Mono',monospace"
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
          fontSize={fs}
          fontFamily="'JetBrains Mono',monospace"
          fontWeight="500"
        >
          {label.length > 16 ? label.slice(0, 15) + "…" : label}
        </text>
      )}
    </motion.g>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function MRMHero() {
  const [active, setActive] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const bp = useBreakpoint();
  const cfg = BREAKPOINTS[bp];

  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);

  const layout = buildLayout(cfg);
  const { SVG_W, SVG_H, ROOT_Y } = layout;
  const { ROOT_X, ROOT_W, ROOT_H, ROOT_FS, DOT_R } = cfg;

  const toggle = (id: string) => setActive((p) => (p === id ? null : id));

  return (
    <div
      className="min-h-screen bg-[#070d1a] flex flex-col items-center justify-center overflow-hidden relative select-none "
      // style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,179,237,1) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start relative z-10 pt-30">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 lg:w-1/2"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-3 md:mb-8">
            MRM Intelligence <br />
            <span className="text-blue-400">Platform</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
            A comprehensive and unified intelligence platform designed for deep
            cyber investigations, real-time threat detection, and advanced OSINT
            operations across the surface, deep, and dark web.
          </p>
        </motion.div>

        {/* Right Side: SVG Tree */}
        <div
          className="z-10  flex justify-center overflow-hidden px-2 lg:w-1/2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            style={{
              width: "100%",
              minWidth: SVG_W,
              height: "auto",
              maxHeight: "72vh",
              overflow: "visible",
              display: "block",
            }}
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
            </defs>

            {/* connector lines + dots */}
            {mounted &&
              layout.lines.map((l: any) => (
                <AnimatedLine key={l.id} {...l} dotR={DOT_R} />
              ))}

            {/* root node */}
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
              // className="hidden md:flex"

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
              className="flex items-end justify-end"

              />
              <text
                x={ROOT_X}
                y={ROOT_Y - ROOT_FS * 0.4}
                textAnchor="middle"
                fill="#90CDF4"
                fontSize={ROOT_FS}
                fontFamily="'JetBrains Mono',monospace"
                fontWeight="700"
               className="text-[10px] md:text-xl"
              >
                MRM
              </text>
              <text
                x={ROOT_X}
                y={ROOT_Y + ROOT_FS * 1.1}
                textAnchor="middle"
                fill="#90CDF4"
                fontSize={ROOT_FS}
                fontFamily="'JetBrains Mono',monospace"
                fontWeight="700"
                className="text-[10px] md:text-lg"
              >
                Intelligence
              </text>
            </motion.g>

            {/* all branch nodes */}
            {layout.nodes
              .filter((n: any) => n.level > 0)
              .map((n: any, i: number) => (
                <NodeBox
                  key={n.id}
                  label={n.label}
                  highlight={n.highlight}
                  active={active === n.id}
                  onClick={() => toggle(n.id)}
                  delay={0.3 + i * 0.05}
                  x={n.x}
                  y={n.y}
                  w={n.w}
                  h={n.h}
                  fs={n.fs}
                />
              ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
