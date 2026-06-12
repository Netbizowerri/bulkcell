import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X } from 'lucide-react';

// ── Types ──
interface ChatMessage {
  role: 'bot' | 'user';
  text: string;
}

type ChatMode =
  | 'main'
  | 'apple'
  | 'apple_iphone13'
  | 'apple_iphone12'
  | 'apple_iphone11'
  | 'apple_iphonex'
  | 'samsung'
  | 'samsung_s22'
  | 'samsung_s21'
  | 'samsung_note'
  | 'samsung_zfold'
  | 'hp'
  | 'hp_elitebook'
  | 'hp_probook'
  | 'dell'
  | 'dell_latitude'
  | 'hotdeals'
  | 'office'
  | 'ordering'
  | 'wholesale'
  | 'delivery'
  | 'condition'
  | 'contact'
  | 'pricing';

interface ActionDef {
  label: string;
  mode: ChatMode;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

// ── Quick Actions ──
const ACTIONS: Record<ChatMode, ActionDef[]> = {
  main: [
    { label: '📱 Need latest iPhones?', mode: 'apple' },
    { label: '📱 Looking for Samsung Galaxy?', mode: 'samsung' },
    { label: '💻 HP laptop options?', mode: 'hp' },
    { label: '💻 Dell laptop options?', mode: 'dell' },
  ],
  apple: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '🍎 iPhone 13 series', mode: 'apple_iphone13' },
    { label: '🍎 iPhone 12 series', mode: 'apple_iphone12' },
    { label: '🍎 iPhone 11 series', mode: 'apple_iphone11' },
    { label: '🍎 iPhone XR / XS / XS Max', mode: 'apple_iphonex' },
    { label: '📞 Chat on WhatsApp to order', mode: 'ordering' },
  ],
  apple_iphone13: [
    { label: '🔙 Apple Models', mode: 'apple' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  apple_iphone12: [
    { label: '🔙 Apple Models', mode: 'apple' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  apple_iphone11: [
    { label: '🔙 Apple Models', mode: 'apple' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  apple_iphonex: [
    { label: '🔙 Apple Models', mode: 'apple' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  samsung: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📱 Galaxy S22 Ultra', mode: 'samsung_s22' },
    { label: '📱 Galaxy S21 series', mode: 'samsung_s21' },
    { label: '📱 Galaxy Note 20 series', mode: 'samsung_note' },
    { label: '📱 Galaxy Z Fold 4', mode: 'samsung_zfold' },
    { label: '📞 Chat on WhatsApp to order', mode: 'ordering' },
  ],
  samsung_s22: [
    { label: '🔙 Samsung Models', mode: 'samsung' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  samsung_s21: [
    { label: '🔙 Samsung Models', mode: 'samsung' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  samsung_note: [
    { label: '🔙 Samsung Models', mode: 'samsung' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  samsung_zfold: [
    { label: '🔙 Samsung Models', mode: 'samsung' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  hp: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '💻 HP EliteBook 840', mode: 'hp_elitebook' },
    { label: '💻 HP ProBook 450', mode: 'hp_probook' },
    { label: '📞 Chat on WhatsApp to order', mode: 'ordering' },
  ],
  hp_elitebook: [
    { label: '🔙 HP Models', mode: 'hp' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  hp_probook: [
    { label: '🔙 HP Models', mode: 'hp' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  dell: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '💻 Dell Latitude 7390', mode: 'dell_latitude' },
    { label: '💻 Dell Latitude 7480', mode: 'dell_latitude' },
    { label: '📞 Chat on WhatsApp to order', mode: 'ordering' },
  ],
  dell_latitude: [
    { label: '🔙 Dell Models', mode: 'dell' },
    { label: '🔙 Main Menu', mode: 'main' },
  ],
  hotdeals: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📞 Claim a deal on WhatsApp', mode: 'contact' },
  ],
  office: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📞 Call sales: 07025002885', mode: 'contact' },
  ],
  ordering: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📦 Bulk/wholesale info', mode: 'wholesale' },
    { label: '💰 How much does it cost?', mode: 'pricing' },
  ],
  wholesale: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📞 Call wholesale: 08060125762', mode: 'contact' },
  ],
  delivery: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📍 Office location', mode: 'office' },
  ],
  condition: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📱 Latest iPhones?', mode: 'apple' },
    { label: '📱 Latest Samsung?', mode: 'samsung' },
  ],
  contact: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📍 Office location?', mode: 'office' },
  ],
  pricing: [
    { label: '🔙 Main Menu', mode: 'main' },
    { label: '📞 Chat on WhatsApp for price', mode: 'ordering' },
  ],
};

// ── Knowledge Base ──
const KNOWLEDGE: Record<ChatMode, string> = {
  main: `Hello! Welcome to Bulkcell Trading Company — I'm MONDOAI, your pre-owned device assistant. 👋

We specialise in high-quality *pre-owned Apple, Samsung, HP, and Dell devices*, all carefully sourced from the UK and US.

Just tap any of the buttons below and I'll give you the information you need straight away.`,

  apple: `🍎 *Pre-Owned Apple iPhones — Sourced from UK/US*

We carry a full range of pre-owned iPhones. All are Grade A+++ with genuine OEM screens and 85%+ battery health.

👇 *Tap any model for full details:*`,

  apple_iphone13: `🍎 *iPhone 13 Series (Pre-Owned from UK/US)*

*Models Available:*
• iPhone 13 — 6.1" Super Retina XDR, A15 Bionic
• iPhone 13 Mini — 5.4" compact, same A15 power
• iPhone 13 Pro — 120Hz ProMotion, 3x telephoto
• iPhone 13 Pro Max — 6.7" largest, best battery life

*Pre-Owned Condition:*
✅ Grade A+++ — near-mint cosmetic condition
✅ 85%+ minimum battery health
✅ 100% original OEM Super Retina XDR displays
✅ Sourced from UK/US — no refurbished parts

*To check current stock and pricing:* Chat with us on WhatsApp at 07025002885`,

  apple_iphone12: `🍎 *iPhone 12 Series (Pre-Owned from UK/US)*

*Models Available:*
• iPhone 12 — 6.1" OLED, Ceramic Shield, 5G
• iPhone 12 Mini — 5.4" compact OLED
• iPhone 12 Pro — LiDAR, Stainless Steel, 2x telephoto
• iPhone 12 Pro Max — 6.7" largest, best camera system

*Pre-Owned Condition:*
✅ Grade A+++ with original OEM OLED displays
✅ 85%+ battery health minimum
✅ All genuine components — no aftermarket parts
✅ Sourced from verified UK/US channels

*To order:* WhatsApp 07025002885 for current stock and colors.`,

  apple_iphone11: `🍎 *iPhone 11 Series (Pre-Owned from UK/US)*

*Models Available:*
• iPhone 11 — 6.1" Liquid Retina, A13 Bionic
• iPhone 11 Pro — 5.8" OLED, triple camera
• iPhone 11 Pro Max — 6.5" OLED, best battery

*Pre-Owned Condition:*
✅ Grade A — original displays, minor signs of use
✅ 80%+ battery health
✅ Full diagnostic testing completed
✅ UK/US sourced — genuine hardware only

*Check availability:* WhatsApp 07025002885`,

  apple_iphonex: `🍎 *iPhone XR / XS / XS Max (Pre-Owned from UK/US)*

*Models Available:*
• iPhone XR — 6.1" Liquid Retina, A12 Bionic, all-day battery
• iPhone XS — 5.8" OLED, stainless steel frame
• iPhone XS Max — 6.5" OLED, dual camera system

*Pre-Owned Condition:*
✅ Grade A or A++ depending on stock batch
✅ Original OLED/LCD displays — 100% genuine
✅ Tested Face ID, cameras, charging ports
✅ Sourced from UK/US channels

*Price and availability:* WhatsApp 07025002885`,

  samsung: `📱 *Pre-Owned Samsung Galaxy — Sourced from UK/US*

We carry a wide selection of pre-owned Samsung Galaxy devices. All feature original AMOLED displays and are fully tested.

👇 *Tap a model for details:*`,

  samsung_s22: `📱 *Galaxy S22 Ultra (Pre-Owned from UK/US)*

*Key Specs:*
• 6.8" Dynamic AMOLED 2X, 120Hz
• Exynos 2200 / Snapdragon 8 Gen 1
• 108MP main camera with Space Zoom
• Built-in S Pen
• 5000mAh battery

*Pre-Owned Grade:* A+++ — original AMOLED display, 85%+ battery
*Sourced from:* UK and US

*Tap "Chat on WhatsApp" to check current stock and pricing.`,

  samsung_s21: `📱 *Galaxy S21 Series (Pre-Owned from UK/US)*

*Models Available:*
• Galaxy S21 — 6.2" 120Hz AMOLED, triple camera
• Galaxy S21+ — 6.7", larger battery
• Galaxy S21 Ultra — 108MP, S Pen support, 10x optical zoom

*Pre-Owned Condition:*
✅ Grade A+++ original AMOLED displays
✅ 85%+ battery health
✅ UK/US sourced — fully tested

*WhatsApp 07025002885 to order.*`,

  samsung_note: `📱 *Galaxy Note 20 Series (Pre-Owned from UK/US)*

*Models Available:*
• Note 20 — 6.7" AMOLED, S Pen, 3x zoom
• Note 20 Ultra — 6.9" 120Hz, 108MP, laser AF

*Perfect for:* Business users who need the S Pen productivity suite.

*Condition:* Pre-Owned Grade A — original AMOLED, S Pen included, 80%+ battery.

*Sourced from UK/US. WhatsApp 07025002885 for pricing.`,

  samsung_zfold: `📱 *Galaxy Z Fold 4 (Pre-Owned from UK/US)*

*Key Specs:*
• 7.6" foldable AMOLED main display
• 6.2" cover display
• 50MP main camera
• Multitasking with up to 3 apps
• S Pen (Fold Edition) support

*Pre-Owned Condition:* Grade A — original foldable display, hinge mechanism fully tested.

*⚠ Limited stock — sourced from UK/US. WhatsApp 07025002885 for availability.`,

  hp: `💻 *Pre-Owned HP Professional Laptops — Sourced from UK*

We carry pre-owned HP business laptops selected for students, professionals, and corporate teams.

👇 *Tap a model for details:*`,

  hp_elitebook: `💻 *HP EliteBook 840 Series (Pre-Owned from UK)*

*Available Models:*
• *EliteBook 840 G3* — Intel Core i5/i7, 8–16GB RAM, 256–512GB SSD, 14" FHD
• *EliteBook 840 G5* — Intel 8th Gen Core i5/i7, 8–16GB RAM, 256–512GB SSD, 14" FHD

*Perfect for:*
• Office teams and corporate setups
• Students and remote work
• Resellers looking for bulk business laptops

*Condition:* Pre-Owned, fully tested, original components, sourced from verified UK channels.

*WhatsApp 07025002885 for current stock and pricing.`,

  hp_probook: `💻 *HP ProBook 450 G7 (Pre-Owned from UK)*

*Key Specs:*
• 15.6" FHD display
• Intel 10th Gen Core i5/i7
• 8–16GB RAM, 256–512GB SSD
• Full keyboard with numeric keypad

*Ideal for:* General business computing, students, and budget-conscious professionals.

*Condition:* Pre-Owned from UK, fully tested, genuine components.

*Bulk orders available — WhatsApp 07025002885.`,

  dell: `💻 *Pre-Owned Dell Latitude Laptops — Sourced from UK*

We carry pre-owned Dell Latitude business laptops for portable productivity.

👇 *Tap a model for details:*`,

  dell_latitude: `💻 *Dell Latitude Series (Pre-Owned from UK)*

*Available Models:*
• *Latitude 7390* — 13.3" FHD, Intel 8th Gen Core i5/i7, 8–16GB RAM, 256–512GB SSD. Ultra-portable for professionals on the go.
• *Latitude 7480* — 14" FHD, Intel 7th Gen Core i5/i7, 8–16GB RAM, 256–512GB SSD. Reliable business workhorse.

*Condition:* Pre-Owned, fully tested, sourced from verified UK channels.

*Student and corporate bulk discounts available. WhatsApp 07025002885.`,

  hotdeals: `🔥 *Hot Deals — Current Promotions*

We run exclusive weekly promotions on select pre-owned UK/US devices. These change regularly and are limited to available stock.

👇 *How to claim:*
1. Browse our Hot Deals page on the website
2. Tap "Get Hot Deal" on any offer
3. You'll be connected to WhatsApp to confirm availability

*Or simply call:* 07025002885 and ask about current hot deals!

*Tip:* New deals every week — check back often!`,

  office: `📍 *Our Office Location*

*Bulkcell Trading Company*
Suite A08 Platinum Plaza,
Ikeja, Lagos, Nigeria.

*Business Hours:*
Monday – Saturday: 9:00 AM – 6:00 PM
Sunday: Closed

*Phone Numbers:*
• Sales: 07025002885
• Wholesale: 08060125762
• Support: 07034403659

*Email:* info@bulkcell.com.ng

You're welcome to visit our showroom to inspect pre-owned devices in person!`,

  ordering: `📦 *How to Place an Order*

Ordering from Bulkcell is quick and easy:

*Step 1:* Browse our full catalog of pre-owned Apple, Samsung, HP, and Dell devices.
*Step 2:* Add items to your Quote Basket.
*Step 3:* Tap "Send to WhatsApp" with your quote list.
*Step 4:* Our team responds with current pricing and availability.

*Retail (1 unit):* Direct WhatsApp inquiry — fast response.
*Wholesale (5+ units):* Mix across brands for bulk pricing.

*Start now:*
📞 Chat on WhatsApp: 07025002885
📍 Visit us: Suite A08 Platinum Plaza, Ikeja, Lagos.`,

  wholesale: `📦 *Wholesale & Bulk Orders*

For business buyers ordering 5+ devices:

*What you get:*
• Mix and match across Apple, Samsung, HP, and Dell
• Competitive bulk pricing
• Real-time stock checks
• Direct WhatsApp quote confirmation
• Nationwide delivery available

*Call Wholesale Desk:* 08060125762
*Chat on WhatsApp:* 07025002885

Perfect for retailers, campus resellers, and corporate office upgrades across Nigeria.`,

  delivery: `🚚 *Nationwide Delivery*

Yes, we deliver across Nigeria!

*Delivery Details:*
• Secure transit from our Ikeja, Lagos outlet
• Tracking and insurance available
• Delivery to all 36 states + FCT

*Pickup Option:*
Collect in person at:
Suite A08 Platinum Plaza, Ikeja, Lagos.

*Hours:* Mon – Sat, 9AM – 6PM
*Delivery coordination:* 07034403659`,

  condition: `✅ *Device Condition — Pre-Owned from UK/US*

All our devices are pre-owned, carefully sourced from the United Kingdom and United States.

*Our Grading Standard:*
• *Grade A+++ Pristine* — near-mint cosmetic condition
• *85%+ battery health* minimum (smartphones)
• *100% original OEM screens* — no aftermarket parts
• Full diagnostic testing before dispatch

*What we guarantee:*
✓ Authentic UK/US-sourced hardware
✓ No refurbished component swaps
✓ Original displays with True Tone (iPhone)
✓ Original AMOLED screens (Samsung)
✓ Fully tested cameras, ports, and sensors

*Every device is clearly labeled with its origin on our site.`,

  contact: `📞 *Contact Us*

*Main Office:*
Suite A08 Platinum Plaza,
Ikeja, Lagos, Nigeria.

*Phone Lines:*
• Sales: 07025002885
• Wholesale/Bulk: 08060125762
• Support/Delivery: 07034403659

*Email:* info@bulkcell.com.ng

*Business Hours:*
Mon – Sat: 9AM – 6PM

*Chat on WhatsApp:* 07025002885

We're located at Computer Village, Ikeja — feel free to visit!`,

  pricing: `💰 *Pricing Information*

Since prices change based on current UK/US market rates and available stock, we provide pricing directly on WhatsApp.

👇 *Here's how to get a quote:*

1. Browse the devices you're interested in on our website
2. Add them to your Quote Basket
3. Tap "Send to WhatsApp" for an instant price quote

*Or simply send us a message on WhatsApp:*
📞 07025002885

We respond quickly with current pricing, available colors, and delivery options!`,
};

// ── Component ──
export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: KNOWLEDGE.main },
  ]);
  const [mode, setMode] = useState<ChatMode>('main');
  const [inputMessage, setInputMessage] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAction = (nextMode: ChatMode) => {
    const response = KNOWLEDGE[nextMode];
    const label = ACTIONS[nextMode]?.find((a) => a.mode === nextMode)?.label ?? '';
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: label || nextMode },
      { role: 'bot', text: response },
    ]);
    setMode(nextMode);
  };

  const currentActions = ACTIONS[mode];

  const handleSendMessage = () => {
    const text = inputMessage.trim();
    if (!text) return;
    setInputMessage('');

    const userMsg: ChatMessage = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);

    const lower = text.toLowerCase();
    let botResponse = '';

    if (lower.includes('iphone') || lower.includes('apple') || lower.includes('ios')) {
      botResponse = KNOWLEDGE.apple;
      setMode('apple');
    } else if (lower.includes('samsung') || lower.includes('galaxy') || lower.includes('android')) {
      botResponse = KNOWLEDGE.samsung;
      setMode('samsung');
    } else if (lower.includes('hp') || lower.includes('elitebook') || lower.includes('probook')) {
      botResponse = KNOWLEDGE.hp;
      setMode('hp');
    } else if (lower.includes('dell') || lower.includes('latitude')) {
      botResponse = KNOWLEDGE.dell;
      setMode('dell');
    } else if (lower.includes('hot') || lower.includes('deal') || lower.includes('promo')) {
      botResponse = KNOWLEDGE.hotdeals;
      setMode('hotdeals');
    } else if (lower.includes('location') || lower.includes('address') || lower.includes('office') || lower.includes('ikeja') || lower.includes('plaza')) {
      botResponse = KNOWLEDGE.office;
      setMode('office');
    } else if (lower.includes('order') || lower.includes('buy') || lower.includes('purchase')) {
      botResponse = KNOWLEDGE.ordering;
      setMode('ordering');
    } else if (lower.includes('wholesale') || lower.includes('bulk')) {
      botResponse = KNOWLEDGE.wholesale;
      setMode('wholesale');
    } else if (lower.includes('delivery') || lower.includes('shipping') || lower.includes('dispatch')) {
      botResponse = KNOWLEDGE.delivery;
      setMode('delivery');
    } else if (lower.includes('condition') || lower.includes('grade') || lower.includes('quality') || lower.includes('battery')) {
      botResponse = KNOWLEDGE.condition;
      setMode('condition');
    } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('call') || lower.includes('number') || lower.includes('whatsapp') || lower.includes('email')) {
      botResponse = KNOWLEDGE.contact;
      setMode('contact');
    } else if (lower.includes('price') || lower.includes('cost') || lower.includes('how much')) {
      botResponse = KNOWLEDGE.pricing;
      setMode('pricing');
    } else {
      botResponse = `I'm not sure about that yet — let me connect you to our team!\n\n📞 *Call or WhatsApp us:*\n• Sales: 07025002885\n• Wholesale: 08060125762\n\nOr tap a button above to browse our pre-owned UK/US devices.`;
      setMode('main');
    }

    setMessages((prev) => [...prev, { role: 'bot', text: botResponse }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([{ role: 'bot', text: KNOWLEDGE.main }]);
    setMode('main');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950 z-50"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-4 right-4 left-4 sm:left-auto sm:w-[420px] z-50 max-h-[80vh] flex flex-col bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl shadow-blue-950/40 overflow-hidden"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-rose-600">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-white font-extrabold text-base tracking-wide">MONDOAI</span>
                  <span className="block text-xs text-slate-500 font-medium">Pre-Owned Device Expert</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Start over"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div ref={listRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5 scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-rose-600 text-white rounded-tr-md'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Quick Action Buttons ── */}
            <div className="px-5 pb-4 shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {currentActions.map((action) => (
                  <button
                    key={action.mode}
                    onClick={() => handleAction(action.mode)}
                    className="text-[13px] font-bold px-3.5 py-2 rounded-full border transition-all cursor-pointer bg-slate-900 border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Chat Input ── */}
            <div className="px-4 py-3 shrink-0 border-t border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question here..."
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-[11px] text-slate-600 mt-1.5 text-center">
                Or tap a button above — MONDOAI Pre-Owned Device Expert
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
