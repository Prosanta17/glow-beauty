import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/slices/cartSlice";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "../components/ui/sonner";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-3">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">
            Looks like you haven't added any products yet.
          </p>
          <Link
            to="/shop"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold">{item.name}</h3>
                    <p className="text-primary font-semibold mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-input rounded-full">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              }),
                            )
                          }
                          className="p-1.5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              }),
                            )
                          }
                          className="p-1.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                          toast.success("Removed from cart");
                        }}
                        className="text-destructive hover:text-destructive/80 p-1.5"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-bold self-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-card rounded-xl p-6 border border-border h-fit">
              <h2 className="font-display text-xl font-bold mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full mt-6 bg-primary text-primary-foreground py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => {
                  dispatch(clearCart());
                  toast.success("Cart cleared");
                }}
                className="w-full mt-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
