import React from 'react';
import {
  tabs,
  tab,
  description,
  api,
  testkit,
  importExample,
  header,
  columns,
  title,
  divider,
  playground,
  code as baseLiveCode,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../utils/Components/LiveCodeExample';
import * as examples from './examples';

import Slider from 'wix-style-react/Slider';

const liveCode = config =>
  baseLiveCode({
    compact: true,
    components: baseScope,
    ...config,
  });

const example = ({ title, text, source }) =>
  columns([description({ title, text }), liveCode({ source })]);

export default {
  category: '4. Selection',
  storyName: '4.7 Slider',

  component: Slider,
  componentPath: '../../src/Slider',

  sections: [
    header({
      component: (
        <div style={{ width: '50%', padding: '10px' }}>
          <Slider
            onChange={() => {}}
            value={4}
            displayMarks={false}
            displayTooltip={false}
          />
        </div>
      ),

      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            `🐍 Sliders allow users to make selections from a range of values.`,
          ),

          importExample({
            source: "import Slider from 'wix-style-react/Slider';",
          }),

          description({
            title: 'Usage',
            text: `Slider is controlled component. User needs to control Slider's state.`,
          }),

          divider(),

          title('Examples'),

          ...[
            {
              title: 'Single Value',
              text: 'Single value slider.',
              source: examples.plainExample,
            },
            {
              title: 'Multi Value',
              text: 'Usually used for user to select the range.',
              source: examples.rangeSlider,
            },
          ].map(example),
        ],
      }),

      tab({
        title: 'API',
        sections: [api()],
      }),

      tab({
        title: 'Testkit',
        sections: [testkit()],
      }),

      tab({
        title: 'Playground',
        sections: [playground()],
      }),
    ]),
  ],
};
