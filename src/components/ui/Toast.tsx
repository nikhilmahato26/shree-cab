import React, { useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastContext } from './useToast';

export { useToast } from './useToast';

interface ToastItem {
  id: number;
  message: string;
  type?: 'success' | 'error' | 'info';
}

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        role="log"
        aria-live="polite"
        className="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0_12px_36px_rgba(0,59,149,0.18)] bg-white border max-w-sm ${
                toast.type === 'error'
                  ? 'border-red-200 text-red-800'
                  : toast.type === 'info'
                  ? 'border-blue-200 text-[#003B95]'
                  : 'border-emerald-200 text-emerald-900'
              }`}
            >
              {toast.type === 'error' ? (
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              ) : toast.type === 'info' ? (
                <Info className="w-5 h-5 text-[#003B95] shrink-0" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              )}
              <span className="text-sm font-semibold">{toast.message}</span>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-auto text-gray-400 hover:text-gray-600 p-1"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
