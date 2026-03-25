import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import blogAurora from "@/assets/blog-aurora.jpg";
import blogMarket from "@/assets/blog-market.jpg";
import blogMachu from "@/assets/blog-machu.jpg";

const posts = [
  {
    image: blogAurora,
    tag: "Adventure",
    title: "Chasing the Northern Lights in Iceland",
    excerpt:
      "Standing beneath the dancing aurora on a frozen lake was the most surreal moment of my life. Here's how to plan the perfect Northern Lights trip.",
    date: "Mar 12, 2026",
    location: "Reykjavík, Iceland",
    readTime: "6 min read",
  },
  {
    image: blogMarket,
    tag: "Culture",
    title: "A Night Market Food Tour Through Bangkok",
    excerpt:
      "From sizzling pad thai to mango sticky rice — my guide to the best street food stalls in Bangkok's most vibrant night markets.",
    date: "Feb 28, 2026",
    location: "Bangkok, Thailand",
    readTime: "5 min read",
  },
  {
    image: blogMachu,
    tag: "Hiking",
    title: "Sunrise at Machu Picchu: The Inca Trail",
    excerpt:
      "Four days of trekking through cloud forests and ancient ruins led to the most unforgettable sunrise I've ever witnessed.",
    date: "Feb 10, 2026",
    location: "Cusco, Peru",
    readTime: "8 min read",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Travel Stories
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Latest from the <span className="text-gradient">Journal</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-muted-foreground">
            Personal tales, practical tips, and photo diaries from my recent adventures.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-card shadow-warm transition-all hover:shadow-elevated"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 font-body text-xs font-medium text-primary-foreground">
                  {post.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 font-body text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {post.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="font-body text-xs text-muted-foreground">{post.date}</span>
                  <span className="flex items-center gap-1 font-body text-sm font-medium text-primary transition-all group-hover:gap-2">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
