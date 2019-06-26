import React         from 'react';
import {useTheme}    from '../theme-switcher';
import {LogoWrapper} from './styles';
import {PROFIRULogo} from '../../../../icons/logo';

const Logo=() => {
  const themeState: any=useTheme();
  const themeMode: 'light'|'dark'=themeState.mode;
  return (
    <LogoWrapper to={'/'}>
      <PROFIRULogo width={230} height={31} mode={themeMode}/>
    </LogoWrapper>
  );
};
export default Logo;
