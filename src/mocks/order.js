import cards from './data';

const RANGE = 5;
const mockData = {
  number: '034535',
  time: ' Сегодня, 16:20',
  name: 'Death Star Starship Main бургер',
  price: 480,
  icons: cards.slice(0, RANGE),
  count: cards.length - RANGE,
  cards,
};

export { RANGE, mockData };
