import React from 'react';
import BasicBody from '../body';
import { withConfig } from '../navbar/stories';
import { singlePhoto } from '../photo-grid/stories';
import { singlePhoto as singleSlider } from '../photo-slider/stories';

export default {
    title: 'Scaffolds',
};

export const basicScaffold = (): JSX.Element => {
    return <BasicBody navBar={withConfig()}></BasicBody>;
};

export const withAGallery = (): JSX.Element => <BasicBody navBar={withConfig()}>{singlePhoto()}</BasicBody>;

export const withASlider = (): JSX.Element => <BasicBody navBar={withConfig()}>{singleSlider()}</BasicBody>;
