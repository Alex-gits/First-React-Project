import React from 'react';
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => (
  <div className='card-list'>
    {
      props.monsters.length ? props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      )) : <h1 className='warning-message'>NO MONSTERS FOUND!</h1>
    }
  </div>
)
