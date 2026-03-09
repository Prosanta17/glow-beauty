import Layout from "../components/Layout";
import { blogPosts } from "../data/blog";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post)
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="text-sm text-primary hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <span className="text-xs text-primary font-semibold uppercase tracking-widest block mb-2">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">
            {post.author} · {post.date}
          </p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
          />
          <div className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetails;
