import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarX, ArrowLeft } from "lucide-react";

export default function EventNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-sm text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6">
          <CalendarX className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Event Not Found</h1>
        <p className="mb-8 text-gray-600">
          The event you're looking for doesn't exist or might have been removed.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/events">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
              <ArrowLeft className="h-4 w-4" /> Return to Events
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
