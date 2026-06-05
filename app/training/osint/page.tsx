"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tree } from "@/data/home";

// /* ─── DATA ─────────────────────────────────────────────── */
// const tree = {
//   root: { id: "root", label: ["MRM", "Intelligence"] },
//   branches: [
//     {
//       id: "misc",
//       label: "Miscellaneous Tools",
//       children: [
//         { id: "dth", label: "DTH Info" },
//         { id: "gas", label: "GAS Info" },
//         { id: "phish", label: "Phishing" },
//       ],
//     },
//     {
//       id: "cell",
//       label: "Cell ID Decoder",
//       children: [],
//     },
//     {
//       id: "domain",
//       label: "Domain Intelligence",
//       children: [
//         { id: "creation", label: "Creation Data" },
//         { id: "hosting", label: "Hosting Details" },
//         { id: "domainIntel", label: "Domain Intelligence" },
//       ],
//     },
//     {
//       id: "osint",
//       label: "OSINT",
//       highlight: true,
//       children: [
//         { id: "indian", label: "Indian No OSINT" },
//         {
//           id: "intl",
//           label: "International Intell.",
//           grandchildren: [
//             { id: "gmail", label: "Gmail" },
//             { id: "proton", label: "Proton Mail" },
//             { id: "outlook", label: "Outlook" },
//             { id: "yahoo", label: "Yahoo India" },
//           ],
//         },
//         { id: "email", label: "Email" },
//       ],
//     },
//     {
//       id: "vehicle",
//       label: "Vehicle Info",
//       children: [
//         { id: "vdetails", label: "Vehicle Details" },
//         { id: "challan", label: "Challan Check" },
//         { id: "driving", label: "Driving License" },
//       ],
//     },
//     {
//       id: "ip",
//       label: "IP Investigation",
//       children: [],
//     },
//     {
//       id: "crypto",
//       label: "Crypto Investigation",
//       children: [
//         { id: "wallet", label: "Wallet Creation" },
//         { id: "paymail", label: "Payment Mail" },
//         { id: "walletcomp", label: "Wallet Comparison" },
//       ],
//     },
//     {
//       id: "nodal",
//       label: "Nodal Lookup",
//       children: [],
//     },
//   ],
// };

// /* ─── ANIMATED SVG CONNECTOR ───────────────────────────── */
// function AnimatedLine({ x1, y1, x2, y2, delay = 0, color = "#63B3ED", id }) {
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
// }) {
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
// export default function MRMHero() {
//   const [active, setActive] = useState(null);
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => {
//     setTimeout(() => setMounted(true), 200);
//   }, []);

//   const toggle = (id) => setActive((p) => (p === id ? null : id));

//   /* Layout constants */
//   const SVG_W = 860;
//   const SVG_H = 680;

//   const ROOT_X = 82,
//     ROOT_Y = 340;
//   const ROOT_W = 100,
//     ROOT_H = 52;

//   /* Level-1 branch positions */
//   const L1_X = 230;
//   const branchYs = [60, 130, 200, 310, 410, 480, 545, 610];
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
//   const lines = [];
//   let lineId = 0;

//   if (mounted) {
//     // root → trunk vertical: we draw horizontal stub then vertical then horizontals
//     // root → each branch (L-shaped: right then up/down)
//     branchYs.forEach((by, i) => {
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
//       const branch = tree.branches[i];
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
//     <div
//       className="min-h-screen bg-[#070d1a] flex flex-col items-center justify-center overflow-hidden relative select-none"
//       style={{ fontFamily: "'JetBrains Mono', monospace" }}
//     >
//       {/* Grid bg */}
//       <div
//         className="absolute inset-0 opacity-[0.035]"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(99,179,237,1) 1px,transparent 1px),linear-gradient(90deg,rgba(99,179,237,1) 1px,transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       {/* Ambient glows */}
//       <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

//       {/* ── HEADER ── */}
//       <motion.div
//         initial={{ opacity: 0, y: -24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="text-center mb-8 z-10"
//       >
//         <div className="flex items-center justify-center gap-3 mb-2">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="w-6 h-6 border border-blue-400/40 rounded-full flex items-center justify-center"
//           >
//             <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
//           </motion.div>
//           <span className="text-blue-400/60 text-[10px] tracking-[0.35em] uppercase">
//             Multi-Domain Reconnaissance Platform
//           </span>
//           <motion.div
//             animate={{ rotate: -360 }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="w-6 h-6 border border-blue-400/40 rounded-full flex items-center justify-center"
//           >
//             <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
//           </motion.div>
//         </div>
//         <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//           <span className="text-white">MRM </span>
//           <span
//             className="text-transparent bg-clip-text"
//             style={{
//               backgroundImage:
//                 "linear-gradient(135deg,#63B3ED,#90CDF4,#4299E1)",
//             }}
//           >
//             Intelligence
//           </span>
//         </h1>
//         <p className="text-slate-500 text-xs tracking-[0.25em] uppercase mt-1">
//           Feature Architecture
//         </p>
//       </motion.div>

//       {/* ── SVG TREE ── */}
//       <div className="z-10 w-full flex justify-center overflow-x-auto px-2">
//         <svg
//           viewBox={`0 0 ${SVG_W} ${SVG_H}`}
//           width={SVG_W}
//           height={SVG_H}
//           style={{ maxWidth: "100%", overflow: "visible" }}
//         >
//           <defs>
//             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//               <feGaussianBlur stdDeviation="3" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//             <filter id="rootGlow">
//               <feGaussianBlur stdDeviation="6" result="blur" />
//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//             <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//               <stop offset="0%" stopColor="#63B3ED" stopOpacity="0" />
//               <stop offset="50%" stopColor="#90CDF4" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#63B3ED" stopOpacity="0" />
//             </linearGradient>
//           </defs>

//           {/* ── CONNECTOR LINES ── */}
//           {lines.map((l) => (
//             <AnimatedLine key={l.id} {...l} />
//           ))}

//           {/* ── ROOT NODE ── */}
//           <motion.g filter="url(#rootGlow)">
//             <motion.rect
//               x={ROOT_X - ROOT_W / 2}
//               y={ROOT_Y - ROOT_H / 2}
//               width={ROOT_W}
//               height={ROOT_H}
//               rx={6}
//               fill="rgba(99,179,237,0.15)"
//               stroke="#63B3ED"
//               strokeWidth={2}
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, ease: "backOut" }}
//             />
//             <motion.rect
//               x={ROOT_X - ROOT_W / 2 - 5}
//               y={ROOT_Y - ROOT_H / 2 - 5}
//               width={ROOT_W + 10}
//               height={ROOT_H + 10}
//               rx={8}
//               fill="none"
//               stroke="#63B3ED"
//               strokeWidth={1}
//               strokeOpacity={0.3}
//               animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
//               transition={{ duration: 2.5, repeat: Infinity }}
//             />
//             <text
//               x={ROOT_X}
//               y={ROOT_Y - 8}
//               textAnchor="middle"
//               fill="#90CDF4"
//               fontSize={12}
//               fontFamily="'JetBrains Mono',monospace"
//               fontWeight="700"
//             >
//               MRM
//             </text>
//             <text
//               x={ROOT_X}
//               y={ROOT_Y + 8}
//               textAnchor="middle"
//               fill="#90CDF4"
//               fontSize={12}
//               fontFamily="'JetBrains Mono',monospace"
//               fontWeight="700"
//             >
//               Intelligence
//             </text>
//           </motion.g>

//           {/* ── LEVEL-1 BRANCHES ── */}
//           {tree.branches.map((b, i) => {
//             const by = branchYs[i];
//             const isActive = active === b.id;

//             return (
//               <g key={b.id}>
//                 <NodeBox
//                   label={b.label}
//                   highlight={b.highlight}
//                   active={isActive}
//                   onClick={() => toggle(b.id)}
//                   delay={0.3 + i * 0.07}
//                   x={L1_X}
//                   y={by}
//                   w={branchW}
//                   h={branchH}
//                 />

//                 {/* ── LEVEL-2 CHILDREN ── */}
//                 {b.children.length > 0 &&
//                   (() => {
//                     const cc = b.children.length;
//                     const totalH = (cc - 1) * 44;
//                     const startY = by - totalH / 2;
//                     return b.children.map((ch, ci) => {
//                       const cy = startY + ci * 44;
//                       const isActiveC = active === ch.id;
//                       return (
//                         <g key={ch.id}>
//                           <NodeBox
//                             label={ch.label}
//                             active={isActiveC}
//                             onClick={() => toggle(ch.id)}
//                             delay={0.45 + i * 0.07 + ci * 0.06}
//                             x={L2_X}
//                             y={cy}
//                             w={childW}
//                             h={childH}
//                           />

//                           {/* ── LEVEL-3 GRANDCHILDREN ── */}
//                           {ch.grandchildren &&
//                             (() => {
//                               const gc = ch.grandchildren;
//                               const gcTotalH = (gc.length - 1) * 34;
//                               const gcStartY = cy - gcTotalH / 2;
//                               return gc.map((g, gi) => {
//                                 const gcy = gcStartY + gi * 34;
//                                 return (
//                                   <NodeBox
//                                     key={g.id}
//                                     label={g.label}
//                                     active={active === g.id}
//                                     onClick={() => toggle(g.id)}
//                                     delay={0.7 + gi * 0.06}
//                                     x={L3_X}
//                                     y={gcy}
//                                     w={gcW}
//                                     h={gcH}
//                                     small
//                                   />
//                                 );
//                               });
//                             })()}
//                         </g>
//                       );
//                     });
//                   })()}
//               </g>
//             );
//           })}
//         </svg>
//       </div>
//     </div>
//   );
// }


function MobileTree() {
  const [openBranch, setOpenBranch] = useState<string | null>("osint");
  const [openChild, setOpenChild] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md mx-auto px-4 space-y-3">
      {tree.branches.map((branch: Branch, index) => (
        <motion.div
          key={branch.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          className={`
            overflow-hidden
            rounded-2xl
            border
            backdrop-blur-xl
            ${
              branch.highlight
                ? "border-blue-400/50 bg-blue-500/10"
                : "border-blue-500/20 bg-[#0c1528]/80"
            }
          `}
        >
          <button
            onClick={() =>
              setOpenBranch(
                openBranch === branch.id ? null : branch.id
              )
            }
            className="w-full px-5 py-4 flex items-center justify-between"
          >
            <span
              className={`font-medium text-left ${
                branch.highlight
                  ? "text-blue-300"
                  : "text-slate-200"
              }`}
            >
              {branch.label}
            </span>

            <motion.span
              animate={{
                rotate: openBranch === branch.id ? 180 : 0,
              }}
              transition={{ duration: 0.25 }}
              className="text-blue-400"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {openBranch === branch.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-2">
                  {branch.children.length === 0 ? (
                    <div className="pl-3 text-sm text-slate-500">
                      Direct Tool
                    </div>
                  ) : (
                    branch.children.map((child) => (
                      <div
                        key={child.id}
                        className="rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <button
                          onClick={() => {
                            if (!child.grandchildren) return;

                            setOpenChild(
                              openChild === child.id
                                ? null
                                : child.id
                            );
                          }}
                          className="w-full flex items-center justify-between px-4 py-3"
                        >
                          <span className="text-sm text-slate-300">
                            {child.label}
                          </span>

                          {child.grandchildren && (
                            <motion.span
                              animate={{
                                rotate:
                                  openChild === child.id
                                    ? 180
                                    : 0,
                              }}
                              className="text-xs text-blue-400"
                            >
                              ▼
                            </motion.span>
                          )}
                        </button>

                        <AnimatePresence>
                          {child.grandchildren &&
                            openChild === child.id && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-3 space-y-2">
                                  {child.grandchildren.map(
                                    (gc) => (
                                      <motion.div
                                        key={gc.id}
                                        initial={{
                                          opacity: 0,
                                          x: -10,
                                        }}
                                        animate={{
                                          opacity: 1,
                                          x: 0,
                                        }}
                                        className="
                                          flex
                                          items-center
                                          gap-2
                                          text-xs
                                          text-slate-400
                                          pl-4
                                        "
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                        {gc.label}
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}



export default MobileTree