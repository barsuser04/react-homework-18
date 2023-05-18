import React from "react";
import Button from "../UI/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { Modal } from "../components/Modal";

const Material = ({ material }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();

  const modalState = search.get("modal");

  const openModal = () => {
    setSearch({ modal: "addNewMaterial" });
  };

  const closeModal = () => {
    setSearch({});
  };

  return (
    <>
      <Container>
        {material.map((el) => {
          return (
            <MiniContainer key={el.id}>
              <h2>
                {el.id}. {el.title}
              </h2>

              <Button onClick={() => navigate(`${el.id}/details`)}>
                details
              </Button>
            </MiniContainer>
          );
        })}
        <MyButton onClick={openModal}>Add new material</MyButton>

        {modalState && (
          <Modal>
            <div>
              <h2>Add new material</h2>
              <p>
                We maintain that accessibility is a key component of any modern{" "}
                <br />
                web application. As such, we have created this modal in such a
                way <br />
                that it fulfills the accessibility requirements of the modern
                web. <br />
                We seek to keep the focus on accessibility while providing a{" "}
                <br />
                functional, capable modal component for general use.
              </p>
            </div>

            <Button onClick={closeModal}>Close modal</Button>
          </Modal>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  margin-left: 40px;
  margin-top: 50px;
  display: flex;
  gap: 30px;
`;

const MiniContainer = styled.div`
  background-color: aliceblue;
  border-radius: 10px;
  padding: 15px;

  display: flex;
  height: 50px;
  align-items: center;
  gap: 10px;
  h2 {
    color: #125189;
  }
`;

const MyButton = styled.button`
  width: 220px;
  font-weight: 700;
  font-size: 20px;
  background-color: #bc7a2a;
  border: none;
  border-radius: 20px;
  height: 50px;
  color: antiquewhite;
  margin-top: 18px;
`;

export default Material;
