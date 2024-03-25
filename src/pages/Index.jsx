import React, { useState } from "react";
import { Box, Text, Heading, VStack, HStack, Image, Grid, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";

const categories = [
  { name: "Wedding Halls", image: "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGhhbGx8ZW58MHx8fHwxNzExMzY3NDMwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Wedding Dresses", image: "https://images.unsplash.com/photo-1676132067504-31b08cf62308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGRyZXNzfGVufDB8fHx8MTcxMTM2NzQyOHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Photo Studios", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjBzdHVkaW98ZW58MHx8fHwxNzExMzY3NDMwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Makeup", image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXB8ZW58MHx8fHwxNzExMzY3NDMwfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { name: "Suits", image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwd2VkZGluZyUyMHN1aXR8ZW58MHx8fHwxNzExMzY3NDI4fDA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const products = [
  {
    name: "Elegant Lace Wedding Dress",
    description: "A stunning wedding dress with intricate lace details and a flowing train.",
    price: "$1,500",
    image: "https://images.unsplash.com/photo-1489924124654-85017dad789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbGFjZSUyMHdlZGRpbmclMjBkcmVzc3xlbnwwfHx8fDE3MTEzNjc0Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    name: "Classic Black Tuxedo",
    description: "A timeless black tuxedo perfect for the groom and groomsmen.",
    price: "$800",
    image: "https://images.unsplash.com/photo-1633655293779-c13a1a9ee882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwYmxhY2slMjB0dXhlZG98ZW58MHx8fHwxNzExMzY3NDMwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more products...
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
    toast({
      title: "Item added to cart",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    toast({
      title: "Message sent",
      description: "Thank you for contacting us!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box fontFamily="'Playfair Display', serif">
      <Navbar products={products} onSearch={handleSearch} cartItems={cartItems} />

      <Box backgroundImage="url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" height="400px" display="flex" alignItems="center" justifyContent="center" textAlign="center">
        <Text color="white" fontSize="2xl" fontWeight="bold" textShadow="2px 2px 4px rgba(0,0,0,0.6)" maxWidth="600px" mx="auto" p={4}>
          우리는 모든 결혼식이 신혼부부만의 이야기를 담아야 한다고 생각합니다.
          <br />
          당신의 이야기만을 담기 위해, 번거로움을 없애겠습니다.
        </Text>
      </Box>

      <Box p={8}>
        <Heading size="2xl" mb={8} color="pink.500">
          Wedding Collection
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
          {categories.map((category) => (
            <Box key={category.name} onClick={() => handleCategoryClick(category)} cursor="pointer" borderRadius="md" overflow="hidden" boxShadow="md" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
              <Image src={category.image} alt={category.name} />
              <Box p={4} bg="white">
                <Heading size="md">{category.name}</Heading>
              </Box>
            </Box>
          ))}
        </Grid>

        {selectedCategory && (
          <Box mt={12}>
            <Heading size="xl" mb={8} color="pink.500">
              {selectedCategory.name}
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={8}>
              {products.map((product) => (
                <Box key={product.name} borderRadius="md" overflow="hidden" boxShadow="md">
                  <Image src={product.image} alt={product.name} />
                  <Box p={4} bg="white">
                    <Heading size="md">{product.name}</Heading>
                    <Text mt={2}>{product.description}</Text>
                    <HStack mt={4} justify="space-between">
                      <Text fontWeight="bold">{product.price}</Text>
                      <Button colorScheme="pink" onClick={handleAddToCart}>
                        Add to Cart
                      </Button>
                    </HStack>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        )}

        <Box mt={12}>
          <Heading size="xl" mb={8} color="pink.500">
            About Us
          </Heading>
          <Text>At The Day, we believe that every wedding should be a reflection of the couple's unique love story. We offer a carefully curated collection of wedding essentials to make your special day truly unforgettable. From stunning dresses to elegant decorations, we have everything you need to create the wedding of your dreams.</Text>
        </Box>

        <Box mt={12}>
          <Heading size="xl" mb={8} color="pink.500">
            Contact Us
          </Heading>
          <VStack align="stretch" spacing={4}>
            <HStack>
              <FaEnvelope />
              <Text>info@theday.com</Text>
            </HStack>
            <HStack>
              <FaPhone />
              <Text>+1 123-456-7890</Text>
            </HStack>
          </VStack>
          <Box mt={8}>
            <form onSubmit={handleSubmit}>
              <VStack align="stretch" spacing={4}>
                <Input placeholder="Name" required />
                <Input placeholder="Email" type="email" required />
                <Textarea placeholder="Message" required />
                <Button type="submit" colorScheme="pink">
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
