import React from 'react';
import Input from '../Input';

class NumberInput extends React.PureComponent {
  static displayName = 'NumberInput';

  inputDOM;

  _isInRange(value) {
    const { min, max } = this.props;
    if (min && value < min) {
      return false;
    }
    if (max && value > max) {
      return false;
    }
    return true;
  }

  _increment = () => {
    this._applyChange((value, step) => value + step);
  };

  _decrement = () => {
    this._applyChange((value, step) => value - step);
  };

  _applyChange(operator) {
    const { value, onChange, step } = this.props,
      numberValue = parseFloat(value || this.inputDOM.value) || 0,
      numberStep = step,
      updatedValue = operator(numberValue, numberStep);
    if (onChange && this._isInRange(updatedValue)) {
      this._triggerOnChange(updatedValue);
    }
  }

  _triggerOnChange(value) {
    const { onChange } = this.props;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    nativeInputValueSetter.call(this.inputDOM, value);
    const event = new Event('change', { bubbles: true });
    Object.defineProperty(event, 'target', {
      writable: false,
      value: this.inputDOM,
    });
    onChange(event);
  }

  _getInputRef = ref => {
    const { inputRef } = this.props;
    this.inputDOM = ref;
    if (inputRef) {
      inputRef(ref);
    }
  };

  render() {
    const { dataHook, suffix, value, onChange, ...props } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          {...props}
          type="number"
          value={value}
          onChange={onChange}
          inputRef={this._getInputRef}
          suffix={
            <Input.Group>
              {suffix}
              <Input.Ticker
                onUp={this._increment}
                onDown={this._decrement}
                dataHook="number-input-ticker"
              />
            </Input.Group>
          }
        />
      </div>
    );
  }
}

NumberInput.propTypes = {
  ...Input.propTypes,
};

NumberInput.defaultProps = {
  ...Input.defaultProps,
  step: 1,
};
export default NumberInput;
