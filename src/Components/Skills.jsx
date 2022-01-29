import styled from "styled-components";
import { Skill } from "./Skill";
import { skills } from "./../data";

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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-columns: 60px;
  @media only screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Skills = () => {
  return (
    <Container id="skills">
      <Title>SKILLS</Title>
      <Wrapper>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </Wrapper>
    </Container>
  );
};
