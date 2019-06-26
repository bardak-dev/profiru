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
export const WrapperDiv=styled.div`
  color: ${p => p.theme.colors.textColor};
  background-color: ${p => p.theme.colors.cardBackground};
  display: flex;
  min-height: 172px;
  align-items: stretch;
  flex: 1 1 auto;
  cursor: pointer;
  position: relative;
  opacity: 0;
  top: 30px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  z-index: 100;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  background-size: contain;
  border-radius: 3px;
  overflow: hidden;
  margin: 0.5rem auto 1.22rem;
  background-repeat: no-repeat;
  animation: 0.3s cubic-bezier(0.15, 1, 0.33, 1) 0.3s 1 normal forwards running ${show};
  transition: opacity 0.3s cubic-bezier(0.15, 1, 0.33, 1) 0s;
  background-position: center bottom;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(23, 43, 77, 0.32) 0px 4px 8px -2px, rgba(23, 43, 77, 0.25) 0px 0px 1px;
  }
`;
export const HeaderWrapper=styled.div`
  padding: 16px 40% 16px 24px;
  margin-bottom: auto;
  flex: 1 1 auto;
`;
export const Header=styled.div`
  color: ${p => p.theme.colors.primaryTextColor}
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.35rem;
`;
export const Description=styled.div`
  color: ${p => p.theme.colors.secondTextColor};
  font-size: 1rem;
  line-height: 1.35rem;
  margin-top: 12px;
`;
export const Image=withProps<{url: string}>()(styled.div)`
  background-image: url(${p => p.url}?auto=format&fit=crop&w=350&q=80);
  display: block;
  height: 172px;
  flex: 0 0 auto;
  width: 35%;
  margin: 0;
  background-color: #f0f0f0;
  background-size: cover;
  background-origin: border-box;
  background-position: 50% 50%;
  display: block;
  border: 1px solid rgba(0,0,0,.15);
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  position: absolute;
`;
export const ImageOverlay=withProps<{url: string}>()(styled.div)`
  background-image: url(${p => p.url}?auto=format&fit=crop&w=350&q=80&blur=80);
  display: block;
  width: 60%;
  height: 100%;
  background-size: cover;
  background-origin: border-box;
  background-position: 50% 50%;
  position: absolute;
  z-index: -1;
  right: 0;
  :after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(to left, ${p => p.theme.mode==='dark'? '#1e2b440a, #1e2b44': '#ffffff00,#ffffff'});
    position: absolute;
    z-index: 1;
    right: 0;
  }
`;
