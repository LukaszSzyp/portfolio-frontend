import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

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

const Link = styled.a`
  text-decoration: none;
  color: #00c9c8;
`;

export const Footer = () => {
  return (
    <Container id="footer">
      <Title>Contact</Title>
      <SocialContainer>
        <SocialIcon>
          <Link href="https://www.facebook.com/profile.php?id=100003394758433">
            <FacebookIcon sx={{ fontSize: 40 }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="https://www.linkedin.com/in/%C5%82ukasz-szypulewski/">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="https://github.com/LukaszSzyp">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </Link>
        </SocialIcon>
        <SocialIcon>
          <Link href="mailto:lukasz.szypulewski@gmail.com ? subject = Feedback form CV & body = Hi Łukasz">
            <EmailIcon sx={{ fontSize: 40 }} />
          </Link>
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};
