import { ShieldCheck, Truck, MessageSquare, ShieldAlert } from 'lucide-react';

export default function AboutAura() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold-500" />,
      title: 'התחייבות למקוריות 100%',
      desc: 'כל פריט בקולקציית Aura נבחר ונבדק בקפידה על ידי מומחי אופנה ויוקרה. אנו מתחייבים לאותנטיות מוחלטת עם אריזות המקור ומסמכי הזיהוי של בית המעצבים.'
    },
    {
      icon: <Truck className="w-8 h-8 text-gold-500" />,
      title: 'משלוח אקספרס מבוטח חינם',
      desc: 'הזמנות נשלחות ישירות ממחסני הבוטיק שלנו באירופה במשלוח אווירי אקספרס מאובטח ומבוטח במלואו, לכל חלקי הארץ ישירות לדלת ביתכם תוך 3 עד 5 ימי עסקים.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-gold-500" />,
      title: 'שירות קונסיירז׳ אישי 24/7',
      desc: 'חוויית קנייה ברמה אחרת. יועצי האופנה והשירות שלנו זמינים עבורכם בטלפון, בווטסאפ ובמייל לכל שאלה, התייעצות סגנון או ליווי אישי של תהליך הרכישה.'
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-gold-500" />,
      title: 'רכישה בטוחה וסליקת עילית',
      desc: 'מערך הסליקה שלנו מבוסס על תקני אבטחה מחמירים ביותר (PCI-DSS) בשיתוף פעולה ישיר עם PayPal להגנה מלאה על הפרטיות והגנת קונה מורחבת.'
    }
  ];

  return (
    <section className="bg-charcoal-900/50 border-y border-charcoal-800 py-24 relative overflow-hidden" id="about-aura">
      {/* Decorative radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gold-500 text-xs tracking-[0.2em] uppercase mb-3">אמנת המותג Aura</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">מדוע לבחור ב-Aura?</h2>
          <div className="w-16 h-px bg-gold-400 mt-6"></div>
          <p className="text-gray-400 max-w-2xl mt-6 text-base font-light leading-relaxed">
            אנו ב-Aura מגדירים מחדש את חוויית רכישת מותגי היוקרה בישראל. הבוטיק הדיגיטלי שלנו מעניק גישה ישירה וישרה לקולקציות המבוקשות ביותר, ללא מתווכים ובביטחון מוחלט.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, index) => (
            <div 
              key={index} 
              className="bg-black/40 border border-charcoal-800 p-8 hover:border-gold-500/40 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-white text-xl font-medium mb-4 group-hover:text-gold-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
              <div className="w-8 h-0.5 bg-gold-500/20 group-hover:w-full transition-all duration-500 mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
