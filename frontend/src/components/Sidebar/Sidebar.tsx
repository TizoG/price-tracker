import {
    Box,
    VStack,
    Text,
    IconButton,
    Button,
    CloseButton,
    Drawer,
    Portal,
    useBreakpointValue,
} from '@chakra-ui/react';

import { FiMenu } from 'react-icons/fi';
import { ComponentSidebarCard } from './ComponetSidebar/ComponentSidebarCard';
import { useState } from 'react';

export const Sidebar = () => {
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const [open, setOpen] = useState(false);

    const sidebarContent = (
        <VStack align="start" p={6}>
            <Text
                color="#2D3748"
                fontWeight="bold"
                fontSize="lg"
                fontFamily="Helvetica"
                borderBottom="1px solid black"
                pb={2}
                mb={4}
            >
                PRICE-TRACKER
            </Text>
            <ComponentSidebarCard />
        </VStack>
    );

    return (
        <>
            {!isDesktop && (
                <Drawer.Root
                    open={open}
                    onOpenChange={(details) => setOpen(details.open)}
                    placement={'start'}
                >
                    <Drawer.Trigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            p={2}
                            minW="auto"
                            bg="transparent"
                            color="#2D3748"
                            position="fixed"
                            top={4}
                            left={4}
                            zIndex={1000}
                            _hover={{ bg: 'gray.200' }}
                        >
                            <FiMenu />
                        </Button>
                    </Drawer.Trigger>

                    <Portal>
                        <Drawer.Backdrop bg={'rgba(0, 0, 0, 0.5)'} />
                        <Drawer.Positioner>
                            <Drawer.Content bg={'gray.100'}>
                                <Drawer.Header>
                                    <Drawer.Title>PRICE-TRACKER</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body>{sidebarContent}</Drawer.Body>
                                <Drawer.Footer>
                                    <Drawer.CloseTrigger asChild>
                                        <CloseButton
                                            size="lg"
                                            color={'#2D3748'}
                                        />
                                    </Drawer.CloseTrigger>
                                </Drawer.Footer>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            )}

            {isDesktop && (
                <Box
                    as="nav"
                    w="250px"
                    minHeight="100vh"
                    bg="gray.100"
                    p={5}
                    paddingTop={10}
                >
                    {sidebarContent}
                </Box>
            )}
        </>
    );
};
