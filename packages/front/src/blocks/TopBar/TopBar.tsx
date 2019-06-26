import React                        from 'react';
import {StyledTopBar,StyledWrapper} from './styles';
import Logo                         from './components/logo/Logo';
import ThemeSwitcher                from './components/theme-switcher/ThemeSwither';

const TopBar=() => {
  return (
    <StyledTopBar>
      <StyledWrapper>
        <Logo/>
        <ThemeSwitcher/>
      </StyledWrapper>
    </StyledTopBar>
  );
};
export default TopBar;
