import React from 'react';
import { storiesOf } from '@storybook/react';
import { getTestStoryKind } from '../../storiesHierarchy';
import { storySettings } from './storySettings';

import GeneratedTestComponent from '../../../src/GeneratedTestComponent';

const TestStories = storiesOf(getTestStoryKind(storySettings), module);

TestStories.add('Test One', () => (
  <GeneratedTestComponent
    dataHook="story-generated-test-component-test-one"
    buttonText="Press me for a surprise"
  />
));
