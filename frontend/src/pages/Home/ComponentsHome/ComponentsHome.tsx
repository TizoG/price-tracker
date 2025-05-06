import { Box, HStack, VStack, Text, GridItem } from '@chakra-ui/react';

import { ComponentsHomeProps } from './ComponetsHome.type';

export const ComponentsHome = (props: ComponentsHomeProps) => {
    const { title, price, inflaction, icon, color, colSpan, rowSpan } = props;
    return (
        <GridItem colSpan={colSpan} rowSpan={rowSpan}>
            <Box
                bg={color}
                py={3}
                px={5}
                rounded={15}
                boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.1)'}
            >
                <HStack justify={'space-between'}>
                    <VStack align={'start'}>
                        <Text
                            color={'#A0AEC0'}
                            fontWeight={'bold'}
                            fontSize={'sm'}
                            fontFamily={'helvetica'}
                        >
                            {title}
                        </Text>
                        <HStack>
                            <Text
                                color={'#2D3748'}
                                fontFamily={'helvetica'}
                                fontWeight={'bold'}
                                fontSize={'lg'}
                            >
                                $ {price}
                            </Text>
                            <Text
                                color={'#48BB78'}
                                fontFamily={'helvetica'}
                                fontWeight={'bold'}
                                fontSize={'sm'}
                            >
                                {inflaction}%
                            </Text>
                        </HStack>
                    </VStack>
                    <Box
                        display={'flex'}
                        alignItems={'center'}
                        bg={'teal.300'}
                        h={45}
                        w={45}
                        rounded={15}
                        justifyContent={'center'}
                    >
                        {icon}
                    </Box>
                </HStack>
            </Box>
        </GridItem>
    );
};
