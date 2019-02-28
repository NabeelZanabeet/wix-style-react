import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { testkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';

export const numberInputDriverFactory = base => {
  const getInputDriver = () =>
    testkit(base.$('[data-hook="number-input-input"]'));
  const getTickerDriver = () =>
    tickerDriverFactory(base.$('[data-hook="number-input-ticker"]'));
  return {
    ...baseUniDriverFactory(base),

    /** Click on ticker up */
    clickOnIncrement: () => getTickerDriver().clickUp(),
    /** Click on ticker down */
    clickOnDecrement: () => getTickerDriver().clickDown(),
    /** Input value to component */
    enterValue: value => getInputDriver().enterValue(value),
    getValue: () => getInputDriver().getValue(),
  };
};
