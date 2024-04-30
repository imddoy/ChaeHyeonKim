import React from 'react';
import * as S from './ScoreStyle';

export default function Score({ score }) {
    return (
        <S.ScoreWrapper>
            <S.MyScore>{score}</S.MyScore>
            <S.TargetScore>/9</S.TargetScore>
        </S.ScoreWrapper>
    );
}
