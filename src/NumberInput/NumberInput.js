import React from 'react';
import Input from '../Input';

class NumberInput extends React.PureComponent {
  static displayName = 'NumberInput';

  state = {
    value: '',
  };

  componentWillReceiveProps({ value }) {
    this.setState(currentState => {
      return {
        ...currentState,
        value: value || '',
      };
    });
  }

  _isInRange(value) {
    const { min, max } = this.props;
    if (!isNaN(min) && value < min) {
      return false;
    }
    if (!isNaN(max) && value > max) {
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
    const { value, step } = this.props,
      numberValue = parseFloat(value || this.inputDOM.value) || 0,
      numberStep = step,
      updatedValue = operator(numberValue, numberStep);
    if (this._isInRange(updatedValue)) {
      this._triggerOnChange(updatedValue);
    }
  }

  _triggerOnChange(value) {
    const { onChange } = this.props;
    this.setState(
      currentState => {
        return {
          ...currentState,
          value,
        };
      },
      () => {
        onChange && onChange(this.state.value);
      },
    );
  }

  _inputValueChanged = e => {
    return this._triggerOnChange(e.target.value);
  };

  _getInputRef = ref => {
    const { inputRef } = this.props;
    this.inputDOM = ref;
    if (inputRef) {
      inputRef(ref);
    }
  };

  render() {
    const { dataHook, suffix, ...props } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          dataHook="number-input-input"
          {...props}
          type="number"
          value={this.state.value}
          onChange={this._inputValueChanged}
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
