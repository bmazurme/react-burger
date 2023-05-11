const getBackgroundColor = (isOver, canDrop) => {
  if (isOver) {
    if (canDrop) {
      return 'honeydew';
    }

    return 'mistyrose';
  }

  return '';
};

export { getBackgroundColor };
