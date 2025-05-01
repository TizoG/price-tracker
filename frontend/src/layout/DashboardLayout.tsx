import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Flex h="100vh">
            <Sidebar />
            <Box flex="1" bg="gray.50">
                <Header />
                <Box bg={'gray.100'} p={4} h={'85%'} pl={24}>
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};
