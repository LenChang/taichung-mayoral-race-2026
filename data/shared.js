window.SHARED = {
  lastUpdated: "2026-11-17",
  electionDate: "2026-11-28",
  order: ["jiang", "ho"],

  eraTracks: [
    {
      label: "中央政府",
      segments: [
        { from: 2018, to: 2020, party: "DPP", text: "蔡英文（一任）" },
        { from: 2020, to: 2024, party: "DPP", text: "蔡英文（二任）" },
        { from: 2024, to: 2026, party: "DPP", text: "賴清德" },
      ],
    },
    {
      label: "立法院多數",
      segments: [
        { from: 2018, to: 2024, party: "DPP", text: "民進黨過半" },
        { from: 2024, to: 2026, party: "KMT", text: "藍白過半" },
      ],
    },
    {
      label: "台中市府",
      segments: [
        { from: 2018, to: 2022, party: "KMT", text: "盧秀燕（一任）" },
        { from: 2022, to: 2026, party: "KMT", text: "盧秀燕（二任）" },
      ],
    },
  ],

  benchmarkRule: "比較對象只取縣市首長（目標職位）與立委（兩人現職），不含總統。A 的門檻：曾經完整維持一任（4 年）的表現即可，表中附註該期間。",

  benchmarks: {
    integrity: {
      intro: "誠信 A 不等於「沒爭議」或「政績好」，而是：公開許下的承諾，在要付出代價的時候仍然兌現。只就「誠信」一項舉例，不代表其他五項的評價。",
      columns: ["承諾／立場", "兌現時付出的代價"],
      rubric: [
        { grade: "A", text: "有可查證的承諾或立場，在付出明確代價（放棄更高職位、違反黨意被罰、失去席位）時仍照做。" },
        { grade: "B", text: "承諾大致兌現，但遇到壓力時留有退路或模糊空間。" },
        { grade: "C", text: "同一件事因場合或身分不同而標準不一，或對爭議不正面說明。" },
        { grade: "D", text: "公開推翻自己的承諾，或被證實說謊。" },
      ],
      subjects: {
        jiang: {
          what: "以「議事中立」作為副院長的行事原則",
          evidence: "沒有付出代價：對自己有利的表決就投票，有爭議時才以中立為由缺席",
          caveat: "這就是 C 與 A 的差距：原則只在方便時適用",
        },
        ho: {
          what: "主張「罷免是人民權利也是義務」",
          evidence: "沒有付出代價：輪到自己被罷免時，改口質疑罷免「能否代表民意」",
          caveat: "這就是 C 與 A 的差距：同一原則對己對人兩套標準",
        },
      },
      people: [
        {
          group: "mayor",
          name: "盧秀燕",
          partyCode: "KMT",
          role: "台中市長",
          period: "2018–2026",
          what: "對市民承諾市長任期「做好做滿」",
          evidence: "2023 總統、2025 黨主席兩度被勸進都不參選，放棄更高職位",
          caveat: "對 2028 卸任後是否參選總統仍不說死，A 只針對市長任期承諾",
          sources: [
            "https://www.chinatimes.com/realtimenews/20251224002913-260407",
            "https://news.tvbs.com.tw/politics/2978536",
            "https://www.cna.com.tw/news/aipl/202603190015.aspx",
          ],
        },
        {
          group: "legislator",
          name: "林淑芬",
          partyCode: "DPP",
          role: "民進黨立委",
          period: "2016–2020（第九屆）",
          what: "長年堅持勞工權益，反對刪除 7 天國定假日",
          evidence: "2016 執政黨修勞基法時拒絕依黨團決議表決，面臨黨紀罰款與黨內指責",
          caveat: "以缺席而非投反對票表態；2025 年被公督盟點名主提案掛零（屬執行面，不影響誠信）",
          sources: [
            "https://www.thenewslens.com/article/56165",
            "https://www.cna.com.tw/news/aipl/201612020126.aspx",
            "https://www.storm.mg/article/191075",
          ],
        },
      ],
      blank: {
        mayor: { text: "民進黨、民眾黨暫留白：找不到夠扎實的例子。" },
        legislator: {
          text: "國民黨暫留白。民眾黨：黃國昌如期遵守不分區「兩年條款」，柯文哲勸留仍於 2026/2/1 辭職，但任期只有兩年（2024–2026）、未滿一任，依本表標準不列 A。",
          sources: ["https://www.cna.com.tw/news/aipl/202601050135.aspx"],
        },
      },
    },

    execution: {
      intro: "執行率 A 是：主要政見在任內如期完成，而且有政府公告或第三方查核可以驗證，不是只看本人新聞稿。",
      columns: ["政見／建設", "完成情形"],
      rubric: [
        { grade: "A", text: "主要政見如期完成，並有政府公告或第三方查核可驗證。" },
        { grade: "B", text: "有實際成果，但期程延後，或成果難與市府、中央區分。" },
        { grade: "C", text: "多數政見延宕，或只停留在規劃。" },
        { grade: "D", text: "主要政見放棄或毫無進度。" },
      ],
      subjects: {
        jiang: {
          what: "東豐快爭取約 110 億元中央補助；豐原運動中心完工",
          evidence: "東豐快全線期程 2027→2029、運動中心延後一年啟用",
          caveat: "這就是 B 與 A 的差距：有成果，但沒有如期",
        },
        ho: {
          what: "台 74 線三處匝道通車；捷運橘線可行性研究獲核定",
          evidence: "政績數字多來自本人官網，與行政院的貢獻難以區分；力推的捷運藍線仍未動工",
          caveat: "這就是 B 與 A 的差距：缺少第三方可驗證的個人成果",
        },
      },
      people: [
        {
          group: "mayor",
          name: "陳其邁",
          partyCode: "DPP",
          role: "高雄市長",
          period: "2022–2026",
          what: "2022 政見「推動高雄輕軌成圓」",
          evidence: "2024/1/1 環狀輕軌全線通車（22.1 公里、38 站），政見查核網站列為「已交付・達標」",
          caveat: "2013 年動工、跨三任市長，中段曾在韓市府時期停擺；A 是指他任內完成最後一段的溝通與通車",
          sources: [
            "https://true-far.tw/policies/chen-chi-mai-light-rail-circle/",
            "https://www.chinatimes.com/realtimenews/20240101003086-260407",
            "https://takao.kcg.gov.tw/article/1135",
          ],
        },
      ],
      blank: {
        mayor: {
          text: "國民黨、民眾黨暫留白：找到的例子（如新北「三環三線」）期程都有延後，例如三鶯線原訂 2023 年、2026 年才通車，不夠格當 A 的標竿。",
          sources: [
            "https://www.ntpc.gov.tw/ch/home.jsp?dataserno=d989954c70c8aa659be915c6024118df&id=e8ca970cde5c00e1",
            "https://www.ntpc.gov.tw/ch/home.jsp?dataserno=c13da12f28c745fba3f0ca1114aff64e&id=e8ca970cde5c00e1",
          ],
        },
        legislator: { text: "暫留白：立委不直接執行建設，成果多與行政部門共享，找不到可第三方驗證的個人例子。" },
      },
    },

    coordination: {
      intro: "整合 A 是：在競爭或衝突之後，能讓對手真心合作，並在關鍵時刻撐住團隊或跨黨局面。",
      columns: ["整合場合", "怎麼整合"],
      rubric: [
        { grade: "A", text: "競爭或衝突後讓對手真心合作，關鍵時刻撐住團隊或跨黨局面。" },
        { grade: "B", text: "最後完成整合，但過程拖延或留下裂痕。" },
        { grade: "C", text: "整合失敗，或只能靠上層強壓。" },
        { grade: "D", text: "造成分裂。" },
      ],
      subjects: {
        jiang: {
          what: "2026 黨內初選後與楊瓊瓔、盧秀燕同台",
          evidence: "黨中央首次協調破局，「姊弟之爭」延燒 4 個多月；副院長任內被公督盟扣「未能襄助調和」",
          caveat: "這就是 B 與 A 的差距：最後有整合，但拖得太久",
        },
        ho: {
          what: "新潮流、英系、正國會三大派系進入競總核心，蔡其昌任主委",
          evidence: "被評為近幾屆台中綠營最團結的一次",
          caveat: "已是 A；但整合主要由黨中央與總統主導，個人貢獻較難單獨評估",
        },
      },
      people: [
        {
          group: "legislator",
          name: "王金平",
          partyCode: "KMT",
          role: "立委・立法院長",
          period: "1999–2016",
          what: "17 年立法院長，主持朝野黨團協商",
          evidence: "2000 年核四停建風暴居中調解；民進黨執政 8 年間仍被稱為「藍綠通吃」",
          caveat: "協商不公開，被批「密室政治」，2013 年捲入關說案；A 只針對整合，不代表誠信、廉潔",
          sources: [
            "https://www.thenewslens.com/article/35569",
            "https://www.chinatimes.com/newspapers/20140201000183-260109",
            "https://www.storm.mg/article/189163",
          ],
        },
      ],
      blank: {
        mayor: { text: "暫留白：找不到夠扎實的例子。" },
        legislator: { text: "民進黨、民眾黨暫留白：找不到夠扎實的例子。" },
      },
    },

    clean: {
      intro: "廉潔 A 不只是「沒被起訴」，而是：主動公開財產申報以外的利益衝突資訊（助理、兼職、家人事業），被質疑時正面說明。",
      columns: ["透明度作為", "可查證的紀錄"],
      rubric: [
        { grade: "A", text: "本人無涉案，且主動公開助理聘用、兼職等利益衝突資訊，被質疑時正面說明。" },
        { grade: "B", text: "無涉案、依法申報，但沒有主動揭露額外資訊。" },
        { grade: "C", text: "本人無涉案，但有未迴避的利益關係，或拒絕揭露資訊。" },
        { grade: "D", text: "本人涉貪，或遭起訴、判刑。" },
      ],
      subjects: {
        jiang: {
          what: "依法申報財產，應信託財產已交付信託",
          evidence: "未自主揭露公費助理、兼職資訊；配偶投資 6 家建設公司，涉土地、都更的迴避未說明",
          caveat: "這就是 C 與 A 的差距：只做到法定最低標準，該揭露的沒揭露",
        },
        ho: {
          what: "本人查無涉貪，依法申報財產",
          evidence: "配偶 2016 年標案行賄判刑；事務所判決後仍持續投公部門標案，當選後如何迴避未說明",
          caveat: "這就是 C 與 A 的差距：對家人利益衝突沒有正面說明",
        },
      },
      people: [
        {
          group: "legislator",
          name: "王婉諭",
          partyCode: "NPP",
          role: "時代力量立委",
          period: "2020–2024（第十屆）",
          what: "主動公開公費助理聘用等利益衝突資訊",
          evidence: "公督盟 2023 年統計，時代力量立委揭露率 100%；並提案要求民代助理名冊與薪資級距公開上網",
          caveat: "小黨立委，掌握的預算與權力較少，面對的利益誘惑也較少",
          sources: [
            "https://ccw.org.tw/news/20230719",
            "https://newtalk.tw/news/view/2022-03-30/731732",
            "https://news.ltn.com.tw/news/politics/breakingnews/5323113",
          ],
        },
      ],
      blank: {
        mayor: { text: "暫留白：找不到可逐一查證的例子。" },
        legislator: {
          text: "國民黨、民眾黨暫留白：本屆兩黨立委全數未自主揭露助理聘用資訊（公督盟 2026）。民進黨暫留白：多數立委有揭露，但沒有找到可逐一查證的個人案例。參考（未達 A）：高虹安（前民眾黨，2024 退黨）立委任內助理費案，二審撤銷貪污罪、改依使公務員登載不實罪判 6 月（得易科罰金），尚未確定。",
          sources: [
            "https://ccw.org.tw/news/20260417",
            "https://www.cna.com.tw/news/aipl/202512160065.aspx",
          ],
        },
      },
    },

    vision: {
      intro: "智略 A 是：具備專業學術訓練與中央決策經歷，政策論述有系統。這一項偏重學經歷，不等於政策一定正確。",
      columns: ["學識", "決策經歷"],
      rubric: [
        { grade: "A", text: "具專業學術訓練與中央決策經歷，政策論述有系統。" },
        { grade: "B", text: "經驗豐富、政見具體，但以選區項目為主，或財源規劃不足。" },
        { grade: "C", text: "政見多為口號，缺乏具體內容。" },
        { grade: "D", text: "沒有明確的政策主張。" },
      ],
      subjects: {
        jiang: {
          what: "美國南卡羅萊納大學國際關係博士，前大學副教授",
          evidence: "曾任新聞局長、國民黨主席；提出捷運藍線、20 分鐘生活圈等完整政見藍圖",
          caveat: "已是 A；部分政見的財源細節仍待補充",
        },
        ho: {
          what: "英國約克大學碩士，四屆立委",
          evidence: "29 區逐區列出政見；但捷運五線同時推，總經費與財源排序未說明",
          caveat: "這就是 B 與 A 的差距：政見具體，但缺少整體財源與優先順序",
        },
      },
      people: [
        {
          group: "mayor",
          name: "張善政",
          partyCode: "KMT",
          role: "桃園市長",
          period: "2022–2026",
          what: "美國康乃爾大學土木與環境工程博士",
          evidence: "上任前歷任科技部長、行政院長，曾任 Google 亞洲硬體營運總監，學界、產業、中央決策經歷兼備",
          caveat: "只看學經歷；本站未逐項評估他的市政政策品質",
          sources: [
            "https://www.ey.gov.tw/Page/4ED2F231892187F9/062b1317-8bdb-4710-b534-028ad8a99efd",
            "https://www.moi.gov.tw/LocalOfficial_Content.aspx?TYP=KND0004&_PARENT_ID=MYR11112HD0001&_TYP=MYR&n=578",
          ],
        },
        {
          group: "mayor",
          name: "林佳龍",
          partyCode: "DPP",
          role: "台中市長",
          period: "2014–2018",
          what: "美國耶魯大學政治學博士，創辦台灣智庫",
          evidence: "上任前曾任國安會諮詢委員、新聞局長、立委，具中央決策經歷",
          caveat: "只看學經歷；2018 爭取連任敗給盧秀燕",
          sources: [
            "https://www.cna.com.tw/news/aipl/202404250078.aspx",
            "https://politics.ntu.edu.tw/alumni/epaper/no23/no23_3.htm",
          ],
        },
      ],
      blank: {
        mayor: { text: "民眾黨暫留白：找不到夠扎實的例子。" },
        legislator: { text: "暫留白：找不到夠扎實的例子。" },
      },
    },

    popularity: {
      intro: "民望 A 是：在大型、非政黨委託的調查中名列前茅，連無特定政黨傾向的選民也滿意。",
      columns: ["調查", "成績"],
      rubric: [
        { grade: "A", text: "在大型、非政黨委託的調查中名列前茅，無黨派選民也滿意。" },
        { grade: "B", text: "支持度有起伏，或領先多來自政黨委託的民調。" },
        { grade: "C", text: "長期落後，或滿意度偏低。" },
        { grade: "D", text: "民調墊底且持續下滑。" },
      ],
      subjects: {
        jiang: {
          what: "2026 年 1–9 月所有公開民調皆領先",
          evidence: "10 月起差距收斂，PollTrack 加權平均僅領先 0.4；近期領先較大的多為國民黨市議會黨團委託",
          caveat: "這就是 B 與 A 的差距：領先在縮小，且依賴政黨委託民調",
        },
        ho: {
          what: "從年初落後 15–22 個百分點追到互有領先",
          evidence: "多數公開民調仍落後；領先的幾份多為綠營友好團體委託",
          caveat: "這就是 B 與 A 的差距：還沒在中立調查中穩定領先",
        },
      },
      people: [
        {
          group: "mayor",
          name: "翁章梁",
          partyCode: "DPP",
          role: "嘉義縣長",
          period: "2022–2026",
          what: "《天下》縣市長施政滿意度調查（約 1.5 萬份樣本）",
          evidence: "2022 年全國第二，2024–2026 連續三年全國第一",
          caveat: "非六都，縣市規模與議題複雜度和台中不同",
          sources: [
            "https://www.cw.com.tw/article/5142860",
            "https://www.cw.com.tw/article/5122827",
          ],
        },
        {
          group: "mayor",
          name: "侯友宜",
          partyCode: "KMT",
          role: "新北市長",
          period: "2018–2022（第一任）",
          what: "《天下》縣市長施政滿意度調查",
          evidence: "第一任每年都在全國前 10：2019 第 7、2020 第 2、2021 第 5、2022 第 9",
          caveat: "2023 參選總統期間跌到衝刺組，2026 回升為六都第一；民望會隨是否專注市政大幅波動",
          sources: [
            "https://news.tvbs.com.tw/politics/1198389",
            "https://www.nownews.com/news/5937072",
            "https://www.cw.com.tw/article/5142857",
          ],
        },
      ],
      blank: {
        mayor: {
          text: "民眾黨暫留白。參考（未達 A）：新竹市長高虹安（前民眾黨，2024 退黨、目前無黨籍）在《天下》2026 縣市長施政滿意度調查中全國最後（52.9 分）。",
          sources: ["https://udn.com/news/story/6656/9755889"],
        },
        legislator: { text: "暫留白：立委沒有像《天下》縣市長調查那樣跨選區可比的大型民調。" },
      },
    },
  },

  eraConclusion: [
    "兩人的處境剛好相反：江啟臣是「中央在野、地方執政」，何欣純是「中央執政、地方在野」。",
    "所以兩人的執行率都是「雙向」：一個靠跨黨爭取中央經費、成果與市府分享；一個靠同黨中央核定、成果與行政院分享。",
    "時勢可以解釋處境，但扣分的地方（標準不一致、不揭露資訊、配偶利益迴避）大多是個人選擇，所以兩人的評等都不因時勢調整，只另附說明。",
  ],

  verdict: [
    "兩人的綜合評等都是 B，差別在結構：江啟臣強在智略（A），何欣純強在整合（A）。",
    "兩人的誠信、廉潔都是 C：江啟臣被扣在「議事中立」標準不一與不揭露資訊；何欣純被扣在罷免標準不一與配偶標案行賄。",
    "民望兩人都是 B，但趨勢相反：江啟臣從大幅領先收斂到幾乎平手，何欣純則從大幅落後追到互有領先。",
  ],

  polls: [
    { date: "11/8–9", pollster: "未具名", sponsor: "民進黨委託", lean: "DPP", jiang: 35, ho: 40 },
    { date: "11/5–7", pollster: "世新大學", sponsor: "國民黨市議會黨團", lean: "KMT", jiang: 39.2, ho: 30.0 },
    { date: "10/29–31", pollster: "佛光大學", sponsor: "國民黨市議會黨團", lean: "KMT", jiang: 38, ho: 28 },
    { date: "10/28–30", pollster: "戴立安 / 畢肯", sponsor: "信民協會", lean: "DPP", jiang: 30.4, ho: 41.1 },
    { date: "10/15–16", pollster: "世新大學", sponsor: "國民黨市議會黨團", lean: "KMT", jiang: 40, ho: 29 },
    { date: "10/5–6", pollster: "循證民調", sponsor: "信賴台灣之友會", lean: "DPP", jiang: 34, ho: 32 },
    { date: "10/2–4", pollster: "年代民調", sponsor: "年代", lean: "", jiang: 37.3, ho: 31.3 },
    { date: "9/7–11", pollster: "TVBS", sponsor: "國民黨市議會黨團", lean: "KMT", jiang: 45, ho: 33 },
    { date: "8/3–5", pollster: "艾普羅", sponsor: "未知", lean: "", jiang: 38, ho: 24 },
    { date: "1/19–22", pollster: "TVBS", sponsor: "TVBS", lean: "", jiang: 46, ho: 31 },
  ],
  pollAverage: { date: "11/16", source: "PollTrack 加權平均", text: "江啟臣 +0.4" },
  pollSource: "https://polltrack.tw/2026/local-elections/polls/taichung-mayor",

  generalSources: [
    { label: "公民監督國會聯盟（公督盟）立委評鑑", url: "https://ccw.org.tw/assess" },
    { label: "國會在幹嘛（立委質詢、出席紀錄）", url: "https://openlawmaker.org/" },
    { label: "監察院 財產申報查詢", url: "https://priso.cy.gov.tw/" },
    { label: "財產申報開放觀測站", url: "https://cypriq.olc.tw/" },
    { label: "民調脆 PollTrack（台中市長民調彙整）", url: "https://polltrack.tw/2026/local-elections/polls/taichung-mayor" },
    { label: "中選會 2026 地方選舉", url: "https://web.cec.gov.tw/" },
  ],

  repoUrl: "https://github.com/LenChang/taichung-mayoral-race-2026",

  disclaimer:
    "本站評等為依公開報導之主觀整理，非任何機構正式評鑑；兩位候選人採用相同的六項標準，各項評等皆附加減分依據、執政時勢說明與來源，請讀者自行判斷。資料截至 2026-11-17。",
};
