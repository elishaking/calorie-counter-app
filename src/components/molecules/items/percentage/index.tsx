import React from "react";
import styled from "styled-components";
import { IPercentage } from "../../../../interfaces";

interface TProps {
  percentage: IPercentage;
}

const Wrapper = styled.li`
  p {
    color: #333;
    margin: 0 1em;
  }

  span.name {
    color: #969696;
  }

  span.value {
    font-weight: bold;
  }
`;

export const PercentageItem = ({ percentage }: TProps) => {
  return (
    <Wrapper>
      <p>
        <span className="name">{percentage.name}: </span>{" "}
        <span className="value">{percentage.value.toPrecision(2)}%</span>
      </p>
    </Wrapper>
  );
};
