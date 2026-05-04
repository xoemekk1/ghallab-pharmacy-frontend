import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingCart, Users, Package, Store, 
  Truck, BarChart2, Bell, MessageSquare, Settings, 
  Search, Calendar, Maximize, Headphones, LogOut, 
  ChevronDown, MoreVertical, Eye, Download, ChevronRight, ChevronLeft, ShieldCheck
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('لوحة التحكم');

  // بيانات افتراضية للجدول (مطابقة للصورة)
  const orders = [
    { id: '#GH-45879', customer: 'محمد أحمد', phone: '01012345678', pharmacy: 'صيدلية السلام - الهرم', total: '175.00', payment: 'دفع عند الاستلام', status: 'تم تأكيد الطلب', date: '25 مايو 2024 11:30 ص', statusColor: 'bg-orange-50 text-orange-600' },
    { id: '#GH-45878', customer: 'سارة مصطفى', phone: '01123456789', pharmacy: 'صيدلية النور - فيصل', total: '230.00', payment: 'دفع عند الاستلام', status: 'جاري تجهيز الطلب', statusColor: 'bg-blue-50 text-blue-600' },
    { id: '#GH-45877', customer: 'أحمد خالد', phone: '01098765432', pharmacy: 'صيدلية العز - الدقي', total: '89.50', payment: 'دفع عند الاستلام', status: 'جاري التوصيل', statusColor: 'bg-purple-50 text-purple-600' },
    { id: '#GH-45876', customer: 'منى علي', phone: '01234567890', pharmacy: 'صيدلية السلام - الهرم', total: '120.00', payment: 'دفع عند الاستلام', status: 'تم استلام الطلب', statusColor: 'bg-green-50 text-green-600' },
    { id: '#GH-45875', customer: 'علي رمضان', phone: '01112223344', pharmacy: 'صيدلية النور - فيصل', total: '310.00', payment: 'تحويل بنكي', status: 'تم التسليم', statusColor: 'bg-emerald-50 text-emerald-600' },
    { id: '#GH-45874', customer: 'نبيل حسن', phone: '01024681357', pharmacy: 'صيدلية العز - الدقي', total: '65.00', payment: 'دفع عند الاستلام', status: 'ملغي', statusColor: 'bg-red-50 text-red-600' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans" dir="rtl">
      
      {/* 1. الشريط الجانبي (Sidebar) */}
      <aside className="w-64 bg-[#0a0f1d] text-gray-400 flex flex-col fixed h-full right-0 z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">GHALLAB</span>
          </div>
          <span className="text-white font-bold text-lg">صيدلية غلاب</span>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {[
            { name: 'لوحة التحكم', icon: <LayoutDashboard size={20}/> },
            { name: 'الطلبات', icon: <ShoppingCart size={20}/> },
            { name: 'العملاء', icon: <Users size={20}/> },
            { name: 'المنتجات', icon: <Package size={20}/> },
            { name: 'الصيدليات', icon: <Store size={20}/> },
            { name: 'التوصيل', icon: <Truck size={20}/> },
            { name: 'التقارير', icon: <BarChart2 size={20}/> },
            { name: 'التنبيهات', icon: <Bell size={20}/>, badge: 8 },
            { name: 'الرسائل', icon: <MessageSquare size={20}/> },
            { name: 'الإعدادات', icon: <Settings size={20}/> },
            { name: 'المستخدمون', icon: <Users size={20}/> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                activeTab === item.name ? 'bg-red-600 text-white shadow-lg shadow-red-900/20' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              {item.badge && <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-4">
          <button className="w-full flex items-center gap-3 px-4 py-2 hover:text-white transition">
            <Headphones size={20}/>
            <span className="text-sm">دعم فني</span>
          </button>
          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl">
            <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border-2 border-red-500">
               <img src="https://i.pravatar.cc/150?img=11" alt="admin" />
            </div>
            <div className="flex-1">
              <p className="text-white text-xs font-bold">أدمن رئيسي</p>
              <p className="text-[10px]">مدير النظام</p>
            </div>
            <ChevronDown size={16}/>
          </div>
        </div>
      </aside>

      {/* المحتوى الرئيسي (Main Content) */}
      <main className="flex-1 mr-64">
        
        {/* 2. شريط الأدوات العلوي (Header) */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
             <div className="bg-gray-50 p-2 rounded-lg lg:hidden">
               <LayoutDashboard size={20} className="text-gray-600"/>
             </div>
             <div className="relative max-w-md w-full">
               <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
               <input 
                type="text" 
                placeholder="بحث عن طلب، عميل، هاتف..." 
                className="w-full bg-gray-50 border-none rounded-xl pr-10 pl-4 py-2.5 text-sm focus:ring-2 focus:ring-red-500/20"
               />
             </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 text-sm font-medium">
              <Calendar size={18} className="text-gray-400"/>
              <span>25 مايو 2024</span>
            </div>
            <div className="relative p-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer">
              <Bell size={20}/>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="p-2 bg-gray-50 rounded-xl text-gray-600 hover:bg-gray-100 cursor-pointer">
              <Maximize size={20}/>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          
          {/* 3. شريط الإحصائيات (Stats Cards) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { label: 'إجمالي الإيرادات', value: '45,680 جنيه', change: '+16.3%', icon: <BarChart2 className="text-purple-600"/>, bg: 'bg-purple-50' },
              { label: 'تم التسليم', value: '1,012', change: '+20.1%', icon: <Package className="text-orange-600"/>, bg: 'bg-orange-50' },
              { label: 'جاري التوصيل', value: '236', change: '+8.2%', icon: <Truck className="text-blue-600"/>, bg: 'bg-blue-50' },
              { label: 'تم تأكيدها', value: '842', change: '+15.7%', icon: <ShieldCheck className="text-green-600"/>, bg: 'bg-green-50' },
              { label: 'إجمالي الطلبات', value: '1,248', change: '+18.4%', icon: <ShoppingCart className="text-red-600"/>, bg: 'bg-red-50' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div className={`${stat.bg} p-3 rounded-2xl`}>{stat.icon}</div>
                  <span className="text-green-500 text-xs font-bold">{stat.change} عن أمس</span>
                </div>
                <p className="text-gray-400 text-xs font-medium mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            ))}
          </section>

          {/* 4. شريط الفلترة والتصدير */}
          <section className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-sm font-bold">
                <BarChart2 size={18}/> تصفية
              </button>
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl">
                 <span className="text-xs text-gray-400">الفترة:</span>
                 <span className="text-sm font-bold">من - إلى</span>
                 <Calendar size={16} className="text-gray-400"/>
              </div>
              {['الحالة', 'الصيدلية', 'المندوب', 'طريقة الدفع', 'حالة الدفع'].map(filter => (
                <div key={filter} className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl text-sm">
                   <span className="text-xs text-gray-400">{filter}:</span>
                   <span className="font-bold">الكل</span>
                   <ChevronDown size={14}/>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 border border-gray-200 px-6 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition">
              <Download size={18}/> تصدير
            </button>
          </section>

          {/* 5. جدول الطلبات (Orders Table) */}
          <section className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">جميع الطلبات (1,248)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-gray-50/50 text-gray-400 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">رقم الطلب</th>
                    <th className="px-6 py-4">العميل</th>
                    <th className="px-6 py-4">الصيدلية</th>
                    <th className="px-6 py-4">المجموع</th>
                    <th className="px-6 py-4">طريقة الدفع</th>
                    <th className="px-6 py-4">الحالة</th>
                    <th className="px-6 py-4">تاريخ الطلب</th>
                    <th className="px-6 py-4">إجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {orders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                           <span className="font-bold text-gray-900">{order.id}</span>
                           <Download size={14} className="text-gray-300 cursor-pointer"/>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-800 text-sm">{order.customer}</p>
                        <div className="flex items-center gap-1 text-[10px] text-gray-400">
                          <MessageSquare size={10} className="text-green-500"/>
                          {order.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium text-gray-500">{order.pharmacy}</td>
                      <td className="px-6 py-4 font-bold text-gray-900">{order.total} <span className="text-[10px]">جنيه</span></td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <Package size={14} className="text-gray-400"/> {order.payment}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${order.statusColor}`}>
                          ● {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-400 font-medium">{order.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-400 transition">
                            <Eye size={18}/>
                          </div>
                          <div className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-400 transition">
                            <MoreVertical size={18}/>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-gray-50 flex items-center justify-between">
               <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                  عرض <select className="bg-gray-50 border-none rounded-lg text-[10px] px-2 py-1"><option>10</option></select> من 1,248
               </div>
               <div className="flex items-center gap-2">
                 <button className="p-2 border border-gray-100 rounded-xl hover:bg-gray-50 transition"><ChevronRight size={16}/></button>
                 {[1, 2, 3, '...', 25].map((page, i) => (
                   <button key={i} className={`w-8 h-8 rounded-xl text-xs font-bold transition ${page === 1 ? 'bg-red-600 text-white shadow-md' : 'hover:bg-gray-50 text-gray-400'}`}>
                     {page}
                   </button>
                 ))}
                 <button className="p-2 border border-gray-100 rounded-xl hover:bg-gray-50 transition"><ChevronLeft size={16}/></button>
               </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;