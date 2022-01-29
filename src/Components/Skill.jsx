import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

const Name = styled.h4`
  color: #c6c6c6;
  font-size: 1.2rem;
  @media only screen and (max-width: 730px) {
    font-size: 1rem;
  }
`;
const Level = styled.div`
  width: ${(props) => props.level * 20}px;
  margin-left: 10px;
  border-bottom: 10px dotted #00adad;
`;

const Img = styled.img`
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`;

export const Skill = ({ skill }) => {
  return (
    <Container>
      <Wrapper>
        <Name>{skill.name}</Name>
        <Level level={skill.level} />
      </Wrapper>
      <Img src={skill.img} />
    </Container>
  );
};
