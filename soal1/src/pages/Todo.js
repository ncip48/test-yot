import React from "react";
import { useParams } from "react-router-dom";
import { CardTodo, Navbar, Container, CardMenu } from "../components";

export const Todo = (props) => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Container>
        <CardTodo id={id} />
        <CardMenu />
      </Container>
    </>
  );
};
