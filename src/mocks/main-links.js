import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Urls } from '../utils';

const mainLinks = [
  {
    id: 0,
    label: 'Конструктор',
    extraClass: 'mr-2',
    icon: BurgerIcon,
    url: Urls.BASE,
  },
  {
    id: 1,
    label: 'Лента заказов',
    extraClass: '',
    icon: ListIcon,
    url: Urls.QUEUE,
  },
  {
    id: 2,
    label: 'Личный кабинет',
    extraClass: '',
    icon: ProfileIcon,
    links: [
      { id: 'l01', label: 'Профиль', url: Urls.PROFILE.INDEX, },
      { id: 'l02', label: 'История заказов', url: Urls.HISTORY },
      { id: 'l03', label: 'Выход', url: Urls.SIGN.OUT },
    ],
  },
];

export default mainLinks;
