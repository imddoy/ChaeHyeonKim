import React from 'react';
import * as B from './LevelBtnStyle.jsx';

export default function LevelBtn({ children, isActive, onClick }) {
    return (
        <B.Button isActive={isActive} onClick={onClick}>
            {children}
        </B.Button>
    );
}
