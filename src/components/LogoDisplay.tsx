import { motion } from 'framer-motion';
import { brandColors } from '../data/brandData';

type BgVariant = 'light' | 'dark' | 'gradient';

interface LogoDisplayProps {
  bgVariant: BgVariant;
  onBgChange: (v: BgVariant) => void;
}

const bgStyles: Record<BgVariant, string> = {
  light: 'bg-[#F8FAFC]',
  dark: 'bg-[#0F172A]',
  gradient: 'bg-gradient-to-br from-[#0F1F3D] via-[#1A365D] to-[#0EA5E9]',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function LogoDisplay({ bgVariant, onBgChange }: LogoDisplayProps) {
  const isDark = bgVariant === 'dark' || bgVariant === 'gradient';
  const strokeColor = isDark ? '#FFFFFF' : brandColors.navy;
  const textColor = isDark ? '#FFFFFF' : brandColors.navy;

  return (
    <div className="space-y-6">
      <div className={`rounded-2xl p-8 sm:p-12 ${bgStyles[bgVariant]} transition-colors duration-500 relative overflow-hidden`}>
        <motion.svg
          viewBox="0 0 400 320"
          className="w-full max-w-sm mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <defs>
            <linearGradient id="lensGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1A365D" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lensGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A365D" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F5E6A3" />
            </linearGradient>
          </defs>

          {/* Left lens frame */}
          <motion.ellipse
            cx="130" cy="125" rx="64" ry="46"
            fill="url(#lensGradientLeft)"
            stroke={strokeColor}
            strokeWidth="3.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          {/* Right lens frame */}
          <motion.ellipse
            cx="270" cy="125" rx="64" ry="46"
            fill="url(#lensGradientRight)"
            stroke={strokeColor}
            strokeWidth="3.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.1, ease: 'easeInOut' }}
          />

          {/* Bridge */}
          <motion.path
            d="M 185 90 Q 200 68 215 90"
            fill="none"
            stroke={strokeColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          />

          {/* Om / Infinity teardrop element */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
            style={{ transformOrigin: '200px 100px' }}
            className="animate-pulse-glow"
          >
            <path
              d="M 200 74 Q 208 88 200 102 Q 192 88 200 74"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="88" r="3" fill="url(#goldGradient)" />
          </motion.g>

          {/* Lens flare — right lens */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <path d="M 235 100 L 297 144" stroke="url(#goldGradient)" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            <path d="M 243 107 L 270 130" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
            <circle cx="265" cy="116" r="2" fill="url(#goldGradient)" opacity="0.6" />
          </motion.g>

          {/* Lens flare — left lens */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ delay: 3, duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <path d="M 95 96 L 145 132" stroke="url(#goldGradient)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
            <circle cx="115" cy="110" r="1.5" fill="url(#goldGradient)" opacity="0.5" />
          </motion.g>

          {/* Wordmark: SRI GURU */}
          <motion.text
            x="200" y="215"
            textAnchor="middle"
            fill={textColor}
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="26"
            fontWeight="700"
            letterSpacing="5"
            variants={itemVariants}
          >
            SRI GURU
          </motion.text>

          {/* Wordmark: OPTICS */}
          <motion.text
            x="200" y="245"
            textAnchor="middle"
            fill={isDark ? '#94A3B8' : brandColors.teal}
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="18"
            fontWeight="400"
            letterSpacing="8"
            variants={itemVariants}
          >
            OPTICS
          </motion.text>

          {/* Decorative dots */}
          <motion.circle
            cx="200" cy="262" r="2.5"
            fill={brandColors.gold}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, type: 'spring' }}
            className="animate-breathe"
          />
        </motion.svg>
      </div>

      {/* Background variant toggles */}
      <div className="flex justify-center gap-3">
        {(['light', 'dark', 'gradient'] as BgVariant[]).map((v) => (
          <button
            key={v}
            onClick={() => onBgChange(v)}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium capitalize transition-all ${
              bgVariant === v
                ? 'bg-navy text-white dark:bg-white dark:text-navy shadow-lg'
                : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
