import { HStack, Button, useBreakpointValue, Box } from '@chakra-ui/react';
import { MdSportsCricket } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import { FaVolleyballBall } from "react-icons/fa";
import { GiTennisRacket } from "react-icons/gi";
import { IoIosBasketball } from "react-icons/io";
import { FaChess } from "react-icons/fa";
import { MdSportsKabaddi } from "react-icons/md";
import { GiCycling } from "react-icons/gi";
import { SiCodingninjas } from "react-icons/si";
import { TiThSmallOutline } from "react-icons/ti";

const iconList = [
  TiThSmallOutline,
  MdSportsCricket,
  IoMdFootball,
  FaVolleyballBall,
  GiTennisRacket,
  IoIosBasketball,
  FaChess,
  MdSportsKabaddi,
  GiCycling,
  SiCodingninjas
];

const buttonList = [
  "All",
  "Cricket",
  "Football",
  "Volleyball",
  "Badminton",
  "Basketball",
  "Chess",
  "Kabaddi",
  "Cycling",
  "Ludo",
  "Coding"
];

const Categories = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const isMobile = useBreakpointValue({ base: true, lg: false });


    return (
      <Box position="fixed" top={{base:"0", md:"auto"}} left={{base:"0", md:"auto"}}  right={{base:"0", md:"auto"}}  zIndex={999}>
  <HStack spacing={2} overflowX="auto" ml={{ base: '2', md: '60' }} my={5}>
    {isDesktop &&
      buttonList.map((buttonName, index) => (
        <Button key={index} bg="gray.800" fontWeight="medium" mx={2} px={2} mt={6}>
          {buttonName}
        </Button>
      ))}
    {isMobile &&
      iconList.map((IconComponent, index) => (
        <Button key={index} bg="gray.800" fontWeight="medium" mx={2} px={2} mt={12}>
          <IconComponent
            size={isDesktop ? 24 : 36}
            color="gray.800"
            display={isDesktop ? 'none' : 'block'}
          />
        </Button>
      ))}
  </HStack>
</Box>
  )
}

export default Categories;
