/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import Categories from "../../components/Feeds/Categories";
import { useState, useEffect } from "react";
import { Box, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { ScaleLoader } from 'react-spinners';
import ShimmerLine from "../../components/Shimmers/ShimmerLines";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);

  const fetchPosts = async (page) => {
    // setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/v1/allPost?page=${page}&size=9`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responsedata = await response.json();
      console.log('API Response:', responsedata);
      setPosts((prevPosts) => [...prevPosts, ...(responsedata.data.allPosts || [])]);
      setTotalPosts(responsedata.data.totalDocs);
      setIsLoading(false);
      setIsInitialDataLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    if (!isLoading) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchPosts(currentPage);
    };
    setTimeout(fetchData, 2000)
  }, [currentPage]);
  return (
    <>
      <Nav />
      <Sidebar />
      <Categories />
      <Box ml={{ base: '0', md: '10rem' }} mt={{ base: '8rem', md: '8rem' }}>
        <Wrap spacing="10" justify="center">
          {isLoading && <ScaleLoader
            color="#5aded7"
            height={60}
            radius={10}
            width={5}
          />}
          {error && <p>Error fetching posts: {error.message}</p>}
          {posts.map((post) => (
            <WrapItem key={post._id}>
              <PostCard postData={post} />
            </WrapItem>
          ))}
        </Wrap>
        {isInitialDataLoaded && posts.length < totalPosts && (
          <Button colorScheme="yellow" onClick={loadMore}>Load More</Button>
        )}
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
      w="300px"
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
