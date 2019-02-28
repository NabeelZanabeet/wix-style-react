import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind, Category } from '../../storiesHierarchy';

import Input from '../../../src/Input';
import { NumberInput } from '../../../src';
import { testStories } from './storySettings';

const defaultProps = {
  value: '12345',
};

const kind = getTestStoryKind({
  category: Category.COMPONENTS,
  storyName: 'NumberInput',
});

storiesOf(kind, module).add(testStories.numberInputVariations, () => {
  return (
    <div>
      <br />
      <NumberInput dataHook="storybook-numberinput" {...defaultProps} />
      <br />
      <NumberInput
        size="small"
        dataHook="storybook-numberinput"
        {...defaultProps}
      />
      <br />
      <NumberInput
        size="large"
        dataHook="storybook-numberinput"
        {...defaultProps}
      />
      <br />
      <NumberInput
        dataHook="storybook-numberinput"
        {...defaultProps}
        prefix={<Input.Affix>#</Input.Affix>}
      />
      <br />
      <NumberInput
        dataHook="storybook-numberinput"
        {...defaultProps}
        suffix={<Input.Affix>#</Input.Affix>}
      />
      <br />
      <NumberInput
        dataHook="storybook-numberinput"
        {...defaultProps}
        prefix={<Input.Affix>#</Input.Affix>}
        status="error"
        suffix={<Input.Affix>$</Input.Affix>}
      />
      <br />
      <NumberInput
        dataHook="storybook-numberinput"
        {...defaultProps}
        prefix={<Input.Affix>#</Input.Affix>}
        disabled
        status="error"
        suffix={<Input.Affix>$</Input.Affix>}
      />
    </div>
  );
});
