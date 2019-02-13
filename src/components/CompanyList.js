import React from 'react';
import styled from 'styled-components';

import companies from '../data/companies';

const CompanyListContainer = styled.ul`
  list-style-type: none;
  display: block;
  clear: left;
  padding: 0;
`;

const Company = styled.li`
  border: ${props => props.border}
  position: relative;
  width: 200px;
  
  margin-bottom: 25px;
  padding: 15px;
  padding-left: ${props => (props.isfuture ? '15px' : '0px')};
  float: left;

  & > strong {
    font-size: 20px;
    font-weight: bold;
  }

  & > small {
    display: block;
    font-size: 15px;
    font-weight: 200;
  }
`;

export default () => (
  <div>
    <CompanyListContainer>
      {companies.future.map(company => (
        <Company border="2px dashed white" isfuture>
          <strong>{company.company}</strong>
          <small>
            Starting as a {company.title} in {company.time}!
          </small>
        </Company>
      ))}
    </CompanyListContainer>

    <CompanyListContainer>
      {companies.present.map(company => (
        <Company>
          <strong>{company.company}</strong>
          <small>{company.title}</small>
        </Company>
      ))}
    </CompanyListContainer>

    <CompanyListContainer>
      {companies.past.map(company => (
        <Company>
          <strong>{company.company}</strong>
          <small>{company.title}</small>
        </Company>
      ))}
    </CompanyListContainer>
  </div>
);
