import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 50vw;
  margin: 0 auto;
  min-height: 100vh;
`;

export default ({ children }) => <Page>{children}</Page>;
