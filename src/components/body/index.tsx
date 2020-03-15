import React from 'react';
import styled from 'styled-components';

const NavigationStub = styled.nav`
    max-width: 100%;
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
`;

const PageBody = styled.div`
    height: 100%;
    max-width: 100%;
    box-shadow: 0 8px 6px -5px rgba(0, 0, 0, 0.2) inset;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
const FauxBody = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
`;

function NavBar(props: any): JSX.Element {
    return (
        <FauxBody>
            <Wrapper>
                {
                    // @ts-ignore
                    props.navBar
                }
                <PageBody>
                    {
                        //@ts-ignore
                        props.children
                    }
                </PageBody>
            </Wrapper>
        </FauxBody>
    );
}

export default NavBar;
