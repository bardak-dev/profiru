import React                           from 'react';
import {StyledExternalLink,StyledLink} from './styles';

interface Props{
  to: string
}

export function isExternal(url: string){
  return window.location.hostname!==(() => {
    if(/^https?:\/\//.test(url)){
      const parser=document.createElement('a');
      parser.href=url;
      return parser.hostname;
    }else{
      return window.location.hostname;
    }
  })();
}
/**
 * Link that also works for external URL's
 */
const Link=(props: Props&{children?: any}) => {
  return (
    isExternal(props.to)? (
      <StyledExternalLink href={props.to} target="_blank" {...props}/>
    ): (
      <StyledLink {...props} />
    )
  );
};
export default Link;
