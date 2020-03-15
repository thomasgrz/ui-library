import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
    * {
        box-sizing: border-box;
    }
    height: 50px;
    width: 100%;
    a:link {
        text-decoration: none;
        color: #000;
    }
    a:visited {
        text-decoration: none;
        color: #000;
    }
    a:active {
        text-decoration: none;
    }
    a:hover {
        text-decoration: none;
        opacity: 0.5;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const MenuList = styled.ul`
    max-height: 100%;
    list-style-type: none;
    display: flex;
    height: 100%;
    li {
        margin: auto;
        margin-right: 10px;
    }
    padding: 0;
    padding-right: 10px;
`;

const Home = styled.h2`
    padding-left: 10px;
    height: 1.5em;
    font-size: 1.5em;
    text-overflow: ellipsis;
`;

type NavLink = {
    text: string;
    link: string;
};

interface Props {
    home?: {
        text: string;
        link: string;
    };
    links?: NavLink[];
}

function NavBar(props: Props): JSX.Element {
    const {
        home = {
            text: 'Home',
            link: '#',
        },
        links,
    } = props;

    return (
        <Navigation>
            <Home>
                <a href={home.link}>{home.text}</a>
            </Home>
            <MenuList>
                {links &&
                    links.map(link => {
                        return (
                            <li key={link.link}>
                                <a href={link.link}>{link.text}</a>
                            </li>
                        );
                    })}
            </MenuList>
        </Navigation>
    );
}

export default NavBar;
