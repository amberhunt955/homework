import { Link } from "react-router-dom";
import data from "../data/stocks-data";

function Dashboard() {
  return (
    <div>
      <h1>All stocks</h1>

      {data.map((stock) => {
        // destructuring
        const {symbol, name, lastPrice} = stock;

        return (
            <Link to={`/stocks/${name}/${lastPrice}`} key={symbol} >
              <h2>{name}</h2>
            </Link>
        );
      })}
    </div>
  );
}

export default Dashboard;
