import Layout from "../components/Layout";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy on all unused products in their original packaging. Simply contact our customer support to initiate a return.",
  },
  {
    q: "Are your products cruelty-free?",
    a: "Yes! All GlowBeauty products are 100% cruelty-free and never tested on animals. We are certified by Leaping Bunny.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business day delivery. Free shipping on orders over $50.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a confirmation email with a tracking number. You can track your package through our website or the carrier's site.",
  },
  {
    q: "Are your products suitable for sensitive skin?",
    a: "Many of our products are formulated for sensitive skin. Look for the 'Sensitive Skin Friendly' badge on product pages. We always recommend doing a patch test.",
  },
  {
    q: "Do you have a loyalty program?",
    a: "Yes! Join GlowRewards to earn points on every purchase. Points can be redeemed for discounts, free products, and exclusive early access to new launches.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground">
              Find answers to common questions
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold hover:text-primary transition-colors"
                >
                  {faq.q}
                  {open === i ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" />
                  )}
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
