import PropTypes from 'prop-types';
import React from 'react';
import css from './Button.module.css';
import { LoadMoreType } from 'components/types';

const Button = ({ loadMore }: LoadMoreType) => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more...
    </button>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
