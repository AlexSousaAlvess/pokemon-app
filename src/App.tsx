import axios from "axios";
import { useState, useEffect } from "react";
import api from "./service/api";
import Spin from "./assets/Spin.svg";

import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    api
      .get(`pokemon/?limit=${limit}&offset=${offset}`)
      .then((res) => {
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res: any) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemons(results.map((res: any) => res.data));
      });
  }, [offset]);

  const handleClick = (value: string) => {
    value === "next"
      ? setOffset(offset + 1)
      : offset === 0
      ? setOffset(0)
      : setOffset(offset - 1);
  };

  return (
    <>
      <div className="container">
        {pokemons.length ? (
          pokemons.map((pokemon) => (
            <div className="card">
              <div className="info">
                <h3>{`${pokemon.id} - ${pokemon.name}`}</h3>
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
          ))
        ) : (
          <img src={Spin} alt={"loading"} className="loading" />
        )}
      </div>
      <div className="control">
        <button onClick={() => handleClick("back")} value="back" type="button">
          back
        </button>
        <button onClick={() => handleClick("next")} value="next" type="button">
          next
        </button>
      </div>
    </>
  );
}

export default App;
