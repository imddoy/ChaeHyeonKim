import React, { useEffect, useState } from 'react';
import Card from './Card';
import CARDLIST from './CardData';
import styled from 'styled-components';

export default function CardHandler({ level, updateScore, shuffle }) {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null); // 전에 선택한 카드
    const [matchCards, setMatchCards] = useState([]); // 매칭된 카드들
    const [openCards, setOpenCards] = useState([]); // 오픈된 카드들 (선택한 카드 + 매칭된 카드들)

    // 랜덤 카드 뽑기
    const getRandomElement = (arr) => {
        console.log('getRandomElement');
        let result = new Set();
        while (result.size < level) {
            const randomElement = arr[Math.floor(Math.random() * arr.length)];
            result.add(randomElement);
        }
        return Array.from(result);
    };

    // 카드 쌍 만들기
    const initialCards = () => {
        const selectedCards = getRandomElement(CARDLIST);
        const cardPairs = selectedCards.reduce(
            (acc, card) => [
                ...acc,
                { ...card, id: card.id + 1000 }, // ID 충돌 방지
                { ...card, id: card.id + 2000 }, // ID 충돌 방지
            ],
            [],
        );
        return cardPairs.sort(() => 0.5 - Math.random());
    };

    useEffect(() => {
        console.log('useEffect');
        setCards(initialCards());
        setSelectedCard(null);
        setMatchCards([]);
        setOpenCards([]);
    }, [level, shuffle]);

    function chooseCard(e, id) {
        e.stopPropagation();
        // 매칭된 카드와 자기 자신은 선택 불가
        if (!matchCards.includes(id) && id !== selectedCard) {
            setOpenCards((prev) => [...prev, id]); // 카드 오픈
            if (selectedCard == null) {
                // 선택한 카드가 없을 때
                setSelectedCard(id); // 선택한 카드에 추가
            } else if (selectedCard % 1000 !== id % 1000) {
                // 카드가 매칭되지 않을 때
                setTimeout(() => {
                    // 1초 지연
                    setOpenCards(matchCards); // 선택 카드 다시 닫기
                    setSelectedCard(null); // 선택한 카드 비우기
                }, 500);
            } else {
                //카드가 매칭되었을 때
                setMatchCards((prev) => {
                    const newMatchCards = [...prev, id, selectedCard];
                    setOpenCards(newMatchCards); // 매칭 반영 후 오픈 고정
                    return newMatchCards;
                });
                setSelectedCard(null); //선택한 카드 비우기
                updateScore((currentScore) => currentScore + 1);
            }
        }
    }

    return (
        <CardContainer>
            {cards.map((card, index) => (
                <CardWrapper key={index} onClick={(e) => chooseCard(e, card.id)}>
                    <Card img={card.img} open={openCards.includes(card.id)} />
                </CardWrapper>
            ))}
        </CardContainer>
    );
}

const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const CardWrapper = styled.span`
    display: inline-block;
    margin: 1rem;
    cursor: pointer;
`;
