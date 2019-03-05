import React, { Component } from 'react';
import PropTypes, { oneOfType, arrayOf, number } from 'prop-types';
import Slide from 'rc-slider';
import uniqueId from 'lodash/uniqueId';
import SliderHandle from './SliderHandle';
import classNames from 'classnames';
import './Slider.scss';

/**
 * A slider component with multi-range support
 */
export default class Slider extends Component {
  getRange() {
    const { min, max, step } = this.props;
    const range = [];

    for (let i = min; i <= max; i += step) {
      range.push(i);
    }

    return range;
  }

  renderLabel(value) {
    const { min, max } = this.props;

    return (
      <div className="mark">
        <div className="mark-line" />
        <div className="mark-value">
          {(value === min || value === max) && <div>{value}</div>}
        </div>
      </div>
    );
  }

  getMarks() {
    return this.getRange().reduce((acc, cur) => {
      acc[cur] = {
        label: this.renderLabel(cur),
      };

      return acc;
    }, {});
  }

  renderHandle = props => {
    const { rtl, displayTooltip, disabled } = this.props;
    return (
      <SliderHandle
        key={props.index}
        rtl={rtl}
        displayTooltip={displayTooltip}
        disabled={disabled}
        {...props}
      />
    );
  };

  renderSlider = () => {
    const {
      pushable,
      allowCross,
      value,
      displayMarks,
      dataHook,
      id,
      ...rest
    } = this.props;
    return Array.isArray(value) && value.length > 1 ? (
      <Slide.Range
        {...rest}
        handle={this.renderHandle}
        marks={displayMarks ? this.getMarks() : {}}
        value={value}
        pushable={pushable}
        allowCros={allowCross}
      />
    ) : (
      <Slide
        {...rest}
        handle={this.renderHandle}
        marks={displayMarks ? this.getMarks() : {}}
        value={Array.isArray(value) ? value[0] : value}
      />
    );
  };

  render() {
    const { dataHook, id } = this.props;
    return (
      <div className={classNames('wix-slider')} id={id} data-hook={dataHook}>
        {this.renderSlider()}
      </div>
    );
  }
}

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Allows the slider's handles to cross. */
  allowCross: PropTypes.bool,
  dataHook: PropTypes.string,

  /** Controls the visibility of the marks. */
  displayMarks: PropTypes.bool,

  /** Controls visibility of slide handle tooltip */
  displayTooltip: PropTypes.bool,
  id: PropTypes.string,

  /** The absolute maximum of the slider's range */
  max: PropTypes.number,

  /** The absolute minimum of the slider's range */
  min: PropTypes.number,

  /** Called after every value change */
  onAfterChange: PropTypes.func,

  /** Called upon every value change */
  onChange: PropTypes.func.isRequired,

  /** Adjust for RTL dir. */
  rtl: PropTypes.bool,

  /** The slider's step */
  step: PropTypes.number,

  /** Allow pushing of surrounding handles when moving a handle. Number means a minimum distance between handles */
  pushable: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /** The slider's selected range */
  value: oneOfType([arrayOf(PropTypes.number), number]),
};

Slider.defaultProps = {
  min: 1,
  max: 20,
  step: 1,
  value: [2, 7],
  allowCross: true,
  id: uniqueId(),
  displayTooltip: true,
  displayMarks: true,
  rtl: false,
};
