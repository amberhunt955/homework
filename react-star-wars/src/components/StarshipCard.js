import { getAllStarships } from "../services/sw-api";
import { useState, useEffect } from "react";

function StarshipCard() {
  const [fleet, setFleet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllStarships();
      setFleet(data.results);
    };

    fetchData();
  }, []);

  return fleet.map((starship) => (
    <div className="card" key={starship.name}>
      <h2>{starship.name}</h2>
    </div>
  ));
}

export default StarshipCard;
