import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "../components/ui/sonner";
import { z } from "zod";
import { ChevronLeft, CreditCard, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const checkoutSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(7, "Valid phone number required").max(20),
  address: z.string().trim().min(5, "Address is required").max(200),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  zipCode: z.string().trim().min(3, "ZIP code is required").max(20),
  country: z.string().trim().min(1, "Country is required").max(100),
  notes: z.string().max(500).optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const initialForm: CheckoutForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
  notes: "",
};

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cart.items);
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutForm, string>>
  >({});
  const [shipping, setShipping] = useState<"standard" | "express">("standard");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost =
    shipping === "express" ? 12.99 : subtotal >= 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-3">No items to checkout</h1>
          <p className="text-muted-foreground mb-6">
            Add products to your cart first.
          </p>
          <Link
            to="/shop"
            className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90"
          >
            Shop Now
          </Link>
        </div>
      </Layout>
    );
  }

  const updateField = (field: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof CheckoutForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof CheckoutForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fill in all required fields correctly.");
      return;
    }
    setErrors({});
    const orderNumber = `GB-${Date.now().toString(36).toUpperCase()}`;
    dispatch(clearCart());
    navigate(
      `/order-success?order=${encodeURIComponent(orderNumber)}&email=${encodeURIComponent(form.email)}&name=${encodeURIComponent(form.firstName)}&total=${total.toFixed(2)}&shipping=${shipping}`,
    );
  };

  const inputClass = (field: keyof CheckoutForm) =>
    `w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? "border-destructive focus:ring-destructive/30"
        : "border-input focus:ring-ring"
    }`;

  return (
    <Layout>
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <Link
            to="/cart"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Cart
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-display text-xl font-bold mb-5">
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        First Name *
                      </label>
                      <input
                        value={form.firstName}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                        className={inputClass("firstName")}
                        placeholder="Jane"
                      />
                      {errors.firstName && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Last Name *
                      </label>
                      <input
                        value={form.lastName}
                        onChange={(e) =>
                          updateField("lastName", e.target.value)
                        }
                        className={inputClass("lastName")}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={inputClass("email")}
                        placeholder="jane@example.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={inputClass("phone")}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-display text-xl font-bold mb-5">
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Street Address *
                      </label>
                      <input
                        value={form.address}
                        onChange={(e) => updateField("address", e.target.value)}
                        className={inputClass("address")}
                        placeholder="123 Beauty Lane"
                      />
                      {errors.address && (
                        <p className="text-xs text-destructive mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          City *
                        </label>
                        <input
                          value={form.city}
                          onChange={(e) => updateField("city", e.target.value)}
                          className={inputClass("city")}
                          placeholder="Los Angeles"
                        />
                        {errors.city && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          State / Province *
                        </label>
                        <input
                          value={form.state}
                          onChange={(e) => updateField("state", e.target.value)}
                          className={inputClass("state")}
                          placeholder="California"
                        />
                        {errors.state && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.state}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          ZIP / Postal Code *
                        </label>
                        <input
                          value={form.zipCode}
                          onChange={(e) =>
                            updateField("zipCode", e.target.value)
                          }
                          className={inputClass("zipCode")}
                          placeholder="90001"
                        />
                        {errors.zipCode && (
                          <p className="text-xs text-destructive mt-1">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          Country *
                        </label>
                        <select
                          value={form.country}
                          onChange={(e) =>
                            updateField("country", e.target.value)
                          }
                          className={inputClass("country")}
                        >
                          {[
                            "United States",
                            "Canada",
                            "United Kingdom",
                            "Australia",
                            "Germany",
                            "France",
                            "Japan",
                            "Other",
                          ].map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-display text-xl font-bold mb-5">
                    Shipping Method
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        value: "standard" as const,
                        label: "Standard Shipping",
                        desc: "3-5 business days",
                        price: subtotal >= 50 ? "Free" : "$5.99",
                      },
                      {
                        value: "express" as const,
                        label: "Express Shipping",
                        desc: "1-2 business days",
                        price: "$12.99",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                          shipping === opt.value
                            ? "border-primary bg-primary/5"
                            : "border-input hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${shipping === opt.value ? "border-primary" : "border-input"}`}
                          >
                            {shipping === opt.value && (
                              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{opt.label}</p>
                            <p className="text-xs text-muted-foreground">
                              {opt.desc}
                            </p>
                          </div>
                        </div>
                        <span className="font-semibold text-sm">
                          {opt.price}
                        </span>
                        <input
                          type="radio"
                          name="shipping"
                          value={opt.value}
                          checked={shipping === opt.value}
                          onChange={() => setShipping(opt.value)}
                          className="sr-only"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h2 className="font-display text-xl font-bold mb-5">
                    Order Notes (Optional)
                  </h2>
                  <textarea
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    rows={3}
                    placeholder="Special instructions for your order..."
                    maxLength={500}
                  />
                </div>
              </div>

              {/* Right: Order Summary */}
              <div>
                <div className="bg-card rounded-xl p-6 border border-border sticky top-24">
                  <h2 className="font-display text-xl font-bold mb-5">
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
                            {item.quantity}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2.5 text-sm border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shippingCost === 0
                          ? "Free"
                          : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-2.5 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-primary text-primary-foreground py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" /> Place Order
                  </button>

                  <div className="mt-5 space-y-2.5">
                    {[
                      { icon: Truck, text: "Free shipping on orders over $50" },
                      {
                        icon: Shield,
                        text: "Secure checkout & data protection",
                      },
                    ].map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" /> {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
