import { Flex, Text, HStack, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegSquarePlus } from "react-icons/fa6";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      maxW="5000px"
      w="100%"
      h={16}
      alignItems="center"
      justifyContent="space-between"
      px={4}
      
    >
      <Text
        fontSize={{ base: "20px", sm: "28px" }}
        fontWeight="bold"
        textTransform="uppercase"
        bgGradient="linear(to-r, cyan.400, blue.500)"
        bgClip="text"
      >
        <Link to="/">Product Store 🛒</Link>
      </Text>

      <HStack spacing={4} alignItems="center">
        <Link to="/create">
          <Button>
            <FaRegSquarePlus />
          </Button>
        </Link>

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "🌙" : "☀️"}
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
