import dayjs from 'dayjs';
import {getRandomInteger} from '../utils.js';
import {generatePointOffers} from './offers.js';

const generateType = () => {
  const types = [
    'taxi',
    'bus',
    'train',
    'ship',
    'drive',
    'flight',
    'check-in',
    'sightseeing',
    'restaurant',
  ];

  const randomIndex = getRandomInteger(0, types.length - 1);

  return types[randomIndex];
};

const generateDescription = () => {
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Cras aliquet varius magna, non porta ligula feugiat eget',
    'Fusce tristique felis at fermentum pharetra',
    'Aliquam id orci ut lectus varius viverra',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui',
    'Sed sed nisi sed augue convallis suscipit in sed felis',
    'Aliquam erat volutpat',
    'Nunc fermentum tortor ac porta dapibus',
    'In rutrum ac purus sit amet tempus',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

const generateCity = () => {
  const citys = [
    'St. Joseph',
    'Tigard',
    'West Palm Beach',
    'Renton',
    'Mount Prospect',
    'Lakeville',
    'Chicago',
    'Santa Maria',
    'Maplewood',
  ];

  const randomIndex = getRandomInteger(0, citys.length - 1);

  return citys[randomIndex];
};

const generateDateFrom = () => {
  const maxDaysGap = 5;
  const maxMinutesGap = 60;

  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);
  const minutesGap = getRandomInteger(-maxMinutesGap, maxMinutesGap);

  const dateFrom = dayjs()
    .add(daysGap, 'day')
    .add(minutesGap, 'minute')
    .toDate();

  return dateFrom;
};

const generateDateTo = (dateFrom) => {
  const minDurationHours = 1;
  const maxDurationHours = 100;
  const durationHours = getRandomInteger(minDurationHours, maxDurationHours);

  const minMinutes = 1;
  const maxMinutes = 59;
  const durationMinutes = getRandomInteger(minMinutes, maxMinutes);

  const dateTo = dayjs(dateFrom)
    .add(durationHours, 'h')
    .add(durationMinutes, 'm')
    .toDate();

  return dateTo;
};

const generatePicture = () => {
  const PICTURE_QUANTITY_MIN = 1;
  const PICTURE_QUANTITY_MAX = 10;
  const url = 'http://picsum.photos/248/152?r';
  const pictures = [];

  const randomPicturesQuantity = getRandomInteger(PICTURE_QUANTITY_MIN, PICTURE_QUANTITY_MAX);

  for (let i = 1; i < randomPicturesQuantity; i++) {
    const randomPhotoIndex = getRandomInteger(0, 100);
    pictures.push(`${url + randomPhotoIndex}`);
  }

  return pictures;
};

const destination = {
  description: generateDescription(),
  name: generateCity(),
  picture: generatePicture(),
};

export const generatePoint = () => {
  const dateFrom = generateDateFrom();
  const dateTo = generateDateTo(dateFrom);

  return {
    basePrice: getRandomInteger(10, 250),
    destination,
    id: getRandomInteger(),
    dateFrom,
    dateTo,
    offers: generatePointOffers(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    type: generateType(),
  };
};

