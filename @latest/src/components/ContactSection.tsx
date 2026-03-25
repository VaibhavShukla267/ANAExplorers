import { motion } from "framer-motion";
import { Instagram, Mail, Youtube } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/anaexplorers",
    handle: "@anaexplorers",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
    handle: "Ana Explorers",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@anaexplorers.com",
    handle: "hello@anaexplorers.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-warm py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Let's Connect
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Join the <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Whether it's a brand collaboration, travel tips, or just saying hello — I'd love to hear from you.
          </p>

          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-background px-6 py-4 shadow-warm transition-all hover:shadow-elevated hover:scale-105"
              >
                <s.icon className="h-5 w-5 text-primary transition-colors group-hover:text-accent" />
                <div className="text-left">
                  <p className="font-body text-xs text-muted-foreground">{s.label}</p>
                  <p className="font-body text-sm font-medium text-foreground">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
