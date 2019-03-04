import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SliderHandle.scss';

import styles from './SliderHandle.st.css';

export default class SliderHandle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      dragging: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.clickFocus = this.clickFocus.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  clickFocus() {}

  handleMouseUp() {
    this.toggleTooltip(false);
    this.setState({ dragging: false });
  }

  handleMouseDown() {
    this.toggleTooltip(true);
    this.setState({ dragging: true });
  }

  handleMouseEnter() {
    this.toggleTooltip(true);
  }

  handleMouseLeave() {
    if (!this.state.dragging) {
      this.toggleTooltip(false);
    }
  }

  toggleTooltip(showTooltip) {
    const { displayTooltip } = this.props;
    this.setState({ showTooltip: displayTooltip && showTooltip });
  }

  render() {
    return (
      <div
        className={styles.handler}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        style={{ left: `${this.props.offset}%` }}
      >
        {this.state.showTooltip && (
          <div className={styles.tooltip}>{this.props.value}</div>
        )}
        <div className={styles.handlerInner} />
      </div>
    );
  }
}

SliderHandle.propTypes = {
  displayTooltip: PropTypes.bool,
  offset: PropTypes.number,
  value: PropTypes.number,
};

SliderHandle.defaultProps = {
  displayTooltip: true,
};
