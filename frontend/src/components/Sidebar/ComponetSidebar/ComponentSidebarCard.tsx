import { useState } from 'react';
import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { FaHouseChimney } from 'react-icons/fa6';
import { FaRegChartBar } from 'react-icons/fa';
import { TbBrandProducthunt } from 'react-icons/tb';
import { GiAutoRepair } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { AiOutlineRocket } from 'react-icons/ai';
import { FaSignInAlt } from 'react-icons/fa';
export const ComponentSidebarCard = () => {
    const [activeLink, setActiveLink] = useState('dashboard');

    const Links = [
        { name: 'Dashboard', key: 'dashboard', icon: FaHouseChimney },
        { name: 'Add Product', key: 'add product', icon: TbBrandProducthunt },
        { name: 'Tables', key: 'tables', icon: FaRegChartBar },
        { name: 'History', key: 'history', icon: GiAutoRepair },
    ];
    const LinksAcount = [
        { name: 'Profile', key: 'profile', icon: FaUser },
        { name: 'Logout', key: 'logout', icon: FaSignInAlt },
        { name: 'Sign Up', key: 'sign up', icon: AiOutlineRocket },
    ];
    return (
        <>
            {Links.map(({ name, key, icon: Icon }) => (
                <Box
                    key={key}
                    py={3}
                    px={5}
                    h={54}
                    w={219}
                    rounded={15}
                    boxShadow={
                        activeLink === key
                            ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                            : 'none'
                    }
                    bg={activeLink === key ? '#FFFFFF' : 'transparent'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    cursor={'pointer'}
                    onClick={() => setActiveLink(key)}
                >
                    <HStack justify={'center'}>
                        {Icon && (
                            <Box
                                bg={activeLink == key ? '#4FD1C5' : '#FFFFFF'}
                                p={3}
                                rounded={12}
                                color={
                                    activeLink === key ? 'white' : 'gray.500'
                                }
                            >
                                <Icon size={20} />
                            </Box>
                        )}
                        <Link
                            color={activeLink === key ? '#2D3748' : 'gray.500'}
                            fontWeight={'bold'}
                            fontFamily={'helvetica'}
                        >
                            {name}
                        </Link>
                    </HStack>
                </Box>
            ))}

            <Text
                color={'#2D3748'}
                fontWeight={'bold'}
                fontSize={'lg'}
                fontFamily={'helvetica'}
                mt={5}
                pb={2}
            >
                ACCOUNT PAGE
            </Text>
            {LinksAcount.map(({ name, key, icon: Icon }) => (
                <Box
                    key={key}
                    py={3}
                    px={5}
                    h={54}
                    w={219}
                    rounded={15}
                    boxShadow={
                        activeLink === key
                            ? '0px 4px 6px rgba(0, 0, 0, 0.1)'
                            : 'none'
                    }
                    bg={activeLink === key ? '#FFFFFF' : 'transparent'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    cursor={'pointer'}
                    onClick={() => setActiveLink(key)}
                >
                    <HStack justify={'center'}>
                        {Icon && (
                            <Box
                                bg={activeLink == key ? '#4FD1C5' : '#FFFFFF'}
                                p={3}
                                rounded={12}
                                color={
                                    activeLink === key ? 'white' : 'gray.500'
                                }
                            >
                                <Icon size={20} />
                            </Box>
                        )}
                        <Link
                            color={activeLink === key ? '#2D3748' : 'gray.500'}
                            fontWeight={'bold'}
                            fontFamily={'helvetica'}
                        >
                            {name}
                        </Link>
                    </HStack>
                </Box>
            ))}
        </>
    );
};
