import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import type { RootState } from "../redux/store";
import type { Product } from "../data/products";
import { toast } from "../components/ui/sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isWished = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(
      toggleWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    );
    toast.success(isWished ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-card aspect-square mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleToggleWishlist}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
              isWished
                ? "bg-primary text-primary-foreground"
                : "bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            <Heart
              className="w-4 h-4"
              fill={isWished ? "currentColor" : "none"}
            />
          </button>
          <button
            onClick={handleAddToCart}
            className="w-9 h-9 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-beige-dark"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
