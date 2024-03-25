import { Box, Text, Image, Wrap, WrapItem } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
const Card = ({ title, imageUrl, description }) => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" mt={20} zIndex={10} overflow="hidden">
      <Image src={imageUrl} alt={title} />

      <Box p="6">   
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {title}
        </Box>

        <Text mt="2" color="gray.600">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const Cards = () => {
  return (
    <Wrap spacing="8" ml={{base: '0', md:'28'}} justify="center">
  <WrapItem>
    <Card
      title="Card 1"
      imageUrl="https://via.placeholder.com/150"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ac lacus consequat lacinia."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 2"
      imageUrl="https://via.placeholder.com/150"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 3"
      imageUrl="https://via.placeholder.com/150"
      description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 1"
      imageUrl="https://via.placeholder.com/150"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ac lacus consequat lacinia."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 2"
      imageUrl="https://via.placeholder.com/150"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 3"
      imageUrl="https://via.placeholder.com/150"
      description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 1"
      imageUrl="https://via.placeholder.com/150"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec turpis ac lacus consequat lacinia."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 2"
      imageUrl="https://via.placeholder.com/150"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    />
  </WrapItem>
  <WrapItem>
    <Card
      title="Card 3"
      imageUrl="https://via.placeholder.com/150"
      description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    />
  </WrapItem>
</Wrap>
  );
};

export default Cards;
