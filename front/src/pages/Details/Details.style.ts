import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  /* height: 90%; */
  margin: 10px auto;
  -webkit-box-shadow: 0px 0px 10px 0px #000000;
  box-shadow: 0px 0px 10px 0px #000000;
  border-radius: 10px;
`;

export const Title = Styled.h1`
  color: #24292F;
  font-size: 18px;
`;

export const SubTitle = Styled.h1`
  color: #24292F;
  font-size: 16px;
`;

export const Image = Styled.img`
  height: 200px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px #000000;
  object-fit: contain;
`;

export const Abilities = Styled.ul`
`;

export const Ability = Styled.li`
  font-size: 16px;
`;

export const Button = Styled.div`
  background: #8044DE;
  color: #FFF;
  border-radius: 5px;
  width: 50px;
  border: 0.1px solid #24292F;
  text-align: center;
  /* position: absolute; */
  margin-top: 10px;
  margin-right: 250px;

  &:hover{
    cursor: pointer;
    box-shadow: 0px 0px 10px 0px #000000;
    background: orange;
    color: #fff;
  }
`;
