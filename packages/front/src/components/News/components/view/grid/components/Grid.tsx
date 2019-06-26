import React,{ReactElement}                                from 'react';
import {Description,Header,HeaderWrapper,Image,WrapperDiv} from '../styles';
import useReactRouter                                      from 'use-react-router';

interface CardProps{
  icon?: ReactElement
  iconColor?: string
  href?: string
  image?: string
  title: string
  description?: string
}

const Grid=(props: CardProps) => {
  const {history}=useReactRouter();
  const handleClick=(href: string|undefined) => () => {
    if(!href) return;
    history.push(href);
  };
  const block=(
    <React.Fragment>
      {props.image&&(<Image url={props.image}/>)}
      <HeaderWrapper>
        <Header>
          {props.title}
        </Header>
        <Description>{props.description}</Description>
      </HeaderWrapper>
    </React.Fragment>
  );
  return (
    <WrapperDiv onClick={handleClick(props.href)}>
      {block}
    </WrapperDiv>
  );
};
export default Grid;
