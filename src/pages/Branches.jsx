// المسار: src/pages/Branches.jsx
import React, { useState } from 'react';
import { 
  MapPin, Search, Navigation, Phone, Clock, ChevronDown, 
  ShieldCheck, Store, MessageCircle, Navigation2
} from 'lucide-react';

const Branches = () => {
  // 1. حالة لتخزين نص البحث
  const [searchQuery, setSearchQuery] = useState('');
  
  // 2. حالة لتخزين معرف (ID) الفرع المحدد حالياً لإبرازه
  const [activeBranchId, setActiveBranchId] = useState(1);

  // 3. بيانات الفروع (جاهزة للاستبدال بـ API لاحقاً)
  const branchesData = [
    {
      id: 1,
      name: 'فرع الهرم',
      isMain: true,
      address: 'شارع فيصل - الهرم - الجيزة، أمام محطة التعاون',
      hours: '9:00 ص - 12:00 ص',
      status: 'مفتوح الآن',
      statusDot: 'bg-green-500',
      statusText: 'text-green-600',
    },
    {
      id: 2,
      name: 'فرع فيصل',
      isMain: false,
      address: 'شارع فيصل الرئيسي - الجيزة، بجوار بنك القاهرة',
      hours: '9:00 ص - 11:30 م',
      status: 'مفتوح الآن',
      statusDot: 'bg-green-500',
      statusText: 'text-green-600',
    },
    {
      id: 3,
      name: 'فرع أكتوبر',
      isMain: false,
      address: 'محور 26 يوليو - مدينة 6 أكتوبر، أمام مول العرب',
      hours: '10:00 ص - 10:00 م',
      status: 'يغلق بعد ساعة',
      statusDot: 'bg-orange-500',
      statusText: 'text-orange-600',
    },
    {
      id: 4,
      name: 'فرع الدقي',
      isMain: false,
      address: 'شارع التحرير - الدقي - الجيزة، بجوار محطة مترو الدقي',
      hours: '8:00 ص - 11:00 م',
      status: 'مفتوح الآن',
      statusDot: 'bg-green-500',
      statusText: 'text-green-600',
    }
  ];

  return (
    <div className="w-full bg-gray-50 font-sans pb-16">
      
      {/* ================= 1. رأس الصفحة (Header) ================= */}
      <section className="text-center pt-12 pb-8 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">فروعنا</h1>
        <p className="text-gray-600 text-lg">خدمتك أقرب مما تتخيل، نحن في قلب الجيزة لخدمتك بشكل أفضل</p>
      </section>

      {/* ================= 2. المحتوى الرئيسي (القائمة + الخريطة) ================= */}
      <section className="max-w-7xl mx-auto px-6">
        
        {/* شريط البحث والفلترة العلوي */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن فرع قريب منك..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pr-12 pl-4 py-3 focus:outline-none focus:border-red-500 transition"
            />
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition whitespace-nowrap">
              <Navigation2 className="w-5 h-5 text-gray-400" />
              استخدام موقعي
            </button>
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 px-6 py-3 pl-12 rounded-xl text-gray-700 focus:outline-none focus:border-red-500 transition cursor-pointer w-full md:w-48">
                <option>كل الفروع</option>
                <option>الجيزة</option>
                <option>أكتوبر</option>
              </select>
              <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* شبكة القائمة والخريطة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[800px]">
          
          {/* الجانب الأيمن: قائمة الفروع (Scrollable) */}
          <div className="lg:col-span-4 flex flex-col gap-6 overflow-y-auto pr-2 pb-4 custom-scrollbar">
            {branchesData.map((branch) => (
              <div 
                key={branch.id} 
                onClick={() => setActiveBranchId(branch.id)}
                className={`bg-white rounded-3xl p-6 border-2 transition-all cursor-pointer ${
                  activeBranchId === branch.id 
                    ? 'border-red-600 shadow-md bg-red-50/10' 
                    : 'border-gray-100 hover:border-red-200 shadow-sm'
                }`}
              >
                {/* اسم الفرع والوسام */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl flex items-center gap-2 text-gray-900">
                    <MapPin className="text-red-600 w-6 h-6" /> {branch.name}
                  </h3>
                  {branch.isMain && (
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-100">
                      الفرع الرئيسي
                    </span>
                  )}
                </div>

                {/* تفاصيل الفرع */}
                <div className="space-y-3 mb-6">
                  <p className="text-gray-500 text-sm flex items-start gap-2 leading-relaxed">
                    <MapPin className="w-4 h-4 mt-1 shrink-0 opacity-50" />
                    {branch.address}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 opacity-50" />
                    {branch.hours}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <span className={`w-2.5 h-2.5 rounded-full ${branch.statusDot}`}></span>
                    <span className={branch.statusText}>{branch.status}</span>
                  </div>
                </div>

                {/* أزرار الإجراءات */}
                <div className="flex gap-3 mt-auto">
                  <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition">
                    <Navigation className="w-4 h-4" /> الاتجاهات
                  </button>
                  <button className="flex-1 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                    <Phone className="w-4 h-4" /> اتصل بنا
                  </button>
                </div>
              </div>
            ))}
            
            {/* زر عرض جميع الفروع */}
            <button className="w-full bg-white border-2 border-red-200 text-red-600 font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-red-50 transition mt-2">
              <Store className="w-5 h-5" /> عرض جميع الفروع
            </button>
          </div>

          {/* الجانب الأيسر: الخريطة */}
          <div className="lg:col-span-8 bg-gray-200 rounded-[40px] overflow-hidden relative min-h-[500px] border border-gray-200 shadow-inner">
            {/* 
              ملاحظة: يمكنك لاحقاً استبدال هذا الـ div بـ iframe الخاص بخرائط جوجل 
              أو مكتبة مثل react-google-maps 
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100">
              <MapPin className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-xl font-bold text-gray-400">مساحة خريطة جوجل التفاعلية</p>
            </div>
            
            {/* علامات افتراضية على الخريطة (للمحاكاة البصرية) */}
            <div className="absolute top-1/4 right-1/3 text-red-600 animate-bounce">
              <MapPin className="w-12 h-12 fill-current text-white drop-shadow-md" />
            </div>
            <div className="absolute bottom-1/3 left-1/4 text-red-600">
              <MapPin className="w-10 h-10 fill-current text-white drop-shadow-md opacity-80" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. مميزات الفروع ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 mt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">خدمة موثوقة</h4>
            <p className="text-gray-500 text-sm">نفس الجودة والخدمة في جميع فروعنا</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">سهولة الوصول</h4>
            <p className="text-gray-500 text-sm">مواقع مميزة يسهل الوصول إليها</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">ساعات عمل مرنة</h4>
            <p className="text-gray-500 text-sm">خدمة على مدار اليوم في معظم فروعنا</p>
          </div>
          <div className="flex flex-col items-center">
            <Store className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">فروع متعددة</h4>
            <p className="text-gray-500 text-sm">نتواجد في أهم مواقع الجيزة لنكون أقرب إليك</p>
          </div>
        </div>
      </section>

      {/* ================= 4. بانر التواصل السفلي ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-red-700 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-xl">
          
          {/* جزء الاتصال الهاتفي */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center md:justify-start gap-6 border-b md:border-b-0 md:border-l border-red-600">
            <div className="bg-white/20 p-4 rounded-full text-white">
              <Phone className="w-8 h-8" />
            </div>
            <div className="text-center md:text-right text-white">
              <h3 className="font-bold text-xl mb-1">اتصل بنا</h3>
              <p className="font-bold text-2xl mb-1" dir="ltr">01098765432</p>
              <p className="text-red-200 text-sm">متاح من 9 ص حتى 12 م</p>
            </div>
          </div>

          {/* جزء الواتساب */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center md:justify-start gap-6">
            <div className="bg-white/20 p-4 rounded-full text-white">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="text-center md:text-right text-white">
              <h3 className="font-bold text-xl mb-1">اطلب الآن عبر واتساب</h3>
              <p className="text-red-200 text-sm">رد سريع من فريق الصيدلية</p>
            </div>
          </div>

        </div>
      </section>

      {/* 
        إضافة بسيطة لـ CSS لجعل شريط التمرير (Scrollbar) للقائمة أنيقاً 
        يمكنك وضعها في ملف index.css لاحقاً، ولكن وضعتها هنا كـ style لتعمل فوراً 
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #fca5a5;
          border-radius: 20px;
        }
      `}} />

    </div>
  );
};

export default Branches;