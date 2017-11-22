import React from 'react';
import PropTypes from 'prop-types';

const MonthButton = (props) => (
  <button onClick={props.onClick}>{props.title}</button>
);

MonthButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default MonthButton;
