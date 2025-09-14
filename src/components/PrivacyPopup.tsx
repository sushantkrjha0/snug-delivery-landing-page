"use client"

import { useState } from 'react'
import { X } from 'lucide-react'

interface PrivacyPopupProps {
  isOpen: boolean
  onClose: () => void
}

const PrivacyPopup = ({ isOpen, onClose }: PrivacyPopupProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#8B4513]">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close Privacy Policy"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-4">Last Updated: 25th July 2024</p>
            
            <p className="mb-4">
              At Snug Soft Furnishings (operated by Furnishing Studio Private Limited), we respect your privacy 
              and are committed to protecting your personal information. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website <strong>www.snugfurnishing.com</strong>, 
              visit our showrooms, or use our services.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">1. Information We Collect</h3>

            <h4 className="font-semibold mb-2"><strong>1.1 Personal Information</strong></h4>
            <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Fill out contact forms on our website</li>
              <li>Request quotes or consultations</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Visit our showrooms and provide contact details</li>
              <li>Place orders for our products and services</li>
              <li>Communicate with us via phone, email, or WhatsApp</li>
            </ul>

            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Name and contact information (phone number, email address)</li>
              <li>Residential or business address</li>
              <li>Project details and preferences</li>
              <li>Payment information (processed through secure payment gateways)</li>
              <li>Communication preferences</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>1.2 Automatically Collected Information</strong></h4>
            <p className="mb-3">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">2. How We Use Your Information</h3>

            <p className="mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Service Delivery:</strong> To provide quotes, consultations, product delivery, and installation services</li>
              <li><strong>Communication:</strong> To respond to your inquiries, provide updates, and communicate about your orders</li>
              <li><strong>Customer Support:</strong> To provide technical support and resolve any issues</li>
              <li><strong>Business Operations:</strong> To process payments, schedule appointments, and manage inventory</li>
              <li><strong>Marketing:</strong> To send promotional materials, newsletters, and updates about our services (with your consent)</li>
              <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">3. Information Sharing and Disclosure</h3>

            <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>

            <h4 className="font-semibold mb-2"><strong>3.1 Service Providers</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Trusted partners who assist in delivery, installation, and customer service</li>
              <li>Payment processing companies for secure transactions</li>
              <li>Marketing service providers (only with your explicit consent)</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.2 Legal Requirements</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>When required by law, court order, or government regulation</li>
              <li>To protect our rights, property, or safety, or that of our customers</li>
              <li>In connection with legal proceedings or investigations</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.3 Business Transfers</strong></h4>
            <p className="mb-4">
              In the event of a merger, acquisition, or sale of our business, your information may be 
              transferred as part of that transaction, subject to the same privacy protections.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">4. Data Security</h3>

            <p className="mb-3">We implement appropriate security measures to protect your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Secure servers and encrypted data transmission</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
              <li>Physical security measures at our offices and showrooms</li>
            </ul>

            <p className="mb-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. 
              While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">5. Cookies and Tracking Technologies</h3>

            <p className="mb-3">Our website uses cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Remember your preferences and improve user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide targeted content and advertisements</li>
              <li>Enable social media features and functionality</li>
            </ul>

            <p className="mb-4">
              You can control cookie preferences through your browser settings. However, disabling cookies 
              may affect the functionality of our website.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">6. Data Retention</h3>

            <p className="mb-4">
              We retain your personal information only as long as necessary to fulfill the purposes outlined 
              in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. 
              Typically, we retain customer information for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Active customers:</strong> During the relationship and for 3 years after the last transaction</li>
              <li><strong>Inquiries and quotes:</strong> Up to 2 years for follow-up purposes</li>
              <li><strong>Marketing communications:</strong> Until you unsubscribe or request removal</li>
              <li><strong>Legal requirements:</strong> As required by Indian law (typically 7 years for financial records)</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">7. Your Rights and Choices</h3>

            <p className="mb-3">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Access:</strong> Request copies of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Restriction:</strong> Request limitation on how we process your information</li>
            </ul>

            <p className="mb-4">
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">8. Children&apos;s Privacy</h3>

            <p className="mb-4">
              Our services are not intended for children under the age of 18. We do not knowingly collect 
              personal information from children under 18. If you are a parent or guardian and believe your 
              child has provided us with personal information, please contact us to request deletion.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">9. Third-Party Links</h3>

            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies 
              of any third-party sites you visit.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">10. Changes to This Privacy Policy</h3>

            <p className="mb-4">
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, 
              legal requirements, or other factors. We will notify you of significant changes by posting the 
              updated policy on our website with a new &quot;Last Updated&quot; date. We encourage you to review this 
              policy regularly.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">11. Applicable Law</h3>

            <p className="mb-4">
              This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000, 
              and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal 
              Data or Information) Rules, 2011. Any disputes will be subject to the jurisdiction of courts in 
              Bengaluru, Karnataka.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">12. Contact Information</h3>

            <div className="bg-[#E5E4DF] p-4 rounded-lg mt-6">
              <p className="font-semibold mb-2">If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
              <p className="mb-1"><strong>Furnishing Studio Private Limited (Snug Soft Furnishings)</strong></p>
              <p className="mb-1">📧 Email: furnishingstudio.blr@gmail.com</p>
              <p className="mb-1">📞 Phone: +91 95389 53904</p>
              <p className="mb-1">🏢 Address: <a href="https://maps.app.goo.gl/kLyzYopyMtfUQqir6?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:underline">291/A, 34th Cross, 9th Main, Jayanagar 4th Block, Bengaluru - 560011</a></p>
              <p className="text-sm text-gray-600">Business Hours: Monday - Saturday, 11:00 AM - 7:00 PM</p>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              By using our website and services, you acknowledge that you have read, understood, and agree to 
              the collection, use, and disclosure of your information as described in this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#8B4513] text-white rounded-lg hover:bg-[#7A3E0F] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPopup