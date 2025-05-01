import { Breadcrumb } from '@chakra-ui/react';
import { LiaSlashSolid } from 'react-icons/lia';
export const ComponentBreadcrumb = () => {
    return (
        <Breadcrumb.Root mt={4}>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator>
                    <LiaSlashSolid />
                </Breadcrumb.Separator>
                <Breadcrumb.Item>
                    <Breadcrumb.Link href="#">Dashboard</Breadcrumb.Link>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb.Root>
    );
};
