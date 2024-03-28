import Sidebar from "../../components/Sidebar/Sidebar";
import Nav from "../../components/Navbar/Nav";
// import Feeds from "../../components/Feeds/Feeds";
import Categories from "../../components/Feeds/Categories";
import { useState, useEffect } from "react";

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
            console.log('API Response:',responsedata);
            setPosts(responsedata.data.allPosts  || []);
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
      <>
        <Sidebar />
        <></>
        <Categories/>

        <div style={{ 
                marginTop: '6rem',
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                gap: '20px',
            }}>
            {isLoading && <p>Loading posts...</p>}
            {error && <p>Error fetching posts: {error.message}</p>}

            {!isLoading && !error && posts.length > 0 && (
                <div className="card-container">
                    {posts.map((post) => (
                        <PostCard key={post._id} postData={post} />
                    ))}
                </div>
            )}
        </div>

        {/* <Feeds /> */}
      </>
    </>
  );
};

// eslint-disable-next-line react/prop-types
function PostCard({ postData }) {
  return (
      <div  style={{
            border: '1px solid #ccc',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
            margin: '10px',
            width: '300px' // Adjust width if needed
        }}>
          {/* eslint-disable-next-line react/prop-types */}
          <h2>{postData.title}</h2>
           {/* eslint-disable-next-line react/prop-types */}
          <p>Description: {postData.description}</p> 
           {/* eslint-disable-next-line react/prop-types */}
          <p>Posted By: {postData.postedBy.firstName} {postData.postedBy.lastName} </p> 
           {/* eslint-disable-next-line react/prop-types */}
          <p>Sports: {postData.sports}</p>
           {/* eslint-disable-next-line react/prop-types */}
          <p>Pincode: {postData.pincode}</p> 
      </div>
  );
}

export default HomePage;
