import React from 'react';
import * as M from './SuccessModalStyle';

export default function SuccessModal({ isOpen, onClose }) {
    if (!isOpen) return;

    return (
        <M.ModalWrapper>
            <M.DialogContainer>
                축하합니다!
                <M.ConfirmButton onClick={onClose}>게임으로 돌아가기</M.ConfirmButton>
            </M.DialogContainer>
        </M.ModalWrapper>
    );
}
