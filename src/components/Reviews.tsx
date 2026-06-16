import { Star, Check } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'רונית כהן',
      location: 'הרצליה פיתוח',
      item: 'שעון רולקס סאבמרינר זהב',
      rating: 5,
      date: 'לפני שבועיים',
      comment: 'הייתי סקפטית לגבי הזמנת שעון בסדר גודל כזה באינטרנט, אבל שירות הקונסיירז׳ של אורה הרגיע אותי לחלוטין. המשלוח הגיע תוך 4 ימים עם שליח מבוטח, באריזה מקורית חתומה ותעודות מקוריות של רולקס. חוויה יוצאת דופן!'
    },
    {
      name: 'גיא תורג׳מן',
      location: 'תל אביב',
      item: 'שעון אודמר פיגה רויאל אוק',
      rating: 5,
      date: 'לפני חודש',
      comment: 'שעון החלומות שלי הגיע אליי מושלם. תיאום המשלוח היה סופר דיסקרטי ומקצועי. המחיר היה מעולה ותנאי התשלום המאובטחים בפייפאל נתנו לי ראש שקט. הכתובת החדשה שלי לרכישות יוקרה.'
    },
    {
      name: 'מאיה אלבז',
      location: 'סביון',
      item: 'ז׳קט טוויד שאנל קלאסי',
      rating: 5,
      date: 'לפני 3 ימים',
      comment: 'אין מילים לתאר את רמת הדיוק והשירות! ז׳קט הטוויד הגיע ארוז כמו יצירת אמנות עם הכיסוי והקולב המקוריים של בית שאנל בפריז. כל כך שמחה שמצאתי את הפלטפורמה הזו שמאפשרת להשיג את פריטי המסלול המבוקשים ביותר בבטחה.'
    },
    {
      name: 'דניאל אהרוני',
      location: 'קיסריה',
      item: 'חגורת הרמס קונסטנס זהב',
      rating: 5,
      date: 'לפני שבוע',
      comment: 'החגורה האהובה עליי הגיעה באריזת שי מהודרת וסגורה של Aura ברישיון ואישור יבוא מצרפת. עור ה-Constance הוא עילאי והאבזם פשוט מנצנץ. הכתובת החדשה שלי לאקססוריז.'
    }
  ];

  return (
    <section className="bg-black py-24 border-b border-charcoal-800" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-2">חוות דעת של מועדון הלקוחות</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">קולות השביעות רצון</h2>
          <div className="w-16 h-px bg-gold-400 mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-charcoal-900 border border-charcoal-800 p-8 rounded-none relative flex flex-col justify-between hover:border-gold-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs font-mono">{rev.date}</span>
                </div>

                <p className="text-gray-200 text-md font-light italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-charcoal-800 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium text-lg flex items-center gap-2">
                    {rev.name}
                    <span className="text-[10px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded-full flex items-center gap-0.5 border border-gold-500/20">
                      <Check className="w-2.5 h-2.5" /> רוכש מאומת
                    </span>
                  </h4>
                  <p className="text-gray-500 text-xs mt-1">{rev.location}</p>
                </div>
                <div className="text-gold-500 text-xs bg-black/50 border border-charcoal-800 px-3 py-1 font-mono">
                  {rev.item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
