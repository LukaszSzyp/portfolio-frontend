import styled from "styled-components";
import { Skill } from "./Skill";
import { skills } from "./../data";
import { skillsDev } from "./../data";

const Container = styled.div`
  margin: 0 auto 0 10px;
  padding-top: 10vh;
  display: flex;
  max-width: 50%;
  flex-direction: column;
  height: auto;
  background-color: #000;
  @media only screen and (max-width: 620px) {
    width: 95%;
  }
`;

const Title = styled.h3`
  color: #c6c6c6;
  font-size: 2rem;
  margin: 10px 30px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const LevelLabel = styled.h4`
  color: #c6c6c6;
  font-size: 1.2rem;
  margin-top: 35px;
  margin-left: 30px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-columns: 60px;
  margin-left: 5%;
  margin-top: 10px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 410px) {
    grid-template-columns: 1fr;
  }
`;

export const Skills = () => {
  return (
    <Container id="skills">
      <Title>INDUSTRY SKILLS</Title>
      <LevelLabel>KNOW WELL</LevelLabel>
      <Wrapper>
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </Wrapper>
      <LevelLabel>DEVELOP</LevelLabel>
      <Wrapper>
        {skillsDev.map((skill) => (
          <Skill skill={skill} key={skill.name} />
        ))}
      </Wrapper>
    </Container>
  );
};
