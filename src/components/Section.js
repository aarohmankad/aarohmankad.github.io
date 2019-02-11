import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
`;

export default ({ children }) => <Section>{children}</Section>;
