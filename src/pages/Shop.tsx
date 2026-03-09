import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { filterByCategory, sortProducts } from "../redux/slices/productsSlice";
import { categories } from "../data/products";

const Shop = () => {
  const dispatch = useDispatch();
  const { filteredItems, selectedCategory, sortBy } = useSelector(
    (state: RootState) => state.products,
  );

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Shop All Products
            </h1>
            <p className="text-muted-foreground">
              Discover our complete collection of beauty essentials
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {["All", ...categories.map((c) => c.name)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => dispatch(filterByCategory(cat))}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => dispatch(sortProducts(e.target.value))}
              className="px-4 py-2 rounded-lg border border-input bg-background text-foreground text-sm"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {filteredItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
