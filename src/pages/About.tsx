import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              About GlowBeauty
            </h1>
            <p className="text-muted-foreground text-lg">
              Where beauty meets consciousness
            </p>
          </div>
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=400&fit=crop"
              alt="Our story"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Our Story
            </h2>
            <p>
              GlowBeauty was born from a simple belief: everyone deserves access
              to premium beauty products that are both effective and kind to the
              planet. Founded in 2020, we've grown from a small passion project
              into a beloved beauty brand trusted by thousands.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Our Mission
            </h2>
            <p>
              We're committed to creating clean, cruelty-free beauty products
              using the finest natural ingredients. Every product in our
              collection is thoughtfully formulated, rigorously tested, and
              beautifully designed to elevate your daily routine.
            </p>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6 not-prose">
              {[
                {
                  title: "Clean Beauty",
                  desc: "No harmful chemicals, parabens, or sulfates.",
                },
                {
                  title: "Cruelty-Free",
                  desc: "Never tested on animals. Certified and proud.",
                },
                {
                  title: "Sustainable",
                  desc: "Eco-friendly packaging and responsible sourcing.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-card p-6 rounded-xl text-center border border-border"
                >
                  <h3 className="font-display font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
