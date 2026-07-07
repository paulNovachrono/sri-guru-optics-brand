import { motion } from 'framer-motion';
import { brandColors, conceptData, brandInfo } from '../data/brandData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ColorSwatch = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 shrink-0" style={{ background: color }} />
    <div>
      <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">{color}</p>
    </div>
  </div>
);

export function ConceptPanel() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto space-y-10"
    >
      {/* Concept title */}
      <motion.div variants={itemVariants} className="text-center">
        <p className="text-gold font-display text-lg sm:text-xl mb-2">Concept</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white font-display">
          "{conceptData.concept}"
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-center leading-relaxed text-sm sm:text-base">
        {brandInfo.description}
      </motion.p>

      {/* Color palette */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          Color Palette
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorSwatch color={brandColors.navy} label="Deep Navy" />
          <ColorSwatch color={brandColors.teal} label="Teal" />
          <ColorSwatch color={brandColors.gold} label="Warm Gold" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border-2 border-gray-300 dark:border-white/20 bg-white shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">White</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">#FFFFFF</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Symbolism */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          Symbolism
        </h3>
        <div className="space-y-4">
          {conceptData.symbolism.map((item) => (
            <motion.div
              key={item.element}
              variants={itemVariants}
              className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
            >
              <div className="w-1 shrink-0 rounded-full bg-gold" />
              <div>
                <h4 className="font-semibold text-navy dark:text-white text-sm sm:text-base">
                  {item.element}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                  {item.meaning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tagline */}
      <motion.div variants={itemVariants} className="text-center py-6">
        <p className="text-gold/80 text-sm uppercase tracking-[0.3em] font-medium">
          {brandInfo.tagline}
        </p>
      </motion.div>
    </motion.div>
  );
}
