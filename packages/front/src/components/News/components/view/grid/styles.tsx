import {keyframes,styled,withProps} from '../../../../../styled/styled-components';

const show=keyframes`
  from {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    top: 0px;
    opacity: 1;
  }
`;
const WrapperStyle=`
  display: inline-block;
  cursor: pointer;
  position: relative;
  opacity: 0;
  top: 30px;
  box-sizing: border-box;
  text-align: left;
  z-index: 100;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  background-size: contain;
  border-radius: 3px;
  overflow: hidden;
  margin: 10px 8px;
  background-repeat: no-repeat;
  animation: 0.3s cubic-bezier(0.15, 1, 0.33, 1) 0.3s 1 normal forwards running ${show};
  transition: opacity 0.3s cubic-bezier(0.15, 1, 0.33, 1) 0s;
  background-position: center bottom;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(23, 43, 77, 0.32) 0px 4px 8px -2px, rgba(23, 43, 77, 0.25) 0px 0px 1px;
  }
`;
export const WrapperDiv=styled.div`
  ${WrapperStyle}
  color: ${p => p.theme.colors.textColor};
  background-color: ${p => p.theme.colors.cardBackground};
`;
export const HeaderWrapper=styled.div`
  padding: 16px 24px;
  margin-bottom: auto;
`;
export const Header=styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.35rem;
  color: ${p => p.theme.colors.primaryTextColor}
`;
export const Description=styled.div`
  color: ${p => p.theme.colors.secondTextColor};
  font-size: 1rem;
  line-height: 1.35rem;
  margin-top: 12px;
`;
export const IconWrapper=withProps<{color?: string}>()(styled.span)`
  align-items: center;
  background-color: ${p => p.color||'#fff'};
  display: flex;
  height: 24px;
  justify-content: center;
  margin-right: 8px;
  width: 24px;
  border-radius: 4px;
  border: 2px solid transparent;
`;
export const Image=withProps<{url: string}>()(styled.div)`
  display: block;
  height: 172px;
  margin: 0px auto 10px;
  background-image: url(${p => p.url}?auto=format&fit=crop&w=350&q=80);
  background-color: #f0f0f0;
  background-size: cover;
  background-origin: border-box;
  background-position: 50% 50%;
  display: block;
  border: 1px solid rgba(0,0,0,.15);
`;
