import { useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import AboutAura from './components/AboutAura';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import PsychologicalTriggers from './components/PsychologicalTriggers';
import { products } from './data';
import { Product, CartItem } from './types';
import { CheckCircle2, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [customerName, setCustomerName] = useState<string | null>(null);

  // Search & Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('הכל');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Dynamically extract categories from products plus "הכל"
  const categories = ['הכל', ...Array.from(new Set(products.map((p) => p.category)))];

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const newQuantity = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const handlePaymentSuccess = (name: string) => {
    setIsSuccess(true);
    setCustomerName(name);
    setCart([]);
    setIsCartOpen(false);
  };

  // Filter products based on search query & selected category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'הכל' || product.category === selectedCategory;
    const matchesSearch = 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'low-to-high') return a.price - b.price;
    if (sortBy === 'high-to-low') return b.price - a.price;
    return 0; // "featured" / default order
  });

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
        <CheckCircle2 className="w-20 h-20 text-gold-500 mb-6" />
        <h1 className="text-4xl text-white font-serif mb-4">הזמנתך התקבלה בהצלחה!</h1>
        <p className="text-gray-400 mb-8 max-w-md">
          {customerName ? `תודה רבה ${customerName}, ` : `תודה שרכשת ב-Aura. `}
          הזמנתך שולמה בהצלחה והמשלוח יצא בדרך אליך! בעל החנות קיבל הרגע התראה למייל על ההזמנה שלך.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="border border-gold-500 text-gold-500 px-8 py-3 hover:bg-gold-500 hover:text-black transition-colors uppercase tracking-wider text-sm"
        >
          חזרה לחנות
        </button>
      </div>
    );
  }

  return (
    <PayPalScriptProvider options={{ clientId: (import.meta as any).env.VITE_PAYPAL_CLIENT_ID || "test", currency: "ILS" }}>
      <div className="min-h-screen bg-black flex flex-col relative text-right" dir="rtl">
        <Header cartItemCount={cartItemCount} onOpenCart={() => setIsCartOpen(true)} />
        
        <main className="flex-1 pt-26">
          <Hero />
          
          {/* Main store experience section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="collection-section">
            <div className="flex flex-col items-center mb-16">
              <span className="text-gold-500 text-sm tracking-widest uppercase mb-2">מוצרים אקסקלוסיביים</span>
              <h2 className="text-4xl font-serif text-white tracking-wide">קולקציית העילית</h2>
              <div className="w-16 h-px bg-gold-400 mt-6"></div>
            </div>

            {/* Premium Filtering & Searching Panel */}
            <div className="bg-charcoal-900 border border-charcoal-800 p-6 md:p-8 mb-16">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                
                {/* Search Bar */}
                <div className="relative w-full lg:max-w-xs">
                  <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                    <Search className="w-4 h-4" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="חפשו מותג, מוצר או קטגוריה..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black border border-charcoal-850 hover:border-charcoal-700 focus:border-gold-500 text-white pl-4 pr-11 py-3 text-sm focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>

                {/* Categories Horizontal Tabs */}
                <div className="w-full flex flex-wrap items-center gap-2 py-2 order-3 lg:order-2 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-2.5 text-xs tracking-wider uppercase whitespace-nowrap transition-all border ${
                        selectedCategory === category
                          ? 'border-gold-500 bg-gold-500 text-black font-semibold'
                          : 'border-charcoal-800 text-gray-400 hover:text-white hover:border-charcoal-600 bg-black/40'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Sorting Select */}
                <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end order-2 lg:order-3">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <SlidersHorizontal className="w-4 h-4 text-gold-500" />
                    <span>סינון:</span>
                  </div>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-black border border-charcoal-850 hover:border-charcoal-700 text-white px-4 py-2.5 text-xs focus:outline-none focus:ring-0 cursor-pointer transition-colors"
                  >
                    <option value="featured">מומלצי הבוטיק</option>
                    <option value="low-to-high">מחיר: מהנמוך לגבוה</option>
                    <option value="high-to-low">מחיר: מהגבוה לנמוך</option>
                  </select>
                </div>

              </div>

              {/* Status indicator if tags or query search is active */}
              {(selectedCategory !== 'הכל' || searchQuery !== '') && (
                <div className="mt-6 pt-6 border-t border-charcoal-800 flex items-center justify-between text-xs text-gray-400">
                  <div>
                    נמצאו <span className="text-gold-500 font-bold">{sortedProducts.length}</span> מוצרים תואמים
                    {selectedCategory !== 'הכל' && <span> בקטגוריית <strong className="text-white">{selectedCategory}</strong></span>}
                    {searchQuery !== '' && <span> עבור החיפוש <strong className="text-white">"{searchQuery}"</strong></span>}
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedCategory('הכל');
                      setSearchQuery('');
                      setSortBy('featured');
                    }}
                    className="text-gold-500 hover:text-white underline transition-colors"
                  >
                    איפוס סינונים
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-24 bg-charcoal-900 border border-charcoal-800">
                <p className="text-gray-400 text-lg mb-4">לא נמצאו מוצרים התואמים את הבחירה שלך.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('הכל');
                    setSearchQuery('');
                  }}
                  className="text-gold-500 border border-gold-500 px-6 py-2.5 text-xs hover:bg-gold-500 hover:text-black transition-colors"
                >
                  הצג את כל הקולקציה
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {sortedProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                  />
                ))}
              </div>
            )}
          </section>

          {/* Premium added volume sections */}
          <AboutAura />
          <Reviews />
          <Newsletter />
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onSuccess={handlePaymentSuccess}
        />

        <PsychologicalTriggers 
          cartCount={cartItemCount}
          onOpenCart={() => setIsCartOpen(true)}
          onAddToCart={addToCart}
          isCartOpen={isCartOpen}
        />
      </div>
    </PayPalScriptProvider>
  );
}
