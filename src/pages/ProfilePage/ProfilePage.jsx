import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import { useEffect, useState } from "react";
import { Container, Flex, Box, Text, SimpleGrid } from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import PostCard from "../../components/postCard/postCard";

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://s1backend1.onrender.com/api/v1/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const responseData = await response.json();
      setPosts(responseData.data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <Nav />
      <>
        <Sidebar />
        <Container maxW='container.lg' py={5}>
          <Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
            <ProfileHeader />
          </Flex>
          <Flex
            px={{ base: 2, sm: 4 }}
            maxW={"full"}
            mx={"auto"}
            borderTop={"1px solid"}
            borderColor={"whiteAlpha.300"}
            direction={"column"}
          >
            <Box display="flex" justifyContent="center" marginTop="1rem">
              <Box className="container" maxW="1000px">
                <Text as="h1" mb='2rem' textAlign="center">My Posts</Text>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px">
                  {posts.map(post => (
                    <PostCard key={post._id} postData={post} />
                  ))}
                </SimpleGrid>
              </Box>
            </Box>
          </Flex>
        </Container>
      </>
    </>
  );
};

export default ProfilePage;
