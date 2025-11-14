import { ReactNode, RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MotionProps {
  children: ReactNode;
  condition: boolean;
  className?: string;
  style?: React.CSSProperties;
  ref?: RefObject<HTMLDivElement | null>;
}

export function Motion({ children, condition, className, style, ref }: MotionProps) {
  return (
    <AnimatePresence>
      {condition && (
        <motion.div
          ref={ref}
          className={className}
          style={style}
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