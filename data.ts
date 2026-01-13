import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'micro-ai-scada',
    title: 'Micro AI SCADA 系統優化',
    category: 'SCADA UI/UX',
    tags: ['使用者流程', '線框圖', '介面視覺設計', '元件庫', '設計系統', '設計體驗'],
    thumbnail: '../images/web/cover-microai.jpg',
    description: '專為工業自動化打造的 AI 智能監控系統。透過深色模式與高對比度的儀表板設計，將 3000+ 設備的即時狀態、警報與歷史數據轉化為直覺的可視化資訊，大幅提升監控效率。',
    client: 'Microt AI',
    year: '2025',
    role: 'Lead UI/UX Designer',
    isFeatured: true,
    overview: 'Micro AI SCADA：從數據叢林到智能監控的體驗升級\n\n主導 Microt AI 的 SCADA 系統介面優化專案，針對工業場景的高強度監控需求，打造了一套深色系、低視覺疲勞的現代化儀表板。核心目標是將海量設備數據結構化，讓操作員能「一秒識別異常」，確保產線穩定運行。\n\n關鍵數據 (Quick Facts):\n您的角色： 核心 UI/UX 設計師\n平台： 桌面端 SCADA 系統\n核心成果： 優化 3000+ 設備監控效率、建立 SCADA 專用設計系統、提升警報響應速度\n關鍵技能： 複雜數據視覺化、工業介面設計、Design System、使用者流程優化\n\n專案背景 (The Context):\nMicrot AI 是一家先進的工業自動化解決方案提供商，其監控系統需要同時管理數千台設備。舊版介面充斥著雜亂的數據表格，缺乏視覺重心，導致操作員在處理緊急警報時容易錯失關鍵資訊。\n\n問題陳述 (The Problem):\n• 資訊過載： 單一畫面上顯示過多非必要數據，缺乏層級。\n• 警報識別困難： 異常狀態與正常狀態的視覺差異不足，延長了故障排除時間。\n• 視覺疲勞： 長時間注視高亮度的傳統工業介面，容易造成操作員視覺疲勞。\n\n設計目標 (The Goals):\n• 【視覺降噪】 採用深色模式 (Dark Mode) 與高對比跳色，降低背景干擾，突顯關鍵數據。\n• 【異常優先】 重新設計警報中心，確保「Alarm」與「Stop」狀態在視覺上具有最高優先級。\n• 【模組化擴充】 建立可複用的元件庫，適應未來更多設備類型的接入需求。',
    process: {
      problem: '操作員難以在數千台設備中快速定位異常。',
      research: '分析監控室環境與操作員動線，確定深色介面為最佳解。',
      wireframing: '規劃儀表板佈局，將總覽、狀態統計與詳細列表分區呈現。',
      final: '完成高保真介面設計，並交付完整的元件庫與狀態定義規範。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 資訊架構與流程優化 (IA & Workflow)',
            description: '挑戰點： 系統需同時監控 3000+ 台設備，包含 Running, Disconnected, Offline, Stop, Alarm 等多種狀態。\n決策依據： 採用「總覽 (Overview) -> 篩選 (Filter) -> 詳情 (Detail)」的資訊流。首頁儀表板僅顯示各狀態的總數統計，點擊對應狀態卡片後才展開詳細列表，大幅降低認知負擔。'
          },
          {
            subtitle: 'B. 介面視覺設計 (Visual Design & Dark Mode)',
            description: '視覺策略： 考慮到監控室通常光線較暗，且操作員需長時間注視螢幕，因此選用深藍灰色 (#0F172A) 作為基底，搭配高飽和度的狀態色（紅色為 Alarm，黃色為 Warning，藍色為 Running）。\n數據呈現： 使用環形圖與進度條 (Progress Bar) 來呈現設備狀態分佈，讓數據一目瞭然。'
          },
          {
            subtitle: 'C. 元件庫與設計系統 (Component Library)',
            description: '重點工作： 建立了一套 SCADA 專用的 Design System，定義了各種狀態的 Badge、按鈕、表格與圖表樣式。\n價值展現： 這套系統確保了未來新增功能模組時，開發團隊能快速拼裝出風格一致的介面，縮短開發週期。'
          }
        ]
      }
    ],
    outcomes: [
      '監控效率顯著提升： 透過視覺分區與異常突顯，操作員識別警報的時間縮短了 40%。',
      '降低視覺疲勞： 深色模式獲得一線操作員的高度好評，有效改善了長時間工作的舒適度。',
      '系統化設計資產： 交付了完整的 UI Kit，成為 Microt AI 後續產品線的設計標準。'
    ],
    gallery: [
      '/img/Dashboard1-1.png',
      'https://picsum.photos/id/1/1200/800'
    ]
  },
  {
    id: 'legend-fantasy-sport-app',
    title: 'Legend Fantasy Sport',
    category: 'App UI/UX',
    tags: ['資訊架構', '使用者流程', '線框圖', '介面視覺設計', '互動原型', '元件庫', '設計系統', '設計體驗', '敏捷開發'],
    thumbnail: '../images/app/app01-cover.jpg',
    description: '打造沈浸式的夢幻體育體驗，透過直覺的選秀介面與即時數據分析，讓玩家輕鬆組建夢幻隊伍。優化了複雜的競賽規則呈現，確保新手與資深玩家都能享受流暢的遊戲過程。',
    client: 'Legend Fantasy',
    year: '2023',
    role: 'Lead UI/UX Designer',
    overview: 'Legend Fantasy：數據驅動的體育產品建構，實現用戶留存率 +40%\n\n作為核心設計師，我主導了這款跨裝置夢幻體育產品從概念到上線的 End-to-End 設計。透過深度用戶旅程分析與原型迭代，成功將複雜的體育數據轉化為直覺體驗，最終賦能業務，將用戶留存率提升超過 40%，並將轉換率提升 30%+**。\n\n關鍵數據 (Quick Facts)：\n• 您的角色： 核心 UI/UX 設計師 (從 0 到 1)\n• 平台： iOS App, Android App, RWD 網站\n• 核心成果： 用戶留存率 +40%, 轉換率 +30%+\n• 關鍵技能： 數據分析驅動設計、用戶旅程優化、Design System 應用、跨裝置設計\n\n專案背景 (The Context)：\nLegend Fantasy 是一家鎖定印度等高成長體育市場的新創公司。 產品目標是提供用戶一個整合即時賽事數據和組隊遊戲的夢幻體育平台。作為從 0 到 1 的產品，我們需要在極短時間內建立一個具備競爭力、且能快速被當地市場接受的產品。\n\n問題陳述 (The Problem)：\n我們的分析顯示，市場上的主要競品存在兩大問題，成為我們設計的突破口：\n• 高學習門檻導致流失： 夢幻體育遊戲規則複雜，新用戶難以在 5 分鐘內理解「如何組隊」和「如何得分」，導致新用戶在首次組隊過程中大量流失。 （直接影響轉換率和初期留存）\n• 數據混亂且體驗不佳： 複雜的體育數據在手機小螢幕上排版混亂，用戶難以即時追蹤自己的隊伍表現，影響回訪意願。 （直接影響長期留存）\n\n設計目標 (The Goals)：\n我們的設計目標必須直接解決上述痛點，為業務帶來實質貢獻：\n• 【效率優先】 透過優化用戶流程，將新用戶首次組隊流程時間縮短至少 20%，以提升初期轉換率。\n• 【體驗致勝】 透過清晰、直覺的數據視覺化和介面優化，提高用戶的賽事追蹤體驗，目標是將 30 日用戶留存率提升至 40% 以上。\n• 【系統化建構】 建立一套設計規範（Design System），確保 APP 與 RWD 網站的視覺與互動體驗一致，加速後續功能迭代。',
    isFeatured: true,
    process: {
      problem: '如何在手機螢幕上呈現大量球員數據而不顯得擁擠？',
      research: '分析了競品並訪談了 15 位資深夢幻體育玩家，發現「篩選」是最大痛點。',
      wireframing: '設計了多層次的篩選與排序機制，並使用卡片式設計來區分資訊層級。',
      final: '打造出一套深色系、充滿運動張力的視覺系統，並建立了完整的 Design System 供開發團隊使用。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 確立與研究 (Research & Analysis)',
            description: '問題定義 (Defining the Challenge)：\n挑戰點： 夢幻體育 APP 是一個相對複雜的產品，使用者需要快速理解遊戲規則、組建隊伍，並即時追蹤賽事數據。初期的挑戰是如何將複雜的體育數據和遊戲機制，轉化為直覺、低學習成本的介面。\n決策依據： 根據需求開發資訊架構、單元功能規劃、使用者操作流程與 Wireframe 。\n\n使用者研究 (User Insights)：\n執行步驟： 在產品上線前，於目標市場（印度）進行線上易用性測試、體驗研究與分析 。\n關鍵洞察： 根據測試結果，發現新用戶在「組隊流程」和「數據視覺化」上存在明顯痛點，成為設計優化的核心目標。'
          },
          {
            subtitle: 'B. 資訊架構與流程 (IA & Flow Design)',
            description: '資訊架構優化 (Information Architecture)：\n重點工作： 開發資訊架構、單元功能規劃 。\n展示成果： 簡要展示新舊資訊架構圖（或關鍵差異），說明如何將核心的組隊、賽事和數據追蹤功能置於最容易存取的位置。\n\n使用者旅程與線框圖 (User Journey & Wireframe)：\n重點工作： 根據需求，規劃使用者操作流程與 Wireframe 。\n展示成果： 呈現關鍵流程（例如：新用戶首次組隊）的 Wireframe，並說明您如何透過優化操作流程來減少用戶的認知負擔，這是提升留存率的基礎。'
          },
          {
            subtitle: 'C. 介面與原型設計 (UI & Prototyping)',
            description: '高擬真介面與互動 (High-Fidelity Mockup & Interaction)：\n重點工作： 設計高擬真使用者介面（Mockup）、原型設計（Prototype）、Design System 。\n展示成果： 呈現您在 Figma 中設計的視覺風格（品牌 Logo、標準色 ），特別是數據圖表、組隊介面的截圖。\n決策依據： 介面色彩、排版和圖示的選擇，皆是為了在高資訊密度下，確保資訊傳遞的清晰度和直覺性，以達到將「複雜需求轉化為直覺體驗」的目標 。\n\n設計系統的建立 (Design System)：\n重點工作： 建立 Design System，定義互動細節並提供清晰設計規範 。\n價值展現： 簡述 Design System 如何幫助開發團隊「排除協作開發時問題」 ，並確保跨裝置（APP 和 RWD 網站）的設計一致性。'
          },
          {
            subtitle: 'D. 協作與落地 (Collaboration & Delivery)',
            description: '跨團隊協作 (Cross-Functional Teamwork)：\n重點工作： 與前端工程師密切溝通，確保設計落地時的技術可行性與細節還原度 。\n展示成果： 說明您如何提供開發團隊清晰的設計規範（Design System / Zeplin 交付），並協助他們處理設計落地時的問題 。'
          }
        ]
      }
    ],
    outcomes: [
      '將數據放在首位： 透過用戶旅程分析與原型迭代，成功將產品留存率提升達 40% 。',
      '品牌建設： 成功建制 Legend Fantasy 官方網站（Wix 設計建制與維護） ，並提出品牌 Logo、標準色提案與設計 。'
    ],
    gallery: [
      '../images/app/app01-ia.png',
      '../images/app/app01-wf1.png',
      '../images/app/app01-wd2.png',
      '../images/app/app01-1.png',
      '../images/app/app01-2.png',
      '../images/app/app01-3.png',
      '../images/app/app01-4.png',
      '../images/app/app01-ds1.png',
      '../images/app/app01-ds2.png',
      '../images/app/app01-ds3.png',
      '../images/app/app01-ds4.png',
      '../images/app/app01-ds5.png'
    ]
  },
  {
    id: 'legend-fantasy-sport-web',
    title: 'Legend Fantasy Sport',
    category: '網站設計',
    tags: ['介面視覺設計', '形象設計', 'Wordpress'],
    thumbnail: '../images/web/02web-0cover.jpg',
    description: '建立高張力的品牌形象網站，運用動態視覺與強烈的運動風格，快速傳遞平台價值並提升用戶下載轉換率. 作為產品的主要推廣入口，網站設計強調視覺衝擊力與資訊的易讀性。',
    client: 'Legend Fantasy',
    year: '2023',
    role: 'Web Designer',
    overview: '從 0 到 1 的 brand 形象建構與 RWD 高效導流設計\n\n主導 Legend Fantasy 官方網站（RWD）的品牌識別設計與建置。目標是建立專業、具體育熱情的核心形象，並透過優化資訊架構與 CTA 佈局，實現跨裝置的無縫導流體驗。\n\n關鍵數據 (Quick Facts)：\n您的角色： 品牌與網站設計主導者\n平台： RWD 網站 (桌面/行動端)\n核心成果： 確立品牌視覺識別（Logo/標準色）、實現多裝置優質體驗、高效導流 APP\n關鍵技能： 品牌形象建構、RWD 設計、資訊架構、Wix/Wordpress 建置與維護\n\n專案背景 (The Context)：\n在 Legend Fantasy APP 上線的同時，我們急需一個具備專業度、且能有效承接行銷流量的官方門戶網站。 官網不僅是用戶首次接觸品牌的地方，也是下載 APP 的主要導流來源，其設計質量直接影響品牌信任度與導流轉換率。\n\n問題陳述 (The Problem)：\n• 缺乏一致的品牌識別： 必須快速確立一個與體育產業調性吻合、且能應用於 APP 和官網的統一視覺語言。\n• 行動端導流效率問題： 大部分潛在用戶透過手機瀏覽，若官網缺乏優良的 RWD 設計，將會大大降低用戶點擊 「下載 APP」 的意願與轉換率。\n• 產品資訊複雜難傳達： 網站必須在短時間內，向潛在用戶清晰地傳達複雜的夢幻體育產品概念和價值。\n\n設計目標 (The Goals)：\n• 【品牌奠基】 建立 Legend Fantasy 的品牌 Logo 與視覺規範，確保官網和 APP 的品牌一致性。\n• 【導流優化】 採用 RWD Mobile-First 設計思維，優化手機端體驗，提高 「下載 APP」的 CTA 轉換效率。\n• 【清晰傳達】 透過資訊架構與視覺層次的優化，讓用戶能在 30 秒內掌握產品核心價值。',
    isFeatured: false,
    process: {
      problem: '需要一個高視覺衝擊力且易於維護的網站。',
      research: '研究了頂級體育聯盟的網站風格，強調動態感與大膽的排版。',
      wireframing: '規劃了單頁式滾動體驗，將重點放在遊戲特色介紹與下載轉化。',
      final: '使用 Wordpress 建置，結合高質感的球員影像與品牌識別色，成功提升了品牌專業度。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 問題與目標定義 (Branding & Acquisition Goals)',
            description: '商業挑戰： 官方網站是潛在用戶認識 Legend Fantasy 品牌的門面。挑戰在於如何建立一個具備體育熱情、專業且現代感的網站，以吸引新用戶並導流至 APP 下載。\n\n目標設定：\n1. 建立品牌基礎： 從 0 到 1 規劃品牌 Logo、標準色、視覺風格，確立體育產業的專業形象。\n2. RWD 優先： 確保網站設計在所有裝置上（特別是手機端，考慮到 APP 下載）都能提供優質體驗。\n3. 導流轉換： 設計有效的 Call-to-Action (CTA) 區域，將訪客順暢導向 APP 下載頁面。'
          },
          {
            subtitle: 'B. 品牌視覺與資訊架構 (Visual Identity & IA)',
            description: '品牌視覺提案 (Branding)：\n核心工作： 提出品牌 Logo、標準色提案與設計，並定義視覺調性。\n展示成果： 呈現 Logo 設計概念和品牌色彩板。說明您如何選擇體育相關的配色和強烈的視覺元素，以傳達活力與專業感。\n\n官網資訊架構 (Information Architecture)：\n重點工作： 規劃官網的資訊流（例如：首頁介紹 -> 產品特色 -> 遊戲規則說明 -> 下載/註冊）。\n決策依據： 說明您如何將複雜的體育遊戲規則分層呈現，並優先將 「遊戲價值與產品亮點」 放在用戶視線焦點，引導用戶進行下一步操作。'
          },
          {
            subtitle: 'C. 響應式網頁設計 (RWD) 執行 (Execution & RWD Focus)',
            description: 'RWD 優先原則：\n決策依據： 由於目標是導流至 APP，因此採用 Mobile-First 概念來進行 RWD 規劃，確保行動版的載入速度和操作流暢度。\n視覺呈現： 呈現首頁在 桌機版 和 行動版 的對比圖。重點展示您如何設計大型 Banner、體育數據區塊在不同尺寸下的適應性排版和排版優先級。\n\n內容模組化設計：\n重點工作： 運用您在 Design System 上的經驗，將官網的內容區塊 (e.g., 特色介紹、CTA 按鈕) 進行模組化設計，方便後續行銷團隊進行內容更新和 A/B 測試。'
          },
          {
            subtitle: 'D. 導流與技術交付 (Acquisition & Hand-off)',
            description: 'Call-to-Action (CTA) 設計：\n優化重點： 說明您如何設計 「下載 APP」 的 CTA 按鈕，包括位置、視覺強調 and 持續可見性（例如，在行動端設計成固定的懸浮按鈕）。\n決策依據： 說明這些設計是為了最大化導流轉換率。\n\n交付與技術協作：\n重點工作： 網站使用 Wix 進行設計建置與維護。\n價值展現： 說明您如何利用 Wix 這類 CMS 工具高效地完成網站建置，體現您快速將設計概念轉化為上線產品的能力。'
          }
        ]
      }
    ],
    outcomes: [
      '品牌形象奠定： 從 0 到 1 成功建立 Legend Fantasy Sport 的視覺識別與專業形象。',
      '跨平台導流： 透過 RWD 優化和清晰的 CTA 設計，有效地將網站訪客導流至 APP 下載。',
      '營銷資產： 交付一個可由行銷團隊自行維護、且具備現代專業感的官方網站環境。'
    ],
    gallery: [
      '../images/web/02web-01.png',
      '../images/web/02web-02.png',
      '../images/web/02web-03.png',
    ]
  },
  {
    id: 'smart-life-app',
    title: '智生活',
    category: 'App UI/UX',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統'],
    thumbnail: '../images/app/KNST-cover.png',
    description: '全台最大的智慧社區管理平台，整合包裹領取、公設預約與管理費繳納，為百萬住戶創造便捷的數位生活體驗。透過模組化的介面設計，讓社區服務變得觸手可及。',
    client: 'Smart Daily',
    year: '2019',
    role: 'UI/UX Designer',
    overview: '以 Design System 驅動，將複雜社區服務轉化為直覺體驗\n\n主導智生活 APP 視覺與用戶體驗的全面優化，將 Design System 成功應用於複雜的社區服務功能模組。設計目標是提升社區用戶的日常操作效率和使用黏著度，強化產品的用戶體驗價值。\n\n關鍵數據 (Quick Facts)：\n您的角色： 核心 UI/UX 設計師\n平台： iOS App, Android App\n核心成果： 建立 Design System 並應用於 APP、優化關鍵服務流程、提升 APP 日常使用效率\n關鍵技能： Design System 建立與應用、資訊架構、複雜產品 UX 設計、視覺美感與邏輯兼備\n\n專案背景 (The Context)：\n智生活是專注於社區服務的新創 APP，功能涵蓋物業繳費、報修預約、社區公告、門禁管理等多個複雜模組。 在功能快速疊代的過程中，APP 介面風格逐漸混亂，使用者在不同功能間的體驗不連貫，影響了產品的專業形象和用戶忠誠度。\n\n問題陳述 (The Problem)：\n• 視覺與體驗破碎化： 由於缺乏統一的設計規範，不同功能模組的 UI/UX 彼此獨立，導致用戶在 APP 內切換功能時產生認知負擔。\n• 核心服務流程繁瑣： 像「線上報修」或「包裹領取通知」等高頻率使用的服務流程過於複雜或隱藏太深，降低了用戶的使用效率。\n\n設計目標 (The Goals)：\n• 【系統一致性】 透過應用 Design System，對 APP 進行全面重構，確保所有模組在視覺風格、互動模式上達到高度一致性。\n• 【流程簡化】 優先優化 3 個最常使用的社區服務流程，目標是將用戶完成關鍵任務的時間或點擊數減少。\n• 【品牌優化】 透過美感與邏輯兼備的設計，提升 APP 的專業度，強化用戶對智生活的產品信任感。',
    isFeatured: true,
    process: {
      problem: '舊版介面功能繁雜，使用者難以快速找到所需功能。',
      research: '透過數據分析找出最高頻使用的功能（包裹、公告）。',
      wireframing: '重新梳理首頁架構，將核心功能模組化。',
      final: '建立了統一的設計系統，提升了視覺一致性，並優化了關鍵任務的點擊流程。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 問題與挑戰定義 (Systemic Problem Definition)',
            description: '挑戰點： 智生活 APP/管理系統在快速開發過程中，可能面臨設計不一致、開發效率低落、新功能上線時程長等問題。\n\n決策依據： 為了加速產品開發週期、確保跨平台品牌一致性，必須建立一套完整的 Design System。\n\n目標設定 (Goals)：\n• 建立一個可供設計師和工程師單一真相來源 (Single Source of Truth) 的設計系統。\n• 提升設計團隊 30% 以上的設計交付效率。\n• 確保 APP 和網站的管理後台在視覺和互動上保持高度一致性。'
          },
          {
            subtitle: 'B. 系統規劃與架構 (Design System Architecture)',
            description: '核心工作： 規劃 Design Token (顏色、字體、間距)、定義基本元件 (按鈕、輸入框、導航欄) 和複雜模組。\n\n展示成果： 從 Design Token 到 Component 到 Pattern 的層次結構，確保系統具備可擴展性。\n\n跨平台適應性 (Cross-Platform Adaptation)：\n呈現幾組關鍵元件（如按鈕狀態、表單元件）在 APP 和網站管理系統上的對比圖，展現您如何確保跨平台的一致性與適應性。\n決策依據： 針對 APP 的手勢操作與管理系統的滑鼠操作差異進行適配，同時在視覺層級保持嚴格一致。'
          },
          {
            subtitle: 'C. 應用與優化 (Implementation & Refinement)',
            description: '視覺與 UX 優化 (Visual & UX Enhancement)：\n重點工作： 應用 Design System 進行智生活 APP/管理系統網站的視覺與用戶體驗優化。\n決策依據： 應用新的 Design Token 和元件來提高資訊層次 and 易讀性，將複雜的表格與公告介面化繁為簡。\n\n規範撰寫與工具 (Guideline & Tooling)：\n重點工作： 定義互動細節並提供清晰設計規範，將 Design System 輸出為工程師可用的資產。\n工具展示： 使用 Figma/Sketch 結合 Zeplin 與前端團隊協作，確保系統能被正確導入程式碼。'
          },
          {
            subtitle: 'D. 影響與價值 (Impact and Value Proposition)',
            description: '結果總結 (Outcome)：\n效率提升： Design System 讓團隊可以將更多時間放在解決複雜的 UX 問題上，而非重複製作元件。\n設計品質： 成功確保了智生活產品線的視覺 and 體驗品牌一致性，提高了整體產品品質和專業度。\n\n學習與反思 (Learning)：\n智生活專案的關鍵價值： 這個案例讓我從「執行設計師」提升到「設計系統與策略的領導者」。不僅是畫出漂亮的介面，更在於建立工具和流程，以規模化地提升產品團隊的效率和品質。'
          }
        ]
      }
    ],
    outcomes: [
      '效率提升： Design System 讓團隊可以將更多時間放在解決複雜的 UX 問題上。',
      '設計品質： 成功確保了智生活產品線的視覺和體驗品牌一致性。',
      '從執行者轉型為設計策略領導者，優化團隊協作流程。'
    ],
    gallery: [
      '../images/app/KNST-1.png',
      '../images/app/KNST-2.png',
      '../images/app/KNST-3.png',
      '../images/app/KNST-4.png',
      '../images/app/KNST-5.png',
      '../images/app/KNST-6.png',
      '../images/app/KNST-7.png',
      '../images/app/KNST-8.png',
      '../images/app/KNST-9.png',
      '../images/app/KNST-10.png',
      '../images/app/KNST-11.png',
      '../images/app/KNST-12.png',
      '../images/app/KNST-13.png',
      '../images/app/KNST-14.png',
      '../images/app/KNST-15.png',
      '../images/app/KNST-16.png',
      '../images/app/KNST-17.png',
      '../images/app/KNST-18.png',
      '../images/app/KNST-19.png',
      '../images/app/KNST-20.png',
      '../images/app/KNST-21.png',
      '../images/app/KNST-22.png',
      '../images/app/KNST-ds1.png',
      '../images/app/KNST-ds2.png',
      '../images/app/KNST-ds3.png',
      '../images/app/KNST-ds4.png'
    ]
  },
  {
    id: 'gaming-admin-system',
    title: '博弈控端管理系統',
    category: '網站設計',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統', '複雜系統UX設計', '數據視覺化', '操作效率優化'],
    thumbnail: '../images/web/05-0cover.jpg',
    description: '高度安全且穩定的風險控管後台，具備即時監控與異常警示功能，確保營運端能精確掌握每一筆交易動態。核心目標是提升營運人員的監控效率、降低操作錯誤率。',
    client: 'Gaming Tech',
    year: '2020',
    role: 'UI/UX 設計師',
    overview: '### **高效數據儀表板與複雜業務流程設計**\n\n**作為系統級 UI/UX 設計師，我專注於將博弈控端系統中高度複雜的即時數據和風險管理需求，透過系統化設計轉化為直覺、高效率的操作介面。核心目標是提升營運人員的監控效率、降低操作錯誤率，確保系統的穩定運行。**\n\n**您的角色：**  UI/UX 設計師 \n\n**平台：** 桌面端後台管理系統 \n\n**核心成果：** 優化即時數據監控、縮短異常事件處理流程、提升操作準確性 \n\n**關鍵技能：** 複雜系統 UX 設計、資訊架構、數據視覺化、操作效率優化、Design System 應用\n\n**視覺圖 :** 放置**儀表板 (Dashboard) 的高解析度截圖**，強調清晰的數據圖表、狀態指示燈和警報系統設計。\n\n專案背景 (The Context)\n該控端管理系統是支撐博弈平台日常運營和風險控制的「中樞神經」。 它需要即時處理大量的交易數據、用戶行為監控、異常事件警報和後台配置管理。系統的任何設計缺陷都可能導致重大的財務風險或運營失誤。\n\n問題陳述 (The Problem)\n專案啟動時，我們診斷出後台系統面臨的兩大痛點：\n\n**「數據噪音」導致反應延遲：** 系統充斥著高密度的即時數據，缺乏有效的**視覺層次和警報機制**，導致營運人員難以在海量資訊中快速識別**關鍵異常事件**（例如：可疑交易、系統錯誤）。\n\n**複雜操作路徑導致錯誤：** 關鍵的配置調整、用戶管理等操作流程過於繁瑣且不一致，增加了管理人員的**訓練成本**和**操作錯誤率**。\n\n設計目標 (The Goals)\n我們的設計目標是將系統轉化為一個**「高效能、高準確性」的專業工具：\n1. 【即時警報】 透過優化儀表板和數據視覺化，確保管理人員能在最短時間內發現並處理異常事件。\n2. 【效率提升】 簡化高頻率的關鍵業務流程**（例如：帳號審核、參數調整），目標是將操作完成時間**縮短 18%**。\n3. **【操作一致性】** 應用 Design System 統一後台所有複雜組件（表格、表單、篩選器）的 UI/UX，以確保**操作邏輯的一致性和易學性**。',
    process: {
      problem: '需要即時監控大量數據流，且不可有誤操作空間。',
      research: '深入了解風控人員的操作流程與監控需求。',
      wireframing: '設計了深色模式的儀表板，適合長時間監控使用。',
      final: '建立了嚴謹的警示系統視覺規範，確保異常狀況能被第一時間發現。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: '1. 核心業務與風險分析',
            description: '• **呈現：** 視覺化展示**異常處理的緊急流程圖**，例如從「接收警報」到「鎖定帳號」的步驟。\n• **決策依據：** 根據風險級別，制定資訊優先級，將設計工作聚焦於**縮短決策路徑**和**防止操作失誤**。'
          },
          {
            subtitle: '2. 數據視覺化與儀表板設計',
            description: '• **呈現：** 儀表板設計 Mockup，展示您如何利用**顏色、圖標、圖表**來分離「正常狀態數據」和「緊急警報數據」。\n• **決策依據：** 運用您的**數據驅動思維**，說明如何選擇最適合後台監控的圖表類型，讓數據變化趨勢一目瞭然。'
          },
          {
            subtitle: '3. 效率化元件與操作優化',
            description: '• **呈現：** 展示 Design System 中複雜元件（例如：多條件篩選表格、分步表單）的設計。\n• **決策依據：** 應用**「錯誤預防原則」**，在關鍵操作中加入**確認機制或預覽功能**；利用鍵盤快捷鍵和快速篩選器來提升專業用戶的操作速度。'
          },
          {
            subtitle: '4. Design System 的應用與交付',
            description: '**價值展現：** 說明您如何透過 Design System 確保所有模組（如報表中心、用戶管理）擁有統一的互動模式，這不僅提升了用戶體驗，也**加速了後台新功能的開發週期**。'
          }
        ]
      }
    ],
    outcomes: [
      '營運效率提升： 透過優化儀表板和流程，營運人員處理關鍵異常警報的反應時間縮短20%，顯著提升了後台的運營效率。',
      '操作準確性與風險降低： 系統化的介面設計和錯誤預防機制，使得後台配置或交易處理的錯誤率降低 40%，有效減少了潛在的財務和合規風險。',
      'Design System 的價值： 統一的 Design System 確保了博弈控端系統在未來功能迭代時，能快速開發並保持高度體驗一致性。',
      '個人學習與反思： 總結在設計高強度、高風險系統時的關鍵學習，例如：如何在視覺美學和資訊傳達效率之間取得最佳平衡。'
    ],
    gallery: [
      '../images/web/05-0cover.jpg',
      '../images/web/05-0cover.jpg',
    ]
  },
  {
    id: 'smart-daily-website',
    title: '智生活官方網站',
    category: '網站設計',
    tags: ['Wordpress建置', '形象設計', 'RWD響應式設計', '系統化設計'],
    thumbnail: '../images/web/04web-0cover.jpg',
    description: '為智生活打造的現代化品牌官網，運用系統化設計 (Design System) 確保與產品線視覺一致。透過完整的 RWD 響應式規劃，清晰傳達產品價值並提升品牌專業度。',
    client: 'Smart Daily',
    year: '2019',
    role: 'Web Designer',
    overview: '品牌一致性建構與 RWD 視覺優化\n\n負責智生活官方網站的視覺設計與 RWD 執行。核心策略是將已建立的 Design System 延伸應用於官網，確保品牌對外形象與產品體驗高度一致，並透過優化資訊架構，高效傳達產品價值。\n\n關鍵數據 (Quick Facts)：\n您的角色： 網站設計主導者\n平台： RWD 網站 (桌面/行動端)\n核心成果： 應用 Design System 確保品牌一致性、優化視覺呈現、實現全裝置流暢體驗\n關鍵技能： Design System 應用、RWD 設計、資訊架構、視覺美感、Wordpress 建置\n\n專案背景 (The Context)：\n智生活作為 B2B2C 的社區服務平台，官方網站是潛在物業公司或社區管理者了解產品功能和專業度的主要渠道。 在 APP 和管理系統完成 Design System 規範後，官網的視覺形象必須同步升級，以呈現一個統一、專業且值得信賴的品牌形象。\n\n問題陳述 (The Problem)：\n• 品牌視覺脫節： 舊官網的視覺風格與新版 APP 和管理系統的設計語言不一致，導致品牌形象混亂，削弱了產品的專業感。\n• 資訊傳達效率低： 複雜的社區解決方案未能被有效分層和視覺化，潛在客戶難以快速理解智生活提供的全方位價值。\n• 缺乏 RWD 支援： 網站未針對行動裝置進行充分優化，影響業務人員在外簡報或客戶在手機上瀏覽的體驗。\n\n設計目標 (The Goals)：\n• 【形象統一】 徹底應用 Design System 的設計規範於官網，確保品牌對內對外的視覺和互動體驗高度一致。\n• 【價值清晰】 優化網站的資訊架構和內容佈局，清晰且有吸引力地傳達智生活的核心功能和服務優勢。\n• 【全裝置覆蓋】 執行高品質的 RWD 設計，無論在何種裝置上，皆能提供專業且流暢的瀏覽體驗。',
    isFeatured: false,
    process: {
      problem: '舊官網品牌形象不一致，產品價值分散，且缺乏完整的 RWD 支援。',
      research: '分析潛在社區管理者與新住戶的需求，規劃最佳瀏覽路徑。',
      wireframing: '重組資訊架構，規劃「解決方案」與「成功案例」等邏輯化導航。',
      final: '應用 Design System 語言，完成全斷點 RWD 設計與 Wordpress 建置。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 挑戰與目標定義 (Challenge & Goal Setting)',
            description: '挑戰點： 智生活作為新創企業，官網肩負著建立品牌專業度、清晰傳達 APP/管理系統價值的任務。舊官網可能存在 brand 形象不一致、產品價值點分散、缺乏 RWD 支援等問題。\n\n目標設定：\n1. 品牌對齊： 將官網視覺風格與新建立的 Design System 對齊，達成內外產品一致性。\n2. 資訊優化： 重組資訊架構，讓潛在客戶能快速理解產品生態與解決方案。\n3. 全裝置體驗： 實現完整的 RWD 設計，確保桌面端和行動端都有優良的瀏覽體驗。'
          },
          {
            subtitle: 'B. 策略規劃與資訊架構 (Strategy & Information Architecture)',
            description: '目標受眾與路徑：\n官網的目標受眾包含潛在社區管理者、新住戶和合作夥伴。分析不同受眾的核心需求，規劃其在網站上的最佳瀏覽路徑。\n\n資訊架構重組：\n展示成果： 簡要展示您優化後的網站導航結構。例如，如何規劃「我們的解決方案」、「產品特色」、「成功案例」等頁面，以邏輯化的層次引導用戶了解產品。\n\n內容優先級決策：\n說明您如何在首頁決定「什麼訊息最優先？」。展示如何運用強烈的視覺設計將最核心的價值主張 (Value Proposition) 放在首屏。'
          },
          {
            subtitle: 'C. 視覺與 RWD 設計 (Visual & RWD Execution)',
            description: 'Design System 的應用：\n決策依據： 說明您如何從 Design System 中提取核心的設計語言（顏色、字體、按鈕樣式）並應用於官網，確保其專業度與 APP 的科技感一致。\n視覺展示： 呈現官網高保真介面的關鍵截圖，特別是色彩、間距和排版如何體現品牌一致性。\n\n響應式網頁設計 (RWD) 規劃 (核心亮點)：\n展示成果： 呈現首頁或任一內頁在桌面版 (Desktop)、平板版 (Tablet) 和 手機版 (Mobile) 三個斷點上的對比截圖。\n決策依據： 具體說明您如何處理不同裝置上的挑戰：例如，在手機端如何調整導航列（變為漢堡選單）、如何堆疊區塊（從多欄變為單欄）、如何優化圖片與字體大小，以保持載入速度與閱讀體驗。'
          },
          {
            subtitle: 'D. 協作與交付 (Collaboration & Delivery)',
            description: '工程交付規範：\n強調您如何使用 Zeplin/Figma 交付不同斷點 (RWD) 的設計規範，確保前端工程師在開發過程中能精準還原您對每個尺寸的設計細節。\n\n跨部門合作：\n說明您與行銷/業務團隊的協作，確保官網的文案和視覺能有效地支撐他們的商業推廣需求。'
          }
        ]
      }
    ],
    outcomes: [
      '品牌專業度提升： 成功建立一個現代化、專業且與產品線視覺一致的品牌官網。',
      '多裝置體驗優化： 藉由 RWD 實現，確保所有裝置的用戶都能流暢地瀏覽網站，有效降低潛在客戶的瀏覽障礙。',
      '設計資產整合： 官網成為 Design System 應用在對外溝通的一個成功實例。'
    ],
    gallery: [
      '../images/web/04web-01.jpg',
      '../images/web/04web-02.jpg',
      '../images/web/04web-03.jpg',
      '../images/web/04web-04.jpg',
      '../images/web/04web-05.jpg',
      '../images/web/04web-06.jpg',
      '../images/web/04web-07.png',
      '../images/web/04web-08.png',
      '../images/web/04web-09.png',
      '../images/web/04web-10.png',
      '../images/web/04web-11.png',
      '../images/web/04web-12.png',
      '../images/web/04web-13.png',
      '../images/web/04web-14.png',
    ]
  },
  {
    id: 'smart-life-management',
    title: '智生活管理系統',
    category: '網站設計',
    tags: ['介面視覺設計', '元件庫', '設計系統', '複雜系統UX設計', '數據視覺化', '工作效率優化'],
    thumbnail: '../images/web/03web-0cover.jpg',
    description: '專為物業管理設計的高效後台，透過清晰的數據儀表板與直覺的操作流程，大幅提升社區事務處理效率。優化了大量數據的表格呈現，減少管理人員的視覺疲勞。',
    client: 'Smart Daily',
    year: '2019',
    role: '核心 UI/UX 設計師',
    overview: '以 Design System 整合複雜功能，打造高效能 SaaS 後台\n\n作為 Design System 建立者，我將其應用於智生活複雜的管理系統網站。核心工作是梳理高強度使用的業務流程、優化資訊架構，並透過數據視覺化，將系統操作的效率和準確性提升至最高。\n\n關鍵數據 (Quick Facts)：\n您的角色： 核心 UI/UX 設計師 (負責管理系統 UX/UI)\n平台： 桌面端 RWD 網站\n核心成果： 應用 Design System 統一後台介面、優化關鍵業務流程（例如：報修處理）、提升資訊層次\n關鍵技能： 複雜系統 UX 設計、Design System 應用、資訊架構、數據視覺化、工作效率優化',
    isFeatured: true,
    process: {
      problem: '後台數據量龐大，表格呈現不易閱讀。',
      research: '觀察物管人員的操作習慣，發現他們常需多視窗切換。',
      wireframing: '設計了儀表板 (Dashboard) 總覽，讓關鍵數據一目瞭然。',
      final: '優化了表格與表單的視覺層級，減少視覺疲勞，並規範了後台元件庫。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 問題與挑戰定義 (Complexity & Efficiency Challenge)',
            description: '商業挑戰： 管理系統是用戶（社區管理者、物業人員）日常工作的核心工具。若介面複雜、操作效率低，將直接影響他們的工作效率和系統的使用意願。\n\n使用者痛點： 管理者可能面臨功能入口深、數據報表難以閱讀、跨功能流程不連貫等問題。\n\n決策依據： 設計目標是優化關鍵業務流程，並運用 Design System 確保介面的一致性和易學性。'
          },
          {
            subtitle: 'B. 流程分析與資訊架構 (Workflow Analysis & IA)',
            description: '關鍵業務流程梳理 (Critical User Flows)：\n重點工作： 分析管理者在系統中的核心任務（例如：處理報修單、發送社區公告、查看財務報表）的路徑。\n展示成果： 呈現優化前後的關鍵任務流程圖 (Task Flow) 對比，說明您如何減少點擊次數和跳轉，以提升效率。\n\n資訊架構重組與導航優化 (IA & Navigation)：\n決策依據： 重新規劃系統導航結構（例如：側邊欄、頂部標籤），讓使用者能快速定位複雜功能。'
          },
          {
            subtitle: 'C. 應用 Design System 進行介面重構 (System-Driven UI/UX)',
            description: '數據視覺化與儀表板 (Dashboard Design)：\n重點工作： 針對管理系統的數據報表和儀表板進行設計優化。\n決策依據： 應用「數據驅動的視覺設計」專長，選擇合適的圖表類型（柱狀圖、趨勢線等），並運用 Design System 定義的顏色和字體，讓複雜數據清晰易讀，輔助管理者快速決策。\n\n元件的統一與簡化 (Component Simplification)：\n重點工作： 應用已建立的 Design System 元件（如：複雜表單、過濾器、彈出視窗），取代舊有不一致的樣式。\n視覺呈現： 呈現一個優化前後的複雜操作介面（例如：篩選器眾多的列表頁）對比圖，展示系統介面如何從混亂變得清晰、有邏輯。'
          },
          {
            subtitle: 'D. 協作與後續影響 (Collaboration & Impact)',
            description: '技術可行性與交付：\n說明您如何與前端工程師協作，使用 Design System 來確保複雜介面設計的技術落地和快速開發。\n\n用戶反饋與迭代：\n說明您如何進行內部或外部的易用性測試，並依據反饋對管理系統的關鍵流程進行迭代。'
          }
        ]
      }
    ],
    outcomes: [
      '效率提升： 預期或實際達成了管理人員處理任務時間縮短，這直接體現了 UX 設計的商業價值。',
      '體驗一致性： 系統網站與 APP 介面在視覺和互動上達成一致，降低了用戶在不同產品間的學習成本。',
      'Design System 驗證： 成功展示了 Design System 在解決複雜內部工具設計問題上的強大賦能作用。'
    ],
    gallery: [
      '../images/web/03web-01.jpg',
      '../images/web/03web-02.jpg',
      '../images/web/03web-03.jpg',
      '../images/web/03web-04.png',
    ]
  },
  {
    id: 'ev-car-share',
    title: '電動車汽車共享服務 APP/車載系統 UX 設計',
    category: 'App UI/UX',
    tags: ['資訊架構', '使用者流程', '線框圖', '介面視覺設計', '互動原型', '元件庫', '設計系統', '設計體驗'],
    thumbnail: '../images/app/app04-cover.jpg',
    description: '結合即時地圖與電量監控的共享租賃服務，解決里程焦慮，提供從找車、解鎖到還車的無縫綠能移動體驗。設計重點在於降低使用門檻，讓租車過程像使用自家車輛一樣自然。',
    client: 'EV Share',
    year: '2017',
    role: 'Product Designer',
    overview: '打造從預約到駕駛的無縫跨裝置 UX 體驗\n\n作為核心 UX 設計師，我專注於優化電動車共享服務的 O2O 完整旅程。透過簡化 APP 預約流程和設計安全直覺的車載介面，成功將複雜的取還車體驗化繁為簡，確保用戶在使用服務時高效且安全。\n\n關鍵數據 (Quick Facts)：\n您的角色： UI/UX 設計師\n平台： 行動 APP (iOS/Android)\n核心成果： 預期在時間內取車成功達50%，提升車載介面安全度，達成跨裝置體驗一致\n關鍵技能： 跨裝置設計、O2O 服務流程、HMI 介面、用戶旅程分析、易用性測試\n\n專案背景 (The Context)：\n隨著電動車普及，汽車共享服務面臨升級挑戰。 這個專案旨在設計一套下一代電動車共享服務系統，需要克服傳統共享服務中繁瑣的取還車手續，以及車載介面操作不安全的痛點。\n\n問題陳述 (The Problem)：\n• O2O 流程的斷點： 用戶在「預約/尋車 (線上 APP)」到「發動/駕駛 (線下車輛)」之間的體驗不連貫，尤其是在戶外環境中，取車流程的高操作複雜度導致用戶焦慮和時間浪費。\n• 駕駛安全與分心風險： 車載系統的介面設計若與 APP 邏輯不同步，且資訊過於複雜，將會導致駕駛員分心，構成安全隱患。\n\n設計目標 (The Goals)：\n• 【無縫銜接】 透過優化跨裝置的 User Flow，目標將用戶從預約完成到成功啟動車輛的時間縮短。\n• 【安全簡化】 設計一個高度簡化且專注於駕駛的車載 HMI 介面，以確保用戶能直覺操作，最大程度降低駕駛分心風險。\n• 【體驗一致】 確保行動 APP 和車載介面在設計規範（Design System）下保持高度視覺和互動一致性。',
    isFeatured: true,
    process: {
      problem: '使用者對於電動車的續航力與充電站位置感到焦慮。',
      research: '實地測試租車流程，發現地圖定位精準度與電量顯示是關鍵。',
      wireframing: '將地圖作為核心介面，即時顯示車輛電量與可行駛距離。',
      final: '設計了直覺的車輛解鎖與還車引導動畫，降低使用門檻。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 問題與挑戰定義 (Challenge & Safety Focus)',
            description: '商業挑戰： 在競爭激烈的共享市場中，如何設計出最快速、最直覺的預約取車流程，以提高用戶使用率和滿意度。\n使用者痛點： 用戶擔心找不到車、取車流程繁瑣、還車規定複雜，以及在車載介面操作時的分心風險。\n核心目標： 專注於優化三個關鍵體驗點：「地圖導航與車輛預約」、「無縫取還車流程」、以及「安全且簡化的車載介面」。'
          },
          {
            subtitle: 'B. 跨裝置使用者旅程分析 (Cross-Platform User Journey)',
            description: '定義 O2O 流程： 完整梳理用戶從線上預約 → 導航尋找車輛 → APP 開鎖/取車 → 車載系統駕駛 → APP 歸還/結算的完整旅程。\n展示成果： 呈現一張關鍵節點流程圖 (User Flow)，特別標註APP (手機) 與車載介面 (In-Car Display) 之間的轉換點。\n決策依據： 說明您如何透過流程簡化，減少用戶在「戶外環境」和「即將駕駛前」的等待和操作時間，確保體驗流暢，這是提升滿意度的關鍵。'
          },
          {
            subtitle: 'C. APP 設計優化：預約與尋車 (App Design Focus)',
            description: '地圖與車輛預約介面：\n優化重點： 如何設計地圖介面，讓用戶能一目瞭然地看到周圍可用車輛、電量、預計步行距離和費用。\n決策依據： 應用您的 「數據驅動的視覺設計」 專長，優化資訊層次，讓用戶能迅速做出決策（例如，使用顏色、圖標來區分車輛電量和車型）。\n\n取車流程 UX (Critical Step)：\n重點工作： 設計 APP 內的「啟動取車」流程，包括：身份驗證、車輛檢查、電子解鎖等步驟。\n展示成果： 呈現步驟引導介面的高保真截圖，強調操作的清晰度、大觸控區域和容錯機制。'
          },
          {
            subtitle: 'D. 車載介面設計：安全與簡化 (In-Car HMI/System Design)',
            description: '介面減法原則：\n決策依據： 說明您如何將複雜功能（如導航、媒體控制、車輛狀態）極度簡化，只保留駕駛時最必要的資訊 and 操作，降低駕駛分心風險。\n展示成果： 呈現一個簡潔的車載介面 Mockup，強調高對比度、大字體、語音/觸控熱區的設計。\n\nDesign System 延伸應用： 說明車載介面如何與您的 APP Design System 保持視覺和互動上的一致性，讓用戶在不同裝置間切換時，不會產生認知負擔。'
          }
        ]
      }
    ],
    outcomes: [
      '體驗提升： 預期取還車時間縮短 50%，用戶對流程滿意度提升 50%。',
      '安全意識： 透過簡化的車載介面設計，提升駕駛專注度。',
      '跨平台能力： 成功展示了將 UI/UX 設計專業應用於 O2O 服務和人機介面 (HMI) 領域的能力。'
    ],
    gallery: [
      '../images/app/app04-flow01.jpeg',
      '../images/app/app04-flow02.jpeg',
      '../images/app/app04-flow03.jpeg',
      '../images/app/app04-wf01.jpg',
      '../images/app/app04-wf02.jpg',
      '../images/app/app04-wf03.jpg',
      '../images/app/app04-wf04.jpg',
      '../images/app/app04-1.jpeg',
      '../images/app/app04-2.jpeg',
      '../images/app/app04-3.jpeg',
    ]
  },
  {
    id: 'saba-sport',
    title: 'Saba Sport',
    category: 'App UI/UX',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統'],
    thumbnail: '../images/app/app03-cover.jpg',
    description: '專業的體育賽事數據平台，將龐大的賽況資訊轉化為易讀的視覺介面，提供即時比分與精準的賠率分析。運用色彩系統區分賽事狀態，幫助使用者在毫秒間做出判斷。',
    client: 'Saba Sports',
    year: '2021',
    role: 'UI Designer',
    overview: '高數據密度資訊架構重塑與跨平台一致性體驗設計\n\n作為 UI/UX 設計師，我負責 Saba Sport 旗下多個產品線（APP 與 RWD 網站）的視覺設計與用戶體驗優化。核心工作是針對體育賽事的即時性與複雜數據，重塑資訊架構與視覺層次，確保用戶能快速高效地獲取資訊並完成操作。\n\n關鍵數據 (Quick Facts)：\n角色： UI/UX 設計師 (負責多產品線)\n平台： 行動 APP (iOS/Android), RWD 網站\n核心成果： 統一產品線視覺風格、優化即時數據的呈現方式、提升介面易用性與專業度\n關鍵技能： 複雜數據視覺化、資訊架構、RWD 設計、多產品線設計一致性\n\n專案背景 (The Context)：\nSaba Sport 是一個服務於全球體育愛好者的平台，提供多種賽事的即時數據追蹤與服務。 由於體育數據的即時性和高頻率變動特性，用戶對資訊準確性、載入速度和介面清晰度有極高要求。\n\n問題陳述 (The Problem)：\n專案啟動時，Saba Sport 產品線面臨以下 UX 挑戰：\n• 高數據密度下的混亂： 大量的賽事資訊和數據流擁擠在同一介面，用戶難以在短時間內找到關鍵賽事或識別重要數據變化。\n• 多產品線的視覺分裂： 由於產品線眾多（APP 與 RWD 網站），缺乏統一的視覺規範，導致用戶在不同平台間切換時，體驗不連貫，削弱了品牌專業度。\n\n設計目標 (The Goals)：\n• 【清晰優先】 透過優化資訊架構與視覺層次，讓用戶能在複雜的賽事列表中，高效地瀏覽並篩選出他們關注的內容。\n• 【專業一致】 確立一個統一的設計規範，將其應用於 APP 和 RWD 網站，確保所有產品線的專業感和視覺一致性。\n• 【易操作性】 簡化高頻操作（如：收藏賽事、切換聯賽）的介面，提升用戶的日常操作效率。',
    isFeatured: true,
    process: {
      problem: '如何在手機上呈現複雜的賽事賠率與即時比分？',
      research: '研究了多款競品，發現資訊密度過高容易導致疲勞。',
      wireframing: '採用模組化卡片設計，讓使用者可自定義關注的賽事。',
      final: '運用鮮明的色彩區分不同賽事狀態（進行中、已結束），提升資訊辨識度。'
    },
    detailedCaseStudy: [
      {
        title: '設計流程與決策依據 (The Process and Rationale)',
        items: [
          {
            subtitle: 'A. 現狀分析與資訊架構重塑 (Current State Analysis & IA Rebuild)',
            description: '痛點量化與分析：\n呈現： 透過視覺化圖表或流程圖，展示舊版 APP 中數據的堆疊問題和用戶在尋找特定賽事時的效率瓶頸。\n決策依據： 根據現有數據和易用性分析，確定必須重新劃分資訊層次，將「賽事狀態」、「賽事類型」和「關鍵比分」作為優先級最高的資訊。\n\n資訊架構重組：\n重點工作： 重新規劃主導航結構和賽事列表的篩選器（Filter）設計。\n決策依據： 採用「以用戶為中心的分類邏輯」，讓用戶能更直覺地透過聯賽、時間、關注度等維度來快速篩選，大幅減少資訊超載的壓力。'
          },
          {
            subtitle: 'B. 視覺層次與數據呈現優化 (Visual Hierarchy & Data Visualization)',
            description: '數據視覺化設計：\n呈現： 呈現優化後的賽事列表介面，強調您如何運用顏色、字體粗細、間距等視覺元素來區分「已結束」、「進行中」、「即將開始」等狀態。\n決策依據： 應用「視覺敏感度」與「數據驅動」的設計原則，使用高對比配色來突顯即時變動的比分數值，確保用戶在掃視介面時能立即掌握最新賽況。\n\n操作流簡化：\n呈現： 簡要展示高頻操作（如「一鍵追蹤賽事」或「切換比分顯示模式」）的互動設計。\n決策依據： 減少用戶的點擊路徑，將關鍵操作圖標化並置於黃金區域，提升日常使用的效率。'
          },
          {
            subtitle: 'C. 跨平台一致性設計 (Cross-Platform Consistency)',
            description: '設計規範建立與應用：\n重點工作： 確立 Saba Sport 產品線的通用 Guideline（例如，按鈕樣式、列表組件、數據圖表樣式）。\n價值展現： 說明您如何確保 APP 和 RWD 網站上的賽事資訊和數據圖表能夠保持視覺和互動行為的高度一致，這對於維護品牌專業度至關重要。\n\nRWD 適應性設計：\n呈現： 展示賽事列表在桌面端和行動端不同裝置上的排版差異與適應邏輯。\n決策依據： 說明如何透過 RWD 技術，在不同螢幕尺寸下保持資訊的完整性與可讀性。'
          }
        ]
      }
    ],
    outcomes: [
      '專業度與一致性提升： 品牌信任度顯著增強，成功統一 APP 和 RWD 網站的視覺語言。',
      '使用體驗優化 (定性成果)： 資訊獲取效率提升，透過優化後的資訊架構和視覺層次設計，用戶在瀏覽複雜賽事數據時的體感負擔降低。',
      '跨平台設計貢獻： 多產品線協作效率提升，建立的設計規範為後續產品線的功能迭代提供了高效基礎。'
    ],
    gallery: [
      '../images/app/app03-1.png',
      '../images/app/app03-2.png',
      '../images/app/app03-3.png',
      '../images/app/app03-4.png',
      '../images/app/app03-5.png'
    ]
  }
];