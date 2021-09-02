import styled from "styled-components";
import { useLoading, Oval } from "@agney/react-loading";

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5b5c5ec6;
  border-radius: 10px;
`;

const LoadingDiv = styled.div`
  margin-top: 15px;
  font-size: 24px;
  margin-left: 7px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
`;

function LoadingPage() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Oval width="80" color="white" />,
  });

  return (
    <Container>
      <section {...containerProps}>
        <Box>
          {indicatorEl}
          <LoadingDiv>Loading...</LoadingDiv>
        </Box>
      </section>
    </Container>
  );
}

export default LoadingPage;
