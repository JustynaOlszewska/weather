import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { breakPoints } from "./variables";

const GlobalStyle = createGlobalStyle`
${normalize}

 body {
font-size: 16px;
font-family: 'RobotoBold',sans-serif;
height: 100vh;
max-height: 100%;
background-image: url('../img/sky-34536_640.png');
background-size: cover;
background-repeat: no-repeat;

@media (min-width: ${breakPoints.small}) {
 background-image: url('../img/sky-34536_1280.png');
};

@media(min-width: ${breakPoints.large}) {
    background-size: 900px 100%;
    background-position: center;
  background-color: #36454f;
};
 };
`

export default GlobalStyle;