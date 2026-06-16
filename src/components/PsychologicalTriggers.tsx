import { useState, useEffect } from 'react';
import { ShoppingBag, Clock, Sparkles, Eye, Flame, Zap, Award, Bell, Shield, X } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data';

interface PsychologicalTriggersProps {
  cartCount: number;
  onOpenCart: () => void;
  onAddToCart: (product: Product) => void;
  isCartOpen?: boolean;
}

export default function PsychologicalTriggers({ cartCount, onOpenCart, onAddToCart, isCartOpen = false }: PsychologicalTriggersProps) {
  // FOMO Purchase Toasts State
  const [toast, setToast] = useState<{
    id: number;
    message: string;
    productName: string;
    timeAgo: string;
    location: string;
  } | null>(null);

  // Exit Intent Modal State
  const [showExitModal, setShowExitModal] = useState(false);
  const [userHasBeenWarned, setUserHasBeenWarned] = useState(false);

  // Inactivity Timer
  const [isInactive, setIsInactive] = useState(false);

  // VIP Cart Expiry Countdown Timer
  const [cartSecondsLeft, setCartSecondsLeft] = useState(900); // 15 mins default

  // Lists of simulated locations and buyer names across Israel
  const locations = [
    'סביון', 'הרצליה פיתוח', 'תל אביב - יפו', 'קיסריה', 'רמת השרון', 
    'כפר שמריהו', 'חיפה, דניה', 'ירושלים, רחביה', 'כפר ורדים', 'ארסוף'
  ];

  const premiumBuyerDescriptions = [
    'רוכש חוזר', 'לקוח קלאב VIP', 'חבר מועדון עליון', 'משתמש חדש'
  ];

  // Pick random products to trigger FOMO toast
  const triggerFomoToast = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomDesc = premiumBuyerDescriptions[Math.floor(Math.random() * premiumBuyerDescriptions.length)];
    const timeOptions = ['לפני דקה', 'הרגע', 'לפני 2 דקות', 'לפני 30 שניות'];
    const randomTime = timeOptions[Math.floor(Math.random() * timeOptions.length)];

    setToast({
      id: Date.now(),
      message: `רוכש מ${randomLocation} (${randomDesc})`,
      productName: randomProduct.title,
      timeAgo: randomTime,
      location: randomLocation,
    });

    // Auto-remove toast after 6 seconds
    setTimeout(() => {
      setToast(prev => prev && prev.id ? null : prev);
    }, 6000);
  };

  // Exit Intent Trigger Handler
  const triggerExitIntent = () => {
    if (!userHasBeenWarned && cartCount > 0) {
      setShowExitModal(true);
      setUserHasBeenWarned(true);
    }
  };

  useEffect(() => {
    // 1. Setup periodic FOMO toasts (Every 25 seconds, initial at 6s)
    const toastTimeout = setTimeout(() => {
      triggerFomoToast();
    }, 6000);

    const toastInterval = setInterval(() => {
      triggerFomoToast();
    }, 28000);

    // 2. Setup mouseout detector (Exit Intent)
    const handleMouseLeave = (e: MouseEvent) => {
      // If the mouse cursor goes above the top boundary (indicating closing tab/switching url)
      if (e.clientY < 20) {
        triggerExitIntent();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // 3. User inactivity detector (after 30 seconds of no interaction, flag exit modal if has items)
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivity = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (cartCount > 0 && !userHasBeenWarned) {
          setShowExitModal(true);
          setUserHasBeenWarned(true);
        }
      }, 35000);
    };

    window.addEventListener('mousemove', resetInactivity);
    window.addEventListener('keydown', resetInactivity);
    resetInactivity();

    // 4. Countdown Timer for Exclusive Offer
    const countdownInterval = setInterval(() => {
      setCartSecondsLeft(prev => {
        if (prev <= 1) {
          return 900; // Reset countdown to maintain continuous urgency Loop
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(toastTimeout);
      clearInterval(toastInterval);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', resetInactivity);
      window.removeEventListener('keydown', resetInactivity);
      clearInterval(countdownInterval);
    };
  }, [cartCount, userHasBeenWarned]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* 1. FOMO TOAST POPUP (Bottom right / Left on desktop) */}
      {toast && (
        <div 
          onClick={onOpenCart}
          className={`fixed bottom-6 z-55 bg-black/95 border border-gold-500/30 text-white rounded-lg p-4 shadow-[0_10px_35px_rgba(212,175,55,0.15)] flex items-start gap-4 max-w-sm cursor-pointer hover:border-gold-500 transition-all duration-300 animate-in slide-in-from-left duration-500 text-right font-sans ${isCartOpen ? 'hidden md:flex md:left-[470px]' : 'left-6'}`}
          dir="rtl"
        >
          <div className="bg-gold-500/10 p-2.5 rounded-full border border-gold-500/20 text-gold-500 shrink-0 mt-0.5">
            <Bell className="w-5 h-5 animate-bounce" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-gray-400 text-xs font-light">{toast.timeAgo}</span>
              <span className="text-gold-500 text-[10px] tracking-wider uppercase bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">רכישה אקסקלוסיבית</span>
            </div>
            <p className="text-white text-xs font-semibold mb-0.5 leading-snug">{toast.message}</p>
            <p className="text-gold-400 text-xs truncate">רכש את: <span className="text-white underline font-medium">{toast.productName}</span></p>
            <div className="flex items-center gap-1.5 mt-2 text-[10px] text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span>משלוח VIP מבוטח מאושר ויצא לדרך</span>
            </div>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setToast(null);
            }} 
            className="text-gray-500 hover:text-white transition-colors p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 2. EXIT INTENT / INACTIVITY RESCUE DIALOG */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[60] flex items-center justify-center p-4 text-right transition-opacity" dir="rtl">
          <div className="bg-charcoal-900 border-2 border-gold-500/50 max-w-lg w-full rounded-none p-8 relative shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowExitModal(false)}
              className="absolute left-6 top-6 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 text-gold-500 mb-6 justify-start">
              <Sparkles className="w-7 h-7 animate-pulse text-gold-500" />
              <span className="text-xs uppercase tracking-widest font-mono">הטבת מועדון מוגבלת לזמן קצר</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 tracking-wide leading-tight">
              המתן! לא חבל לפספס את המלאי?
            </h3>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              שמנו לב שהשארת פריטים נדירים בסל שלך. המלאי של קולקציית העילית מצומצם ביותר והביקוש בשיאו.
            </p>

            {/* Exclusive VIP Incentive Card */}
            <div className="bg-black/60 border border-gold-500/20 p-5 mb-6 rounded flex items-start gap-4">
              <div className="bg-gold-500/10 p-3 rounded-full text-gold-500 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-1">קיבלת שדרוג VIP מיידי!</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  אם תשלים את ההזמנה ב-15 הדקות הקרובות, תקבל <strong className="text-gold-500">משלוח VIP מבוטח חינמי</strong> (בשווי ₪150) פלוס <strong className="text-white">אריזת מתנה מלכותית</strong>.
                </p>
                <div className="flex items-center gap-2 mt-3 text-gold-500">
                  <Clock className="w-3.5 h-3.5 text-gold-500" />
                  <span className="text-xs font-mono font-bold tracking-wider">
                    ההטבה תפוג בעוד: <span className="bg-gold-500 text-black px-1.5 py-0.5 rounded font-bold font-mono text-xs">{formatTime(cartSecondsLeft)}</span> דקות
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setShowExitModal(false);
                  onOpenCart();
                }}
                className="flex-1 bg-gold-500 text-black font-semibold py-4 text-sm tracking-widest uppercase hover:bg-gold-400 transition-colors cursor-pointer text-center"
              >
                השלם רכישה מאובטחת כעת
              </button>
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-shrink-0 border border-charcoal-800 text-gray-400 hover:text-white px-6 py-4 text-xs tracking-wider transition-colors"
              >
                המשך לשוטט באתר
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-gray-500">
              <Shield className="w-3 h-3 text-gold-500" />
              <span>תשלום מאובטח בטכנולוגיית SSL 256-bit</span>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
