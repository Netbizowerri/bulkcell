import { useState, useMemo, useEffect } from 'react';
import { Search, Filter, RotateCcw, SlidersHorizontal, ShoppingBag } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

interface ShopProps {
  onAddToQuote: (product: Product, quantity: number, color: string) => void;
  activeTab: 'All' | 'Apple' | 'Samsung' | 'HP' | 'Dell';
  setActiveTab: (tab: 'All' | 'Apple' | 'Samsung' | 'HP' | 'Dell') => void;
}

export default function Shop({ onAddToQuote, activeTab, setActiveTab }: ShopProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Smartphones' | 'Laptops'>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'reviews' | 'alphabetical'>('featured');

  useEffect(() => {
    if (activeTab === 'Apple' || activeTab === 'Samsung') {
      setSelectedCategory('Smartphones');
      return;
    }

    if (activeTab === 'HP' || activeTab === 'Dell') {
      setSelectedCategory('Laptops');
      return;
    }

    setSelectedCategory('All');
  }, [activeTab]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveTab('All');
    setSelectedCategory('All');
    setSortBy('featured');
  };

  // Filtered and sorted products calculation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search Match
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand Match
      const matchesBrand = activeTab === 'All' ? true : product.brand === activeTab;

      // Category Match
      const matchesCategory = selectedCategory === 'All' ? true : product.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        // Prioritize featured models, then review count.
        if (a.isTrending && !b.isTrending) return -1;
        if (!a.isTrending && b.isTrending) return 1;
        return b.reviews - a.reviews;
      }
      if (sortBy === 'reviews') {
        return b.reviews - a.reviews;
      }
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [searchQuery, activeTab, selectedCategory, sortBy]);

  return (
    <div className="relative bg-slate-950 text-white min-h-screen py-12">
      {/* Ambient Glow Hues */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-rose-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Store Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-widest">Pre-Owned from UK · Bulkcell Outlet</span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Pre-Owned UK Devices Catalog
          </h1>
          <p className="text-slate-400 text-sm">
            Browse pre-owned UK and US devices: Apple iPhones, Samsung smartphones, HP laptops, and Dell Latitude laptops — all sourced from the United Kingdom and United States. Mix and match items in your Quote Basket and send your inquiry through WhatsApp.
          </p>
        </div>

        {/* Dynamic Filter Panel */}
        <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-6 mb-10 backdrop-blur-md space-y-6">
          
          {/* Search Bar + Sort options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-8 relative">
              <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pre-owned devices (e.g., 'iPhone 13 Pro Max', 'Galaxy S22 Ultra', 'HP EliteBook', 'Dell Latitude')..."
                className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500/60 focus:outline-none rounded-2xl pl-12 pr-4 py-3.5 text-sm placeholder-slate-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sorting options */}
            <div className="lg:col-span-4 flex items-center gap-3">
              <span className="text-xs text-slate-500 font-bold uppercase flex-shrink-0 tracking-wider">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'reviews' | 'alphabetical')}
                className="w-full bg-slate-950 border border-slate-850 focus:border-blue-500 rounded-xl px-3 py-3.5 text-sm text-white focus:outline-none transition-colors"
              >
                <option value="featured">Featured & Popular First</option>
                <option value="reviews">Most Reviewed First</option>
                <option value="alphabetical">Name: A to Z</option>
              </select>
            </div>

          </div>

          {/* Specific Brand & Category Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-slate-900 items-start">
            
            {/* Brand Ecosystem Filters */}
            <div className="md:col-span-5 space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Ecosystem Brand</label>
              <div className="flex flex-wrap items-center gap-2">
                {(['All', 'Apple', 'Samsung', 'HP', 'Dell'] as const).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setActiveTab(brand)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                      activeTab === brand
                        ? 'bg-gradient-to-r from-blue-600 to-rose-600 border-transparent text-white'
                        : 'bg-slate-950 border-slate-850 hover:border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {brand === 'All' ? 'All Brands' : brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Device Categories */}
            <div className="md:col-span-4 space-y-2.5">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Device Category</label>
              <div className="flex items-center gap-2">
                {(['All', 'Smartphones', 'Laptops'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-xs font-bold rounded-xl transition-all border cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-blue-950/60 border-blue-500/50 text-blue-300 font-bold'
                        : 'bg-slate-950 border-slate-850 hover:border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {category === 'All' ? 'All Devices' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Quote policy */}
            <div className="md:col-span-3 space-y-2.5 rounded-2xl border border-slate-850 bg-slate-950 p-4">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Quote Policy</label>
              <p className="text-xs leading-relaxed text-slate-400">
                Select pre-owned UK devices and request the current quote via WhatsApp.
              </p>
            </div>

          </div>

          {/* Filters Summary */}
          {(searchQuery || activeTab !== 'All' || selectedCategory !== 'All') && (
            <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <SlidersHorizontal className="h-3.5 w-3.5 text-rose-500" />
                <span>Active Filters:</span>
                {activeTab !== 'All' && (
                  <span className="bg-slate-950 border border-slate-850 px-2.5 py-1 rounded-full text-slate-300 font-medium">
                    Brand: {activeTab}
                  </span>
                )}
                {selectedCategory !== 'All' && (
                  <span className="bg-slate-950 border border-slate-850 px-2.5 py-1 rounded-full text-slate-300 font-medium">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-slate-950 border border-slate-850 px-2.5 py-1 rounded-full text-slate-300 font-medium truncate max-w-xs">
                    Keyword: "{searchQuery}"
                  </span>
                )}
              </div>

              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-bold cursor-pointer transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Reset All Filters
              </button>
            </div>
          )}

        </div>

        {/* Dynamic Products List Count */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500 font-semibold tracking-wider">
          <span>MATCHED PRE-OWNED DEVICES ({filteredProducts.length})</span>
          <span>Sourced from UK, US · Certified & tested</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 bg-slate-900/20 border border-slate-900 rounded-3xl text-center space-y-5 flex flex-col items-center justify-center min-h-[350px]"
          >
            <div className="p-4 bg-slate-950 rounded-full border border-slate-850">
              <Filter className="h-10 w-10 text-slate-600 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="text-white font-bold text-lg">No Devices Matched Your Criteria</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                We couldn't find any pre-owned devices matching your search. Try resetting your filters or searching for general terms like "iPhone" or "Samsung".
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-rose-600 text-white text-xs font-extrabold uppercase tracking-widest shadow-md shadow-blue-600/15 cursor-pointer"
            >
              Reset Filters & Search Again
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToQuote={onAddToQuote}
              />
            ))}
          </div>
        )}

        {/* Quick wholesale note banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-rose-950/25 border border-blue-900/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              Wholesale Orders & Bulk Delivery desks are fully open
            </div>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Looking for specific pre-owned UK/US models not listed here? Contact our Computer Village, Lagos wholesale agents for special requests.
              </p>
          </div>

          <a
            href="https://wa.me/2348060125762?text=Hi%20Bulkcell,%20I%20want%20to%20discuss%20a%20custom%20wholesale%20deal."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-rose-600 to-blue-600 text-white font-extrabold rounded-xl flex items-center gap-2 shadow-md hover:scale-101 active:scale-99 text-xs uppercase tracking-wider transition-all"
          >
            <ShoppingBag className="h-4 w-4" />
            Direct Wholesale Chat
          </a>
        </div>

      </div>
    </div>
  );
}
