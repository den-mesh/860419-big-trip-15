import {getRandomInteger} from './utils.js';
import {createMenuTemplate} from './view/menu.js';
import {createInfoTemplate} from './view/trip-info.js';
import {createTripCostTemplate} from './view/trip-cost.js';
import {createFiltersTemplate} from './view/filters.js';
import {createTripSortingTemplate} from './view/sorting.js';
import {createNoPointsMessageTemplate} from './view/no-point-message.js';
import {createPointViewTemplate} from './view/point-edit';
import {createPointTemplate} from './view/point.js';
import {generatePoint} from './mock/point.js';
import {createAddNewPointTemplate} from './view/add-new-point.js';


const pointsCount = getRandomInteger(15, 20);

const points = new Array(pointsCount).fill().map(generatePoint);


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


// for (let i = 0; i < points.length; i++) {
//   render(eventsElement, createPointTemplate(points[i]));
//   console.log(points[i]);
// }

for (const point of points) {
  render(eventsElement, createPointTemplate(point));
  console.log(point);
}


render(eventsElement, createNoPointsMessageTemplate());
render(eventsElement, createAddNewPointTemplate());
