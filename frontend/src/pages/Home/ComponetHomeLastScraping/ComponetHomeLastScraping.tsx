import { Image, Card, Button, Text, Flex } from "@chakra-ui/react";

export const ComponentHomeLastScraping = () => {
  return (
    <Card.Root h={"100%"} overflow={"hidden"} p={4} boxShadow={"md"}>
      <Flex direction={"column"} height={"100%"}>
        <Image
          src="https://m.media-amazon.com/images/I/618r76w5dGL._AC_SX522_.jpg"
          alt="Imagen del ultimo scraping"
        />
        <Card.Body gap={2} flex={1}>
          <Card.Title>Ultimo Scraping</Card.Title>
          <Card.Description>Aqui va la descripcion</Card.Description>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt={2}
          >
            1000
          </Text>
        </Card.Body>
        <Card.Footer gap={2}>
          <Button variant={"solid"}>Comprar ahora</Button>
          <Button variant={"ghost"}>Ver mas</Button>
        </Card.Footer>
      </Flex>
    </Card.Root>
  );
};
