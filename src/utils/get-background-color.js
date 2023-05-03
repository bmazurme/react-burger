const getBackgroundColor = (isOver, canDrop) => {
  console.log(isOver, canDrop);
  if (isOver) {
    if (canDrop) {
      return 'honeydew';
    }

    return 'mistyrose';
  }

  return '';
};

export default getBackgroundColor;
