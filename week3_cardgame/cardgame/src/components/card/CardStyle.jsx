import { styled } from 'styled-components';

export const CardWrapper = styled.section`
    display: inline-grid;

    // 카드 공통 속성
    * {
        grid-area: 1 / 1 / 1 / 1;
        width: 20rem;
        height: 25rem;
        padding: 1rem;
        backface-visibility: hidden; // 뒤집으면 안보이도록
        cursor: pointer;
        border: 2px solid ${(props) => props.theme.colors.pink};
        border-radius: 15px;
    }

    // 뒤집기 효과
    transition: transform 0.3s;
    transform: perspective(50rem) rotateY(0deg);
    transform-style: preserve-3d;
    transform: ${(props) =>
        props.$isOpen ? 'perspective(50rem) rotateY(0deg);' : 'perspective(50rem) rotateY(180deg);'};
`;

export const FrontCard = styled.article`
    background-image: url(${(props) => props.$img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;
export const BackCard = styled.article`
    background-color: ${(props) => props.theme.colors.grey};
    transform: rotateY(180deg);
`;
