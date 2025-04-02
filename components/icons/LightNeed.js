import styled from "styled-components";

export default function LightNeed({ lightNeed }) {
  const filledCircles =
    lightNeed === "Partial Shade" ? 1 : lightNeed === "Partial Shade" ? 2 : 3;
  return (
    <StyledLightWrapper>
      <StyledLightCircle $isFilled={filledCircles >= 1} />
      <StyledLightCircle $isFilled={filledCircles >= 2} />
      <StyledLightCircle $isFilled={filledCircles >= 3} />
    </StyledLightWrapper>
  );
}

const StyledLightCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isFilled }) => ($isFilled ? "orange" : "white")};
  border: 2px solid orange;
  display: inline-block;
  margin: 5px;
`;

const StyledLightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
