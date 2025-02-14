// В качестве контейнера используется виджет "Текст"

// Создаем объект с настройками для переключателя.
const selectOptions = [
    {id: 'group1', name: 'Группа 1', widgets: ['d0dc0a7d51ce42979909570aef1e9d59', 'f3956f1461144dd2848fbd6ada6aa6c9', '5268023f44f548b19e30272f528172fb']},
    {id: 'group2', name: 'Группа 2', widgets: ['efdb938fe38e424c8a4869772c36b572', '1964d299727b4552aa0d982d22d72348', '45edbdf8a12f4dfdb0a709facbf11577']}
    ];
// Создаем элемент выпадающего списка.
// Присваиваем ему идентификатор для простого обращения и добавляем стилизацию.
// Заполняем список элементами на основе объекта с настройками.
const selectElem = document.createElement('select');
selectElem.setAttribute('id', 'groupselector');
selectElem.style.cssText = 'width: 200px; height: 50px; margin: 0 auto; text-align: center';
selectOptions.forEach(item => {
    let opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.name;
    selectElem.append(opt);
});
// Создаем функцию для переключения видимости списку виджетов.
function toggleVisibility(widgets, state) {
    widgets.forEach(wId => {
        document.querySelector(`[id=widget-${wId}]`).style.visibility = state;
    });
}
// Навешиваем на элемент выпадающего списка обработку события изменения.
// Обработчик перебирает массив настроек и включает видимость для элементов группы выбранной в селекторе и отключает для остальных.
selectElem.addEventListener('change', (e) => {
    selectOptions.forEach(item => {
        if (item.id === e.target.value) {
            toggleVisibility(item.widgets, 'visible');
        } else {
            toggleVisibility(item.widgets, 'hidden');
        }
    });
});
// Для того чтобы выпадающий список и первоначальное состояние инициализировались только при первой загрузке дашборда, а не при каждой перерисовке виджетов
// добавляем простую проверку на существование элемента с выпадающим списком.
if (!document.querySelector('[id=groupselector]')) {
    document.querySelector(`[id=widget-${w.general.renderTo}]`).appendChild(selectElem);
    selectOptions.forEach((opt, idx) => {
        if (idx) {
            // На всякий случай выполняем первоначальное присвоение видимости только после прогрузки все виджетов
            // Без этого могут ломаться заголовки сводных таблиц.
            visApi().onAllWidgetsLoadedListener({guid: '1234'}, () => {
                toggleVisibility(opt.widgets, 'hidden');
            });
        }
    });
}

TextRender({
    text: w.general,
    style: w.style
});