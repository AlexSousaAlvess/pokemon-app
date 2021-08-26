import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/api";

import { Container } from "./Details.style";

const Details = () => {
  let { id }: any = useParams();
  const [result, setResult] = useState<any>();

  useEffect(() => {
    api.get(`pokemon/${id}`).then((res) => {
      setResult(res.data);
      // return res.data.results;
    });
  }, []);
  console.log(result);
  return (
    <Container>
      <h1>{`${id} - ${result?.name}`}</h1>
      <img
        src={result?.sprites["front_default"]}
        alt={result?.name}
        style={{ width: "200px" }}
      />
      <h2>Golpes</h2>
      {result?.abilities.map((item: any) => {
        return <h3>{item.ability.name}</h3>;
      })}
    </Container>
  );
};

export default Details;
