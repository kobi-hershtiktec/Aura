export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif text-white tracking-[0.2em] uppercase mb-6">Aura</h2>
            <p className="text-gray-400 font-light max-w-sm leading-relaxed">
              היעד האקסקלוסיבי שלך למותגי יוקרה ועיצוב על-זמני. ב-Aura אנו בוחרים בקפידה כל פריט כדי להבטיח איכות עילאית, סגנון נשגב ומקוריות מוחלטת.
            </p>
          </div>
          
          <div>
            <h3 className="text-white tracking-wider uppercase text-sm mb-6">שירות לקוחות</h3>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">משלוחים והחזרות</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">שאלות נפוצות</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">מעקב הזמנות</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">צור קשר</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white tracking-wider uppercase text-sm mb-6">אודותינו</h3>
            <ul className="space-y-4 text-gray-400 font-light text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">הסיפור שלנו</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">קריירה</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">תקנון האתר</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">מדיניות פרטיות</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Aura. כל הזכויות שמורות.</p>
          <div className="flex gap-4 p-4 md:p-0">
            <span>תשלום מאובטח ב100%</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
