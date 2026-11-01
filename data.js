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
  months12: ["Дек", "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя"],
  /* окно данных: Дек 2024 – Ноя 2026, 24 месяца */
  start: { y: 2024, m: 11 },
  loc: { "Дек": "в декабре", "Янв": "в январе", "Фев": "в феврале", "Мар": "в марте", "Апр": "в апреле", "Май": "в мае", "Июн": "в июне", "Июл": "в июле", "Авг": "в августе", "Сен": "в сентябре", "Окт": "в октябре", "Ноя": "в ноябре" },
  series: {
    ntrp: [3.0, 3.0, 3.1, 3.1, 3.1, 3.2, 3.2, 3.2, 3.3, 3.3, 3.3, 3.4, 3.4, 3.4, 3.5, 3.5, 3.5, 3.6, 3.6, 3.7, 3.8, 3.8, 3.9, 4.0],
    matches: [4, 3, 5, 6, 5, 4, 5, 6, 5, 4, 5, 5, 5, 4, 6, 7, 6, 5, 6, 10, 7, 6, 5, 5]
  },
  stats: {
    "3": { ntrpDelta: "0,2", winsDelta: "+4 п.п.", wins: { w: 10, t: 16 }, bars: [75, 70, 58, 56, 45], opp: [{ w: 5, t: 6 }, { w: 3, t: 6 }, { w: 2, t: 4 }], surface: { hard: 66, clay: 50 } },
    "6": { ntrpDelta: "0,4", winsDelta: "+3 п.п.", wins: { w: 23, t: 39 }, bars: [72, 67, 55, 54, 41], opp: [{ w: 6, t: 7 }, { w: 14, t: 24 }, { w: 3, t: 8 }], surface: { hard: 64, clay: 53 } },
    "12": { ntrpDelta: "0,6", winsDelta: "+5 п.п.", wins: { w: 40, t: 72 }, bars: [70, 64, 53, 52, 40], opp: [{ w: 17, t: 20 }, { w: 18, t: 37 }, { w: 5, t: 15 }], surface: { hard: 61, clay: 55 } }
  },
  barDefs: [
    { label: "Первый сет", key: "первый сет", plural: false },
    { label: "Тай-брейки", key: "тай-брейки", plural: true },
    { label: "Решающий сет", key: "решающий сет", plural: false },
    { label: "Геймы", key: "геймы", plural: true },
    { label: "Камбэки", key: "камбэки", plural: true }
  ],
  oppDefs: [
    { name: "Слабее вас", range: "до 3,5", tone: "success" },
    { name: "Равные", range: "3,5–4,5", tone: "brand" },
    { name: "Сильнее вас", range: "выше 4,5", tone: "danger" }
  ],
  pool: [
    { name: "Громов И.", meta: "Лужники, хард", score: "6–3 6–4", date: "16 фев", m: 14, day: 16, result: "win", surface: "hard", strong: false },
    { name: "Фомин Л.", meta: "Спартак, грунт", score: "2–6 4–6", date: "8 янв", m: 13, day: 8, result: "loss", surface: "clay", strong: true },
    { name: "Крылов В.", meta: "Лужники, хард", score: "7–6(4) 6–4", date: "19 дек", m: 12, day: 19, result: "win", surface: "hard", strong: true },
    { name: "Егоров Т.", meta: "Спартак, грунт", score: "6–4 6–2", date: "11 апр", m: 16, day: 11, result: "win", surface: "clay", strong: false },
    { name: "Зайцев О.", meta: "Лужники, хард", score: "4–6 6–3 3–6", date: "27 май", m: 17, day: 27, result: "loss", surface: "hard", strong: true },
    { name: "Миронов Е.", meta: "Спартак, грунт", score: "6–1 6–3", date: "21 ноя", m: 11, day: 21, result: "win", surface: "clay", strong: false },
    { name: "Тихонов Г.", meta: "Лужники, хард", score: "3–6 6–7(5)", date: "5 окт", m: 10, day: 5, result: "loss", surface: "hard", strong: true },
    { name: "Алексеев Д.", meta: "Спартак, грунт", score: "6–4 7–5", date: "14 сен", m: 9, day: 14, result: "win", surface: "clay", strong: false },
    { name: "Журавлёв С.", meta: "Лужники, хард", score: "6–2 6–4", date: "30 авг", m: 8, day: 30, result: "win", surface: "hard", strong: false },
    { name: "Попов К.", meta: "Спартак, грунт", score: "5–7 4–6", date: "17 июл", m: 7, day: 17, result: "loss", surface: "clay", strong: true },
    { name: "Данилов Р.", meta: "Лужники, хард", score: "7–5 6–3", date: "2 июн", m: 6, day: 2, result: "win", surface: "hard", strong: true },
    { name: "Ершов А.", meta: "Спартак, грунт", score: "6–3 6–4", date: "23 май", m: 5, day: 23, result: "win", surface: "clay", strong: false },
    { name: "Носов М.", meta: "Лужники, хард", score: "2–6 3–6", date: "9 апр", m: 4, day: 9, result: "loss", surface: "hard", strong: true },
    { name: "Руднев П.", meta: "Лужники, хард", score: "6–4 6–4", date: "26 фев", m: 2, day: 26, result: "win", surface: "hard", strong: false },
    { name: "Макаров Ю.", meta: "Спартак, грунт", score: "6–7(2) 3–6", date: "12 янв", m: 1, day: 12, result: "loss", surface: "clay", strong: true },
    { name: "Иванов А.", meta: "Лужники, хард", score: "6–4 7–6(5)", date: "30 окт", m: 22, day: 30, result: "win", surface: "hard", strong: false },
    { name: "Морозов П.", meta: "Спартак, грунт", score: "4–6 6–7(4)", date: "27 окт", m: 22, day: 27, result: "loss", surface: "clay", strong: true },
    { name: "Петров С.", meta: "Спартак, грунт", score: "3–6 4–6", date: "18 окт", m: 22, day: 18, result: "loss", surface: "clay", strong: false },
    { name: "Сидоров К.", meta: "Лужники, хард", score: "6–2 6–3", date: "3 окт", m: 22, day: 3, result: "win", surface: "hard", strong: false },
    { name: "Козлов Д.", meta: "Лужники, хард", score: "4–6 5–7", date: "2 окт", m: 22, day: 2, result: "loss", surface: "hard", strong: false },
    { name: "Козлов Д.", meta: "Лужники, хард", score: "7–5 6–4", date: "12 сен", m: 21, day: 12, result: "win", surface: "hard", strong: true },
    { name: "Волков А.", meta: "Спартак, грунт", score: "3–6 2–6", date: "20 авг", m: 20, day: 20, result: "loss", surface: "clay", strong: true },
    { name: "Лебедев Н.", meta: "Лужники, хард", score: "6–7(3) 4–6", date: "14 июл", m: 19, day: 14, result: "loss", surface: "hard", strong: true },
    { name: "Орлов Р.", meta: "Спартак, грунт", score: "6–3 3–6 7–6(4)", date: "9 июн", m: 18, day: 9, result: "win", surface: "clay", strong: true },
    { name: "Беляев М.", meta: "Лужники, хард", score: "5–7 6–4 6–3", date: "22 мар", m: 15, day: 22, result: "win", surface: "hard", strong: true }
  ],
  empty: {
    caption: "уровень NTRP не определён",
    captionSet: "уровень NTRP",
    link: "Определить уровень",
    linkSet: "Изменить",
    title: "Добавьте первый матч",
    text: "Мы покажем победы, форму и динамику уровня",
    cta: "Добавить матч"
  },
  picker: {
    title: "Определите уровень",
    caption: "по шкале NTRP",
    hint: "Перетащите, чтобы изменить",
    later: "Позже",
    confirm: "Подтвердить",
    start: 2,
    steps: [
      { v: "2.5", name: "начинающий", text: "Вы осваиваете удары и учитесь держать мяч в игре. Розыгрыши пока короткие." },
      { v: "3.0", name: "осваиваете игру", text: "Удары становятся стабильнее, но направление и глубину вы контролируете не всегда." },
      { v: "3.5", name: "уверенный любитель", text: "Держите мяч в игре и направляете удары, но в напряжённых розыгрышах ошибки случаются." },
      { v: "4.0", name: "сильный любитель", text: "Играете стабильно, используете разные удары и вращения. Ошибки редки, но быстрый темп соперника ещё сбивает." },
      { v: "4.5", name: "продвинутый любитель", text: "Уверенно контролируете темп и глубину, строите розыгрыш и вовремя переходите в атаку." },
      { v: "5.0+", name: "турнирный игрок", text: "Сильные удары и тактика. Вы играете турниры и стабильно выигрываете у большинства любителей." }
    ]
  },
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
