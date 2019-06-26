import React                              from 'react';
import Spinner                            from '@atlaskit/spinner';
import {StyledLoader,StyledLoaderWrapper} from './styles';

const Loader=() => (
  <StyledLoaderWrapper>
    <StyledLoader>
      <Spinner size="large" delay={0} isCompleting={false} invertColor={false} onComplete={undefined}/>
    </StyledLoader>
  </StyledLoaderWrapper>
);
export default Loader;
