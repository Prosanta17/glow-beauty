import Layout from "../components/Layout";

const Privacy = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: March 1, 2026</p>
          <h2 className="text-xl font-bold text-foreground font-display">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly, including name, email,
            shipping address, and payment information when you make a purchase.
            We also collect browsing data through cookies.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            2. How We Use Your Information
          </h2>
          <p>
            We use your information to process orders, communicate about
            products and services, personalize your experience, and improve our
            website and offerings.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            3. Information Sharing
          </h2>
          <p>
            We do not sell your personal information. We share data only with
            service providers who help us operate (payment processors, shipping
            partners) and when required by law.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            4. Data Security
          </h2>
          <p>
            We implement industry-standard security measures to protect your
            data. All transactions are encrypted using SSL technology.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            5. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            Contact us at privacy@glowbeauty.com to exercise these rights.
          </p>
          <h2 className="text-xl font-bold text-foreground font-display">
            6. Contact Us
          </h2>
          <p>
            For questions about this policy, email us at privacy@glowbeauty.com
            or write to 123 Beauty Lane, Suite 100, Los Angeles, CA 90001.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;
