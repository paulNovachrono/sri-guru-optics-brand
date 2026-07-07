import { motion } from 'framer-motion';
import { brandInfo, brandColors } from '../data/brandData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function DetailsPanel() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto space-y-8"
    >
      {/* Business info */}
      <motion.div variants={itemVariants} className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-2">
          {brandInfo.name}
        </h2>
        <p className="text-gold font-display text-base sm:text-lg italic">
          &ldquo;{brandInfo.tagline}&rdquo;
        </p>
      </motion.div>

      {/* Services */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          Services
        </h3>
        <div className="grid sm:grid-cols-2 gap-2">
          {brandInfo.services.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
            >
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700 dark:text-gray-200">{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Logo specs */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          Logo Specifications
        </h3>
        <div className="space-y-3">
          {[
            { label: 'Logo Type', value: 'Combination Mark (Icon + Wordmark)' },
            { label: 'Icon Style', value: 'Stylized Spectacles + Om-Infinity Motif' },
            { label: 'Typography', value: 'Inter (Geometric Sans-Serif)' },
            { label: 'Primary Color', value: brandColors.navy },
            { label: 'Secondary Color', value: brandColors.teal },
            { label: 'Accent Color', value: brandColors.gold },
            { label: 'Animation Style', value: 'Lens draw-on, gleam sweep, floating, breathing' },
          ].map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between items-center px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
            >
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{spec.label}</span>
              <span className="text-xs sm:text-sm text-gray-900 dark:text-white font-semibold text-right max-w-[60%]">{spec.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* SVG structure breakdown */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          SVG Elements
        </h3>
        <div className="space-y-2">
          {[
            { element: 'Left & Right Ellipses', desc: 'Lens frames with subtle gradient fills', animation: 'Stroke draw-on (1.2s)' },
            { element: 'Bridge Path', desc: 'Curved connector between lenses', animation: 'Path reveal (0.8s)' },
            { element: 'Om Teardrop', desc: 'Gold-infinity motif on bridge', animation: 'Spring scale-in + glow pulse' },
            { element: 'Lens Flare Lines', desc: 'Diagonal gleam across lenses', animation: 'Opacity cycle (2.5s loop)' },
            { element: 'Wordmark Text', desc: '"SRI GURU" bold, "OPTICS" light', animation: 'Fade-in slide-up staggered' },
          ].map((el) => (
            <div
              key={el.element}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-4 py-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
            >
              <span className="text-sm font-semibold text-navy dark:text-white min-w-[140px]">{el.element}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex-1">{el.desc}</span>
              <span className="text-xs font-mono text-gold bg-gold/10 px-2 py-0.5 rounded">{el.animation}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
