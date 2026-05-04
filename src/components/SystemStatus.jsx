import React from 'react';
import { 
  Search, ArrowRight, RotateCw, MessageCircle, 
  AlertTriangle, SearchX, ShieldCheck, Users, 
  Truck, Lock, Pill 
} from 'lucide-react';

/**
 * مكون حالات النظام (SystemStatus)
 * @param {string} status - الحالة المراد عرضها ('loading', 'no-results', 'error')
 */
const SystemStatus = ({ status = 'loading' }) => {
  
  // ==========================================
  // 1. مكون حالة التحميل (Loading / Skeleton)
  // يعرض هيكلاً عظمياً نابضاً لمحاكاة جلب البيانات
  // ==========================================
  const LoadingCard = () => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full max-w-sm animate-in fade-in duration-500">
      <div className="flex items-center gap-2 mb-6 bg-blue-50 text-blue-600 px-4 py-2 rounded-full w-fit mx-auto">
        <RotateCw className="w-4 h-4 animate-spin" />
        <span className="text-sm font-bold">جاري التحميل...</span>
      </div>
      
      {/* محاكاة شريط البحث */}
      <div className="relative mb-6">
        <div className="flex items-center border border-gray-100 rounded-xl px-4 py-3 bg-gray-50">
          <Search className="w-5 h-5 text-gray-300 ml-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <ArrowRight className="w-5 h-5 text-red-500 mr-auto" />
        </div>
      </div>

      {/* محاكاة قائمة النتائج (Skeleton Rows) */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl w-full animate-pulse">
            <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            <div className="h-2 bg-gray-100 rounded w-1/2"></div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-blue-600 font-bold flex items-center justify-center gap-2">
          <RotateCw className="w-4 h-4 animate-spin" /> جاري البحث...
        </p>
        <p className="text-gray-400 text-[10px] mt-1">قد تستغرق هذه العملية بضع ثوانٍ فقط</p>
      </div>
    </div>
  );

  // ==========================================
  // 2. مكون لا توجد نتائج (No Results)
  // يظهر عند فشل البحث في العثور على دواء محدد
  // ==========================================
  const NoResultsCard = () => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full max-w-sm animate-in zoom-in-95 duration-300">
      <div className="flex items-center gap-2 mb-6 bg-green-50 text-green-600 px-4 py-2 rounded-full w-fit mx-auto">
        <Search className="w-4 h-4" />
        <span className="text-sm font-bold">لا توجد نتائج</span>
      </div>
      
      <div className="border border-gray-100 rounded-2xl p-6 text-center bg-gray-50/30">
         <div className="relative w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Pill className="w-10 h-10 text-gray-300" />
            <SearchX className="absolute -bottom-1 -right-1 w-6 h-6 text-gray-400 bg-white rounded-full p-1 shadow-sm" />
         </div>
         <h3 className="font-bold text-gray-800 mb-2">لم نجد نتائج</h3>
         <p className="text-gray-400 text-xs leading-relaxed">
           لم نعثر على أي منتج مطابق لبحثك.<br/>جرب كتابة اسم مختلف أو وصف ما تحتاجه.
         </p>
      </div>

      <div className="mt-6 space-y-3">
        <p className="text-green-600 text-xs font-bold flex items-center gap-1">
          <span>💡</span> اقتراحات قد تساعدك:
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {['مسكن', 'برد', 'فيتامينات', 'مضاد حيوي'].map(t => (
            <span key={t} className="px-3 py-1 bg-white border border-gray-100 rounded-full text-[10px] text-gray-500 hover:border-green-200 cursor-pointer transition">
              {t}
            </span>
          ))}
        </div>
        <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 transition">
          اكتب طلبك الآن
        </button>
        <button className="w-full border border-green-600 text-green-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-50 transition">
          <MessageCircle className="w-4 h-4" /> تواصل معنا عبر واتساب
        </button>
      </div>
    </div>
  );

  // ==========================================
  // 3. مكون حدث خطأ (Error State)
  // يظهر عند انقطاع الإنترنت أو فشل الخادم
  // ==========================================
  const ErrorCard = () => (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 w-full max-w-sm animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-2 mb-6 bg-red-50 text-red-600 px-4 py-2 rounded-full w-fit mx-auto">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm font-bold">حدث خطأ ⚠️</span>
      </div>
      
      <div className="border border-gray-100 rounded-2xl p-10 text-center bg-red-50/10">
         <div className="relative mb-4">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
               <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
         </div>
         <h3 className="font-bold text-gray-800 mb-2 text-lg">حدث خطأ بسيط</h3>
         <p className="text-gray-400 text-xs leading-relaxed">
           تعذر علينا تحميل النتائج الآن.<br/>يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.
         </p>
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-700 shadow-lg shadow-red-100 transition">
          <RotateCw className="w-4 h-4" /> إعادة المحاولة
        </button>
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-100 flex-1"></div>
          <span className="text-gray-300 text-xs font-bold">أو</span>
          <div className="h-px bg-gray-100 flex-1"></div>
        </div>
        <button className="w-full border-2 border-green-600 text-green-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-50 transition">
          <MessageCircle className="w-4 h-4" /> تواصل معنا عبر واتساب
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full font-sans text-right" dir="rtl">
      {/* 4. الحاوية الرئيسية لعرض الحالات */}
      <div className="flex flex-wrap justify-center gap-8 py-10 px-4 bg-gray-50/50 rounded-[40px]">
        {status === 'loading' && <LoadingCard />}
        {status === 'no-results' && <NoResultsCard />}
        {status === 'error' && <ErrorCard />}
      </div>

      {/* 5. شريط المميزات السفلي (Footer Features) */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-200">
        <div className="flex items-center gap-3 justify-end group">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition">أدوية أصلية 100%</p>
            <p className="text-[10px] text-gray-400">جودة مضمونة من مصادر موثوقة</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><ShieldCheck className="w-5 h-5 text-gray-700" /></div>
        </div>
        
        <div className="flex items-center gap-3 justify-end group">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition">صيادلة متخصصون</p>
            <p className="text-[10px] text-gray-400">فريق كامل جاهز لدعمك في كل وقت</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><Users className="w-5 h-5 text-gray-700" /></div>
        </div>

        <div className="flex items-center gap-3 justify-end group">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition">توصيل سريع وآمن</p>
            <p className="text-[10px] text-gray-400">تغطية شاملة لجميع مناطق الجيزة</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><Truck className="w-5 h-5 text-gray-700" /></div>
        </div>

        <div className="flex items-center gap-3 justify-end group">
          <div className="text-right">
            <p className="text-xs font-bold text-gray-800 group-hover:text-red-600 transition">خصوصيتك تهمنا</p>
            <p className="text-[10px] text-gray-400">بياناتك محمية ومشفرة بأمان تام</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100"><Lock className="w-5 h-5 text-gray-700" /></div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;