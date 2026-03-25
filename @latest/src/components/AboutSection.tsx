import { motion } from "framer-motion";
import anaPortrait from "@/assets/ana-portrait.jpg";

const stats = [
  { number: "30+", label: "Countries Explored" },
  { number: "100K+", label: "Community Members" },
  { number: "500+", label: "Adventures Shared" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-warm py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={anaPortrait}
                alt="Ana - Travel Explorer and Content Creator"
                className="rounded-2xl object-cover shadow-elevated"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary px-6 py-4 shadow-warm">
                <p className="font-display text-2xl font-bold text-primary-foreground">5+ Years</p>
                <p className="font-body text-sm text-primary-foreground/80">of Exploring</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
              About Me
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              The World is My{" "}
              <span className="text-gradient">Playground</span>
            </h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              Hey, I'm Ana! A passionate traveler, storyteller, and adventure seeker.
              I've traded the ordinary for the extraordinary, documenting every sunrise
              on a mountaintop, every hidden beach, and every culture that has shaped my journey.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
              Through my content, I inspire others to step outside their comfort zone
              and discover the magic that awaits when you say "yes" to the unknown.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
