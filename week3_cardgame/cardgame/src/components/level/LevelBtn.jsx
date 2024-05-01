import React from 'react';
import * as B from './LevelBtnStyle.jsx';

export default function LevelBtn({ children, onClick }) {
    return <B.Button onClick={onClick}>{children}</B.Button>;
}
