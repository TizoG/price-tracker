import { Flex } from '@chakra-ui/react';
import { ComponentsHome } from './ComponentsHome/ComponentsHome';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { SlSizeActual } from 'react-icons/sl';
import { FaArrowTrendUp } from 'react-icons/fa6';
export const Home = () => {
    return (
        <>
            <Flex gap={24}>
                <ComponentsHome
                    title="Precio más bajo"
                    price={1000}
                    inflaction={50}
                    color="green.100"
                    icon={<FaLongArrowAltDown color={'#FFFFFF'} size={22} />}
                />
                <ComponentsHome
                    title="Precio actual"
                    price={1500}
                    inflaction={26}
                    color="#FFFFFF"
                    icon={<SlSizeActual color={'#FFFFFF'} size={22} />}
                />
                <ComponentsHome
                    title="Precio más alto"
                    price={2500}
                    inflaction={80}
                    color="red.100"
                    icon={<FaArrowTrendUp color={'#FFFFFF'} size={22} />}
                />
            </Flex>
        </>
    );
};
