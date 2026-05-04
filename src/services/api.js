// المسار: src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // رابط الخادم المستقبلي

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitOrderData = async (orderData) => {
  try {
    // محاكاة مؤقتة للنجاح لحين برمجة الـ Back-end
    return new Promise((resolve) => setTimeout(() => resolve({ data: { success: true } }), 2000));
    
    // الكود الحقيقي لاحقاً:
    // const response = await api.post('/orders', orderData);
    // return response;
  } catch (error) {
    console.error("خطأ في إرسال الطلب:", error);
    throw error;
  }
};
export const submitContactMessage = async (messageData) => {
  try {
    // محاكاة للباك إند
    return new Promise((resolve) => setTimeout(() => resolve({ data: { success: true } }), 2000));
    
    // الكود الحقيقي للباك إند مستقبلاً:
    // const response = await api.post('/contact', messageData);
    // return response;
  } catch (error) {
    console.error("خطأ في إرسال الرسالة:", error);
    throw error;
  }
};
export default api;