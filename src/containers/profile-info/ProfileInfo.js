import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ListGrid } from '../../components/grids';
import { Text } from '../../components';

export const ProfileInfo = ({ nickname, id }) => {
  return (
    <React.Fragment>
      <ListGrid>
        {id && (
          <Field>
            <Heading>
              <Text tid="PROFILE.PROFILE_INFO.ID" />
              :&nbsp;
            </Heading>
            <Info>{id}</Info>
          </Field>
        )}
        {nickname && (
          <Field>
            <Heading>
              <Text tid="PROFILE.PROFILE_INFO.NICKNAME" />
              :&nbsp;
            </Heading>
            <Info>{nickname}</Info>
          </Field>
        )}
      </ListGrid>
    </React.Fragment>
  );
};

ProfileInfo.propTypes = {
  id: PropTypes.number.isRequired,
  nickname: PropTypes.string.isRequired,
};

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  color: #fff;
`;

const Info = styled.span`
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`;
