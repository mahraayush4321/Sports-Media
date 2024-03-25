import { useState } from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import { Textarea, Select, Input, Button, Box, Center } from "@chakra-ui/react";
const CreatePostPage = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [pincode, setPincode] = useState('');
  const [sports, setSports] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value)
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value)
  }

  function handlePinCodeChange(event) {
    setPincode(event.target.value)
  }

  function handleSportsChange(event) {
    setSports(event.target.value)
  }


  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        },
        body: JSON.stringify({ title, description, pincode, sports }),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log('post created successfully', responseData);
      } else {
        console.error('post creation failed', responseData)
      }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log({
      title,
      description,
      pincode,
      sports
    })
  }

  return (
    <>
        <Nav />
      <>
        <Sidebar />
        <Center h="80vh">
          <Box as="form" maxW="md" bg={"black"} border={"1px solid gray"} mt={10} rounded="lg" p={6} onSubmit={handlePostSubmit}>
            <Input
              type="file"
              id="avatar"
              name="avatar"
              pt={1}
              accept="image/png, image/jpeg"
            />
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

            <Input type="file" hidden />
            <Box mt={4} textAlign="center">
              <Button type="submit" mr={3}>Post</Button>
            </Box>
          </Box>
        </Center>
      </>
    </>
  )
}

export default CreatePostPage