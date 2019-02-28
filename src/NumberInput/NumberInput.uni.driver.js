import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';

export const numberInputDriverFactory = base => {
  const getTickerDriver = () =>
    tickerDriverFactory(base.$('[data-hook="number-input-ticker"]'));
  const getInputElement = () => base.$('[data-hook="wsr-input"]');
  return {
    ...baseUniDriverFactory(base),

    /** Click on ticker up */
    clickOnIncrement: () => getTickerDriver().clickUp(),
    /** Click on ticker down */
    clickOnDecrement: () => getTickerDriver().clickDown(),
    /** Input value to component */
    enterValue: value => getInputElement().enterValue(value),
    getValue: () => getInputElement().value(),
  };
};
