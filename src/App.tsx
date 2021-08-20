import axios from "axios";
import { useState, useEffect } from "react";
import api from "./service/api";
import Spin from "./assets/Spin.svg";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get("pokemon")
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res: any) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemons(results.map((res: any) => res.data));
        setLoading(false);
      });
  }, []);

  return (
    <>
      {pokemons.length ? (
        pokemons.map((pokemon) => (
          <div className="container">
            <div className="card">
              <div className="info">
                <h3>{pokemon.name}</h3>
                <div className="images">
                  <img
                    src={pokemon.sprites["front_default"]}
                    alt={pokemon.name}
                  />
                  <img
                    src={pokemon.sprites["back_default"]}
                    alt={pokemon.name}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <img src={Spin} alt={"loading"} className="loading" />
      )}
    </>
  );
}

export default App;
