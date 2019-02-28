import React from 'react';
import { createUniDriverFactory } from 'wix-ui-test-utils/uni-driver-factory';
import NumberInput from './NumberInput';
import { numberInputPrivateDriverFactory } from './NumberInput.private.uni.driver';

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
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it('should decrement value', async () => {
    const value = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).toHaveBeenCalledWith(-1);
  });

  it('should increment by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnIncrement();
    expect(onChange).toHaveBeenCalledWith(0.1);
  });

  it('should decrement by given step', async () => {
    const value = 0,
      step = 0.1,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} step={step} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).toHaveBeenCalledWith(-0.1);
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

  it('should allow max value to equal 0', async () => {
    const value = 0,
      max = 0,
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

  it('should allow min value to equal 0', async () => {
    const value = 0,
      min = 0,
      onChange = jest.fn();
    const driver = createDriver(
      <NumberInput onChange={onChange} value={value} min={min} />,
    );
    await driver.clickOnDecrement();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should work in uncontrolled mode', async () => {
    const onChange = jest.fn();
    const driver = createDriver(<NumberInput onChange={onChange} />);
    await driver.clickOnIncrement();
    expect(onChange).toHaveBeenCalledWith(1);
  });
});
