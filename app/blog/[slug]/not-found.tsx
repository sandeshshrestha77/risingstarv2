
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileX, ArrowLeft } from "lucide-react";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6">
          <FileX className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Blog Post Not Found</h1>
        <p className="mb-8 text-gray-600">
          The blog post you're looking for doesn't exist or might have been moved.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/blog">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
              <ArrowLeft className="h-4 w-4" /> Return to Blog
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
