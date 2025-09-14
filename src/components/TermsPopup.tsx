"use client"

import { useState } from 'react'
import { X } from 'lucide-react'

interface TermsPopupProps {
  isOpen: boolean
  onClose: () => void
}

const TermsPopup = ({ isOpen, onClose }: TermsPopupProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#8B4513]">Terms & Conditions</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close Terms & Conditions"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="prose prose-gray max-w-none">
            <p className="text-sm text-gray-600 mb-4">Last Updated: 25th July 2024</p>
            
            <p className="mb-4">
              Welcome to <strong>www.snugfurnishing.com</strong>, the official website of Snug, 
              a furnishing brand owned by Furnishing Studio Private Limited. This website is designed 
              to provide information about our products, services, and brand identity. By accessing 
              or browsing this website, you agree to the following terms and conditions:
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">1. Website Purpose</h3>
            <p className="mb-2"><strong>1.1</strong> The content on this website is purely for informational and promotional purposes.</p>
            <p className="mb-4"><strong>1.2</strong> Snug does not offer direct online purchasing through this platform. All orders, consultations, and purchases are handled via our physical stores or direct contact with our sales team.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">2. Product Information</h3>
            <p className="mb-4">
              At Snug, we offer a curated range of premium furnishings including custom curtains, 
              curtain tracks, blinds, wallpapers, flooring, sofas, bedding and more - tailored to 
              your space and lifestyle. However, certain practical variations may occur during or 
              after installation due to factors beyond our control.
            </p>
            <p className="mb-4 font-medium">Please carefully review the following important notes:</p>

            <h4 className="font-semibold mb-2"><strong>2.1 Fabric & Sample Variations</strong></h4>
            <p className="mb-4">
              Photos, printed catalogues, or even physical samples shown during selection may vary 
              from the final product due to lot/batch variations in fabric, dye, weave, or texture.
            </p>

            <h4 className="font-semibold mb-2"><strong>2.2 Curtain & Blind Operating Systems</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The look, alignment, and operational noise of curtains, curtain tracks, or blinds may differ at the time of installation based on the material, actual site conditions like ceiling level, surface alignment, and installation space.</li>
              <li><strong>Please note:</strong> These aspects cannot always be identified before installation.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>2.3 Wallpaper Appearance</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The final finish and appearance of wallpaper may vary depending on the wall&apos;s base condition, such as dampness, cracks, patchwork, or uneven plastering.</li>
              <li>These surface issues are often visible only after wallpaper installation and are not covered under product issues.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>2.4 Track & Blind Load Capacity</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The holding capacity of curtain rods, tracks, and blinds fully depends on the strength of the wall or ceiling at the site.</li>
              <li>Snug cannot be held responsible for failure due to weak or hollow walls, as this is usually identified only during or after installation.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>2.5 Flooring Undulations</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Minor undulations or unevenness may be visible in flooring (vinyl, SPC, laminated, etc.) if the existing surface is not level or has moisture issues.</li>
              <li>In many cases, such problems only become visible after installation.</li>
            </ul>

            <p className="mb-4 font-medium">
              These are standard conditions in the furnishing industry. By placing an order with Snug, 
              the client acknowledges and accepts these practical variations and limitations, which are 
              often unpredictable until the time of installation.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">3. Order Terms & Payment Policy</h3>

            <h4 className="font-semibold mb-2"><strong>3.1 Payment Terms</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All orders require a minimum of 80% advance payment at the time of confirmation.</li>
              <li>The remaining 20% must be paid before delivery or dispatch of the products to the site.</li>
              <li>Work will only begin after the advance is received. Delivery will not be scheduled without full payment clearance.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.2 Order Cancellation</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Orders once confirmed cannot be cancelled, as we work with made-to-order and customised products.</li>
              <li>No refunds will be issued once production or procurement begins.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.3 Product Availability</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All products are subject to availability at the time of order.</li>
              <li>In rare cases of stock unavailability or discontinuation, alternatives will be suggested. Delivery timelines may be adjusted accordingly.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.4 Delivery Timeline</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Delivery time depends on product type, order volume, and site location.</li>
              <li>A tentative delivery date will be shared at the time of order. However, Snug is not liable for delays caused by unforeseen issues such as transport strikes, courier issues, supplier delays, or natural causes.</li>
            </ul>

            <h4 className="font-semibold mb-2"><strong>3.5 Storage & Holding Policy</strong></h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Once the product is ready for dispatch, it must be delivered within a reasonable time frame.</li>
              <li>Snug cannot hold or store the material for an extended period after it is ready.</li>
              <li>Delayed delivery due to client unavailability, pending site readiness, or non-payment of balance may result in storage charges or risk of material damage, for which Snug is not responsible.</li>
            </ul>

            <p className="mb-4 font-medium">
              By confirming your order, you acknowledge that you have read, understood, and agreed to 
              the above terms. These conditions are standard across the furnishing industry and help 
              us maintain transparency and quality service.
            </p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">4. Service Areas</h3>
            <p className="mb-2"><strong>4.1</strong> Snug currently operates via retail stores and project-based furnishing services. Installation, site visits, and custom orders are handled based on client requirements and location in Bengaluru and surrounding areas.</p>
            <p className="mb-4"><strong>4.2</strong> All design or furnishing consultations are offered by appointment only.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">5. Intellectual Property Rights</h3>
            <p className="mb-2"><strong>5.1</strong> All logos, images, designs, content, and graphics on this site are the exclusive property of Furnishing Studio Private Limited.</p>
            <p className="mb-4"><strong>5.2</strong> Any unauthorized use, reproduction, or distribution of our intellectual property is strictly prohibited and may lead to legal action.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">6. Privacy Policy</h3>
            <p className="mb-2"><strong>6.1</strong> We may collect basic visitor data through forms or analytics to improve our services and respond to inquiries.</p>
            <p className="mb-4"><strong>6.2</strong> Personal information collected (like your name, address, phone number, or email through contact forms) will only be used to respond to your queries and will not be shared with third parties without your consent.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">7. Limitation of Liability</h3>
            <p className="mb-2"><strong>7.1</strong> While we strive to keep all information accurate and up to date, we do not guarantee that all content on the website is free from errors or omissions.</p>
            <p className="mb-4"><strong>7.2</strong> Snug will not be liable for any direct or indirect damages resulting from the use of or inability to use this website or its content.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">8. Updates to Terms</h3>
            <p className="mb-4"><strong>8.1</strong> These terms may be updated periodically. Visitors are encouraged to review this page regularly to stay informed of any changes.</p>

            <h3 className="text-lg font-semibold text-[#8B4513] mt-6 mb-3">9. Jurisdiction</h3>
            <p className="mb-2"><strong>9.1</strong> These Terms & Conditions are governed by the laws of India.</p>
            <p className="mb-4"><strong>9.2</strong> Any disputes arising in connection with this website will be subject to the jurisdiction of courts in Bengaluru, Karnataka.</p>

            <div className="bg-[#E5E4DF] p-4 rounded-lg mt-6">
              <p className="font-semibold mb-2">For further information or inquiries, please contact us:</p>
              <p className="mb-1">📧 Email: furnishingstudio.blr@gmail.com</p>
              <p className="mb-1">📞 Customer Support: +91 95389 53904</p>
              <p>🏢 Address: <a href="https://maps.app.goo.gl/kLyzYopyMtfUQqir6?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-[#8B4513] hover:underline">291/A, 34th Cross, 9th Main, Jayanagar 4th Block, Bengaluru - 560011</a></p>
            </div>
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

export default TermsPopup