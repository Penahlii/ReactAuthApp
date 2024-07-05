import React from "react";
import { Button, ButtonContainer } from "./FeedbackOptionsStyles";

interface FeedbackOptionsProps {
  options: string[];
  onLeaveFeedback: (type: "good" | "neutral" | "bad") => void;
}

const FeedbackOptions: React.FC<FeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ButtonContainer>
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => onLeaveFeedback(option as "good" | "neutral" | "bad")}
        >
          {option}
        </Button>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackOptions;
