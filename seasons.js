/* ============================================================
   Davis Origin · 分赛季数据
   ------------------------------------------------------------
   主页、roster.html、matches.html 三个页面都从这份数据渲染，
   改这一个文件，三个页面会一起更新——不用再分别去改 HTML。

   加一个新赛季：复制下面 seasons 数组里的一整段 { ... }，
   塞到数组最前面，把旧赛季的 current: true 删掉、挪到新赛季上。

   23-24 赛季目前是占位（placeholder: true），球员名单和比赛
   还没整理，先留着空的 roster / matchGroups。等内容整理好了，
   照着 24-25 赛季那段的格式填进去，把 placeholder: true 删掉即可。
   ============================================================ */
window.SEASON_DATA = {
  seasons: [
    {
      id: "24-25",
      label: "24-25 赛季",
      current: true,               // 当前赛季，主页默认展示这个
      lede: "2026 五月 · 北加联赛季正在进行中。Fight on.",
      record: { w: 1, d: 2, l: 4, upcoming: 0 },
      highlights: [                // 主页赛季卡片里的几句话，随便加减
        "共 55 名学生与校友球员，覆盖一队与预备队",
        "北加联常规赛：1 胜 2 平 4 负",
        "5 月 23 日北加州足联杯 3:1 击败 EBU Rangers，死亡之组顽强挺过"
      ],
      roster: {
        gk:  ["冯楚明","相铮","熊翰川"],
        def: ["蔡毅诚","柴泓旭","葛孟宇","何嘉伦","吉芸莹","李静诚","李金宇","李明达","李润泽","黎元其","刘富行","刘效尔","刘彦君","刘籽珅","马俊宇","马雨辰","潘颢文","王钧","王彦沛","夏梓宸","杨乐成","叶奕承","张宏毅","赵天钰"],
        mid: ["Attila","曹震旦","Frank Zhu","黄溆子","金圣博","刘铠泽","刘明硕","卢嘉玉","陆子涵","罗宇航","欧阳川","盛天成","史皓元","孙楚越","张铭源","赵乐涵","Zoli"],
        fwd: ["杜康松","刘奕","刘子云","史佳驰","王俊皓","王亚珩","温子铭","尹鸣赫","于霆访","周元中","朱超凡"]
      },
      matchGroups: [
        {
          title: "May 2026 · 北加联",
          matches: [
            { date:"May 10", time:"19:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Jinyue",       davis:false, winner:false}, score:"1 : 1", result:"draw" },
            { date:"May 16", time:"10:00", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"HeHe FC",      davis:false, winner:true},  score:"0 : 2", result:"loss" },
            { date:"May 16", time:"18:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Flying Horse", davis:false, winner:false}, score:"2 : 2", result:"draw" },
            { date:"May 17", time:"11:35", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"SF United",    davis:false, winner:true},  score:"1 : 6", result:"loss" },
            { date:"May 17", time:"18:35", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true,  winner:false}, team2:{name:"Z4",           davis:false, winner:true},  score:"0 : 3", result:"loss" },
            { date:"May 23", time:"14:30", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:true},  team2:{name:"EBU Rangers",  davis:false, winner:false}, score:"3 : 1", result:"win" },
            { date:"May 24", time:"13:20", tag:"北加联", team1:{name:"Davis Origin",         davis:true,  winner:false}, team2:{name:"GSF",          davis:false, winner:true},  score:"1 : 2", result:"loss" }
          ]
        }
      ]
    },
    {
      id: "23-24",
      label: "23-24 赛季",
      current: false,
      placeholder: true,           // 内容还没整理，页面会显示"整理中"
      lede: "内容整理中，敬请期待。",
      record: { w: 0, d: 0, l: 0, upcoming: 0 },
      highlights: [
        "人员凋敝，阵容单薄，第一次南下出征，每个人都在坚持"
      ],
      roster: { gk: [], def: [], mid: [], fwd: [] },
      matchGroups: []
    }
  ]
};
