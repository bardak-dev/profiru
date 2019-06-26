import {styled,withProps} from '../../../../styled/styled-components';

interface SwitchProps{
  mode: 'light'|'dark'
}

export const DarkModeSwitch=styled.button`
  position: relative;
  width: 30px;
  margin: 1rem .32rem 1rem;
  border: none;
  padding: 0;
  background: transparent;
  outline: none;
  cursor: pointer;
`;
export const DarkModeSwitchTrack=withProps<SwitchProps>()(styled.div)`
  position: absolute;
  border-radius: 16px;
  background: ${p => (p.mode==='light'? '#e3e8ee': '#212d63')};
  height: 12px;
  left: 0;
  right: 0;
  margin-top: 3px;
`;
export const DarkModeSwitchKnob=withProps<SwitchProps>()(styled.div)`
  position: relative;
  background: ${p => (p.mode==='light'? '#fff': '#1a1f36')};
  border-radius: 100%;
  box-shadow: ${p => (p.mode==='light'? '0 0 0 1px rgba(0,0,0,.07), 0 1px 3px 0 rgba(59,65,94,.1)': '0 0 0 1px #2f3d89')};
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${p => (p.mode==='light'? '0': '12px')});
  transition: transform .2s,background .2s;
`;
export const LightModeIcon=withProps<SwitchProps>()(styled.div)`
  color: #efc078;
  position: absolute;
  display: flex;
  transform: ${p => (p.mode==='light'? 'scaleX(1) scaleY(1) rotate(0deg)': 'scaleX(0) scaleY(0) rotate(90deg)')};
  transition: transform .2s;
  svg {
    fill: currentColor;
  }
`;
export const DarkModeIcon=withProps<SwitchProps>()(styled.div)`
  color: #7dabf8;
  position: absolute;
  display: flex;
  transform: ${p => (p.mode==='light'? 'scaleX(0) scaleY(0) rotate(-90deg)': 'scaleX(1) scaleY(1) rotate(0deg)')};
  transition: transform .2s;
  svg {
    fill: currentColor;
  }
`;

