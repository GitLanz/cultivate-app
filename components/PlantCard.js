import Image from "next/image";
import styled from "styled-components";
import plants from "@/assets/plants";

export default function PlantCard({ name, botanicalName, image }) {
  return (
    <div>
      <PlantCardWrapper>
        <PlantImageWrapper>
          <StyledImage
            src={image}
            alt={name}
            width={150}
            height={150}
            priority // this preloads the image
            sizes="(max-width: 150px)"
          ></StyledImage>
        </PlantImageWrapper>
        <h2>{name}</h2>
        <p>{botanicalName}</p>
      </PlantCardWrapper>
    </div>
  );
}

const PlantCardWrapper = styled.div`
  width: 150px;
  height: 250px;
  position: relative;
  border: 2px solid black;
  font-size: 0.75rem;
`;

const PlantImageWrapper = styled.div`
  width: 150px;
  border: 2px solid purple;
  text-align: left;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;
