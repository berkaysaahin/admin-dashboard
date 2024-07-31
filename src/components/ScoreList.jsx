import { Card, List, ListItem, Title } from '@tremor/react';

export function ScoreList() {
  return (
    
      <Card className='max-w-full mx-auto mt-4'>
        <Title>Individuals</Title>
      <List>
        <ListItem>
          <span>Roger Federer</span>
          <span>10,550</span>
        </ListItem>
        <ListItem>
          <span>Rafel Nadal</span>
          <span>9,205</span>
        </ListItem>
        <ListItem>
          <span>Novak Djokovic</span>
          <span>8,310</span>
        </ListItem>
        <ListItem>
          <span>Andy Murray</span>
          <span>7,030</span>
        </ListItem>
      </List>
      </Card>
    
  );
}