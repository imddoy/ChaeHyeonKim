import React from 'react';
import * as H from './HeaderStyle';
import Score from './Score';

export default function Header() {
    return (
        <H.HeaderWrapper>
            <H.Title>바넬로피 카드게임</H.Title>
            <Score />
        </H.HeaderWrapper>
    );
}
