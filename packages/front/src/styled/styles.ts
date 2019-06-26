import {injectGlobal}     from 'styled-components';
import baseStyles         from './reset';
import browserFixesStyles from '@atlaskit/css-reset/browser-fixes';
import resetStyles        from '@atlaskit/css-reset/reset';
import tableStyles        from '@atlaskit/css-reset/tables';
import utilStyles         from '@atlaskit/css-reset/utils';

injectGlobal`
${resetStyles}
${baseStyles}
${tableStyles}
${browserFixesStyles}
${utilStyles}
body {
  font: 0.8125rem Soleil,-apple-system,BlinkMacSystemFont,
  "Segoe UI","Helvetica Neue",Helvetica,Arial,"Open Sans",
  sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  color: #3d556b;
  font-size: 0.875rem;
  line-height: 1.125rem;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
