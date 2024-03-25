import {
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Container maxW={"100%"}>
      <Flex
      position="fix"
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
      >
        <Link to="/">
        <Image
          src="/logo.png"
          boxSize='50px'
          display= "block"
          cursor={"pointer"}
          ml={{base: '-3', sm: '0'}}
        />
        </Link>
        <Flex gap={4}>
          <InputGroup borderRadius={5} size="sm">
            
            <Input
              type="text"
              placeholder="Search..."
              border="1px solid #949494"
            />
            <InputRightAddon p={0} border="none">
              <Button
              colorScheme={"blue"}
                size="sm"
                borderLeftRadius={0}
                borderRightRadius={3.3}
                border="1px solid #949494"
              >
               <Icon as={Search2Icon} boxSize={4} />

              </Button>
            </InputRightAddon>
          </InputGroup>
          <Link to="/register">
            <Button colorScheme={"blue"} size={"sm"}>
              Login
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
