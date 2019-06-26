interface ThemeInterface{
  mode: 'light'|'dark'
}

export interface ThemeInterfaceLight extends ThemeInterface{
  colors: ColorsLight,
}

export interface ThemeInterfaceDark extends ThemeInterface{
  colors: ColorsDark,
}

interface ColorsLight{
  background: '#fff'
  cardBackground: '#fff'
  textColor: '#091E42'
  secondTextColor: 'rgba(0,0,0,.54)'
  primaryTextColor: '#091E42'
}

interface ColorsDark{
  background: '#191e36'
  cardBackground: '#1e2b44'
  textColor: '#B8C7E0'
  secondTextColor: '#A1AEC3',
  primaryTextColor: '#DEE6F3'
}

export const colorsLight: ColorsLight={
  background:'#fff',
  cardBackground:'#fff',
  textColor:'#091E42',
  secondTextColor:'rgba(0,0,0,.54)',
  primaryTextColor:'#091E42'
};
export const colorsDark: ColorsDark={
  background:'#191e36',
  cardBackground:'#1e2b44',
  textColor:'#B8C7E0',
  secondTextColor:'#A1AEC3',
  primaryTextColor:'#DEE6F3'
};
export const theme: (mode: ('dark'|'light')) => ThemeInterfaceLight|ThemeInterfaceDark=(mode: 'dark'|'light') => Object.assign({
  mode
},mode==='dark'? {
  colors:colorsDark
}: {
  colors:colorsLight
});
