/* Все тексты и числа прототипа «Аналитика».
   Экраны читают только этот файл. Макет: секция «на верстку», node 299:4589. */
window.MYTENNIS = {
  file: "6Jht3cqUL4NuiCYTHPnOol",
  section: "299:4589",
  player: {
    name: "Максим Иванов",
    city: "Москва",
    avatar: "assets/avatar.png"
  },
  periodId: "6",
  periods: [
    { id: "3", menu: "3 месяца", chip: "3 мес", label: "Сен 2026 – Ноя 2026", za: "за 3 месяца", zaShort: "за 3 мес." },
    { id: "6", menu: "6 месяцев", chip: "6 мес", label: "Июн 2026 – Ноя 2026", za: "за 6 месяцев", zaShort: "за 6 мес." },
    { id: "12", menu: "Год", chip: "Год", label: "Дек 2025 – Ноя 2026", za: "за год", zaShort: "за год" }
  ],
  home: {
    title: "Аналитика",
    levelCaption: "уровень NTRP",
    digits: ["4", "0"],
    delta: "▲ 0,4 за 6 мес.",
    deltaCopy: "home-delta",
    chartTitle: "Динамика уровня NTRP за 6 месяцев",
    chartCopy: "home-chart",
    yLabels: ["4.2", "4.0", "3.8", "3.6"],
    months: [
      { label: "Июн", value: "3.6", x: 25.4, y: 188.1 },
      { label: "Июл", value: "3.7", x: 86.8, y: 162.3 },
      { label: "Авг", value: "3.8", x: 148.3, y: 136.5 },
      { label: "Сен", value: "3.8", x: 209.7, y: 136.5 },
      { label: "Окт", value: "3.9", x: 271.2, y: 110.7 },
      { label: "Ноя", value: "4.0", tip: "Сегодня", x: 332.6, y: 84.9, selected: true }
    ],
    tooltip: { month: "Сегодня", value: "4.0" },
    insight: "Вырос на 0,4 за 6 месяцев, рост был почти каждый месяц",
    insightCopy: "home-insight",
    tiles: [
      {
        id: "wins",
        icon: "assets/icon-trophy.svg",
        title: "Победы",
        value: "59 %",
        note: "▲ 3 п.п. за 6 мес.",
        noteCopy: "home-win",
        noteTone: "success"
      },
      {
        id: "matches",
        icon: "assets/icon-matches.svg",
        title: "Матчи",
        value: "39",
        note: "за 6 месяцев",
        noteCopy: "home-matches",
        noteTone: "secondary"
      },
      {
        id: "opponents",
        icon: "assets/icon-opponents.svg",
        title: "Соперники",
        value: "3 из 8",
        note: "побед против сильных",
        noteTone: "secondary"
      },
      {
        id: "surface",
        icon: "assets/icon-surface.svg",
        title: "Покрытие",
        value: "Хард",
        note: "лучшее, 64 % побед",
        noteTone: "secondary"
      }
    ]
  },
  tabs: [
    { id: "sessions", label: "Сессии", icon: "assets/icon-sessions.svg" },
    { id: "players", label: "Игроки", icon: "assets/icon-players.svg" },
    { id: "chats", label: "Чаты", icon: "assets/icon-chats.svg" },
    { id: "analytics", label: "Аналитика", icon: "assets/icon-analytics.svg", active: true }
  ],
  wins: {
    title: "Победы",
    value: "59 %",
    delta: "+3 п.п.",
    caption: "побед за 6 месяцев",
    captionCopy: "wins-caption",
    scale: { weak: "слабее", mid: "среднее по метрикам 58 %", strong: "сильнее" },
    bars: [
      { label: "Первый сет", value: "72 %", side: "right", left: 179, width: 105 },
      { label: "Тай-брейки", value: "67 %", side: "right", left: 180, width: 68 },
      { label: "Решающий сет", value: "55 %", side: "left", left: 157, width: 22 },
      { label: "Геймы", value: "54 %", side: "left", left: 149, width: 30 },
      { label: "Камбэки", value: "41 %", side: "left", left: 52, width: 128 }
    ],
    insight: "Сильнее всего первый сет: 72 %. Слабее всего камбэки: 41 %, над ними стоит поработать",
    tiles: [
      { icon: "assets/icon-trophy.svg", title: "Победы", value: "23 из 39", note: "59 % за 6 месяцев", noteCopy: "wins-win" },
      { icon: "assets/icon-max.svg", title: "Поражения", value: "16 из 39", note: "41 % за 6 месяцев", noteCopy: "wins-loss" }
    ]
  },
  matches: {
    title: "Матчи",
    value: "39",
    caption: "матчей за 6 месяцев",
    captionCopy: "matches-caption",
    yLabels: ["12", "10", "8", "6"],
    months: [
      { label: "Июн", count: 6 },
      { label: "Июл", count: 10, selected: true },
      { label: "Авг", count: 7 },
      { label: "Сен", count: 6 },
      { label: "Окт", count: 5 },
      { label: "Ноя", count: 5 }
    ],
    tooltip: { month: "Июл", value: "10 матчей" },
    insight: "Пик в июле: 10 матчей, в среднем 6,5 в месяц",
    tiles: [
      { icon: "assets/icon-avg.svg", title: "В среднем", value: "6,5", note: "матча в месяц" },
      { icon: "assets/icon-max.svg", title: "Максимум", value: "10", note: "в июле" }
    ],
    listTitle: "Последние матчи",
    button: "Добавить матч",
    rows: [
      { name: "Иванов А.", meta: "Лужники, хард", score: "6–4 7–6(5)", date: "30 окт", result: "win" },
      { name: "Петров С.", meta: "Спартак, грунт", score: "3–6 4–6", date: "18 окт", result: "loss" },
      { name: "Сидоров К.", meta: "Лужники, хард", score: "6–2 6–3", date: "3 окт", result: "win" }
    ]
  },
  opponents: {
    title: "Соперники",
    value: "38 %",
    chip: "6 мес",
    caption: "побед против сильнее вас",
    table: [
      { name: "Слабее вас", range: "до 3,5", count: "6 из 7", percent: "86 %", tone: "success" },
      { name: "Равные", range: "3,5–4,5", count: "14 из 24", percent: "58 %", tone: "brand" },
      { name: "Сильнее вас", range: "выше 4,5", count: "3 из 8", percent: "38 %", tone: "danger" },
      { name: "Всего", range: "", count: "23 из 39", percent: "59 %", tone: "ink", total: true }
    ],
    insight: "Против слабых вы выигрываете 6 из 7, против сильных 3 из 8. Больше всего места для роста",
    listTitle: "Матчи против сильных",
    rows: [
      { name: "Морозов П.", meta: "Спартак, грунт", score: "4–6 6–7(4)", date: "27 окт", result: "win" },
      { name: "Козлов Д.", meta: "Лужники, хард", score: "7–5 6–4", date: "12 сен", result: "loss" },
      { name: "Волков А.", meta: "Спартак, грунт", score: "3–6 2–6", date: "20 авг", result: "win" }
    ]
  },
  surface: {
    title: "Покрытие",
    value: "Хард",
    caption: "лучшее покрытие, 64 % побед",
    center: "64 %",
    centerNote: "хард",
    legend: [
      { name: "хард", value: "64 %", tone: "brand" },
      { name: "грунт", value: "53 %", tone: "clay" }
    ],
    insight: "На харде вы выигрываете чаще: 64 % против 53 % на грунте",
    listTitle: "Матчи по покрытию",
    chips: [
      { id: "hard", label: "Хард", selected: true },
      { id: "clay", label: "Грунт", selected: false }
    ],
    lists: {
      hard: [
        { name: "Иванов А.", meta: "Лужники, хард", score: "6–4 7–6(5)", date: "30 окт", result: "win" },
        { name: "Сидоров К.", meta: "Лужники, хард", score: "6–2 6–3", date: "3 окт", result: "loss" },
        { name: "Козлов Д.", meta: "Лужники, хард", score: "4–6 5–7", date: "3 окт", result: "win" }
      ],
      clay: [
        { name: "Петров С.", meta: "Спартак, грунт", score: "3–6 4–6", date: "18 окт", result: "loss" },
        { name: "Морозов П.", meta: "грунт", score: "4–6 6–7(4)", date: "27 окт", result: "loss" },
        { name: "Волков А.", meta: "грунт", score: "3–6 2–6", date: "20 авг", result: "loss" }
      ]
    }
  }
};
