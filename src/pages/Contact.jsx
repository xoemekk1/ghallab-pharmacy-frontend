// المسار: src/pages/Contact.jsx
import React, { useState } from 'react';
// استيراد الأيقونات المستخدمة في التصميم
import { 
  PhoneCall, MessageCircle, MapPin, Mail, User, Phone, 
  Send, ShieldCheck, Clock, Users, Headset 
} from 'lucide-react';

const Contact = () => {
  // ==========================================
  // 1. إعداد حالة النموذج (State)
  // ==========================================
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  
  // حالة لإظهار رسالة نجاح بعد الإرسال
  const [isSent, setIsSent] = useState(false);

  // ==========================================
  // 2. دوال معالجة البيانات
  // ==========================================
  // دالة لتحديث البيانات عند كتابة المستخدم في الحقول
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // دالة معالجة إرسال النموذج للـ API
  const handleSubmit = (e) => {
    e.preventDefault(); // منع تحديث الصفحة الافتراضي
    console.log("تم تجهيز بيانات الرسالة للـ API:", formData);
    
    // إظهار رسالة نجاح مؤقتة (محاكاة للـ API)
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000); // إخفاء رسالة النجاح بعد 3 ثوانٍ
  };

  return (
    // الغلاف الخارجي: تم إزالة الخصائص المكررة والاعتماد على App.jsx
    <div className="w-full pb-12">
      
      {/* ================= القسم الأول: معلومات التواصل والنموذج ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* الجانب الأيمن: النصوص وبطاقات التواصل */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 inline-block relative">
                تواصل معنا
                {/* خط أحمر تجميلي تحت العنوان */}
                <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-red-600 rounded-full translate-y-3"></span>
              </h1>
              <p className="text-gray-500 text-lg mt-6">
                نحن هنا لخدمتك والإجابة على جميع استفساراتك.<br/>
                تواصل معنا بسهولة وسنرد عليك في أقرب وقت.
              </p>
            </div>

            <div className="space-y-4">
              {/* بطاقة الاتصال */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-50 p-4 rounded-full text-red-600">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">اتصل بنا</h3>
                  <p className="text-red-600 font-bold text-xl my-1" dir="ltr">01098765432</p>
                  <p className="text-gray-400 text-sm">متاح من 9 صباحاً - 12 مساءً</p>
                </div>
              </div>

              {/* بطاقة الواتساب */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
                <div className="bg-green-50 p-4 rounded-full text-green-600">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-800 text-lg">تواصل عبر واتساب</h3>
                  <p className="text-green-600 font-bold text-xl my-1" dir="ltr">01098765432</p>
                  <p className="text-gray-400 text-sm mb-3">رد سريع على جميع رسائلك</p>
                  <a href="#" className="flex items-center justify-center gap-2 w-full py-2 bg-green-50 text-green-700 rounded-lg font-bold hover:bg-green-100 transition">
                    <MessageCircle className="w-5 h-5" /> راسلنا على واتساب
                  </a>
                </div>
              </div>

              {/* بطاقة العنوان */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition">
                <div className="bg-red-50 p-4 rounded-full text-red-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-gray-800 text-lg">عنوان الصيدلية</h3>
                  <p className="text-gray-600 mt-1 mb-3">الجيزة - الهرم - شارع فيصل<br/>أمام محطة التعاون</p>
                  <a href="#" className="flex items-center justify-center gap-2 w-full py-2 bg-red-50 text-red-600 rounded-lg font-bold hover:bg-red-100 transition">
                    <MapPin className="w-5 h-5" /> الاتجاهات على خرائط Google
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: الصورة والنموذج */}
          <div>
            {/* صورة الصيدلية (مساحة نائبة) */}
            <div className="w-full h-64 bg-gray-200 rounded-t-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center text-gray-500">
                 صورة واجهة الصيدلية
              </div>
            </div>
            
            {/* نموذج الرسالة */}
            <div className="bg-white p-8 rounded-b-3xl shadow-lg border border-gray-100 -mt-4 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-50 p-2 rounded-lg text-red-600">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">أرسل لنا رسالة</h2>
              </div>

              {isSent && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 font-bold text-center border border-green-200">
                  تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                    <User className="w-5 h-5 text-gray-400 ml-3" />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="الاسم الكامل" required className="w-full bg-transparent focus:outline-none" />
                  </div>
                  <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                    <Phone className="w-5 h-5 text-gray-400 ml-3" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهاتف" required dir="rtl" className="w-full bg-transparent focus:outline-none" />
                  </div>
                </div>
                <div className="flex items-start border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                   <Mail className="w-5 h-5 text-gray-400 ml-3 mt-1" />
                   <textarea name="message" value={formData.message} onChange={handleChange} placeholder="رسالتك أو استفسارك" required rows="4" className="w-full bg-transparent focus:outline-none resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-200">
                  إرسال الرسالة <Send className="w-5 h-5 rotate-180" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= القسم الثاني: الخريطة ================= */}
      <section className="relative w-full h-[400px] bg-gray-200 mt-12 overflow-hidden">
        {/* صورة الخريطة كخلفية */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300">
          مكان خريطة Google
        </div>
        <div className="absolute inset-0 bg-red-600/5"></div>
        
        {/* بطاقة الموقع العائمة */}
        <div className="absolute top-1/2 right-12 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm z-10 hidden md:block">
           <h3 className="text-xl font-bold text-red-600 mb-2">صيدلية غلاب</h3>
           <p className="text-gray-600 mb-4 text-sm">الجيزة - الهرم - شارع فيصل<br/>أمام محطة التعاون</p>
           <a href="#" className="flex items-center gap-2 text-red-600 font-bold hover:underline">
             <MapPin className="w-4 h-4" /> الاتجاهات
           </a>
        </div>
        {/* أيقونة الموقع في المنتصف */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 drop-shadow-md z-10">
          <MapPin className="w-12 h-12 fill-current text-white" />
        </div>
      </section>

      {/* ================= القسم الثالث: المميزات ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b border-gray-200 pb-16">
          <div className="flex flex-col items-center">
            <Headset className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-800 mb-1">خدمة عملاء مميزة</h4>
            <p className="text-sm text-gray-500">نحن هنا لمساعدتك<br/>7 أيام في الأسبوع</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-800 mb-1">فريق محترف</h4>
            <p className="text-sm text-gray-500">صيادلة متخصصين<br/>لخدمتك دائماً</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-800 mb-1">استجابة سريعة</h4>
            <p className="text-sm text-gray-500">نرد على جميع الرسائل<br/>في أسرع وقت</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-10 h-10 text-red-600 mb-4" />
            <h4 className="font-bold text-gray-800 mb-1">خصوصيتك تهمنا</h4>
            <p className="text-sm text-gray-500">جميع بياناتك محمية<br/>100%</p>
          </div>
        </div>
      </section>

      {/* ================= القسم الرابع: بانر الدعوة ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-8 mt-12">
        <div className="bg-red-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center md:text-right mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">تحتاج استشارة سريعة؟</h2>
            <p className="text-red-100 text-lg">تحدث مع صيدلينا الآن على واتساب</p>
          </div>
          
          <div className="hidden lg:block relative z-10 text-red-200 w-24">
            <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10 25 Q 50 5 90 25" />
              <path d="M80 15 L 90 25 L 80 35" />
            </svg>
          </div>

          <a href="#" className="relative z-10 bg-white text-green-600 font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition shadow-lg w-full md:w-auto justify-center text-lg">
            <MessageCircle className="w-6 h-6" />
            استشارة مجانية
          </a>
        </div>
      </section>

    </div>
  );
};

export default Contact;