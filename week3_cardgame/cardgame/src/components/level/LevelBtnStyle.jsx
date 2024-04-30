import styled from 'styled-components';

export const Button = styled.button`
    width: 15rem;
    height: 6rem;
    background-color: ${(props) => props.theme.colors.pink};
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 2rem;

    &:focus {
        outline: none;
    }

    &:hover {
        box-shadow: inset 0 1rem.5rem rgba(0, 0, 0, 0.25);
        background-color: ${(props) => props.theme.colors.darkpink};
    }
`;
