import { Component } from 'react';

import { IMonster } from '../../App';

import Card from '../card/card.component'
import './card-list.styles.css';

interface IProps {
  monsters: IMonster[];
};

class CardList extends Component<IProps> {
  render() {
    const { monsters } = this.props;

    return (  
      <div className='card-list'>
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;