import styled from 'styled-components';

export const Button = styled.button`
    width: 15rem;
    height: 6rem;
    background-color: ${(props) => (props.isActive ? props.theme.colors.darkpink : props.theme.colors.pink)};
    box-shadow: ${(props) => (props.isActive ? 'inset 0 1rem 0.5rem rgba(0, 0, 0, 0.25)' : 'none')};
    border: none;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-size: 2rem;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: ${(props) => props.theme.colors.darkpink};
        box-shadow: inset 0 1rem.5rem rgba(0, 0, 0, 0.25);
    }
`;
