import React, { useEffect, useState } from 'react';
import Card from './Card';
import CARDLIST from './CardData';
import styled from 'styled-components';

export default function CardHandler() {
    // 중복 ID 문제 해결을 위해 카드에 고유한 ID 부여
    const initialCards = [
        ...CARDLIST.map((card) => ({ ...card, id: card.id })),
        ...CARDLIST.map((card) => ({ ...card, id: card.id + CARDLIST.length })),
    ];
    // 카드 섞기
    const [cards, setCards] = useState(initialCards.sort(() => 0.5 - Math.random()));
    const [selectedCard, setSelectedCard] = useState(null); // 전에 선택한 카드
    const [matchCards, setMatchCards] = useState([]); // 매칭된 카드들
    const [openCards, setOpenCards] = useState([]); // 오픈된 카드들 (선택한 카드 + 매칭된 카드들)
    const LEVEL = 9; // 카드 쌍의 수

    function chooseCard(e, id) {
        // 매칭된 카드와 자기 자신은 선택 불가
        if (!matchCards.includes(id) && id !== selectedCard) {
            setOpenCards((prev) => [...prev, id]); // 카드 오픈
            if (selectedCard == null) {
                // 선택한 카드가 없을 때
                setSelectedCard(id); // 선택한 카드에 추가
            } else if (selectedCard % LEVEL !== id % LEVEL) {
                // 카드가 매칭되지 않을 때
                setTimeout(() => {
                    // 1초 지연
                    setOpenCards(matchCards); // 선택 카드 다시 닫기
                    setSelectedCard(null); // 선택한 카드 비우기
                }, 1000);
            } else {
                //카드가 매칭되었을 때
                setMatchCards((prev) => {
                    const newMatchCards = [...prev, id, selectedCard];
                    setOpenCards(newMatchCards); // 매칭 반영 후 오픈 고정
                    return newMatchCards;
                });
                setSelectedCard(null); //선택한 카드 비우기
            }
        }
    }

    return (
        <>
            {cards.map((card, index) => (
                <CardWrapper key={index} onClick={(e) => chooseCard(e, card.id)}>
                    <Card img={card.img} open={openCards.includes(card.id)} />
                </CardWrapper>
            ))}
        </>
    );
}

const CardWrapper = styled.span`
    display: inline-block;
    margin: 1rem;
    cursor: pointer;
`;
