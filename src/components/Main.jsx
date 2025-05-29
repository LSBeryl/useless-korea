import styled, { css, keyframes } from "styled-components";
import theme from "../style/theme";
import sites from "../data/sites";

function getAllColor() {
  let result = "";
  for (let i in Array.from({ length: 9 })) {
    result +=
      Number(i) === 8
        ? theme.primary[900]
        : theme.primary[(Number(i) + 1) * 100] + ",";
  }
  return result;
}

function goRandomSite() {
  const a = document.createElement("a");
  a.href = sites[Math.floor(Math.random() * sites.length)];
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.click();
}

export default function Main() {
  return (
    <Wrapper>
      <ChangeColor
        onClick={() => {
          window.location.href = "/";
        }}
      >
        색 바꾸기
      </ChangeColor>
      <Title>
        <div>쓸모없는</div>
        <div>사이트</div>
        <div>모음집</div>
      </Title>
      <ButtonCon>
        <Arrow dir="left">⇨</Arrow>
        <Button onClick={goRandomSite}>구경가기</Button>
        <Arrow dir="right">⇦</Arrow>
      </ButtonCon>
      <MovingPepe />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @font-face {
    font-family: "Shilla_CultureB-Bold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/Shilla_CultureB-Bold.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &,
  & * {
    font-family: "Shilla_CultureB-Bold";
    &::selection {
      background: ${() => theme.primary[900]};
      color: ${() => theme.primary[100]};
    }
  }
`;

const ChangeColor = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #fff;
  background: #000;
  border-radius: 0.3rem;
  padding: 0.3rem;
  cursor: pointer;
  z-index: 999;
  font-size: 0.8rem;

  &:hover {
    background: #333;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
`;

const ButtonCon = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const LeftAni = keyframes`
  0% {
    transform: translateX(0rem);
  }
  50% {
    transform: translateX(-1rem);
  }
  100% {
    transform: translateX(0rem);
  }
`;

const RightAni = keyframes`
  0% {
    transform: translateX(-0rem);
  }
  50% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0rem);
  }
`;

const Arrow = styled.div`
  font-size: 2rem;
  user-select: none;
  text-shadow: 1px 2px 2px rgb(0, 0, 0, 0.3);

  ${(props) =>
    props.dir === "left" &&
    css`
      animation: ${LeftAni} 2s ease-in-out infinite forwards;
    `}
  ${(props) =>
    props.dir === "right" &&
    css`
      animation: ${RightAni} 2s ease-in-out infinite forwards;
    `}
`;

const pulse = keyframes`
  0% {
    box-shadow: 0px 0px 10px 5px ${theme.primary[200]};
  }
  50% {
    box-shadow: 0px 0px 10px 5px ${theme.primary[400]};
  }
  100% {
    box-shadow: 0px 0px 10px 5px ${theme.primary[200]};
  }
`;

const Button = styled.div`
  background: linear-gradient(180deg, ${getAllColor()});
  background-size: 200% 200%;

  text-shadow: 0px 0px 5px ${() => theme.primary[800]};
  border-radius: 1rem;
  padding: 1rem 5vw;
  color: ${() => theme.primary[100]};
  transition: all 0.8s ease;
  cursor: pointer;
  z-index: 100;
  animation: ${pulse} 2s ease infinite forwards;

  &:hover {
    box-shadow: 0px 0px 10px 5px ${() => theme.primary[500]};
    transform: scale(1.05) rotate(-1deg);
    background-position: right center;
    animation: paused;
  }

  @media (max-width: 1024px) {
    padding: 1rem 10vw;
  }

  @media (max-width: 768px) {
    padding: 1rem 20vw;
  }
`;

const MovingPepe = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  &::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    left: 1rem;
    bottom: 5rem;
    background: url("/moving_pepe.gif");
    background-size: 10%;
    background-repeat: no-repeat;
    background-position: left bottom;
    opacity: 0.05;
    z-index: -1;

    @media (max-width: 1024px) {
      background-size: 30%;
    }

    @media (max-width: 768px) {
      background-size: 50%;
    }
  }
`;
