"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import { dismissToast } from "@/features/ui/uiSlice";

const iconMap = {
  success: CheckCircle2,
  error: TriangleAlert,
  info: Info
};

export default function ToastHost() {
  const dispatch = useDispatch();
  const toasts = useSelector((state) => state.ui.toasts);

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = iconMap[toast.type] || Info;
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.96 }}
              className="pointer-events-auto glass-panel rounded-2xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-xl border border-white/10 bg-white/5 p-2">
                  <Icon className="h-4 w-4 text-cyan-200" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{toast.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{toast.message}</p>
                </div>
                <button
                  type="button"
                  aria-label="Dismiss notification"
                  onClick={() => dispatch(dismissToast(toast.id))}
                  className="rounded-full p-1 text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
