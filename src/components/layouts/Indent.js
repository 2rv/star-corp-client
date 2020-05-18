import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

export const IndentLayout = ({ children, size, className }) => {
  return (
    <Padding size={size} className={className}>
      {children}
    </Padding>
  );
};

IndentLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
};

const Padding = styled.div`
  padding: ${({ size }) => sizes.indent[size] || sizes.indent.default};
`;
