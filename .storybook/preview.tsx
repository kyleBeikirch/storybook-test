import * as React from 'react'
import {addDecorator, addParameters} from '@storybook/react'
import {DocsContainer, DocsPage} from '@storybook/addon-docs/blocks'


addDecorator((Story) => (
  <Story />
))
// In config.js
// The order for the headers
const headers = [
  'Overview',
  'Atoms',
  'Molecules',
  'Organisms',
  '',
  'Example'
];

const storySort = (a, b) => {
  // a[1].kind is something like: Components|Accordion. Using "Components" for the headers array.
  // Using Components from ^^^
  const aHeader = a[1].kind.substr(0, a[1].kind.indexOf('/')) || '';
  const bHeader = b[1].kind.substr(0, b[1].kind.indexOf('/')) || '';

  if (aHeader !== bHeader) {
    // Comparing something like "components-accordion--main" to "getting-started-app--main".
    const aHeaderIndex = headers.findIndex(h => h === aHeader);
    const bHeaderIndex = headers.findIndex(h => h === bHeader);
    return aHeaderIndex > bHeaderIndex;
  }

  return 0;
  /* Or instead of `return 0` compare something like "components-accordion--small" to "components-accordion--large"
   * and sort the stories inside each component...
   */
  // return a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
};

addParameters({
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  viewMode: 'docs',
  options: {
    storySort
  }
})