"use strict";

// Функция для отображения с учетом фильтров и сортировки
function displayFacts() {
  var contentDiv = document.querySelector('.main__general__content');
  contentDiv.innerHTML = '';
  var filteredFacts = filterFactsByLength(facts);
  filteredFacts = sortFacts(filteredFacts);
  filteredFacts = searchFacts(filteredFacts);
  filteredFacts.forEach(function (fact) {
    var span = document.createElement('span');
    span.innerHTML = highlightSearchTerm(fact);
    contentDiv.appendChild(span);
    contentDiv.appendChild(document.createElement('br'));
  });
} // Обновление отображения при изменении фильтров и поиска


document.getElementById('length').addEventListener('change', displayFacts);
document.getElementById('filter').addEventListener('change', displayFacts);
document.querySelector('input[name="s"]').addEventListener('input', displayFacts);