import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../storiesHierarchy';
import { storySettings } from './storySettings';

import {%ComponentName%} from '../../../src/{%ComponentName%}';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);

TestStories.add('1. Test One', () => (
  <{%ComponentName%}
    dataHook="story-{%component-name%}-test-one"
    buttonText="Press me for a surprise"
  />
));
