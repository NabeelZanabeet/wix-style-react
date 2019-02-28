import { storySettings } from './storySettings';
import {
  tab,
  code as baseCode,
  importExample,
  api,
  testkit,
  playground,
} from 'wix-storybook-utils/Sections';
import { baseScope } from '../../utils/Components/LiveCodeExample';
import * as examples from './examples';

import NumberInput from 'wix-style-react/NumberInput';

const code = config => baseCode({ components: baseScope, ...config });

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,
  component: NumberInput,
  componentPath: '../../../src/NumberInput/NumberInput.js',

  componentProps: {
    step: 1,
    min: -5,
    max: 5,
  },

  exampleProps: {
    onChange: e => e.target.value,
  },

  sections: [
    tab({
      title: 'Usage',
      sections: [
        importExample({
          source: "import NumberInput from 'wix-style-react/NumberInput';",
        }),
        code({ title: 'Standard', source: examples.standard }),
        code({ title: 'Error', source: examples.error }),
        code({ title: 'Affix', source: examples.affix }),
        code({ title: 'Icon Affix', source: examples.iconAffix }),
        code({ title: 'Sizes', source: examples.sizes }),
        code({ title: 'Rounded', source: examples.rounded }),
      ],
    }),

    ...[
      { title: 'API', sections: [api()] },
      { title: 'TestKit', sections: [testkit()] },
      { title: 'Playground', sections: [playground()] },
    ].map(tab),
  ],
};
