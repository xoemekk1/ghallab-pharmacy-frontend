// المسار: src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استيراد الصفحات
import Home from './pages/Home';
import About from './pages/About';
import HowItWorksPage from './pages/HowItWorksPage';
import OrderForm from './pages/OrderForm';
import Contact from './pages/Contact';
import Branches from './pages/Branches';
import Careers from './pages/Careers';
import Reviews from './pages/Reviews';
import Terms from './pages/Terms';

// استيراد صفحات الإدارة (Admin)
import AdminDashboard from './pages/AdminDashboard';
import OrderDetails from './pages/OrderDetails';

// استيراد المكونات المشتركة
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// مكون تجريبي لاختبار حالات النظام (يمكنك حذفه لاحقاً)
import SystemStatus from './components/SystemStatus';

function SearchPage() {
  return (
    <div className="container mx-auto py-20">
      <SystemStatus status="loading" />
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* 
        app-container: يضمن توزيع العناصر طولياً
        min-h-screen: يضمن بقاء الفوتر في الأسفل 
      */}
      <div className="app-container min-h-screen bg-gray-50 font-sans flex flex-col" dir="rtl">
        
        {/* شريط التنقل العلوي ثابت في كل الصفحات */}
        <Navbar />

        {/* المنطقة الرئيسية التي تتغير بداخلها الصفحات */}
        <main className="flex-grow">
          <Routes>
            {/* مسارات الموقع العامة */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* مسار تجريبي لصفحة البحث وحالات النظام */}
            <Route path="/search-test" element={<SearchPage />} />

            {/* مسارات لوحة تحكم الإدارة (Admin) */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/orders/:id" element={<OrderDetails />} />

            {/* مسار احتياطي في حال كتابة رابط خطأ */}
            <Route path="*" element={
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">404 - الصفحة غير موجودة</h2>
              </div>
            } />
          </Routes>
        </main>

        {/* التذييل يظهر في أسفل كل الصفحات */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;