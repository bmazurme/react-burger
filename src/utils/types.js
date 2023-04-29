import PropTypes from 'prop-types';

const cardPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
  active: PropTypes.bool,
  extraClass: PropTypes.string,
  icon: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(profileLinkTypes),
});

export { cardPropTypes, propsTypes, linkPropTypes };
