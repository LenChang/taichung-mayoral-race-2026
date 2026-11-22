// 江啟臣 能力評分資料（2022–2026）
// 評等為作者依公開新聞與官方資料所做的主觀評估，分 A / B / C / D 四級。
// 每項都列出加分 (+) 與扣分 (−) 依據、執政黨時勢影響 (party)，以及來源連結。
// party.effect：順風 / 逆風 / 雙向 / 中性（只說明處境，不改變評等）
window.CANDIDATES = window.CANDIDATES || {};
window.CANDIDATES.jiang = {
  id: "jiang",
  partyCode: "KMT",
  name: "江啟臣",
  portrait: "images/jiang.jpg",
  avatar: "images/jiang-face.jpg",
  courtesyName: "台中・豐原",
  title: "國民黨 台中市長參選人（3 號）",
  currentRole: "立法院副院長（2024–）",
  period: "2022 – 2026",
  faction: "中國國民黨",
  lastUpdated: "2026-11-17",

  stats: [
    {
      key: "integrity",
      label: "誠信",
      sub: "言行一致 / 承諾兌現",
      grade: "C",
      party: {
        effect: "逆風",
        note: "2024 起藍白掌握國會多數，副院長的每一票都可能左右表決，黨的壓力使「中立」更難維持；但何時投票、何時缺席仍是個人選擇，時勢不改變評等。",
      },
      pros: [
        "2018 初選以 0.6% 差距落敗，接受結果並出任盧秀燕競選總幹事",
        "2026 初選前承諾「君子之爭」，結果出爐後即致電楊瓊瓔，雙方說到做到",
      ],
      cons: [
        "「議事中立」標準不一：2024 以副院長身分投票助年金復議案、職權行使法覆議；2026 卻以中立為由缺席國防特別條例表決",
        "競選期間以副院長中立為由拒絕就多項市政議題表態，遭批選擇性適用",
        "2021 任黨主席時國民黨稱連署附身分證影本「侵犯人權」，2024 卻主持敲槌通過同類《選罷法》修正",
        "2021 批政府擋疫苗為「封建戲碼」，2026 慈濟疫苗詐騙案起訴後未正面回應道歉要求",
      ],
      sources: [
        "https://polipoli.cc/politician/%E6%B1%9F%E5%95%9F%E8%87%A3/",
        "https://watchout.tw/reports/io6adt7KOalPP4Aj5rAM",
        "https://udn.com/news/story/124652/9879918",
      ],
    },
    {
      key: "execution",
      label: "執行率",
      sub: "政見 / 地方建設落實",
      grade: "B",
      party: {
        effect: "雙向",
        note: "逆風：中央八年皆為民進黨，江始終是中央在野黨，經費需跨黨爭取（東豐快經費於 2024 由民進黨政府核定）。順風：台中市府 2018 年底起為同黨盧秀燕，地方建設推動順暢，但功勞須與市府分享。東豐快延宕起因是 2018 年法院撤銷環評，不能全算在個人身上。",
      },
      pros: [
        "東豐快：盧秀燕稱其為「靈魂人物」，協調中央約 110 億元補助，減輕市府約 2/3 負擔；第 3 標 2026/8 合龍、第 2 標 2026/9 開工",
        "豐原國民暨兒童運動中心 2024/10 完工、2025/9 啟用（2024 立委政見項目）",
        "國道 4 號豐潭段、豐富專案（亞大附醫豐原分院）等山城建設持續推進",
      ],
      cons: [
        "2024 政見期限多數延後：東豐快東勢—石岡段 2025→2026、全線 2027→2029；運動中心 2024 啟用→2025",
        "建設主體為市府與中央，個人貢獻缺乏可逐筆驗證的公文 / 預算證據",
        "2025/1 主持總預算表決亂象：預算被重複刪減至負數、表決後才拿到提案",
      ],
      sources: [
        "https://true-far.tw/policies/chiang-chi-chen-2024-02-dongfeng-expressway/",
        "https://true-far.tw/policies/chiang-chi-chen-2024-05-fengyuan-sports-center/",
        "https://udn.com/news/story/7325/9743792",
        "https://www.storm.mg/article/11155911",
      ],
    },
    {
      key: "coordination",
      label: "整合",
      sub: "黨內 / 跨黨協調",
      grade: "B",
      party: {
        effect: "逆風",
        note: "2024 後形成「民進黨行政院 vs. 藍白國會」的分立政府，朝野對立為近年最嚴重，副院長的協調空間受到壓縮；黨內整合則因台中為國民黨執政，資源與動員相對集中。",
      },
      pros: [
        "初選後完成整合：楊瓊瓔出任競總首席副主委、盧秀燕任主委，三人同台",
        "與多位藍營議員成立聯合競總，山海屯城皆有組織動員",
        "東豐快開工典禮與何欣純、盧秀燕同台，強調「各方放下歧見」爭取中央經費",
      ],
      cons: [
        "2026/1 黨中央首次協調破局，「姊弟之爭」延燒 4 個多月引發基層焦慮",
        "公督盟第 11 屆第 4 會期以「未能發揮襄助調和之責」扣副院長 2 分（總預算一毛未審）",
        "2020 黨主席任內黃復興黨部片面開除于北辰，自承「窩囊、失職」",
      ],
      sources: [
        "https://udn.com/news/story/124652/9415067",
        "https://news.tvbs.com.tw/politics/3103324",
        "https://ccw.org.tw/news/20260417",
        "https://www.cna.com.tw/news/aloc/202609090284.aspx",
      ],
    },
    {
      key: "clean",
      label: "廉潔",
      sub: "財務透明 / 利益迴避",
      grade: "C",
      party: {
        effect: "中性",
        note: "國民黨團自 2021 年起以黨團決議限制黨籍立委揭露助理聘用與兼職資訊，屬黨的集體決定；但立委本人仍可自主公開而沒有公開，執政黨背景無法解釋這一點。",
      },
      pros: [
        "查無涉貪、起訴或司法調查紀錄",
        "依法申報財產（2026/3 公報總額約 3,067 萬元），應信託財產已交付臺灣銀行信託",
        "2025 罷免案以 67.26% 不同意票未通過",
      ],
      cons: [
        "國民黨團決議下未自主揭露公費助理聘用、兼職等利益衝突資訊，被公督盟點名為「黑箱」參選人",
        "配偶投資 6 家建設 / 開發公司共 2,925 萬元（岳父為建商），涉及土地、都更的利益迴避受關注",
        "2023 遭對手質疑其基金會與建設公司同址；政治獻金含多筆建設、營造業捐款（依法收受）",
        "2024 立委選舉競選幹部李光國等 3 人辦餐會宴請環保志工，賄選判刑確定（緩刑）；本人經檢方不起訴，當選無效之訴二審駁回確定",
      ],
      sources: [
        "https://video.ltn.com.tw/article/reBZKYJL8bM/PLI7xntdRxhw1gDu9DJwSWvhyraLk-de62",
        "https://www.judicial.gov.tw/tw/cp-1888-1345101-2d9ca-1.html",
        "https://www.cna.com.tw/news/asoc/202501170262.aspx",
        "https://news.nextapple.com/politics/20260319/4081803788B791BBBAC923CB8FCC3E1A",
        "https://www.cna.com.tw/news/aipl/202311280152.aspx",
        "https://www.comptw.com/political-donations/recipient/%E6%B1%9F%E5%95%9F%E8%87%A3",
      ],
    },
    {
      key: "vision",
      label: "智略",
      sub: "（其他）政策論述 / 學識",
      grade: "A",
      party: {
        effect: "中性",
        note: "學經歷與政策論述能力與執政黨無關。政見以「延續盧秀燕、升級旗艦城」為主軸，受同黨市府既有成果框定。",
      },
      pros: [
        "美國南卡羅萊納大學國際關係博士，前東吳政治系副教授、新聞局長",
        "提出完整政見藍圖：捷運藍線 8 年完工、20 分鐘生活圈、機器人製造之都、銀髮十大政策等",
        "強調專業政見「先諮詢專家、不亂開支票」，曾任國民黨主席、黨團總召",
      ],
      cons: [
        "市民公車免費、疫苗補助等財源與執行細節仍待補充（遠見專訪指出）",
        "長期在中央政壇，缺乏地方行政首長經驗",
      ],
      sources: [
        "https://knowledge.kmt.org.tw/articles/2d6c9b37-4e15-45fb-baf9-5eaef48baa44/",
        "https://www.gvm.com.tw/article/134433",
        "https://www.chinatimes.com/newspapers/20261019000540-260107",
      ],
    },
    {
      key: "popularity",
      label: "民望",
      sub: "（其他）民調 / 支持度",
      grade: "B",
      party: {
        effect: "順風",
        note: "同黨市長盧秀燕施政滿意度 53.9%（2026/8），延續執政的光環加持前期民調；但選前一個月「換黨做做看」的聲音上升，順風正在減弱。",
      },
      pros: [
        "2026 年 1–9 月所有公開民調皆領先，幅度 7–22 個百分點（TVBS、艾普羅、ETtoday 等）",
        "知名度與「當選看好度」仍明顯較高：世新 11 月 45.1% vs 24.2%、信民 39.7% vs 25.4%",
        "副院長職務滿意度 45.5%、不滿意 26.6%（新台灣國策智庫，2026/8）",
      ],
      cons: [
        "10 月起差距明顯收斂：信民協會 10 月底民調首度落後 10.7 個百分點，PollTrack 加權平均僅領先 0.4（11/16）",
        "同份民調中「換民進黨做做看」43.3% 高於「國民黨繼續做」25.5%，執政延續的光環減弱",
        "近期領先較大的幾份多為國民黨市議會黨團委託，需打折看待",
      ],
      sources: [
        "https://polltrack.tw/2026/local-elections/polls/taichung-mayor",
        "https://www.cna.com.tw/news/aloc/202611030107.aspx",
        "https://news.ltn.com.tw/news/politics/breakingnews/5634465",
        "https://www.storm.mg/article/11157321",
      ],
    },
  ],

  eraTrack: {
    label: "江啟臣",
    segments: [
      { from: 2018, to: 2020, party: "KMT", text: "立委・黨團總召" },
      { from: 2020, to: 2021, party: "KMT", text: "黨主席" },
      { from: 2021, to: 2024, party: "KMT", text: "立委" },
      { from: 2024, to: 2026, party: "KMT", text: "副院長" },
    ],
  },

  eraSummary: [
    "中央八年都是民進黨執政，江啟臣始終屬於中央的在野黨：要替選區爭取中央經費只能跨黨協調，因此東豐快約 110 億元補助在執行率上算加分。",
    "台中市府同期由同黨的盧秀燕執政，地方建設推動相對順利，但成果主體是市府，個人貢獻要打折。",
    "2024 年起藍白掌握國會、行政院仍是民進黨，副院長權力與壓力同時變大，誠信與整合兩項的爭議幾乎都發生在這段期間。",
  ],

  eraSources: [
    "https://udn.com/news/story/7325/9743792",
    "https://ccw.org.tw/news/20251021-press-release",
  ],

  // 三國志風「特技」
  skills: [
    { name: "學者", desc: "國關博士出身，論述與國際視野見長" },
    { name: "爭餉", desc: "向中央爭取東豐快約 110 億元經費" },
    { name: "樁腳", desc: "2024 年競選幹部辦餐會賄選判刑確定；本人不起訴、當選有效確定（負面特技）" },
    { name: "守中", desc: "以「議事中立」自處，但標準屢遭質疑（負面特技）" },
  ],

};
