import {createMenuTemplate} from './view/menu.js';
import {createInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createTripSortingTemplate} from './view/sorting.js';
import {createMessageFormTemplate} from './view/message-form-create.js';
import {createPointViewTemplate} from './view/point-edit';
import {createPointTemplate} from './view/point.js';
import {createAddNewPointTemplate} from './view/add-new-point.js';

const POINT_COUNT = 3;

const RenderPlace = {
  BEFORE_END: 'beforeend',
  AFTER_BEGIN: 'afterbegin',
};

const mainElement = document.querySelector('.trip-main');
const controlsNavElement = mainElement.querySelector('.trip-controls__navigation');
const controlsFiltersElement = mainElement.querySelector('.trip-controls__filters');
const eventsElement = document.querySelector('.trip-events');


const render = (container, template, place = RenderPlace.BEFORE_END) => container.insertAdjacentHTML(place, template);


render(mainElement, createInfoTemplate(), RenderPlace.AFTER_BEGIN);
render(mainElement, createTripCostTemplate(), RenderPlace.AFTER_BEGIN);
render(controlsNavElement, createMenuTemplate());
render(controlsFiltersElement, createFiltersTemplate());

render(eventsElement, createTripSortingTemplate());
render(eventsElement, createPointViewTemplate());

for (let i = 0; i < POINT_COUNT; i++) {
  render(eventsElement, createPointTemplate());
}

render(eventsElement, createMessageFormTemplate());
render(eventsElement, createAddNewPointTemplate());
