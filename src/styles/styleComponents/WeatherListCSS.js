import styled from 'styled-components';
import { activeClassName } from '../../utilis';
import { NavLink } from 'react-router-dom';

import { breakPoints } from '../variables';

export const StyleArticle = styled.article`

&>h1 {
  @media(min-width: ${breakPoints.small}) {
margin-bottom: 1px;
};

@media(min-width: ${breakPoints.maxlarge}) {
  margin-top: 80px;
};

@media (orientation: landscape) {
  margin: 1px 0;
  width: 100%;
  font-size: 2.5rem;
};

@media(min-height: 730px) and (orientation: portrait) {
    font-size: 3rem;
    margin-bottom: 2px;
};
};

&>p:first-of-type {
 margin-top: 1px;
};
& p {
  @media (orientation: landscape) {
  margin: 1px 0;
};
@media(min-height: 730px) and (orientation: portrait) {
    font-size: 2rem;
};
};
&>img {
  @media (orientation: landscape) {
  width:80px;
  height:80px;
};
};

@media(min-width: ${breakPoints.middle}) {
  font-size: 1.4rem;
};

@media(min-width: ${breakPoints.maxlarge}) {
  font-size: 2rem;
};

@media (orientation: landscape) {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 2px 20px 2px 20px;
};

@media(min-width: 1279px) and (orientation: landscape) {
    margin: 0 20%;
};
`;

export const StyleLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
    color: #3366ff;
};

  color: #FFF;
  margin-bottom: 1px;
  @media(min-height: 730px) and (orientation: portrait) {
    font-size: 2rem;
};
`;
