import Image from "next/image";
import styled from "styled-components";

export default function PlantCard({ name, botanicalName, image }) {
  return (
    <div>
      <StyledImage
        src={image}
        alt={name}
        width="150"
        height="150"
        // fill="true"
        sizes="(max-width: 150px)"
      ></StyledImage>
    </div>
  );
}

const StyledImage = styled(Image)`
  object-fit: cover;
`;
