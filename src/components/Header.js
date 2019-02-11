import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 100px;
`;

export default ({ children }) => <Header>{children}</Header>;
