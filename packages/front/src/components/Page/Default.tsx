import React,{CSSProperties,ReactElement} from 'react';
import {Wrapper}                          from './styles';
import Page                               from '@atlaskit/page';

const PageDefault=({style,children}: {style?: CSSProperties,children: ReactElement}) => {
  const css: CSSProperties=style||{margin:'2rem auto',maxWidth:'1200px'};
  return (
    <Wrapper>
      <Page bannerHeight={0}>
        <div style={css}>
          {children}
        </div>
      </Page>
    </Wrapper>
  );
};
export default PageDefault;
