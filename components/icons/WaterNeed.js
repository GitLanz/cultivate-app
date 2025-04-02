import styled from "styled-components";

export default function WaterNeed({ waterNeed }) {
  const filledCircles =
    waterNeed === "Low" ? 1 : waterNeed === "Medium" ? 2 : 3;
  return (
    <StyledWaterWrapper>
      <StyledWaterCircle $isFilled={filledCircles >= 1} />
      <StyledWaterCircle $isFilled={filledCircles >= 2} />
      <StyledWaterCircle $isFilled={filledCircles >= 3} />
    </StyledWaterWrapper>
  );
}

const StyledWaterCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isFilled }) => ($isFilled ? "blue" : "white")};
  border: 2px solid blue;
  display: inline-block;
  margin: 5px;
`;

const StyledWaterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
