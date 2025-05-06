import { Grid, GridItem, Theme } from '@chakra-ui/react';
import { ComponentsHome } from './ComponentsHome/ComponentsHome';
import { FaLongArrowAltDown } from 'react-icons/fa';
import { SlSizeActual } from 'react-icons/sl';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { ComponentsHomeBento } from './ComponetsHomeBento/ComponentsHomeBento';
import { ComponentHomeTable } from './ComponentHomeTable/ComponentHomeTable';
import { GraficCircle } from './ComponetHomeGrafica/ComponentHomeGrafica';
import { ComponentHomeLastScraping } from './ComponetHomeLastScraping/ComponetHomeLastScraping';

const ContentCards = [
    {
        title: 'Precio más bajo',
        price: 1000,
        inflaction: 50,
        color: 'green.100',
        icon: <FaLongArrowAltDown color={'#FFFFFF'} size={22} />,
    },
    {
        title: 'Precio actual',
        price: 1000,
        inflaction: 50,
        color: '#FFFFFF',
        icon: <SlSizeActual color={'#FFFFFF'} size={22} />,
    },
    {
        title: 'Precio más alto',
        price: 1000,
        inflaction: 50,
        color: 'red.100',
        icon: <FaArrowTrendUp color={'#FFFFFF'} size={22} />,
    },
];

export const Home = () => {
    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(6, 1fr)',
            }}
            templateRows="repeat(auto, auto, auto,auto,auto)"
            gapX={'24px'}
            gapY={'23px'}
            m={0}
            p={0}
        >
            {ContentCards.map((card, index) => (
                <GridItem
                    key={index}
                    rowSpan={1}
                    colSpan={{ base: 1, md: 2, sm: 1 }}
                >
                    <ComponentsHome {...card} />
                </GridItem>
            ))}

            {/* Gráfica grande */}
            <GridItem colSpan={{ base: 1, sm: 2, md: 4 }} rowSpan={2}>
                <ComponentsHomeBento title="Sales Overview" colSpan={4} />
            </GridItem>

            {/* Card lateral */}
            <GridItem colSpan={{ base: 1, sm: 2, md: 2 }} rowSpan={2}>
                <ComponentHomeLastScraping />
            </GridItem>

            {/* Card inferior izquierda */}
            <GridItem colSpan={{ base: 1, sm: 2, md: 2 }} rowSpan={2}>
                <GraficCircle />
            </GridItem>

            {/* Segunda gráfica */}
            <GridItem colSpan={{ base: 1, sm: 2, md: 4 }}>
                <Theme appearance="light" colorPalette={'gray'}>
                    <ComponentHomeTable />
                </Theme>
            </GridItem>
        </Grid>
    );
};
