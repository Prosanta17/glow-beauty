import Layout from "../components/Layout";
import { blogPosts } from "../data/blog";
import { Link } from "react-router-dom";

const Blog = () => (
  <Layout>
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Beauty Blog</h1>
          <p className="text-muted-foreground">
            Tips, trends, and beauty inspiration
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group">
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-primary font-semibold uppercase tracking-widest">
                {post.category}
              </span>
              <h2 className="font-display text-xl font-bold mt-1 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-3">
                {post.excerpt}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.author} · {post.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
