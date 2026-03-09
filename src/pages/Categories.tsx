import Layout from "../components/Layout";
import { categories } from "../data/products";
import { Link } from "react-router-dom";

const Categories = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Shop by Category
          </h1>
          <p className="text-muted-foreground">
            Explore our curated collections
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              to="/shop"
              key={cat.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-background">
                <h2 className="font-display text-3xl font-bold mb-1">
                  {cat.name}
                </h2>
                <p className="text-sm opacity-90">{cat.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Categories;
