import styled from "styled-components";

export default function FertiliserSeason({ fertiliserSeason }) {
  return (
    <StyledFertiliserWrapper>
      <StyledFertiliserCircle $isFilled={fertiliserSeason.includes("Spring")}>
        Spring
      </StyledFertiliserCircle>
      <StyledFertiliserCircle $isFilled={fertiliserSeason.includes("Summer")}>
        Summer
      </StyledFertiliserCircle>
      <StyledFertiliserCircle $isFilled={fertiliserSeason.includes("Fall")}>
        Autumn
      </StyledFertiliserCircle>
      <StyledFertiliserCircle $isFilled={fertiliserSeason.includes("Winter")}>
        Winter
      </StyledFertiliserCircle>
    </StyledFertiliserWrapper>
  );
}

const StyledFertiliserCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $isFilled }) => ($isFilled ? "brown" : "white")};
  border: 2px solid brown;
  display: inline-block;
  margin: 5px;
`;

const StyledFertiliserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
