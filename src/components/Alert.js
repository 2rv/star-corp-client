import React from 'react';
import PropTypes from 'prop-types';
import AlertUI from '@material-ui/lab/Alert';

import { Text } from './Text';

export const Alert = ({ tid, type, className, variant }) => {
  return (
    <AlertUI className={className} variant={variant} severity={type}>
      <Text tid={tid} />
    </AlertUI>
  );
};

Alert.propTypes = {
  tid: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
};
