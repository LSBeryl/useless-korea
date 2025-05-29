import styled from "styled-components";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <Wrapper>
      <Main />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
