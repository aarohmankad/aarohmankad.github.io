import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  border-radius: 100%;
  display: inline-block;
  margin: 0 auto;
  margin-right: 20px;
  width: 100px;

  @media (max-width: 800px) {
    display: block;
    margin: 0 auto;
  }
`;

export default props => <ProfileImage {...props} />;
