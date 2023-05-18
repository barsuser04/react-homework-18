import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../UI/Button";
import { styled } from "styled-components";

export const StudentsDetails = ({ students = [] }) => {
  const params = useParams();

  const navigate = useNavigate();

  const findedStudent = students.find((el) => el.id === +params.id);
  console.log(findedStudent);
  return (
    <>
      <Container>
        <h1>Student DETAIL page</h1>
        <h3>student: {findedStudent.title}</h3>
        <h3>его оценка: {findedStudent.id}</h3>
        <Button onClick={() => navigate("/courses/students")}>
          Go to STUDENT page
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: #97c8f3;
  width: 40%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 40px;
  margin-left: 40px;
  color: #184f29;
`;
