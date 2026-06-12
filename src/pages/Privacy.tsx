import { ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      <div className="absolute top-0 -left-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">Legal</span>
          </div>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-sm text-slate-300 leading-relaxed">
          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>Bulkcell Trading Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
            <p>We are a Nigerian-registered business with our outlet at Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria. By using our website, you consent to the practices described in this policy.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <h3 className="text-base font-bold text-blue-400">Personal Information</h3>
            <p>When you use our website, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your name and WhatsApp phone number (when you submit our contact form or send a quote inquiry)</li>
              <li>Business or store name (if provided during inquiry)</li>
              <li>Device preferences, colors, and quantities you express interest in</li>
              <li>Information you voluntarily provide through our chatbot or contact forms</li>
            </ul>
            <h3 className="text-base font-bold text-blue-400">Automatically Collected Information</h3>
            <p>We may automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behaviour on our site.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to your device inquiries and provide pricing information via WhatsApp</li>
              <li>To coordinate device availability, delivery, and pickup at our Ikeja outlet</li>
              <li>To improve our website, product offerings, and customer service</li>
              <li>To communicate with you about your orders, inquiries, and requests</li>
              <li>To maintain and manage your quote basket and saved preferences</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>With delivery partners for the purpose of fulfilling your order</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We store quote basket data locally in your browser using localStorage to enhance your browsing experience.</p>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent at any time where we rely on your consent to process your data</li>
              <li>Contact us with any privacy concerns</li>
            </ul>
          </section>

          <section className="p-6 bg-slate-900/30 border border-slate-900 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Email: info@bulkcell.com.ng</li>
              <li>Phone: 07025002885</li>
              <li>Address: Suite A08 Platinum Plaza, Ikeja, Lagos, Nigeria</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
