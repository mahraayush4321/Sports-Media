import { Box, Flex, Tooltip, Icon } from "@chakra-ui/react";
import { IoChatboxEllipses } from "react-icons/io5";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <>
      <Link to="/chat">
        <Tooltip
          hasArrow
          label={"Search"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            bg={{ base: "black", md: "inherit" }}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={5}
            w={{ base: 20, md: "full" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Icon as={IoChatboxEllipses} boxSize={6} />
            <Box display={{ base: "none", md: "block" }}>Chat</Box>
          </Flex>
        </Tooltip>
      </Link>
    </>
  );
};

export default Chat;
