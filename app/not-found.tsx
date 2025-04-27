import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-secondary/5">
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event Not Found"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 px-8 py-16 flex flex-col justify-center items-center text-center">
        <div className="inline-block rounded-full bg-primary/10 p-6 mb-6">
          <span className="text-6xl font-bold text-primary">404</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
          Sorry chief, the page you're looking for got lost in the crowd. But hey, maybe you'll find something cool at our events!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="w-full sm:w-auto gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Link href="/events">
            <Button variant="outline" className="w-full sm:w-auto">
              Explore Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}