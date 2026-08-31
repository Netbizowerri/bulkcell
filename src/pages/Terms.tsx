import { Scale } from 'lucide-react';

export default function Terms() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <Scale className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Legal</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>By accessing and using the Bulkcell Trading Company website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our website or services.</p>
            <p>Bulkcell Trading Company is a Nigerian enterprise with our physical outlet at Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">2. Products & Availability</h2>
            <p>All devices listed on our website are foreign used unless otherwise stated.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Product images are for illustration purposes. Actual device condition may vary slightly from the images shown.</li>
              <li>Stock availability is subject to change. We encourage customers to confirm current availability via WhatsApp or phone before visiting our Ikeja outlet.</li>
              <li>We reserve the right to discontinue any product without prior notice.</li>
              <li>All devices are sold as foreign used. Device conditions (Grade A+++, Grade A, etc.) are clearly described on each product listing.</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">3. Pricing & Payments</h2>
            <p>Prices displayed on our website are indicative and may change based on current market rates and available stock. Final pricing is confirmed via WhatsApp or phone during your inquiry.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All prices are quoted in Nigerian Naira (NGN) unless otherwise agreed.</li>
              <li>Payment terms are discussed and agreed upon during the order confirmation process.</li>
              <li>We do not store payment information on our website.</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">4. Orders & Inquiries</h2>
            <p>Our website facilitates product inquiries and quote requests. By submitting a quote request or contacting us via WhatsApp, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide accurate and complete information about yourself and your device requirements</li>
              <li>Respond to our confirmation messages in a timely manner</li>
              <li>Coordinate delivery or pickup arrangements at our Ikeja outlet</li>
            </ul>
            <p>Quote basket submissions are not binding orders. They serve as inquiries for stock confirmation and pricing. A binding agreement is formed only when we explicitly confirm your order via WhatsApp or phone.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">5. Delivery & Pickup</h2>
            <p>We offer the following fulfilment options:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Physical pickup at Suite A08 Platinum Plaza, Ikeja, Lagos</li>
              <li>Delivery within Lagos (same-day or next-day subject to confirmation)</li>
              <li>Nationwide delivery to all 36 states in Nigeria (interstate shipping)</li>
            </ul>
            <p>Delivery timelines are estimates and may be affected by factors beyond our control. We are not liable for delays caused by third-party logistics partners.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
            <p>Bulkcell Trading Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific device in question.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">7. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Bulkcell Trading Company or its content suppliers and is protected by applicable intellectual property laws.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website after any changes indicates your acceptance of the modified terms.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">9. Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of the Federal Republic of Nigeria. Any disputes arising from these terms shall be resolved in the courts of Lagos State, Nigeria.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">10. Contact Information</h2>
            <p>For any questions regarding these Terms & Conditions, please contact us:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Email: bulkcell@outlook.com</li>
              <li>Phone: 07025002885</li>
              <li>Address: Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
