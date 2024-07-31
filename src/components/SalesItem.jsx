import { ArrowRightIcon, ChartPieIcon, ListBulletIcon } from '@heroicons/react/24/solid';
import { Bold, Button, Card, Divider, DonutChart, Flex, List, ListItem, Metric, Tab, TabGroup, TabList, Text, Title } from '@tremor/react';
import { useState } from 'react';

const data = [
    {
      name: 'Travel',
      amount: 6730,
      share: '32.1%',
      
    },
    {
      name: 'IT & equipment',
      amount: 4120,
      share: '19.6%',
      
    },
    {
      name: 'Training & development',
      amount: 3920,
      share: '18.6%',
      
    },
    {
      name: 'Office supplies',
      amount: 3210,
      share: '15.3%',
      
    },
    {
      name: 'Communication',
      amount: 3010,
      share: '14.3%',
      
    },
  ];
  const currencyFormatter = (number) => {
    return '$' + Intl.NumberFormat('us').format(number).toString();
  };
  

const SalesItem = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
  return (
    <Card className='max-w-full mx-auto'>
        <Flex className='space-x-8 flex-col lg:flex-row'>
            <Title>Overview</Title>
            <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                <TabList variant='solid'>
                    <Tab icon={ChartPieIcon}>Chart</Tab>
                    <Tab icon={ListBulletIcon}>List</Tab>
                </TabList>
            </TabGroup>
        </Flex>
        <Text className='mt-8'>Portfolio Value</Text>
            <Metric>$ 25,465</Metric>
            <Divider />
            <Text className='mt-8'>
                <Bold>Asset Allocation</Bold>
            </Text>
            <Text>1 Asset class - 5 Holdings</Text>
            {selectedIndex === 0 ? (
                <DonutChart 
                data={data} 
                valueFormatter={currencyFormatter} 
                index='name' 
                category='amount'
                showAnimation={false}
                className='mt-6'
                />
            ) : (
                <>
                <Flex className='mt-8' justifyContent='between'>
                    <Text className='truncate'>
                        <Bold>Stocks</Bold>
                    </Text>
                    <Text>Since transaction</Text>
                </Flex>
                <List className='mt-4'>
                    {data.map((stock) => (
                        <ListItem key={stock.name}>
                            <Text>{stock.name}</Text>
                            <Flex className='space-x-2' justifyContent='end'>
                                <Text>
                                    $ {Intl.NumberFormat('us').format(stock.amount).toString()}
                                </Text>
                            </Flex>
                        </ListItem>
                    ))}
                </List>
                </>
            )}
            <Flex className='mt-6 pt-4 border-t'>
                <Button size='xs' variant='light' icon={ArrowRightIcon}>
                    View more
                </Button>
            </Flex>
    </Card>
  )
}

export default SalesItem