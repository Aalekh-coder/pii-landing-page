"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tree } from "@/data/home";

interface GrandChildNode {
  id: string;
  label: string | string[];
}

interface ChildNode {
  id: string;
  label: string | string[];
  grandchildren?: GrandChildNode[];
}

interface Branch {
  id: string;
  label: string | string[];
  highlight?: boolean;
  children: ChildNode[];
}


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