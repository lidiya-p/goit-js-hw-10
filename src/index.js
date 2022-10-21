import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/refs';
import { createMarkupCard } from './js/createMarkup';
import { createMarkupList } from './js/createMarkup';
import { fetchCountries } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onSearchInput, DEBOUNCE_DELAY));

function onSearchInput(e) {
  const country = e.target.value.trim().toLowerCase();
  if (!country) {
    refs.list.innerHTML = '';
    refs.info.innerHTML = '';
    return;
  }

  fetchCountries(country)
    .then(data => {
      if (data.length === 1) {
        const markupCard = createMarkupCard(data);
        refs.info.innerHTML = markupCard;
        refs.list.innerHTML = '';
      } else if (data.length >= 2 && data.length <= 10) {
        const markupList = data.map(createMarkupList).join('');
        refs.list.innerHTML = markupList;
        refs.info.innerHTML = '';
      } else {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}
