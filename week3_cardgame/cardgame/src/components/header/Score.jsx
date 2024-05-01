import React from 'react';
import * as S from './ScoreStyle';

export default function Score({ score, level }) {
    return (
        <S.ScoreWrapper>
            <S.MyScore>{score} </S.MyScore>
            <S.TargetScore>/{level}</S.TargetScore>
        </S.ScoreWrapper>
    );
}
