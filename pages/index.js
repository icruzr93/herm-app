import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 40px;
  color: rebeccapurple;
  font-family: "Nunito", sans-serif;
`;

const Index = () => (
  <Layout>
    <Title fontSize="32px">Hello, Herm!</Title>
  </Layout>
);

export default Index;
