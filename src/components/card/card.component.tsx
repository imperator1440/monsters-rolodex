import { Component } from "react";

import { IMonster } from '../../App';

import './card.styles.css';

interface IProps {
  monster: IMonster;
};

class Card extends Component<IProps> {
  render() {
    const { name, id, email } = this.props.monster;

    return (
      <div className='card-container' key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default Card;