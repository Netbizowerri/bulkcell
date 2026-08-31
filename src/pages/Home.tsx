import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Laptop,
  ShieldCheck,
  Truck,
  MessageSquare,
  ChevronRight,
  Award,
  DollarSign,
  Star,
  Flame
} from 'lucide-react';
import { PRODUCTS, type Product, type ProductBrand } from '../data/products';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  setActivePage: (page: string) => void;
  onSelectBrand: (brand: 'All' | ProductBrand) => void;
  onAddToQuote: (product: Product, quantity: number, color: string) => void;
}

export default function Home({ setActivePage, onSelectBrand, onAddToQuote }: HomeProps) {
  // State for brand active tabs in showcase
  const [activeTab, setActiveTab] = useState<'All' | 'Apple' | 'Samsung' | 'HP' | 'Dell'>('All');
  const heroImageUrl = 'https://i.ibb.co/ZR4hf44X/Bulkcell-3-1.jpg';

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'All') return p.isTrending;
    return p.brand === activeTab;
  }).slice(0, 4);

  // Brand details
  const brandShowcases = [
    {
      name: 'Apple iPhones',
      tagline: 'Foreign Used iOS Flagships',
      desc: 'Trusted foreign used Apple inventory including iPhone X, XS Max, iPhone 11, iPhone 12, and iPhone 13 series with transparent availability.',
      bgGradient: 'from-blue-950/60 via-slate-950 to-rose-950/20',
      borderColor: 'border-rose-900/30 hover:border-rose-500/50',
      icon: Smartphone,
      colorTag: 'text-rose-500',
      brandKey: 'Apple'
    },
    {
      name: 'Samsung Galaxy',
      tagline: 'Foreign Used Android Flagships',
      desc: 'Available foreign used Samsung stock — Galaxy S8 through S22 Ultra, plus Note 20, M53, and Z Fold 4 for business and personal buyers.',
      bgGradient: 'from-blue-950/60 via-slate-950 to-blue-900/20',
      borderColor: 'border-blue-900/30 hover:border-blue-500/50',
      icon: Smartphone,
      colorTag: 'text-blue-400',
      brandKey: 'Samsung'
    },
    {
      name: 'HP Professional Laptops',
      tagline: 'Foreign Used Business Laptops',
      desc: 'Reliable foreign used HP EliteBook and ProBook laptops, selected for students, office teams, resellers, and practical business computing.',
      bgGradient: 'from-slate-950 via-slate-900/50 to-blue-950/30',
      borderColor: 'border-slate-800 hover:border-blue-400/50',
      icon: Laptop,
      colorTag: 'text-blue-300',
      brandKey: 'HP'
    },
    {
      name: 'Dell Latitude Laptops',
      tagline: 'Foreign Used Dell Laptops',
      desc: 'Foreign used Dell Latitude 7390 and 7480 laptops for portable business productivity.',
      bgGradient: 'from-blue-950/30 via-slate-950 to-slate-900/60',
      borderColor: 'border-blue-900/20 hover:border-blue-400/50',
      icon: Laptop,
      colorTag: 'text-cyan-300',
      brandKey: 'Dell'
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: '100% Authentic Foreign Used Devices',
      desc: 'Every unit is foreign used with rigorous hardware and battery checks performed before dispatch.',
      accent: 'border-blue-500/20 hover:border-blue-500/60'
    },
    {
      icon: DollarSign,
      title: 'Flexible Bulk Ordering',
      desc: 'For retailers and business setups ordering 5+ devices, we coordinate direct WhatsApp quote confirmation and stock checks.',
      accent: 'border-rose-500/20 hover:border-rose-500/60'
    },
    {
      icon: Truck,
      title: 'Nationwide Secure Delivery',
      desc: 'Safe transit from our main corporate outlet at Suite A08 Platinum plaza, Ikeja, Lagos to any Nigerian state with robust tracking and insurance.',
      accent: 'border-blue-500/20 hover:border-blue-500/60'
    }
  ];

  return (
    <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Ambient Neon Background Hues */}
      <div className="absolute top-0 -left-48 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[30%] -right-48 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-rose-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-950/15 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. Full-bleed Hero Section */}
      <section className="relative isolate min-h-[calc(100vh-112px)] overflow-hidden border-b border-slate-900">
        <motion.img
          src={heroImageUrl}
          alt="Bulkcell Trading Company showroom hero"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover object-[top_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_45%_80%,rgba(225,29,72,0.18),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 flex min-h-[calc(100vh-112px)] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl py-20 text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-5 text-xs font-extrabold uppercase tracking-[0.35em] text-blue-300 hidden sm:block"
              >
                Foreign Used | Apple · Samsung · HP · Dell | Wholesale/Retail Nigeria
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
                className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                Bulkcell Trading Company
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="mt-6 text-2xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-rose-300 sm:text-3xl"
              >
                Foreign Used iPhones, Samsung Galaxy phones, and HP/Dell laptops.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28 }}
                className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg mx-auto lg:mx-0 hidden sm:block"
              >
                 Foreign used devices for retail customers, business procurement teams, and bulk resellers. Chat now to confirm today's stock, colors, and wholesale pricing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <a
                  href="https://wa.me/2347025002885?text=Hi%20Bulkcell%20Trading%20Company,%20I%20want%20to%20buy%20a%20premium%20device%20from%20your%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-rose-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider"
                >
                  Chat to Buy Now
                  <MessageSquare className="h-4 w-4" />
                </a>

                 <button
                   onClick={() => setActivePage('hot-deals')}
                   className="w-full sm:w-auto px-8 py-4 bg-slate-950/70 hover:bg-slate-900 text-slate-100 hover:text-white font-bold rounded-xl border border-blue-500/30 hover:border-rose-500/50 flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-200 cursor-pointer text-sm"
                 >
                   <Flame className="h-4.5 w-4.5 text-rose-400" />
                   Check Hot Deals
                 </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust metrics moved below hero to keep the first viewport brand-first. */}
      <section className="border-b border-slate-900 bg-slate-950 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 text-center sm:grid-cols-4 sm:px-6 lg:px-8 sm:text-left">
          <div>
            <span className="block text-3xl font-black text-white">10,000+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Happy Customers
            </span>
          </div>
          <div className="border-slate-900 sm:border-l sm:pl-8">
            <span className="block text-3xl font-black text-rose-500">15+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Countries Served
            </span>
          </div>
          <div className="border-slate-900 sm:border-l sm:pl-8">
            <span className="block text-3xl font-black text-blue-400">10+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Years Experience
            </span>
          </div>
          <div className="border-slate-900 sm:border-l sm:pl-8">
            <span className="block text-3xl font-black text-emerald-400">50K+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Devices Sold
            </span>
          </div>
        </div>
      </section>

      {/* 2. Core Authenticity Features */}
      <section className="py-20 border-t border-b border-slate-900 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Foreign Used · The Bulkcell Guarantee</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Quality Foreign Used Devices for Lagos & Beyond
            </h2>
            <p className="text-sm text-slate-400">
              We supply quality foreign used devices. That's why corporate outlets, university campuses, and resellers consistently choose Bulkcell.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 bg-slate-900/40 border rounded-2xl transition-all duration-300 group space-y-6 hover:-translate-y-1 ${feat.accent}`}
                >
                  <div className="p-3.5 bg-slate-950 rounded-xl w-max border border-slate-850 shadow-inner group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 text-blue-400 group-hover:text-rose-500 transition-colors" />
                  </div>
                  <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Categorized Brand Showcases */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Browse by Brand</span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Devices In Stock
          </h2>
          <p className="text-sm text-slate-400">
            Tap any brand below to browse and inquire via WhatsApp.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {brandShowcases.map((brand, idx) => {
            const Icon = brand.icon;
            return (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-b ${brand.bgGradient} border ${brand.borderColor} rounded-3xl relative flex flex-col justify-between h-[360px] group overflow-hidden shadow-xl hover:shadow-blue-950/10`}
              >
                {/* Glowing circle */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-slate-950 rounded-full opacity-40 border border-slate-850" />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                      {brand.tagline}
                    </span>
                    <Icon className={`h-6 w-6 ${brand.colorTag}`} />
                  </div>
                  
                  <h3 className="text-2xl font-black text-white">{brand.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                    {brand.desc}
                  </p>
                </div>

                <div className="relative z-10">
                  <button
                    onClick={() => {
                      setActiveTab(brand.brandKey as 'Apple' | 'Samsung' | 'HP' | 'Dell');
                      onSelectBrand(brand.brandKey as ProductBrand);
                      setActivePage('shop');
                      window.scrollTo({ top: 200, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-950 hover:bg-blue-600 px-4.5 py-2.5 rounded-xl border border-slate-850 hover:border-blue-500 transition-all duration-200 cursor-pointer group/btn"
                  >
                    Browse {brand.brandKey} models
                    <ChevronRight className="h-3.5 w-3.5 text-rose-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Bespoke Dynamic Grid: Featured Available Models Showcase */}
      <section className="py-20 bg-slate-950/60 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Curated Collection</span>
              <h2 className="text-3xl font-extrabold text-white">
                Featured Models
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                Instantly tap "Direct Chat" to buy single items, or add them to your "Quote Basket".
              </p>
            </div>

            {/* Interactive Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 border border-slate-850 p-1.5 rounded-xl">
              {(['All', 'Apple', 'Samsung', 'HP', 'Dell'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-rose-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  {tab === 'All' ? 'Featured' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={onAddToQuote}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                onSelectBrand('All');
                setActivePage('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 text-sm font-bold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            >
               View All Foreign Used Devices
              <ChevronRight className="h-4 w-4 text-rose-500" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Business Core: Wholesale vs Retail Segment */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-16 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 border border-blue-950 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
          
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-rose-500 uppercase tracking-widest flex items-center gap-1">
                <Award className="h-4.5 w-4.5 text-blue-400" />
                Foreign Used Devices · Bulk Orders & Campus Packs
              </span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Scaling Foreign Used Tech Supply for Nigerian Buyers
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                At Bulkcell Trading Company, our core mission is providing access to quality foreign used devices. We have served thousands of digital resellers, student bulk co-ops, and corporate office upgrades in Nigeria with our inventory. We provide reliable stock confirmation and direct business support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-950/90 border border-slate-900 rounded-xl space-y-2">
                  <div className="text-rose-500 font-bold text-sm">1. Retail Buyers</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Request one device at a time and get standard warranty guidance, tested battery health checks, and immediate support.
                  </p>
                </div>
                <div className="p-4 bg-slate-950/90 border border-slate-900 rounded-xl space-y-2">
                  <div className="text-blue-400 font-bold text-sm">2. Wholesalers (5+ Devices)</div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Mix and match Apple, Samsung, HP, and Dell models, then coordinate direct quote and supply updates on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => {
                    setActivePage('hot-deals');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-rose-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-widest shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  View Hot Deals
                </button>
                <a
                  href="tel:08060125762"
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-2 border border-slate-800 px-4 py-3 rounded-xl"
                >
                  Call Wholesale Desk: 08060125762
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-slate-950/80 border border-slate-900 rounded-2xl space-y-4">
              <h3 className="text-white font-bold text-base border-b border-slate-900 pb-3">
                Why Nigeria Trusts Bulkcell for Foreign Used Tech
              </h3>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>All devices foreign used.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Strict diagnostic testing (no refurbished battery swaps).</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Location transparency at Platinum Plaza, Ikeja, Lagos.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Instant WhatsApp tracking and direct owner hotlines.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bespoke Lagos & Nigeria Testimonials */}
      <section className="py-20 bg-slate-950/50 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Client Success Stories</span>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted for Foreign Used Devices
            </h2>
            <p className="text-sm text-slate-400">
              We supply foreign used phones and laptops to computer village stores, campus reps, and retail users all over Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Bulkcell is the standard for foreign used devices. We ordered 12 units of the Apple iPhone 13 Pro Max for our staff. Every phone arrived in pristine condition, fully tested, and the WhatsApp coordination was fast.',
                author: 'Chinedu O.',
                role: 'CEO, Sterling Tech Ventures',
                location: 'Computer Village, Lagos',
                rating: 5
              },
              {
                quote: "Buying laptops for corporate offices in Nigeria can be risky. Bulkcell provided 6 HP EliteBooks with fully transparent specs. Safe delivery and amazing communication.",
                author: 'Amina Y.',
                role: 'Procurement Officer',
                location: 'Victoria Island, Lagos',
                rating: 5
              },
              {
                quote: 'Excellent wholesale service! Their WhatsApp quote system is highly professional. You select your products, choose your colors, click send, and they reply in minutes with a full breakdown. Highly recommended.',
                author: 'Segun A.',
                role: 'Retail Phone Dealer',
                location: 'Ibadan, Oyo State',
                rating: 5
              }
            ].map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 space-y-6 relative">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-rose-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-rose-500 text-rose-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-xs italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-slate-900 flex items-center justify-between">
                  <div>
                    <span className="block text-white text-xs font-bold">{t.author}</span>
                    <span className="block text-[10px] text-slate-500">{t.role}</span>
                  </div>
                  <span className="text-[10px] font-medium text-blue-400 bg-blue-950 px-2 py-1 rounded border border-blue-900/30">
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="py-16 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready for a Foreign Used Device?
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our store agents are online at Suite A08 Platinum plaza, Ikeja. Browse our foreign used collection and send your inquiry via WhatsApp today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/2347025002885?text=Hi%20Bulkcell%20Trading%20Company,%20I'm%20interested%20in%20some%20of%20your%20smartphones%20and%20laptops."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-500 to-blue-600 hover:from-rose-500 hover:to-blue-500 text-white font-extrabold rounded-xl flex items-center gap-2 shadow-lg shadow-rose-500/20 hover:scale-[1.02] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              Chat on WhatsApp Now
            </a>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-800 transition-colors text-sm"
            >
              Get Office Address & Directions
            </button>
          </div>

          {/* Direct dial hotline indicators */}
          <div className="pt-4 border-t border-slate-900/50 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-500">
            <span>Retail Desk: <a href="tel:07025002885" className="text-slate-400 hover:text-white">07025002885</a></span>
            <span>Wholesale Desk: <a href="tel:08060125762" className="text-slate-400 hover:text-white">08060125762</a></span>
            <span>General Desk: <a href="tel:07034403659" className="text-slate-400 hover:text-white">07034403659</a></span>
          </div>
        </div>
      </section>
    </div>
  );
}
