import plants from "@/assets/plants.js";
import PlantCard from "@/components/PlantCard";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <h1>cultivate</h1>
      <PlantList>
        {plants.map((plant) => (
          <li key={plant.id}>
            <PlantCard
              name={plant.name}
              botanicalName={plant.botanicalName}
              image={plant.imageUrl}
            ></PlantCard>
          </li>
        ))}
      </PlantList>
    </div>
  );
}

const PlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;
