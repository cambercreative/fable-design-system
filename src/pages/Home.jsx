import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xxl};
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.textPrimary};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textSecondary};
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>Fable Design System</Title>
        <Subtitle>
          A comprehensive design system for Fable - capturing life stories through AI
        </Subtitle>
      </Hero>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>Components</FeatureTitle>
          <FeatureDescription>
            Reusable UI components built with React, designed for consistency and accessibility.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Guidelines</FeatureTitle>
          <FeatureDescription>
            Design principles, best practices, and usage guidelines for creating cohesive experiences.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Resources</FeatureTitle>
          <FeatureDescription>
            Design tokens, assets, and tools to help you implement the Fable design language.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
}

export default Home;