// src/pages/OrderDetails.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, Users, Package, Store, 
  Truck, BarChart2, Bell, Settings, Search, ArrowRight, 
  Printer, Edit, CheckCircle, Clock, MapPin, Maximize, 
  FileText, ExternalLink, ChevronDown, RefreshCw, MessageSquare, ShieldCheck
} from 'lucide-react';

const OrderDetails = () => {
  const { id } = useParams(); // استقبال رقم الطلب من الرابط
  const [activeTab, setActiveTab] = useState('الطلبات');

  const orderItems = [
    { name: 'بانادول اكسترا', desc: '20 قرص', price: '45.00', qty: 1, total: '45.00' },
    { name: 'فيتامين سي 1000 مجم', desc: '20 قرص فوار', price: '85.00', qty: 1, total: '85.00' },
    { name: 'أوميبرازول 20 مجم', desc: '14 كبسولة', price: '45.00', qty: 1, total: '45.00' },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f9fa] font-sans" dir="rtl">
      
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-[#0a0f1d] text-gray-400 flex flex-col fixed h-full right-0 z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-xs">GHALLAB</span>
          </div>
          <span className="text-white font-bold text-lg">صيدلية غلاب</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {[
            { name: 'لوحة التحكم', icon: <LayoutDashboard size={20}/> },
            { name: 'الطلبات', icon: <ShoppingCart size={20}/>, path: '/admin/dashboard' },
            { name: 'العملاء', icon: <Users size={20}/> },
            { name: 'المنتجات', icon: <Package size={20}/> },
            { name: 'الصيدليات', icon: <Store size={20}/> },
            { name: 'التوصيل', icon: <Truck size={20}/> },
            { name: 'التقارير', icon: <BarChart2 size={20}/> },
            { name: 'التنبيهات', icon: <Bell size={20}/>, badge: 8 },
            { name: 'الإعدادات', icon: <Settings size={20}/> },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path || '#'}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name ? 'bg-red-600 text-white shadow-lg' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 mr-64">
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <Link to="/admin/dashboard" className="p-2 hover:bg-gray-50 rounded-lg transition text-gray-400">
              <ArrowRight size={20} />
            </Link>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">الطلبات</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900 font-bold">تفاصيل الطلب {id}#</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-left ml-4">
                <p className="text-xs font-bold text-gray-900">أدمن رئيسي</p>
                <p className="text-[10px] text-gray-400">مدير النظام</p>
             </div>
             <img src="https://i.pravatar.cc/150?img=11" className="w-10 h-10 rounded-full border-2 border-red-500" alt="Admin" />
          </div>
        </header>

        <div className="p-8 space-y-6">
          {/* Stepper */}
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4 text-green-600">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-green-600 bg-green-50"><ShieldCheck /></div>
              <div><p className="font-bold text-sm">تم تأكيد الطلب</p><p className="text-[10px] text-gray-400">25 مايو 2024</p></div>
            </div>
            <div className="h-px flex-1 mx-4 bg-green-600"></div>
            <div className="flex items-center gap-4 text-blue-600">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-600 bg-blue-50"><Package /></div>
              <div><p className="font-bold text-sm">جاري التجهيز</p><p className="text-[10px] text-gray-400">قيد العمل</p></div>
            </div>
            <div className="h-px flex-1 mx-4 bg-gray-100"></div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-100 bg-gray-50"><Truck /></div>
              <div><p className="font-bold text-sm">التوصيل</p></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              {/* معلومات العميل والطلب */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><Users size={18} className="text-gray-400"/> معلومات العميل</h3>
                  <p className="text-sm font-bold">محمد أحمد</p>
                  <p className="text-xs text-gray-400 mt-1">01012345678</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2"><FileText size={18} className="text-gray-400"/> معلومات الطلب</h3>
                  <p className="text-sm font-bold">رقم الطلب: #{id}</p>
                  <p className="text-xs text-red-600 font-bold mt-1">دفع عند الاستلام</p>
                </div>
              </div>

              {/* جدول المنتجات */}
              <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-right text-xs">
                  <thead className="bg-gray-50/50 text-gray-400 font-bold">
                    <tr>
                      <th className="px-6 py-4">المنتج</th>
                      <th className="px-6 py-4">الكمية</th>
                      <th className="px-6 py-4">الإجمالي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orderItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-bold">{item.name}</td>
                        <td className="px-6 py-4">{item.qty}</td>
                        <td className="px-6 py-4 font-black">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* الجانب الأيسر (الإجراءات) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 text-sm mb-4">تحديث الحالة</h3>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-4 text-xs font-bold text-blue-600 focus:outline-none mb-4">
                  <option>جاري تجهيز الطلب</option>
                  <option>تم التسليم</option>
                </select>
                <button className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200">تحديث</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderDetails;