import { createGlobalStyle } from 'styled-components';
import SansSourceProRegular from 'assets/fonts/SourceSansPro-Regular.woff2';
import SansSourceProSemiBold from 'assets/fonts/SourceSansPro-SemiBold.woff2';
import PoppinsBold from 'assets/fonts/Poppins-Bold.woff2';

const GlobalFontsStyle = createGlobalStyle`
    @font-face {
        font-family: 'Sans Source Pro', sans-serif;,
        src: local('Sans Source Pro'),
        font-style: normal;
        font-weight: 400;
        src: url(${SansSourceProRegular}) format('woff2'),
    }
    @font-face {
        font-family: 'Sans Source Pro', sans-serif;,
        src: local('Sans Source Pro'),
        font-style: normal;
        font-weight: 600;
        src: url(${SansSourceProSemiBold}) format('woff2'),
    }
    @font-face {
        font-family: 'PoppinsBold', sans-serif;,
        src: local('PoppinsBold'),
        font-style: normal;
        font-weight: 700;
        src: url(${PoppinsBold}) format('woff2'),
    }
`;

export default GlobalFontsStyle;
