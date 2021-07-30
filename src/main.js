import {createMenuTemplate} from './view/menu.js';
import {createInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createTripSortingTemplate} from './view/sorting.js';
import {createPointListTemplate} from './view/point-list.js';
import {createFormCreateTemplate} from './view/form-create.js';
import {createFormEditTemplate} from './view/form-edit.js';

const POINT_COUNT = 3;

const tripMainElement = document.querySelector('.trip-main');
const tripControlsNaElement = tripMainElement.querySelector('.trip-controls__navigation');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripMainElement, createInfoTemplate(), 'afterbegin');
render(tripControlsNaElement, createMenuTemplate(), 'beforeend');
render(tripControlsFiltersElement, createFiltersTemplate(), 'beforeend');

const tripInfoElement = tripMainElement.querySelector('.trip-info');
render(tripInfoElement, createTripCostTemplate(), 'beforeend');

render(tripEventsElement, createTripSortingTemplate(), 'afterbegin');
render(tripEventsElement, createFormCreateTemplate(), 'afterbegin');

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripEventsElement, createPointListTemplate(), 'beforeend');
}


const tripEventsListElement = tripEventsElement.querySelector('.trip-events__list');
render(tripEventsListElement, createFormEditTemplate(), 'afterbegin');
