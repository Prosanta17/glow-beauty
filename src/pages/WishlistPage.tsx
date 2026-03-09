import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "../components/ui/sonner";

const WishlistPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.wishlist.items);

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-3">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-6">
            Save your favorite products for later.
          </p>
          <Link
            to="/shop"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90"
          >
            Browse Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Wishlist</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl overflow-hidden border border-border"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="block aspect-square"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-display font-semibold mb-1">
                    {item.name}
                  </h3>
                  <p className="font-semibold text-primary mb-3">
                    ${item.price}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                          }),
                        );
                        toast.success("Added to cart");
                      }}
                      className="flex-1 bg-primary text-primary-foreground py-2 rounded-full text-sm font-semibold hover:opacity-90 flex items-center justify-center gap-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Add
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeFromWishlist(item.id));
                        toast.success("Removed");
                      }}
                      className="w-10 rounded-full border border-input flex items-center justify-center hover:text-destructive hover:border-destructive transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WishlistPage;
