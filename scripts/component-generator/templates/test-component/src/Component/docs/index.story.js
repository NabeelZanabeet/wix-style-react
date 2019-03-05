import React from 'react';

import {
  header,
  tabs,
  tab,
  importExample,
  columns,
  title,
  description,
  code as baseCode,
  api,
  testkit,
  playground
} from 'wix-storybook-utils/Sections';

import { storySettings } from './storySettings';
import { baseScope } from '../../../stories/utils/Components/LiveCodeExample';

import {%ComponentName%} from '..';

const code = config =>
  baseCode({
    components: { ...baseScope, {%ComponentName%} },
    compact: true,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: {%ComponentName%},
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    buttonText: undefined,
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      component: <{%ComponentName%}/>,
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Short text about component',
            }),
          ]),

          columns([
            importExample({
              source: "import {%ComponentName%} from 'wix-style-react/{%ComponentName%}';",
            }),
          ]),

          title('Examples'),

          code({
            source: `<{%ComponentName%}
  dataHook="story-{%component-name%}-live-example"
  buttonText="Press me for a surprise"
/>`
          }),
        ]
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] }
      ].map(tab)
    ])
  ]
};
