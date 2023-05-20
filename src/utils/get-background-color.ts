const getBackgroundColor = (isOver: boolean, canDrop: boolean) => {
  if (isOver) {
    if (canDrop) {
      return 'honeydew';
    }

    return 'mistyrose';
  }

  return '';
};

export { getBackgroundColor };
