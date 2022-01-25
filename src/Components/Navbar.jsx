import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
  background-color: #000;
  z-index: 3;
`;

const Logo = styled.h1`
  margin-left: 25px;
  color: #ababab;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 25px;
`;

const Button = styled.a`
  text-decoration: none;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 1rem;
  &:hover {
    color: #9296f0;
  }
`;

export const Navbar = () => {
  return (
    <Container>
      <Logo>JUNIOR FRONTEND</Logo>
      <Wrapper>
        <Button href="#aboutMe">ABOUT ME</Button>
        <Button href="#experience">EXPERIENCE</Button>
        <Button href="#skills">SKILLS</Button>
      </Wrapper>
    </Container>
  );
};
