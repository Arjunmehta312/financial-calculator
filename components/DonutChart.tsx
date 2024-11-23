import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendColor = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

interface DonutChartProps {
  investedAmount: number;
  estimatedReturns: number;
}

const COLORS = ['#E1BEE7', '#00C853'];

const DonutChart: React.FC<DonutChartProps> = ({ investedAmount, estimatedReturns }) => {
  const data = [
    { name: 'Invested Amount', value: investedAmount },
    { name: 'Estimated Returns', value: estimatedReturns },
  ];

  return (
    <>
      <ChartContainer>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <LegendContainer>
        {data.map((entry, index) => (
          <LegendItem key={`legend-${index}`}>
            <LegendColor color={COLORS[index % COLORS.length]} />
            <span>{entry.name}</span>
          </LegendItem>
        ))}
      </LegendContainer>
    </>
  );
};

export default DonutChart;

