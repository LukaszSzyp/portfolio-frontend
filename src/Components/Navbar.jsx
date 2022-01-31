import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #000;
  z-index: 99;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 340px) {
    height: 16vh;
  }
`;

const Logo = styled.h1`
  color: #ababab;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 300;
  margin-left: 20px;

  @media only screen and (max-width: 340px) {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  margin-right: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 340px) {
    flex-direction: column;
    margin-top: 5px;
  }
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
