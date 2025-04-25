// app/contact/page.tsx
import ContactPageClient from "./ContactPageClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Have questions about Sikkim Rising Star? Contact our team for event registrations, sponsorship opportunities, or general inquiries. We're here to help!",
  openGraph: {
    title: "Contact Sikkim Rising Star",
    description: "Reach out to us for event registrations, sponsorships, or any questions about Sikkim Rising Star. Our team is ready to assist you.",
    images: [{ url: "/s4 main.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://sikkimrisingstar.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
