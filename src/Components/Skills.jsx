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
  display: flex;
  flex-wrap: wrap;
  height: 60%;
  justify-content: space-between;
  margin-left: 10%;
`;

export const Skills = () => {
  return (
    <Container>
      <Title>SKILLS</Title>
      <Wrapper>
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </Wrapper>
    </Container>
  );
};
