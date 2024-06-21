import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
import { useEffect, useState } from "react";
import { Container, Flex} from "@chakra-ui/react";
import ProfileHeader from "../../components/Profile/ProfileHeader";

const ProfilePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('https://s1backend1.onrender.com/api/v1/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      })
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const responseData = await response.json();
      setPosts(responseData.data.posts)
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  return (
    <>
      <Nav />
      <>
    <Sidebar />
      <Container maxW='container.lg' py={5}>
			<Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
				<ProfileHeader/>
			</Flex>
			<Flex
				px={{ base: 2, sm: 4 }}
				maxW={"full"}
				mx={"auto"}
				borderTop={"1px solid"}
				borderColor={"whiteAlpha.300"}
				direction={"column"}
			>
				
        <div style={{ display: 'flex', justifyContent: 'center' , marginTop: '3rem' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h1 style={{ textAlign: 'center' }}>My Posts</h1>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '20px',
              }}
              >
              {posts.map(post => (
                <div
                key={post._id}
                className="card"
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '20px',
                }}
                >
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <p>{post.pincode}</p>
                  <p>{post.sports}</p>
                  <p>{post.postedBy.firstName}</p>
                  <p>{post.postedBy.lastNameName}</p>
                  <p>{post.postedBy.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
              </Flex>
            </Container>
      </>
    </>
  )
}

export default ProfilePage