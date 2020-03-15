import React from 'react';
// @ts-ignore
import Gallery from 'react-grid-gallery';
// @ts-ignore
import photo from '../carousel/space-1.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const IMAGES = [
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
    {
        src: photo,
        thumbnail: photo,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: false,
        caption: '',
    },
];

const gallery = () => (
    <Wrapper>
        <Gallery
            backdropClosesModal
            showLightboxThumbnails
            showImageCount={false}
            enableImageSelection={false}
            images={IMAGES}
        />
    </Wrapper>
);

export default gallery;
