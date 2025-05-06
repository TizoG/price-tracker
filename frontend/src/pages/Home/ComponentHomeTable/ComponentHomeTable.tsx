import { Table } from '@chakra-ui/react';

export const ComponentHomeTable = () => {
    return (
        <Table.ScrollArea
            borderWidth="1px"
            rounded="md"
            height={'250px'}
            borderColor={'gray.400'}
        >
            <Table.Root size="sm" stickyHeader>
                <Table.Header>
                    <Table.Row bg="gray.100" borderColor={'gray.400'}>
                        <Table.ColumnHeader color={'black'}>
                            Product
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color={'black'}>
                            Category
                        </Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end" color={'black'}>
                            Price
                        </Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>

                <Table.Body bg={'#FFFFFF'}>
                    {items.map((item) => (
                        <Table.Row
                            key={item.id}
                            _hover={{ bg: 'gray.50' }}
                            bg={'gray.300'}
                        >
                            <Table.Cell color={'black'}>{item.name}</Table.Cell>
                            <Table.Cell color={'black'}>
                                {item.category}
                            </Table.Cell>
                            <Table.Cell textAlign="end" color={'black'}>
                                {item.price}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    );
};

const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 2, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 3, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 5, name: 'Headphones', category: 'Accessories', price: 199.99 },
    { id: 6, name: 'Laptop', category: 'Electronics', price: 999.99 },
    { id: 7, name: 'Coffee Maker', category: 'Home Appliances', price: 49.99 },
    { id: 8, name: 'Desk Chair', category: 'Furniture', price: 150.0 },
    { id: 9, name: 'Smartphone', category: 'Electronics', price: 799.99 },
    { id: 10, name: 'Headphones', category: 'Accessories', price: 199.99 },
];
