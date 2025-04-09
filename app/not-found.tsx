import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="container px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-5xl font-bold">404</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-gray-600 mb-8 text-lg">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="w-full sm:w-auto flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go to Homepage
              </Button>
            </Link>
            
            <Link href="/events">
              <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                <Search className="h-4 w-4" />
                Explore Events
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center">
            <Link href="/" className="text-black hover:text-black/80 inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 