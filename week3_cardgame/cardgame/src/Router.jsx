import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';
import styled from 'styled-components';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <GlobalWrapper>
                    <Routes>
                        <Route path="/" element={<GamePage />} />
                    </Routes>
                </GlobalWrapper>
            </BrowserRouter>
        </>
    );
}

const GlobalWrapper = styled.main`
    margin: 0 auto;
`;
