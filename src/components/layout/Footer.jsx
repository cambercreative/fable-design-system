import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing.lg} 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${props => props.theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <Copyright>© {currentYear} Fable. All rights reserved.</Copyright>
        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="https://github.com/cambercreative/fable-design-system" target="_blank" rel="noopener noreferrer">
            GitHub
          </FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterWrapper>
  );
}

export default Footer;