import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <StyledNavlink
          to="/courses/materials"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid orange" : "0",

            color: isActive ? "#fff" : "#2c5249",
          })}
        >
          Materials
        </StyledNavlink>
        <StyledNavlink
          to="/courses/students"
          style={({ isActive }) => ({
            borderBottom: isActive ? "5px solid orange" : "0",
            color: isActive ? "#fff" : "#2c5249",
          })}
        >
          Students
        </StyledNavlink>
        <StyledNavlink
          to="/courses/rating"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#2c5249",
            borderBottom: isActive ? "5px solid orange" : "0",
          })}
        >
          Ratings
        </StyledNavlink>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #21d6b8;
  display: flex;
  align-items: center;
`;

const StyledNavlink = styled(NavLink)`
  font-size: 30px;
  color: #2c5249;
  font-weight: 700;
  margin-left: 60px;
  text-decoration: none;
`;
