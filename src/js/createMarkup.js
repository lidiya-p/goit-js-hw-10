export function createMarkupCard([{ name, capital, population, flags, languages }]) {
  return `<div class="title-wrapper">
        <img class="flag" src="${flags.svg}" alt="flag" width="60" />
        <h2>${name}</h2>
      </div>
      <p class="card-item">Capital: <span>${capital}</span></p>
      <p class="card-item">Population: <span>${population}</span></p>
      <p class="card-item">Languages: <span>${languages[0].name}</span></p>`;
}

export function createMarkupList({ name, flags }) {
  return `<li class="list-item">
        <img class="flag" src="${flags.svg}" alt="flag" width="60" />
        <p>${name}</p>
      </li>`;
}