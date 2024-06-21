import { useState } from 'react';
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import { Textarea, Select, Input, Button, Box, Center, Image, useToast, Flex } from "@chakra-ui/react";

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pincode, setPincode] = useState('');
  const [sports, setSports] = useState('');
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const toast = useToast();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handlePinCodeChange(event) {
    setPincode(event.target.value);
  }

  function handleSportsChange(event) {
    setSports(event.target.value);
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setImagePreview(previewURL);
    }
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('pincode', pincode);
    formData.append('sports', sports);
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://s1backend1.onrender.com/api/v1/post', {
        method: 'POST',
        headers: {
          'Authorization': `${token}`
        },
        body: formData,
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('post created successfully', responseData);
        setImagePreview('');
        setTitle('');
        setDescription('');
        setPincode('');
        setSports('');
        toast({
          title: 'Post created successfully',
          description: 'Your post has been created successfully',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
      } else {
        console.error('post creation failed', responseData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Nav />
      <Flex>
        <Sidebar />
        <Center flex="1" h="80vh" mt={[2, 4, 6]}>
          <Box
            as="form"
            maxW="md"
            w="100%"
            bg={"black"}
            border={"1px solid gray"}
            mt={10}
            rounded="lg"
            p={6}
            onSubmit={handlePostSubmit}
            overflowY={['auto', 'initial']}
            maxH={['calc(100vh - 100px)', 'none']} // Make form scrollable only on mobile
          >
            <Input
              type="file"
              id="avatar"
              name="avatar"
              pt={1}
              accept="image/png, image/jpeg, image/gif"
              onChange={handleFileChange}
              required
            />
            {imagePreview && (
              <Box mt={5}>
                <Image src={imagePreview} alt="Preview" borderRadius="lg" maxH="200px" objectFit="contain" />
              </Box>
            )}
            <Input placeholder="Pin Code" mt={5} value={pincode} onChange={handlePinCodeChange} />
            <Input placeholder="Title" mt={5} value={title} onChange={handleTitleChange} />
            <Textarea placeholder="Description..." mt={5} value={description} onChange={handleDescriptionChange} />
            <Select placeholder="Select option" mt={5} value={sports} onChange={handleSportsChange}>
              <option value="cricket">Cricket</option>
              <option value="volleyball">Volleyball</option>
              <option value="TableTennis">Table Tennis</option>
              <option value="badminton">Badminton</option>
              <option value="ArmWrestling">Arm Wrestling</option>
            </Select>
            <Box mt={4} textAlign="center">
              <Button type="submit" mr={3}>Post</Button>
            </Box>
          </Box>
        </Center>
      </Flex>
    </>
  );
};

export default CreatePostPage;
