import { VStack, Text, Box } from "@chakra-ui/react";

const SlidesList = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box borderWidth="1px" borderRadius="lg" padding={4}>
        <Text>Slide 1</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" padding={4}>
        <Text>Slide 2</Text>
      </Box>
      <Box borderWidth="1px" borderRadius="lg" padding={4}>
        <Text>Slide 3</Text>
      </Box>
    </VStack>
  );
};

export default SlidesList;
