import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop, useDrag } from 'react-dnd';

import ElementBun from '../element-bun';
import ElementMain from '../element-main';

// https://react-dnd.github.io/react-dnd/about
// https://react-dnd.github.io/react-dnd/examples/sortable/simple
export default function ConstructorBlock(props) {
  const ref = useRef(null);
  const {
    position, name, index, setItems, items, setCurrent,
  } = props;
  const removeElement = (id) => setItems(
    items.filter((x) => x.id !== id).map((x, i) => ({ ...x, id: i })),
  );

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];
        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

  const [, drop] = useDrop({
    accept: ['column'],
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ opacity }, drag] = useDrag({
    type: 'column',
    item: { index, name },
    collect: (monitor) => ({ opacity: monitor.isDragging() ? 0.1 : 1 }),
  });

  const [{ isOver, canDrop }, refBunTop] = useDrop({
    accept: ['bun', 'main', 'sauce'],
    drop: (c) => {
      setCurrent({ ...c, thumbnail: c.image, isLocked: true });

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === 'bun',
  });

  drag(drop(ref));

  return (
    position
      ? (<ElementBun
          {...props}
          isOver={isOver}
          canDrop={canDrop}
          refBunTop={refBunTop}
        />)
      : (
        <ElementMain
          {...props}
          opacity={opacity}
          refMain={ref}
          removeElement={removeElement}
        />
      ));
}

ConstructorBlock.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  setCurrent: PropTypes.func.isRequired,
};
