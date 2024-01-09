import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [data, setData] = useState([]);
  const getCountriesData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const countries = await res.json();
      setData(countries);
    } catch (err) {
      console.err(err);
    }
  };
  useEffect(() => {
    getCountriesData();
  }, []);
  return (
    <div className="App">
      <div className="containerStyle">
        {data.map((item) => {
          return (
            <div className="cardStyle">
              <img
                src={item.flags.png}
                alt="country-flag"
                width={100}
                height={100}
              />
              <h2>{item.name.common}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
