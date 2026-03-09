export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  image: string;
  images?: string[];
  badge?: string;
  inStock: boolean;
}

export const categories = [
  { id: 1, name: "Skincare", image: "https://plus.unsplash.com/premium_photo-1682095956520-ddda6959da80?w=896&auto=format&fit=crop&q=80", count: 24 },
  { id: 2, name: "Makeup", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", count: 36 },
  { id: 3, name: "Haircare", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop", count: 18 },
  { id: 4, name: "Fragrance", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop", count: 12 },
  { id: 5, name: "Bath & Body", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", count: 20 },
  { id: 6, name: "Tools", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop", count: 15 },
];

export const products: Product[] = [
  {
    id: 1, name: "Rose Glow Serum", price: 48, originalPrice: 65, rating: 4.8, reviews: 234,
    description: "A luxurious vitamin C serum infused with rose extract that brightens and hydrates your skin for a natural glow. Lightweight, fast-absorbing formula suitable for all skin types.",
    category: "Skincare", badge: "Bestseller", inStock: true,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop", "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop"]
  },
  {
    id: 2, name: "Velvet Matte Lipstick", price: 24, rating: 4.6, reviews: 189,
    description: "Long-lasting velvet matte finish lipstick in a stunning rose shade. Enriched with shea butter for comfort all day.",
    category: "Makeup", badge: "New", inStock: true,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop"]
  },
  {
    id: 3, name: "Hydra Boost Moisturizer", price: 38, rating: 4.9, reviews: 312,
    description: "Intense hydration with hyaluronic acid and ceramides. Locks in moisture for up to 72 hours.",
    category: "Skincare", badge: "Bestseller", inStock: true,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop"]
  },
  {
    id: 4, name: "Silk Hair Oil", price: 32, originalPrice: 42, rating: 4.7, reviews: 156,
    description: "Lightweight argan oil blend that tames frizz and adds brilliant shine without weighing hair down.",
    category: "Haircare", inStock: true,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&h=600&fit=crop"]
  },
  {
    id: 5, name: "Bloom Eau de Parfum", price: 85, rating: 4.5, reviews: 98,
    description: "A captivating floral fragrance with notes of jasmine, peony, and sandalwood. Perfect for evening wear.",
    category: "Fragrance", badge: "Luxury", inStock: true,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop"]
  },
  {
    id: 6, name: "Glow Foundation", price: 36, rating: 4.4, reviews: 267,
    description: "Buildable medium coverage foundation with a luminous finish. Infused with skincare ingredients.",
    category: "Makeup", inStock: true,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&h=600&fit=crop"]
  },
  {
    id: 7, name: "Lavender Bath Bombs", price: 18, rating: 4.8, reviews: 421,
    description: "Set of 6 handcrafted lavender bath bombs with essential oils. Transform your bath into a spa experience.",
    category: "Bath & Body", badge: "Popular", inStock: true,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop"]
  },
  {
    id: 8, name: "Pro Makeup Brush Set", price: 55, originalPrice: 75, rating: 4.7, reviews: 183,
    description: "12-piece professional makeup brush set with synthetic bristles and a premium vegan leather case.",
    category: "Tools", inStock: true,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop"]
  },
  {
    id: 9, name: "Retinol Night Cream", price: 52, rating: 4.6, reviews: 145,
    description: "Advanced retinol formula for overnight skin renewal. Wake up with smoother, brighter skin.",
    category: "Skincare", badge: "New", inStock: true,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1570194065650-d99fb4ee4037?w=600&h=600&fit=crop"]
  },
  {
    id: 10, name: "Coconut Body Butter", price: 22, rating: 4.9, reviews: 378,
    description: "Rich and creamy body butter with organic coconut oil. Deeply nourishes and softens dry skin.",
    category: "Bath & Body", inStock: true,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop"]
  },
  {
    id: 11, name: "Volume Boost Shampoo", price: 28, rating: 4.3, reviews: 201,
    description: "Sulfate-free shampoo that adds incredible volume and body to fine, limp hair.",
    category: "Haircare", inStock: true,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=500&h=500&fit=crop",
    images: ["https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&h=600&fit=crop"]
  },
  {
    id: 12, name: "Eye Shadow Palette", price: 42, originalPrice: 56, rating: 4.8, reviews: 329,
    description: "18 highly pigmented shades in matte, shimmer, and metallic finishes. Blends effortlessly.",
    category: "Makeup", badge: "Sale", inStock: true,
    image: "https://plus.unsplash.com/premium_photo-1682095956520-ddda6959da80?w=896&auto=format&fit=crop&q=80",
    images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"]
  },
];

export const testimonials = [
  { id: 1, name: "Sarah M.", text: "The Rose Glow Serum has completely transformed my skin! I've never received so many compliments.", rating: 5, avatar: "SM" },
  { id: 2, name: "Emily R.", text: "Best beauty brand I've ever tried. The quality is outstanding and shipping is always fast.", rating: 5, avatar: "ER" },
  { id: 3, name: "Jessica L.", text: "I'm obsessed with the Velvet Matte Lipstick. It lasts all day and the color is gorgeous!", rating: 4, avatar: "JL" },
  { id: 4, name: "Amanda K.", text: "The moisturizer is a game-changer for my dry skin. So hydrating without being greasy.", rating: 5, avatar: "AK" },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
];
