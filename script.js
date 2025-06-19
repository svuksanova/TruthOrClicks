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
        title: "Сценарио 1",
        text:  "Добиваш понуда за спонзорирана објава од сомнителен извор. Што ќе направиш?",
        options: [
            { text: "Ја објавувам без проверка.",               trust: -15, audience: 25, income: 20 },
            { text: "Ја одбивам – не е етичка.",               trust:  15, audience: -10, income: -10 },
            { text: "Проверувам и објавувам само ако е точна.", trust:  10, audience: 10, income:   5 }
        ]
    },
    {
        title: "Сценарио 2",
        text:  "Новинар бара да објавиш скандалозна вест која може да го зголеми бројот на гледачи, но да ја намали довербата. Што правиш?",
        options: [
            { text: "Објавувам веднаш.",                        trust: -20, audience: 30, income: 15 },
            { text: "Одбивам поради етика.",                   trust:  20, audience: -5, income: -5 },
            { text: "Проверувам детално пред објава.",         trust:  10, audience:  5, income:  5 }
        ]
    },

    {
        title: "Сценарио 3",
        text:  "Редакцијата добива ексклузивни фотографии од непознат извор.",
        options: [
            { text: "Ги објавуваш без метаподатоци, добри се за кликови.",              trust: -12, audience: 22, income: 12 },
            { text: "Чекаш потврда од експерт, а потоа ќе објавиш.",                   trust:  15, audience: -4, income: -3 },
            { text: "Објавуваш дел, со јасно предупредување.",    trust:   8, audience:  8, income:  4 }
        ]
    },

    {
        title: "Сценарио 4",
        text:  "Твоите конкуренти пуштаат сензационалистички наслов за истиот настан.",
        options: [
            { text: "Ги надминуваш со уште поголем клик бејт.", trust: -18, audience: 26, income: 14 },
            { text: "Остануваш кај фактите.",                   trust:  14, audience: -6, income: -4 },
            { text: "Правиш аналитичко видео со експерти.",     trust:  12, audience: 10, income:  7 }
        ]
    },

    {
        title: "Сценарио 5",
        text:  "Вработен сака да објави статија со AI генерирани слики без атрибуција.",
        options: [
            { text: "Дозволуваш – побрзо е.",                    trust: -10, audience: 14, income:  9 },
            { text: "Бараш лиценца и јасна ознака за AI.",       trust:  12, audience: -3, income: -2 },
            { text: "Забрануваш AI содржина целосно.",           trust:   8, audience: -6, income: -5 }
        ]
    },

    {
        title: "Сценарио 6",
        text:  "Има неочекуван прекин на струја додека се снима шоу во живо.",
        options: [
            { text: "Продолжуваш со мобилен стрим.",             trust:   6, audience: 12, income:  4 },
            { text: "Го паузираш шоуто до техничка поправка.",   trust:   4, audience: -8, income: -3 },
            { text: "Емитуваш претходно снимен материјал.",      trust:   2, audience: -4, income:  1 }
        ]
    },

    {
        title: "Сценарио 7",
        text:  "Политичар ти нуди интервју, но да добие прашања однапред.",
        options: [
            { text: "Се согласуваш.",                            trust: -14, audience: 18, income: 10 },
            { text: "Одбиваш компромис.",                         trust:  16, audience: -8, income: -6 },
            { text: "Прифаќаш, но додаваш непредвидени прашања.", trust:   8, audience:  6, income:  3 }
        ]
    },

    {
        title: "Сценарио 8",
        text:  "На твојот форум се појавува популарна, но непроверена теорија на заговор.",
        options: [
            { text: "Ја бришеш без објаснување.",                trust:   5, audience: -10, income: -4 },
            { text: "Оставaш – слобода на говор.",               trust: -15, audience:  18, income:  7 },
            { text: "Пишуваш детална проверка на фактите.",      trust:  14, audience:  4, income:  3 }
        ]
    },

    {
        title: "Сценарио 9",
        text:  "Спортист прифаќа интервју само ако добие дел од рекламните приходи.",
        options: [
            { text: "Го прифаќаш условот.",                            trust:  -8, audience: 16, income: 10 },
            { text: "Нудиш алтернативно надомест.",               trust:   3, audience:  4, income: -2 },
            { text: "Одбиваш и интервјуираш негов ривал.",             trust:   6, audience: -5, income: -3 }
        ]
    },

    {
        title: "Сценарио 10",
        text:  "Корисници на Твитер масовно те прозиваат дека си пристрасен во известувањето.",
        options: [
            { text: "Ги игнорираш твитовите.",                         trust:  -6, audience:  2, income:  0 },
            { text: "Објавуваш транспарентен одговор со докази.", trust:  12, audience:  6, income:  2 },
            { text: "Одговараш саркастично и поттикнуваш уште полемика.",                             trust: -18, audience: 14, income:  6 }
        ]
    },

    {
        title: "Сценарио 11",
        text:  "Секцијата за коментари е полна со говор на омраза.",
        options: [
            { text: "Деактивираш коментари.",                    trust:   5, audience: -10, income: -4 },
            { text: "Модерираш со филтри.",                       trust:   8, audience: -2, income: -1 },
            { text: "Ништо – важен ти е трафикот.",               trust: -12, audience: 12, income:  5 }
        ]
    },

    {
        title: "Сценарио 12",
        text:  "Примање донација од НПО со силна агенда.",
        options: [
            { text: "Прифаќаш во тајност.",                       trust: -16, audience:  8, income: 20 },
            { text: "Јавно ја објавуваш донацијата.",               trust:  10, audience: -4, income:  4 },
            { text: "Одбиваш и земаш заем.",                      trust:   6, audience: -6, income: -8 }
        ]
    },

    {
        title: "Сценарио 13",
        text:  "Откриваш дека твојата мобилна апликација има пропуст што прибира лични податоци на корисниците без дозвола.",
        options: [
            { text: "Тивко го исправуваш багот без да ја информираш јавноста.",                       trust:  -8, audience:  2, income: -2 },
            { text: "Објавуваш јавно известување со извинување и објаснување.",          trust:  14, audience: -3, income: -5 },
            { text: "Ништо не преземаш, очекувајќи дека веста брзо ќе се заборави.",         trust: -18, audience: 10, income:  6 }
        ]
    },

    {
        title: "Сценарио 14",
        text:  "Интернетот полуди по меме што случајно го содржи логото на твојот медиум и станува хит на социјалните мрежи.",
        options: [
            { text: "Го прифаќаш трендот и започнуваш продажба на мерч со тоа меме.",                trust:   4, audience: 18, income: 15 },
            { text: "араш да се отстрани поради повреда на авторски права.",       trust: -10, audience: -12, income:  2 },
            { text: "Го адаптираш мемето со едукативна или општествено одговорна порака.",         trust:  10, audience:  8, income:  5 }
        ]
    },

    {
        title: "Сценарио 15",
        text:  "Пандемиja предизвикува паника – луѓето бараат реално известување.",
        options: [
            { text: "Креваш паника за повеќе кликови.",                  trust: -20, audience: 28, income: 12 },
            { text: "Соработуваш со здравствени власти, потоа објавуваш.",        trust:  16, audience:  8, income:  4 },
            { text: "Чекаш повеќе информации пред да објавиш.",                  trust:  4, audience: -4, income: -2 }
        ]
    },

    {
        title: "Сценарио 16",
        text:  "Инфлуенсер бара да води твоја емисија.",
        options: [
            { text: "Прифаќаш – донесува публика.",              trust:  -6, audience: 20, income: 10 },
            { text: "Ставаш строг договор за етика.",            trust:   8, audience: 10, income:  5 },
            { text: "Одбиваш – не се вклопува.",                 trust:   6, audience: -8, income: -4 }
        ]
    },

    {
        title: "Сценарио 17",
        text:  "Имаш доказ за корупција, но рекламниот клиент е вмешан.",
        options: [
            { text: "Објавуваш.",                                 trust:  22, audience: 14, income: -10 },
            { text: "Молчиш и ги задржуваш рекламите.",           trust: -22, audience: -2, income: 24 },
            { text: "Даваш материјал на друг медиум да објави.",            trust:  10, audience:  6, income: -4 }
        ]
    },

    {
        title: "Сценарио 18",
        text:  "Објавуваш подкаст, но звукот е лош.",
        options: [
            { text: "Пушташ како е, бидејќи е важно брзо да се објави без оглед на квалитетот.",                    trust:  -4, audience: 12, income:  6 },
            { text: "Одложуваш и го средуваш проблемот со звукот.",              trust:   8, audience: -3, income: -2 },
            { text: "Го објавуваш, но снимаш кратко извинување и понудуваш нешто дополнително за слушателите.",        trust:   6, audience:  4, income:  1 }
        ]
    },

    {
        title: "Сценарио 19",
        text:  "Регионална криза ја блокира доставата на весници.",
        options: [
            { text: "Ги префрлаш сите изданија онлајн, односно дигитално.",               trust:   7, audience: 10, income:  5 },
            { text: "Наоѓаш нова логистичка служба за дистрибуција.",         trust:   3, audience:  6, income: -6 },
            { text: "Одлучуваш да чекаш состојбата да се стабилизира.",                    trust:  -4, audience: -12, income: -4 }
        ]
    },

    {
        title: "Сценарио 20",
        text:  "Хакер ти нуди пристап до ексклузивни протечени е-пошта пораки.",
        options: [
            { text: "Ги купуваш информациите.",                                trust: -14, audience: 22, income:  8 },
            { text: "Го пријавуваш случајот на надлежните.",                             trust:  16, audience: -8, income: -6 },
            { text: "Договараш детали и бараш правна проценка.",       trust:   8, audience:  6, income:  2 }
        ]
    },

    {
        title: "Сценарио 21",
        text:  "Прес-конференција се преклопува со важно спортско финале.",
        options: [
            { text: "Одлучуваш да го пренесуваш спортот поради неговата популарност.",             trust:  -6, audience: 18, income: 10 },
            { text: "Го даваш директно преносот од прес-конференцијата бидејќи е од јавен интерес.",              trust:   6, audience: -8, income: -3 },
            { text: "Поставуваш поделен екран за да се следат двете паралелно.",                      trust:   4, audience:  6, income:  2 }
        ]
    },

    {
        title: "Сценарио 22",
        text:  "Твој репортер е уапсен за време на протест.",
        options: [
            { text: "Го објавуваш инцидентот веднаш.",          trust:  12, audience: 10, income:  3 },
            { text: "Го прикриваш за да не се влоши репутацијата на медиумот.",          trust: -18, audience:  2, income:  0 },
            { text: "Повикуваш адвокати и чекаш официјална изјава пред да реагираш.",       trust:   8, audience: -4, income: -2 }
        ]
    },

    {
        title: "Сценарио 23",
        text:  "Партнерски медиум објавува невистинита информација користејќи го твоето лого.",
        options: [
            { text: "Јавно ја раскинуваш соработката со партнерот.",       trust:  18, audience: -6, income: -6 },
            { text: "Приватно ги замолуваш да ја исправат грешката.",             trust:  -8, audience:  2, income:  1 },
            { text: "Се дистанцираш од партнерот и објавуваш поправка на веста преку својот медиум.", trust: 10, audience:  4, income:  2 }
        ]
    },

    {
        title: "Сценарио 24",
        text:  "Најпопуларниот водител бара покачување, инаку ќе ја напушти работата.",
        options: [
            { text: "Се согласуваш и му доделуваш бонус.",                     trust:  -4, audience: 16, income: -8 },
            { text: "Предлагаш долгорочен договор со учество во профитот.", trust:   6, audience:  8, income: -4 },
            { text: "Одбиваш, со став дека никој не е незаменлив.",          trust:   8, audience: -10, income:  6 }
        ]
    },

    {
        title: "Сценарио 25",
        text:  "Системот за коментари се сруши токму кога е објавена голема вест.",
        options: [
            { text: "Ги пренасочуваш корисниците кон социјалните мрежи.",               trust:   4, audience:  8, income:  2 },
            { text: "Го исклучуваш системот додека не се санира проблемот.",             trust:   2, audience: -6, income: -2 },
            { text: "Креираш привремено Google Forms за собирање реакции.",    trust:   5, audience:  4, income:  1 }
        ]
    },

    {
        title: "Сценарио 26",
        text:  "Некој тврди дека имаш скриени донори и пласира " +
            "недокажани документи со информации за тоа.",
        options: [
            { text: "Го игнорираш случајот, надевајќи се дека ќе згасне сам.",                    trust: -10, audience:  4, income:  0 },
            { text: "Јавно објавуваш детални финансиски извештаи за транспарентност.",    trust:  16, audience:  6, income: -4 },
            { text: "Поднесуваш тужба за клевета против обвинувачот.",                         trust:   6, audience: -4, income: -8 }
        ]
    },

    {
        title: "Сценарио 27",
        text:  "Тренд на кратки видеа бара инвестиција во вертикален формат.",
        options: [
            { text: "Целата редакција ја пренасочуваш кон овој формат.",               trust:  -2, audience: 20, income: 12 },
            { text: "Започнуваш со пробен проект и мал тим.",                      trust:   6, audience: 10, income:  4 },
            { text: "Го игнорираш трендот, сметајќи го за минлива мода.",                   trust:   2, audience: -8, income: -4 }
        ]
    },

    {
        title: "Сценарио 28",
        text:  "Алгоритамот те казнува, па трафикот опаѓа 40%.",
        options: [
            { text: "Го менуваш SEO соодветно на новите барања.",                      trust:  -6, audience: 16, income:  6 },
            { text: "Се фокусираш на зголемување на директните претплатници.",           trust:   8, audience: -4, income: -6 },
            { text: "Инвестираш во платени реклами за враќање на посетителите.",      trust:  -4, audience: 12, income: -8 }
        ]
    },

    {
        title: "Сценарио 29",
        text:  "Кризна ситуација бара постојано 24/7 известување, но тимот е исцрпен.",
        options: [
            { text: "Плаќаш прекувремена работа за тимот, сепак мора да се објавува.",                           trust:   4, audience: 10, income: -8 },
            { text: "Ангажираш фриленс новинари за поддршка.",                   trust:   2, audience:  8, income: -4 },
            { text: "Го намалуваш обемот на покривање, фокусирајќи се само на клучните вести.",    trust:   6, audience: -6, income:  0 }
        ]
    },

    {
        title: "Сценарио 30",
        text:  "Донатор сака да влијае врз уредувачката политика.",
        options: [
            { text: "Се согласуваш за да го спасиш буџетот.",                 trust: -20, audience:  4, income: 25 },
            { text: "Одбиваш без никаква дилема.",                    trust:  20, audience: -6, income: -10 },
            { text: "Преговараш за транспарентност и механизми за надзор.",      trust:  12, audience:  2, income:  4 }
        ]
    },

    {
        title: "Сценарио 31",
        text:  "Сајтот ти се урнува токму на денот на важен ексклузивен материјал.",
        options: [
            { text: "Ги пренасочуваш посетителите кон Mirror домен.",             trust:   6, audience: 10, income:  3 },
            { text: "Испраќаш push известувања со PDF верзија на текстот.",  trust:   4, audience:  6, income:  1 },
            { text: "Чекаш серверот да се врати, прифаќајќи ја штетата.",               trust:  -8, audience: -18, income: -6 }
        ]
    },

    {
        title: "Сценарио 32",
        text:  "Интервју со контроверзен гостин го крши етичкиот кодекс.",
        options: [
            { text: "Го откажуваш интервјуто.",                  trust:  10, audience: -8, income: -6 },
            { text: "Го снимаш со строг модератор за контрола на содржината.",            trust:   6, audience:  6, income:  2 },
            { text: "Му даваш целосна слобода да зборува што сака.",                trust: -14, audience: 20, income:  8 }
        ]
    },

    {
        title: "Сценарио 33",
        text:  "Сакате да влезете на странски пазар со ограничен буџет.",
        options: [
            { text: "Преведуваш веќе популарни постоечки статии.",              trust:   4, audience: 12, income:  4 },
            { text: "Вработувате локални новинари за подобра покриеност.",             trust:  10, audience:  6, income: -8 },
            { text: "Се фокусирате на социјални мрежи и инфлуенсери.",         trust:   2, audience: 14, income:  6 }
        ]
    },

    {
        title: "Сценарио 34",
        text:  "Медиумот добива понуда за рекламирање од крипто компании.",
        options: [
            { text: "Прифаќате, но само регулирани компании.",    trust:   4, audience:  8, income: 12 },
            { text: "Прифаќате целосно партнерство поради голема заработка.",         trust: -16, audience: 16, income: 24 },
            { text: "Одбивате да рекламирате крипто.",                           trust:   8, audience: -6, income: -6 }
        ]
    },

    {
        title: "Сценарио 35",
        text:  "Уредниците се караат јавно на Твитер.",
        options: [
            { text: "Спроведуваш дисциплинска мерка.",              trust:  10, audience: -4, income: -4 },
            { text: "Бараш јавен подкаст за помирување.",               trust:   6, audience:  6, income:  2 },
            { text: "Се шегуваш дека е само ПР трик.",                  trust:  -8, audience: 12, income:  4 }
        ]
    },

    {
        title: "Сценарио 36",
        text:  "Апликација за вести добива негативни ревјуа за UX.",
        options: [
            { text: "Инвестираш во редизајн.",                  trust:   6, audience:  8, income: -10 },
            { text: "Решаваш багови, UX подоцна.",              trust:   4, audience:  4, income: -4 },
            { text: "Игнорираш, бидејќи оценки не се важни.",          trust:  -8, audience: -12, income:  2 }
        ]
    },

    {
        title: "Сценарио 37",
        text:  "Наградна игра: Дали бараш лични податоци за учество?",
        options: [
            { text: "Да, потоа ги продаваш на маркетери.",           trust: -12, audience: 14, income: 18 },
            { text: "Минимално, само име и е пошта.",              trust:   8, audience:  4, income:  4 },
            { text: "Без податоци, играта е само за забава.",               trust:  12, audience: -4, income: -6 }
        ]
    },

    {
        title: "Сценарио 38",
        text:  "Владата објавува лажни статистики.",
        options: [
            { text: "Ги пренесуваш како официјални.",           trust: -20, audience: 12, income:  6 },
            { text: "Проверуваш со експерти, потоа проверени ги пренесуваш.",                  trust:  18, audience:  6, income: -2 },
            { text: "Одбиваш да ги објавиш.",                   trust:  10, audience: -6, income: -4 }
        ]
    },

    {
        title: "Сценарио 39",
        text:  "Твој репортер добива смртни закани.",
        options: [
            { text: "Јавно го поддржуваш и информираш полиција.", trust: 14, audience:  4, income: -4 },
            { text: "Го преместуваш на побезбедна задача.",      trust:  6, audience:  2, income: -2 },
            { text: "Игнорираш, бидејќи сметаш дека не треба да креваш паника.",             trust: -12, audience:  0, income:  0 }
        ]
    },

    {
        title: "Сценарио 40",
        text:  "Имаш ексклузив за познато влијателно лице кое прави злосторство.",
        options: [
            { text: "Објавуваш веднаш, важно е да се извести јавноста.",                         trust: 16, audience: 18, income:  8 },
            { text: "Бараш нивен коментар пред објава, сепак тоа ќе донесе повеќе кликови.",         trust: 10, audience:  8, income:  2 },
            { text: "Продаваш на таблоиди, поради големиот финансиски профит што тие можат да го понудат.",                    trust: -18, audience: 22, income: 16 }
        ]
    },

    {
        title: "Сценарио 41",
        text:  "Локален бизнис те тужи за клевета.",
        options: [
            { text: "Се бориш во суд, веруваш во фактите кои се објавени.",    trust: 12, audience:  4, income: -10 },
            { text: "Се извинуваш и ја повлекуваш статијата иако е вистина.",       trust: -8, audience: -4, income: -4 },
            { text: "Склучуваш спогодба и пишуваш корекција.",  trust:  6, audience:  2, income: -2 }
        ]
    },

    {
        title: "Сценарио 42",
        text:  "Треба да избереш дали да произведуваш повеќе содржина со помал квалитет или помалку, но подлабоко истражена.",
        options: [
            { text: "Производиш повеќе статии со помалку детална содржина.",          trust: -6, audience: 14, income:  8 },
            { text: "Се фокусираш на помал број, но квалитетни истражувачки текстови.",                 trust: 14, audience:  4, income: -6 },
            { text: "Ги комбинираш и двете – микс од квантитет и квалитет.",                        trust:  6, audience:  8, income:  2 }
        ]
    },

    {
        title: "Сценарио 43",
        text:  "Твој новинар е фатен со плагијат.",
        options: [
            { text: "Го отпушташ и објавуваш јавно изјава и извинување за тоа.",           trust: 16, audience: -2, income: -4 },
            { text: "Го суспендираш и го обучуваш.",               trust:  8, audience: -4, income: -2 },
            { text: "Прикриваш, како ништо да не било, сепак е важна репутацијата.",               trust: -20, audience:  0, income:  0 }
        ]
    },

    {
        title: "Сценарио 44",
        text:  "За време на емисија, гостин кажува дискриминаторски коментар.",
        options: [
            { text: "Го прекинуваш веднаш и се извинуваш на јавноста.",     trust: 14, audience: -2, income: -4 },
            { text: "Не реагираш веднаш, но потоа објавуваш корекција.",               trust:  6, audience:  0, income: -1 },
            { text: "Игнорираш, шоуто мора да продолжи.",        trust: -16, audience:  6, income:  4 }
        ]
    },

    {
        title: "Сценарио 45",
        text:  "Моден бренд бара да објавиш advertorial што изгледа како редакциска репортажа.",
        options: [
            { text: "Прифаќаш да го објавиш без јасна ознака за спонзорство.",                     trust: -18, audience: 12, income: 18 },
            { text: "Јасно го означуваш како спонзорирана содржина.",      trust:  10, audience: -4, income: -4 },
            { text: "Одбиваш да објавиш таква содржина.",                                 trust:   8, audience: -6, income: -6 }
        ]
    },

    {
        title: "Сценарио 46",
        text:  "Алгоритамот за препораки генерира свои наслови користејќи вештачка интелигенција.",
        options: [
            { text: "Оставаш AI да создава наслови без корекција од човек.",                    trust: -10, audience: 18, income:  6 },
            { text: "Рачно одобруваш секој наслов пред објава.",            trust:  10, audience: -6, income: -4 },
            { text: "Комбинираш автоматски AI наслови со човечки филтер.",       trust:   8, audience:  8, income:  2 }
        ]
    },

    {
        title: "Сценарио 47",
        text:  "Склучуваш партнерство со е-спорт лига.",
        options: [
            { text: "Го пренесуваш целиот настан со ко-брендинг.",              trust:  -4, audience: 20, income: 14 },
            { text: "Објавуваш само вести без ексклузивни материјали.",               trust:   6, audience:  6, income:  4 },
            { text: "Го игнорираш е-спортот како тема.",                       trust:   0, audience: -10, income: -4 }
        ]
    },

    {
        title: "Сценарио 48",
        text:  "Платформата воведува обврска за одреден процент содржина да биде домашна продукција.",
        options: [
            { text: "Инвестираш во производство на локални содржини.",        trust:  10, audience:  8, income: -10 },
            { text: "Купуваш евтини локализирани формати за да го исполниш барањето.",                 trust:  -6, audience: 12, income:  4 },
            { text: "Бараш исклучок од обврската за домашна продукција.",                    trust:  -2, audience:  0, income:  8 }
        ]
    },

    {
        title: "Сценарио 49",
        text:  "Голема компанија нуди скапа реклама со услов да пишуваш само позитивни вести за нив.",
        options: [
            { text: "Прифаќаш без двоумење, го зголемува профитот.",                   trust: -20, audience: 18, income: 25 },
            { text: "Одбиваш целосно.",                        trust:  18, audience: -8, income: -8 },
            { text: "Предлагаш независна проверка на нивните тврдења пред објава.",  trust:  10, audience:  6, income:  5 }
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
    textEl.textContent = `Ти имаш: Доверба -> ${trust}, Публика -> ${audience}, Приход -> ${income}`;

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

