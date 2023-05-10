import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  const addPlant = (newPlant) => {
    setPlants(plants => [newPlant, ...plants])
  }

  const [searchTerm, setSearchTerm] = useState('')
  const updateSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm)
  }

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search updateSearch={updateSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
