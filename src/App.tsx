import { useState } from 'react';
import { AnimatePresence, motion, type Easing } from 'framer-motion';
import { TabNav } from './components/TabNav';
import { LogoDisplay } from './components/LogoDisplay';
import { ConceptPanel } from './components/ConceptPanel';
import { DetailsPanel } from './components/DetailsPanel';
import { tabs, type TabId } from './data/brandData';

const easeOut: Easing = [0.16, 1, 0.3, 1];

const panelVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('Logo');
  const [bgVariant, setBgVariant] = useState<'light' | 'dark' | 'gradient'>('light');

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] transition-colors duration-500">
      {/* Header */}
      <header className="pt-8 sm:pt-12 pb-4 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-xl sm:text-2xl font-bold text-navy dark:text-white tracking-tight">
            Sri Guru Optics
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mt-1 tracking-widest uppercase">
            Brand Identity
          </p>
        </motion.div>
      </header>

      {/* Tab Navigation */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

      {/* Content */}
      <main className="px-4 pb-16 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {activeTab === 'Logo' && (
              <LogoDisplay bgVariant={bgVariant} onBgChange={setBgVariant} />
            )}
            {activeTab === 'Concept' && <ConceptPanel />}
            {activeTab === 'Details' && <DetailsPanel />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="pb-6 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-600">
          &copy; {new Date().getFullYear()} Sri Guru Optics
        </p>
      </footer>
    </div>
  );
}

export default App;
