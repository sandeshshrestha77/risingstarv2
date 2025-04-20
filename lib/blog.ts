
import { BlogPost } from "@/types/blog";

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Behind the Scenes: What It Takes to Produce Sikkim Rising Star",
    slug: "behind-the-scenes-what-it-takes-to-produce-sikkim-rising-star",
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    category: "Production",
    excerpt: "A look at the massive effort that goes into producing Sikkim's biggest talent competition.",
    content: `
      <p>While audiences see the polished performances on stage, there's an enormous amount of work that happens behind the scenes to make Sikkim Rising Star possible. From logistics to technical setup, here's a glimpse into what it takes to produce the state's premier talent competition:</p>

      <h2>The Year-Round Planning</h2>
      <p>Contrary to what many believe, planning for Sikkim Rising Star is a year-round process. "As soon as one season wraps, we're already planning for the next," explains Dichen Wangmo, the event's Executive Producer. "We review what worked, what didn't, and start sketching out improvements for the next season."</p>

      <p>The core team meets monthly during the off-season and weekly as the competition approaches. These meetings cover everything from venue selection and sponsorship outreach to rule revisions and marketing strategies.</p>

      <h2>The Audition Tour</h2>
      <p>Organizing auditions across Sikkim's challenging terrain requires careful coordination. The team brings sound equipment, cameras, judges, and support staff to each location, often navigating difficult roads and weather conditions.</p>

      <p>"For remote areas, we sometimes have to start setting up a day in advance," says Technical Director Pemba Tshering. "We've carried equipment on our backs when vehicles couldn't make it all the way to certain villages."</p>

      <p>Each audition day starts at 5 AM for the crew, with setup taking approximately three hours before the first contestant arrives.</p>

      <h2>The Technical Setup</h2>
      <p>The technical requirements for the show have grown substantially over the years. For the finals, the production now uses:</p>
      <ul>
        <li>Over 50 lighting fixtures</li>
        <li>A 24-channel digital mixing console</li>
        <li>6 cameras for broadcast</li>
        <li>A dedicated generator for backup power</li>
        <li>LED screens for visual effects</li>
      </ul>

      <p>"We've had to become experts at working with limited resources," notes Pemba. "We're constantly improvising solutions for technical challenges that bigger productions would solve with money."</p>

      <h2>The Contestant Experience</h2>
      <p>Taking care of contestants is a major focus. The production team arranges accommodations for those traveling from distant areas, provides meals during rehearsals, and offers mentoring sessions with professionals.</p>

      <p>"We want everyone to have a positive experience, regardless of whether they win," emphasizes Contestant Coordinator Yangchen Bhutia. "Many participants are performing on a professional stage for the first time, so we try to make it as supportive an environment as possible."</p>

      <p>Before the finals, contestants receive coaching not just on their performances but also on media interaction, stage presence, and handling nerves.</p>

      <h2>The Financial Reality</h2>
      <p>Producing Sikkim Rising Star requires substantial resources. "In the early years, team members often covered expenses from their own pockets," reveals Finance Manager Karma Tashi. "Now we rely on a combination of ticket sales, sponsorships, and grants."</p>

      <p>The budget for Season 4 is approximately four times larger than Season 1, reflecting the growth of the production. Major expense categories include:</p>
      <ul>
        <li>Technical equipment and venue rental (40%)</li>
        <li>Staffing and professional fees (25%)</li>
        <li>Contestant support and prizes (20%)</li>
        <li>Marketing and promotion (15%)</li>
      </ul>

      <h2>The Broadcast Challenge</h2>
      <p>Adding a broadcast component to recent seasons has created new complexities. "We're essentially producing two shows simultaneously," explains Broadcast Director Tshering Dendup. "There's the live experience for the audience in the venue, and then there's what viewers see at home."</p>

      <p>This requires additional cameras, a separate audio mix, graphics packages, and coordination with the broadcast partner. The team now includes members with television production experience to ensure quality delivery.</p>

      <h2>The Human Element</h2>
      <p>Perhaps most surprisingly, Sikkim Rising Star operates largely through volunteer effort. While key technical roles receive stipends, many team members contribute their time and expertise for the love of the project.</p>

      <p>"We have doctors who take leave to serve as medical support, graphic designers who create our materials after their day jobs, and countless others who believe in what we're building," says Dichen with evident pride.</p>

      <p>This community involvement extends to host families who accommodate contestants from remote areas and local businesses that provide services at reduced rates.</p>

      <h2>The Emotional Rollercoaster</h2>
      <p>What few audience members see is the emotional intensity behind the scenes. "There are moments of incredible stress, like when equipment fails minutes before broadcast or when weather threatens an outdoor event," admits Dichen.</p>

      <p>But these are balanced by profound moments of fulfillment, particularly when seeing how the competition impacts participants' lives. "When a shy teenager from a remote village transforms into a confident performer before our eyes, or when former contestants return as mentors—those moments make all the challenges worthwhile."</p>

      <p>As Sikkim Rising Star continues to grow, the production challenges will increase accordingly. Yet the team remains committed to its core mission: providing a professional platform for Sikkimese talent to shine while maintaining the authentic, community-centered spirit that has made the competition special from the beginning.</p>
    `,
    image: "/season 3/5.jpg",
    author: {
      name: "Sikkim Rising Star Team",
      avatar: "/favicon.ico"
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
