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

import GeneratedTestComponent from '..';

const code = config =>
  baseCode({
    components: { ...baseScope, GeneratedTestComponent },
    compact: true,
    ...config,
  });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: GeneratedTestComponent,
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
      component: <GeneratedTestComponent/>,
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
              source: "import GeneratedTestComponent from 'wix-style-react/GeneratedTestComponent';",
            }),
          ]),

          title('Examples'),

          code({
            source: `<GeneratedTestComponent
  dataHook="story-generated-test-component-live-example"
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
