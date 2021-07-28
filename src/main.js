import {createTripInfoTemplate} from './view/trip-info.js';
import {createMenuTemplate} from './view/menu.js';
import {createFiltersTemplate} from './view/filters.js';
import {createPointTemplate} from './view/point.js';
import {createAddNewPointTemlate} from './view/add-new-point.js';
import {createSortTemplate} from './view/sort.js';
import {createLoadingTemplate} from './view/loading.js';
import {createEmptyTemplate} from './view/list-empty.js';

const POINT_COUNT = 3;
const isLoading = false;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.trip-events');
const siteHeadingElement = document.querySelector('.trip-main');
const siteTabsNavigationElement = siteHeadingElement.querySelector('.trip-controls__navigation');
const siteFiltersElement = siteHeadingElement.querySelector('.trip-controls__filters');

render(siteTabsNavigationElement, createMenuTemplate(), 'beforeend');
render(siteFiltersElement, createFiltersTemplate(), 'beforeend');

if (isLoading) {
  render(siteMainElement, createLoadingTemplate(), 'beforeend');
} else {
  const siteEventsListElement = document.createElement('ul');
  siteEventsListElement.classList.add('trip-events__list');
  siteMainElement.insertAdjacentElement('beforeend', siteEventsListElement);

  if (POINT_COUNT !== 0) {
    render(siteHeadingElement, createTripInfoTemplate(), 'afterbegin');
    render(siteEventsListElement, createSortTemplate(), 'beforebegin');

    for (let i = 0; i < POINT_COUNT; i++) {
      if (i === 0) {
        render(siteEventsListElement, createAddNewPointTemlate(), 'beforeend');
      } else {
        render(siteEventsListElement, createPointTemplate(), 'beforeend');
      }
    }
  } else {
    render(siteMainElement, createEmptyTemplate(), 'beforeend');
  }
}
