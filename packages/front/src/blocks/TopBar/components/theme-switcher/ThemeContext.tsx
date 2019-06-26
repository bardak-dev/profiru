import React                                  from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {theme}                                from '../../../../styled/theme';
import {AtlaskitThemeProvider}                from '@atlaskit/theme';

interface ThemeContextData{
  mode: 'light'|'dark',
  toggleTheme: () => void
}

const ThemeContext=React.createContext<ThemeContextData>({
  mode:'light',
  toggleTheme:() => {
  }
});
const useTheme=() => React.useContext(ThemeContext);
const useEffectDarkMode: any=() => {
  const [themeState,setThemeState]=React.useState({
    mode:'light',
    hasThemeMounted:false
  });
  React.useEffect(() => {
    const mode=localStorage.getItem('mode')==='dark'? 'dark': 'light';
    setThemeState({...themeState,mode,hasThemeMounted:true});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return [themeState,setThemeState];
};
const ThemeProvider=({children}) => {
  const [themeState,setThemeState]=useEffectDarkMode();
  if(!themeState.hasThemeMounted){
    return <div/>;
  }
  const themeMode: 'light'|'dark'=themeState.mode==='dark'? 'dark': 'light';
  const toggleTheme=() => {
    const changeThemeMode=themeMode==='light'? 'dark': 'light';
    localStorage.setItem('mode',changeThemeMode);
    setThemeState({...themeState,mode:changeThemeMode});
  };
  const computedTheme=themeMode==='dark'? theme('dark'): theme('light');
  return (
    <StyledThemeProvider theme={computedTheme}>
      <AtlaskitThemeProvider mode={themeMode}>
        <ThemeContext.Provider value={{mode:themeMode,toggleTheme}}>
          {children}
        </ThemeContext.Provider>
      </AtlaskitThemeProvider>
    </StyledThemeProvider>
  );
};
export {ThemeProvider,useTheme};
