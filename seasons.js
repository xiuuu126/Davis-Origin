/* ============================================================
   Davis Origin · 分赛季数据
   ------------------------------------------------------------
   主页、roster.html、matches.html、seasons.html 都从这份数据
   渲染，改这一个文件，几个页面会一起更新。

   结构说明（每个赛季一个对象）：
   - id / label：赛季标识，比如 "25-26" / "25-26 赛季"
   - current：true 表示"当前赛季"——主页、roster.html、
     matches.html 只显示这一个赛季的内容（不再有赛季切换）
   - placeholder：true 表示这个赛季的球员名单、逐场比赛还没整理，
     页面会显示"整理中"；但 highlights 里已经知道的内容（比如
     拿了个冠军）照样会显示，不受这个影响
   - highlights：几句话概括这个赛季，主页/赛季页顶部简介都会用

   两套并行的数据（内容有重叠，是故意的，方便每个页面各取所需）：

   1) 顶层 roster / matches —— 全队合并版，主页 + roster.html +
      matches.html 用这个，不区分一队/预备队：
      - roster：按 gk/def/mid/fwd 分组的球员名字数组（全队）
      - matches.league / matches.huati / matches.xinnian：三大板块
        （北加联常规赛 / 华体会杯赛 / 贺岁杯），每个板块下面是具体
        比赛数组；如果暂时没有逐场比分，可以用 note 写一句话代替

   2) teams.first / teams.reserve —— 一队 / 预备队分开版，只有
      seasons.html（赛季存档页）用这个，结构和上面基本一样
      （matches 按三大板块分组），但只放这支队伍自己的比赛。
      - roster 字段目前保留在这里，只是一个"这支队伍大概有哪些人"
        的名字池，seasons.html 不会把它单独列一块显示——具体谁上场
        是挂在每场比赛自己的 lineup 字段上的（见下面）。
      - 目前"一队/预备队"具体是哪些人是按老名单粗略拆的占位版，
        不是精确的历史记录（球员经常两队之间调整），以后要改哪个
        人属于哪队，直接在 teams.first.roster / teams.reserve.roster
        里挪名字就行，其他页面不受影响。
      - team 对象可以有一个可选的 note 字段：当这支队伍这个赛季
        完全没有比赛数据、但有一句话背景（比如"这一年还没有
        预备队"）时用，会替代掉常规的"还没整理"占位提示。
      - matches.league/huati/xinnian 里每场比赛可以有一个可选的
        lineup 字段（球员名字数组）：这是当场的出场名单，不是
        整个赛季固定不变的——seasons.html 里点开某场比赛才会展开
        显示。目前的 lineup 都是从这支队伍的 roster 里挑的占位
        名单（不是真实的逐场出场记录），以后有真实出场记录了，
        直接把对应比赛的 lineup 数组换掉就行。

   加一个新赛季：复制其中一段 { ... }，塞到 seasons 数组最前面，
   把旧赛季的 current: true 删掉、挪到新赛季上。
   赛季存档页（seasons.html）会显示全部赛季（不管 current 是谁）。
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
        league: { label: "北加联", matches: [] },
        huati:  { label: "华体会", matches: [] },
        xinnian:{ label: "贺岁杯", matches: [] }
      },
      teams: {
        first: {
          label: "一队",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [] },
            huati:  { label: "华体会", matches: [] },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        },
        reserve: {
          label: "预备队",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [] },
            huati:  { label: "华体会", matches: [] },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        }
      }
    },
    {
      id: "25-26",
      label: "25-26 赛季",
      current: false,
      lede: "2026 五月 · 北加联赛季圆满收官。Fight on.",
      highlights: [
        "共 55 名学生与校友球员，覆盖一队与预备队",
        "1 月北美湾区贺岁杯、3 月加州华人大学生足球校际杯（华体会）、5 月北加联，三线出战",
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
        huati: {
          label: "华体会",
          matches: [],
          note: "3 月 20–22 日加州华人大学生足球校际杯（尔湾）：一队小组赛 1 胜 2 平，力克 USC，战平 UCLA、UCSD，最终一队小组第四、预备队小组第六。具体逐场比分还没整理，补齐后会换成完整的比赛列表。"
        },
        xinnian: {
          label: "贺岁杯",
          matches: [],
          note: "1 月 16 日北美湾区贺岁杯：一队迎战 Hunter、South Bay，预备队迎战 SF United。具体比分还没整理。"
        }
      },
      teams: {
        first: {
          label: "一队",
          roster: {
            gk:  ["冯楚明","熊翰川"],
            def: ["蔡毅诚","葛孟宇","吉芸莹","李金宇","李润泽","刘富行","刘彦君","马俊宇","潘颢文","王彦沛","杨乐成","张宏毅"],
            mid: ["Attila","Frank Zhu","金圣博","刘明硕","陆子涵","欧阳川","史皓元","张铭源","Zoli"],
            fwd: ["杜康松","刘子云","王俊皓","温子铭","于霆访","朱超凡"]
          },
          matches: {
            league: {
              label: "北加联",
              matches: [
                { date:"May 16", time:"10:00", tag:"北加联", team1:{name:"Davis Origin", davis:true,  winner:false}, team2:{name:"HeHe FC",     davis:false, winner:true},  score:"0 : 2", result:"loss",
                  lineup: ["冯楚明","蔡毅诚","葛孟宇","吉芸莹","李金宇","Attila","Frank Zhu","金圣博","杜康松","刘子云","王俊皓"] },
                { date:"May 17", time:"11:35", tag:"北加联", team1:{name:"Davis Origin", davis:true,  winner:false}, team2:{name:"SF United",   davis:false, winner:true},  score:"1 : 6", result:"loss",
                  lineup: ["熊翰川","李润泽","刘富行","刘彦君","马俊宇","刘明硕","陆子涵","欧阳川","温子铭","于霆访","朱超凡"] },
                { date:"May 23", time:"14:30", tag:"北加联", team1:{name:"Davis Origin", davis:true,  winner:true},  team2:{name:"EBU Rangers", davis:false, winner:false}, score:"3 : 1", result:"win",
                  lineup: ["冯楚明","潘颢文","王彦沛","杨乐成","张宏毅","史皓元","张铭源","Zoli","杜康松","王俊皓","温子铭"] },
                { date:"May 24", time:"13:20", tag:"北加联", team1:{name:"Davis Origin", davis:true,  winner:false}, team2:{name:"GSF",         davis:false, winner:true},  score:"1 : 2", result:"loss",
                  lineup: ["熊翰川","蔡毅诚","李金宇","刘富行","马俊宇","Attila","金圣博","陆子涵","刘子云","于霆访","朱超凡"] }
              ]
            },
            huati: {
              label: "华体会",
              matches: [],
              note: "3 月 20–22 日加州华人大学生足球校际杯（尔湾）：小组赛 1 胜 2 平，力克 USC，战平 UCLA、UCSD，最终小组第四。具体逐场比分还没整理。"
            },
            xinnian: {
              label: "贺岁杯",
              matches: [],
              note: "1 月 16 日北美湾区贺岁杯迎战 Hunter、South Bay，具体比分还没整理。"
            }
          }
        },
        reserve: {
          label: "预备队",
          roster: {
            gk:  ["相铮"],
            def: ["柴泓旭","何嘉伦","李静诚","李明达","黎元其","刘效尔","刘籽珅","马雨辰","王钧","夏梓宸","叶奕承","赵天钰"],
            mid: ["曹震旦","黄溆子","刘铠泽","卢嘉玉","罗宇航","盛天成","孙楚越","赵乐涵"],
            fwd: ["刘奕","史佳驰","王亚珩","尹鸣赫","周元中"]
          },
          matches: {
            league: {
              label: "北加联",
              matches: [
                { date:"May 10", time:"19:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true, winner:false}, team2:{name:"Jinyue",       davis:false, winner:false}, score:"1 : 1", result:"draw",
                  lineup: ["相铮","柴泓旭","何嘉伦","李静诚","李明达","曹震旦","黄溆子","刘铠泽","刘奕","史佳驰","王亚珩"] },
                { date:"May 16", time:"18:45", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true, winner:false}, team2:{name:"Flying Horse", davis:false, winner:false}, score:"2 : 2", result:"draw",
                  lineup: ["相铮","黎元其","刘效尔","刘籽珅","马雨辰","卢嘉玉","罗宇航","盛天成","尹鸣赫","周元中","刘奕"] },
                { date:"May 17", time:"18:35", tag:"北加联", team1:{name:"Davis Origin Reverse", davis:true, winner:false}, team2:{name:"Z4",           davis:false, winner:true},  score:"0 : 3", result:"loss",
                  lineup: ["相铮","王钧","夏梓宸","叶奕承","赵天钰","孙楚越","赵乐涵","曹震旦","史佳驰","王亚珩","尹鸣赫"] }
              ]
            },
            huati: {
              label: "华体会",
              matches: [],
              note: "随队出征尔湾的加州华人大学生足球校际杯，最终小组第六，具体逐场比分还没整理。"
            },
            xinnian: {
              label: "贺岁杯",
              matches: [],
              note: "1 月 16 日北美湾区贺岁杯迎战 SF United，具体比分还没整理。"
            }
          }
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
        league: { label: "北加联", matches: [] },
        huati:  { label: "华体会", matches: [], note: "华体会 2025 亚军——具体逐场比分还没整理。" },
        xinnian:{ label: "贺岁杯", matches: [] }
      },
      teams: {
        first: {
          label: "一队",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [] },
            huati:  { label: "华体会", matches: [], note: "华体会 2025 亚军——具体逐场比分还没整理。" },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        },
        reserve: {
          label: "预备队",
          note: "预备队这一年刚成立，名单和比赛记录还在整理。",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [] },
            huati:  { label: "华体会", matches: [] },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        }
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
        league: { label: "北加联", matches: [], note: "2024 年北加联冠军赛季——具体逐场比分还没整理。" },
        huati:  { label: "华体会", matches: [] },
        xinnian:{ label: "贺岁杯", matches: [] }
      },
      teams: {
        first: {
          label: "一队",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [], note: "2024 年北加联冠军赛季——具体逐场比分还没整理。" },
            huati:  { label: "华体会", matches: [] },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        },
        reserve: {
          label: "预备队",
          note: "这一年还没有预备队。",
          roster: { gk: [], def: [], mid: [], fwd: [] },
          matches: {
            league: { label: "北加联", matches: [] },
            huati:  { label: "华体会", matches: [] },
            xinnian:{ label: "贺岁杯", matches: [] }
          }
        }
      }
    }
  ]
};
