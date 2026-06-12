import { useState } from 'react';
import { ShoppingBag, Plus, Check, Star } from 'lucide-react';
import { Product } from '../data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onAddToQuote: (product: Product, quantity: number, color: string) => void;
}

export default function ProductCard({ product, onAddToQuote }: ProductCardProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToQuote = () => {
    onAddToQuote(product, 1, selectedColor);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleDirectInquiry = () => {
    const text = `Hi Bulkcell Trading Company,\nI am interested in the pre-owned unit from ${product.origin}: *${product.name}*.\n- *Condition:* ${product.condition} · Origin: ${product.origin}\n- *Color:* ${selectedColor}\n- *Category:* ${product.category}\n- *Reviews:* ${product.reviews}\n\nIs this model currently available for pickup/delivery at Suite A08 Platinum Plaza, Ikeja? Please send the current quote.`;
    
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2347025002885?text=${encoded}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-850 hover:border-blue-500/40 rounded-2xl overflow-hidden flex flex-col justify-between h-full transition-all duration-300 shadow-xl hover:shadow-blue-900/10"
    >
      {/* Glowing Ambient Accent */}
      <div className="absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div>
        {/* Image container */}
        <div className="relative aspect-video sm:aspect-[4/3] overflow-hidden bg-slate-950 border-b border-slate-900 group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

          {/* Badge: Pre-Owned / Trending / Brand Tag */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="text-[9px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-2.5 py-1 rounded-full shadow-md shadow-amber-600/30">
              Pre-Owned · {product.origin}
            </span>
            {product.isTrending && (
              <span className="text-[9px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-rose-600 to-blue-600 text-white px-2.5 py-1 rounded-full shadow-md shadow-rose-600/30">
                Trending Deal
              </span>
            )}
            <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-900/90 text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded-md w-max">
              {product.brand}
            </span>
          </div>

          {/* Availability */}
          <div className="absolute top-3 right-3">
            {product.inStock ? (
              <span className="text-[9px] font-extrabold uppercase tracking-wider bg-green-950/80 text-green-400 border border-green-900/50 px-2 py-0.5 rounded-md">
                In Stock
              </span>
            ) : (
              <span className="text-[9px] font-bold uppercase tracking-wider bg-rose-950/80 text-rose-400 border border-rose-900/50 px-2 py-0.5 rounded-md">
                Out of Stock
              </span>
            )}
          </div>
        </div>

        {/* Info Body */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-white font-bold text-base sm:text-lg group-hover:text-blue-400 transition-colors truncate">
              {product.name}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-amber-400">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>({product.reviews}) verified reviews</span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>

          {/* Key Specs list - showing condition & origin first */}
          <div className="py-2.5 border-t border-b border-slate-900 grid grid-cols-2 gap-y-1.5 gap-x-2 text-[11px] text-slate-400">
            <div className="truncate">
              <span className="text-slate-500 font-medium">Condition:</span> <span className="text-amber-400 font-bold">{product.condition}</span>
            </div>
            <div className="truncate">
              <span className="text-slate-500 font-medium">Origin:</span> <span className="text-blue-400 font-bold">{product.origin}</span>
            </div>
            {Object.entries(product.specifications).slice(2, 5).map(([key, value]) => (
              <div key={key} className="truncate">
                <span className="text-slate-500 font-medium">{key}:</span> <span className="text-slate-300">{value}</span>
              </div>
            ))}
          </div>

          {/* Color Picker */}
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase block tracking-wider mb-1.5">
              Available Colors
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`text-[10px] font-medium px-2.5 py-1 rounded-md border transition-all ${
                    selectedColor === color
                      ? 'bg-blue-950/80 border-blue-500 text-blue-300 font-bold'
                      : 'bg-slate-950 border-slate-900 text-slate-400 hover:border-slate-800'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="p-5 pt-0 space-y-4">
        <div className="bg-slate-950 border border-slate-900 rounded-xl p-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Pre-Owned UK Unit</span>
          <p className="mt-1 text-xs font-semibold text-slate-300">
            Chat on WhatsApp for price & current availability.
          </p>
        </div>

        {/* Actions - Both lead to WhatsApp in different ways */}
        <div className="grid grid-cols-2 gap-2">
          {/* Add to quote list */}
          <button
            onClick={handleAddToQuote}
            className={`w-full py-2.5 px-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1 ${
              isAdded
                ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-850 hover:border-blue-500/40 text-slate-300 hover:text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-3.5 w-3.5 animate-scaleUp" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Add to Quote
              </>
            )}
          </button>

          {/* Direct WhatsApp Checkout */}
          <button
            onClick={handleDirectInquiry}
            className="w-full py-2.5 px-2 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white text-xs font-extrabold flex items-center justify-center gap-1 hover:shadow-lg hover:shadow-blue-500/10 active:scale-98 transition-all cursor-pointer"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Direct Chat
          </button>
        </div>
      </div>
    </motion.div>
  );
}
