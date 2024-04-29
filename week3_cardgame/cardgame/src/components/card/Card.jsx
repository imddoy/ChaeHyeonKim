import React, { useState } from 'react';
import * as C from './CardStyle';

export default function Card(props) {
    const [isOpen, setIsOpen] = useState(false);
    function openCard() {
        setIsOpen(true);
    }
    console.log(props.id + props.img);
    return (
        <C.CardWrapper onClick={openCard} isOpen={isOpen}>
            <C.FrontCard img={props.img}>{props.id}</C.FrontCard>
            <C.BackCard>뒷면</C.BackCard>
        </C.CardWrapper>
    );
}
