import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95vw;
  height: 10vh;
`;

const Logo = styled.h1`
  color: #ababab;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.a`
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 1rem;
`;

export const Navbar = () => {
  return (
    <Container>
      <Logo>JUNIOR FRONTEND</Logo>
      <Wrapper>
        <Button>ABOUT ME</Button>
        <Button>SKILLS</Button>
        <Button>EXPERIENCE</Button>
      </Wrapper>
    </Container>
  );
};
