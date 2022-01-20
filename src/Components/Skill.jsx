import styled from "styled-components";

const Name = styled.h4`
  color: #c6c6c6;
  font-size: 1.5rem;
`;
const Level = styled.div`
  width: ${(props) => props.level * 20}px;
  margin-left: 10px;
  border-bottom: 10px dotted #00adad;
`;

const Container = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  flex: 1 0 calc(25% - 20px);
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
