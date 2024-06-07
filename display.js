// Функция для отображения с учетом фильтров и сортировки
function displayFacts() {
    const contentDiv = document.querySelector('.main__general__content');
    contentDiv.innerHTML = '';

    let filteredFacts = filterFactsByLength(facts);
    filteredFacts = sortFacts(filteredFacts);
    filteredFacts = searchFacts(filteredFacts);

    filteredFacts.forEach(fact => {
        const span = document.createElement('span');
        span.innerHTML = highlightSearchTerm(fact);
        contentDiv.appendChild(span);
        contentDiv.appendChild(document.createElement('br'));
    });
}

// Обновление отображения при изменении фильтров и поиска
document.getElementById('length').addEventListener('change', displayFacts);
document.getElementById('filter').addEventListener('change', displayFacts);
document.querySelector('input[name="s"]').addEventListener('input', displayFacts);