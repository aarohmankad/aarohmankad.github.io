import React from 'react';

import aaroh from '../assets/aaroh_compressed.png';
import Header from '../components/Header';
import Page from '../components/Page';
import ProfileImage from '../components/ProfileImage';
import Section from '../components/Section';
import Tagline from '../components/Tagline';
import CompanyList from '../components/CompanyList';

export default () => (
  <Page>
    <div style={{ width: '100%', marginTop: '100px' }}>
      <ProfileImage src={aaroh} alt="" />
      <Tagline>
        <h1>Hi, I'm Aaroh.</h1>
        <small>
          I create value for companies, from startups to Fortune 500
        </small>
      </Tagline>
    </div>

    <div style={{ marginTop: '50px' }}>
      <p>COMPANIES I'VE CONTRIBUTED TO</p>
      <CompanyList />
    </div>
  </Page>
);
