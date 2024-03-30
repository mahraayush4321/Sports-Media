/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import Categories from "../../components/Feeds/Categories";
import { useState, useEffect } from "react";
import { Box, Wrap, WrapItem } from '@chakra-ui/react';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3001/api/v1/allPost');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responsedata = await response.json();
        console.log('API Response:', responsedata);
        setPosts(responsedata.data.allPosts || []);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Nav />
        <Sidebar />
        <Categories />
      <Box ml={{ base: '0', md: '10rem' }} mt={{ base: '8rem', md: '8rem' }}>
        <Wrap spacing="10" justify="center">
          {isLoading && <p>Loading posts...</p>}
          {error && <p>Error fetching posts: {error.message}</p>}
          {!isLoading && !error && posts.length > 0 && posts.map((post) => (
            <WrapItem key={post._id}>
              <PostCard postData={post} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
};

function PostCard({ postData }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="4"
      w="300px" // Adjust width if needed
    >
      <h2>{postData.title}</h2>
      <p>Description: {postData.description}</p>
      <p>Posted By: {postData.postedBy.firstName} {postData.postedBy.lastName}</p>
      <p>Sports: {postData.sports}</p>
      <p>Pincode: {postData.pincode}</p>
    </Box>
  );
}

export default HomePage;
