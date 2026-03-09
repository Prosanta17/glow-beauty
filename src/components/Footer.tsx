import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-4">GlowBeauty</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Empowering beauty through clean, luxurious products crafted with love. Because you deserve to glow.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[["Shop", "/shop"], ["Categories", "/categories"], ["About Us", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([name, path]) => (
              <li key={path}><Link to={path} className="hover:text-primary transition-colors">{name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Customer Support</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[["FAQ", "/faq"], ["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"], ["Wishlist", "/wishlist"], ["Cart", "/cart"]].map(([name, path]) => (
              <li key={path}><Link to={path} className="hover:text-primary transition-colors">{name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <p>123 Beauty Lane, Suite 100</p>
            <p>Los Angeles, CA 90001</p>
            <p>hello@glowbeauty.com</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 GlowBeauty. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
