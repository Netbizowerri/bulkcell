import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Building2, Users, Phone, MapPin } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Authentic Pre-Owned Hardware',
      desc: 'We strictly provide certified original pre-owned hardware sourced from the UK and US. Zero refurbished phone component swaps, zero fake screens. Quality that stands the test of time.',
    },
    {
      icon: Award,
      title: 'Warranty Support',
      desc: 'Every single unit sold, from premium iPhones to high-performance HP business laptops, is backed by reliable replacement warranty guarantees.',
    },
    {
      icon: Users,
      title: 'Customer Obsession',
      desc: 'Direct channels to management. Responsive hotlines and instant automated WhatsApp updates keep your business procurement seamless.',
    },
  ];

  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-16 overflow-hidden">
      {/* Ambient Background Hues */}
      <div className="absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-rose-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            About Bulkcell Trading Company
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Nigeria's trusted source for pre-owned devices from the UK and US — setting the standard for authenticity, transparent pricing, and quality customer care.
          </p>
        </div>

        {/* Core Story / Pitch */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Our Story</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bulkcell Trading Company has been at the forefront of Nigeria's pre-owned device market, providing quality pre-owned smartphones and laptops sourced from the UK and US to customers across the country. Our journey began with a simple mission: to make quality pre-owned technology accessible and affordable for everyone.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Our Vision</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                To become Nigeria's most trusted wholesale/retail source for pre-owned Apple iPhones, Samsung Galaxy phones, and laptops from the UK and US, setting the standard for quality, authenticity, and customer service.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-slate-300 text-sm leading-relaxed">
                We are Nigeria's most trusted wholesale and retail source for pre-owned Apple iPhones, Samsung Galaxy phones, and professional laptops from the UK and US. Our mission is to make quality pre-owned technology accessible to everyone, whether you're a retail customer looking for your next device or a business seeking bulk purchases for resale.
              </p>
            </div>
            
            {/* Lagos Office Location Tag */}
            <div className="p-4 bg-slate-900/60 border border-slate-900 rounded-2xl flex items-center gap-4">
              <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <span className="block text-white text-xs font-bold">Outlet Hub & Sales Office</span>
                <span className="block text-[11px] text-slate-400">Suite A08 Platinum plaza, Ikeja, Lagos, Nigeria.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-rose-500/10 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative w-full aspect-square rounded-3xl border border-slate-850 overflow-hidden shadow-2xl shadow-slate-950 bg-slate-900/60 p-8 space-y-6 flex flex-col justify-center">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-rose-500">Pre-Owned Quality Framework</span>
              <h3 className="text-xl font-extrabold text-white">Our Pre-Owned Grading Guarantee</h3>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Sourced from UK, US:</strong> Every device sourced from verified UK and US channels.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0" />
                  <span><strong>Grade A+++ Pristine:</strong> Outer cosmetic look as good as brand new with 85%+ peak battery capacity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span><strong>100% OEM Screen Guarantee:</strong> Original displays only. Uncompromised refresh rates and true-tone calibrations.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Panel */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-950/40 to-slate-950 border border-blue-900/20 space-y-4 relative overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 p-6 bg-blue-500/5 rounded-full">
              <Eye className="h-24 w-24 text-blue-500/10" />
            </div>
            <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-xl w-max text-blue-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To become Nigeria's most trusted wholesale/retail source for pre-owned Apple iPhones, Samsung Galaxy phones, and laptops from the UK and US, setting the standard for quality, authenticity, and customer service.
            </p>
          </motion.div>

          {/* Mission Panel */}
          <motion.div
            whileHover={{ y: -2 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-rose-950/30 to-slate-950 border border-rose-900/20 space-y-4 relative overflow-hidden"
          >
            <div className="absolute -right-8 -bottom-8 p-6 bg-rose-500/5 rounded-full">
              <Target className="h-24 w-24 text-rose-500/10" />
            </div>
            <div className="p-3 bg-rose-500/20 border border-rose-500/30 rounded-xl w-max text-rose-500">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-white">Our Mission</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We exist to make quality pre-owned technology from the UK and US accessible to everyone. Whether you're a retail customer looking for your next personal upgrade or a growing business seeking bulk purchase tiers for local resale.
            </p>
          </motion.div>
        </section>

        {/* Corporate Core Values */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Our Integrity Foundation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Operating Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-900/30 border border-slate-900 space-y-3">
                  <div className="p-2.5 bg-slate-950 rounded-lg w-max border border-slate-850 text-rose-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-white font-bold text-base">{v.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Info reaffirmation inside About page */}
        <section className="p-8 rounded-3xl bg-slate-900/40 border border-slate-900 text-center space-y-6">
          <h3 className="text-white font-extrabold text-xl">Interested in doing business with us?</h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Get in touch with our wholesale/retail agents directly. Or stop by at Suite A08 Platinum Plaza in Ikeja, Lagos, and inspect our pre-owned UK stock physically!
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-xs">
            <a href="tel:07025002885" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
              <Phone className="h-4 w-4 text-blue-400" /> 07025002885
            </a>
            <a href="mailto:info@bulkcell.com.ng" className="flex items-center gap-2 text-slate-300 hover:text-rose-400 transition-colors">
              <Building2 className="h-4 w-4 text-rose-500" /> info@bulkcell.com.ng
            </a>
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin className="h-4 w-4 text-blue-400" /> Ikeja, Lagos, Nigeria.
            </span>
          </div>
        </section>

      </div>
    </div>
  );
}
