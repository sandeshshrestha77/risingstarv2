import Link from "next/link"
import { ArrowLeft, FileText, UserCheck, Award, Camera, Copyright, Scale, ShieldAlert, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <>
      {/* Back to home and TOC navigation */}
      <div className="container px-4 py-6 sticky top-0 bg-white z-20 border-b flex justify-between items-center">
        <Link href="/" className="text-secondary hover:text-secondary/80 inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <div className="flex items-center gap-4">
          <Link href="#eligibility" className="text-sm text-gray-600 hover:text-secondary">Eligibility</Link>
          <Link href="#registration" className="text-sm text-gray-600 hover:text-secondary">Registration</Link>
          <Link href="#content" className="text-sm text-gray-600 hover:text-secondary">Content</Link>
          <Link href="#liability" className="text-sm text-gray-600 hover:text-secondary">Liability</Link>
        </div>
      </div>
      
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
                    By accessing or using our website, registering for our events, or utilizing our services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
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
                    Our events are generally open to participants aged 16 and above, unless otherwise specified for a particular event. Participants under 18 must have parental or guardian consent to participate.
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
                    To participate in our events, you may be required to register and provide certain information. You agree to provide accurate, current, and complete information during the registration process.
                  </p>
                  <p>
                    Registration fees, where applicable, are non-refundable except in specific circumstances as described in individual event policies.
                  </p>
                  <p>
                    We reserve the right to deny participation to anyone who violates these Terms or engages in disruptive or inappropriate behavior during events.
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
                    By submitting content (such as photos, videos, or audio recordings) to us, you grant Sikkim Rising Star a non-exclusive, royalty-free, perpetual, worldwide license to use, reproduce, modify, publish, and distribute such content for promotional, documentation, and archival purposes.
                  </p>
                  <p>
                    You represent and warrant that any content you submit:
                  </p>
                  <ul>
                    <li>Does not violate any third-party rights, including copyright, trademark, or privacy rights</li>
                    <li>Is not false, misleading, or defamatory</li>
                    <li>Does not contain inappropriate or offensive material</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 mb-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Copyright className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mt-0">Intellectual Property</h2>
                  <p>
                    The Sikkim Rising Star name, logo, website, and all content, designs, graphics, and other materials related to our events are protected by intellectual property laws. You may not use, reproduce, or distribute our intellectual property without our express written permission.
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
                  <h2 className="text-2xl font-bold mt-0">Event Rules and Judging</h2>
                  <p>
                    Each event has specific rules and judging criteria that will be communicated to participants. Judges' decisions are final and not subject to appeal.
                  </p>
                  <p>
                    We reserve the right to modify event rules, schedules, or procedures as necessary, with reasonable notice to participants.
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
                    To the fullest extent permitted by law, Sikkim Rising Star shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                  </p>
                  <h3 className="text-xl font-bold mt-4">Indemnification</h3>
                  <p>
                    You agree to indemnify and hold harmless Sikkim Rising Star and its affiliates, officers, employees, and partners from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these Terms.
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
                    We may modify these Terms at any time by posting the revised terms on our website. Your continued use of our services after any changes indicates your acceptance of the modified Terms.
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
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-secondary/5 rounded-xl border border-secondary/10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-medium text-gray-900">Email Us</h3>
                  <a href="mailto:info@sikkimrisingstar.com" className="text-secondary hover:underline">info@sikkimrisingstar.com</a>
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