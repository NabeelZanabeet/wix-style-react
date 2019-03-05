/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { getTestStoryKind } from '../../../stories/storiesHierarchy';
import { storySettings, testStories } from './storySettings';
import { Layout, Cell } from '../../Layout';
import Slider from '..';

class ControlledSlider extends React.Component {
  constructor({ value }) {
    super();
    this.state = { value };
  }

  render() {
    const onChange = value => this.setState({ value });
    return (
      <Slider {...this.props} value={this.state.value} onChange={onChange} />
    );
  }
}

const kind = getTestStoryKind(storySettings);

storiesOf(kind, module).add(testStories.slider, () => (
  <div style={{ margin: '30px' }}>
    <Layout gap={'60px'}>
      <Cell>
        Single handle
        <ControlledSlider value={[3]} min={1} max={10} />
      </Cell>
      <Cell>
        Multiple handles
        <ControlledSlider
          dataHook={`${storySettings.dataHook}-multiple`}
          pushable={1}
          value={[3, 4, 5]}
          min={1}
          max={10}
        />
      </Cell>
      <Cell>
        Multiple handles
        <ControlledSlider value={3} min={1} max={10} disabled />
      </Cell>
    </Layout>
  </div>
));
