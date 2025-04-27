import Link from "next/link"
import { ArrowLeft, FileText, UserCheck, Award, Camera, Copyright, Scale, ShieldAlert, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <>
      <div className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <Link href="/privacy">
              <Button variant="outline" size="sm">View Privacy Policy</Button>
            </Link>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">
              Please read these Terms of Service ("Terms") carefully before using the Sikkim Rising Star website or participating in our events.
            </p>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Acceptance of Terms</h2>
                  <p>
                    By accessing or using the Sikkim Rising Star website or participating in any related events, users agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should refrain from using the site or participating in the event.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="eligibility" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <UserCheck className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Eligibility</h2>
                  <p>
                    Participation in Sikkim Rising Star events is open to individuals who meet the age, location, and talent requirements as outlined during the registration process. Providing false or misleading information during registration may lead to disqualification.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="registration" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Registration and Participation</h2>
                  <p>
                    Participants must provide accurate, complete, and current information during registration. Participants must comply with all event rules and guidelines as communicated by Sikkim Rising Star.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="content" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Camera className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Content Submission</h2>
                  <p>
                    By submitting content (such as videos, photos, or performances), participants grant Sikkim Rising Star a non-exclusive, royalty-free right to use, reproduce, and display the content for promotional, marketing, or archival purposes. All content must be original and not infringe upon third-party rights.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Indemnification</h2>
                  <p>
                    Participants agree to indemnify and hold harmless Sikkim Rising Star, its team, and partners from any claims, damages, losses, or liabilities arising from their participation or actions during the event.
                  </p>
                </div>
              </div>
            </div>
            
            <div id="liability" className="scroll-mt-24 mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <ShieldAlert className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Limitation of Liability</h2>
                  <p>
                    Sikkim Rising Star will not be held liable for any direct, indirect, incidental, or consequential damages arising from participation in the competition or use of the website. Users participate at their own risk.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <RefreshCw className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Modification of Terms</h2>
                  <p>
                    Sikkim Rising Star reserves the right to update or modify these Terms of Service at any time without prior notice. Continued use of the website or participation in the event constitutes acceptance of the revised terms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Scale className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Governing Law</h2>
                  <p>
                    These Terms of Service are governed by the laws of Sikkim, India. Any disputes arising in connection with the terms will be subject to the exclusive jurisdiction of the courts in Sikkim.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-secondary/5 rounded-xl border border-secondary/10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                For any questions or concerns regarding these Terms of Service, users may contact the organizing team through the official contact details provided on the website.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <a href="mailto:info@sikkimrisingstar.com" className="text-secondary hover:underline">sikkimrisingstar@gmail.com</a>
                </div>
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900">Call Us</h3>
                  <a href="tel:+919876543210" className="text-secondary hover:underline">+91 9876543210</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
