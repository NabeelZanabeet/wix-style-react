import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../storiesHierarchy';
import { storySettings } from './storySettings';

import {%ComponentName%} from '../../../src/{%ComponentName%}';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);
const { testStories: stories, dataHook } = storySettings;

TestStories.add(stories.DEFAULT, () => (
  <{%ComponentName%}
    dataHook={dataHook}
    buttonText="Press me for a surprise"
  />
));
