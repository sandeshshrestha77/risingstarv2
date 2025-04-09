import Link from "next/link"
import { ArrowLeft, Shield, Eye, Users, Lock, RefreshCw, Bell, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <>
      {/* Back to home and TOC navigation */}
      <div className="container px-4 py-6 sticky top-0 bg-white z-20 border-b flex justify-between items-center">
        <Link href="/" className="text-black hover:text-black/80 inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#information" className="text-sm text-gray-600 hover:text-black">Information</Link>
          <Link href="#use" className="text-sm text-gray-600 hover:text-black">Usage</Link>
          <Link href="#sharing" className="text-sm text-gray-600 hover:text-black">Sharing</Link>
          <Link href="#rights" className="text-sm text-gray-600 hover:text-black">Your Rights</Link>
        </div>
      </div>
      
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <Link href="/terms">
              <Button variant="outline" size="sm">View Terms of Service</Button>
            </Link>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              At Sikkim Rising Star, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our events.
            </p>
            
            <div id="information" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Information We Collect</h2>
                  <p>
                    We may collect personal information that you voluntarily provide to us when you register for events, sign up for our newsletter, or contact us. This information may include:
                  </p>
                  <ul>
                    <li>Name, email address, and contact information</li>
                    <li>Age and gender</li>
                    <li>Performance details and media (photos, videos, etc.)</li>
                    <li>Information about your device and internet connection</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="use" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <FileCheck className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">How We Use Your Information</h2>
                  <p>The information we collect may be used to:</p>
                  <ul>
                    <li>Process and manage your event registration</li>
                    <li>Communicate with you about our events and services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Respond to your inquiries</li>
                    <li>Provide marketing content that may be of interest to you (with your consent)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div id="sharing" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Sharing of Information</h2>
                  <p>
                    We may share your information with third parties only in the ways described in this Privacy Policy:
                  </p>
                  <ul>
                    <li>With event sponsors and partners</li>
                    <li>With service providers who help us operate our website and events</li>
                    <li>To comply with legal requirements</li>
                    <li>With your consent</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Bell className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our website and improve your experience. You can disable cookies through your browser settings, but doing so may affect your ability to use certain features of our website.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Lock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="rights" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Your Rights</h2>
                  <p>
                    Depending on your location, you may have rights regarding your personal information, including:
                  </p>
                  <ul>
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to restrict or object to processing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-black/10 p-3 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Changes to This Privacy Policy</h2>
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-black/5 rounded-xl border border-black/10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <a href="mailto:info@sikkimrisingstar.com" className="text-black hover:underline">info@sikkimrisingstar.com</a>
                </div>
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900">Call Us</h3>
                  <a href="tel:+919876543210" className="text-black hover:underline">+91 9876543210</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 