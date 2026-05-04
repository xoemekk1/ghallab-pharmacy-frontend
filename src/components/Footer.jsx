// المسار: src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// 1. استيراد الأيقونات الأساسية فقط (تمت إزالة Facebook و Instagram لتجنب الخطأ)
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  // بيانات الروابط السريعة
  const quickLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'اطلب دواء', path: '/order' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8 px-6 mt-auto font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-right">
          
          {/* عمود موقعنا */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2 inline-block">
              موقعنا
            </h4>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin className="text-red-600 w-6 h-6 mt-1 shrink-0" />
              <div>
                <p className="font-bold text-gray-800">الجيزة فقط</p>
                <p className="text-sm leading-relaxed mt-1">
                  نحن نخدم جميع مناطق الجيزة لضمان أسرع وقت لتوصيل الدواء.
                </p>
              </div>
            </div>
          </div>

          {/* عمود روابط سريعة */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-red-600 hover:pr-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود تواصل معنا */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2 inline-block">
              تواصل معنا
            </h4>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-full text-red-600">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg text-gray-800 tracking-wider" dir="ltr">
                  01120055597
                </span>
              </div>
              
              {/* أيقونات التواصل الاجتماعي */}
              <div className="flex gap-4 pt-2">
                
                {/* 2. استخدام SVG المباشر لأيقونة فيسبوك */}
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all" title="فيسبوك">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                {/* استخدام SVG المباشر لأيقونة إنستجرام */}
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-pink-600 hover:text-white hover:shadow-lg transition-all" title="إنستجرام">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                
                {/* استخدام أيقونة الرسائل (بديل واتساب) من المكتبة لأنها موجودة */}
                <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-green-500 hover:text-white hover:shadow-lg transition-all" title="واتساب">
                  <MessageCircle className="w-5 h-5" />
                </a>
                
              </div>
            </div>
          </div>
        </div>

        {/* الجزء السفلي: حقوق الملكية */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm font-medium">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} صيدلية غلاب. صُنع بكل ❤️ لخدمتكم.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;