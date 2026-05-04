// المسار: src/pages/Terms.jsx
import React from 'react';
import { 
  Calendar, FileText, User, ClipboardList, Truck, 
  Wallet, RotateCcw, ShieldCheck, AlertCircle, Scale, Mail 
} from 'lucide-react';

const Terms = () => {
  // ==========================================
  // 1. مصفوفة بيانات الشروط والأحكام
  // قمنا بفصل البيانات هنا لكي يسهل عليك تعديل أي نص لاحقاً دون المساس بتصميم الكود
  // ==========================================
  const termsData = [
    {
      id: "01",
      title: "قبول الشروط",
      desc: "باستخدامك لموقعنا أو طلبك لأي من خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: "02",
      title: "استخدام الخدمات",
      desc: "خدماتنا مخصصة لطلب الأدوية والمستحضرات الصيدلانية فقط. يجب تقديم معلومات صحيحة وكاملة عند تقديم الطلب.",
      icon: <User className="w-6 h-6" />
    },
    {
      id: "03",
      title: "الطلبات والوصفات",
      desc: "يجب أن تكون الوصفات الطبية واضحة وصادرة من جهة معتمدة. تحتفظ الصيدلية بحق رفض أي طلب غير واضح أو غير مكتمل.",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      id: "04",
      title: "التوصيل",
      desc: "التوصيل متاح داخل مناطق الجيزة فقط. مدة التوصيل تقديرية وقد تختلف حسب الموقع والظروف.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      id: "05",
      title: "الدفع",
      desc: "يتم الدفع عند الاستلام نقداً. قد تتغير وسائل الدفع في المستقبل وسيتم إشعارك بأي تحديثات.",
      icon: <Wallet className="w-6 h-6" />
    },
    {
      id: "06",
      title: "سياسة الاسترجاع",
      desc: "لا يتم استرجاع الأدوية أو فتح العبوات إلا في حالة وجود خطأ من الصيدلية أو تلف في المنتج.",
      icon: <RotateCcw className="w-6 h-6" />
    },
    {
      id: "07",
      title: "الخصوصية",
      desc: "نحن نلتزم بحماية بياناتك الشخصية وعدم مشاركتها مع أي طرف ثالث إلا لتقديم الخدمة المطلوبة.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: "08",
      title: "إخلاء المسؤولية",
      desc: "نحن نبذل أقصى جهد لضمان دقة المعلومات وتوافر المنتجات، ولكن لا نضمن خلو الخدمة من الأخطاء أو الانقطاع.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      id: "09",
      title: "تعديل الشروط",
      desc: "تحتفظ صيدلية غلاب بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر التعديلات على هذه الصفحة ويعد استمرارك في استخدام الخدمة موافقة على الشروط المحدثة.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: "10",
      title: "التواصل",
      desc: "لأي استفسارات بخصوص الشروط والأحكام، يمكنك التواصل معنا عبر صفحة اتصل بنا أو عبر الواتساب.",
      icon: <Mail className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full bg-gray-50 font-sans pb-16 pt-8">
      
      {/* ================= 2. القسم الافتتاحي (Hero Section) ================= */}
      <section className="relative max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
        
        {/* خلفيات زخرفية بهتة (مأخوذة من فكرة التصميم) */}
        <div className="absolute top-0 left-10 opacity-5 pointer-events-none hidden md:block">
           <FileText className="w-48 h-48" />
        </div>
        <div className="absolute top-10 right-10 opacity-5 pointer-events-none hidden md:block">
           <ShieldCheck className="w-48 h-48" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 inline-block relative">
          الشروط والأحكام
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600 rounded-full"></span>
        </h1>
        
        <p className="text-gray-600 text-lg mt-8 mb-6">
          يرجى قراءة الشروط والأحكام بعناية قبل استخدام خدماتنا
        </p>

        {/* تاريخ التحديث */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-gray-600 font-medium">
          <Calendar className="w-5 h-5 text-gray-400" />
          <span>آخر تحديث: 25 مايو 2024</span>
        </div>
      </section>

      {/* ================= 3. قائمة الشروط والأحكام ================= */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          {/* 
            استخدام دالة map للمرور على مصفوفة البيانات ورسم كل شرط 
            هذا يمنع تكرار الكود ويجعله نظيفاً جداً
          */}
          {termsData.map((term, index) => (
            <div 
              key={term.id} 
              // إضافة خط فاصل بين العناصر ما عدا العنصر الأخير
              className={`flex flex-col md:flex-row items-start md:items-center justify-between p-8 hover:bg-gray-50 transition-colors ${
                index !== termsData.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              
              {/* الجزء الأيمن: الأيقونة والنصوص */}
              <div className="flex items-start gap-6 flex-1">
                {/* الأيقونة داخل دائرة حمراء فاتحة */}
                <div className="bg-red-50 text-red-600 p-4 rounded-full shrink-0">
                  {term.icon}
                </div>
                
                <div className="mt-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{term.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base pr-4 md:pr-0">
                    {term.desc}
                  </p>
                </div>
              </div>

              {/* الجزء الأيسر: رقم الشرط (01, 02...) */}
              <div className="hidden md:flex shrink-0 w-24 justify-end">
                <span className="text-4xl font-black text-red-100 font-serif">
                  {term.id}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. بانر الالتزام والأمان السفلي ================= */}
      <section className="max-w-5xl mx-auto px-6 mt-12">
        <div className="bg-red-50 rounded-2xl p-8 flex flex-col items-center text-center border border-red-100">
          <div className="bg-white p-3 rounded-full text-red-600 shadow-sm mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            نحن ملتزمون بخدمتك بأمان وشفافية
          </h2>
          <p className="text-gray-600">
            رضاك وثقتك هي أولويتنا دائماً
          </p>
        </div>
      </section>

    </div>
  );
};

export default Terms;