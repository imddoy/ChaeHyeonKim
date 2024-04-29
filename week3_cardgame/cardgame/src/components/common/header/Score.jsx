import React from 'react';
import * as S from './ScoreStyle';

export default function Score() {
    return (
        <S.ScoreWrapper>
            <S.MyScore>0</S.MyScore>
            <S.TargetScore>/5</S.TargetScore>
        </S.ScoreWrapper>
    );
}
