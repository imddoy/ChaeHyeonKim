import React from 'react';
import Card from '../components/card/Card';
import CARDLIST from '../components/card/CardData';

export default function GamePage() {
    const MixedCardList = [...CARDLIST, ...CARDLIST].sort(
        (a, b) => 0.5 - Math.random(),
      )
    return <>
    {MixedCardList.map(card=>{
        return(
        <Card id={card.id} img={card.img}/>
        )
    })}
    </>;
}
