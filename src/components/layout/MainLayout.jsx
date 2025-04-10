import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;