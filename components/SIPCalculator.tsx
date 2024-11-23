import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import DonutChart from './DonutChart';
import { calculateSIP, formatCurrency, formatPercentage } from '../utils/calculations';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SliderLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-bottom: 4px;
`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResultsText = styled.div`
  flex: 1;
`;

const ResultItem = styled.p`
  font-size: 16px;
  color: #333;
  margin: 8px 0;
`;

const ChartContainer = styled.div`
  flex: 1;
`;

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [results, setResults] = useState({ investedAmount: 0, estimatedReturns: 0, totalValue: 0 });

  useEffect(() => {
    setResults(calculateSIP(monthlyInvestment, rateOfReturn, years));
  }, [monthlyInvestment, rateOfReturn, years]);

  return (
    <Container>
      <Title>SIP Calculator</Title>
      <SliderContainer>
        <SliderLabel>Monthly Investment</SliderLabel>
        <Slider
          min={500}
          max={10000000}
          value={monthlyInvestment}
          onChange={setMonthlyInvestment}
          formatLabel={formatCurrency}
        />
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Expected return rate (p.a)</SliderLabel>
        <Slider
          min={1}
          max={30}
          value={rateOfReturn}
          onChange={setRateOfReturn}
          step={0.1}
          formatLabel={formatPercentage}
        />
      </SliderContainer>
      <SliderContainer>
        <SliderLabel>Time Period (Years)</SliderLabel>
        <Slider
          min={1}
          max={50}
          value={years}
          onChange={setYears}
          formatLabel={(value: number) => `${value} years`}
        />
      </SliderContainer>
      <ResultsContainer>
        <ResultsText>
          <ResultItem>Invested Amount: {formatCurrency(results.investedAmount)}</ResultItem>
          <ResultItem>Estimated Returns: {formatCurrency(results.estimatedReturns)}</ResultItem>
          <ResultItem>Total Value: {formatCurrency(results.totalValue)}</ResultItem>
        </ResultsText>
        <ChartContainer>
          <DonutChart investedAmount={results.investedAmount} estimatedReturns={results.estimatedReturns} />
        </ChartContainer>
      </ResultsContainer>
    </Container>
  );
};

export default SIPCalculator;