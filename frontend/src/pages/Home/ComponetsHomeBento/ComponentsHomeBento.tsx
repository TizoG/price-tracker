import { GridItem, Heading } from '@chakra-ui/react';
import { ComponentsHomeBentoProps } from './ComponentsHomeBento.type';
import { ComponentHomeGrafica } from '../ComponetHomeGrafica/ComponentHomeGrafica';

export const ComponentsHomeBento = (props: ComponentsHomeBentoProps) => {
    const { title, colSpan = 2 } = props;
    return (
        <>
            <GridItem
                colSpan={colSpan}
                bg={'#FFFFFF'}
                p={4}
                rounded={'lg'}
                boxShadow={'0px 4px 6px rgba(0, 0, 0, 0.1)'}
            >
                {title}
                <ComponentHomeGrafica />
            </GridItem>
        </>
    );
};
