import { useState } from "react";
import { Container, VStack, Text, Box, Input, Button, IconButton, useToast } from "@chakra-ui/react";
import { FaFileUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && (uploadedFile.type === "application/pdf" || uploadedFile.type === "text/plain")) {
      setFile(uploadedFile);
      toast({
        title: "File uploaded.",
        description: `You have uploaded ${uploadedFile.name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid file type.",
        description: "Please upload a PDF or text file.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUploadClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">PowerPoint Clone</Text>
        <Box borderWidth="2px" borderRadius="lg" borderColor="gray.300" padding={8} textAlign="center" width="100%">
          <Text fontSize="lg" marginBottom={4}>
            Upload your text or PDF file
          </Text>
          <Input id="fileInput" type="file" accept=".pdf,.txt" display="none" onChange={handleFileChange} />
          <IconButton aria-label="Upload file" icon={<FaFileUpload />} size="lg" onClick={handleUploadClick} />
          {file && <Text marginTop={4}>Uploaded File: {file.name}</Text>}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
