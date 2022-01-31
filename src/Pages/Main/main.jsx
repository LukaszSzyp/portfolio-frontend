import styled from "styled-components";
import { Navbar } from "./../../Components/Navbar";
import { AboutMe } from "./../../Components/AboutMe";
import { Skills } from "./../../Components/Skills";
import { Experience } from "./../../Components/Experience";
import { Footer } from "./../../Components/Footer";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
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
      <Experience />
      <Skills />
      <Footer />
    </Container>
  );
};
