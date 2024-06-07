"use strict";

// Фильтрация по длине
function filterFactsByLength(facts) {
  var lengthSelect = document.getElementById('length');
  var maxLength = parseInt(lengthSelect.value);

  if (!isNaN(maxLength)) {
    return facts.filter(function (fact) {
      return fact.length <= maxLength;
    });
  }

  return facts;
} // Сортировка по длине


function sortFacts(facts) {
  var sortSelect = document.getElementById('filter');
  var sortOrder = sortSelect.value;

  if (sortOrder === 'asc') {
    return facts.sort(function (a, b) {
      return a.length - b.length;
    });
  } else if (sortOrder === 'desc') {
    return facts.sort(function (a, b) {
      return b.length - a.length;
    });
  }

  return facts;
} // Поиск и выделение текста


function searchFacts(facts) {
  var searchInput = document.querySelector('input[name="s"]');
  var searchTerm = searchInput.value.toLowerCase();

  if (searchTerm) {
    return facts.filter(function (fact) {
      return fact.toLowerCase().includes(searchTerm);
    });
  }

  return facts;
} // Выделение найденного текста


function highlightSearchTerm(fact) {
  var searchInput = document.querySelector('input[name="s"]');
  var searchTerm = searchInput.value;
  if (!searchTerm) return fact;
  var regex = new RegExp("(".concat(searchTerm, ")"), 'gi');
  return fact.replace(regex, '<mark>$1</mark>');
}