"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const [showQR, setShowQR] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<null | "gpay" | "upi" | "visa">(null);

  const handleQRClick = (type: "gpay" | "upi" | "visa") => {
    setSelectedPayment(type);
    setShowQR(true);
  };

  return (
    <footer className="bg-secondary text-white relative">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Sikkim Rising Star Logo"
                width={150}
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Sikkim's Premier Talent Hunt Competition since 2018.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-gray-300 hover:text-primary transition-transform duration-200 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-300 hover:text-primary transition-transform duration-200 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-300 hover:text-primary transition-transform duration-200 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Youtube" className="text-gray-300 hover:text-primary transition-transform duration-200 transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link href="/events" className="text-gray-300 hover:text-primary">Events</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Gangtok, Sikkim 737101</p>
              <p className="pt-1">
                <a href="tel:+919876543210" className="hover:text-primary">
                  +91 9876543210
                </a>
              </p>
              <p>
                <a href="mailto:sikkimrisingstar@gmail.com" className="hover:text-primary">
                  sikkimrisingstar@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Payment Options */}
          <div>
            <h3 className="text-lg font-semibold mb-4 hover:underline">Payment Options</h3>
            <div className="flex space-x-4 items-center">
              <Image
                src="/google-pay.svg"
                alt="Google Pay"
                width={40}
                height={40}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleQRClick("gpay")}
              />
              <Image
                src="/upi.svg"
                alt="UPI"
                width={40}
                height={40}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleQRClick("upi")}
              />
              <Image
                src="/visa.svg"
                alt="Visa"
                width={40}
                height={40}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => handleQRClick("visa")}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary">Terms of Service</Link>
          </div>
        </div>

        {/* Credits */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://www.sandeshshrestha.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Sandesh
          </a>
        </div>
      </div>

      {/* QR Modal */}
      {showQR && selectedPayment && (
        <QRModal method={selectedPayment} onClose={() => setShowQR(false)} />
      )}
    </footer>
  );
}

// QR Modal Component
function QRModal({
  method,
  onClose,
}: {
  method: "gpay" | "upi" | "visa";
  onClose: () => void;
}) {
  const qrMap = {
    gpay: "/qr-gpay.png",
    upi: "/qr-upi.png",
    visa: "/qr-visa.png",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 text-center relative w-[300px] animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4 text-black capitalize">Scan to Pay via {method}</h2>
        <Image
          src={qrMap[method]}
          alt={`${method} QR Code`}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
