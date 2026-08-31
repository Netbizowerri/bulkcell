import { RotateCcw } from 'lucide-react';

export default function Returns() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <RotateCcw className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Legal</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Returns & Refund Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">1. Foreign Used Device Policy</h2>
            <p>At Bulkcell Trading Company, all our devices are foreign used. Because of the nature of foreign used electronics, we maintain a transparent policy regarding returns and refunds.</p>
            <p>We encourage all customers to carefully review device descriptions, conditions, and ask any questions via WhatsApp or phone before making a purchase.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">2. Physical Inspection Before Purchase</h2>
            <p>Customers are welcome to visit our physical outlet at Suite A08 Platinum Plaza, Ikeja, Lagos to inspect devices in person before purchase. This is the best way to verify the condition, cosmetic appearance, and functionality of any foreign used device.</p>
            <p>For customers who choose delivery without physical inspection, we recommend reviewing the detailed product descriptions and reaching out via WhatsApp for additional photos or information.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">3. Warranty Coverage</h2>
            <p>Every device sold by Bulkcell Trading Company comes with warranty/support after confirmation. The specific warranty terms will be communicated during the order confirmation process via WhatsApp or phone.</p>
            <p>Warranty covers genuine hardware defects that were not present at the time of sale. It does not cover:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Physical damage caused after delivery (drops, liquid damage, cracked screens)</li>
              <li>Normal battery degradation over time</li>
              <li>Issues caused by unauthorized repairs or modifications</li>
              <li>Lost or stolen devices</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">4. Returns Process</h2>
            <p>If you receive a device that does not match the description provided or has a verified hardware defect not disclosed before purchase, please contact us within 48 hours of delivery:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Call or WhatsApp: 07025002885</li>
              <li>Email: bulkcell@outlook.com</li>
              <li>Visit: Suite A08 Platinum Plaza, Ikeja, Lagos</li>
            </ul>
            <p>We will review your concern and coordinate a resolution, which may include repair, replacement, or refund depending on the specific circumstances.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">5. Non-Returnable Items</h2>
            <p>The following are not eligible for return or refund:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Devices that were physically inspected and approved at our Ikeja outlet before purchase</li>
              <li>Devices damaged after delivery by the customer</li>
              <li>Devices with cosmetic wear consistent with foreign used condition as described</li>
              <li>Change of mind after purchase</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">6. Refund Processing</h2>
            <p>If a refund is approved, it will be processed within 5-7 business days through the original payment method. For bank transfers, please allow additional processing time depending on your bank.</p>
            <p>Refunds do not include any delivery or shipping charges incurred during the original purchase.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
            <p>For any questions about our Returns & Refund Policy, please contact:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Phone: 07025002885</li>
              <li>Wholesale Desk: 08060125762</li>
              <li>Support: 07034403659</li>
              <li>Email: bulkcell@outlook.com</li>
              <li>Address: Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
