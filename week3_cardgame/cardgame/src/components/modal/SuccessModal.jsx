import React from 'react';
import * as M from './SuccessModalStyle';

export default function SuccessModal({ isOpen, onClose }) {
    if (!isOpen) return;

    return (
        <M.ModalContainer>
            <M.ModalWrapper>
                축하합니다!
                <M.ConfirmBtn onClick={onClose}>게임으로 돌아가기</M.ConfirmBtn>
            </M.ModalWrapper>
        </M.ModalContainer>
    );
}
