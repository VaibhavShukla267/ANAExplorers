import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const images = [
  { src: gallery1, alt: "Tropical beach paradise", location: "Maldives", w: 800, h: 1024 },
  { src: gallery2, alt: "Ancient temple ruins in Southeast Asia", location: "Cambodia", w: 800, h: 1024 },
  { src: gallery3, alt: "Alpine mountain meadow", location: "Swiss Alps", w: 800, h: 1024 },
  { src: gallery4, alt: "Mediterranean coastal village", location: "Amalfi Coast", w: 800, h: 1024 },
  { src: gallery5, alt: "Desert sand dunes at sunset", location: "Sahara Desert", w: 1024, h: 800 },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-body text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Adventures
          </p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Places That <span className="text-gradient">Inspire</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-muted-foreground">
            A curated collection of moments from around the world — each frame tells a story.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0 ? "sm:row-span-2" : ""
              } ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.w}
                height={img.h}
                className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                <p className="font-display text-xl font-semibold text-primary-foreground">{img.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
