// المسار: src/pages/OrderForm.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitOrderData } from '../services/api'; // استدعاء دالة الإرسال للـ API
import { 
  ArrowRight, User, Phone, MapPin, FileText, Pill, 
  MessageCircle, Send, CheckCircle, Home, Upload, X 
} from 'lucide-react';

const OrderForm = () => {
  // 1. تعريف حالة النموذج لتخزين بيانات المستخدم
  const [formData, setFormData] = useState({
    name: "", phone: "", address: "", medicine: "", quantity: "1", notes: "", prescription: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderType, setOrderType] = useState('دواء'); // حالة لحفظ نوع الطلب

  // 2. دوال التعامل مع المدخلات
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // مسح الخطأ بمجرد بدء الكتابة
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, prescription: file }));
  };

  // 3. التحقق من صحة البيانات قبل الإرسال
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم الكامل مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    else if (!/^01[0125][0-9]{8}$/.test(formData.phone)) newErrors.phone = "يجب إدخال رقم هاتف مصري صحيح (11 رقم)";
    if (!formData.address.trim()) newErrors.address = "العنوان مطلوب لتوصيل الطلب";
    if (!formData.medicine.trim()) newErrors.medicine = "اسم الدواء أو الوصف مطلوب";
    if (!formData.quantity || formData.quantity < 1) newErrors.quantity = "الكمية يجب أن تكون 1 على الأقل";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  // 4. إرسال البيانات للواجهة الخلفية (API)
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      await submitOrderData({ ...formData, orderType }); // دمج نوع الطلب مع باقي البيانات
      setIsSubmitting(false);
      setIsSuccess(true); // عرض شاشة النجاح
    } catch (error) {
      console.error("حدث خطأ:", error);
      setIsSubmitting(false);
      alert("عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.");
    }
  };

  // ==========================================
  // حالة شاشة النجاح (بعد إرسال الطلب)
  // ==========================================
  if (isSuccess) {
    return (
      <div className="flex items-center justify-center p-4 py-12 w-full">
        <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 text-center border border-gray-100 animate-in fade-in zoom-in duration-300">
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
            <div className="absolute w-full h-full border-2 border-dashed border-red-200 rounded-full animate-spin-slow"></div>
            <CheckCircle className="w-12 h-12 text-red-600 z-10" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">تم استلام طلبك</h2>
          <p className="text-gray-500 mb-6">سيتم التواصل معك خلال دقائق<br/>شكراً لثقتك بنا ❤️</p>
          
          {/* ملخص الطلب */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-right border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 text-center">ملخص الطلب</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-red-600 font-bold">{orderType}</span>
                <span className="text-gray-600 flex items-center gap-2"><FileText className="w-4 h-4"/> نوع الطلب</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="text-red-600 font-bold">{formData.quantity} أصناف</span>
                <span className="text-gray-600 flex items-center gap-2"><Pill className="w-4 h-4"/> عدد الأصناف</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-bold">{formData.address}</span>
                <span className="text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4"/> الموقع</span>
              </div>
            </div>
          </div>

          <Link to="/" className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-red-700 transition">
            العودة للرئيسية
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  // ==========================================
  // حالة شاشة النموذج (إدخال البيانات)
  // ==========================================
  return (
    // تم تعديل التنسيق هنا ليتناسب مع المساحة بين الـ Navbar والـ Footer
    <div className="flex justify-center items-start p-4 py-10 w-full">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-6 border border-gray-100">
        
        {/* زر العودة والعنوان */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </Link>
          <div className="font-bold text-xl text-gray-800">صيدلية غلاب</div>
          <div className="w-10"></div>
        </div>

        {/* شريط التقدم (Progress Bar) */}
        <div className="flex items-center justify-between mb-8 px-4 relative">
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
            <span className="text-xs text-red-600 font-bold">بيانات الطلب</span>
          </div>
          <div className="absolute top-4 left-10 right-10 h-0.5 bg-gray-200 -z-0">
             <div className="h-full bg-red-600 w-1/2"></div>
          </div>
          <div className="flex flex-col items-center gap-1 z-10">
            <div className="w-8 h-8 bg-white border-2 border-gray-200 text-gray-400 rounded-full flex items-center justify-center font-bold text-sm">2</div>
            <span className="text-xs text-gray-400">تأكيد الطلب</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">أكمل بيانات طلبك</h1>
          <p className="text-gray-500 text-sm">نحتاج بعض المعلومات للتواصل معك</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* حقل الاسم */}
          <div>
            <div className={`flex items-center border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500 transition ${errors.name ? 'border-red-500' : 'border-gray-200'}`}>
              <User className="w-5 h-5 text-gray-400 ml-3" />
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="الاسم الكامل" className="w-full bg-transparent focus:outline-none" />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1 px-2">{errors.name}</p>}
          </div>

          {/* حقل الهاتف */}
          <div>
            <div className={`flex items-center border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500 transition ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}>
              <Phone className="w-5 h-5 text-gray-400 ml-3" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="رقم الهاتف (مثال 01012345678)" dir="rtl" className="w-full bg-transparent focus:outline-none" />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1 px-2">{errors.phone}</p>}
          </div>

          {/* حقل العنوان */}
          <div>
            <div className={`flex items-center border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-red-500 transition ${errors.address ? 'border-red-500' : 'border-gray-200'}`}>
              <MapPin className="w-5 h-5 text-gray-400 ml-3" />
              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="العنوان بالتفصيل" className="w-full bg-transparent focus:outline-none" />
            </div>
            {errors.address && <p className="text-red-500 text-xs mt-1 px-2">{errors.address}</p>}
          </div>

          {/* أزرار اختيار نوع الطلب */}
          <div className="grid grid-cols-3 gap-3 my-6">
            <button type="button" onClick={() => setOrderType('روشتة')} className={`flex flex-col items-center justify-center py-4 rounded-xl border transition ${orderType === 'روشتة' ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 bg-white text-gray-500'}`}>
              <FileText className="w-6 h-6 mb-2" />
              <span className="text-sm font-bold">روشتة</span>
            </button>
            <button type="button" onClick={() => setOrderType('دواء')} className={`flex flex-col items-center justify-center py-4 rounded-xl border transition ${orderType === 'دواء' ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 bg-white text-gray-500'}`}>
              <Pill className="w-6 h-6 mb-2" />
              <span className="text-sm font-bold">دواء</span>
            </button>
            <button type="button" onClick={() => setOrderType('استشارة')} className={`flex flex-col items-center justify-center py-4 rounded-xl border transition ${orderType === 'استشارة' ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-200 bg-white text-gray-500'}`}>
              <MessageCircle className="w-6 h-6 mb-2" />
              <span className="text-sm font-bold">استشارة</span>
            </button>
          </div>

          {/* تفاصيل الدواء والكمية */}
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">تفاصيل الطلب</h3>
            <div className="flex gap-2 mb-3">
              <div className="flex-1">
                <input type="text" name="medicine" value={formData.medicine} onChange={handleChange} placeholder="اسم الدواء أو الوصف..." className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 ${errors.medicine ? 'border-red-500' : 'border-gray-200'}`} />
                {errors.medicine && <p className="text-red-500 text-xs mt-1">{errors.medicine}</p>}
              </div>
              <div className="w-24">
                <input type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} placeholder="الكمية" className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 ${errors.quantity ? 'border-red-500' : 'border-gray-200'}`} />
              </div>
            </div>
            
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="ملاحظات (اختياري)..." rows="3" className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500 resize-none text-sm"></textarea>
            
            {/* رفع صورة الروشتة */}
            <div className="mt-4">
              <label className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 transition">
                <div className="flex items-center gap-2 text-gray-500">
                  <Upload className="w-5 h-5" />
                  <span className="text-sm font-medium">
                    {formData.prescription ? formData.prescription.name : "إرفاق صورة الروشتة (اختياري)"}
                  </span>
                </div>
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
              {formData.prescription && (
                <button type="button" onClick={() => setFormData({...formData, prescription: null})} className="text-red-500 text-xs mt-2 flex items-center gap-1 hover:underline">
                  <X className="w-3 h-3" /> إزالة الملف
                </button>
              )}
            </div>
          </div>

          {/* زر الإرسال */}
          <button type="submit" disabled={isSubmitting} className={`w-full mt-6 py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition text-white ${isSubmitting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200'}`}>
            {isSubmitting ? (
              <span className="animate-pulse">جاري إرسال الطلب...</span>
            ) : (
              <>
                إرسال الطلب
                <Send className="w-5 h-5 rotate-180" />
              </>
            )}
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            🔒 بياناتك آمنة ولن يتم مشاركتها مع أي طرف ثالث
          </p>

        </form>
      </div>
    </div>
  );
};

export default OrderForm;