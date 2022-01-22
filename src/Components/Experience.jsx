import styled from "styled-components";
import { experience } from "../data";
import { ExpTile } from "./ExpTile";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: auto;
  background-color: #000;
`;

const Title = styled.h3`
  color: #c6c6c6;
  font-size: 2rem;
  margin: 10px 30px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-rows: repeat(5, 10vh);
`;

const Spot = styled.div`
  width: 20px;
  height: 20px;
  background-color: #005b60;
  border-radius: 50%;
  justify-self: center;
  grid-column: 2/3;
  margin: 9.8vh;
`;

export const Experience = () => {
  return (
    <Container>
      <Title>EXPERIENCE</Title>
      <Wrapper>
        {experience.map((element, index) => {
          if (index === experience.length - 1) {
            return [
              <Spot />,
              <ExpTile
                index={index}
                name={element.name}
                dsc={element.dsc}
                img={element.img}
                video={element.video}
                url={element.url}
              />,
            ];
          } else {
            return [
              <ExpTile
                index={index}
                name={element.name}
                dsc={element.dsc}
                img={element.img}
                video={element.video}
                url={element.url}
              />,
              <Spot />,
            ];
          }
        })}
      </Wrapper>
    </Container>
  );
};
