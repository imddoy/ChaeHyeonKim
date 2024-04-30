import React from 'react';
import * as H from './HeaderStyle';
import Score from './Score';

export default function Header({ score, level, resetGame }) {
    return (
        <H.HeaderWrapper>
            <H.Title>Sugar Rush Player Match</H.Title>
            <Score score={score} level={level} />
            <H.Reset onClick={resetGame}>Reset</H.Reset>
        </H.HeaderWrapper>
    );
}
