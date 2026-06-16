import { useState, useEffect } from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag, Sparkles, Clock } from 'lucide-react';
import { PayPalButtons } from "@paypal/react-paypal-js";

function CartCountdown() {
  const [seconds, setSeconds] = useState(900); // 15 mins

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev <= 1 ? 900 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <span className="bg-gold-500 text-black px-1.5 py-0.5 font-bold font-mono text-xs rounded animate-pulse">
      {mins.toString().padStart(2, '0')}:{secs.toString().padStart(2, '0')}
    </span>
  );
}

function CartItemImage({ product }: { product: any }) {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);

  const handleError = () => {
    const fallbackImages: Record<string, string> = {
      'שעוני יוקרה': 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
      'ביגוד וחייטות עילית': 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop',
      'תכשיטי יוקרה': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop',
      'חגורות ואביזרי עור': 'https://images.unsplash.com/photo-1624222247344-550fb8ec2b3d?q=80&w=800&auto=format&fit=crop',
      'משקפי שמש': 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
      'הנעלה אקסקלוסיבית': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop'
    };

    const fallback = fallbackImages[product.category] || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop';
    if (imgSrc !== fallback) {
      setImgSrc(fallback);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={product.title} 
      referrerPolicy="no-referrer"
      onError={handleError}
      className="w-full h-full object-cover"
    />
  );
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onSuccess: (customerName: string) => void;
}

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onSuccess }: CartDrawerProps) {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 left-0 bottom-0 w-full md:w-[450px] bg-charcoal-900 border-r border-charcoal-800 z-50 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
        
        <div className="px-6 py-6 border-b border-charcoal-800 flex items-center justify-between">
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-serif text-white">סל הקניות שלך</h2>
            <ShoppingBag className="text-gold-500 w-5 h-5" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col">
          <div className="px-6 py-6 flex-1">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500 min-h-[300px]">
                <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-lg">העגלה שלך ריקה כרגע.</p>
                <button 
                  onClick={onClose}
                  className="mt-6 text-gold-500 hover:text-gold-400 underline underline-offset-4"
                >
                  המשך לקנות
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-24 h-24 bg-black overflow-hidden flex-shrink-0">
                      <CartItemImage product={item.product} />
                    </div>
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <h4 className="text-white font-medium">{item.product.title}</h4>
                        <div className="text-gray-400 text-sm mt-1">{item.product.category}</div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-3 border border-charcoal-800 px-2 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white text-sm w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="text-gray-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-white font-serif">
                          ₪ {(item.product.price * item.quantity).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 bg-black border-t border-charcoal-800 mt-auto z-10 shrink-0">
              {/* VIP Promotion Offer */}
              <div className="bg-gold-500/10 border border-gold-500/30 p-4 mb-5 text-right font-sans rounded">
                <div className="flex items-center gap-2 mb-1.5 text-gold-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
                  <span className="text-xs font-semibold uppercase tracking-wider">שדרוג VIP הופעל בהצלחה</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  זיהינו פריטים עם ביקוש גבוה במיוחד. שמרנו לך את המלאי וקיבלת <strong className="text-gold-500 font-medium">משלוח VIP מבוטח חינם</strong> ואריזת שי מלכותית.
                </p>
                <div className="flex items-center justify-between text-xs text-gold-400 border-t border-gold-500/10 pt-2 font-mono">
                  <span>המלאי וההטבה שמורים ל-</span>
                  <CartCountdown />
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-gray-300">סה"כ לתשלום</span>
                <span className="text-2xl font-serif text-white">₪ {total.toLocaleString()}</span>
              </div>
              
              <div className="mt-4 relative z-0">
                <PayPalButtons 
                  style={{ layout: "vertical", color: "gold", shape: "rect", height: 48 }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      intent: "CAPTURE",
                      purchase_units: [{
                        amount: {
                          currency_code: "ILS",
                          value: total.toString()
                        },
                        description: "הזמנה בחנות היוקרה Aura"
                      }]
                    });
                  }}
                  onApprove={async (data, actions) => {
                    if (actions.order) {
                      try {
                        const order = await actions.order.capture();
                        await fetch('/api/notify-order', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ order, cart })
                        });
                        onSuccess(order.payer.name?.given_name || 'לקוח יקר');
                      } catch(err) {
                        console.error(err);
                        alert("אירעה שגיאה בעיבוד ההזמנה מול השרת");
                      }
                    }
                  }}
                />
              </div>
              <p className="text-center text-xs text-gray-500 mt-4 leading-relaxed pb-4">
                תשלום מאובטח ומוצפן. לחץ על כפתור האשראי וטופס יפתח ממש כאן למטה.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
