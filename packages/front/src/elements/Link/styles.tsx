import styled from '../../styled/styled-components';
import {Link} from 'react-router-dom';

export const StyledLink=styled(Link)`
  :focus, :hover {
    text-decoration: none;
    outline: none;
  }
`;
export const StyledExternalLink=styled.a`
  :focus, :hover {
    text-decoration: none;
    outline: none;
  }
`;
