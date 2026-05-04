// المسار: src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Clock, ShieldCheck, MapPin, Target, Eye, 
  CheckCircle, Smile, ShoppingBag, Calendar, Lock, Zap, 
  Upload, MessageCircle 
} from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-gray-50 pb-12">
      
      {/* ================= 1. القسم الافتتاحي (Hero Section) ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* الجانب الأيمن: النصوص والمميزات */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 inline-block relative">
                من نحن
                <span className="absolute bottom-0 right-0 w-3/4 h-1 bg-red-600 rounded-full translate-y-3"></span>
              </h1>
              <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                صيدلية غلاب تلتزم بتقديم رعاية صحية موثوقة وسريعة<br />
                من خلال تكنولوجيا ذكية وفريق صيدلي محترف، لنكون دائماً<br />
                أقرب صيدلية إليك في الجيزة.
              </p>
            </div>

            {/* المميزات الأربعة تحت النص */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {[
                { icon: <Users className="w-6 h-6" />, title: 'فريق صيدلي', sub: 'محترف' },
                { icon: <Clock className="w-6 h-6" />, title: 'توصيل سريع', sub: 'وخدمة مميزة' },
                { icon: <ShieldCheck className="w-6 h-6" />, title: 'أدوية أصلية', sub: '100%' },
                { icon: <MapPin className="w-6 h-6" />, title: 'خدمة داخل', sub: 'الجيزة فقط' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <div className="text-red-600">{item.icon}</div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    {item.title}<br />
                    <span className="text-gray-500 font-normal">{item.sub}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* الجانب الأيسر: الصورة (بحافة دائرية سفلية كما في التصميم) */}
          <div className="w-full lg:w-1/2 h-full min-h-[400px]">
            <div className="w-full h-full bg-gray-200 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl rounded-bl-[120px] overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300">
                صورة واجهة الصيدلية من الداخل
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. قسم الرؤية والرسالة ================= */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* بطاقة الرسالة */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="bg-red-50 p-4 rounded-full text-red-600 shrink-0">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">رسالتنا</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تقديم خدمات صيدلانية موثوقة وسريعة باستخدام أحدث التقنيات، مع التركيز على راحة العميل وسلامته الصحية.
              </p>
            </div>
          </div>

          {/* بطاقة الرؤية */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition">
            <div className="bg-red-50 p-4 rounded-full text-red-600 shrink-0">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">رؤيتنا</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                أن نكون الخيار الأول في خدمات الصيدلة الذكية في مصر، عبر تجربة سهلة وآمنة تلبي احتياجات كل مريض بسرعة واحترافية.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. قسم مؤسس الصيدلية ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center">
          
          {/* صورة المؤسس */}
          <div className="w-full md:w-1/3 h-80 md:h-auto bg-gray-200 relative shrink-0">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-300">
              صورة د/ محمد غلاب
            </div>
          </div>

          {/* تفاصيل المؤسس */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h4 className="text-red-600 font-bold mb-1">مؤسس صيدلية غلاب</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">د/ محمد غلاب</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              صيدلي إكلينيكي بخبرة واسعة في مجال الصيدلة وإدارة المنشآت الصيدلانية، يهتم بتقديم رعاية صحية آمنة ومضمونة لكل عميل.
            </p>
            
            <div className="space-y-4">
              {[
                'بكالوريوس صيدلة - جامعة القاهرة',
                'خبرة في إدارة الصيدليات لأكثر من 10 سنوات',
                'متخصص في الصيدلة الإكلينيكية ومتابعة الحالات'
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  <span className="text-gray-800 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. قسم الخبرة والمصداقية (الأرقام) ================= */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="inline-block relative mb-12">
          <h2 className="text-3xl font-bold text-gray-900">خبرتنا ومصداقيتنا</h2>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-red-600 rounded-full"></span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8" />, value: '100%', label: 'أدوية أصلية ومضمونة' },
            { icon: <Calendar className="w-8 h-8" />, value: '+10', label: 'سنوات من الخبرة' },
            { icon: <ShoppingBag className="w-8 h-8" />, value: '+100,000', label: 'طلب تم تنفيذه' },
            { icon: <Smile className="w-8 h-8" />, value: '+50,000', label: 'عميل سعيد' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-red-600 mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-red-600 mb-2" dir="ltr">{stat.value}</h3>
              <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 5. قسم لماذا تثق بنا؟ ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center border-t border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">لماذا تثق بنا؟</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <MapPin />, title: 'خدمة داخل الجيزة', desc: 'نركز على خدمتك بأفضل شكل في الجيزة' },
            { icon: <Lock />, title: 'خصوصيتك تهمنا', desc: 'بياناتك وأمانك الطبي في أمان تام' },
            { icon: <Users />, title: 'فريق صيدلي محترف', desc: 'متابعة واستشارة من أهل الخبرة' },
            { icon: <Clock />, title: 'سرعة في التنفيذ', desc: 'نرد على طلبك في دقائق ونوصلك بسرعة' },
            { icon: <ShieldCheck />, title: 'أدوية أصلية 100%', desc: 'جودة مضمونة من مصادر موثوقة' },
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-4">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="font-bold text-gray-800 mb-2 text-sm">{feature.title}</h4>
              <p className="text-gray-500 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 6. بانر الدعوة لاتخاذ إجراء (CTA) ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-red-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl relative overflow-hidden">
          
          {/* تأثيرات جمالية في الخلفية */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center md:text-right mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">احصل على رعاية صيدلانية موثوقة الآن</h2>
            <p className="text-red-100 text-lg">
              اطلب دوائك بسهولة من أقرب صيدلية في الجيزة<br />
              أو ارفع روشتتك وسنقوم بالباقي.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link to="/order" className="bg-red-700 text-white border border-red-500 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-800 transition">
              <MessageCircle className="w-5 h-5" />
              اطلب دواء الآن
            </Link>
            <Link to="/order" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-lg">
              <Upload className="w-5 h-5" />
              ارفع روشتة
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default About;