import { useState } from 'react';

export default function Hero() {
  const [heroSrc, setHeroSrc] = useState('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop');

  const handleHeroError = () => {
    const backupHero = 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2000&auto=format&fit=crop';
    if (heroSrc !== backupHero) {
      setHeroSrc(backupHero);
    }
  };

  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroSrc} 
          alt="Luxury Fashion Hero Boutique" 
          referrerPolicy="no-referrer"
          onError={handleHeroError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-gold-500 mb-4 tracking-[0.2em] text-sm uppercase">קולקציה בלעדית</span>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
          עידן חדש של יוקרה
        </h1>
        <p className="text-gray-200 text-lg md:text-xl font-light mb-10 max-w-2xl text-center leading-relaxed">
          גלה את הבחירה המוקפדת ביותר של מותגי יוקרה. משלוח ישיר בינלאומי, מבית האופנה עד דלת הבית שלך.
        </p>
        <button className="bg-gold-500 text-charcoal-900 px-10 py-4 font-semibold tracking-wider hover:bg-gold-400 transition-all uppercase text-sm border-2 border-gold-500 hover:border-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
          קנה את הקולקציה
        </button>
      </div>
    </section>
  );
}
