import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h4`
  color: #d9daff;
  font-size: 2rem;
  margin-bottom: 30px;
  letter-spacing: 2px;
`;
const SocialContainer = styled.div`
  display: flex;
  border-top: 1px solid #ec87e4;
  padding: 20px;
`;
const SocialIcon = styled.div`
  color: #00c9c8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.7, 1.7);
    z-index: 2;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Title>Contact</Title>
      <SocialContainer>
        <SocialIcon>
          <FacebookIcon sx={{ fontSize: 40 }} />
        </SocialIcon>
        <SocialIcon>
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </SocialIcon>
        <SocialIcon>
          <GitHubIcon sx={{ fontSize: 40 }} />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};
