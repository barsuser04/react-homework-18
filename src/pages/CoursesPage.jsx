import React from "react";
import { Header } from "../components/Header";
import { styled } from "styled-components";

export const CoursesPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  width: 85%;
`;
