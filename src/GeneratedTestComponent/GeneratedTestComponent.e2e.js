import {
  waitForVisibilityOf,
  scrollToElement,
} from 'wix-ui-test-utils/protractor';

import { eyesItInstance } from '../../test/utils/eyes-it';
import { createTestStoryUrl } from '../../test/utils/storybook-helpers';
import { generatedTestComponentTestkitFactory } from '../../testkit/protractor';
import { storySettings } from '../../stories/components/GeneratedTestComponent/storySettings';

const eyes = eyesItInstance();

describe('GeneratedTestComponent', () => {
  const stories = storySettings.testStories;

  const createStoryUrl = testName =>
    createTestStoryUrl({
      category: storySettings.category,
      storyName: storySettings.storyName,
      testName: testName,
    });

  const createDriver = async (dataHook = storySettings.dataHook) => {
    const driver = generatedTestComponentTestkitFactory({ dataHook });

    await waitForVisibilityOf(
      await driver.element(),
      `Cannot find <GeneratedTestComponent/> component with dataHook of ${dataHook}`,
    );

    await scrollToElement(await driver.element());

    return driver;
  };

  eyes.it('should increase count when button clicked', async () => {
    await browser.get(createStoryUrl(stories.DEFAULT));
    const driver = await createDriver();
    await driver.clickButton();
    expect(await driver.getCountText()).toBe('You clicked this button 1 times');
  });
});
