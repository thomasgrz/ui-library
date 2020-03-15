# UI Library

> A [TypeScript](typescriptlang.org) React Component Library wrapped by [StorybookJS](https://storybook.js.org/) and leveraging [Styled Components](https://styled-components.com/). This is personal project meant to allow me to quickly prototype and test new components. This is not production ready by any means. However, you should feel free to use it for the same aforementioned reasons.

## Getting started:
Once you've cloned and / or forked the repository, in the terminal, within the directory run:

`yarn storybook`

This should start a Storybook server on port 6006.

In your browser navigate to `http://localhost:6006` to interact with the Storybook instance.

Browse the components or create your own!

## Creating your own:
Create a directory for in `src/components/` for your new component.

In `src/components/my-new-component/index.tsx` you will need to export a default component like so:

```tsx
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    color: red;
`;

interface Props {
    buttonText?: string;
};

function MyComponent(props: Props){
    const {
        buttonText = 'default text' 
    } = props;

    return (
        <Wrapper>
            <button>{buttonText}<button>
        </Wrapper>
    )
};

export default MyComponent;
```

Then create one or more Storybook stories in a `stories.tsx` file in that same directory like so:

```tsx
import React from 'react'; // Needs to be in scope for [TJ]SX
import MyComponent from '.';

export default {
    title: 'My Component'
}

export const withDefaultText = () => <MyComponen />

export const withCustomText = () => <MyComponent buttonText={"Custom Text"}>

```

Save the file (and if hot module loading doesn't automatically occur) reload your browser. You should see a directory titled `My Component` with two stories titled `With Default Text` and `With Custom Text`.