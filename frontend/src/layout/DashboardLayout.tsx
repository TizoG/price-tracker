import { Header } from '@/components/Header/Header';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <Flex minH="100vh" position={'relative'}>
            <Sidebar />
            <Box flex="1" bg="gray.50">
                <Header />
                <Box bg={'gray.100'} p={4} w={'100%'} px={24} minH={'100vh'}>
                    {children}
                </Box>
            </Box>
        </Flex>
    );
};
