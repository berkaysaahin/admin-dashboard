// 'use client';

import { AreaChart, Card, List, ListItem } from '@tremor/react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const data = [
  {
    date: 'Jan 23',
    Organic: 232,
    Sponsored: 0,
  },
  {
    date: 'Feb 23',
    Organic: 241,
    Sponsored: 0,
  },
  {
    date: 'Mar 23',
    Organic: 291,
    Sponsored: 0,
  },
  {
    date: 'Apr 23',
    Organic: 101,
    Sponsored: 0,
  },
  {
    date: 'May 23',
    Organic: 318,
    Sponsored: 0,
  },
  {
    date: 'Jun 23',
    Organic: 205,
    Sponsored: 0,
  },
  {
    date: 'Jul 23',
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: 'Aug 23',
    Organic: 341,
    Sponsored: 0,
  },
  {
    date: 'Sep 23',
    Organic: 387,
    Sponsored: 120,
  },
  {
    date: 'Oct 23',
    Organic: 220,
    Sponsored: 0,
  },
  {
    date: 'Nov 23',
    Organic: 372,
    Sponsored: 0,
  },
  {
    date: 'Dec 23',
    Organic: 321,
    Sponsored: 0,
  },
];

const summary = [
  {
    name: 'Organic',
    value: 3273,
  },
  {
    name: 'Sponsored',
    value: 120,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

const statusColor = {
  Organic: 'bg-blue-500',
  Sponsored: 'bg-violet-500',
};

export default function AreaChartComp() {

  return (
    <div className="flex-auto w-full">
      <Card className="sm:mx-auto mt-4">
        <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Follower metrics
        </h3>
        <AreaChart
          data={data}
          index="date"
          categories={['Organic', 'Sponsored']}
          colors={['blue', 'violet']}
          showLegend={false}
          showYAxis={false}
          showGridLines={true}
          showGradient={false}
          startEndOnly={true}
          className="mt-6 h-48"
        />
        <List className="mt-2">
          {summary.map((item) => (
            <ListItem key={item.name}>
              <div className="flex items-center space-x-2">
                <span
                  className={classNames(statusColor[item.name], 'h-0.5 w-3')}
                />
                <span>{item.name}</span>
              </div>
              <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {valueFormatter(item.value)}
              </span>
            </ListItem>
          ))}
        </List>
        
      </Card>
    </div>
  );
}