import { Product } from './types';
import chanelCardHolderImage from './assets/images/chanel_card_holder_1781616793362.jpg';
import hermesBeltImage from './assets/images/hermes_belt_1781616807814.jpg';

export const products: Product[] = [
  // שעוני יוקרה
  {
    id: 'p1',
    title: 'שעון רולקס סאבמרינר פלדה Rolex Submariner',
    description: 'שעון צלילה אגדי פלדת אל-חלד עם לוח שחור ובזל קרמי חסין שריטות. מנגנון אוטומטי שוויצרי נערץ קליבר 3235, עמידות של עד 300 מטר ומראה כריזמטי על-זמני.',
    price: 18700,
    imageUrl: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop',
    category: 'שעוני יוקרה'
  },
  {
    id: 'p2',
    title: 'שעון אודמר פיגה רויאל אוק Audemars Piguet Custom',
    description: 'יצירת המופת המתומנת המפורסמת עם ברגים חשופים, מנגנון פרימיום דק ורצועת עור יוקרתית שחורה מעוצבת למשעי היוצרת מראה ספורטיבי-עילית בעל נוכחות ממגנטת.',
    price: 24900,
    imageUrl: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1000&auto=format&fit=crop',
    category: 'שעוני יוקרה'
  },
  {
    id: 'p3',
    title: 'שעון קרטייה סנטוס זהב צהוב Cartier Santos Gold',
    description: 'שעון מלבני מלכותי בגימור זהב צהוב בוהק, לוח ספרות רומיות אייקוני ומנגנון מתיחה אוטומטי המעניק נוכחות יוקרה קלאסית מושלמת.',
    price: 14500,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
    category: 'שעוני יוקרה'
  },
  // ביגוד וחייטות עילית
  {
    id: 'p6',
    title: 'ז׳קט טוויד שאנל קלאסי Chanel Tweed Jacket',
    description: 'ז׳קט הטוויד האגדי והאל-זמני של בית האופנה הצרפתי שאנל, בעבודת יד מוקפדת עם גימורי כפתורי מתכת חרוטים וארוג בצמר עילית ניטרלי.',
    price: 8200,
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop',
    category: 'ביגוד וחייטות עילית'
  },
  {
    id: 'p7',
    title: 'מעיל כפתורים כפול סן לורן Saint Laurent Coat',
    description: 'מעיל צמר ארוך בגוון שחור עמוק, בעל כריות כתפיים מובנות ומראה דרמטי ואלגנטי במיוחד בהשראת מסלולי התצוגה של פריז.',
    price: 5800,
    imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1000&auto=format&fit=crop',
    category: 'ביגוד וחייטות עילית'
  },
  {
    id: 'p8',
    title: 'בלייזר פשתן פראדה לפנאי Prada Luxury Blazer',
    description: 'בלייזר קל חסר משקל המותאם לקיץ האירופאי, עשוי פשתן משולב משי יוקרתי, גזרה נינוחה ומראה נונשלנטי ומוקפד כאחד.',
    price: 3600,
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
    category: 'ביגוד וחייטות עילית'
  },

  // תכשיטי יוקרה
  {
    id: 'p10',
    title: 'שרשרת קרטייה אמרלד ירוק Cartier Emerald Pend',
    description: 'הצמיד הרומנטי והמפורסם ביותר עלי אדמות, עשוי זהב צהוב 18 קראט מלא, מעוצב עם ברגים סימטריים וננעל על פרק היד באמצעות מברג ייעודי.',
    price: 7900,
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop',
    category: 'תכשיטי יוקרה'
  },

  {
    id: 'p12',
    title: 'טבעת קרטייה לאב זהב צהוב Cartier Love Ring',
    description: 'עגילי יוקרה תלויים ייחודיים המשדרגים כל הופעה. שילוב מנצח של זהב לבן ואבני חן מנצנצות המעניקות השתקפות אור קסומה בכל תנועה.',
    price: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop',
    category: 'תכשיטי יוקרה'
  },
  {
    id: 'p13',
    title: 'עגילי זהב לבן ויהלומים Tiffany & Co. Studs',
    description: 'תליון קריסטל אמרלד מרהיב בגוון ירוק עמוק ואצילי, מוקף בזהב צהוב עדין 18K מבית היצירה המלכותי של קרטייה פריז.',
    price: 4100,
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    category: 'תכשיטי יוקרה'
  },

  // חגורות ואביזרי עור
  {
    id: 'p14',
    title: 'חגורת הרמס קונסטנס עור כפול Hermes Constance Belt',
    description: 'חגורת עור דו-צדדית (שחור/חום קלאסי) מעור עגל משובח ביותר, עם אבזם ה-H האיקוני בגימור זהב מוברש יפיפה.',
    price: 1800,
    imageUrl: hermesBeltImage,
    category: 'חגורות ואביזרי עור'
  },
  {
    id: 'p15',
    title: 'ארנק עור שאנל מעויין Chanel Classic Card Holder',
    description: 'ארנק כרטיסים ועוד דק מעור כבש מרופד מרהיב, מעוטר בלוגו ה-CC המוזהב הקטן ומיועד לנשיאה דיסקרטית ואופנתית.',
    price: 1400,
    imageUrl: chanelCardHolderImage,
    category: 'חגורות ואביזרי עור'
  },
  {
    id: 'p16',
    title: 'עט נובע מונבלאן פיסטרשטיק Montblanc Meisterstück',
    description: 'עט הנובע המפורסם והמוערך ביותר בעולם, עשוי שרף שחור יקר ערך עם עיטורים מצופים זהב וראש עט מזהב 14 קראט מיוצר בעבודת יד בגרמניה.',
    price: 1650,
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1000&auto=format&fit=crop',
    category: 'חגורות ואביזרי עור'
  },
  {
    id: 'p17',
    title: 'מחזיק מפתחות מעור בוטגה ונטה Bottega Veneta Intrecciato',
    description: 'מחזיק מפתחות יוקרתי קלוע בעבודת יד בטכניקת ה-Intrecciato המזוהה של בוטגה ונטה, עשוי עור נאפה רך במיוחד וטבעת מתכת מוברשת.',
    price: 850,
    imageUrl: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1000&auto=format&fit=crop',
    category: 'חגורות ואביזרי עור'
  },

  // משקפי שמש
  {
    id: 'p18',
    title: 'משקפי שמש פראדה סימבול Prada Symbole Gold',
    description: 'מסגרת אצטט שחורה מודרנית עם זוויות חדות ועדשות פרימיום כהות. מעוטרת בלוגו המשולש המוזהב התלת-ממדי של המותג פראדה.',
    price: 890,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
    category: 'משקפי שמש'
  },
  {
    id: 'p19',
    title: 'משקפי שמש סלין טריומף Celine Triomphe Brown',
    description: 'מסגרת חתולית מעוגלת מעודנת ויוקרתית בגווני חום מנומר, מעוטרת בסמל הטריומף המוזהב האגדי של המותג הפריזאי בצידי המשקפיים.',
    price: 950,
    imageUrl: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1000&auto=format&fit=crop',
    category: 'משקפי שמש'
  },
  {
    id: 'p20',
    title: 'משקפי שמש סן לורן קלאסיק Saint Laurent Shield',
    description: 'מסגרת ריבועית אולטרה-שחורה ואלגנטית עם הגנת UV מקסימלית. משקפי שמש בעלי נוכחות דרמטית שקטה של מעצב-על פריזאי אגדי.',
    price: 790,
    imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop',
    category: 'משקפי שמש'
  },

  // הנעלה אקסקלוסיבית
  {
    id: 'p21',
    title: 'נעלי סניקרס דיור b23 High-Top Dior Oblique',
    description: 'סניקרס גבוהות מהפכניות המציגות את הדפס המונוגרמה המפורסם של Dior Oblique תחת מעטפת שקופה, שרוכים קלאסיים וסוליה בעלת נוחות שיא.',
    price: 1950,
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop',
    category: 'הנעלה אקסקלוסיבית'
  },
  {
    id: 'p22',
    title: 'מוקסיני הרמס פריז עור חום Hermes Loafers Premium',
    description: 'מוקסינים אלגנטיים להפליא מעור זמש משובח ורך בגוון קאמל של הרמס, מעוטרים בלוגו ה-H הייחודי בציפווי זהב/פלדיום יוקרתי ועדין ביותר.',
    price: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop',
    category: 'הנעלה אקסקלוסיבית'
  },
  {
    id: 'p23',
    title: 'נעלי עקב לובוטן סוליה אדומה Christian Louboutin heels',
    description: 'עקבי סטילטו מפוארים מעור לקה שחור בוהק מעודן משולב בסוליה האדומה הנודעת ביותר בעולם המעניקה גובה אצילי, שלמות וסקסיות ללא תחרות.',
    price: 1850,
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
    category: 'הנעלה אקסקלוסיבית'
  },
  {
    id: 'p24',
    title: 'סניקרס אייר ג׳ורדן אופ-וויט Off-White Retro High',
    description: 'החיבור המיתולוגי של נייקי יחד עם המעצב הגאון וירג׳יל אבלו. עיצוב רטרו גיאומטרי ייחודי עם תגיות המותג, כיתובי הדגל ועור פרימיום מעולה.',
    price: 3400,
    imageUrl: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop',
    category: 'הנעלה אקסקלוסיבית'
  }
];
