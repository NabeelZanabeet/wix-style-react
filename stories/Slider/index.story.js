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
  divider,
  code as baseLiveCode,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../utils/Components/LiveCodeExample';
import * as examples from './examples';

import Slider from 'wix-style-react/Slider';

const liveCode = config =>
  baseLiveCode({
    compact: true,
    components: { ...baseScope },
    ...config,
  });

const example = ({ title, text, source }) =>
  columns({
    items: [description({ title, text }), liveCode({ source })],
  });

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

    tabs({
      tabs: [
        tab({
          title: 'Description',
          sections: [
            description({
              text: `🐍 Sliders allow users to make selections from a range of values.`,
            }),

            importExample({
              source: "import Slider from 'wix-style-react/Slider';",
            }),

            description({
              title: 'Usage',
              text: `Slider is controlled component. User needs to control Slider's state.`,
            }),

            divider(),
            columns({
              items: [
                description({
                  text: '### Examples',
                }),
                description(),
              ],
            }),

            ...[
              {
                title: 'Single Slider',
                source: examples.plainExample,
              },
              {
                title: 'Multi Slider',
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
      ],
    }),
  ],
};
