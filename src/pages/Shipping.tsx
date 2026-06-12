import { Truck } from 'lucide-react';

export default function Shipping() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <Truck className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Legal</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Shipping & Delivery Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">1. Delivery Options</h2>
            <p>We offer the following delivery options for all pre-owned devices purchased from Bulkcell Trading Company:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h3 className="font-bold text-blue-400 text-sm">Ikeja Pickup</h3>
                <p className="text-xs text-slate-400">Collect in person at Suite A08 Platinum Plaza, Ikeja, Lagos. Free of charge.</p>
              </div>
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h3 className="font-bold text-rose-400 text-sm">Lagos Delivery</h3>
                <p className="text-xs text-slate-400">Same-day or next-day delivery within Lagos State. Subject to confirmation.</p>
              </div>
              <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
                <h3 className="font-bold text-emerald-400 text-sm">Nationwide</h3>
                <p className="text-xs text-slate-400">Interstate shipping to all 36 states in Nigeria. Tracking and insurance available.</p>
              </div>
            </div>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">2. Processing Time</h2>
            <p>Once your order is confirmed via WhatsApp or phone, we typically process and prepare devices within 1-2 business days. You will be notified when your device is ready for pickup or dispatch.</p>
            <p>For wholesale orders (5+ units), processing time may be extended depending on stock availability and mix of devices.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">3. Delivery Timeframes</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Ikeja Pickup:</strong> Ready for collection within 1-2 business days after confirmation</li>
              <li><strong>Lagos Delivery:</strong> Same-day or next-day after dispatch</li>
              <li><strong>Nationwide Shipping:</strong> 2-7 business days depending on location and logistics partner</li>
            </ul>
            <p className="mt-2">Delivery timeframes are estimates and may vary based on factors beyond our control, including weather conditions, public holidays, and logistics partner capacity.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">4. Shipping Costs</h2>
            <p>Shipping costs are calculated based on your delivery location and the size/weight of your order. Exact shipping fees will be communicated during the order confirmation process.</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Ikeja outlet pickup: Free</li>
              <li>Lagos delivery: Fee varies by location</li>
              <li>Nationwide shipping: Fee varies by destination and delivery speed</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">5. Order Tracking</h2>
            <p>For nationwide deliveries, we provide tracking information once your order has been dispatched. You will receive tracking details via WhatsApp or phone call.</p>
            <p>For delivery coordination and tracking updates, contact our support desk at 07034403659.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">6. Delivery Issues</h2>
            <p>If your device has not arrived within the estimated timeframe, please contact us:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Support Desk: 07034403659</li>
              <li>Sales: 07025002885</li>
              <li>Visit: Suite A08 Platinum Plaza, Ikeja, Lagos</li>
            </ul>
            <p>We will investigate and provide updates on your delivery status promptly.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">7. International Shipping</h2>
            <p>Currently, Bulkcell Trading Company delivers exclusively within Nigeria. We do not offer international shipping at this time.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">8. Contact Us</h2>
            <p>For any questions about our Shipping & Delivery Policy:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Phone: 07025002885</li>
              <li>Wholesale Desk: 08060125762</li>
              <li>Support: 07034403659</li>
              <li>Email: info@bulkcell.com.ng</li>
              <li>Address: Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
