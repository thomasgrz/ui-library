import React from 'react';
// @ts-ignore
import photo from '../carousel/space-1.jpg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Slider() {
    return (
        <AwesomeSlider
            media={[
                {
                    source: photo,
                    caption: 'this is a caption',
                },
                {
                    source: photo,
                },
                {
                    source: photo,
                },
                {
                    source: photo,
                },
            ]}
        />
    );
}

export default Slider;
