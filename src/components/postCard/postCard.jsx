import { Box, Text, Flex, Button, Modal, ModalOverlay,Tag, TagLabel,Avatar,Badge, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from '@chakra-ui/react';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const PostCard = ({ postData }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // eslint-disable-next-line react/prop-types
    const [updateTitle, setupdateTitle] = useState(postData.title);
    // eslint-disable-next-line react/prop-types
    const [updateDescription, setupdateDescription] = useState(postData.description);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const toast = useToast();

    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const handleEdit = async () => {
        const token = localStorage.getItem('token')
        try {
            // eslint-disable-next-line react/prop-types
            const response = await fetch(`https://s1backend1.onrender.com/api/v1/updatePost/${postData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                },
                body: JSON.stringify({
                    title: updateTitle,
                    description: updateDescription,
                }),
            })
            const responseData = await response.json();
            console.log('Edit post response:', responseData);
            setupdateTitle('');
            setupdateDescription('');
            toast({
                title: "Post Updated",
                description: "The post has been successfully updated.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            console.error('Error editing post:', error);
        }
        console.log('Edit post:', postData);
        closePopup();
    };

    const handleDelete = async () => {
        const token = localStorage.getItem('token')
        try {
            // eslint-disable-next-line react/prop-types
            const response = await fetch(`https://s1backend1.onrender.com/api/v1/deletePost/${postData._id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `${token}`
                },
            })
            if (response.ok) {
                const responseData = await response.json();
                console.log('deleted post is', responseData);
                toast({
                    title: "Post Deleted",
                    description: "The post has been successfully deleted.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            }else if(response.status === 403) {
                throw new Error('Unauthorized');
            }else {
                throw new Error('Failed to delete post');
            }
        } catch (error) {
            console.error('error in deleting post:', error)
            if(error.message === 'Unauthorized') {
                toast({
                    title: "OOPS!",
                    description: "You are not authorized to delete this post",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }else {
                toast({
                    title: "Error",
                    description: "Failed to delete the post. Please try again later.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        }
        console.log('Delete post:', postData);
        closePopup();
    };

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
        transition="all 0.3s"
        _hover={{ transform: "scale(1.05)" }}
        fontFamily="Nunito, Arial, sans-serif"
        onClick={openPopup}
        cursor="pointer"
        >
        <Flex mb='5'>
<Avatar size='md' src='https://bit.ly/sage-adebayo' />
<Box ml='3'>
<Text fontWeight='bold'>
            {/*eslint-disable-next-line react/prop-types*/}
{postData.postedBy.firstName} {postData.postedBy.lastName}
</Text>
  <Badge mr='12' colorScheme='green'>
            {/*eslint-disable-next-line react/prop-types*/}
  {postData.pincode}
  </Badge>
{/* <Text fontSize='sm'>UI Engineer</Text> */}
</Box>
                        <Tag size='sm' ml='5' mt='2' height='20px' colorScheme='blue'>
                            {/*eslint-disable-next-line react/prop-types*/}
              <TagLabel>{postData.sports}</TagLabel>
            </Tag>
</Flex>
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
            {/*eslint-disable-next-line react/prop-types*/}
            <Text fontSize="md" mt='2' fontWeight="bold" mb="2" color="pink.400" lineHeight="short" overflow="hidden" >
                {/*eslint-disable-next-line react/prop-types*/}
                {postData.title}
            </Text>
            <Text fontSize="sm" color="gray.200" mb="2">
                {/*eslint-disable-next-line react/prop-types*/}
                {postData.description}
            </Text>
            
            
            {/* <Text fontSize="sm" color="gray.300" mb="2">
                <strong>Sports:</strong> {postData.sports}
            </Text> */}
           

            <Modal isOpen={isPopupOpen} onClose={closePopup}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Post Options</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb="2">What would you like to do with this post?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={openEditModal}>Edit Post</Button>
                        <Button colorScheme="red" onClick={handleDelete}>Delete Post</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb="3">Edit Title:</Text>
                        <input
                            type="text"
                            value={updateTitle}
                            onChange={(e) => setupdateTitle(e.target.value)}
                            style={{ backgroundColor: 'white', color: 'black', padding: '8px', borderRadius: '4px' }}
                        />
                        <Text mt="5" mb="5" >Edit Description:</Text>
                        <input
                            value={updateDescription}
                            onChange={(e) => setupdateDescription(e.target.value)}
                            style={{ backgroundColor: 'white', color: 'black', padding: '8px', borderRadius: '4px',  fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleEdit}>Save Changes</Button>
                        <Button colorScheme="gray" onClick={closeEditModal}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default PostCard;
