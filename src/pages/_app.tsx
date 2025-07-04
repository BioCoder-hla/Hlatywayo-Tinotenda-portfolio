// src/pages/_app.tsx

// --- Default Imports ---
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/layout/Layout';
import { Inter } from 'next/font/google';

// --- New Imports for Page Transitions ---
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// --- Font Configuration (No Change) ---
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// --- New Animation Configuration ---
// These are the "variants" that define the states of our animation
const pageVariants = {
  initial: { opacity: 0, y: 5 }, // Reduced the initial distance
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -5 }, // Reduced the exit distance
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut', // Changed from 'anticipate' to a smoother, faster ease
  duration: 0.3,   // <-- THE KEY CHANGE: Reduced from 0.5s to 0.3s
};

// --- The Main App Component (Updated) ---
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter(); // We need the router to get the current URL path

  return (
    <div className={`${inter.variable} font-sans`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          {/* AnimatePresence is the magic component that makes exit animations possible */}
          <AnimatePresence mode="wait">
            {/* 
              This motion.div is the component that will be animated.
              The 'key' is CRUCIAL. It tells Framer Motion that the component has changed
              (because the URL route has changed), triggering the animation.
            */}
            <motion.div
              key={router.route}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </div>
  );
}
