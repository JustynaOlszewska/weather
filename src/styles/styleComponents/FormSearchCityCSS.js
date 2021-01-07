import styled from "styled-components";
import { activeClassName } from '../../utilis';
import { NavLink } from 'react-router-dom';

import { breakPoints } from '../variables';

export const StyleFormSearchCity = styled.form`
& .input{
    margin-top: 30px;
    background-color: #3366ff;
    color: #FFF;

    @media(min-width: ${breakPoints.small}) {
      font-size: 1rem;
      padding: 3px 10px;
      margin-top: 10px;
    };

    @media(min-width: ${breakPoints.middle}) {
  font-size: 1.3rem;
};

@media(min-width: ${breakPoints.maxlarge}) {
  font-size: 1.8rem;
};
@media(min-height: 730px) and (orientation: portrait) {
    font-size: 1.5rem;
};
};

& .label {

  @media(min-width: ${breakPoints.small}) {
  font-size: 1rem;
  display: block;
  width: 100%;
  margin-top: 30px;
};

@media(min-width: ${breakPoints.middle}) {
  font-size: 1.3rem;
  margin-top: 70px;
};

@media(min-width: ${breakPoints.maxlarge}) {
  font-size: 1.8rem;
};
@media(min-height: 730px) and (orientation: portrait) {
    font-size: 1.5rem;
};
};
`;

export const StyleUl = styled.ul`
list-style: none;
padding-left: 0;

 @media(min-width: ${breakPoints.middle}) {
  font-size: 0.9rem;
};
`;

export const StyleLink = styled(NavLink).attrs({ activeClassName })`
&.${activeClassName} {
    color: #3366ff;
};

  color: #FFF;
  
  @media(min-width: ${breakPoints.maxlarge}) {
  font-size: 2rem;
};
@media(min-height: 730px) and (orientation: portrait) {
    font-size: 2rem;
};
`;
