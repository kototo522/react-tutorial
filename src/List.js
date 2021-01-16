import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 12px 64px;
`

const ListItem = styled.div`
    padding: 8px 16px;

    &:nth-child(n+2) {
        border-top: 1px solid #D9DBDE;
    }
`

export const List = ({ langs }) => {
    return(
        <Container>
            <h4>取り扱い言語リスト</h4>
            <div>
        {
            langs.map((lang, index) => {
                return <ListItem key = {index}>{ lang }</ListItem>
            })
        }
            </div>
        </Container>        
    )
};