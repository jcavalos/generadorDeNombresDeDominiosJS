// Arrays para generar dominios
let pronoun = ['the', 'our', 'my', 'your', 'his', 'her', 'this', 'that'];
let adj = ['great', 'big', 'small', 'fast', 'slow', 'smart', 'cool', 'hot', 'new', 'old'];
let noun = ['jogger', 'racoon', 'developer', 'cat', 'dog', 'house', 'car', 'computer', 'phone', 'book'];

// Extensiones normales
let extensions = ['.com', '.net', '.us', '.io', '.org', '.co', '.me', '.info'];

// Domain hacks
let domainHacks = [
  { ending: 'es', extension: '.es' },
  { ending: 'ly', extension: '.ly' },
  { ending: 'er', extension: '.er' },
  { ending: 'ed', extension: '.ed' },
  { ending: 'it', extension: '.it' },
  { ending: 'us', extension: '.us' },
  { ending: 'me', extension: '.me' },
  { ending: 'to', extension: '.to' },
  { ending: 'at', extension: '.at' },
  { ending: 'in', extension: '.in' }
];

// Función para generar dominios
function generateDomains() {
  let domainsContainer = document.getElementById('domains');
  let domainsList = [];

  // Bucles anidados para generar todas las combinaciones
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let baseDomain = pronoun[i] + adj[j] + noun[k];

        // Generar dominios con extensiones normales
        for (let l = 0; l < extensions.length; l++) {
          domainsList.push(baseDomain + extensions[l]);
        }

        // Generar domain hacks
        for (let m = 0; m < domainHacks.length; m++) {
          let hack = domainHacks[m];
          if (baseDomain.endsWith(hack.ending)) {
            let hackedDomain = baseDomain.slice(0, -hack.ending.length) + hack.extension;
            domainsList.push(hackedDomain + ' (hack)');
          }
        }
      }
    }
  }

  // Mostrar todos los dominios generados
  let domainsHTML = `<h3>Dominios Generados (${domainsList.length} total):</h3>`;
  domainsHTML += `<div class="domains-container">`;

  for (let i = 0; i < domainsList.length; i++) {
    domainsHTML += `<p class="domain-item">${domainsList[i]}</p>`;
  }

  domainsHTML += `</div>`;
  domainsContainer.innerHTML = domainsHTML;
}

// Generar dominios cuando cargue la página
window.onload = function () {
  console.log("Generador de dominios cargado 🚀");
  generateDomains();
};
