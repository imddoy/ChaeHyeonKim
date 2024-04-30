import React, { useState } from 'react';
import CardHandler from '../components/card/CardHandler';
import Header from '../components/header/Header';

export default function GamePage() {
    const [score, setScore] = useState(0);

    // 점수 업데이트 함수
    const updateScore = (newScore) => {
        setScore(newScore);
    };

    return (
        <>
            <Header score={score} />
            <CardHandler updateScore={updateScore} />
        </>
    );
}
