import {getRandomInteger} from '../utils.js';

const allOffers = [
  {
    type: 'flight',
    offers: [
      {
        title: 'Add luggage',
        price: 30,
      },
      {
        title: 'Switch to comfort class',
        price: 100,
      },
      {
        title: 'Add meal',
        price: 15,
      },
      {
        title: 'Choose seats',
        price: 5,
      },
      {
        title: 'Travel by train',
        price: 40,
      },
    ],
  },
  {
    type: 'taxi',
    offers: [
      {
        title: 'Order Uber',
        price: 20,
      },
    ],
  },
  {
    type: 'sightseeing',
    offers: [
      {
        title: 'Book tickets',
        price: 40,
      },
      {
        title: 'Lunch in city',
        price: 30,
      },
    ],
  },
  {
    type: 'restaurant',
    offers: [
      {
        title: 'Book a table',
        price: 50,
      },
    ],
  },
  {
    type: 'train',
    offers: [
      {
        title: 'Add luggage',
        price: 20,
      },
    ],
  },
  {
    type: 'ship',
    offers: [
      {
        title: 'Switch to comfort class',
        price: 70,
      },
    ],
  },
];

export const generateOffersType = (type) => {
  const offers = allOffers.filter((offer) => offer.type === type);

  return offers.length < 1 ? [] : offers[0].offers;
};


export const generatePointOffers = (type) => {
  let pointOffers = generateOffersType(type);

  if (pointOffers.length > 0) {
    pointOffers = pointOffers.slice(0, getRandomInteger(0, pointOffers.length - 1));
  }

  return pointOffers;
};
