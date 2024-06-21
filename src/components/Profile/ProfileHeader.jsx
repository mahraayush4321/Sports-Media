import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";
import Auth from "../../assets/auth.png";

const ProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={Auth} alt="As a programmer logo" />
      </AvatarGroup>
      <VStack alignItems={"start"} spacing={2} mx="auto" flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>User Name</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as="span" fontWeight={"bold"} mr={1}>
              69
            </Text>
            Posts
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            xyz@gmail.com
          </Text>
        </Flex>
        <Text fontSize={"sm"}>Bio About the USER</Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default ProfileHeader;
