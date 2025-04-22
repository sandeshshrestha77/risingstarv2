
import { BlogPost } from "@/types/blog";

const blogPosts: BlogPost[] = [
  {
    "id": "1",
    "title": "Season 4 Announced – Bigger and Better Than Ever",
    "slug": "season-4-announced",
    "date": "April 22, 2025",
    "category": "Announcements",
    "excerpt": "Sikkim Rising Star returns with its biggest season yet. Here's what to expect.",
    "content": `
      <p>The stage is set. The spotlight is on. Sikkim Rising Star Season 4 is officially here—and it's bigger, bolder, and brimming with talent!</p>
  
      <h2>Registration Now Open</h2>
      <p>Registrations for Season 4 are now open! Whether you're a singer, dancer, actor, rapper, or have a unique talent, this is your chance to shine. The competition is fierce, and the spotlight awaits!</p>
  
      <h2>Audition Dates</h2>
      <p>Mark your calendars! Auditions are scheduled for:</p>
      <ul>
        <li><strong>June 7, 2025</strong></li>
        <li><strong>June 8, 2025</strong></li>
      </ul>
      <p>Prepare your best performance and get ready to showcase your talent to the world.</p>
  
      <h2>Competition Format</h2>
      <p>Season 4 introduces an exciting new format:</p>
      <ul>
        <li>Multiple performance categories</li>
        <li>Enhanced judging criteria</li>
        <li>Live audience voting</li>
        <li>Exclusive mentorship opportunities</li>
      </ul>
      <p>This revamped format ensures a dynamic and engaging experience for both participants and viewers.</p>
  
      <h2>Get Ready to Shine</h2>
      <p>The wait is almost over! Sikkim Rising Star Season 4 is just around the corner. Stay tuned for more updates and get ready to witness the rise of new stars!</p>
    `,
    "image": "/s4 main.jpg",
    "author": {
      "name": "Sikkim Rising Star Team",
      "avatar": "/favicon.ico"
    }
  }
];
  
export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  // First try to find by explicit slug
  const post = blogPosts.find(post => post.slug === slug);
  if (post) return post;

  // Fallback to creating slug from title
  return blogPosts.find(post => {
    const generatedSlug = post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    return generatedSlug === slug;
  });
}

export function getRecentBlogPosts(count: number = 3) {
  // Calculate date from 7 days ago
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  // Filter posts from last 7 days
  const recentPosts = blogPosts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= sevenDaysAgo;
  });
  
  // If no posts in last 7 days, return the most recent posts
  if (recentPosts.length === 0) {
    return blogPosts.slice(0, count);
  }
  
  // Otherwise return the filtered posts, limited by count
  return recentPosts.slice(0, count);
}

export function getBlogCategories() {
  const categories = new Set<string>();
  blogPosts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories);
}
