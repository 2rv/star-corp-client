import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListGrid } from '../../components/grids';
import { Text } from '../../components';
import { colors } from '../../theme';

export const AccountInfo = ({ email, id, login }) => {
  return (
    <React.Fragment>
      <ListGrid>
        {id && (
          <Field>
            <Heading>
              <Text tid="SETTINGS.ACCOUNT_INFO.ID" />
              :&nbsp;
            </Heading>
            <Info>{id}</Info>
          </Field>
        )}
        {login && (
          <Field>
            <Heading>
              <Text tid="SETTINGS.ACCOUNT_INFO.LOGIN" />
              :&nbsp;
            </Heading>
            <Info>{login}</Info>
          </Field>
        )}
        {email && (
          <Field>
            <Heading>
              <Text tid="SETTINGS.ACCOUNT_INFO.EMAIL" />
              :&nbsp;
            </Heading>
            <Info>{email}</Info>
          </Field>
        )}
      </ListGrid>
    </React.Fragment>
  );
};

AccountInfo.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  email: PropTypes.string,
};

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  font-size: 16px;
  line-height: 140%;
  font-weight: 600;
  color: ${colors.textSecondary};
`;

const Info = styled.span`
  font-size: 16px;
  line-height: 140%;
  color: ${colors.textSecondary};
`;
