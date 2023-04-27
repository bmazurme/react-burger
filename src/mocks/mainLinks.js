import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const mainLinks = [
  {
    id: 0,
    label: 'Конструктор',
    active: true,
    extraClass: 'mr-2',
    icon: BurgerIcon,
  },
  {
    id: 1,
    label: 'Лента заказов',
    active: false,
    extraClass: '',
    icon: ListIcon,
  },
  {
    id: 3,
    label: 'Личный кабинет',
    active: false,
    extraClass: '',
    icon: ProfileIcon,
    links: [{ label: 'Профиль' }, { label: 'История заказов' }, { label: 'Выход' }],
  },
];

export default mainLinks;