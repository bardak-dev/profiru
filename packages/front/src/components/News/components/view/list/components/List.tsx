import React,{ReactElement}                                             from 'react';
import {Description,Header,HeaderWrapper,Image,ImageOverlay,WrapperDiv} from '../styles';
import useReactRouter                                                   from 'use-react-router';

interface CardProps{
  icon?: ReactElement
  iconColor?: string
  href?: string
  image?: string
  title: string
  description?: string
}

const List=(props: CardProps) => {
  const {history}=useReactRouter();
  const handleClick=(href: string|undefined) => () => {
    if(!href) return;
    history.push(href);
  };
  const block=(
    <React.Fragment>
      <HeaderWrapper>
        <Header>
          {props.title}
        </Header>
        <Description>{props.description}</Description>
      </HeaderWrapper>
      {props.image&&(
        <React.Fragment>
          <ImageOverlay url={props.image}/>
          <Image url={props.image}/>
        </React.Fragment>
      )}
    </React.Fragment>
  );
  return (
    <WrapperDiv onClick={handleClick(props.href)}>
      {block}
    </WrapperDiv>
  );
};
export default List;
