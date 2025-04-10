import React from 'react';
import styled from 'styled-components';

const GuidelinesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.125rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  max-width: 800px;
`;

function Guidelines() {
  return (
    <GuidelinesContainer>
      <Title>Design Guidelines</Title>
      <Description>
        Our design guidelines establish a foundation for creating cohesive, intuitive, and accessible
        experiences across all Fable products. These principles help maintain consistency while
        allowing for creativity and innovation.
      </Description>
      
      {/* Guidelines content will go here */}
      <p>Design guidelines content coming soon.</p>
    </GuidelinesContainer>
  );
}

export default Guidelines;