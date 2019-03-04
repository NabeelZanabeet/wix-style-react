import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../storiesHierarchy';
import { storySettings } from './storySettings';

import GeneratedTestComponent from '../../../src/GeneratedTestComponent';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);
const { testStories: stories, dataHook } = storySettings;

TestStories.add(stories.DEFAULT, () => (
  <GeneratedTestComponent
    dataHook={dataHook}
    buttonText="Press me for a surprise"
  />
));
