import PropTypes from 'prop-types';

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dragRef: PropTypes.any,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
});

const propsTypes = PropTypes.shape({
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.object,
});

const profileLinkTypes = PropTypes.shape({
  label: PropTypes.string.isRequired,
});

const linkPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  icon: PropTypes.any.isRequired,
  links: PropTypes.arrayOf(profileLinkTypes),
});

export { cardPropTypes, propsTypes, linkPropTypes };
