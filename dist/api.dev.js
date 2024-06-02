"use strict";

var facts = [];

function makeApiRequest() {
  fetch('https://catfact.ninja/fact').then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    return response.json();
  }).then(function (data) {
    console.log('Success:', data);

    if (facts.length >= 10) {
      alert("Can't output more than 10 facts");
      return 0;
    }

    facts.push(data.fact);
    displayFacts(); // Вызов функции для отображения данных с учетом фильтров и сортировки
  })["catch"](function (error) {
    console.error('There has been a problem with your fetch operation:', error);
  });
}

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
}