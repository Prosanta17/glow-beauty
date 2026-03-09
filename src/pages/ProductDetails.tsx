import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import type { RootState } from "../redux/store";
import { Heart, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "../components/ui/sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === Number(id));
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product)
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </Layout>
    );

  const isWished = wishlist.some((i) => i.id === product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const images = product.images || [product.image];

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="aspect-square rounded-xl overflow-hidden bg-card mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${i === selectedImage ? "border-primary" : "border-transparent"}`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-beige-dark"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-input rounded-full">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-3 hover:text-primary"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-semibold">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-3 hover:text-primary"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    for (let i = 0; i < qty; i++)
                      dispatch(
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        }),
                      );
                    toast.success("Added to cart");
                  }}
                  className="flex-1 bg-primary text-primary-foreground py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" /> Add to Cart
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      toggleWishlist({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                      }),
                    );
                    toast.success(
                      isWished ? "Removed from wishlist" : "Added to wishlist",
                    );
                  }}
                  className={`w-14 rounded-full border-2 flex items-center justify-center transition-colors ${isWished ? "border-primary bg-primary text-primary-foreground" : "border-input hover:border-primary hover:text-primary"}`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isWished ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16 md:mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
