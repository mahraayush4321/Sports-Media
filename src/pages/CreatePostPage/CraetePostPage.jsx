// import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import Nav from "../../components/Navbar/Nav";
import {Textarea,Select, Input, Button, Box, Center } from "@chakra-ui/react";
const CraetePostPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Nav />

    <div className="flex">
      <Sidebar />
      <Center h="80vh">
    <Box maxW="md" bg={"black"} border={"1px solid gray"}  rounded="lg" p={6}>
    <Input
              type="file"
              id="avatar"
              name="avatar"
              pt={1}
              accept="image/png, image/jpeg"
            />
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              mt={5}
            />
            <Input placeholder="Pin Code" mt={5} />

            <Input placeholder="Title" mt={5} />

            <Textarea placeholder="Description..." mt={5} />
            <Select placeholder="Select option" mt={5}>
              <option value="option1">Cricket</option>
              <option value="option2">Volleyball</option>
              <option value="option3">Table Tennis</option>
            </Select>

            <Input type="file" hidden />
      <Box mt={4} textAlign="center">
      <Button mr={3}>Post</Button>
      </Box>
    </Box>
  </Center>
    </div>
  </>
  )
}

export default CraetePostPage