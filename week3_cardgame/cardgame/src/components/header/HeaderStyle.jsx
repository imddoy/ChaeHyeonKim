import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 15rem;
    background-color: ${(props) => props.theme.colors.pink};
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
`;

export const Reset = styled.button`
    position: fixed;
    right: 10rem;
    top: 3rem;
    width: 15rem;
    height: 6rem;
    background-color: ${(props) => props.theme.colors.grey};
    border: none;
    border-radius: 20px;
    color: ${(props) => props.theme.colors.pink};
    cursor: pointer;
    font-size: 2rem;
    z-index: 1;
    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: inset 0 1rem.5rem rgba(0, 0, 0, 0.25);
    }
`;
