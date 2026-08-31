import { X, ShoppingCart, Trash2, Plus, Minus, Award, MessageSquare } from 'lucide-react';
import { Product } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

interface QuoteEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, color: string, quantity: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onClearCart: () => void;
}

export default function QuoteEstimator({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: QuoteEstimatorProps) {
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Ikeja Office Pickup');

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppSend = () => {
    if (cart.length === 0) return;

    let message = `*BULKCELL TRADING COMPANY - FOREIGN USED QUOTE INQUIRY*\n`;
    message += `==================================\n\n`;
    
    if (clientName.trim()) {
      message += `*Client Name:* ${clientName.trim()}\n`;
    }
    if (businessName.trim()) {
      message += `*Business:* ${businessName.trim()}\n`;
    }
    message += `*Delivery Mode:* ${deliveryOption}\n\n`;
    message += `*INQUIRY ITEMS:*\n`;

    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   - *Qty:* ${item.quantity} units\n`;
      message += `   - *Color:* ${item.selectedColor}\n`;
      message += `   - *Brand:* ${item.product.brand}\n`;
      message += `   - *Category:* ${item.product.category}\n\n`;
    });

    message += `----------------------------------\n`;
    message += `*Total Units:* ${totalItems} items\n`;
    message += `----------------------------------\n\n`;
    message += `Please review availability and reply with the current quote. Thank you!`;

    const encodedMsg = encodeURIComponent(message);
    const waNumber = '2347025002885'; // Primary contact number
    const waUrl = `https://wa.me/${waNumber}?text=${encodedMsg}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950 z-50 backdrop-blur-sm"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md md:max-w-lg bg-slate-950 border-l border-slate-900 shadow-2xl shadow-blue-900/30 z-50 flex flex-col h-full overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 bg-gradient-to-r from-slate-950 to-slate-900 border-b border-slate-800 flex items-center justify-between relative gap-4">
              {/* Corner ambient glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                  <ShoppingCart className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Quote Basket</h2>
                  <p className="text-xs text-slate-500">Build a device inquiry for WhatsApp</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                  <div className="p-6 rounded-full bg-slate-900/80 border border-slate-800/50 relative">
                    <ShoppingCart className="h-12 w-12 text-slate-600" />
                    <div className="absolute inset-0 rounded-full bg-rose-500/5 animate-ping" />
                  </div>
                  <div>
                    <h3 className="text-slate-300 font-semibold text-base">Your Quote Basket is Empty</h3>
                    <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">
                      Browse the shop and add Apple iPhones, Samsung devices, or HP/Dell laptops to build an automated inquiry.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white text-sm font-bold transition-all duration-200 shadow-md shadow-blue-600/15"
                  >
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <>
                  {/* Quote progress indicator */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-950/40 to-rose-950/10 border border-blue-900/30 space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                      <Award className="h-4 w-4 text-rose-500" />
                      <span>FOREIGN USED · BULK BUYER INQUIRY</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Add the foreign used devices, colors, and quantities you need. Bulkcell will confirm availability and send the current quote directly on WhatsApp.
                    </p>
                  </div>

                  {/* Products List */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>SELECTED DEVICES ({cart.length})</span>
                      <button
                        onClick={onClearCart}
                        className="hover:text-rose-400 transition-colors flex items-center gap-1 font-semibold"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Clear All
                      </button>
                    </div>

                    <div className="space-y-3">
                      {cart.map((item, idx) => {
                        return (
                          <motion.div
                            key={`${item.product.id}-${item.selectedColor}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex gap-3 relative hover:border-blue-900/50 transition-colors"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 object-cover rounded-lg border border-slate-800 bg-slate-950"
                            />
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white text-sm font-bold truncate">{item.product.name}</h4>
                              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
                                Color: <span className="text-slate-200 font-medium bg-slate-850 px-1.5 py-0.2 rounded border border-slate-800">{item.selectedColor}</span>
                              </p>
                              
                              {/* Quantity guidance */}
                              <div className="mt-2">
                                {item.quantity >= 5 ? (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-2 py-0.5 rounded-full">
                                    Bulk inquiry quantity selected
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                                    Add {5 - item.quantity} more to mark as a bulk request
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Action Controls */}
                            <div className="flex flex-col items-end justify-between">
                              <button
                                onClick={() => onRemoveItem(item.product.id, item.selectedColor)}
                                className="p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800/30 transition-all"
                                title="Remove device"
                              >
                                <X className="h-4 w-4" />
                              </button>

                              {/* Qty buttons */}
                              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-lg p-1">
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, Math.max(1, item.quantity - 1))}
                                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="text-xs text-white font-bold w-5 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quote Personalization */}
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-900 space-y-3.5">
                    <span className="text-xs font-bold text-slate-400 block">QUOTE PERSONALIZATION</span>
                    
                    <div className="space-y-2">
                      <label className="block text-[11px] text-slate-500 font-semibold uppercase">Your Name</label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Enter full name"
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] text-slate-500 font-semibold uppercase">Business / Store Name (Optional)</label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g., Alaba Tech Hub"
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] text-slate-500 font-semibold uppercase">Delivery Mode</label>
                      <select
                        value={deliveryOption}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-850 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="Ikeja Office Pickup">Pickup at Suite A08 Platinum plaza, Ikeja, Lagos</option>
                        <option value="Lagos Standard Shipping">Delivery within Lagos (Same day)</option>
                        <option value="Nationwide Safe Shipping">Nationwide Delivery (Interstate)</option>
                      </select>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 bg-slate-950 border-t border-slate-900 space-y-4 relative">
                <div className="absolute inset-x-0 -top-[1px] h-[1px] bg-gradient-to-r from-blue-500 via-rose-500 to-blue-500 opacity-30" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-baseline pt-2 border-t border-slate-900">
                    <span className="text-white font-bold text-base">Inquiry Items:</span>
                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400">
                      {totalItems}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 text-right">
                    Foreign used units · Bulkcell confirms current quote on WhatsApp.
                  </p>
                </div>

                {/* Submit WhatsApp Action */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/15 hover:shadow-rose-500/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer text-sm uppercase tracking-wider"
                  >
                    <MessageSquare className="h-4.5 w-4.5" />
                    Submit Inquiry to WhatsApp
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full py-2 text-slate-500 hover:text-slate-300 transition-colors text-xs font-semibold"
                  >
                    Add More Items
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
