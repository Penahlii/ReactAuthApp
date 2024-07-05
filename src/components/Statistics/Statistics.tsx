import React from "react";
import { StatsContainer, StatItem } from "./Statistics.styles";

interface StatisticsProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatsContainer>
      <StatItem>Good: {good}</StatItem>
      <StatItem>Neutral: {neutral}</StatItem>
      <StatItem>Bad: {bad}</StatItem>
      <StatItem>Total: {total}</StatItem>
      <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
    </StatsContainer>
  );
};

export default Statistics;
