export interface BlogPost {
  id: string
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
  }
}
