import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import ConstructorBlock from '../constructor-block';
import ConstructorFooter from '../constructor-footer';
import OrderDetails from '../order-details';
import Modal from '../modal';

import { cardPropTypes } from '../../utils/types';

import style from './burger-constructor.module.css';

export default function BurgerConstructor({ items, setItems }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentBun, setCurrentBun] = useState(null);
  const [{ isOver, canDrop }, refMain] = useDrop({
    accept: ['main', 'sauce', 'bun', 'column'],
    drop: (c) => {
      setItems([{ ...c, id: items.length }, ...items]);

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === 'main' || type === 'sauce',
  });

  const getBorder = () => (isOver ? '2px dashed honeydew' : '');
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const removeElement = (id) => setItems(
    items
      .filter((x) => x.id !== id)
      .map((x, i) => ({ ...x, id: i })),
  );

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return 'honeydew';
      }

      return 'mistyrose';
    }

    return '';
  };

  return (
    <section className={style.main}>
      <ConstructorBlock
        {...currentBun}
        position="top"
        style={style}
        setCurrent={setCurrentBun}
      />
      <ul
        className={`${style.items} ${items.length === 0 && style.border}`}
        style={{ backgroundColor: getBackgroundColor(), border: getBorder() }}
        ref={refMain}
      >
        {items.length === 0 ? <span className={style.description}>+</span> : items.map((x, i) => (
          <ConstructorBlock
            key={i}
            {...x}
            style={style}
            items={items}
            index={i}
            setItems={setItems}
            removeElement={removeElement}
          />
        ))}
      </ul>
      <ConstructorBlock
        {...currentBun}
        position="bottom"
        style={style}
        setCurrent={setCurrentBun}
      />
      <ConstructorFooter openPopup={openPopup} />
      <Modal isOpen={isPopupOpen} onClose={closePopup} children={<OrderDetails />} />
    </section>
  );
}

BurgerConstructor.protoType = {
  items: PropTypes.arrayOf(cardPropTypes).isRequired,
};
