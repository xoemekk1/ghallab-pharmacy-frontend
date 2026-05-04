// المسار: src/pages/HowItWorksPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Lock, Clock, ShieldCheck, Send, 
  MessageCircle, CheckCircle, UserX, CreditCard, 
  FileText, UserCircle, Home, Zap
} from 'lucide-react';

const HowItWorksPage = () => {
  // بيانات الخطوات الثلاث لتسهيل التعديل عليها
  const steps = [
    {
      num: 1,
      title: 'قدم طلبك',
      desc: 'اكتب اسم الدواء أو احتياجك في نموذج الطلب أو ارفع صورة الروشتة إن وجدت.',
      tags: [{ icon: <FileText className="w-4 h-4" />, text: 'دعم الروشتة' }, { icon: <FileText className="w-4 h-4" />, text: 'دعم روشتة' }],
      imagePlaceholder: 'صورة الموبايل والروشتة'
    },
    {
      num: 2,
      title: 'نتواصل معك',
      desc: 'تتواصل معك الصيدلية خلال دقائق لتأكيد الطلب والرد على أي استفسارات.',
      tags: [{ icon: <Clock className="w-4 h-4" />, text: 'تواصل سريع' }, { icon: <UserCircle className="w-4 h-4" />, text: 'صيدلي متخصص' }],
      imagePlaceholder: 'صورة الصيدلي'
    },
    {
      num: 3,
      title: 'استلم طلبك',
      desc: 'نقوم بتجهيز طلبك وتوصيله لحد باب البيت داخل الجيزة في أسرع وقت.',
      tags: [{ icon: <Zap className="w-4 h-4" />, text: 'توصيل سريع' }, { icon: <Home className="w-4 h-4" />, text: 'لباب البيت' }],
      imagePlaceholder: 'صورة مندوب التوصيل'
    }
  ];

  // بيانات قسم "لماذا تختارنا"
  const features = [
    { icon: <MapPin className="w-8 h-8" />, title: 'خدمة داخل الجيزة', desc: 'توصيل سريع في جميع مناطق الجيزة' },
    { icon: <Lock className="w-8 h-8" />, title: 'خصوصيتك تهمنا', desc: 'بياناتك وطلباتك في أمان تام' },
    { icon: <Clock className="w-8 h-8" />, title: 'توفير الوقت والجهد', desc: 'نحن نوصل الدواء وأنت في مكانك' },
    { icon: <MessageCircle className="w-8 h-8" />, title: 'استشارات صيدلية', desc: 'فريق من الصيادلة جاهز لمساعدتك' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'أدوية أصلية 100%', desc: 'جودة مضمونة من مصادر موثوقة' },
  ];

  return (
    <div className="w-full bg-gray-50 font-sans pb-12">
      
      {/* ================= 1. القسم الافتتاحي (Hero) ================= */}
      <section className="relative max-w-4xl mx-auto px-6 pt-16 pb-12 text-center z-10">
        <h3 className="text-red-600 font-bold text-lg mb-4">كيف يعمل الطلب؟</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          3 خطوات بسيطة <br /> توصلك لدوائك بسهولة
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          نحن هنا لتوفير وقتك وجهدك وتوصيل الدواء لحد باب بيتك <br className="hidden md:block" />
          في الجيزة بأسرع وقت وأعلى جودة.
        </p>
      </section>

      {/* ================= 2. قسم الخطوات الثلاث ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* الخط المنقط الخلفي الذي يربط الأرقام (يظهر في الشاشات الكبيرة فقط) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-red-200 z-0 mx-48"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {/* الدائرة الحمراء للرقم */}
              <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-8 shadow-lg shadow-red-200">
                {step.num}
              </div>
              
              {/* بطاقة الخطوة */}
              <div className="bg-white w-full rounded-[32px] p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
                {/* مساحة الصورة التعبيرية 3D */}
                <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-gray-400">
                  {step.imagePlaceholder}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 mb-6 text-sm leading-relaxed min-h-[60px]">
                  {step.desc}
                </p>
                
                {/* الأوسمة (Tags) السفلية */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {step.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100">
                      <span className="text-gray-400">{tag.icon}</span>
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. قسم لماذا تختار صيدلية غلاب؟ ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">لماذا تختار صيدلية غلاب؟</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-200 pt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center px-2">
              <div className="text-red-600 mb-4 bg-red-50 p-4 rounded-2xl">
                {feature.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. بانر الدعوة (CTA) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-red-600 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
          
          {/* الجزء الأيمن (النصوص والأزرار) */}
          <div className="w-full md:w-3/5 p-10 md:p-14 relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">جاهز تطلب دوائك الآن؟</h2>
            <p className="text-red-100 text-lg mb-10">ابدأ طلبك في دقائق، ونحن نتولى الباقي.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/order" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-lg text-lg">
                <Send className="w-5 h-5 rotate-180" />
                قدم طلبك الآن
              </Link>
              <Link to="/order" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition text-lg">
                <MessageCircle className="w-5 h-5" />
                اطلب عبر واتساب
              </Link>
            </div>

            {/* مميزات سريعة تحت الأزرار */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              <span className="flex items-center gap-2 text-white text-sm font-medium">
                <CheckCircle className="w-5 h-5 opacity-80" /> خدمة موثوقة
              </span>
              <span className="flex items-center gap-2 text-white text-sm font-medium">
                <CreditCard className="w-5 h-5 opacity-80" /> لا دفع أونلاين
              </span>
              <span className="flex items-center gap-2 text-white text-sm font-medium">
                <UserX className="w-5 h-5 opacity-80" /> لا تحتاج تسجيل
              </span>
            </div>
          </div>

          {/* الجزء الأيسر (صورة الصيدلية كخلفية) */}
          <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-800 relative">
            <div className="absolute inset-0 bg-black/20 z-0"></div> {/* طبقة تعتيم خفيفة */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
               صورة واجهة صيدلية غلاب من الخارج
            </div>
            {/* تدرج لوني لدمج الصورة مع اللون الأحمر */}
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-transparent to-red-600 z-10 hidden md:block"></div>
          </div>

        </div>
        
        {/* نص التذييل الصغير أسفل البانر */}
        <p className="text-center text-gray-500 mt-8 font-medium">
          صيدلية غلاب.. صحتك أولاً ❤️
        </p>
      </section>

    </div>
  );
};

export default HowItWorksPage;