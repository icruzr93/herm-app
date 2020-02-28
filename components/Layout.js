import React from "react";
import { Box, Flex } from "herm";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Layout = ({ children }) => (
  <Box>
    <Header />
    <Flex>
      <Sidebar></Sidebar>
      <Main>{children}</Main>
    </Flex>
  </Box>
);

export default Layout;
