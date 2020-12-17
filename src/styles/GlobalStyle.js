import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { breakPoints } from "./variables";

import skySmall from "../image/sky_640.png";
import skyBig from "../image/sky_1280.png";

const GlobalStyle = createGlobalStyle`
${normalize}

 body {
font-size: 16px;
font-family: 'RobotoBold',sans-serif;
width: 100%;
height: 100vh;
max-height: 100%;
background-image: url(${skySmall});
background-size: cover;
background-repeat: no-repeat;

@media (min-width: ${breakPoints.small}) {
 background-image: url(${skyBig});
};

@media(min-width: ${breakPoints.large}) {
    background-size: 900px 100%;
    background-position: center;
  background-color: #36454f;
};
 };
`

export default GlobalStyle;