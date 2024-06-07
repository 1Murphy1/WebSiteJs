let facts = [];

function AddFact() {
    if (facts.length > 9) {
        alert("Нельзя вывести больше 10 фактов")
    } else {
        makeApiRequest()
            .then(fact => {
                if (!facts.includes(fact)) {
                    facts.push(fact);
                    displayFacts();
                }
            })
    }
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