import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import {
  products,
  categories,
  testimonials,
  instagramImages,
} from "../data/products";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "../components/ui/sonner";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const Index = () => {
  const [email, setEmail] = useState("");
  const featured = products
    .filter((p) => p.badge === "Bestseller" || p.badge === "New")
    .slice(0, 4);
  const bestSellers = products.filter((p) => p.reviews > 200).slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-rose-light overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                New Collection 2026
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Your <span className="text-primary">Natural</span> Glow
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                Premium beauty products crafted with clean ingredients to
                enhance your natural radiance. Feel beautiful, naturally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
                >
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/categories"
                  className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
                >
                  Explore
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&h=700&fit=crop"
                alt="Beauty products collection"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Handpicked favorites loved by our community
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Find exactly what you're looking for
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link to="/categories" key={cat.id} className="group text-center">
                <div className="aspect-square rounded-full overflow-hidden mb-3 mx-auto w-28 md:w-32 border-4 border-transparent group-hover:border-primary transition-colors">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-semibold group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {cat.count} products
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Best Sellers
            </h2>
            <p className="text-muted-foreground">
              Our most loved products by thousands of customers
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-rose-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-background rounded-xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                    {t.avatar}
                  </div>
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Stay in the Glow
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe for exclusive deals, beauty tips, and new product
              alerts.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Subscribed!");
                setEmail("");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Follow Us @GlowBeauty
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {instagramImages.map((img, i) => (
              <a
                href="#"
                key={i}
                className="aspect-square rounded-lg overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Instagram ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
