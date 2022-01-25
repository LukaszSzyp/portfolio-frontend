import styled from "styled-components";
import Face from "../Assets/Images/Face.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 70vw;
  height: 100vh;
`;
const Img = styled.img`
  width: 30rem;
  height: 30rem;
  opacity: 0.7;
`;
const Section = styled.section`
  width: 40%;
  padding: 15px;
`;
const Greeting = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
`;
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  color: #00adad;
`;
const Text = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: solid 2px #005b60;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  &:hover {
    background-color: #005b60;
    cursor: pointer;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

export const AboutMe = () => {
  return (
    <Container id="aboutMe">
      <Img src={Face} />
      <Section>
        <Greeting>Hi there! My name is</Greeting>
        <Title>Lukasz Szypulewski</Title>
        <Text>
          A Junior developer who is trying to get his first job. I like learn
          new things. Programming makes me happy so I'd like to share with you
          what I've done so far.
        </Text>
        <Link href="#footer">
          <Button>Say hi!</Button>
        </Link>
      </Section>
    </Container>
  );
};
