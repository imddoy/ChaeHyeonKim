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
