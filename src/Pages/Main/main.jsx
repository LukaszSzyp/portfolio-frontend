import styled from "styled-components";
import { Navbar } from "./../../Components/Navbar";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

export const Main = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};
