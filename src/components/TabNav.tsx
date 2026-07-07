import { motion } from 'framer-motion';
import type { TabId } from '../data/brandData';

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  tabs: readonly TabId[];
}

export function TabNav({ activeTab, onTabChange, tabs }: TabNavProps) {
  return (
    <nav className="flex justify-center gap-1 sm:gap-2 mb-8 sm:mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className="relative px-5 sm:px-8 py-2.5 text-sm sm:text-base font-medium transition-colors"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-navy dark:bg-white rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${activeTab === tab ? 'text-white dark:text-navy' : 'text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white'}`}>
            {tab}
          </span>
        </button>
      ))}
    </nav>
  );
}
