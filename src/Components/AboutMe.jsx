import styled from "styled-components";
import Face from "../Assets/Images/Face.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 80vw;
  height: 100vh;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Img = styled.img`
  width: min(50vw, 30rem);
  height: min(50vw, 30rem);
  opacity: 0.7;
`;
const Section = styled.section`
  padding: 15px;
  width: max(30vw);
  @media only screen and (max-width: 650px) {
    width: max(90vw);
  }
`;
const Greeting = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 300;
  @media only screen and (max-width: 650px) {
    font-size: 1.2rem;
    font-weight: 200;
  }
`;
const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  color: #00adad;
  @media only screen and (max-width: 650px) {
    font-size: 2rem;
    font-weight: 400;
  }
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
