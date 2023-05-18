import React from "react";
import { styled } from "styled-components";

const WatePage = () => {
  return (
    <Container>
      <h2>Wating page 🚾</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 93%;
  height: 200px;
  background-color: #ffffffe2;
  padding-left: 20px;
  padding-top: 20px;
  margin-left: 40px;
  margin-top: 40px;
  border-radius: 10px;
`;

export default WatePage;
