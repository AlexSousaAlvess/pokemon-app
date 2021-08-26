import React, { useState, useEffect } from "react";

import { Container, Card, Info, Control, Images, Loading } from "./Home.style";

import Spin from "../../assets/Spin.svg";
import api from "../../service/api";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState<Array<any>>([]);
  const [offset, setOffset] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`pokemon/?limit=${10}&offset=${offset}`)
      .then((res) => {
        setLoading(true);
        return res.data.results;
      })
      .then((results) => {
        return Promise.all(results.map((res: any) => axios.get(res.url)));
      })
      .then((results) => {
        setPokemons(results.map((res: any) => res.data));
        setLoading(false);
      });
  }, [offset]);

  const handleClick = (value: string) => {
    value === "next"
      ? setOffset(offset + 10)
      : offset === 0
      ? setOffset(0)
      : setOffset(offset - 10);
  };

  return (
    <>
      <Container>
        {pokemons.length && !loading ? (
          pokemons.map((pokemon: any) => (
            <Card key={pokemon.id}>
              <Info>
                <h3>{`${pokemon.id} - ${pokemon.name}`}</h3>
                <Link to={`/details/${pokemon.id}`}>
                  <Images>
                    <img
                      src={pokemon.sprites["front_default"]}
                      alt={pokemon.name}
                    />
                    <img
                      src={pokemon.sprites["back_default"]}
                      alt={pokemon.name}
                    />
                  </Images>
                </Link>
              </Info>
            </Card>
          ))
        ) : (
          <Loading src={Spin} alt={"loading"} className="loading" />
        )}
      </Container>
      <Control>
        <button onClick={() => handleClick("back")} value="back" type="button">
          back
        </button>
        <button onClick={() => handleClick("next")} value="next" type="button">
          next
        </button>
      </Control>
    </>
  );
};

export default Home;
