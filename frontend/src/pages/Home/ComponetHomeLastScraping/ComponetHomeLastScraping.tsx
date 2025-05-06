import { Box, Heading, Image } from '@chakra-ui/react';

export const ComponentHomeLastScraping = () => {
    return (
        <Box
            bg={'#FFFFFF'}
            borderRadius={'md'}
            p={4}
            boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.1)'}
            h={'100%'}
        >
            <Heading color={'#000000'}>Ultimo scraping</Heading>
            <Image src="https://m.media-amazon.com/images/I/618r76w5dGL._AC_SX522_.jpg"></Image>
        </Box>
    );
};
