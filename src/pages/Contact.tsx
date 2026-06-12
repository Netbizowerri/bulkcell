import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Building2, CheckCircle } from 'lucide-react';

export default function Contact() {
  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Retail Purchase Inquiry');
  const [messageText, setMessageText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Compile structured message to WhatsApp
    let message = `*BULKCELL CONTACT DESK - WEBSITE INQUIRY*\n`;
    message += `==================================\n\n`;
    message += `*From:* ${name.trim()}\n`;
    message += `*Phone:* ${phone.trim()}\n`;
    message += `*Subject/Topic:* ${topic}\n\n`;
    message += `*Message:*\n${messageText.trim() || 'No extra text details provided.'}\n\n`;
    message += `----------------------------------\n`;
    message += `Please respond on WhatsApp. Thank you!`;

    const encoded = encodeURIComponent(message);
    const targetPhone = '2347025002885'; // Primary sales support
    window.open(`https://wa.me/${targetPhone}?text=${encoded}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const directContacts = [
    {
      title: 'Direct Sales Desk',
      desc: 'For single device orders, retail pricing, colors availability, and direct showroom collections.',
      phone: '07025002885',
      whatsappText: "Hi Bulkcell, I'm looking to buy a phone today. What are the available models?",
      colorTheme: 'border-blue-900/30 hover:border-blue-500/50 text-blue-400'
    },
    {
      title: 'Wholesale Desk',
      desc: 'For business procurement, bulk batches of 5+ units, and campus reseller partnership setups.',
      phone: '08060125762',
      whatsappText: "Hi Bulkcell, I want to coordinate a wholesale purchase. Can you confirm current stock and send a quote?",
      colorTheme: 'border-rose-900/30 hover:border-rose-500/50 text-rose-500'
    },
    {
      title: 'Alternative Support',
      desc: 'Alternative support desk for dispatch coordination, tracking, and post-sales support inquiries.',
      phone: '07034403659',
      whatsappText: "Hi Bulkcell, I want to coordinate delivery of my order.",
      colorTheme: 'border-slate-900 hover:border-blue-400/40 text-slate-300'
    }
  ];

  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      {/* Background glow spheres */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Contact Bulkcell Trading Company
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Need pre-owned device stock verification or wholesale delivery status? Choose a direct hotline, submit our WhatsApp contact form, or visit us at Computer Village.
          </p>
        </div>

        {/* Contact Hotline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {directContacts.map((contact, idx) => (
            <div
              key={idx}
              className={`p-6 bg-slate-900/40 border rounded-2xl flex flex-col justify-between space-y-6 transition-all duration-300 group ${contact.colorTheme}`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-xl">
                    <MessageSquare className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">{contact.title}</h3>
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed">
                  {contact.desc}
                </p>

                <div className="pt-2 flex items-center gap-2 font-extrabold text-lg text-white">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <a href={`tel:${contact.phone}`} className="hover:text-blue-400 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/234${contact.phone.substring(1)}?text=${encodeURIComponent(contact.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-slate-950 hover:bg-blue-600 text-white font-bold text-center rounded-xl border border-slate-850 hover:border-blue-500 transition-all duration-200 block text-xs uppercase tracking-widest"
                >
                  Chat Directly
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Form + Lagos Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/30 border border-slate-900 rounded-3xl p-6 backdrop-blur-md space-y-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-1.5 border-b border-slate-900 pb-4">
              <h3 className="text-white font-bold text-lg">Pre-Owned UK Quick Inquiry</h3>
              <p className="text-xs text-slate-500">Fill out your details and submit instantly to WhatsApp</p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-950/30 border border-emerald-900/40 rounded-2xl text-center space-y-4">
                <div className="p-3 bg-emerald-950 rounded-full w-max mx-auto text-emerald-400">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-emerald-300 font-extrabold text-base">Form Compiled Successfully!</h4>
                  <p className="text-slate-400 text-xs max-w-sm mx-auto">
                    Your browser is launching WhatsApp to securely transmit this request. Our customer representatives will reply in minutes.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Full Name <span className="text-rose-500">*</span></label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Emeka Adebayo"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">WhatsApp Phone Number <span className="text-rose-500">*</span></label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 08060125762"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Retail Purchase Inquiry">Retail Device Purchase (1 unit)</option>
                    <option value="Wholesale Bulk Inquiry">Wholesale Bulk Purchase (5+ units)</option>
                    <option value="Laptops & Office Procurement">Corporate Laptop Fleet Upgrade</option>
                    <option value="General Support & Delivery">Delivery / Dispatch Status</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Message</label>
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={4}
                    placeholder="State details about what phone/laptop models you are looking for, preferred colors, and delivery address..."
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl p-3.5 text-xs text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 text-white text-xs uppercase tracking-widest font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Send Inquiry to WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Location/Hours Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Details Card */}
            <div className="p-6 bg-slate-900/50 border border-slate-900 rounded-3xl space-y-4 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-white font-bold text-sm">
                <Building2 className="h-4.5 w-4.5 text-rose-500" />
                <span>Our Showroom Outlet</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">
                    Suite A08 Platinum Plaza,<br />
                    Ikeja, Lagos, Nigeria.
                  </span>
                </li>
                
                <li className="flex items-center gap-3">
                  <Mail className="h-4.5 w-4.5 text-blue-400" />
                  <a href="mailto:info@bulkcell.com.ng" className="hover:text-white transition-colors text-slate-300">
                    info@bulkcell.com.ng
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Clock className="h-4.5 w-4.5 text-rose-500" />
                  <div>
                    <span className="block text-slate-300 font-bold">Monday - Saturday</span>
                    <span className="block text-[10px] text-slate-500">9:00 AM - 6:00 PM (Sunday: Closed)</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Live Google Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-slate-900 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3776!2d3.3487774!3d6.5960606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9235d6c2b6e7%3A0x8b5c8e5c5b5c5b5c!2sPlatinum%20Plaza!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Bulkcell Trading Company at Platinum Plaza, Ikeja"
              />
              <div className="p-4 bg-slate-900/60 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-4 w-4 text-rose-500 shrink-0" />
                  <span>Suite A08 Platinum Plaza, Ikeja, Lagos</span>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Platinum+Plaza+Ikeja+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white text-xs font-extrabold rounded-xl flex items-center gap-2 transition-all shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
