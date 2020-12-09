import React from "react";
import { Container, Navbar, CardMenu, CardTodo } from "../components";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <CardTodo />
        <CardMenu />
      </Container>
    </>
  );
};
