import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../storiesHierarchy';
import { storySettings } from './storySettings';

import GeneratedTestComponent from '../../../src/GeneratedTestComponent';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);
const { testStoryNames, dataHook } = storySettings;

TestStories.add(testStoryNames.DEFAULT, () => (
  <GeneratedTestComponent
    dataHook={dataHook}
    buttonText="Press me for a surprise"
  />
));
