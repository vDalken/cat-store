import { createGlobalStyle } from 'styled-components'

// Global styles
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        --ratio: 1.5;
	    --third-hsize: calc( 1rem * var(--ratio) );
	    --second-hsize: calc( var(--third-hsize) * var(--ratio) );
        --first-hsize: 	calc( var(--second-hsize) * var(--ratio) );
        --p-size: calc(var(--third-hsize) / var(--ratio));
        --nav-link-size: calc(var(--third-hsize) / var(--ratio));
        --button-text-size: calc(var(--third-hsize) / var(--ratio));
    }

    :root {
        font-family: "Poppins", serif;

        --blue: #C1DBE3;
        --green: #C7DFC5;
        --light-green: #F6FEAA;
        --yellow: #FCE694;
        --black: #373737;

        --cats-color: var(--yellow);
    }

    html,
    body {
        width: 100%;
        height: 100%;
    }

    #root{
        width:100%;
        height: 100%;
    }
`
