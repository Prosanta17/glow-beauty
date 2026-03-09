import Layout from "../components/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Package, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const OrderSuccess = () => {
  const [params] = useSearchParams();
  const orderNumber = params.get("order") || "GB-XXXXXX";
  const email = params.get("email") || "your email";
  const name = params.get("name") || "Customer";
  const total = params.get("total") || "0.00";
  const shipping = params.get("shipping") || "standard";

  const estimatedDelivery =
    shipping === "express" ? "1-2 business days" : "3-5 business days";

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Thank you, {name}! Your order has been placed successfully.
            </p>

            <div className="bg-card rounded-xl border border-border p-6 md:p-8 text-left mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Order Number
                  </p>
                  <p className="font-display text-xl font-bold text-primary">
                    {orderNumber}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Total Amount
                  </p>
                  <p className="font-display text-xl font-bold">${total}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Estimated Delivery
                  </p>
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary" />
                    <p className="font-semibold">{estimatedDelivery}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                    Confirmation Sent To
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <p className="font-semibold text-sm break-all">{email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-card rounded-xl border border-border p-6 md:p-8 mb-8">
              <h2 className="font-display text-lg font-bold mb-5 text-left">
                What's Next?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Order Confirmed",
                    desc: "We've received your order and are preparing it.",
                    active: true,
                  },
                  {
                    step: 2,
                    title: "Processing",
                    desc: "Your items are being carefully packed.",
                    active: false,
                  },
                  {
                    step: 3,
                    title: "Shipped",
                    desc: "Your package is on its way!",
                    active: false,
                  },
                  {
                    step: 4,
                    title: "Delivered",
                    desc: "Enjoy your GlowBeauty products!",
                    active: false,
                  },
                ].map(({ step, title, desc, active }) => (
                  <div key={step} className="flex gap-4 items-start">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step}
                    </div>
                    <div className="text-left">
                      <p
                        className={`font-semibold text-sm ${active ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {title}
                      </p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-input text-foreground px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OrderSuccess;
