import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = Styled.div`
  -webkit-box-shadow: 0px 0px 10px 0px #000000;
  box-shadow: 0px 0px 10px 0px #000000;
  border-radius: 10px;
  margin: 10px;
}

  &:hover {
    transform: scale(1.1);
  }
`;

export const Info = Styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Images = Styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Loading = Styled.img`
  display: flex;
  margin: auto;
  width: 50px;
  height: 100vh;
  `;

export const Control = Styled.div`
  display: flex;
  justify-content: center;

  button {
  margin: 10px;
  width: 80px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  -webkit-box-shadow: 0px 0px 5px 0px #000000;
  box-shadow: 0px 0px 5px 0px #000000;
  cursor: pointer;
  background-color: aliceblue;
}
`;
