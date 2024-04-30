import React from 'react';
import * as H from './HeaderStyle';
import Score from './Score';

export default function Header({ score }) {
    return (
        <H.HeaderWrapper>
            <H.Title>Sugar Rush Player Match</H.Title>
            <Score score={score} />
        </H.HeaderWrapper>
    );
}
