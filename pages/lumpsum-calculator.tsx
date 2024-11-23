import React from 'react';
import styled from 'styled-components';
import LumpsumCalculator from '../components/LumpsumCalculator';
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

const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: #6200ea;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const LumpsumCalculatorPage: React.FC = () => {
  return (
    <Container>
      <BackLink href="/">← Back to Home</BackLink>
      <Title>Lumpsum Calculator</Title>
      <LumpsumCalculator />
    </Container>
  );
};

export default LumpsumCalculatorPage;

