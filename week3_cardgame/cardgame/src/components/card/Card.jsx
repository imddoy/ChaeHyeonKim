import React, { useState } from 'react';
import * as C from './CardStyle';

export default function Card(props) {
    return (
        <C.CardWrapper $isOpen={props.open}>
            <C.FrontCard $img={props.img}></C.FrontCard>
            <C.BackCard></C.BackCard>
        </C.CardWrapper>
    );
}
