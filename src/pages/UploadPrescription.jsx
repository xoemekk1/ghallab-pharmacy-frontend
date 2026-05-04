import React, { useState } from 'react';
import { 
  ArrowRight, User, Phone, UploadCloud, 
  Image as ImageIcon, Camera, FileText, 
  Trash2, Search, ShieldCheck, Lock, Send 
} from 'lucide-react';

/**
 * مكون رفع الروشتة (UploadPrescription)
 * يوفر واجهة متكاملة لإرسال صور الوصفات الطبية
 */
const UploadPrescription = () => {
  // --- حالة البيانات (State) ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    image: null,
    imagePreview: null
  });

  // --- معالجة اختيار الصورة ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file) // إنشاء رابط مؤقت للمعاينة
      });
    }
  };

  // --- حذف الصورة المختارة ---
  const removeImage = () => {
    setFormData({ ...formData, image: null, imagePreview: null });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 font-sans text-right" dir="rtl">
      <div className="max-w-xl mx-auto space-y-6">
        
        {/* زر العودة والشعار */}
        <div className="flex items-center justify-between">
          <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50">
            <ArrowRight className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center p-2 mb-2">
                <span className="text-red-600 font-black">GHALLAB</span>
             </div>
             <h1 className="text-2xl font-bold text-gray-900">ارفع روشتتك</h1>
             <p className="text-gray-500 text-sm mt-1">سيتم مراجعة الروشتة والتواصل معك</p>
          </div>
          <div className="w-10"></div>
        </div>

        {/* تنبيه الخصوصية */}
        <div className="bg-red-50/50 border border-red-100 rounded-2xl p-4 flex items-center gap-4">
          <div className="bg-white p-2 rounded-xl shadow-sm">
            <ShieldCheck className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h4 className="text-red-600 font-bold text-sm">خصوصيتك وأمانك تهمنا</h4>
            <p className="text-gray-500 text-xs">صورتك لا تشارك مع أي طرف ثالث</p>
          </div>
        </div>

        {/* نموذج البيانات الشخصية */}
        <div className="space-y-4">
          <div className="relative group">
            <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text" 
              placeholder="الاسم الكامل" 
              className="w-full bg-white border border-gray-100 rounded-2xl pr-12 pl-4 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="relative group">
            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs font-mono" dir="ltr">01012345678</div>
            <input 
              type="tel" 
              placeholder="رقم الهاتف" 
              className="w-full bg-white border border-gray-100 rounded-2xl pr-12 pl-20 py-4 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all shadow-sm"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        {/* قسم رفع الصورة */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-800 text-sm mr-2">ارفع صورة الروشتة</h3>
          <div className="relative border-2 border-dashed border-gray-200 rounded-[32px] bg-white p-8 transition-colors hover:border-red-200">
            <input 
              type="file" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="flex flex-col items-center text-center">
              <div className="bg-red-50 p-4 rounded-full mb-4">
                <UploadCloud className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-700 font-bold mb-1">اسحب الصورة هنا أو اضغط للاختيار</p>
              <p className="text-gray-400 text-xs">PNG, JPG حتى 10MB</p>
            </div>
          </div>

          {/* أزرار الخيارات السريعة */}
          <div className="grid grid-cols-3 gap-3">
            <button className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
               <FileText className="w-5 h-5 text-gray-600" />
               <span className="text-[10px] font-bold text-gray-500">اختر ملف</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
               <Camera className="w-5 h-5 text-gray-600" />
               <span className="text-[10px] font-bold text-gray-500">التقاط صورة</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition">
               <ImageIcon className="w-5 h-5 text-gray-600" />
               <span className="text-[10px] font-bold text-gray-500">اختر من المعرض</span>
            </button>
          </div>
        </div>

        {/* قسم المعاينة (يظهر فقط عند اختيار صورة) */}
        {formData.imagePreview && (
          <div className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 text-sm">معاينة الروشتة</h3>
              <button 
                onClick={removeImage}
                className="flex items-center gap-1 text-red-600 text-xs font-bold hover:bg-red-50 p-2 rounded-lg transition"
              >
                <Trash2 className="w-4 h-4" /> حذف
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 h-48 bg-gray-50">
              <img src={formData.imagePreview} alt="Prescription" className="w-full h-full object-cover" />
              <button className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded-full shadow-sm">
                <Search className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>
        )}

        {/* زر الإرسال النهائي */}
        <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-200 hover:bg-red-700 active:scale-95 transition-all">
           إرسال الروشتة
           <Send className="w-5 h-5 rotate-180" />
        </button>

        {/* ملاحظة النهاية */}
        <div className="bg-gray-100/50 p-4 rounded-2xl flex items-center justify-center gap-3">
           <Lock className="w-4 h-4 text-gray-400" />
           <p className="text-[10px] text-gray-500 font-medium">
             سيتم مراجعة الروشتة من قبل الصيدلي المختص والتواصل معك في أقرب وقت
           </p>
        </div>

      </div>
    </div>
  );
};

export default UploadPrescription;