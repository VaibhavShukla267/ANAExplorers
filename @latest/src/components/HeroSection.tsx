import { motion } from "framer-motion";
import heroImage from "@/assets/hero-adventure.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Ana standing on mountain cliff overlooking turquoise lakes"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 font-body text-sm uppercase tracking-[0.3em] text-primary-foreground/80"
        >
          Travel · Adventure · Stories
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl"
        >
          Ana Explorers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-lg font-body text-lg font-light text-primary-foreground/90 md:text-xl"
        >
          Discovering the world one adventure at a time.
          <br />
          Let's explore the extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#gallery"
            className="rounded-full bg-primary px-8 py-3 font-body text-sm font-medium text-primary-foreground transition-all hover:shadow-elevated hover:scale-105"
          >
            View Adventures
          </a>
          <a
            href="https://www.instagram.com/anaexplorers"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary-foreground/30 px-8 py-3 font-body text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-xs text-primary-foreground/60">Scroll to explore</span>
          <div className="h-8 w-[1px] animate-pulse bg-primary-foreground/40" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
