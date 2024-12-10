import React from 'react';
import { Box ,useColorModeValue} from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box minH="100vh"   bg={useColorModeValue("red.100", "gray.800")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
