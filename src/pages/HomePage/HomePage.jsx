/* eslint-disable react/prop-types */
import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import Categories from "../../components/Feeds/Categories";
import { useState, useEffect } from "react";
import { Box, Wrap, WrapItem, Button } from "@chakra-ui/react";
import { ScaleLoader } from "react-spinners";
import PostCard from "../../components/postCard/postCard";
import { getSportByCategory } from "../../api";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isInitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const [totalPosts, setTotalPosts] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchPosts = async (page) => {
    try {
      const response = await fetch(
        `https://s1backend1.onrender.com/api/v1/allPost?page=${page}&size=9`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responsedata = await response.json();
      console.log("API Response:", responsedata);
      setPosts((prevPosts) => [
        ...prevPosts,
        ...(responsedata.data.allPosts || []),
      ]);
      setTotalPosts(responsedata.data.totalDocs);
      setIsLoading(false);
      setIsInitialDataLoaded(true);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const fetchPostsByCategory = async (category) => {
    try {
      setIsLoading(true);
      setSelectedCategory(category);
      const response = await getSportByCategory(category);
      setPosts(response.data.posts);
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
    setTimeout(fetchData, 1000);
  }, [currentPage]);

  return (
    <>
      <Nav setPosts={setPosts} />
      <Sidebar />
      <Categories fetchPostsByCategory={fetchPostsByCategory} />
      <Box ml={{ base: "0", md: "10rem" }} mt={{ base: "8rem", md: "9rem" }}>
        <Wrap spacing="10" justify="center">
          {isLoading && (
            <ScaleLoader color="#5aded7" height={60} radius={10} width={5} />
          )}
          {error && <p>Error fetching posts: {error.message}</p>}
          {posts.map((post) => (
            <WrapItem key={post._id}>
              <PostCard postData={post} />
            </WrapItem>
          ))}
        </Wrap>
        {isInitialDataLoaded && posts.length < totalPosts && (
          <Button colorScheme="white" onClick={loadMore}>
            Load More
          </Button>
        )}
      </Box>
    </>
  );
};

export default HomePage;
