import { activeClassName } from '../../utilis';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { breakPoints } from '../variables';

export const StyleArticle = styled.article`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 85%;
height: 400px;
background-color: #006699;
box-shadow: 2px 2px 20px 2px #FFF;
border: 2px solid #FFF;
opacity: .9;

@media(min-width: ${breakPoints.small}) {
top: 55%;
};

@media(min-width: ${breakPoints.middle}) {
  height: 500px;
};

@media(min-width: ${breakPoints.maxlarge}) {
  height: 800px;
};
`;

export const StyleLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
    color: #3366ff;
};

color: #FFF;
margin-bottom: 1px;

@media(min-width: ${breakPoints.small}) {
   position: absolute;
   bottom: 15px;
   left: 50%;
   transform: translateX(-50%);
}
`;
