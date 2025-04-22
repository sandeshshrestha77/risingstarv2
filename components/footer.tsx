"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const [showQR, setShowQR] = useState(false);

  return (
    <footer className="w-full bg-secondary text-white border-t border-gray-800 z-50">
      <div className="container flex flex-col gap-10 px-4 py-10 md:grid md:grid-cols-4">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image
              src="/logo.png" 
              alt="SIKKIM Rising Star Logo" 
              className="h-auto max-h-12 mix-blend-screen"
              width={120} 
              height={256}
            />
          </Link>
          <p className="text-gray-300 mb-4">
            Sikkim's Premier Talent Hunt Competition since 2018.
          </p>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/sikkimrisingstar/" aria-label="Facebook" className="text-gray-300 hover:text-primary hover:scale-110 transition">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/sikkimrisingstar_official_/" aria-label="Instagram" className="text-gray-300 hover:text-primary hover:scale-110 transition">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://youtube.com/@sikkimrisingstar" aria-label="Youtube" className="text-gray-300 hover:text-primary hover:scale-110 transition">
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
            <p>Indira Bypass Road, Gangtok, East Sikkim</p>
            <p>
              <a href="tel:+919734013211" className="hover:text-primary">
                +91 9734013211 / 8918215965
              </a>
            </p>
            <p>
              <a href="mailto:sikkimrisingstar@gmail.com" className="hover:text-primary">
                sikkimrisingstar@gmail.com
              </a>
            </p>
          </address>
        </div>

        {/* Payment */}
        <div>
          <h3 className="text-lg font-semibold mb-4 hover:underline">Payment Method</h3>
          <Image
            src="/phonepe.svg"
            alt="PhonePe"
            width={120}
            height={120}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowQR(true)}
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-6 container px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sikkim Rising Star. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>

      {/* Credits */}
      <div className="text-center text-gray-400 text-sm mt-4 pb-6">
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

      {/* QR Modal */}
      {showQR && <QRModal onClose={() => setShowQR(false)} />}
    </footer>
  );
}

// QR Modal
function QRModal({ onClose }: { onClose: () => void }) {
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
        <h2 className="text-lg font-bold mb-4 text-black">Scan to Pay via PhonePe</h2>
        <Image
          src="/qr-phonepe.png"
          alt="PhonePe QR Code"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
