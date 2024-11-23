import { format } from 'date-fns';

export const calculateSIP = (monthlyInvestment: number, rateOfReturn: number, years: number) => {
  const monthlyRate = rateOfReturn / 12 / 100;
  const months = years * 12;
  const totalInvested = monthlyInvestment * months;
  const totalValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  const estimatedReturns = totalValue - totalInvested;

  return {
    investedAmount: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue),
  };
};

export const calculateLumpsum = (investment: number, rateOfReturn: number, years: number) => {
  const totalValue = investment * Math.pow(1 + rateOfReturn / 100, years);
  const estimatedReturns = totalValue - investment;

  return {
    investedAmount: Math.round(investment),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue),
  };
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export const formatDate = (date: Date): string => {
  return format(date, 'dd MMM yyyy');
};

