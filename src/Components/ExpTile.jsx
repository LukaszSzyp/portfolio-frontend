import styled from "styled-components";

const Container = styled.div`
  height: 33vh;
  display: flex;
  padding: 10px 10px;
  grid-row: ${(props) => props.index + 1} / ${(props) => props.index + 2};
  grid-column: ${(props) => (!(props.index % 2) ? 1 : 3)} /
    ${(props) => (!(props.index % 2) ? 2 : 4)};
  justify-content: space-around;
`;

const Img = styled.img`
  width: 40%;
  height: 20vh;
  border-radius: 15px;
  opacity: 0.6;
  transition: opacity 0.5s, transform 0.5s;
  &:hover {
    opacity: 1;
    transform: scale(1.7, 1.7);
    z-index: 2;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  color: #00adad;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: capitalize;
`;

const Dsc = styled.p`
  color: #ababab;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  border: solid 1px #303030;
  border-radius: 5px;
  background-color: #5e5e5e;
  font-weight: 500;
  letter-spacing: 1px;
  width: 60px;
  &:hover {
    background-color: #005b60;
    cursor: pointer;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #c6c6c6;
`;

export const ExpTile = ({ index, name, dsc, img, url }) => {
  return (
    <Container index={index}>
      {index % 2 === 0
        ? [
            <Wrapper>
              <Title>{name}</Title>
              <Dsc>{dsc}</Dsc>
              <Button>
                <Link href={url}>more</Link>
              </Button>
            </Wrapper>,
            <Img src={img} />,
          ]
        : [
            <Img src={img} />,
            <Wrapper style={{ alignItems: "flex-end" }}>
              <Title>{name}</Title>
              <Dsc>{dsc}</Dsc>
              <Button>
                <Link href={url}>more</Link>
              </Button>
            </Wrapper>,
          ]}
      {}
    </Container>
  );
};
