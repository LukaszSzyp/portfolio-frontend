import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

const Name = styled.h4`
  color: white;
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 2px;
  @media only screen and (max-width: 730px) {
    font-size: 1rem;
  }
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
      </Wrapper>
      <Img src={skill.img} />
    </Container>
  );
};
