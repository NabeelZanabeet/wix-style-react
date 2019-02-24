import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import NumberInput from './NumberInput';
import { numberInputPrivateDriverFactory } from './NumberInput.driver.private';

describe('NumberInput', () => {
  const createDriver = createUniDriverFactory(numberInputPrivateDriverFactory);

  it('should render', async () => {
    const driver = createDriver(<NumberInput />);
    expect(await driver.exists()).toBeTruthy();
  });

  it('should increment value', async () => {
    const value = 0,
      onChange = jest.fn();
    const div = document.createElement('div');
    document.body.appendChild(div);
    const input = <NumberInput onChange={onChange} value={value} />;
    const driver = createDriver(input);
    await driver.clickOnIncrement();
    expect(onChange.mock.calls[0][0].target).toEqual(
      expect.objectContaining({ value: '1' }),
    );
  });

  it('should decrement value', async () => {
    const value = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} />,
    );
    await driver.clickOnDecrement();
    expect(onChange.mock.calls[0][0].target).toEqual(
      expect.objectContaining({ value: '-1' }),
    );
  });

  it('should increment by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnIncrement();
    expect(onChange.mock.calls[0][0].target).toEqual(
      expect.objectContaining({ value: '0.1' }),
    );
  });

  it('should decrement by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnDecrement();
    expect(onChange.mock.calls[0][0].target).toEqual(
      expect.objectContaining({ value: '-0.1' }),
    );
  });

  it('should not allow incrementing above max value', async () => {
    const value = 1,
      max = 1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} max={max} />,
    );
    await driver.clickOnIncrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should not allow decrementing below min value', async () => {
    const value = -1,
      min = -1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} min={min} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).not.toHaveBeenCalled();
  });
});
