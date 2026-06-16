import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate luxury API response
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="bg-charcoal-900 border-b border-charcoal-800 py-24 relative overflow-hidden" id="newsletter">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03),transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="text-gold-500 text-xs tracking-[0.3em] uppercase mb-4 block">מועדון הלקוחות האקסקלוסיבי</span>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">הצטרפו ל-Aura Privé</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-md font-light leading-relaxed">
          הירשמו לקבלת עדכונים על פריטים נדירים במהדורה מוגבלת, מכירות מוקדמות פרטיות ותוכן אופנה מהבוטיקים המובילים בעולם.
        </p>

        {submitted ? (
          <div className="bg-black/40 border border-gold-500/30 p-8 inline-flex flex-col items-center max-w-md animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-gold-500 mb-4" />
            <h3 className="text-xl text-white font-serif mb-2">ברוכים הבאים ל-Aura Privé</h3>
            <p className="text-gray-400 text-sm font-light">
              נרשמתם בהצלחה. הזמנה מיוחדת ועונג לבוטיק הפרטי נשלחו הרגע לתיבת המייל שלכם.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex border border-charcoal-700 focus-within:border-gold-500 transition-colors bg-black">
              <input 
                type="email"
                placeholder="כתובת האימייל שלך לקו הטלפוני..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="w-full bg-transparent border-none text-white px-5 py-4 focus:outline-none focus:ring-0 text-sm"
                dir="rtl"
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-gold-500 text-charcoal-900 font-semibold text-sm px-6 hover:bg-gold-400 transition-colors flex items-center justify-center gap-2 border-r border-charcoal-750"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>להצטרפות</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
