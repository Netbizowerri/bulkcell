import { motion } from 'framer-motion';
import { ChevronRight, Flame, MessageSquare, Sparkles } from 'lucide-react';

const hotDeals = [
  {
    title: 'HOT DEAL #7',
    device: 'Samsung Galaxy Fold 4',
    image: 'https://i.ibb.co/vxyzzhw4/Gemini-Generated-Image-yicjqoyicjqoyicj-1.png',
  },
  {
    title: 'HOT DEAL #6',
    device: 'Samsung Galaxy S22 Ultra',
    image: 'https://i.ibb.co/39jXxJ2Z/Gemini-Generated-Image-rhu83xrhu83xrhu8-1.png',
  },
  {
    title: 'HOT DEAL #5',
    device: 'Samsung Galaxy M53',
    image: 'https://i.ibb.co/SDFpDBN5/Gemini-Generated-Image-ehjnmsehjnmsehjn-1.png',
  },
  {
    title: 'HOT DEAL #4',
    device: 'Samsung S22 128GB',
    image: 'https://i.ibb.co/W4KyF01w/Screenshot-2026-02-20-090442.png',
  },
  {
    title: 'HOT DEAL #3',
    device: 'iPhone 12 128GB',
    image: 'https://i.ibb.co/mV6qPCj9/Screenshot-2026-02-20-090506.png',
  },
  {
    title: 'HOT DEAL #2',
    device: 'iPhone 11 Pro 64GB',
    image: 'https://i.ibb.co/3y6gCYXN/Screenshot-2026-02-20-090525.png',
  },
  {
    title: 'HOT DEAL #1',
    device: 'HP EliteBook Revolve 810',
    image: 'https://i.ibb.co/nvPjq8h/Screenshot-2026-02-20-090544.png',
  },
];

export default function HotDeals() {
  const getWhatsAppLink = (dealTitle: string, deviceName?: string) => {
    const deviceInfo = deviceName ? ` (${deviceName})` : '';
    const message = `Hi Bulkcell Trading Company, I want to claim ${dealTitle}${deviceInfo}. Please confirm if this hot deal is still available.`;
    return `https://wa.me/2347025002885?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 py-16 text-white">
      <div className="absolute -left-48 top-0 h-[400px] w-[400px] lg:h-[520px] lg:w-[520px] rounded-full bg-blue-900/15 blur-[150px]" />
      <div className="absolute bottom-0 -right-48 h-[400px] w-[400px] lg:h-[520px] lg:w-[520px] rounded-full bg-rose-900/15 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-950/20 px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest text-rose-300"
          >
            <Flame className="h-4 w-4 text-rose-500" />
            Hot Deals
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl font-black tracking-tight sm:text-5xl"
          >
            Hot Deals
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            Don't miss out on these exclusive foreign used offers.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {hotDeals.map((deal, index) => (
            <motion.article
              key={deal.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="group overflow-hidden rounded-3xl border border-slate-850 bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/45 hover:shadow-rose-950/20"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-950">
                <img
                  src={deal.image}
                  alt={`${deal.title} at Bulkcell Trading Company`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-rose-400/40 bg-slate-950/80 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-rose-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                  Exclusive Promo
                </div>
              </div>

              <div className="space-y-6 p-6">
                <div>
                  <h2 className="text-xl font-black text-white">{deal.title}</h2>
                  {deal.device && (
                    <span className="mt-1 inline-block text-sm font-bold text-blue-400 bg-blue-950/40 border border-blue-900/50 px-3 py-1 rounded-full">
                      {deal.device}
                    </span>
                  )}
                </div>
                <p className="text-xs leading-relaxed text-slate-400">
                  Exclusive weekly promotion. Click the button below to claim this deal via WhatsApp.
                </p>
                <a
                  href={getWhatsAppLink(deal.title, deal.device)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg shadow-blue-600/10 transition-all duration-200 hover:from-blue-500 hover:to-rose-500 hover:shadow-rose-500/10"
                >
                  <MessageSquare className="h-4 w-4" />
                  Get Hot Deal
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}