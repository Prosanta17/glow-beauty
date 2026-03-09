export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1, title: "10 Skincare Tips for Glowing Skin", excerpt: "Discover the secrets to achieving radiant, glowing skin with these expert-approved tips.",
    content: "Getting that coveted glow isn't just about the products you use—it's about building a consistent routine that works for your skin type. Start with a gentle cleanser, follow with a vitamin C serum, and never skip sunscreen. Hydration is key both internally and externally. Drink at least 8 glasses of water daily and use a hyaluronic acid-based moisturizer. Exfoliate 2-3 times a week to remove dead skin cells. Get enough sleep—your skin repairs itself overnight. Consider adding retinol to your nighttime routine for anti-aging benefits. Don't forget your neck and décolletage. Lastly, manage stress through meditation or exercise, as stress hormones can wreak havoc on your skin.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=400&fit=crop",
    author: "Dr. Sarah Chen", date: "March 5, 2026", category: "Skincare"
  },
  {
    id: 2, title: "Spring Makeup Trends 2026", excerpt: "From dewy skin to bold lips, here are the makeup trends dominating this spring season.",
    content: "This spring is all about embracing your natural beauty with a modern twist. The 'glass skin' look continues to trend, with lightweight foundations and illuminating primers taking center stage. Bold lip colors are back—think coral, fuchsia, and berry shades. Graphic eyeliner in unexpected colors adds an artistic touch. Cream blushes applied on the high points of the cheeks create a fresh, youthful flush. Feathered brows remain popular, giving a soft, natural frame to the face. Don't be afraid to play with color on your eyes—pastel shadows in lavender and mint are everywhere this season.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop",
    author: "Mia Rodriguez", date: "February 28, 2026", category: "Makeup"
  },
  {
    id: 3, title: "The Ultimate Guide to Hair Oils", excerpt: "Learn how to choose and use hair oils for maximum shine, strength, and growth.",
    content: "Hair oils have been used for centuries across cultures for their nourishing and restorative properties. Argan oil is perfect for taming frizz and adding shine without heaviness. Coconut oil penetrates deep into the hair shaft for intense moisture. Jojoba oil mimics your scalp's natural sebum, making it ideal for scalp health. Castor oil is renowned for promoting hair growth and thickness. Apply oils to damp hair for better absorption, or use as an overnight treatment for deep conditioning. A few drops on dry ends can instantly add polish and prevent breakage.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&h=400&fit=crop",
    author: "Lisa Park", date: "February 20, 2026", category: "Haircare"
  },
  {
    id: 4, title: "Self-Care Sunday: Bath Rituals", excerpt: "Transform your bath time into a luxurious self-care ritual with these simple ideas.",
    content: "Your bathroom can become your personal spa with just a few thoughtful additions. Start by setting the mood—dim the lights, light some candles, and play calming music. Add bath bombs or bath salts infused with essential oils like lavender or eucalyptus. Use a dry brush before getting in to exfoliate and stimulate circulation. Apply a face mask while you soak. Keep the water temperature warm but not too hot. After your bath, apply body butter while your skin is still damp to lock in moisture. End with a cup of herbal tea and some quiet time.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=400&fit=crop",
    author: "Emma Williams", date: "February 15, 2026", category: "Wellness"
  },
];
