import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        background-color: ${({theme}) => theme.colors.background};
        box-sizing: border-box;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: ${ ({theme}) => theme.fontFamily};
        margin: 0;
    }

    a, button {
        cursor: pointer;
    }
`

export default GlobalStyles