import {styled} from '../../../../styled/styled-components';
import Link     from '../../../../elements/Link/Link';

export const LogoWrapper=styled(Link)`
  :focus {
    outline: none;
  }
  flex-basis: 80%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
