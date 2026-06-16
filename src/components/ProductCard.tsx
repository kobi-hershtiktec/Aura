import { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  key?: string;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(product.imageUrl);

  const handleError = () => {
    // Highly resilient premium luxury backups for each category
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
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] bg-charcoal-900 overflow-hidden mb-6">
        <img 
          src={imgSrc} 
          alt={product.title} 
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full bg-black/80 backdrop-blur-md text-white py-3 border border-white/20 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 text-sm font-medium"
          >
            <ShoppingBag className="w-4 h-4" />
            הוסף לסל הקניות
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <span className="text-gold-500 text-xs tracking-wider uppercase mb-2 block">{product.category}</span>
        <h3 className="text-white font-medium text-lg mb-2">{product.title}</h3>
        <p className="text-gray-400 font-serif text-md mb-2">₪ {product.price.toLocaleString()}</p>
        
        {/* Subtle psychological urgency & social proof indicators */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] h-5 mb-1 select-none">
          {product.price > 15000 ? (
            <span className="text-red-400/90 font-light flex items-center gap-1 bg-red-400/5 px-2 py-0.5 border border-red-500/10 rounded">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
              ביקוש קריטי – פחות מ-2 יחידות במלאי
            </span>
          ) : product.price > 5000 ? (
            <span className="text-gold-400/90 font-light flex items-center gap-1 bg-gold-500/5 px-2 py-0.5 border border-gold-500/10 rounded">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
              💎 8 לקוחות צופים בזה כעת
            </span>
          ) : (
            <span className="text-emerald-400/90 font-light flex items-center gap-1 bg-emerald-500/5 px-2 py-0.5 border border-emerald-500/10 rounded">
              ✨ ביקוש גבוה במיוחד השבוע
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
