import React from 'react';
import styled from 'styled-components';

const ResourcesContainer = styled.div`
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

function Resources() {
  return (
    <ResourcesContainer>
      <Title>Resources</Title>
      <Description>
        These resources help designers and developers implement the Fable design system consistently
        across products. Find design tokens, assets, and tools to streamline your workflow.
      </Description>
      
      {/* Resources content will go here */}
      <p>Resources content coming soon.</p>
    </ResourcesContainer>
  );
}

export default Resources;