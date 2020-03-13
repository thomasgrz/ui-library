import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    h1 {
        color: #292727;
        text-align:center;
    }
`

function App(): JSX.Element{
    return (
        <Wrapper>
            <h1>Hello, World RELOADED!</h1>
        </Wrapper>
    )
}

export default App;