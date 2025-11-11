import { ReactNode, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Motion({ children, condition, className, ref }: { children: ReactNode, condition: boolean, className?: string, ref?: RefObject<HTMLDivElement | null> }) {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          ref={ref}
          className={className}
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}