import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
    height: 15rem;
    background-color: ${(props) => props.theme.colors.pink};
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.white};
`;
