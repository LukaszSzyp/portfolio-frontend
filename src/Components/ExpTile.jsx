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
  height: 18vh;
  border-radius: 15px;
`;
const Wrapper = styled.div`
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

export const ExpTile = ({ index, name, dsc, img, video, url }) => {
  return (
    <Container index={index}>
      {index % 2 === 0
        ? [
            <Wrapper>
              <Title>{name}</Title>
              <Dsc>{dsc}</Dsc>
            </Wrapper>,
            <Img src={img} />,
          ]
        : [
            <Img src={img} />,
            <Wrapper>
              <Title>{name}</Title>
              <Dsc>{dsc}</Dsc>
            </Wrapper>,
          ]}
      {}
    </Container>
  );
};
