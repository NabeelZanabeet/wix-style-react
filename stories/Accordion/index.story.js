import React from 'react';
import { storySettings } from './storySettings';
import LiveCodeExample from '../utils/Components/LiveCodeExample';

import Accordion from '../../src/Accordion';
import Text from '../../src/Text';
import RichTextArea from '../../src/RichTextArea';
import { InfoCircle, AdminAccess } from '../../src/new-icons';

const exampleData = [
  {
    label: 'Simple data',
    value: [
      {
        title: 'First Item',
        icon: <InfoCircle />,
        expandLabel: 'More',
        collapseLabel: 'Less',
        content: (
          <Text>
            lauren ipsum lauren ipsum lauren ipsum lauren ipsum lauren ipsum
            lauren ipsum lauren ipsum lauren ipsum
          </Text>
        ),
      },
      {
        title: 'Second Item',
        icon: <AdminAccess />,
        expandLabel: 'More',
        collapseLabel: 'Less',
        content: (
          <Text>
            lauren ipsum lauren ipsum lauren ipsum lauren ipsum lauren ipsum
            lauren ipsum lauren ipsum lauren ipsum
          </Text>
        ),
      },
      {
        title: 'Third Item',
        expandLabel: 'More',
        collapseLabel: 'Less',
        content: <RichTextArea />,
      },
    ],
  },
];

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: Accordion,
  componentPath: '../../src/Accordion/Accordion.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    data: exampleData[0].value,
  },

  exampleProps: {
    data: exampleData,
  },

  examples: (
    <div style={{ maxWidth: 627 }}>
      <LiveCodeExample
        compact
        title="Card with Accordion"
        initialCode={`
          <Card>
            <Card.Header title="Example Card with Accordion"/>
            <Accordion
              dataHook="story-accordion-live-example"
              data={
                [
                  {
                    title: 'First Item',
                    icon: <InfoCircle />,
                    expandLabel: 'More',
                    collapseLabel: 'Less',
                    content: (
                      <Text>
                        lauren ipsum lauren ipsum lauren ipsum lauren ipsum lauren ipsum
                        lauren ipsum lauren ipsum lauren ipsum
                      </Text>
                    ),
                  }
                ]
              }
              />
          </Card>
        `}
      />
    </div>
  ),
};
