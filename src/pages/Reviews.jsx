// المسار: src/pages/Reviews.jsx
import React from 'react';
import { 
  Star, Quote, ChevronRight, ChevronLeft, ShieldCheck, 
  Users, ShoppingBag, Award, MessageCircle, Clock, Truck, Lock, Search 
} from 'lucide-react';

const Reviews = () => {
  // 1. البيانات الوهمية (Mock Data)
  const testimonials = [
    {
      id: 1,
      text: "كنت محتار في دواء معين، الصيدلي ساعدني وباشرني. شكراً على اهتمامكم.",
      name: "أحمد خالد",
      location: "الدقي - الجيزة",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 2,
      text: "تعامل محترم جداً والأسعار مناسبة والتوصيل دائماً في الموعد. صيدلية غلاب بجد مميزة.",
      name: "سارة مصطفى",
      location: "فيصل - الجيزة",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      text: "خدمة رائعة وسريعة جداً، تواصلوا معايا في دقائق والدواء وصل في نفس اليوم.",
      name: "محمد أحمد",
      location: "الهرم - الجيزة",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  // أيقونات المنصات (استخدام SVG مباشر لتجنب أخطاء الاستيراد)
  const platforms = [
    { 
      name: "Instagram", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
      ), 
      rating: "4.8", reviews: "+320" 
    },
    { 
      name: "واتساب", 
      icon: <MessageCircle className="w-6 h-6 text-green-500" />, 
      rating: "4.9", reviews: "+540" 
    },
    { 
      name: "Facebook", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1877f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      ), 
      rating: "4.8", reviews: "+820" 
    },
    { 
      name: "Google", 
      icon: <Search className="w-6 h-6 text-red-500" />, 
      rating: "4.9", reviews: "+890" 
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="w-full pb-12 pt-8">
      
      {/* القسم الافتتاحي */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="text-red-600 font-bold text-lg">آراء عملائنا</h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ثقتكم هي <span className="text-black">أثمن ما نملك</span>
            </h1>
            <p className="text-gray-600 text-lg">
              نفتخر بخدمة آلاف العملاء في الجيزة وتقديم أفضل تجربة في طلب الأدوية والتوصيل السريع.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
            [صورة توضيحية للقسم الافتتاحي]
          </div>
        </div>
      </section>

      {/* قسم التقييمات */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-12">ماذا يقول عملاؤنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="flex gap-1 mb-6">{renderStars(review.rating)}</div>
              <p className="text-gray-600 mb-8">{review.text}</p>
              <div className="flex items-center gap-4 w-full pt-6 border-t border-gray-100">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full" />
                <div className="text-right">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* تقييمات المنصات */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-12">تقييمات حقيقية من منصات موثوقة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-4">
                {platform.icon}
                <span className="font-bold text-gray-800 text-lg">{platform.name}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold">{platform.rating}</span>
                <div className="flex gap-0.5">{renderStars(5)}</div>
              </div>
              <p className="text-gray-500 text-xs">({platform.reviews} تقييم)</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;