import React from 'react';
import { Modal } from "./components/modal";
import { Button } from "./components/button";
import styled from 'styled-components';

const Container = styled.div`
    width: 240px;
    border-radius: 10px;
    padding: 24px;
    background-color: white;
`

const ButtonWrappeer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 24px;
`

export const FormModal = ({ confilm, cancel }) =>{
    return (
        <Modal>
            <Container>
            <div>本当に作成しますか？</div>
            <ButtonWrappeer>
                <Button onClick = {cancel}>Cancel</Button>
                <Button onClick = {confilm}>OK</Button>
            </ButtonWrappeer>
            </Container>
        </Modal>
    )
}