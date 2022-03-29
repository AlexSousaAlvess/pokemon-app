import {
  Abilities,
  Ability,
  Button,
  Container,
  Image,
  SubTitle,
  Title,
} from "./Details.style";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../service/api";

const Details = () => {
  const { id }: any = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

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
      <Button onClick={goBack}>Voltar</Button>
      <Title>{`${id} - ${result?.name}`}</Title>
      <Image
        // src={result?.sprites["front_default"]}
        src={result?.sprites["other"]["dream_world"]["front_default"]}
        alt={result?.name}
        style={{ width: "200px" }}
      />

      <SubTitle>Golpes</SubTitle>
      <Abilities>
        {result?.abilities.map((item: any) => {
          return <Ability>{item.ability.name}</Ability>;
        })}
      </Abilities>
    </Container>
  );
};
export default Details;
