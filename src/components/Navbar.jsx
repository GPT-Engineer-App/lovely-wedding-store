import React, { useState } from "react";
import { Box, HStack, Input, IconButton, Text } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = ({ products, onSearch, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <Box bg="white" p={4} boxShadow="md">
      <HStack justify="space-between">
        <Text fontSize="2xl" fontWeight="bold" color="pink.500">
          The Day
        </Text>
        <HStack spacing={4}>
          <Input placeholder="Search items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <IconButton icon={<FaSearch />} aria-label="Search" onClick={handleSearch} />
          <HStack>
            <FaShoppingCart />
            <Text>{cartItems}</Text>
          </HStack>
          <FaUser />
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
