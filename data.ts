

import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'legend-fantasy-sport-app',
    title: 'Legend Fantasy Sport',
    category: 'App UI/UX',
    tags: ['資訊架構', '使用者流程', '線框圖', '介面視覺設計', '互動原型', '元件庫', '設計系統', '設計體驗', '敏捷開發'],
    thumbnail: 'https://photos.app.goo.gl/8muSHcyphutoGs8cA',
    description: '打造沈浸式的夢幻體育體驗，透過直覺的選秀介面與即時數據分析，讓玩家輕鬆組建夢幻隊伍。優化了複雜的競賽規則呈現，確保新手與資深玩家都能享受流暢的遊戲過程。',
    client: 'Legend Fantasy',
    year: '2023',
    role: 'Lead UI/UX Designer',
    overview: 'Legend Fantasy Sport 旨在為用戶提供一個沉浸式的夢幻體育平台。我們專注於優化複雜的數據顯示與球員選擇流程，確保新手與資深玩家都能輕鬆上手。',
    isFeatured: true,
    process: {
      problem: '如何在手機螢幕上呈現大量球員數據而不顯得擁擠？',
      research: '分析了競品並訪談了 15 位資深夢幻體育玩家，發現「篩選」是最大痛點。',
      wireframing: '設計了多層次的篩選與排序機制，並使用卡片式設計來區分資訊層級。',
      final: '打造出一套深色系、充滿運動張力的視覺系統，並建立了完整的 Design System 供開發團隊使用。'
    },
    detailedCaseStudy: [
      {
        title: 'A. 確立與研究 (Research & Analysis)',
        items: [
          {
            subtitle: '問題定義 (Defining the Challenge)',
            description: '挑戰點： 夢幻體育 APP 是一個相對複雜的產品，使用者需要快速理解遊戲規則、組建隊伍，並即時追蹤賽事數據。初期的挑戰是如何將複雜的體育數據和遊戲機制，轉化為直覺、低學習成本的介面。\n\n決策依據： 根據需求開發資訊架構、單元功能規劃、使用者操作流程與 Wireframe 。'
          },
          {
            subtitle: '使用者研究 (User Insights)',
            description: '執行步驟： 在產品上線前，於目標市場（印度）進行線上易用性測試、體驗研究與分析 。\n\n關鍵洞察： 根據測試結果，發現新用戶在「組隊流程」和「數據視覺化」上存在明顯痛點，成為設計優化的核心目標。'
          }
        ]
      },
      {
        title: 'B. 資訊架構與流程 (IA & Flow Design)',
        items: [
          {
            subtitle: '資訊架構優化 (Information Architecture)',
            description: '重點工作： 開發資訊架構、單元功能規劃 。\n\n展示成果： 簡要展示新舊資訊架構圖（或關鍵差異），說明如何將核心的組隊、賽事和數據追蹤功能置於最容易存取的位置。'
          },
          {
            subtitle: '使用者旅程與線框圖 (User Journey & Wireframe)',
            description: '重點工作： 根據需求，規劃使用者操作流程與 Wireframe 。\n\n展示成果： 呈現關鍵流程（例如：新用戶首次組隊）的 Wireframe，並說明您如何透過優化操作流程來減少用戶的認知負擔，這是提升留存率的基礎。'
          }
        ]
      },
      {
        title: 'C. 介面與原型設計 (UI & Prototyping)',
        items: [
          {
            subtitle: '高擬真介面與互動 (High-Fidelity Mockup & Interaction)',
            description: '重點工作： 設計高擬真使用者介面（Mockup）、原型設計（Prototype）、Design System 。\n\n展示成果： 呈現您在 Figma 中設計的視覺風格（品牌 Logo、標準色 ），特別是數據圖表、組隊介面的截圖。\n\n決策依據： 介面色彩、排版和圖示的選擇，皆是為了在高資訊密度下，確保資訊傳遞的清晰度和直覺性，以達到將「複雜需求轉化為直覺體驗」的目標 。'
          },
          {
            subtitle: '設計系統的建立 (Design System)',
            description: '重點工作： 建立 Design System，定義互動細節並提供清晰設計規範 。\n\n價值展現： 簡述 Design System 如何幫助開發團隊「排除協作開發時問題」 ，並確保跨裝置（APP 和 RWD 網站）的設計一致性。'
          }
        ]
      },
      {
        title: 'D. 協作與落地 (Collaboration & Delivery)',
        items: [
          {
            subtitle: '跨團隊協作 (Cross-Functional Teamwork)',
            description: '重點工作： 與前端工程師密切溝通，確保設計落地時的技術可行性與細節還原度 。\n\n展示成果： 說明您如何提供開發團隊清晰的設計規範（Design System / Zeplin 交付），並協助他們處理設計落地時的問題 。'
          }
        ]
      }
    ],
    outcomes: [
      '從無到有100%獨立完成設計作業',
      '將數據放在首位： 透過用戶旅程分析與原型迭代，成功將產品留存率提升達 40% 。',
      '品牌建設： 成功建制 Legend Fantasy 官方網站（Wix 設計建制與維護） ，並提出品牌 Logo、標準色提案與設計 。'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=2532&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'legend-fantasy-sport-web',
    title: 'Legend Fantasy Sport',
    category: '網站設計',
    tags: ['介面視覺設計', '形象設計', 'Wordpress'],
    thumbnail: '/img/cover2.png',
    description: '建立高張力的品牌形象網站，運用動態視覺與強烈的運動風格，快速傳遞平台價值並提升用戶下載轉換率。作為產品的主要推廣入口，網站設計強調視覺衝擊力與資訊的易讀性。',
    client: 'Legend Fantasy',
    year: '2023',
    role: 'Web Designer',
    overview: '該網站作為產品的主要推廣入口，目標是快速傳達遊戲興奮感並引導用戶下載 App。',
    isFeatured: true,
    process: {
      problem: '需要一個高視覺衝擊力且易於維護的網站。',
      research: '研究了頂級體育聯盟的網站風格，強調動態感與大膽的排版。',
      wireframing: '規劃了單頁式滾動體驗，將重點放在遊戲特色介紹與下載轉化。',
      final: '使用 Wordpress 建置，結合高質感的球員影像與品牌識別色，成功提升了品牌專業度。'
    },
    gallery: [
      'https://picsum.photos/id/201/1200/800',
      'https://picsum.photos/id/250/1200/800'
    ]
  },
  {
    id: 'smart-life-app',
    title: '智生活',
    category: 'App UI/UX',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統'],
    thumbnail: '/img/cover3.jpg',
    description: '全台最大的智慧社區管理平台，整合包裹領取、公設預約與管理費繳納，為百萬住戶創造便捷的數位生活體驗。透過模組化的介面設計，讓社區服務變得觸手可及。',
    client: 'Smart Daily',
    year: '2019',
    role: 'UI/UX Designer',
    overview: '智生活 App 整合了包裹通知、管理費繳納、公設預約等多項功能，是全台最大的社區服務平台。\n\n執行項目：\n• 根據Wireframe設計智生活APP UI Mockup、Prototype、動態圖形、Design System、Guideline設計\n• 針對智生活APP既有介面提出易用性優化、用戶體驗建議\n• 智生活管理系統網站UI設計、Design System建置\n• Design System 建立與體驗優化',
    isFeatured: true,
    process: {
      problem: '舊版介面功能繁雜，使用者難以快速找到所需功能。',
      research: '透過數據分析找出最高頻使用的功能（包裹、公告）。',
      wireframing: '重新梳理首頁架構，將核心功能模組化。',
      final: '建立了統一的設計系統，提升了視覺一致性，並優化了關鍵任務的點擊流程。'
    },
    detailedCaseStudy: [
      {
        title: 'A. 問題與挑戰定義 (Systemic Problem Definition)',
        items: [
          {
            subtitle: '挑戰點與決策',
            description: '挑戰點： 智生活 APP/管理系統在快速開發過程中，可能面臨設計不一致、開發效率低落、新功能上線時程長等問題。\n\n決策依據： 為了加速產品開發週期、確保跨平台品牌一致性，必須建立一套完整的 Design System。'
          },
          {
            subtitle: '目標設定 (Goals)',
            description: '• 建立一個可供設計師和工程師單一真相來源 (Single Source of Truth) 的設計系統。\n• 提升設計團隊 30% 以上的設計交付效率。\n• 確保 APP 和網站的管理後台在視覺和互動上保持高度一致性。'
          }
        ]
      },
      {
        title: 'B. 系統規劃與架構 (Design System Architecture)',
        items: [
          {
            subtitle: '核心工作與架構',
            description: '核心工作： 規劃 Design Token (顏色、字體、間距)、定義基本元件 (按鈕、輸入框、導航欄) 和複雜模組。\n\n展示成果： 從 Design Token 到 Component 到 Pattern 的層次結構，確保系統具備可擴展性。'
          },
          {
            subtitle: '跨平台適應性 (Cross-Platform Adaptation)',
            description: '展示成果： 呈現幾組關鍵元件（如按鈕狀態、表單元件）在 APP 和網站管理系統上的對比圖，展現您如何確保跨平台的一致性與適應性。\n\n決策依據： 針對 APP 的手勢操作與管理系統的滑鼠操作差異進行適配，同時在視覺層級保持嚴格一致。'
          }
        ]
      },
      {
        title: 'C. 應用與優化 (Implementation & Refinement)',
        items: [
          {
            subtitle: '視覺與 UX 優化 (Visual & UX Enhancement)',
            description: '重點工作： 應用 Design System 進行智生活 APP/管理系統網站的視覺與用戶體驗優化。\n\n決策依據： 應用新的 Design Token 和元件來提高資訊層次和易讀性，將複雜的表格與公告介面化繁為簡。'
          },
          {
            subtitle: '規範撰寫與工具 (Guideline & Tooling)',
            description: '重點工作： 定義互動細節並提供清晰設計規範，將 Design System 輸出為工程師可用的資產。\n\n工具展示： 使用 Figma/Sketch 結合 Zeplin 與前端團隊協作，確保系統能被正確導入程式碼。'
          }
        ]
      },
      {
        title: 'D. 影響與價值 (Impact and Value Proposition)',
        items: [
          {
            subtitle: '結果總結 (Outcome)',
            description: '效率提升： Design System 讓團隊可以將更多時間放在解決複雜的 UX 問題上，而非重複製作元件。\n\n設計品質： 成功確保了智生活產品線的視覺和體驗品牌一致性，提高了整體產品品質和專業度。'
          },
          {
            subtitle: '學習與反思 (Learning)',
            description: '智生活專案的關鍵價值： 這個案例讓我從「執行設計師」提升到「設計系統與策略的領導者」。不僅是畫出漂亮的介面，更在於建立工具和流程，以規模化地提升產品團隊的效率和品質。'
          }
        ]
      }
    ],
    outcomes: [
      '建立單一真相來源 (Single Source of Truth) 的設計系統',
      '提升設計團隊 30% 以上的設計交付效率',
      '確保 APP 與 Web 管理後台在視覺與互動上的高度一致性',
      '從執行者轉型為設計策略領導者，優化團隊協作流程'
    ],
    gallery: [
      'https://picsum.photos/id/403/1200/800',
      'https://picsum.photos/id/445/1200/800'
    ]
  },
  {
    id: 'smart-daily-website',
    title: '智生活官方網站',
    category: '網站設計',
    tags: ['Wordpress建置', '形象設計', 'RWD響應式設計', '系統化設計'],
    thumbnail: 'https://picsum.photos/id/3/1200/800',
    description: '為智生活打造的現代化品牌官網，運用系統化設計 (Design System) 確保與產品線視覺一致。透過完整的 RWD 響應式規劃，清晰傳達產品價值並提升品牌專業度。',
    client: 'Smart Daily',
    year: '2019',
    role: 'Web Designer',
    overview: '智生活作為新創企業，官網肩負著建立品牌專業度、清晰傳達 APP/管理系統價值的任務。本專案致力於將官網視覺風格與 Design System 對齊，達成內外產品一致性，並實現全裝置 RWD 體驗。',
    isFeatured: false,
    process: {
      problem: '舊官網品牌形象不一致，產品價值分散，且缺乏完整的 RWD 支援。',
      research: '分析潛在社區管理者與新住戶的需求，規劃最佳瀏覽路徑。',
      wireframing: '重組資訊架構，規劃「解決方案」與「成功案例」等邏輯化導航。',
      final: '應用 Design System 語言，完成全斷點 RWD 設計與 Wordpress 建置。'
    },
    detailedCaseStudy: [
      {
        title: 'A. 挑戰與目標定義 (Challenge & Goal Setting)',
        items: [
          {
            subtitle: '挑戰點 (The Challenge)',
            description: '智生活作為新創企業，官網肩負著建立品牌專業度、清晰傳達 APP/管理系統價值的任務。舊官網可能存在品牌形象不一致、產品價值點分散、缺乏 RWD 支援等問題。'
          },
          {
            subtitle: '目標設定 (Goal Setting)',
            description: '1. 品牌對齊： 將官網視覺風格與新建立的 Design System 對齊，達成內外產品一致性。\n2. 資訊優化： 重組資訊架構，讓潛在客戶能快速理解產品生態與解決方案。\n3. 全裝置體驗： 實現完整的 RWD 設計，確保桌面端和行動端都有優良的瀏覽體驗。'
          }
        ]
      },
      {
        title: 'B. 策略規劃與資訊架構 (Strategy & Information Architecture)',
        items: [
          {
            subtitle: '目標受眾與路徑',
            description: '官網的目標受眾包含潛在社區管理者、新住戶和合作夥伴。我們分析了不同受眾的核心需求，規劃其在網站上的最佳瀏覽路徑。'
          },
          {
            subtitle: '資訊架構重組',
            description: '展示成果： 我們重新規劃了網站導航結構，例如「我們的解決方案」、「產品特色」、「成功案例」等頁面，以邏輯化的層次引導用戶了解產品。'
          },
          {
            subtitle: '內容優先級決策',
            description: '決策： 在首頁運用強烈的視覺設計，將最核心的價值主張 (Value Proposition) 放在首屏，確保用戶能在第一時間捕捉到關鍵訊息。'
          }
        ]
      },
      {
        title: 'C. 視覺與 RWD 設計 (Visual & RWD Execution)',
        items: [
          {
            subtitle: 'Design System 的應用',
            description: '決策依據： 我們從 Design System 中提取核心的設計語言（顏色、字體、按鈕樣式）並應用於官網，確保其專業度與 APP 的科技感一致。\n\n視覺展示： 色彩、間距和排版均嚴格遵循品牌規範，體現高度一致性。'
          },
          {
            subtitle: '響應式網頁設計 (RWD) 規劃',
            description: '核心亮點： 呈現首頁與內頁在 桌面版 (Desktop)、平板版 (Tablet) 和 手機版 (Mobile) 三個斷點上的最佳化體驗。\n\n決策依據： 針對不同裝置調整佈局，例如在手機端將導航列轉為漢堡選單、優化多欄區塊為單欄堆疊，並調整圖片與字體大小，以保持載入速度與閱讀體驗。'
          }
        ]
      },
      {
        title: 'D. 協作與交付 (Collaboration & Delivery)',
        items: [
          {
            subtitle: '工程交付規範',
            description: '使用 Zeplin/Figma 交付不同斷點 (RWD) 的設計規範，確保前端工程師在開發過程中能精準還原每個尺寸的設計細節。'
          },
          {
            subtitle: '跨部門合作',
            description: '與行銷/業務團隊密切協作，確保官網的文案和視覺能有效地支撐商業推廣需求，轉化潛在客戶。'
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
      'https://picsum.photos/id/6/1200/800',
      'https://picsum.photos/id/48/1200/800',
      'https://picsum.photos/id/119/1200/800'
    ]
  },
  {
    id: 'smart-life-management',
    title: '智生活管理系統',
    category: '網站設計',
    tags: ['介面視覺設計', '元件庫', '設計系統'],
    thumbnail: 'https://picsum.photos/id/60/800/600',
    description: '專為物業管理設計的高效後台，透過清晰的數據儀表板與直覺的操作流程，大幅提升社區事務處理效率。優化了大量數據的表格呈現，減少管理人員的視覺疲勞。',
    client: 'Smart Daily',
    year: '2019',
    role: 'UI Designer',
    overview: '此系統協助物業經理處理住戶數據、財務報表與設施設備管理，強調資訊的清晰度與操作效率。',
    process: {
      problem: '後台數據量龐大，表格呈現不易閱讀。',
      research: '觀察物管人員的操作習慣，發現他們常需多視窗切換。',
      wireframing: '設計了儀表板 (Dashboard) 總覽，讓關鍵數據一目了然。',
      final: '優化了表格與表單的視覺層級，減少視覺疲勞，並規範了後台元件庫。'
    },
    gallery: [
      'https://picsum.photos/id/3/1200/800',
      'https://picsum.photos/id/4/1200/800'
    ]
  },
  {
    id: 'ev-car-share',
    title: '電動車汽車共享服務 APP/車載系統 UX 設計',
    category: 'App UI/UX',
    tags: ['資訊架構', '使用者流程', '線框圖', '介面視覺設計', '互動原型', '元件庫', '設計系統', '設計體驗'],
    thumbnail: 'https://picsum.photos/id/111/800/600',
    description: '結合即時地圖與電量監控的共享租賃服務，解決里程焦慮，提供從找車、解鎖到還車的無縫綠能移動體驗。設計重點在於降低使用門檻，讓租車過程像使用自家車輛一樣自然。',
    client: 'EV Share',
    year: '2017',
    role: 'Product Designer',
    overview: '電動車汽車共享APP 資訊架構、單元功能規劃、使用者操作流程與Wireframe設計、高擬真使用者介面設計。\n\n電動車汽車共享監控管理網站功能規劃、Wireframe繪製、高擬真使用者介面設計。',
    process: {
      problem: '使用者對於電動車的續航力與充電站位置感到焦慮。',
      research: '實地測試租車流程，發現地圖定位精準度與電量顯示是關鍵。',
      wireframing: '將地圖作為核心介面，即時顯示車輛電量與可行駛距離。',
      final: '設計了直覺的車輛解鎖與還車引導動畫，降低使用門檻。'
    },
    detailedCaseStudy: [
      {
        title: 'A. 問題與挑戰定義 (Challenge & Safety Focus)',
        items: [
          {
            subtitle: '商業挑戰與使用者痛點',
            description: '商業挑戰： 在競爭激烈的共享市場中，設計出最快速、最直覺的預約取車流程。\n\n使用者痛點： 用戶擔心找不到車、取車流程繁瑣，以及在車載介面操作時的分心風險。\n\n核心目標： 優化「地圖導航與車輛預約」、「無縫取還車流程」、以及「安全且簡化的車載介面」。'
          }
        ]
      },
      {
        title: 'B. 跨裝置使用者旅程分析 (Cross-Platform User Journey)',
        items: [
          {
            subtitle: '定義 O2O 流程與關鍵節點',
            description: '完整梳理從線上預約 → 導航尋找車輛 → APP 開鎖/取車 → 車載系統駕駛 → APP 歸還/結算。重點標註 APP 與車載介面 (HMI) 之間的轉換點。\n\n決策依據： 透過流程簡化，減少用戶在「戶外環境」和「即將駕駛前」的等待和操作時間。'
          }
        ]
      },
      {
        title: 'C. APP 設計優化：預約與尋車 (App Design Focus)',
        items: [
          {
            subtitle: '地圖與車輛預約介面',
            description: '應用「數據驅動的視覺設計」，優化資訊層次 (顏色、圖標區分電量和車型)，讓用戶能迅速看到周圍可用車輛、電量與預計距離。'
          },
          {
            subtitle: '取車流程 UX (Critical Step)',
            description: '設計 APP 內的「啟動取車」流程 (身份驗證、車輛檢查、電子解鎖)。強調操作的清晰度、大觸控區域和容錯機制。'
          }
        ]
      },
      {
        title: 'D. 車載介面設計：安全與簡化 (In-Car HMI/System Design)',
        items: [
          {
            subtitle: '介面減法原則',
            description: '將複雜功能（導航、媒體、車況）極度簡化，只保留駕駛時最必要的資訊，降低分心風險。設計強調高對比度、大字體、語音/觸控熱區。'
          },
          {
            subtitle: 'Design System 延伸應用',
            description: '確保車載介面與 APP Design System 保持視覺一致性，避免用戶在不同裝置間切換時產生認知負擔。'
          },
          {
            subtitle: '專案總結 (Project Summary)',
            description: '電動車共享案例總結： 雖然是虛擬專案，但在跨平台整合、用戶旅程設計以及將複雜系統簡化為直覺體驗上的打下深厚功力。這是一個高附加值的案例，為我在注重產品生態系統和用戶體驗上建立非常有幫助的基礎。'
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
      'https://picsum.photos/id/183/1200/800',
      'https://picsum.photos/id/192/1200/800'
    ]
  },
  {
    id: 'saba-sport',
    title: 'Saba Sport',
    category: 'App UI/UX',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統'],
    thumbnail: 'https://picsum.photos/id/96/800/600',
    description: '專業的體育賽事數據平台，將龐大的賽況資訊轉化為易讀的視覺介面，提供即時比分與精準的賠率分析。運用色彩系統區分賽事狀態，幫助使用者在毫秒間做出判斷。',
    client: 'Saba Sports',
    year: '2021',
    role: 'UI Designer',
    overview: 'Saba Sport 提供海量的體育賽事數據，我們專注於將這些數據轉化為易讀的視覺圖表。',
    process: {
      problem: '如何在手機上呈現複雜的賽事賠率與即時比分？',
      research: '研究了多款競品，發現資訊密度過高容易導致疲勞。',
      wireframing: '採用模組化卡片設計，讓使用者可自定義關注的賽事。',
      final: '運用鮮明的色彩區分不同賽事狀態（進行中、已結束），提升資訊辨識度。'
    },
    gallery: [
      'https://picsum.photos/id/314/1200/800',
      'https://picsum.photos/id/338/1200/800'
    ]
  },
  {
    id: 'gaming-admin-system',
    title: '博弈控端管理系統',
    category: '網站設計',
    tags: ['介面視覺設計', '互動原型', '元件庫', '設計系統'],
    thumbnail: 'https://picsum.photos/id/20/800/600',
    description: '高度安全且穩定的風險控管後台，具備即時監控與異常警示功能，確保營運端能精確掌握每一筆交易動態。深色模式設計減輕了長時間監控的視覺負擔，並強化了數據可讀性。',
    client: 'Gaming Tech',
    year: '2020',
    role: 'UI Designer',
    overview: '這是一個功能強大的後台系統，用於監控遊戲運行狀態與風險管理，介面設計強調專業與穩定感。',
    process: {
      problem: '需要即時監控大量數據流，且不可有誤操作空間。',
      research: '深入了解風控人員的操作流程與監控需求。',
      wireframing: '設計了深色模式的儀表板，適合長時間監控使用。',
      final: '建立了嚴謹的警示系統視覺規範，確保異常狀況能被第一時間發現。'
    },
    gallery: [
      'https://picsum.photos/id/512/1200/800',
      'https://picsum.photos/id/534/1200/800'
    ]
  }
];