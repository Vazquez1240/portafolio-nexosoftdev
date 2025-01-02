import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// @ts-ignore
export default function ComponenteAnimacion({ children, className }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      className={className}
      initial="initial"
      variants={{
        animate: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.section>
  );
}
