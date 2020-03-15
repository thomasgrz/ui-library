import React from 'react';
import NavBar from '.';

export default {
    title: 'Navigation Bar',
};

export const withNoConfig = (): JSX.Element => <NavBar />;
export const withConfig = (): JSX.Element => (
    <NavBar
        home={{ text: 'Artist Long Name', link: '.' }}
        links={[
            {
                link: '#',
                text: 'Contact',
            },
            {
                link: '#',
                text: 'About',
            },
            {
                link: '#',
                text: 'Shop',
            },
        ]}
    />
);
