import React from 'react';
import LevelBtn from './LevelBtn';
import styled from 'styled-components';

export default function LevelController({ updateLevel }) {
    const levelSettings = [
        { label: 'Easy', level: 5 },
        { label: 'Normal', level: 7 },
        { label: 'Hard', level: 9 },
    ];
    return (
        <BtnWrapper>
            {levelSettings.map((setting) => (
                <LevelBtn key={setting.label} onClick={() => updateLevel(setting.level)}>
                    {setting.label}
                </LevelBtn>
            ))}
        </BtnWrapper>
    );
}

export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin: 1rem;
`;
