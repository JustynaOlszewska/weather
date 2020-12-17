import styled from "styled-components";

import { breakPoints } from '../variables';

export const StyleApplication = styled.main`
display: flex;
flex-direction: column;
height: 100vh;
max-height: 100%;
text-align: center;
font-size: 1rem;
color: #FFF;
text-shadow: 2px 2px 2px #000000;
overflow: hidden;

& > h1 {
@media(min-width: ${breakPoints.small}) {
    font-size: 3rem;
    margin-bottom: 1px;
};

@media(min-width: ${breakPoints.middle}) {
    font-size: 4rem;
};
};
`;
