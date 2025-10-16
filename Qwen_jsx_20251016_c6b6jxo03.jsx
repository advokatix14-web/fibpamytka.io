import React from 'react';

const App = () => {
  // Уголовный кодекс данные
  const ukData = [
    { article: "6.1", violation: "Умышленное причинение тяжкого вреда", fine: "от 50 до 100", arrest: "от 3 до 6", kpz: "30 - 60" },
    { article: "НТ 6.1.1", violation: "По неосторожности причинение тяжкого вреда", fine: "от 50 до 100", arrest: "от 1 до 3", kpz: "30" },
    { article: "6.2", violation: "Убийство (добыня)", fine: "-", arrest: "от 7 до 15", kpz: "70 - 120" },
    { article: "СТ 6.2.1", violation: "Убийство по неосторожности", fine: "-", arrest: "от 1 до 3", kpz: "30" },
    { article: "7.1", violation: "Похищение человека", fine: "-", arrest: "от 4 до 9", kpz: "40 - 80" },
    { article: "10.4", violation: "Разбой (на трассе, например, с оружием)", fine: "-", arrest: "от 5 до 9", kpz: "50 - 90" },
    { article: "СТ 11.4", violation: "Неуплата штрафа по постановлению", fine: "-", arrest: "от 3 до 6", kpz: "30 - 60" },
    { article: "ОТ 12.1", violation: "Терроризм", fine: "-", arrest: "от 12 до 20", kpz: "120" },
    { article: "СТ 12.3", violation: "Захват заложника (похититель) с целью понуждения гос-ва", fine: "-", arrest: "от 7 до 11", kpz: "70 - 110" },
    { article: "НТ 12.6", violation: "Проникновение на охраняемый федеральный (мерия, физ, саспа)", fine: "-", arrest: "от 3 до 4", kpz: "30" },
    { article: "НТ 12.6.1", violation: "Проникновение на охраняемый региональный (псд, лсд, емс)", fine: "-", arrest: "от 1 до 2", kpz: "30" },
    { article: "НТ 12.6.2", violation: "Проникновение на охраняемый военный (фз)", fine: "-", arrest: "от 4 до 6", kpz: "40 - 60" },
    { article: "Т 12.7", violation: "Нелегальный оборот оружия", fine: "-", arrest: "от 4 до 8", kpz: "40 - 80" },
    { article: "13.1", violation: "Наркотики выше 3 грамм", fine: "-", arrest: "-", kpz: "-" },
    { article: "НТ часть 1", violation: "от 3 до 10 грамм", fine: "-", arrest: "от 1 до 2", kpz: "30" },
    { article: "НТ часть 2", violation: "от 10 до 20 грамм", fine: "-", arrest: "от 5 до 10", kpz: "50 - 100" },
    { article: "Т часть 3", violation: "выше 20 грамм", fine: "-", arrest: "от 5 до 10", kpz: "50 - 100" },
    { article: "СТ часть 1", violation: "Restricted", fine: "-", arrest: "от 1 до 3", kpz: "30" },
    { article: "Т часть 2", violation: "Secret", fine: "-", arrest: "от 3 до 5", kpz: "30 - 50" },
    { article: "Т часть 3", violation: "Top Secret", fine: "-", arrest: "от 12 до 20", kpz: "120" },
    { article: "15.1", violation: "Превышение должностных полномочий", fine: "-", arrest: "-", kpz: "-" },
    { article: "часть 1", violation: "превышение рядового сотрудника", fine: "-", arrest: "от 2 до 4", kpz: "30 - 40" },
    { article: "часть 2", violation: "руководящим, кроме правительства", fine: "-", arrest: "от 4 до 7", kpz: "40 - 70" },
    { article: "часть 3", violation: "руководящим в правительстве", fine: "-", arrest: "от 5 до 9", kpz: "50 - 90" },
    { article: "НТ 15.3", violation: "Выдача себя за гослица кем не является (запрашивается прокурор)", fine: "-", arrest: "от 1 до 2", kpz: "30" },
    { article: "Т 15.4", violation: "Получение взятки", fine: "-", arrest: "от 5 до 9", kpz: "50 - 90" },
    { article: "Т 15.5", violation: "Дача взятки", fine: "-", arrest: "от 2 до 4", kpz: "30 - 40" },
    { article: "15.6", violation: "Халатность", fine: "-", arrest: "-", kpz: "-" },
    { article: "СТ часть 1", violation: "полицейское нарушение прав и интересов", fine: "-", arrest: "от 3 до 6", kpz: "30 - 60" },
    { article: "Т часть 2", violation: "полицейское причинение тяжкого (от 50 до 100кп) или смерть", fine: "-", arrest: "от 5 до 10", kpz: "50 - 100" },
    { article: "15.7", violation: "Злоупотребление", fine: "-", arrest: "-", kpz: "-" },
    { article: "часть 1", violation: "превышение рядового сотрудника", fine: "-", arrest: "от 2 до 4", kpz: "30 - 40" },
    { article: "часть 2", violation: "руководящим, кроме правительства", fine: "-", arrest: "от 4 до 7", kpz: "40 - 70" },
    { article: "часть 3", violation: "руководящим в правительстве", fine: "-", arrest: "от 5 до 9", kpz: "50 - 90" },
    { article: "16.1.1", violation: "Вмешательство в работу и/или в процесс действия сотрудником", fine: "-", arrest: "от 2 до 3", kpz: "30" },
    { article: "Т 16.2", violation: "Привлечение невинного к уголовной и административной", fine: "-", arrest: "от 3 до 6", kpz: "30 - 60" },
    { article: "Т 17.1", violation: "Последствие на жизнь двух и более сотрудников", fine: "-", arrest: "от 6 до 11", kpz: "60 - 110" },
    { article: "ОТ 17.1.1", violation: "Последствие на жизнь двух и более сотрудников", fine: "-", arrest: "от 10 до 14", kpz: "100 - 120" },
    { article: "Т 17.2", violation: "Применение или угроза применения насилия не опасного для жизни", fine: "-", arrest: "от 4 до 7", kpz: "40 - 70" },
    { article: "Т 17.2.1", violation: "Угроза расправой над гос служащим и его семьей", fine: "-", arrest: "от 3 до 5", kpz: "30 - 50" },
    { article: "Т 17.3", violation: "Подделка удостоверения / жетона", fine: "-", arrest: "от 4 до 7", kpz: "40 - 70" },
    { article: "Т 17.5", violation: "Неповиновение (рецидив по 46.3 ак за крайние 5 суток)", fine: "-", arrest: "3", kpz: "30" },
    { article: "17.6", violation: "Оказание сопротивления при задержании и / или аресте", fine: "-", arrest: "-", kpz: "-" },
    { article: "НТ часть 1", violation: "препятствие или попытке помешать, попытка скрыться от сотрудников пешим", fine: "-", arrest: "от 2 до 3", kpz: "30" },
    { article: "СТ часть 2", violation: "помеха сотруднику производить задержание / арест иного лица", fine: "-", arrest: "от 4 до 6", kpz: "40 - 60" },
    { article: "НТ часть 3", violation: "попытка скрыться на транспортном средстве и/или не остановка т/с (2 дн)", fine: "-", arrest: "от 3 до 5", kpz: "30 - 50" },
    { article: "Т 18.3", violation: "Дезертирство (для армии)", fine: "-", arrest: "от 2 до 4", kpz: "30 - 60" }
  ];

  // Административный кодекс данные (с исправлениями)
  const akData = [
    { article: "10", violation: "Уклонение от адм.ответственности (неуплата штрафа)", fine: "40", arrest: "-", kpz: "-" },
    { article: "11", violation: "Мелкое хулиганство", fine: "до 5 000", arrest: "от 20 до 40", kpz: "-" },
    { article: "13", violation: "Неприемлемый внешний вид", fine: "до 5 000", arrest: "20", kpz: "-" },
    { article: "13.1", violation: "Нахождение в бронежилете гражданского образца", fine: "от 5 000 до 15 000", arrest: "20", kpz: "-" },
    { article: "15", violation: "Ношение в отк. виде / использование не по назначению оружия и т.д.", fine: "20 000", arrest: "от 20 до 30", kpz: "-" },
    { article: "18", violation: "Наркотики до 3 грамм", fine: "25 000", arrest: "от 30 до 40", kpz: "-" },
    { article: "19", violation: "Малые и средние телефоны (от 5 до 50 кп)", fine: "-", arrest: "от 20 до 40", kpz: "-" },
    { article: "19.1", violation: "Малые и средние телефоны (от 5 до 50кп) по неосторожности", fine: "-", arrest: "от 10 до 30", kpz: "-" },
    { article: "20", violation: "Нарушение режима ВГ/ЧП (если нет состава иной статьи)", fine: "10 000 + изъятие", arrest: "-", kpz: "-" },
    { article: "21", violation: "Угрозы расправой и т.д. для устрашения в сторону гражданского лица", fine: "30 000", arrest: "40", kpz: "-" },
    { article: "22", violation: "Сокрытие личности (сначала справляет имеет ли право скрывать)", fine: "от 5 000 до 10 000", arrest: "-", kpz: "-" },
    { article: "23", violation: "Оскорбление в сторону гражданского лица", fine: "от 5 000 до 12 000", arrest: "-", kpz: "-" },
    { article: "28", violation: "Воспрепятствование оказанию медицинской помощи", fine: "от 20 000 до 25 000", arrest: "-", kpz: "-" },
    { article: "29", violation: "Умышленное повреждение/уничтожение чужого имущества (без УК)", fine: "от 7 000 до 15 000", arrest: "от 20 до 40", kpz: "-" },
    { article: "30.1", violation: "Завладение чужим т/с (угон)", fine: "-", arrest: "30", kpz: "-" },
    { article: "31", violation: "Клевета в сторону гос.служащего", fine: "15 000", arrest: "от 20 до 40", kpz: "-" },
    { article: "32", violation: "Клевета в сторону гражданских лиц", fine: "8 000", arrest: "от 20 до 40", kpz: "-" },
    { article: "36", violation: "Запугивание, шантаж или угроза убийством в сторону гражданского", fine: "25 000", arrest: "40", kpz: "-" },
    { article: "37.1", violation: "Нарушения / газер не по назначению (если нет формирует иное преступление)", fine: "15 000", arrest: "-", kpz: "-" },
    { article: "38", violation: "Браконьерство", fine: "от 10 000 до 15 000", arrest: "-", kpz: "-" },
    { article: "41", violation: "Ложный вызов сотрудников", fine: "10 000", arrest: "от 20 до 30", kpz: "-" },
    { article: "44", violation: "Оскорбление представителя власти при исполнении", fine: "от 20 000 до 30 000", arrest: "40", kpz: "-" },
    { article: "45", violation: "Оружие гос образца не при исполнении (исключили в 35 законе об Оружии)", fine: "20 000", arrest: "-", kpz: "-" },
    { article: "46", violation: "Провокация госслужащего", fine: "-", arrest: "-", kpz: "-" },
    { article: "ч.1", violation: "путем отвлечения от его работы", fine: "20 000", arrest: "40", kpz: "-" },
    { article: "ч.2", violation: "путем создания аварийной ситуации", fine: "15 000", arrest: "от 30 до 40", kpz: "-" },
    { article: "46.2", violation: "Неисп. или ненадлежащее испол. своих обязанностей по службе (без УК)", fine: "от 10 000 до 50 000", arrest: "40", kpz: "-" },
    { article: "46.3", violation: "Невыполнение законному устному требованию", fine: "20 000", arrest: "40", kpz: "-" },
    { article: "46.4", violation: "Нарушение юрисдикции (имеется в виду именно работа)", fine: "30 000", arrest: "-", kpz: "-" },
    { article: "47", violation: "Употребление наркотических веществ гос.служащим", fine: "-", arrest: "-", kpz: "-" },
    { article: "ч.1", violation: "от 1 до 9 единиц", fine: "-", arrest: "отстранение от работы", kpz: "-" },
    { article: "50", violation: "Контрабанда", fine: "-", arrest: "30", kpz: "-" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Государственная памятка для Harmony (FIB)
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Уголовный кодекс */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-center">
              <h2 className="text-2xl font-bold">УГОЛОВНЫЙ КОДЕКС (УК)</h2>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2 px-3 font-semibold">Статья</th>
                    <th className="text-left py-2 px-3 font-semibold">Что было нарушено</th>
                    <th className="text-left py-2 px-3 font-semibold">Сумма штрафа</th>
                    <th className="text-left py-2 px-3 font-semibold">Арест (КПЗ)</th>
                  </tr>
                </thead>
                <tbody>
                  {ukData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-2 px-3 font-mono">{item.article}</td>
                      <td className="py-2 px-3">{item.violation}</td>
                      <td className="py-2 px-3">{item.fine}</td>
                      <td className="py-2 px-3">{item.arrest} {item.kpz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Административный кодекс */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 text-center">
              <h2 className="text-2xl font-bold">АДМИНИСТРАТИВНЫЙ КОДЕКС (АК)</h2>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2 px-3 font-semibold">Статья</th>
                    <th className="text-left py-2 px-3 font-semibold">Что было нарушено</th>
                    <th className="text-left py-2 px-3 font-semibold">Сумма штрафа</th>
                    <th className="text-left py-2 px-3 font-semibold">Арест (КПЗ)</th>
                  </tr>
                </thead>
                <tbody>
                  {akData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/30">
                      <td className="py-2 px-3 font-mono">{item.article}</td>
                      <td className="py-2 px-3">{item.violation}</td>
                      <td className="py-2 px-3">{item.fine}</td>
                      <td className="py-2 px-3">{item.arrest} {item.kpz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Миранда */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8 mb-8">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">ПРАВА ЗАДЕРЖАННОГО</h3>
            <div className="text-lg leading-relaxed max-w-3xl mx-auto">
              <p className="mb-2">Вы имеете право хранить молчание.</p>
              <p className="mb-2">Все, что вы скажете, может быть использовано против вас в суде.</p>
              <p className="mb-2">Вы имеете право на адвоката.</p>
              <p>Если вы не можете позволить себе адвоката, вам будет предоставлен бесплатный адвокат.</p>
            </div>
          </div>
        </div>

        {/* Дополнительные рамки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Порядок задержания */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-red-500 p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🛑</span>
              </div>
              <h3 className="text-xl font-bold text-red-400">ПОРЯДОК ЗАДЕРЖАНИЯ</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Надеть наручники на подозреваемого;</li>
              <li>Предъявить свой опознавательный знак;</li>
              <li>Провести первичный обыск;</li>
              <li>Озвучить статьи, по которым человек был задержан, после зачитать Миранду.</li>
              <li>Доставить задержанного в КПЗ LSPD, LSSD, либо SASPA;</li>
              <li>Произвести личный обыск, (только если не выполнили пункт "в");</li>
              <li>Реализовать права задержанного.</li>
            </ol>
          </div>

          {/* Субъекты задержания */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-yellow-500 p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🚫</span>
              </div>
              <h3 className="text-xl font-bold text-yellow-400">СУБЪЕКТЫ ЗАДЕРЖАНИЯ</h3>
            </div>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Сотрудник/и осуществляющий/e задержание;</li>
              <li>Задержанный;</li>
              <li>Адвокат, в случаях если он был запрошен задержанным;</li>
              <li>Прокурор, в случаях если он был вызван на задержание;</li>
              <li>Руководство задержанного, если он является государственным служащим.</li>
            </ol>
          </div>
        </div>

        {/* Новые секции */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* IC/OOC */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-500 p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">👾</span>
              </div>
              <h3 className="text-xl font-bold text-green-400">IC / OOC</h3>
            </div>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-green-400">👾 IC</span> - в игре</p>
              <p><span className="text-blue-400">🌍 OOC</span> - в реальной жизни</p>
              <div className="mt-3 pt-3 border-t border-gray-600">
                <p>1 год = 30 минут</p>
                <p>1 сутки = 1 минута</p>
              </div>
            </div>
          </div>

          {/* Неприкосновенные лица */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500 p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-purple-400">НЕПРИКОСНОВЕННЫЕ ЛИЦА</h3>
            </div>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-red-400">(НЕ КАФАЙ)</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Губернатор, Вице-Губернатор, Министры и их заместители, Судьи.</li>
                <li>Лидеры гос. фракций (EMS, LSSD, LSPD, FIB, ARMY, SASPA, USSS)</li>
                <li>Конгрессмены.</li>
              </ol>
            </div>
          </div>

          {/* Тайминги */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-500 p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">⌛</span>
              </div>
              <h3 className="text-xl font-bold text-orange-400">ТАЙМИНГИ</h3>
            </div>
            <div className="text-gray-300 space-y-2">
              <p>Время ожидания ответа адвоката - 3 минуты в департамент, 5 минут в рацию.</p>
              <p>Время на приезд - 10 минут.</p>
              <p>Длительность телефонного звонка - 3 минуты.</p>
              <p>Ожидание/приезд начальства/прокурора - 15 минут.</p>
            </div>
          </div>
        </div>

        {/* Ten-коды */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500 p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl">🔟</span>
            </div>
            <h3 className="text-xl font-bold text-cyan-400">БАЗОВЫЕ ТЕН-КОДЫ</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
            <div><span className="font-mono text-cyan-400">10-0</span> Отмена, отбой;</div>
            <div><span className="font-mono text-cyan-400">10-3</span> Радиомолчание;</div>
            <div><span className="font-mono text-cyan-400">10-4</span> Сообщение принял;</div>
            <div><span className="font-mono text-cyan-400">10-6</span> Я занят, подождите;</div>
            <div><span className="font-mono text-cyan-400">10-7</span> Повторите ваше сообщение;</div>
            <div><span className="font-mono text-cyan-400">10-11</span> Нет, отрицаю;</div>
            <div><span className="font-mono text-cyan-400">10-18</span> Срочно. Побыстрее;</div>
            <div><span className="font-mono text-cyan-400">10-20</span> Текущее местоположение;</div>
            <div><span className="font-mono text-cyan-400">10-26</span> Последняя информация (сообщение) отменяется;</div>
            <div><span className="font-mono text-cyan-400">10-77</span> Расчетное время прибытия;</div>
          </div>
        </div>

        {/* Недопустимые доказательства */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-pink-500 p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-pink-400">НЕДОПУСТИМЫЕ ДОКАЗАТЕЛЬСТВА</h3>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Любая информация, полученная от задержанного в ходе допроса до того, как ему были зачитаны его права, даже если есть аудио или видеозапись, где обвиняемый дает показания против себя;</li>
            <li>Показания потерпевшего, свидетеля, основанные на догадке, предположении, слухе, а также показания свидетеля, который не может указать источник своей осведомленности;</li>
            <li>Улики, добытые незаконным путем, когда были нарушены положения действующих нормативно-правовых актов.</li>
          </ol>
        </div>

        {/* Discord */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-indigo-500 p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-xl">🔥</span>
            </div>
            <h3 className="text-xl font-bold text-indigo-400">Discord</h3>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4 inline-block">
            <img 
              src="https://i.ibb.co/35mDbbPq/image.png" 
              alt="Discord Server" 
              className="max-w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;