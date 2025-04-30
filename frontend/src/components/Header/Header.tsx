import { Box, Flex, Text } from '@chakra-ui/react';

export const Header = () => {
    return (
        <Flex
            as="header"
            bg="white"
            boxShadow="md"
            p={4}
            align="center"
            justify="space-between"
        >
            <Text fontSize="xl" fontWeight="bold">
                Mi Dashboard
            </Text>
            <Text>Usuario</Text>
        </Flex>
    );
};
