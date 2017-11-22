import React from 'react';
import PropTypes from 'prop-types';

const NavButton = (props) => {
  const icon = (props.prev) ? '<' : '>';
  return (
    <i>{icon}</i>
  );
};

NavButton.propTypes = {
  prev: PropTypes.bool,
};

export default NavButton;
