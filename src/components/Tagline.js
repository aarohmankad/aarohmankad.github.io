import React from 'react';
import styled from 'styled-components';

const Tagline = styled.span`
  display: inline-block;
`;
export default ({ children }) => <Tagline>{children}</Tagline>;
