import {
  Box,
  Flex,
  Text,
  Field,
  Input,
  defineStyle,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ComponentBreadcrumb } from "@/components/Header/ComponetHeader/ComponentBreadcrumb";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <Flex
      as="header"
      bg="gray.100"
      p={4}
      justify="flex-start"
      direction={"column"}
    >
      <ComponentBreadcrumb />

      <Flex justify={"space-between"} align={"center"} w={"full"}>
        <Text fontSize="xl" fontWeight="bold" color={"#2D3748"}>
          Mi Dashboard
        </Text>

        <Field.Root w={"auto"}>
          <Box pos="relative" w="100%" maxW="md">
            <Input
              className="peer"
              color={"#2D3748"}
              pr={10}
              placeholder="Buscar..."
            ></Input>
            <Field.Label css={floatingStyles}>Products</Field.Label>
            <Box pos={"absolute"} top={"25%"} right={3}>
              <CiSearch size={20} color="#2D3748" />
            </Box>
          </Box>
        </Field.Root>
      </Flex>

      <Text color={"#2D3748"}>¡Bienvenido a tu Dashboard!, Usuario</Text>
    </Flex>
  );
};

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "gray.100",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "black",
    top: "-3",
    insetStart: "2",
  },
});
