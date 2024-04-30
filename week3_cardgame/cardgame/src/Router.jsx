import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/header/Header';
import GamePage from './pages/GamePage';
import styled from 'styled-components';

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Header />
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
    margin: 5rem auto;
`;
