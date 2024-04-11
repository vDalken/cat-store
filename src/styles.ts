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
        font-family: "Lato", serif;

        --blue: #07E2EB;
        --green: #C7DFC5;
        --light-green: #2B4041;
        --yellow: #FCE694;
        --white: #C9B7AD;

        --black:#2B4041;

        --pods-color:#F4AFB4;
        --primary-background:#07E2EB;
        --text-color: #F81D14;
        --accent-color: #FFF;
        --button-background-color: #EB5900;
        --button-text-color: #FFFFFF;
        --highlight-text-color: #a56d4e;
        --pagination-background-color: #6B4A36;

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
