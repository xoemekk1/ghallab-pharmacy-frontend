// المسار: src/pages/Careers.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, TrendingUp, Users, Calendar, Award, 
  Heart, GraduationCap, Briefcase, MapPin, Clock, 
  Upload, Send, Phone, Mail, User, ChevronDown, MessageCircle, FileText
} from 'lucide-react';

const Careers = () => {
  // ==========================================
  // 1. إدارة حالة النموذج (State)
  // ==========================================
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    notes: '',
    cv: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // دوال التعامل مع المدخلات
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cv: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات للخادم (API)
    setTimeout(() => {
      console.log("تم إرسال طلب التوظيف:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      // إخفاء رسالة النجاح بعد 4 ثوانٍ
      setTimeout(() => setIsSuccess(false), 4000);
    }, 2000);
  };

  // ==========================================
  // 2. البيانات الوهمية (Mock Data)
  // ==========================================
  const jobs = [
    { id: 1, title: 'صيدلي', experience: 'خبرة 1-3 سنوات في مجال الصيدليات', location: 'الجيزة', type: 'دوام كامل' },
    { id: 2, title: 'مساعد صيدلي', experience: 'خبرة 0-2 سنة', location: 'الجيزة', type: 'دوام كامل' },
    { id: 3, title: 'مندوب توصيل', experience: 'رخصة قيادة سارية', location: 'الجيزة', type: 'دوام جزئي' },
  ];

  const workFeatures = [
    { icon: <Calendar />, title: 'مرونة في العمل', desc: 'بيئة عمل مرنة ومتوازنة' },
    { icon: <Award />, title: 'مسار مهني واضح', desc: 'فرص للنمو والترقي داخل الشركة' },
    { icon: <Users />, title: 'ثقافة داعمة', desc: 'نؤمن بالاحترام، التعاون، والعمل الجماعي' },
    { icon: <Heart />, title: 'تأثير حقيقي', desc: 'تساهم في تحسين حياة الناس كل يوم' },
    { icon: <GraduationCap />, title: 'تدريب مستمر', desc: 'نستثمر في تطوير مهاراتك باستمرار' },
  ];

  return (
    <div className="w-full bg-gray-50 font-sans pb-12">
      
      {/* ================= القسم الأول: Hero Section ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* النصوص */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              انضم إلى فريق <br />
              <span className="text-red-600">صيدلية غلاب</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              نؤمن أن فريقنا هو سر نجاحنا. نحن نبحث دائماً عن أشخاص شغوفين، طموحين، ويضعون صحة الناس أولاً.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="w-8 h-8 text-red-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">بيئة عمل إيجابية ومحفزة</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="w-8 h-8 text-red-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">فرص للتطوير والنمو</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <p className="text-sm font-bold text-gray-800">فريق محترف وداعم</p>
              </div>
            </div>
          </div>

          {/* الصورة الجمالية */}
          <div className="w-full lg:w-1/2 h-[400px]">
            <div className="w-full h-full bg-gray-200 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-300">
                صورة الصيدلية من الداخل
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= القسم الثاني: لماذا تعمل معنا؟ ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="inline-block relative mb-12">
          <h2 className="text-3xl font-bold text-gray-900">لماذا تعمل معنا؟</h2>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600 rounded-full"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {workFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-md transition">
              <div className="bg-red-50 p-4 rounded-full text-red-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= القسم الثالث: الوظائف الشاغرة ================= */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">الوظائف الشاغرة</h2>
        
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:border-red-200 transition">
              
              <div className="flex items-center gap-4 text-right w-full md:w-auto">
                <div className="bg-gray-50 p-3 rounded-xl text-gray-600 hidden md:block">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-gray-500 text-sm">{job.experience}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 w-full md:w-auto text-sm text-gray-600 font-medium">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
              </div>

              <a href="#apply-form" onClick={() => setFormData({...formData, position: job.title})} className="w-full md:w-auto bg-red-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition text-center whitespace-nowrap">
                تقديم الآن
              </a>
            </div>
          ))}
        </div>
        
        <p className="text-gray-600 mt-8 font-medium">
          لا تجد وظيفة مناسبة؟ <a href="#apply-form" className="text-red-600 hover:underline font-bold">قدم طلبك الآن</a>
        </p>
      </section>

      {/* ================= القسم الرابع: نموذج التقديم ================= */}
      <section id="apply-form" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="bg-white rounded-[40px] shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* الجانب الأيمن (الوردي): دعوة لتقديم السيرة الذاتية العامة */}
          <div className="w-full md:w-1/3 bg-red-50 p-10 flex flex-col items-center justify-center text-center">
            <div className="mb-6 relative">
              <FileText className="w-24 h-24 text-red-200" strokeWidth={1} />
              <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-sm">
                <User className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">لا تجد الوظيفة المناسبة؟</h3>
            <p className="text-gray-600 mb-8">أرسل سيرتك الذاتية وسنتواصل معك عند توفر فرصة تتناسبك.</p>
            
            {/* زر وهمي يحاكي رفع الملف المباشر */}
            <label className="w-full bg-transparent border-2 border-red-600 text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition flex items-center justify-center gap-2 cursor-pointer">
              <Upload className="w-5 h-5" />
              إرسال سيرة ذاتية عامة
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
            </label>
          </div>

          {/* الجانب الأيسر: نموذج البيانات */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">قدم طلبك الآن</h2>
            
            {isSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl mb-6 font-bold text-center">
                تم استلام طلبك بنجاح! نتمنى لك التوفيق.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                  <User className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="الاسم الكامل" required className="w-full bg-transparent focus:outline-none" />
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                  <Phone className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهاتف" required dir="rtl" className="w-full bg-transparent focus:outline-none" />
                </div>
              </div>

              <div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                <Mail className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="البريد الإلكتروني" required className="w-full bg-transparent focus:outline-none text-left" dir="ltr" />
              </div>

              <div className="relative flex items-center border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-red-500 transition">
                <Briefcase className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
                <select name="position" value={formData.position} onChange={handleChange} required className="w-full bg-transparent focus:outline-none appearance-none cursor-pointer text-gray-700">
                  <option value="" disabled>الوظيفة المتقدم لها</option>
                  <option value="صيدلي">صيدلي</option>
                  <option value="مساعد صيدلي">مساعد صيدلي</option>
                  <option value="مندوب توصيل">مندوب توصيل</option>
                  <option value="أخرى">أخرى (تقديم عام)</option>
                </select>
                <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="اكتب نبذة عن نفسك... (اختياري)" rows="4" className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-red-500 transition resize-none"></textarea>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <label className="w-full sm:w-auto bg-gray-50 border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl hover:bg-gray-100 transition flex items-center justify-center gap-2 cursor-pointer">
                  <Upload className="w-5 h-5" />
                  {formData.cv ? formData.cv.name : 'إرفاق السيرة الذاتية'}
                  <input type="file" required className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                </label>
                <span className="text-xs text-gray-400 font-medium">(PDF, DOC, DOCX للحد الأقصى 5MB)</span>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full mt-6 py-4 rounded-xl font-bold flex justify-center items-center gap-2 text-white transition shadow-lg ${isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 shadow-red-200'}`}>
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'} <Send className="w-5 h-5 rotate-180" />
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ================= القسم الخامس: البانر السفلي (التواصل) ================= */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="bg-red-700 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between text-white shadow-md">
          <p className="font-bold text-lg mb-4 sm:mb-0">
            تحدث معنا على واتساب لأي استفسار عن الوظائف
          </p>
          <a href="#" className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-xl hover:bg-red-800 transition flex items-center gap-2 w-full sm:w-auto justify-center">
            تواصل عبر واتساب <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Careers;