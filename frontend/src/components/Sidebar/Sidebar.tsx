import { Box, VStack, Text, Separator } from '@chakra-ui/react';

import { ComponentSidebarCard } from './ComponetSidebar/ComponentSidebarCard';
export const Sidebar = () => {
    return (
        <Box w="250px" bg="gray.100" p={5} minH="100hv" paddingTop={10}>
            <VStack align="center">
                <Text
                    color="#2D3748"
                    fontWeight="bold"
                    fontSize="lg"
                    fontFamily={'helvetica'}
                    borderBottom={'1px solid black'}
                    pb={2}
                    mb={10}
                >
                    PRICE-TRACKER
                </Text>
                <Separator colorPalette="gray" orientation="vertical" />
                <ComponentSidebarCard />
            </VStack>
        </Box>
    );
};
