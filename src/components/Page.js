import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  padding-left: 100px;
`;

export default ({ children }) => <Page>{children}</Page>;
