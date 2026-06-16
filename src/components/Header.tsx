import { ShoppingBag, Menu, User } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export default function Header({ cartItemCount, onOpenCart }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-charcoal-800">
      <div className="bg-gold-500 text-charcoal-900 text-center text-xs py-1.5 font-semibold px-4 tracking-widest uppercase flex items-center justify-center gap-4 overflow-hidden select-none">
        <span>✦ משלוח אקספרס מבוטח חינם לכל הארץ</span>
        <span className="hidden md:inline">|</span>
        <span>✦ התחייבות ל-100% מקוריות ואחריות מעצבים</span>
        <span className="hidden lg:inline">|</span>
        <span className="hidden lg:inline">✦ שירות קונסיירז׳ Aura Privé זמין עבורכם</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-gold-500 transition-colors lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider text-gray-300">
            <a href="#" className="hover:text-gold-500 transition-colors">קולקציה</a>
            <a href="#" className="hover:text-gold-500 transition-colors">נשים</a>
            <a href="#" className="hover:text-gold-500 transition-colors">גברים</a>
            <a href="#" className="hover:text-gold-500 transition-colors">אודות</a>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <a href="#" className="text-3xl font-serif tracking-[0.25em] text-white uppercase font-bold hover:text-gold-500 transition-colors">Aura</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white hover:text-gold-500 transition-colors hidden sm:block">
            <User className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenCart}
            className="text-white hover:text-gold-500 transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
