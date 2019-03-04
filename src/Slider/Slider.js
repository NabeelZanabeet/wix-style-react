import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  renderRanger() {
    const marks = this.props.displayMarks ? this.getMarks() : {};
    const {
      displayTooltip,
      min,
      max,
      value,
      step,
      pushable,
      onChange,
      onAfterChange,
      allowCross,
    } = this.props;
    return (
      <Slide.Range
        handle={props => (
          <SliderHandle
            key={props.index}
            displayTooltip={displayTooltip}
            {...props}
          />
        )}
        min={min}
        max={max}
        value={value}
        marks={marks}
        step={step}
        pushable={pushable}
        onChange={onChange}
        onAfterChange={onAfterChange}
        allowCross={allowCross}
      />
    );
  }

  renderSlider() {
    const marks = this.props.displayMarks ? this.getMarks() : {};
    const {
      displayTooltip,
      min,
      max,
      value,
      step,
      onChange,
      onAfterChange,
    } = this.props;
    return (
      <Slide
        handle={props => (
          <SliderHandle
            key={props.index}
            displayTooltip={displayTooltip}
            {...props}
          />
        )}
        min={min}
        max={max}
        value={value}
        marks={marks}
        step={step}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    );
  }

  render() {
    const { dataHook, value } = this.props;
    return (
      <div
        className={classNames('wix-slider', { rtl: this.props.rtl })}
        id={this.props.id}
        data-hook={dataHook}
      >
        {Array.isArray(value) && value.length > 1
          ? this.renderRanger()
          : this.renderSlider()}
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
  value: PropTypes.arrayOf(PropTypes.number),
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
