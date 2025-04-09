import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">SIKKIM</span>
              <span className="text-2xl font-bold text-white">TALENT</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Discovering extraordinary talents since 2018. Sikkim's Premier Talent Hunt Competition.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Sikkim Idol
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Dance Competition
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary">
                  Talent Show
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 MG Marg</p>
              <p>Gangtok, Sikkim 737101</p>
              <p>India</p>
              <p className="pt-2">
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 9876543210
                </a>
              </p>
              <p>
                <a href="mailto:info@sikkimtalent.com" className="hover:text-primary">
                  info@sikkimtalent.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sikkim Talent Hunt. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 text-sm hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 text-sm hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
