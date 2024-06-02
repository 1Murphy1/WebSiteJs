let facts = [];

function makeApiRequest() {
    fetch('https://catfact.ninja/fact') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            if (facts.length >= 10) {
                alert("Can't output more than 10 facts")
                return 0;
            }
            facts.push(data.fact);
            displayFacts();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

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

// Фильтрация по длине
function filterFactsByLength(facts) {
    const lengthSelect = document.getElementById('length');
    const maxLength = parseInt(lengthSelect.value);

    if (!isNaN(maxLength)) {
        return facts.filter(fact => fact.length <= maxLength);
    }
    return facts;
}

// Сортировка по длине
function sortFacts(facts) {
    const sortSelect = document.getElementById('filter');
    const sortOrder = sortSelect.value;

    if (sortOrder === 'asc') {
        return facts.sort((a, b) => a.length - b.length);
    } else if (sortOrder === 'desc') {
        return facts.sort((a, b) => b.length - a.length);
    }
    return facts;
}

// Поиск и выделение текста
function searchFacts(facts) {
    const searchInput = document.querySelector('input[name="s"]');
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm) {
        return facts.filter(fact => fact.toLowerCase().includes(searchTerm));
    }
    return facts;
}

// Выделение найденного текста
function highlightSearchTerm(fact) {
    const searchInput = document.querySelector('input[name="s"]');
    const searchTerm = searchInput.value;

    if (!searchTerm) return fact;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return fact.replace(regex, '<mark>$1</mark>');
}

// Обновление отображения при изменении фильтров и поиска
document.getElementById('length').addEventListener('change', displayFacts);
document.getElementById('filter').addEventListener('change', displayFacts);
document.querySelector('input[name="s"]').addEventListener('input', displayFacts);