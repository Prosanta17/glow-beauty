import Layout from "../components/Layout";

const Terms = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: March 1, 2026</p>
          <h2 className="text-xl font-bold text-foreground font-display">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using GlowBeauty's website, you agree to be bound
            by these terms and conditions. If you do not agree, please do not
            use our website.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            2. Products & Pricing
          </h2>
          <p>
            All product descriptions and prices are subject to change without
            notice. We reserve the right to limit quantities and refuse any
            order. Colors may vary slightly from images shown.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            3. Orders & Payment
          </h2>
          <p>
            By placing an order, you represent that the information provided is
            accurate. We accept major credit cards and other payment methods as
            displayed at checkout.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            4. Shipping & Delivery
          </h2>
          <p>
            Shipping times are estimates and not guaranteed. GlowBeauty is not
            responsible for delays caused by carriers or customs processing for
            international orders.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            5. Returns & Refunds
          </h2>
          <p>
            Unused products may be returned within 30 days of delivery for a
            full refund. Products must be in original, unopened packaging.
            Shipping costs for returns are the customer's responsibility.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            6. Intellectual Property
          </h2>
          <p>
            All content on this website, including text, images, logos, and
            designs, is the property of GlowBeauty and is protected by
            intellectual property laws.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;
