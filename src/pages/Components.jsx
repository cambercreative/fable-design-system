import React from 'react';
import styled from 'styled-components';

const ComponentsContainer = styled.div`
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

function Components() {
  return (
    <ComponentsContainer>
      <Title>Components</Title>
      <Description>
        Our component library provides a set of reusable UI elements designed for consistency,
        accessibility, and ease of use. Each component adheres to our design principles and can be
        customized to fit your specific needs.
      </Description>
      
      {/* Component categories and examples will go here */}
      <p>Component library content coming soon.</p>
    </ComponentsContainer>
  );
}

export default Components;