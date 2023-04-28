import PropTypes from 'prop-types';

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});

const propsTypes = PropTypes.shape({
  url: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.object,
});

export { cardPropTypes, propsTypes };
