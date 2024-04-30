import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const DialogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 10rem;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 10px;
    font-size: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ConfirmButton = styled.button`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.colors.pink};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`;
