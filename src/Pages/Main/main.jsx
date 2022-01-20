import styled from "styled-components";
import { Navbar } from "./../../Components/Navbar";
import { AboutMe } from "./../../Components/AboutMe";
import { Skills } from "./../../Components/Skills";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

export const Main = () => {
  return (
    <Container>
      <Navbar />
      <AboutMe />
      <Skills />
    </Container>
  );
};
