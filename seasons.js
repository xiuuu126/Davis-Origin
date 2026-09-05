/* ============================================================
   Davis Origin · 分赛季数据
   ------------------------------------------------------------
   主页、roster.html、matches.html、history.html 都从这份数据
   渲染，改这一个文件，几个页面会一起更新。

   结构说明（每个赛季一个对象）：
   - id / label：赛季标识，比如 "25-26" / "25-26 赛季"
   - current：true 表示"当前赛季"——主页、roster.html、
     matches.html 只显示这一个赛季的内容（不再有赛季切换）
   - placeholder：true 表示这个赛季的球员名单、逐场比赛还没整理，
     页面会显示"整理中"；但 highlights 里已经知道的内容（比如
     拿了个冠军）照样会显示，不受这个影响
   - highlights：几句话概括这个赛季，主页/过往经历里都会用
   - roster：按 gk/def/mid/fwd 分组的球员名字数组
   - matches.league / matches.cup / matches.friendly：三大板块
     （北加联常规赛 / 杯赛 / 友谊赛），每个板块下面是具体比赛数组；
     如果暂时没有逐场比分，可以用 note 写一句话代替（比如"打了
     贺岁杯，但没有正式比分记录"）

   加一个新赛季：复制其中一段 { ... }，塞到 seasons 数组最前面，
   把旧赛季的 current: true 删掉、挪到新赛季上。
   过往经历页（history.html）会显示全部赛季（不管 current 是谁）。
   ============================================================ */
window.SEASON_DATA = {
  seasons: [
    {
      id: "26-27",
      label: "26-27 赛季",
      current: true,
      placeholder: true,
      lede: "新赛季刚开始，训练已经启动，比赛安排还在整理中。",
      highlights: [
        "2026 秋季学期训练已经开始，新赛季整装待发"
      ],
      roster: { gk: [], def: [], mid: [], fwd: [] },
      matches: {
        league:   { label: "北加联", matches: [] },
        cup:      { label: "杯赛",   matches: [] },
        friendly: { label: "友谊赛", matches: [] }
      }
    },
    {
      id: "25-26",
      label: "25-26 赛季",
      current: false,
      lede: "2026 五月 · 北加联赛季圆满收官。Fight on.",
      highlights: [
        "共 55 名学生与校友球员，覆盖一队与预备队",
        "1 月北美湾区贺岁杯、3 月加州华人大学生足球校际杯、5 月北加联，三线出战",
        "校际杯一队小组赛 1 胜 2 平，最终一队第四、预备队第六",
        "5 月 23 日 3:1 击败 EBU Rangers，死亡之组顽强挺过，正式赛季收官",
        "预备队建队两年最好成绩：13 场 1 胜 2 平"
      ],
      roster: {
        gk:  ["冯楚明","相铮","熊翰川"],
        def: ["蔡毅诚","柴泓旭","葛孟宇","何嘉伦","吉芸莹","李静诚","李金宇","李明达","李润泽","黎元其","刘富行","刘效尔","刘彦君","刘籽珅","马俊宇","马雨辰","潘颢文","王钧","王彦沛","夏梓宸","杨乐成","叶奕承","张宏毅","赵天钰"],
        mid: ["Attila","曹震旦","Frank Zhu","黄溆子","金圣博","刘铠泽","刘明硕","卢嘉玉","陆子涵","罗宇航","欧阳川","盛天成","史皓元","孙楚越","张铭源","赵乐涵","Zoli"],
        fwd: ["杜康松","刘奕","刘子云","史佳驰","王俊皓","王亚珩","温子铭","尹鸣赫","于霆访","周元中","朱超凡"]
      },
      matches: {
        league: {
          label: "北加联",
          matches: [
            { date:"May 10", time:"19:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Jinyue",       davis:false, winner:false}, score:"1 : 1", result:"draw" },
            { date:"May 16", time:"10:00", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"HeHe FC",      davis:false, winner:true},  score:"0 : 2", result:"loss" },
            { date:"May 16", time:"18:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Flying Horse", davis:false, winner:false}, score:"2 : 2", result:"draw" },
            { date:"May 17", time:"11:35", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"SF United",    davis:false, winner:true},  score:"1 : 6", result:"loss" },
            { date:"May 17", time:"18:35", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Z4",           davis:false, winner:true},  score:"0 : 3", result:"loss" },
            { date:"May 23", time:"14:30", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:true},  team2:{name:"EBU Rangers",  davis:false, winner:false}, score:"3 : 1", result:"win" },
            { date:"May 24", time:"13:20", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"GSF",          davis:false, winner:true},  score:"1 : 2", result:"loss" }
          ]
        },
        cup: {
          label: "杯赛",
          matches: [],
          note: "1 月 16 日北美湾区贺岁杯：一队遭遇 Hunter / South Bay，预备队迎战 SF United；3 月 20–23 日加州华人大学生足球校际杯（尔湾）：一队小组赛 1 胜 2 平，力克 USC，战平 UCLA、UCSD，最终一队第四、预备队第六。这两项赛事暂时没有整理出逐场比分，先记一笔，比分补齐后会换成完整的比赛列表。"
        },
        friendly: {
          label: "友谊赛",
          matches: [],
          note: "赛季外还有不定期的野球局，暂时没有正式记录。"
        }
      }
    },
    {
      id: "24-25",
      label: "24-25 赛季",
      current: false,
      placeholder: true,
      lede: "预备队建队、走上更大舞台的一年。",
      highlights: [
        "预备队建队，让更多队员踢上比赛、找到适合自己的踢球环境",
        "华体会 2025 · 亚军"
      ],
      roster: { gk: [], def: [], mid: [], fwd: [] },
      matches: {
        league:   { label: "北加联", matches: [] },
        cup:      { label: "杯赛",   matches: [], note: "华体会 2025 亚军——具体逐场比分还没整理。" },
        friendly: { label: "友谊赛", matches: [] }
      }
    },
    {
      id: "23-24",
      label: "23-24 赛季",
      current: false,
      placeholder: true,
      lede: "人员凋敝到真正崛起的一年。",
      highlights: [
        "人员凋敝，阵容单薄，第一次南下出征，每个人都在坚持",
        "北加联 2024 · 冠军——真正意义上的崛起"
      ],
      roster: { gk: [], def: [], mid: [], fwd: [] },
      matches: {
        league:   { label: "北加联", matches: [], note: "2024 年北加联冠军赛季——具体逐场比分还没整理。" },
        cup:      { label: "杯赛",   matches: [] },
        friendly: { label: "友谊赛", matches: [] }
      }
    }
  ]
};
