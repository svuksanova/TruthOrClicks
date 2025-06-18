const questions = [
    {
        title: "Добредојде во играта!",
        text:  "Избери тип на медиум со кој ќе започнеш:",
        options: [
            { text: "Онлајн портал", trust: 20, audience: 40, income: 15 },
            { text: "ТВ станица",     trust: 30, audience: 35, income: 25 },
            { text: "Радио",          trust: 25, audience: 20, income: 10 }
        ]
    },
    {
        title: "Прва одлука",
        text:  "Добиваш понуда за спонзорирана објава од сомнителен извор. Што ќе направиш?",
        options: [
            { text: "Ја објавувам без проверка.",               trust: -15, audience: 25, income: 20 },
            { text: "Ја одбивам – не е етичка.",               trust:  15, audience: -10, income: -10 },
            { text: "Проверувам и објавувам само ако е точна.", trust:  10, audience: 10, income:   5 }
        ]
    },
    {
        title: "Втора одлука",
        text:  "Новинар бара да објавиш скандалозна вест која може да го зголеми бројот на гледачи, но да ја намали довербата. Што правиш?",
        options: [
            { text: "Објавувам веднаш.",                        trust: -20, audience: 30, income: 15 },
            { text: "Одбивам поради етика.",                   trust:  20, audience: -5, income: -5 },
            { text: "Проверувам детално пред објава.",         trust:  10, audience:  5, income:  5 }
        ]
    },

    {
        title: "Сценарио 1",
        text:  "Редакцијата добива ексклузивни фотографии со непознат извор.",
        options: [
            { text: "Ги објавуваш без метаподатоци.",              trust: -12, audience: 22, income: 12 },
            { text: "Чекаш потврда од експерт.",                   trust:  15, audience: -4, income: -3 },
            { text: "Објавуваш дел, со јасно предупредување.",    trust:   8, audience:  8, income:  4 }
        ]
    },

    {
        title: "Сценарио 2",
        text:  "Твоите конкуренти пуштаат сензационалистички наслов за истиот настан.",
        options: [
            { text: "Ги надминуваш со уште поголем клик‑бејт.", trust: -18, audience: 26, income: 14 },
            { text: "Остануваш кај фактите.",                   trust:  14, audience: -6, income: -4 },
            { text: "Правиш аналитичко видео со експерти.",     trust:  12, audience: 10, income:  7 }
        ]
    },

    {
        title: "Сценарио 3",
        text:  "Вработен сака да објави статија со AI‑генерирани слики без атрибуција.",
        options: [
            { text: "Дозволуваш – побрзо е.",                    trust: -10, audience: 14, income:  9 },
            { text: "Бараш лиценца и јасна ознака за AI.",       trust:  12, audience: -3, income: -2 },
            { text: "Забрануваш AI содржина целосно.",           trust:   8, audience: -6, income: -5 }
        ]
    },

    {
        title: "Сценарио 4",
        text:  "Неочекуван прекин на струја додека снимате шоу во живо.",
        options: [
            { text: "Продолжуваш со мобилен стрим.",             trust:   6, audience: 12, income:  4 },
            { text: "Го паузираш шоуто до техничка поправка.",   trust:   4, audience: -8, income: -3 },
            { text: "Емитуваш претходно снимен материјал.",      trust:   2, audience: -4, income:  1 }
        ]
    },

    {
        title: "Сценарио 5",
        text:  "Политичар ти нуди интервју ако добиеш прашања однапред.",
        options: [
            { text: "Се согласуваш.",                            trust: -14, audience: 18, income: 10 },
            { text: "Одбиваш компромис.",                         trust:  16, audience: -8, income: -6 },
            { text: "Прифаќаш, но додаваш непредвидени прашања.", trust:   8, audience:  6, income:  3 }
        ]
    },

    {
        title: "Сценарио 6",
        text:  "Вирусна теорија на заговор се шири на твоjот форум.",
        options: [
            { text: "Ја бришеш без објаснување.",                trust:   5, audience: -10, income: -4 },
            { text: "Оставaш – слобода на говор.",               trust: -15, audience:  18, income:  7 },
            { text: "Пишуваш детална проверка на фактите.",      trust:  14, audience:  4, income:  3 }
        ]
    },

    {
        title: "Сценарио 7",
        text:  "Спортист прифаќа интервју само ако добие дел од рекламните приходи.",
        options: [
            { text: "Прифаќаш услов.",                            trust:  -8, audience: 16, income: 10 },
            { text: "Нуди алтернативно надомест.",               trust:   3, audience:  4, income: -2 },
            { text: "Одбиваш и интервјуираш ривал.",             trust:   6, audience: -5, income: -3 }
        ]
    },

    {
        title: "Сценарио 8",
        text:  "Ситe твитераџии те обвинуваат за пристрасност.",
        options: [
            { text: "Игнорираш твитови.",                         trust:  -6, audience:  2, income:  0 },
            { text: "Објавуваш транспарентен одговор со докази.", trust:  12, audience:  6, income:  2 },
            { text: "Тролуеш назад.",                             trust: -18, audience: 14, income:  6 }
        ]
    },

    {
        title: "Сценарио 9",
        text:  "Секцијата за коментари е полна со говор на омраза.",
        options: [
            { text: "Деактивираш коментари.",                    trust:   5, audience: -10, income: -4 },
            { text: "Модерираш со филтри.",                       trust:   8, audience: -2, income: -1 },
            { text: "Ништо – важен ти е трафикот.",               trust: -12, audience: 12, income:  5 }
        ]
    },

    {
        title: "Сценарио 10",
        text:  "Примање донација од НПО со силна агенда.",
        options: [
            { text: "Прифаќаш во тајност.",                       trust: -16, audience:  8, income: 20 },
            { text: "Јавно објавуваш донацијата.",               trust:  10, audience: -4, income:  4 },
            { text: "Одбиваш и земаш заем.",                      trust:   6, audience: -6, income: -8 }
        ]
    },

    {
        title: "Сценарио 11",
        text:  "Твојата апликација има баг што собира лични податоци.",
        options: [
            { text: "Поправка во тишина.",                       trust:  -8, audience:  2, income: -2 },
            { text: "Издаваш соопштение и извинување.",          trust:  14, audience: -3, income: -5 },
            { text: "Оставaш – неколку дена ќе молчат.",         trust: -18, audience: 10, income:  6 }
        ]
    },

    {
        title: "Сценарио 12",
        text:  "Вирално меме со логото на твојата медиа станува интернет хит.",
        options: [
            { text: "Го прифаќаш и правиш мерч.",                trust:   4, audience: 18, income: 15 },
            { text: "Бараш да се тргне – авторски права.",       trust: -10, audience: -12, income:  2 },
            { text: "Го римекуваш со образовна порака.",         trust:  10, audience:  8, income:  5 }
        ]
    },

    {
        title: "Сценарио 13",
        text:  "Пандемиja предизвикува паника – луѓе бараат реално известување.",
        options: [
            { text: "Креваш паника за кликови.",                  trust: -20, audience: 28, income: 12 },
            { text: "Соработуваш со здравствени власти.",        trust:  16, audience:  8, income:  4 },
            { text: "Чекаш повеќе информации.",                  trust:  4, audience: -4, income: -2 }
        ]
    },

    {
        title: "Сценарио 14",
        text:  "Инфлуенсер бара да води твоја емисија.",
        options: [
            { text: "Прифаќаш – донесува публика.",              trust:  -6, audience: 20, income: 10 },
            { text: "Ставаш строг договор за етика.",            trust:   8, audience: 10, income:  5 },
            { text: "Одбиваш – не се вклопува.",                 trust:   6, audience: -8, income: -4 }
        ]
    },

    {
        title: "Сценарио 15",
        text:  "Имаш доказ за корупција, но рекламниот клиент е вмешан.",
        options: [
            { text: "Објавуваш.",                                 trust:  22, audience: 14, income: -10 },
            { text: "Молчиš и ги задржуваш рекламите.",           trust: -22, audience: -2, income: 24 },
            { text: "Даваš материјал на друг медиум.",            trust:  10, audience:  6, income: -4 }
        ]
    },

    {
        title: "Сценарио 16",
        text:  "Лансираш подкаст, но звукот е лош.",
        options: [
            { text: "Пушташ како е – брзина.",                    trust:  -4, audience: 12, income:  6 },
            { text: "Одложуваш и го ремастеруваш.",              trust:   8, audience: -3, income: -2 },
            { text: "Правиш кратко извинување и понуда.",        trust:   6, audience:  4, income:  1 }
        ]
    },

    {
        title: "Сценарио 17",
        text:  "Регионална криза ја блокира доставата на весници.",
        options: [
            { text: "Префрлаш сите на дигитално.",               trust:   7, audience: 10, income:  5 },
            { text: "Ангажираш алтернативна логистика.",         trust:   3, audience:  6, income: -6 },
            { text: "Чекаш кризата да мине.",                    trust:  -4, audience: -12, income: -4 }
        ]
    },

    {
        title: "Сценарио 18",
        text:  "Хакер ти нуди ексклузивно истечени мејлови.",
        options: [
            { text: "Ги купуваш.",                                trust: -14, audience: 22, income:  8 },
            { text: "Го пријавуваш.",                             trust:  16, audience: -8, income: -6 },
            { text: "Договараш услови и правна проверка.",       trust:   8, audience:  6, income:  2 }
        ]
    },

    {
        title: "Сценарио 19",
        text:  "Прес-конференција се преклопува со спортски финале.",
        options: [
            { text: "Пренесуваш спорт – популарно.",             trust:  -6, audience: 18, income: 10 },
            { text: "Пренесуваш политика – важно.",              trust:   6, audience: -8, income: -3 },
            { text: "Отвораш сплит‑скрин.",                      trust:   4, audience:  6, income:  2 }
        ]
    },

    {
        title: "Сценарио 20",
        text:  "Твој репортер е уапсен за време на протест.",
        options: [
            { text: "Го објавуваш инцидентот веднаш.",          trust:  12, audience: 10, income:  3 },
            { text: "Го прикриваш за да не се влоши.",          trust: -18, audience:  2, income:  0 },
            { text: "Вклучуваш адвокати и чекаш изјава.",       trust:   8, audience: -4, income: -2 }
        ]
    },

    {
        title: "Сценарио 21",
        text:  "Партнер медиум објавува лажна вест со твоето лого.",
        options: [
            { text: "Го раскинуваш партнерството јавно.",       trust:  18, audience: -6, income: -6 },
            { text: "Молиш приватно да коригираат.",             trust:  -8, audience:  2, income:  1 },
            { text: "Се дистанцираш и коригираш на своја страна.", trust: 10, audience:  4, income:  2 }
        ]
    },

    {
        title: "Сценарио 22",
        text:  "Најпопуларниот водител сака покачување или заминува.",
        options: [
            { text: "Да, и му даваш бонус.",                     trust:  -4, audience: 16, income: -8 },
            { text: "Нуди долгорочен договор со дел од профит.", trust:   6, audience:  8, income: -4 },
            { text: "Одбиваш – никој не е незаменлив.",          trust:   8, audience: -10, income:  6 }
        ]
    },

    {
        title: "Сценарио 23",
        text:  "Системот за коментари паѓа за време на голема вест.",
        options: [
            { text: "Преоѓаш на социјални мрежи.",               trust:   4, audience:  8, income:  2 },
            { text: "Го гасиш целосно до поправка.",             trust:   2, audience: -6, income: -2 },
            { text: "Импровизираш Google Forms за реакции.",    trust:   5, audience:  4, income:  1 }
        ]
    },

    {
        title: "Сценарио 24",
        text:  "Некој тврди дека имаш скриени донори и објавува " +
            "недокажани документи.",
        options: [
            { text: "Игнорираш – ќе стивне.",                    trust: -10, audience:  4, income:  0 },
            { text: "Објавуваш детални финансиски извештаи.",    trust:  16, audience:  6, income: -4 },
            { text: "Тужиш за клевета.",                         trust:   6, audience: -4, income: -8 }
        ]
    },

    {
        title: "Сценарио 25",
        text:  "Тренд на кратки видеа бара инвестиција во вертикален формат.",
        options: [
            { text: "Инвестираш цела редакција.",               trust:  -2, audience: 20, income: 12 },
            { text: "Тестираш со мал тим.",                      trust:   6, audience: 10, income:  4 },
            { text: "Игнорираш – тоа е мода.",                   trust:   2, audience: -8, income: -4 }
        ]
    },

    {
        title: "Сценарио 26",
        text:  "Алгоритам те казнува, па трафикот опаѓа 40%.",
        options: [
            { text: "Менуваш SEO наслови.",                      trust:  -6, audience: 16, income:  6 },
            { text: "Фокус на директни претплатници.",           trust:   8, audience: -4, income: -6 },
            { text: "Плаќаш реклами за враќање на трафик.",      trust:  -4, audience: 12, income: -8 }
        ]
    },

    {
        title: "Сценарио 27",
        text:  "Кризен настан бара 24/7 покривање, тимот е прегорен.",
        options: [
            { text: "Плаќаш овертајм.",                           trust:   4, audience: 10, income: -8 },
            { text: "Вработуваш фриленсери.",                   trust:   2, audience:  8, income: -4 },
            { text: "Намалуваш обем, покриваш само клучно.",    trust:   6, audience: -6, income:  0 }
        ]
    },

    {
        title: "Сценарио 28",
        text:  "Донатор сака да диктира уредувачка политика.",
        options: [
            { text: "Прифаќаш – спасува буџет.",                 trust: -20, audience:  4, income: 25 },
            { text: "Одбиваш без двоумење.",                    trust:  20, audience: -6, income: -10 },
            { text: "Преговараш транспарентност и надзор.",      trust:  12, audience:  2, income:  4 }
        ]
    },

    {
        title: "Сценарио 29",
        text:  "Сајтот ти паѓа на ден на голем ексклузив.",
        options: [
            { text: "Пренасочуваш на Mirror домен.",             trust:   6, audience: 10, income:  3 },
            { text: "Издаваш push нотификации со PDF верзија.",  trust:   4, audience:  6, income:  1 },
            { text: "Чекаш да се врати – штета.",               trust:  -8, audience: -18, income: -6 }
        ]
    },

    {
        title: "Сценарио 30",
        text:  "Интервју со контроверзен гостин го крши етичкиот кодекс.",
        options: [
            { text: "Го откажуваш интервјуто.",                  trust:  10, audience: -8, income: -6 },
            { text: "Го снимаš со строг модератор.",            trust:   6, audience:  6, income:  2 },
            { text: "Им даваš целосна слобода.",                trust: -14, audience: 20, income:  8 }
        ]
    },

    {
        title: "Сценарио 31",
        text:  "Сакате да влезете на странски пазар со ограничен буџет.",
        options: [
            { text: "Преведуваш постоечки статии.",              trust:   4, audience: 12, income:  4 },
            { text: "Вработуваш локални новинари.",             trust:  10, audience:  6, income: -8 },
            { text: "Социјални медиуми + инфлуенсери.",         trust:   2, audience: 14, income:  6 }
        ]
    },

    {
        title: "Сценарио 32",
        text:  "Рекламна кампања со крипто-спонзори.",
        options: [
            { text: "Прифаќаш, но само регулирани компании.",    trust:   4, audience:  8, income: 12 },
            { text: "Полно партнерство – големи пари.",         trust: -16, audience: 16, income: 24 },
            { text: "Одбиваш крипто.",                           trust:   8, audience: -6, income: -6 }
        ]
    },

    {
        title: "Сценарио 33",
        text:  "Уредниците се караат јавно на Твитер.",
        options: [
            { text: "Издаваш дисциплинска мерка.",              trust:  10, audience: -4, income: -4 },
            { text: "Бараш јавен мирен подкаст.",               trust:   6, audience:  6, income:  2 },
            { text: "Шегуваш дека е ПР трик.",                  trust:  -8, audience: 12, income:  4 }
        ]
    },

    {
        title: "Сценарио 34",
        text:  "Апликација за вести добива негативни ревјуа за UX.",
        options: [
            { text: "Инвестираш во редизајн.",                  trust:   6, audience:  8, income: -10 },
            { text: "Решаваш багови, UX подоцна.",              trust:   4, audience:  4, income: -4 },
            { text: "Игнорираш – оценки не се важни.",          trust:  -8, audience: -12, income:  2 }
        ]
    },

    {
        title: "Сценарио 35",
        text:  "Наградна игра: Дали бараш лични податоци за учество?",
        options: [
            { text: "Да – продадеш ги на маркетери.",           trust: -12, audience: 14, income: 18 },
            { text: "Минимално – име и е‑пошта.",              trust:   8, audience:  4, income:  4 },
            { text: "Без податоци, само забава.",               trust:  12, audience: -4, income: -6 }
        ]
    },

    {
        title: "Сценарио 36",
        text:  "Владата објавува лажни статистики.",
        options: [
            { text: "Ги пренесуваш како официјални.",           trust: -20, audience: 12, income:  6 },
            { text: "Проверуваш со експерти.",                  trust:  18, audience:  6, income: -2 },
            { text: "Одбиваш да ги објавиш.",                   trust:  10, audience: -6, income: -4 }
        ]
    },

    {
        title: "Сценарио 37",
        text:  "Твој репортер добива смртни закани.",
        options: [
            { text: "Јавно го поддржуваш и информираш полиција.", trust: 14, audience:  4, income: -4 },
            { text: "Го преместуваш на побезбедна задача.",      trust:  6, audience:  2, income: -2 },
            { text: "Игнорираш – не креваш паника.",             trust: -12, audience:  0, income:  0 }
        ]
    },

    {
        title: "Сценарио 38",
        text:  "Имаш ексклузив за познато влијателно лице кое прави злосторство.",
        options: [
            { text: "Објавуваш веднаш.",                         trust: 16, audience: 18, income:  8 },
            { text: "Бараш нивен коментар пред објава.",         trust: 10, audience:  8, income:  2 },
            { text: "Продаваш на таблоиди.",                    trust: -18, audience: 22, income: 16 }
        ]
    },

    {
        title: "Сценарио 39",
        text:  "Локален бизнис те тужи за клевета.",
        options: [
            { text: "Се бориш во суд – веруваш во фактите.",    trust: 12, audience:  4, income: -10 },
            { text: "Се извинуваш и повлекуваш статија.",       trust: -8, audience: -4, income: -4 },
            { text: "Склучуваш спогодба и пишуваш корекција.",  trust:  6, audience:  2, income: -2 }
        ]
    },

    {
        title: "Сценарио 40",
        text:  "Мораш да избираш меѓу квалитет или квантитет на содржина.",
        options: [
            { text: "Повеќе статии, помалку длабина.",          trust: -6, audience: 14, income:  8 },
            { text: "Помалку но истражувачки.",                 trust: 14, audience:  4, income: -6 },
            { text: "Микс – пола‑пола.",                        trust:  6, audience:  8, income:  2 }
        ]
    },

    {
        title: "Сценарио 41",
        text:  "Твој новинар е фатен со плагијат.",
        options: [
            { text: "Го отпушташ и објавуваш изјава.",           trust: 16, audience: -2, income: -4 },
            { text: "Суспендираш и го обучуваш.",               trust:  8, audience: -4, income: -2 },
            { text: "Прикриваш – ништо не било.",               trust: -20, audience:  0, income:  0 }
        ]
    },

    {
        title: "Сценарио 42",
        text:  "За време на емисија, гостин кажува дискриминаторски коментар.",
        options: [
            { text: "Го прекинуваш и се извинуваш веднаш.",     trust: 14, audience: -2, income: -4 },
            { text: "Потоа објавуваш корекција.",               trust:  6, audience:  0, income: -1 },
            { text: "Игнорираш – шоу мора да продолжи.",        trust: -16, audience:  6, income:  4 }
        ]
    },

    {
        title: "Сценарио 43",
        text:  "Модна марка сака advertorial маскиран како репортажа.",
        options: [
            { text: "Прифаќаш без ознака.",                     trust: -18, audience: 12, income: 18 },
            { text: "Јасно го маркираш како спонзорирано.",      trust:  10, audience: -4, income: -4 },
            { text: "Одбиваш.",                                 trust:   8, audience: -6, income: -6 }
        ]
    },

    {
        title: "Сценарио 44",
        text:  "Алгоритам за препораки пишува сопствени наслови (AI).",
        options: [
            { text: "Оставаш AI неоправен.",                    trust: -10, audience: 18, income:  6 },
            { text: "Рачно одобруваш секој наслов.",            trust:  10, audience: -6, income: -4 },
            { text: "Балансирано – AI + човечки филтер.",       trust:   8, audience:  8, income:  2 }
        ]
    },

    {
        title: "Сценарио 45",
        text:  "Правиш партнерство со е‑спорт лига.",
        options: [
            { text: "Полн пренос со ко‑брендинг.",              trust:  -4, audience: 20, income: 14 },
            { text: "Само вести, без ексклузив.",               trust:   6, audience:  6, income:  4 },
            { text: "Игнорираш е‑спорт.",                       trust:   0, audience: -10, income: -4 }
        ]
    },

    {
        title: "Сценарио 46",
        text:  "Платформата најавува задолжителен процент домашна продукција.",
        options: [
            { text: "Инвестираш во локални продукции.",        trust:  10, audience:  8, income: -10 },
            { text: "Купуваш евтини формати.",                 trust:  -6, audience: 12, income:  4 },
            { text: "Бараш изземање/лоби.",                    trust:  -2, audience:  0, income:  8 }
        ]
    },

    {
        title: "Сценарио 47",
        text:  "Голема тех‑компанија нуди скапа реклама со услов да пишуваш само позитивни вести за нив.",
        options: [
            { text: "Прифаќаш без двоумење.",                   trust: -20, audience: 18, income: 25 },
            { text: "Одбиваш целосно.",                        trust:  18, audience: -8, income: -8 },
            { text: "Бараш независна проверка на тврдењата.",  trust:  10, audience:  6, income:  5 }
        ]
    }
];

let currentQuestion = 0;
let trust = 0;
let audience = 0;
let income = 0;

const titleEl = document.getElementById("question-title");
const textEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const trustBar = document.querySelector("#trust-bar .progress-fill");
const audienceBar = document.querySelector("#audience-bar .progress-fill");
const incomeBar = document.querySelector("#income-bar .progress-fill");

const trustValue = document.getElementById("trust-value");
const audienceValue = document.getElementById("audience-value");
const incomeValue = document.getElementById("income-value");


function showQuestion() {
    const q = questions[currentQuestion];
    titleEl.textContent = q.title;
    textEl.textContent = q.text;

    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-button";
        btn.textContent = opt.text;
        btn.onclick = () => {
            trust += opt.trust;
            audience += opt.audience;
            income += opt.income;

            updateStats();

            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showEndScreen();
            }
        };
        optionsContainer.appendChild(btn);
    });
}

function showEndScreen() {
    titleEl.textContent = "Играта заврши!";
    textEl.textContent = `Ти имаш: Доверба - ${trust}, Публика - ${audience}, Приход - ${income}`;

    optionsContainer.innerHTML = "";
    const restartBtn = document.createElement("button");
    restartBtn.className = "option-button";
    restartBtn.textContent = "Рестартирај игра";
    restartBtn.onclick = () => {
        trust = 0;
        audience = 0;
        income = 0;
        currentQuestion = 0;
        updateStats();
        showQuestion();
    };
    optionsContainer.appendChild(restartBtn);
}

function updateStats() {
    // Ограничување за доверба: 0 - 100
    trust = Math.min(Math.max(trust, 0), 100);

    // Публика: не може да е помала од 0, ама може да биде > 100
    audience = Math.max(audience, 0);

    // Приход: не може да падне под -50, а може да расте без ограничување
    income = Math.max(income, -50);

    trustValue.textContent = trust;
    audienceValue.textContent = audience;
    incomeValue.textContent = income;

    trustBar.style.width = trust + "%";

    // Ако публика надмине 100, да го покажува max 100% на progress bar, ама вредноста е вистинска
    audienceBar.style.width = Math.min(audience, 100) + "%";

    // Слично за приход, max ширина 100% на progress bar
    incomeBar.style.width = Math.min(income, 100) + "%";
}


updateStats();
showQuestion();
