import React from 'react';
// @ts-ignore
import makeCarousel from 'react-reveal/makeCarousel';
// @ts-ignore
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
// @ts-ignore
import space from './space-1.jpg';

const Container = styled.div`
    overflow: hidden;
    border: 5px solid red;
    position: absolute;
    width: 100%;
    height: 100%;
    .react-reveal {
        height: 100%;
        background-color: yellow;
    }
`;
const SlideWrapper = styled.div`
    text-align: center;
    border: 5px solid purple;
    max-width: 100%;
    margin: auto;
    height: 100%;
    overflow: hidden;
`;
const CarouselUI = ({ children }: any) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

function normalCorousel() {
    return (
        <Carousel swipe>
            <Slide right>
                <SlideWrapper>
                    <h1>Slide 2</h1>
                    <p>Details 2</p>
                </SlideWrapper>
            </Slide>
            <Slide right>
                <SlideWrapper>
                    <h1>Slide 2</h1>
                    <p>Details 2</p>
                </SlideWrapper>
            </Slide>
        </Carousel>
    );
}
export default normalCorousel;
