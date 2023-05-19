import { ElementType } from 'react';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Urls } from '../utils';

export type TypeSubLink = {
  id: string;
  label: string;
  url: string;
};

export type TypeMainLink = {
  id: string;
  label: string;
  extraClass: string;
  url?: string;
  icon: ElementType;
  links?: TypeSubLink[],
  onClick?: () => void;
};

const mainLinks: TypeMainLink[] = [
  {
    id: '0',
    label: 'Конструктор',
    extraClass: 'mr-2',
    icon: BurgerIcon,
    url: Urls.BASE,
  },
  {
    id: '1',
    label: 'Лента заказов',
    extraClass: '',
    icon: ListIcon,
    url: Urls.QUEUE.INDEX,
  },
  {
    id: '2',
    label: 'Личный кабинет',
    extraClass: '',
    icon: ProfileIcon,
    links: [
      { id: 'l01', label: 'Профиль', url: Urls.PROFILE.INDEX },
      { id: 'l02', label: 'История заказов', url: `${Urls.PROFILE.INDEX}/orders` },
      { id: 'l03', label: 'Выход', url: Urls.SIGN.IN },
    ],
  },
];

export default mainLinks;
