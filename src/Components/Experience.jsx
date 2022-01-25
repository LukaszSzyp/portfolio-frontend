import styled from "styled-components";
import { experience } from "../data";
import { ExpTile } from "./ExpTile";

const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
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
  height: auto;
  display: grid;
  column-gap: 10px;
  row-gap: 10vh;
  grid-template-columns: 1fr 50px 1fr;
  grid-template-rows: repeat(5, 10vh);
`;

const Spot = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid #919191;
  border-radius: 50%;
  justify-self: center;
  grid-column: 2/3;
  margin: 9.8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.h5`
  color: #c6c6c6;
  font-size: 1rem;
  font-weight: 600;
`;

export const Experience = () => {
  return (
    <Container id="experience">
      <Title>EXPERIENCE</Title>
      <Wrapper>
        {experience.map((element, index) => {
          const day = element.date.split(".")[0];
          const year = element.date.split(".")[1];
          if (index === experience.length - 1) {
            return [
              <Spot key={index}>
                <Date>{day}</Date>
                <Date>{year}</Date>
              </Spot>,
              <ExpTile
                key={element.name}
                index={index}
                name={element.name}
                dsc={element.dsc}
                img={element.img}
                url={element.url}
              />,
            ];
          } else {
            return [
              <ExpTile
                key={element.name}
                index={index}
                name={element.name}
                dsc={element.dsc}
                img={element.img}
                video={element.video}
                url={element.url}
              />,
              <Spot key={index}>
                <Date>{day}</Date>
                <Date>{year}</Date>
              </Spot>,
            ];
          }
        })}
      </Wrapper>
    </Container>
  );
};
