import { useRouter } from "next/router";
import plants from "@/assets/plants.js";
import Image from "next/image";
import styled from "styled-components";
// import React from "react";
import WaterNeed from "@/components/icons/WaterNeed.js";
import LightNeed from "@/components/icons/LightNeed.js";
import FertiliserSeason from "@/components/icons/FertiliserSeason.js";
import Link from "next/link";
import BackArrow from "@/public/circle-chevron-left.svg";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) return <h1>Plant not found.</h1>;

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
      <Link href={"/"}>
        <BackArrow />
      </Link>
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
      <p>Water need: </p>
      <WaterNeed waterNeed={waterNeed} />
      <p>Light need: </p>
      <LightNeed lightNeed={lightNeed} />
      <p>Fertiliser season: </p>
      <FertiliserSeason fertiliserSeason={fertiliserSeason} />
    </>
  );
}

const PlantImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;
