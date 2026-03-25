const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl font-bold text-primary-foreground">Ana Explorers</p>
      <p className="mt-2 font-body text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Ana Explorers. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
