import { useRouter } from "next/router";
import plants from "@/assets/plants.js";
import Image from "next/image";
import styled from "styled-components";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!id) return null;

  const {
    name,
    botanicalName,
    imageUrl,
    waterNeed,
    lightNeed,
    fertiliserSeason,
    description,
  } = plant;

  return (
    <>
      <PlantImageWrapper>
        <Image
          src={imageUrl}
          alt={name}
          width={300}
          height={300}
          priority // this preloads the image
          sizes="(max-width: 300px)"
        />
      </PlantImageWrapper>
      <h1>{name}</h1>
      <h2>{botanicalName}</h2>
      <p>{description}</p>
      <Drop>{waterNeed}</Drop>
      <Sun>{lightNeed}</Sun>
      <Season>{fertiliserSeason}</Season>
    </>
  );
}

const PlantImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  font-size: 0.75rem;
`;

const Drop = styled.div``;

const Sun = styled.div``;

const Season = styled.div``;
