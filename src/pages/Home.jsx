// المسار: src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // أداة الربط بين الصفحات
import { 
  Search, FileText, MessageCircle, Pill, 
  Zap, ShieldCheck, ShoppingBag, PhoneCall 
} from 'lucide-react';

// ==========================================
// مكون القسم الافتتاحي (Hero)
// ==========================================
const HeroSection = () => (
  <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative z-10">
    <div className="w-full md:w-1/2 space-y-6 z-10">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
        اطلب دوائك <br />
        <span className="text-red-600">بسهولة من أقرب صيدلية</span>
      </h1>
      <p className="flex items-center gap-2 text-gray-600 text-lg">
        <Zap className="w-5 h-5 text-red-600" />
        توصيل سريع داخل الجيزة
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link to="/order" className="flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition w-full sm:w-auto text-lg shadow-lg shadow-red-200">
          <MessageCircle className="w-5 h-5" />
          اطلب الآن
        </Link>
        <Link to="/order" className="flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-8 py-3 rounded-xl font-bold hover:border-gray-300 transition w-full sm:w-auto text-lg">
          <FileText className="w-5 h-5" />
          ارفع روشتة
        </Link>
      </div>
    </div>
    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-200 rounded-full flex items-center justify-center shadow-inner relative">
         <div className="absolute w-3/4 h-3/4 bg-white rounded-3xl shadow-xl flex items-center justify-center text-gray-400 text-center p-4">
           صورة الأدوية
         </div>
      </div>
    </div>
  </section>
);

// ==========================================
// مكون قسم البحث
// ==========================================
const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const suggestions = ['بانادول', 'فيتامين د', 'دواء للبرد', 'مسكن ألم', 'فيتامين سي'];

  return (
    <section className="px-6 py-8 -mt-8 relative z-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="اكتب اسم الدواء أو احتياجك..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl pr-12 pl-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 transition text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Link to="/order" className="bg-red-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition">
            بحث
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-red-600 font-semibold mb-3 text-sm">اقتراحات شائعة</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item, index) => (
              <button 
                key={index} onClick={() => setSearchQuery(item)}
                className="bg-gray-50 border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// مكون البطاقات التفاعلية
// ==========================================
const ActionCards = () => {
  const actions = [
    { title: 'اطلب دواء', desc: 'اكتب اسم الدواء أو احتياجك', icon: <Pill className="w-8 h-8 text-white" /> },
    { title: 'ارفع روشتة', desc: 'ارفع صورة الروشتة بسهولة', icon: <FileText className="w-8 h-8 text-white" /> },
    { title: 'استشارة صيدلي', desc: 'اسأل صيدلي الآن', icon: <MessageCircle className="w-8 h-8 text-white" /> },
  ];

  return (
    <section className="px-6 py-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((action, idx) => (
        <Link to="/order" key={idx} className="block bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer group">
          <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
             <div className="bg-red-500 p-3 rounded-full">{action.icon}</div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{action.title}</h3>
          <p className="text-gray-500">{action.desc}</p>
        </Link>
      ))}
    </section>
  );
};

// ==========================================
// مكون عنوان الأقسام
// ==========================================
const SectionTitle = ({ title }) => (
  <div className="flex items-center justify-center gap-4 py-8">
    <div className="h-px bg-red-200 w-12"></div>
    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    <div className="h-px bg-red-200 w-12"></div>
  </div>
);

// ==========================================
// مكون المميزات
// ==========================================
const Features = () => {
  const features = [
    { title: 'سرعة الرد', desc: 'نرد عليك خلال دقائق', icon: <Zap className="w-8 h-8 text-red-600" /> },
    { title: 'توفر الأدوية', desc: 'نضمن لك توفر معظم الأدوية', icon: <Pill className="w-8 h-8 text-red-600" /> },
    { title: 'خدمة موثوقة', desc: 'أدوية أصلية 100%', icon: <ShieldCheck className="w-8 h-8 text-red-600" /> },
  ];

  return (
    <section className="px-6 py-4 max-w-6xl mx-auto">
      <SectionTitle title="لماذا تختارنا؟" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-4">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="mb-4">{item.icon}</div>
            <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// مكون خطوات العمل
// ==========================================
const HowItWorks = () => {
  const steps = [
    { num: 1, title: 'اكتب طلبك', desc: 'اكتب اسم الدواء أو وصف ما تحتاجه', icon: <FileText className="w-6 h-6 text-red-600" /> },
    { num: 2, title: 'يتم التواصل معك', desc: 'نتواصل معك لتأكيد الطلب والتفاصيل', icon: <PhoneCall className="w-6 h-6 text-red-600" /> },
    { num: 3, title: 'استلم طلبك', desc: 'نوصلك الطلب بسرعة وأمان', icon: <ShoppingBag className="w-6 h-6 text-red-600" /> },
  ];

  return (
    <section className="px-6 py-8 max-w-6xl mx-auto">
      <SectionTitle title="كيف يعمل الطلب؟" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 relative z-10">
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
              {step.num}
            </div>
            <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-4 border border-gray-100">{step.icon}</div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// مكون بانر الطلب المباشر
// ==========================================
const CtaBanner = () => (
  <section className="px-6 py-12 max-w-6xl mx-auto">
    <div className="bg-red-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl">
      <div className="flex items-center gap-6 mb-6 md:mb-0">
        <MessageCircle className="w-16 h-16 opacity-90" />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">اطلب مباشرة عبر واتساب</h2>
          <p className="text-red-100">تواصل معنا الآن على واتساب واحصل على رد سريع</p>
        </div>
      </div>
      <Link to="/order" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition shadow-lg w-full md:w-auto justify-center text-lg">
        <MessageCircle className="w-6 h-6" />
        اطلب عبر واتساب
      </Link>
    </div>
  </section>
);

// ==========================================
// المكون الرئيسي لتجميع الصفحة
// ==========================================
const Home = () => {
  return (
    // تم إزالة min-h-screen و dir=rtl من هنا لأنها موجودة مسبقاً في App.jsx
    <div className="w-full">
      {/* 
        ملاحظة: تم حذف استدعاء Navbar من هنا
      */}
      
      <HeroSection />
      <SearchSection />
      <ActionCards />
      <Features />
      <HowItWorks />
      <CtaBanner />
      
      {/* 
        ملاحظة: تم حذف استدعاء Footer من هنا
      */}
    </div>
  );
};

export default Home;