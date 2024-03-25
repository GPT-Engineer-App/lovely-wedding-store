import React, { useState } from "react";
import { Box, HStack, Input, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = ({ onSearch, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <VStack bg="white" p={4} boxShadow="md" align="stretch">
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
      <HStack justify="center" spacing={8} mt={4}>
        <Link to="/wedding-hall">Wedding Hall</Link>
        <Link to="/wedding-dress">Wedding Dress</Link>
        <Link to="/photo-studio">Photo Studio</Link>
        <Link to="/makeup">Makeup</Link>
        <Link to="/suit">Suit</Link>
      </HStack>
    </VStack>
  );
};

export default Navbar;
