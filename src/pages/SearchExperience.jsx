import React, { useState, useMemo } from 'react';
import { Search, X, Zap, ArrowRight, MapPin, Send, MessageCircle, Pill } from 'lucide-react';

const SearchExperience = () => {
  // 1. تعريف البيانات الوهمية للأدوية
  const medicinesData = [
    { id: 1, name: 'بانادول', desc: 'مسكن للألم وخافض للحرارة' },
    { id: 2, name: 'بانادول اكسترا', desc: 'مسكن قوي للألم وخافض للحرارة' },
    { id: 3, name: 'بانادول نايت', desc: 'لتخفيف الألم يساعد على النوم' },
    { id: 4, name: 'بانادول كولد اند فلو', desc: 'لعلاج أعراض البرد والانفلونزا' },
    { id: 5, name: 'بانادول للأطفال', desc: 'مسكن وخافض للحرارة للأطفال' },
  ];

  // 2. إدارة حالات المكون
  const [searchTerm, setSearchTerm] = useState('بانا'); // نص البحث الحالي
  const [cart, setCart] = useState(['بانادول', 'فيتامين د']); // الطلبات المضافة حالياً

  // 3. تصفية النتائج بناءً على البحث
  const filteredResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return medicinesData.filter(item => 
      item.name.includes(searchTerm)
    );
  }, [searchTerm]);

  // 4. دوال التحكم
  const addToCart = (name) => {
    if (!cart.includes(name)) setCart([...cart, name]);
  };

  const removeFromCart = (name) => {
    setCart(cart.filter(item => item !== name));
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen font-sans pb-32 relative" dir="rtl">
      
      {/* الرأس (Header) */}
      <header className="p-4 flex items-center justify-between">
        <button className="p-2 bg-white rounded-full shadow-sm">
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-1 shadow-md">
            <span className="text-white font-bold text-xs">GHALLAB</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
          <MapPin className="w-3 h-3" />
          <span>الجيزة فقط</span>
        </div>
      </header>

      {/* عنوان الصفحة */}
      <div className="text-center mt-4">
        <h1 className="text-2xl font-bold text-gray-900">ابحث عن دوائك</h1>
        <p className="text-gray-400 text-sm mt-1">ابحث بسرعة وأضف طلبك بسهولة</p>
      </div>

      {/* شريط البحث */}
      <div className="p-4">
        <div className="relative group">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            className="w-full bg-white border-2 border-red-500 rounded-2xl py-4 pr-12 pl-12 text-gray-800 focus:outline-none shadow-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن دواء أو منتج..."
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* قسم الاقتراحات (يظهر فقط عند بدء الكتابة) */}
        <div className="mt-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-red-600 mb-4">
            <Zap className="w-4 h-4 fill-current" />
            <span className="text-sm font-bold">اقتراحات سريعة</span>
          </div>
          
          <div className="space-y-4">
            {filteredResults.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-red-600">
                <Search className="w-4 h-4 text-gray-300" />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-gray-400 text-xs mb-3 font-bold">اقتراحات شائعة</p>
            <div className="flex flex-wrap gap-2">
              {['صداع', 'برد', 'كحة', 'مضاد حيوي', 'كمامات'].map((tag) => (
                <button key={tag} className="px-4 py-2 bg-gray-50 text-gray-500 rounded-full text-xs hover:bg-red-50 hover:text-red-600 transition">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* نتائج البحث المباشرة */}
      <div className="p-4 -mt-2">
        <p className="text-gray-900 font-bold mb-4 mr-2">نتائج البحث</p>
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {filteredResults.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-4 flex items-center justify-between hover:bg-gray-50 transition ${index !== filteredResults.length - 1 ? 'border-b border-gray-50' : ''}`}
            >
              <div className="flex-1">
                <h4 className={`font-bold ${index === 0 ? 'text-red-600' : 'text-gray-800'}`}>{item.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
              </div>
              <button 
                onClick={() => addToCart(item.name)}
                className="bg-red-50 p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition shadow-sm"
              >
                <Pill className="w-5 h-5 rotate-45" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* شريط الطلبات الحالي والسفلي (Floating Bottom Bar) */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-transparent pointer-events-none">
        {/* السلة المصغرة */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 mb-4 border border-gray-100 pointer-events-auto animate-in slide-in-from-bottom-4">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="font-bold text-gray-800 text-sm">طلباتك الحالية ({cart.length})</span>
            <button className="bg-gray-100 p-1 rounded-full"><ArrowRight className="w-4 h-4 text-gray-500 rotate-90" /></button>
          </div>
          <div className="flex flex-wrap gap-2">
            {cart.map((item) => (
              <div key={item} className="flex items-center gap-1 bg-gray-50 border border-gray-100 px-3 py-2 rounded-xl">
                <button onClick={() => removeFromCart(item)}><X className="w-3 h-3 text-gray-400" /></button>
                <span className="text-xs font-medium text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* زر الإرسال الرئيسي */}
        <div className="flex gap-4 pointer-events-auto">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-700 transition">
            <MessageCircle className="text-white w-8 h-8" />
          </div>
          <button className="flex-1 bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200 hover:bg-red-700 transition active:scale-95">
            <Send className="w-5 h-5 rotate-180" />
            إرسال الطلب
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchExperience;