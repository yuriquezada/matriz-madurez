import React from 'react';
import "../style/Card.css";
import ScoreListItem from './ScoreListItem';
import TextArea from './TextArea';


export default function Card({name, principles}) {
  return (
    <div className='card'>
      <ScoreListItem label={name}/>
      {
        principles.map((principle)=>(
          <ScoreListItem label={principle.name}/>
        ))
      }
      <TextArea label="Comentario"/>
    </div>
  )
}
