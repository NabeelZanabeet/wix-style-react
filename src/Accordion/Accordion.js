import React from 'react';
import PropTypes from 'prop-types';
import styles from './Accordion.scss';
import AccordionItem from './AccordionItem';

class Accordion extends React.Component {
  static displayName = 'Accordion';

  static propTypes = {
    dataHook: PropTypes.string,

    /** accordion data nodes */
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.node,
        icon: PropTypes.node,
        content: PropTypes.node,
        expandLabel: PropTypes.node,
        collapseLabel: PropTypes.node,
      }),
    ),
  };

  state = {
    openId: null,
  };

  _toggle = id => {

    this.setState({
      openId: this.state.openId !== id ? id : -1,
    });
  };

  _toggleRow = id => {
    this.setState({
      openId: id,
    });
  }

  render() {
    const { openId } = this.state;
    const { dataHook, data } = this.props;

    return (
      <div className={styles.root} data-hook={dataHook}>
        {data &&
          data.map((row, index) => (
            <div className={styles.rowWrapper} key={index}>
              <AccordionItem
                dataHook="accordion-item"
                id={index}
                toggleOpenClose={this._toggle}
                toggleOpen={this._toggleRow}
                {...row}
                isOpen={openId === index}
              />
            </div>
          ))}
      </div>
    );
  }
}

export default Accordion;