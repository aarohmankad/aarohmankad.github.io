import React from 'react';
import styled from 'styled-components';

const ProfileImage = styled.img`
  border-radius: 100%;
  margin-right: 20px;
  width: 100px;
`;

export default props => <ProfileImage {...props} />;
