// EmailJS 配置
export const EMAILJS_CONFIG = {
  // 這些值需要從 EmailJS 後台獲取
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_airai',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_contact',  
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // 收件者
  TO_EMAIL: 'contact@airai.tw'
};

// Email 模板參數類型
export interface EmailTemplateParams {
  from_name: string;
  from_company: string;
  from_email: string;
  from_phone: string;
  consultation_type: string;
  budget_range: string;
  timeline: string;
  message: string;
  to_email: string;
  reply_to: string;
  current_date: string;
} 