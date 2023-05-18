import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const SideBar = () => {
  return (
    <Container>
      <LogoDiv>
        <h1>LOGO</h1>
      </LogoDiv>
      <OptiontDiv>
        <StyledDiv>
          <StyledNavLink
            to="/courses"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2c5249" : "#fefbfb",
            })}
          >
            Courses
          </StyledNavLink>
          <StyledNavLink
            to="/anouncement"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2c5249" : "#fefbfb",
            })}
          >
            Anouncements
          </StyledNavLink>
          <StyledNavLink
            to="/notification"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2c5249" : "#fefbfb",
            })}
          >
            Notifications
          </StyledNavLink>
          <StyledNavLink
            to="/schedule"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#2c5249" : "#fefbfb",
            })}
          >
            Schedule
          </StyledNavLink>
        </StyledDiv>
      </OptiontDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 15%;
  height: 100%;
  background-color: #70b4a4;
  margin: 0;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const OptiontDiv = styled.div`
  width: 100%;
  height: 505px;
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 270px;
  border: none;
  outline: none;
  font-size: 25px;
  font-weight: 600;
  border: 2px solid white;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #2c5249;
  font-weight: 700;
  padding: 10px;
  margin: 0;
  text-decoration: none;
`;
