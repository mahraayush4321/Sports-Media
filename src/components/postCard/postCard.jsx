import { Box } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const PostCard = ({ postData }) => {
    // eslint-disable-next-line react/prop-types
    const imageUrl = postData.fileUrl;
    return (
    <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p="4"
         w="300px"
     >
        {imageUrl && (
            <Box
                height="300px"
                width="100%"
               overflow="hidden"
            >
            <img
               src={imageUrl}
                // eslint-disable-next-line react/prop-types
                alt={postData.title}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
             />
            </Box>
        )}
        {/* eslint-disable-next-line react/prop-types */}
         <h2>{postData.title}</h2>
         {/* eslint-disable-next-line react/prop-types */}
         <p>Description: {postData.description}</p>
         {/* eslint-disable-next-line react/prop-types */}
         <p>Posted By: {postData.postedBy.firstName} {postData.postedBy.lastName}</p>
         {/* eslint-disable-next-line react/prop-types */}
         <p>Sports: {postData.sports}</p>
         {/* eslint-disable-next-line react/prop-types */}
         <p>Pincode: {postData.pincode}</p>
    </Box>
    );
};

export default PostCard;
