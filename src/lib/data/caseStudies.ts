import type { ComponentType } from 'react';
import {
  BuildingOfficeIcon,
  TruckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export interface CaseStudyMetrics {
  roi: string;
  timeSaved: string;
  costReduction: string;
  efficiency: string;
}

export interface DetailedCaseStudy {
  id: number;
  industry: string;
  icon: ComponentType<{ className?: string }>;
  company: string;
  location: string;
  size: string;
  projectDuration: string;
  challenge: string;
  solution: string;
  description: string;
  implementation: string[];
  results: string[];
  testimonial: string;
  clientName: string;
  clientRole: string;
  metrics: CaseStudyMetrics;
  technologies: string[];
  color: 'emerald' | 'blue' | 'purple' | 'indigo' | 'orange' | 'red';
  featured: boolean;
}

export const detailedCases: DetailedCaseStudy[] = [
  {
    id: 1,
    industry: '跨國貿易',
    icon: TruckIcon,
    company: '跨國供應商',
    location: '台北市',
    size: '中型企業 (80-150人)',
    projectDuration: '4個月',
    challenge: '業務人員收到客戶詢問時，需要同時查詢多個系統：ERP庫存、報價系統、物流追蹤。回覆一個報價往往需要30分鐘以上，客戶等待時間長，競爭對手經常搶先報價。',
    solution: 'AI統一查詢與報價系統',
    description: '建立統一介面整合ERP、報價、物流系統，AI自動彙整資訊並生成報價建議，確認後自動進入ERP處理。',
    implementation: [
      '盤點現有系統API端點',
      '設計統一查詢介面',
      '開發AI報價建議引擎',
      '建立自動化ERP入單流程',
      '測試與驗證準確性',
      '業務人員培訓上線'
    ],
    results: [
      '報價回應時間從30分鐘縮短至3分鐘',
      '報價準確率提升至98%',
      '業務人員每日處理詢問量增加200%',
      '客戶滿意度從68%提升至92%',
      '訂單成交率提升35%',
      '月營運效率提升NT$180,000價值'
    ],
    testimonial: '現在客戶一來詢問，系統馬上就能給出完整報價，庫存、價格、交期一目了然，我們終於不再被競爭對手搶單了！',
    clientName: '張經理',
    clientRole: '業務部經理',
    metrics: {
      roi: '520%',
      timeSaved: '14小時/日',
      costReduction: '45%',
      efficiency: '98%'
    },
    technologies: ['API整合', 'Node.js', 'React', 'PostgreSQL', 'Azure'],
    color: 'emerald',
    featured: true
  },
  {
    id: 2,
    industry: '電子零件代理',
    icon: DocumentTextIcon,
    company: '電子零件代理商',
    location: '新北市',
    size: '中型企業 (40-80人)',
    projectDuration: '3個月',
    challenge: '與跨國供應商往來，每月收到數百張不同語言（英文、日文、簡體中文）、不同幣別的發票，會計人員需手動識別、換算匯率、輸入Business Central，錯誤率高且耗時。',
    solution: 'AI發票自動識別入帳系統',
    description: '開發多語言AI發票識別系統，自動解析發票內容、幣別轉換、格式標準化，一鍵匯入Business Central ERP。',
    implementation: [
      '收集多語言發票樣本訓練AI模型',
      '開發多幣別自動換算模組',
      '建立發票欄位標準化映射',
      '整合Business Central API',
      '建立人工審核與修正介面',
      '會計人員培訓與上線'
    ],
    results: [
      '發票處理時間從15分鐘/張縮短至30秒/張',
      '入帳錯誤率從8%降至0.5%',
      '會計人員每月節省80小時',
      '月結作業時間縮短60%',
      '審計追溯效率提升300%',
      '年度人力成本節省NT$360,000'
    ],
    testimonial: '以前最怕收到日文發票，現在系統全部自動處理，連匯率都幫我算好，月結再也不用熬夜了！',
    clientName: '林會計',
    clientRole: '財務主管',
    metrics: {
      roi: '450%',
      timeSaved: '80小時/月',
      costReduction: '60%',
      efficiency: '99.5%'
    },
    technologies: ['多語言OCR', 'NLP', 'Python', 'Business Central API', 'Azure AI'],
    color: 'blue',
    featured: true
  },
  {
    id: 3,
    industry: '會計服務業',
    icon: DocumentTextIcon,
    company: '會計事務所',
    location: '高雄市',
    size: '小型企業 (10-30人)',
    projectDuration: '2個月',
    challenge: '報稅季期間員工需要加班到半夜，大量重複性文件處理工作，人工下載分類政府網站文件耗時又容易出錯。',
    solution: 'RPA流程自動化系統',
    description: '設計智能機器人流程，自動登入財政部網站，批量下載文件並進行智能分類歸檔，24小時不間斷運作。',
    implementation: [
      '分析現有作業流程',
      '開發RPA自動化腳本',
      '建立文件分類AI模型',
      '設置排程與監控系統',
      '建立異常處理機制',
      '員工操作培訓'
    ],
    results: [
      '原本14小時工作現在半夜自動完成',
      '文件分類準確率100%',
      '處理速度提升500%',
      '員工可專注高價值諮詢工作',
      '客戶案件處理量增加60%',
      '加班費用節省NT$200,000/年'
    ],
    testimonial: '系統在半夜默默完成所有繁瑣工作，隔天上班就能看到整理好的文件，員工終於不用熬夜了。',
    clientName: '林會計師',
    clientRole: '所長',
    metrics: {
      roi: '650%',
      timeSaved: '14小時/日',
      costReduction: '60%',
      efficiency: '100%'
    },
    technologies: ['UiPath RPA', 'Python Selenium', 'NLP分類', 'MySQL', 'Windows Server'],
    color: 'purple',
    featured: true
  },
  {
    id: 4,
    industry: '客服中心',
    icon: BuildingOfficeIcon,
    company: '優質服務中心',
    location: '台北市',
    size: '中型企業 (80-120人)',
    projectDuration: '5個月',
    challenge: '客戶詢問量大，客服人員不足，回覆速度慢，客戶滿意度低，人力成本持續上升。',
    solution: 'AI智能客服機器人',
    description: '打造LINE官方帳號AI聊天機器人，整合知識庫管理系統，提供多輪對話與人工轉接功能。',
    implementation: [
      '收集歷史客服對話記錄',
      '建立知識庫與FAQ系統',
      '訓練對話AI模型',
      '開發LINE Bot介面',
      '建立人工轉接機制',
      '持續學習優化系統'
    ],
    results: [
      '85%詢問自動回覆',
      '平均回應時間從30分鐘縮短至3秒',
      '24/7不間斷服務',
      '客戶滿意度從65%提升至91%',
      '客服人力需求減少40%',
      '年度人力成本節省NT$800,000'
    ],
    testimonial: '超過85%的詢問都可以自動回覆，客服人員現在能專注處理更複雜的問題，客戶滿意度大幅提升。',
    clientName: '張主管',
    clientRole: '客服部主管',
    metrics: {
      roi: '420%',
      timeSaved: '24/7',
      costReduction: '40%',
      efficiency: '85%'
    },
    technologies: ['自然語言處理', 'LINE Bot SDK', 'Node.js', 'MongoDB', 'Docker'],
    color: 'indigo',
    featured: false
  },
  {
    id: 5,
    industry: '製造業',
    icon: TruckIcon,
    company: '精密機械有限公司',
    location: '桃園市',
    size: '中型企業 (100-200人)',
    projectDuration: '6個月',
    challenge: '生產線品質檢測依賴人工目視，效率低且容易疲勞出錯，產品良率不穩定，客戶退貨率偏高。',
    solution: 'AI視覺檢測系統',
    description: '導入機器視覺AI檢測系統，自動識別產品瑕疵，即時品質監控與預警，提升產品良率。',
    implementation: [
      '收集產品圖像資料集',
      '訓練瑕疵檢測CNN模型',
      '安裝工業相機設備',
      '開發即時檢測軟體',
      '建立品質管理儀表板',
      '產線人員操作培訓'
    ],
    results: [
      '檢測準確率達99.5%',
      '檢測速度提升10倍',
      '產品良率從92%提升至98.5%',
      '客戶退貨率降低75%',
      '品質檢測人力減少50%',
      '年度品質成本節省NT$500,000'
    ],
    testimonial: 'AI檢測系統比人眼更精準，24小時不會疲勞，產品品質穩定多了，客戶對我們更有信心。',
    clientName: '李廠長',
    clientRole: '生產部廠長',
    metrics: {
      roi: '380%',
      timeSaved: '24/7',
      costReduction: '30%',
      efficiency: '99.5%'
    },
    technologies: ['Computer Vision', 'TensorFlow', 'OpenCV', 'C++', '工業相機'],
    color: 'orange',
    featured: false
  },
  {
    id: 6,
    industry: '物流運輸',
    icon: TruckIcon,
    company: '快速物流',
    location: '新北市',
    size: '大型企業 (200+人)',
    projectDuration: '4個月',
    challenge: '配送路線規劃全靠經驗，油耗成本高，客戶等待時間長，司機工作負荷不均，客訴增加。',
    solution: 'AI智能調度系統',
    description: '開發智能路線規劃系統，整合GPS定位、交通資訊，自動最佳化配送路線與車輛調度。',
    implementation: [
      '收集歷史配送數據',
      '整合Google Maps API',
      '開發路線優化演算法',
      '建立即時調度系統',
      '開發司機手機APP',
      '建立KPI監控儀表板'
    ],
    results: [
      '配送效率提升25%',
      '油耗成本降低20%',
      '客戶等待時間減少30%',
      '司機滿意度提升40%',
      '客訴案件減少60%',
      '年度營運成本節省NT$1,200,000'
    ],
    testimonial: '現在系統會自動安排最佳路線，司機不用再煩惱怎麼走，客戶也能準時收到貨物，大家都很滿意。',
    clientName: '劉經理',
    clientRole: '營運經理',
    metrics: {
      roi: '285%',
      timeSaved: '6小時/日',
      costReduction: '20%',
      efficiency: '25%'
    },
    technologies: ['優化演算法', 'React Native', 'Google Maps API', 'PostgreSQL', 'Redis'],
    color: 'red',
    featured: false
  }
];

export interface IndustryStat {
  industry: string;
  cases: number;
  avgROI: string;
  avgTimeSaved: string;
}

export const industryStats: IndustryStat[] = [
  { industry: '零售業', cases: 25, avgROI: '380%', avgTimeSaved: '12小時/日' },
  { industry: '製造業', cases: 18, avgROI: '320%', avgTimeSaved: '8小時/日' },
  { industry: '服務業', cases: 32, avgROI: '450%', avgTimeSaved: '16小時/日' },
  { industry: '物流業', cases: 15, avgROI: '290%', avgTimeSaved: '6小時/日' },
  { industry: '金融業', cases: 12, avgROI: '520%', avgTimeSaved: '20小時/日' },
  { industry: '醫療業', cases: 8, avgROI: '400%', avgTimeSaved: '10小時/日' }
];
