import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

const CalculatorCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const CalculatorTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
`;

const CalculatorDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title>Financial Calculators</Title>
      <CalculatorGrid>
        <StyledLink href="/sip-calculator">
          <CalculatorCard>
            <CalculatorTitle>SIP Calculator</CalculatorTitle>
            <CalculatorDescription>Calculate returns on your Systematic Investment Plan</CalculatorDescription>
          </CalculatorCard>
        </StyledLink>
        <StyledLink href="/lumpsum-calculator">
          <CalculatorCard>
            <CalculatorTitle>Lumpsum Calculator</CalculatorTitle>
            <CalculatorDescription>Estimate returns on your one-time investments</CalculatorDescription>
          </CalculatorCard>
        </StyledLink>
      </CalculatorGrid>
    </Container>
  );
};

export default HomePage;

