import React, { useEffect, useState } from 'react';
import CardHandler from '../components/card/CardHandler';
import Header from '../components/header/Header';
import LevelHandler from '../components/levelcontroller/LevelHandler';

export default function GamePage() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(5);

    const updateScore = (newScore) => {
        setScore(newScore);
    };
    const updateLevel = (level) => {
        setLevel(level);
    };

    // 난이도 변경 시 점수 리셋
    useEffect(() => {
        setScore(0);
    }, [level]);

    return (
        <>
            <Header score={score} level={level} />
            <LevelHandler updateLevel={updateLevel} />
            <CardHandler level={level} updateScore={updateScore} />
        </>
    );
}
