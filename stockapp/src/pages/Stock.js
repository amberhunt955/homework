import { useParams } from "react-router-dom";

function Stock() {
  let params = useParams();
  const { name, lastPrice } = params;

  return (
    <div>
      <h1>Name: {name}</h1>
      <ul>Price: ${lastPrice}</ul>
    </div>
  );
}

export default Stock;
