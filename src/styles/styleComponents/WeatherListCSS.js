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
};

&>p:first-of-type {
 margin-top: 1px;
};

@media(min-width: ${breakPoints.middle}) {
  font-size: 1.4rem;
};

@media(min-width: ${breakPoints.maxlarge}) {
  font-size: 2rem;
};
`;

export const StyleLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
    color: #3366ff;
};

  color: #FFF;
  margin-bottom: 1px;
`;
