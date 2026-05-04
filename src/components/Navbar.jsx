import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // مصفوفة الروابط لتسهيل الإدارة والتكرار
  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'كيف يعمل الطلب', path: '/how-it-works' },
    { name: 'فروعنا', path: '/branches' },
    { name: 'آراء العملاء', path: '/reviews' },
    { name: 'من نحن', path: '/about' },
    { name: 'الوظائف', path: '/careers' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. الجانب الأيمن: زر الموقع (الجيزة فقط) */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-100">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-bold whitespace-nowrap">الجيزة فقط</span>
            </div>
          </div>

          {/* 2. المنتصف: الروابط والشعار */}
          <div className="hidden lg:flex items-center gap-6">
             {/* تقسيم الروابط حول الشعار أو بجانبه لمنع التداخل */}
             <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-red-600 ${
                      location.pathname === link.path ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
             </div>
          </div>

          {/* 3. الشعار (Logo) */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-center">
              <span className="text-2xl font-bold text-gray-900 leading-none">صيدلية</span>
              <span className="text-xl font-extrabold text-red-600 tracking-tighter">غـــلاب</span>
            </Link>
          </div>

          {/* 4. أزرار الموبايل والطلب السريع */}
          <div className="flex items-center gap-2">
            <Link to="/order" className="bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">اطلب الآن</span>
            </Link>
            
            {/* زر القائمة للموبايل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-red-600 px-3 py-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold">الجيزة فقط</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;