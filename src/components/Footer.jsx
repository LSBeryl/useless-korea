import styled from "styled-components";
import theme from "../style/theme";

export default function Footer() {
  return (
    <Wrapper>
      <div>
        재미있는 사이트를 알고 계시다면{" "}
        <a href="https://forms.gle/18SmqU6FamGxbYdz9" target="_blank">
          이곳
        </a>
        으로 제보해주시기 바랍니다.
      </div>
      <div>더 많은 제보가 들어올수록 여러분의 재미가 쏙쏙쏙 늘어납니다.</div>
      <div>
        이 사이트는{" "}
        <a href="https://theuselessweb.com/" target="_blank">
          https://theuselessweb.com/
        </a>
        에서 영감을 받았습니다.
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${() => theme.primary[300]};
  color: ${() => theme.primary[800]};
  font-size: 0.8rem;
  font-weight: 500;
  gap: 0.5rem;
  & a {
    font-weight: bold;
    color: ${() => theme.primary[700]};
  }
  &,
  & * {
    &::selection {
      background: ${() => theme.primary[900]};
      color: ${() => theme.primary[100]};
    }
  }
`;
