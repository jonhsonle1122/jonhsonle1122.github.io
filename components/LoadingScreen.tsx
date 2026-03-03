"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900/80 shadow-[0_0_60px_rgba(16,185,129,0.65)]"
            initial={{ scale: 0.8, rotate: -6 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-3 rounded-2xl bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 blur-md"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950/90"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <div className="h-9 w-9 rounded-[1.1rem] bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-slate-950 text-xs font-semibold tracking-wide text-emerald-200">
                  &lt;/&gt;
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

